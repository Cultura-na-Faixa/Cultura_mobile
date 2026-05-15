import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
// Adicionei os componentes de layout e card aqui embaixo:
import { 
  IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, 
  IonButtons, IonGrid, IonRow, IonCol, IonCard, 
  IonCardHeader, IonCardTitle, IonCardContent, IonBadge,
  IonImg, IonCardSubtitle, IonRouterLink
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-prof-alternativa',
  templateUrl: './prof-alternativa.page.html',
  styleUrls: ['./prof-alternativa.page.scss'],
  standalone: true,
  // Não esqueça de incluir todos eles aqui também:
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, 
    FormsModule, IonButtons, IonBackButton, IonGrid, IonRow, 
    IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonBadge,
    IonImg, IonCardSubtitle, RouterLink
  ]
})
export class ProfAlternativaPage implements OnInit {
  // Lembre-se de declarar a variável da aba se for usar o ion-segment aqui
  abaSelecionada: string = 'expedicoes'; 

  constructor() { }
  ngOnInit() { }
}
