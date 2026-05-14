import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton, IonModal, IonButtons, IonTabButton, IonIcon } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { triangle, ellipse, square, heartSharp, heartOutline } from 'ionicons/icons';

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
export class Tab1Page {

  isModalOpen = false;

  eventoSelecionado: any;

  eventos = [
    {
      titulo: 'Carlinhos do Teclado',
      local: 'Sesc Pompeia',
      data: '20/12 13h às 15h',
      imagem: 'https://files.pressmanager.net/clientes/625b13d2e0f9dc14e52ac4deac083e71/imagens/2025/02/18/82817132bcc406c20824c21a3c2e52e2.jpg',
      descricao: 'O show contará com grandes sucessos do artista.',
      favorito: false
    },
    {
      titulo: 'Ricardo & Morenin',
      local: 'Vale do Anhangabaú',
      data: '18/09 18h às 20h',
      imagem: 'https://p2.trrsf.com.br/image/fget/cf/478/481/smart/images.terra.com/2025/07/08/302523534-8-dupla-sertaneja-felipe-e-matheus-viralizou-em-2024-ao-fazer-show-sem-plateia.jpg',
      descricao: 'Show sertanejo com participação especial.',
      favorito: false
    }
  ];

  abrirModal(evento: any) {
    this.eventoSelecionado = evento;
    this.isModalOpen = true;
  }

  fecharModal() {
    this.isModalOpen = false;
  }

  // ação favoritar
  toggleFavorito(evento: any) {
    evento.favorito = !evento.favorito;
  }

  constructor() {
    addIcons({
      triangle,
      ellipse,
      square,
      'heartSharp': heartSharp,
      'heartOutline': heartOutline
    });
  }
}
