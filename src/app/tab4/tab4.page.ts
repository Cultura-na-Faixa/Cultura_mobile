import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonButton, IonIcon, IonModal,IonButtons } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logoGoogle} from 'ionicons/icons';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
  standalone: true,
  imports: [
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    CommonModule, 
    FormsModule,
    IonInput,
    IonButton,
    IonIcon,
    IonModal,
    IonButtons
  ]
})
export class Tab4Page implements OnInit {

  constructor() {
    addIcons({
      'logoGoogle': logoGoogle
    });
   };

   isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  };

  ngOnInit() {
  }

}
