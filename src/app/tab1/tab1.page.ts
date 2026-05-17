import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton, IonModal, IonButtons, IonTabButton, IonIcon } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { triangle, ellipse, square, heartSharp, heartOutline } from 'ionicons/icons';
import { SupabaseService } from '../services/supabase.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    ExploreContainerComponent,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonButton,
    IonModal,
    IonButtons,
    CommonModule,
    IonTabButton,
    IonIcon
  ],
})
export class Tab1Page implements OnInit {

  isModalOpen = false;
  eventoSelecionado: any;

  eventos = [
    {
      id: 1,
      titulo: 'Carlinhos do Teclado',
      local: 'Sesc Pompeia',
      data: '20/12 13h às 15h',
      imagem: 'https://files.pressmanager.net/clientes/625b13d2e0f9dc14e52ac4deac083e71/imagens/2025/02/18/82817132bcc406c20824c21a3c2e52e2.jpg',
      descricao: 'O show contará com grandes sucessos do artista.',
      categoria: 'Música',
      favorito: false
    },
    {
      id: 2,
      titulo: 'Ricardo & Morenin',
      local: 'Vale do Anhangabaú',
      data: '18/09 18h às 20h',
      imagem: 'https://p2.trrsf.com.br/image/fget/cf/478/481/smart/images.terra.com/2025/07/08/302523534-8-dupla-sertaneja-felipe-e-matheus-viralizou-em-2024-ao-fazer-show-sem-plateia.jpg',
      descricao: 'Show sertanejo com participação especial.',
      categoria: 'Música',
      favorito: false
    },
    {
      id: 3,
      titulo: 'Os Companheiros',
      local: 'Campo Limpo',
      data: '05/06 12h às 13h',
      imagem: 'https://www.louveira.sp.gov.br/painel/dbanexos/dbanexo_imagem/03-2021/0c3b1c263df8c19db08eff8ba67e2d084e060323.jpeg',
      descricao: 'Peça de teatro mostrando as aventuras dos companheiros',
      categoria: 'Teatro',
      favorito: false
    },
    {
      id: 4,
      titulo: 'Cia da dança',
      local: 'Brasilândia',
      data: '02/08 10h às 12h',
      imagem: 'https://www.sabra.org.br/site/wp-content/uploads/2024/06/a-danca-como-ferramenta-de-expressao-corporal-20181109101935.jpg-jpg.webp',
      descricao: 'Veja a apresentação das meninas que está conquistando São Paulo',
      categoria: 'Dança',
      favorito: false
    },
    {
      id: 5,
      titulo: 'Irmãos a parte',
      local: 'Sesc Pinheiros',
      data: '07/09 19h às 21h',
      imagem: 'https://www.guiadasemana.com.br/contentFiles/image/2016/10/FEA/principal/52967_w840h0_1477575822selfie.jpg',
      descricao: 'Se emocione nessa peça sobre o reencontro dos irmãos Albuquerque',
      categoria: 'Teatro',
      favorito: false
    }
  ];

  constructor(private supabase: SupabaseService) {
    addIcons({
      triangle,
      ellipse,
      square,
      'heartSharp': heartSharp,
      'heartOutline': heartOutline
    });
  }

  async ngOnInit() {
    await this.carregarFavoritos();
  }

  async carregarFavoritos() {
    const ids = await this.supabase.getFavoritos();
    this.eventos.forEach(evento => {
      evento.favorito = ids.includes(evento.id);
    });
  }

  abrirModal(evento: any) {
    this.eventoSelecionado = evento;
    this.isModalOpen = true;
  }

  fecharModal() {
    this.isModalOpen = false;
  }

  async toggleFavorito(evento: any, event: Event) {
    event.stopPropagation(); // evita abrir o modal ao clicar no coração

    const user = await this.supabase.getUsuarioAtual();
    if (!user) {
      alert('Faça login para favoritar');
      return;
    }

    evento.favorito = !evento.favorito;

    if (evento.favorito) {
      await this.supabase.adicionarFavorito(evento.id);
    } else {
      await this.supabase.removerFavorito(evento.id);
    }
  }

}

