import { Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  mode: string = 'lightmode';
  isChecked: boolean = false;
  title2 = 'dark-mode';
  changed(event: MatSlideToggleChange): void {
    this.mode = event.checked ? 'light_mode' : 'dark_mode';
    document.body.classList.toggle('darkMode');
  }

  constructor() {}

  ngOnInit(): void {}
}
