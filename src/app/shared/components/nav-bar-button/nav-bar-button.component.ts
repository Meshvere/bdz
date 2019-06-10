import { Component, OnInit } from '@angular/core';
import { NavBarButton } from '../../models/nav-bar-button';

@Component({
  selector: 'app-nav-bar-button',
  templateUrl: './nav-bar-button.component.html',
  styleUrls: ['./nav-bar-button.component.scss']
})
export class NavBarButtonComponent implements OnInit, NavBarButton {

  constructor() { }

  ngOnInit() {
  }

}
