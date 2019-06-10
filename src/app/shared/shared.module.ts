import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarButtonComponent } from './components/nav-bar-button/nav-bar-button.component';

@NgModule({
  declarations: [NavBarButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [NavBarButtonComponent],
  entryComponents: []
})
export class SharedModule { }
