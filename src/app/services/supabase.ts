import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
  }

  // 1. Busca as expedições de uma profissão específica
async getExpedicoesPorProfissao(profissaoId: string) {
  const { data, error } = await this.supabase
    .from('expedicoes')
    .select(`
      id,
      nome,
      nível_mínimo,
      descricao,
      imagem_url, 
      drops!id_expedicao (
        raridade,
        itens_expd!id_item ( nome )
      )
    `) 
    .eq('profissao_id', profissaoId)
    .order('nível_mínimo', { ascending: true });

  if (error) {
    console.error("Erro na busca de expedições:", error.message);
    throw error;
  }
  return data as any[];
}

  // 2. Busca os DROPS de uma expedição (já trazendo o nome do item da outra tabela)
  async getDropsPorExpedicao(expId: string) {
    const { data, error } = await this.supabase
      .from('drops')
      .select(`
        raridade,
        itens_expd (
          nome,
          descricao
        )
      `)
      .eq('id_expedicao', expId);
    
    if (error) throw error;
    return data;
  }

  // 3. Busca as receitas de uma profissão
async getReceitasPorProfissao(profId: string) {
  const { data, error } = await this.supabase
    .from('receitas')
    .select(`
      id,
      item_receita_id,
      itens_fabricacao!item_receita_id ( nome ),
      receita_ingredientes (
        quantidade,
        itens_expd!item_id ( nome )
      )
    `)
    .eq('profissao_id', profId);

  if (error) throw error;

  return data.sort((a: any, b: any) => {
    const nomeA = a.itens_fabricacao?.nome || '';
    const nomeB = b.itens_fabricacao?.nome || '';
    return nomeA.localeCompare(nomeB);
  });
}

async getItensPorProfissao(profId: string) {
  // 1. Buscamos os drops. Note que usamos o ! inner para filtrar apenas os que batem com a profissão
  const { data, error } = await this.supabase
    .from('drops')
    .select(`
      id_item,
      itens_expd!id_item ( nome, descricao ),
      expedicoes!inner ( nome, profissao_id )
    `)
    .eq('expedicoes.profissao_id', profId);

  if (error) {
    console.error("Erro Supabase Itens:", error.message);
    throw error;
  }

  console.log("DADOS BRUTOS DO BANCO:", data); // Isso vai nos mostrar se o banco trouxe algo

  const mapaItens = new Map();

  if (data) {
    data.forEach((registro: any) => {
      const id = registro.id_item;
      // Verificamos se o item e a expedição existem no registro para evitar erros
      if (registro.itens_expd && registro.expedicoes) {
        if (!mapaItens.has(id)) {
          mapaItens.set(id, {
            nome: registro.itens_expd.nome,
            descricao: registro.itens_expd.descricao,
            ondeEncontrar: [registro.expedicoes.nome]
          });
        } else {
          const itemExistente = mapaItens.get(id);
          if (!itemExistente.ondeEncontrar.includes(registro.expedicoes.nome)) {
            itemExistente.ondeEncontrar.push(registro.expedicoes.nome);
          }
        }
      }
    });
  }

  const resultadoFinal = Array.from(mapaItens.values()).sort((a: any, b: any) => 
    (a.nome || '').localeCompare(b.nome || '')
  );

  console.log("RESULTADO PROCESSADO:", resultadoFinal);
  return resultadoFinal;
}
}

