import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router'; 
import { addIcons } from 'ionicons';
import { star } from 'ionicons/icons'; // Importa o ícone de estrela

// Importa as opções de ferramenta e componentes para o projeto
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, 
  IonButton, IonList, IonItem, IonCard,
  IonCardHeader, IonCardTitle,
  IonCardSubtitle, IonGrid,
  IonRow, IonCol, IonIcon, IonText, IonRouterLink
} from '@ionic/angular/standalone';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    RouterModule, IonHeader, IonToolbar, 
    IonTitle, IonContent, IonButton,
    IonList, IonItem, IonCard,
    IonCardHeader, IonCardTitle,
    IonCardSubtitle, IonGrid, IonRow,
    IonCol, IonIcon, IonText, RouterLink
  ],
})
export class HomePage {
  constructor() {
    addIcons({ star });
  }
}
