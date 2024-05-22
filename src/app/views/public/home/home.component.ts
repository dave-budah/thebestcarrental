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



}
