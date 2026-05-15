import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {

  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
  }

  // CADASTRO
  async cadastrar(nome: string, email: string, senha: string) {
    const { data, error } = await this.supabase.auth.signUp({
      email,
      password: senha
    });

    if (error) throw error;

    // Salva o nome e dataCriacao na tabela perfis
    const { error: perfilError } = await this.supabase
      .from('perfis')
      .insert({
        id: data.user!.id,
        nome,
        email,
        dataCriacao: new Date().toISOString()
      });

    if (perfilError) throw perfilError;

    return data;
  }

  // LOGIN
  async login(email: string, senha: string) {
    const { data, error } = await this.supabase.auth.signInWithPassword({
      email,
      password: senha
    });

    if (error) throw error;
    return data;
  }

  // LOGOUT
  async logout() {
    const { error } = await this.supabase.auth.signOut();
    if (error) throw error;
  }

  // USUÁRIO LOGADO
  async getUsuarioAtual() {
    const { data } = await this.supabase.auth.getUser();
    return data.user;
  }

  async getPerfil(userId: string) {
  const { data, error } = await this.supabase
    .from('perfis')
    .select('*')
    .eq('id', userId)
    .single();

  if (error) throw error;
  return data;
  }

}