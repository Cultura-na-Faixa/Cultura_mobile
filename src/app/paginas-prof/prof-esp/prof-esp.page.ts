import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,
         IonGrid, IonRow, IonCol, 
         IonCard, IonCardHeader, IonCardTitle, 
         IonCardSubtitle, IonCardContent, IonIcon,
         IonButton, IonButtons, IonBackButton
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { 
  star, heart, home, rocket, 
  settings, person, camera, planet 
} from 'ionicons/icons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-prof-esp',
  templateUrl: './prof-esp.page.html',
  styleUrls: ['./prof-esp.page.scss'],
  standalone: true,
  imports: [ CommonModule, FormsModule, IonContent, 
    IonHeader, IonTitle, IonToolbar, IonGrid, 
    IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, 
    IonCardSubtitle, IonCardContent, IonIcon,
    IonButton, IonButtons, IonBackButton, RouterLink]
})
export class ProfEspPage implements OnInit {

  constructor() {
  addIcons({ 
    star, heart, home, rocket, 
    settings, person, camera, planet 
    });
  }

  ngOnInit() {
  }

}