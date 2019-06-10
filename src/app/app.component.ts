import { Component } from '@angular/core';
import { NavBarButton } from './shared/models/nav-bar-button';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string = 'Bdz et DVDs';

  public buttons: NavBarButton[] = [];
}
