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

      this.favoritos = await this.supabase.getFavoritos();

    } else {

      this.usuarioLogado = false;

      this.favoritos = [];

    }
  }
}
