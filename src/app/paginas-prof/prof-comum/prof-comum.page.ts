import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// Importa os componentes e afins
import { 
  IonContent, IonHeader, IonTitle, 
  IonToolbar, IonGrid, IonRow, 
  IonCol, IonCard, IonCardHeader, 
  IonCardTitle, IonCardSubtitle, 
  IonCardContent, IonIcon,
  IonButton, IonButtons, IonBackButton
} from '@ionic/angular/standalone';

//importa os icones
import { addIcons } from 'ionicons';
import { 
  star, heart, home, rocket, settings, 
  person, camera, planet 
} from 'ionicons/icons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pag1',
  templateUrl: './prof-comum.page.html',
  styleUrls: ['./prof-comum.page.scss'],
  standalone: true,
  imports: [
    CommonModule, FormsModule, IonContent, 
    IonHeader, IonTitle, IonToolbar, IonGrid, 
    IonRow, IonCol, IonCard, IonCardHeader, 
    IonCardTitle, IonCardSubtitle, IonCardContent,
    IonIcon, IonButton, IonButtons, IonBackButton, RouterLink
  ]
})
export class ProfComumPage implements OnInit {

  //Registro dos icones
  constructor() {
    addIcons({ 
      star, heart, home, rocket, 
      settings, person, camera, planet 
    });
  }

  ngOnInit() {
  }
}