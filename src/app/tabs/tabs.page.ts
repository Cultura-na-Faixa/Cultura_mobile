import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { triangle, ellipse, square, homeSharp, searchSharp, starSharp, personSharp, heartSharp } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);

  constructor() {
    // add icons c/ homesharp
    addIcons({
      triangle,
      ellipse,
      square,
      'home-sharp': homeSharp,
      'searchSharp': searchSharp,
      'starSharp': starSharp,
      'personSharp': personSharp,
      'heartSharp': heartSharp
    });
  }
}