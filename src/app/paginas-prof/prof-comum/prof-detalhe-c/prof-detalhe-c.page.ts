import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importante para o *ngIf e *ngFor
import { ActivatedRoute } from '@angular/router';
import { SupabaseService } from 'src/app/services/supabase';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, 
  IonBackButton, IonList, IonListHeader, IonLabel, IonItem, 
  IonIcon, IonBadge, IonButton 
} from '@ionic/angular/standalone'; // Todos os componentes que o HTML reclamou
import { addIcons } from 'ionicons';
import { 
  chevronDownCircle, 
  chevronForwardCircle, 
  chevronDownOutline, 
  chevronForwardOutline, 
  bagHandleOutline, flaskOutline, mapOutline } from 'ionicons/icons';

@Component({
  selector: 'app-prof-detalhe-c',
  templateUrl: './prof-detalhe-c.page.html',
  styleUrls: ['./prof-detalhe-c.page.scss'],
  standalone: true,
  imports: [
    CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, 
    IonButtons, IonBackButton, IonList, IonListHeader, IonLabel, 
    IonItem, IonIcon, IonBadge, IonButton
  ]
})
export class ProfDetalheCPage implements OnInit {
  profId: string | null = '';
  expedicoes: any[] = [];
  exibirExpedicoes: boolean = false;
  itemExpandido: any = null;
  receitas: any[] = [];
exibirReceitas: boolean = false;
recExpandida: any = null;
  itensColetaveis: any[] = [];
  exibirItens: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private supabase: SupabaseService
  ) { 
    addIcons({bagHandleOutline,flaskOutline,mapOutline,
      chevronDownCircle,chevronForwardCircle,chevronDownOutline,
      chevronForwardOutline});
  }
  
  async ngOnInit() {
    this.profId = this.route.snapshot.paramMap.get('id');
    if (this.profId) {
      await this.carregarDados();
    }
  }

async carregarDados() {
    try {
      this.expedicoes = await this.supabase.getExpedicoesPorProfissao(this.profId!);
      this.receitas = await this.supabase.getReceitasPorProfissao(this.profId!);
      this.itensColetaveis = await this.supabase.getItensPorProfissao(this.profId!);
      
      // Logs para conferir no F12 do navegador
      console.log("EXPEDIÇÕES:", this.expedicoes);
      console.log("RECEITAS:", this.receitas);
      console.log("ITENS COLETÁVEIS:", this.itensColetaveis);
      console.log("ITENS CARREGADOS COM SUCESSO:", this.itensColetaveis);
      
    } catch (error) {
      console.error('Erro ao carregar dados de Tharyndor:', error);
    }
  }

  toggleDetalhe(item: any) {
    this.itemExpandido = this.itemExpandido === item ? null : item;
  }

  // Adicione esta função dentro da sua classe, pode ser logo abaixo da toggleDetalhe
getRaridadeColor(raridade: string) {
  if (!raridade) return 'light';

  switch (raridade.toLowerCase()) {
    case 'comum':
      return 'medium';   // Cinza
    case 'incomum':
      return 'success';  // Verde
    case 'raro':
      return 'primary';  // Azul
    case 'lendário':
      return 'warning';  // Amarelo/Laranja
    case 'mítico':
      return 'secondary';   // Vermelho (Impactante)
    default:
      return 'light';    // Cor padrão caso não encontre
  }
}

  // Função auxiliar para pegar o nível sem dar erro de acento no HTML
  getNivel(item: any) {
    return item['nível_mínimo'];
  }

  //Função para mostrar ou esconder a lista de expedições
  toggleListaExpedicoes(){
    this.exibirExpedicoes = !this.exibirExpedicoes;
  }
toggleListaReceitas() {
  this.exibirReceitas = !this.exibirReceitas;
}

toggleDetalheRec(rec: any) {
  this.recExpandida = this.recExpandida === rec ? null : rec;
}

toggleListaItens() {
  this.exibirItens = !this.exibirItens;
  console.log("Status da aba de itens:", this.exibirItens);
  console.log("Conteúdo da lista:", this.itensColetaveis);
}

}

