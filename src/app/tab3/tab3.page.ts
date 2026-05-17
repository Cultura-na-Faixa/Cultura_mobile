import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { SupabaseService } from '../services/supabase.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    ExploreContainerComponent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonContent,
    CommonModule
  ]
})
export class Tab3Page implements OnInit {

  usuarioLogado = false;
  favoritos: any[] = [];

  // mesma lista de eventos do tab1
  todosEventos = [
    {
      id: 1,
      titulo: 'Carlinhos do Teclado',
      local: 'Sesc Pompeia',
      data: '20/12 13h às 15h',
      imagem: 'https://files.pressmanager.net/clientes/625b13d2e0f9dc14e52ac4deac083e71/imagens/2025/02/18/82817132bcc406c20824c21a3c2e52e2.jpg',
      descricao: 'O show contará com grandes sucessos do artista.',
      categoria: 'Música'
    },
    {
      id: 2,
      titulo: 'Ricardo & Morenin',
      local: 'Vale do Anhangabaú',
      data: '18/09 18h às 20h',
      imagem: 'https://p2.trrsf.com.br/image/fget/cf/478/481/smart/images.terra.com/2025/07/08/302523534-8-dupla-sertaneja-felipe-e-matheus-viralizou-em-2024-ao-fazer-show-sem-plateia.jpg',
      descricao: 'Show sertanejo com participação especial.',
      categoria: 'Música'
    },
    {
      id: 3,
      titulo: 'Os Companheiros',
      local: 'Campo Limpo',
      data: '05/06 12h às 13h',
      imagem: 'https://www.louveira.sp.gov.br/painel/dbanexos/dbanexo_imagem/03-2021/0c3b1c263df8c19db08eff8ba67e2d084e060323.jpeg',
      descricao: 'Peça de teatro mostrando as aventuras dos companheiros',
      categoria: 'Teatro'
    },
    {
      id: 4,
      titulo: 'Cia da dança',
      local: 'Brasilândia',
      data: '02/08 10h às 12h',
      imagem: 'https://www.sabra.org.br/site/wp-content/uploads/2024/06/a-danca-como-ferramenta-de-expressao-corporal-20181109101935.jpg-jpg.webp',
      descricao: 'Veja a apresentação das meninas que está conquistando São Paulo',
      categoria: 'Dança'
    },
    {
      id: 5,
      titulo: 'Irmãos a parte',
      local: 'Sesc Pinheiros',
      data: '07/09 19h às 21h',
      imagem: 'https://www.guiadasemana.com.br/contentFiles/image/2016/10/FEA/principal/52967_w840h0_1477575822selfie.jpg',
      descricao: 'Se emocione nessa peça sobre o reencontro dos irmãos Albuquerque',
      categoria: 'Teatro'
    }
  ];

  constructor(private supabase: SupabaseService) { }

  async ngOnInit() {
    await this.carregarFavoritos();
  }

  async ionViewWillEnter() {
    await this.carregarFavoritos();
  }

  async carregarFavoritos() {
    const user = await this.supabase.getUsuarioAtual();

    if (user) {
      this.usuarioLogado = true;
      const ids = await this.supabase.getFavoritos();
      this.favoritos = this.todosEventos.filter(e => ids.includes(e.id));
    } else {
      this.usuarioLogado = false;
      this.favoritos = [];
    }
  }

}