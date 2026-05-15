import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ActivatedRoute } from '@angular/router';
import { SupabaseService } from 'src/app/services/supabase';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, 
  IonBackButton, IonList, IonListHeader, IonLabel, IonItem, 
  IonIcon, IonBadge, IonButton 
} from '@ionic/angular/standalone'; 
import { addIcons } from 'ionicons';
import { 
  chevronDownCircle, 
  chevronForwardCircle, 
  chevronDownOutline, 
  chevronForwardOutline, 
  bagHandleOutline, flaskOutline, mapOutline } from 'ionicons/icons';

@Component({
  selector: 'app-prof-detalhe-e', // Único para o componente A
  templateUrl: './prof-detalhe-e.page.html', // Aponta para o HTML do A
  styleUrls: ['./prof-detalhe-e.page.scss'],
  standalone: true,
  imports: [
    CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, 
    IonButtons, IonBackButton, IonList, IonListHeader, IonLabel, 
    IonItem, IonIcon, IonBadge, IonButton
  ]
})
export class ProfDetalheEPage implements OnInit { // Nome da classe para o A
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
    addIcons({
      bagHandleOutline, flaskOutline, mapOutline,
      chevronDownCircle, chevronForwardCircle, chevronDownOutline,
      chevronForwardOutline
    });
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
      
      console.log("DADOS CARREGADOS (A):", {
        exp: this.expedicoes,
        rec: this.receitas,
        itens: this.itensColetaveis
      });
      
    } catch (error) {
      console.error('Erro ao carregar dados no componente A:', error);
    }
  }

  toggleDetalhe(item: any) {
    this.itemExpandido = this.itemExpandido === item ? null : item;
  }

  getRaridadeColor(raridade: string) {
    if (!raridade) return 'light';
    switch (raridade.toLowerCase()) {
      case 'comum': return 'medium';
      case 'incomum': return 'success';
      case 'raro': return 'primary';
      case 'lendário': return 'warning';
      case 'mítico': return 'secondary';
      default: return 'light';
    }
  }

  getNivel(item: any) {
    return item['nível_mínimo'];
  }

  toggleListaExpedicoes() {
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
  }
}