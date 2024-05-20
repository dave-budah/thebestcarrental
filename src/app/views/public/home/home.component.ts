import { Component, HostListener } from '@angular/core';
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {MatIconButton} from "@angular/material/button";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatTabGroup,
    MatTab,
    MatIconButton
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  {
  currentYear = new Date().getFullYear();


  @HostListener('window:scroll', [])
  onWindowScroll() {
    const header = document.getElementById('header');
    if (header) {
      if ((window.pageYOffset) > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  }

}
