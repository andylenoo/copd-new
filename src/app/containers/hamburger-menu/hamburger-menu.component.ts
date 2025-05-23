import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HamburgerMenuService } from '../../services/hamburger-menu.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.css'],
  imports: [CommonModule, RouterModule],
})
export class HamburgerMenuComponent {
  isMenuOpen = false;

  constructor(private hamburgerMenu: HamburgerMenuService) {
    this.hamburgerMenu.menuOpen$.subscribe((isOpen) => {
      this.isMenuOpen = isOpen;
      this.updateBodyClass();
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.updateBodyClass();
  }

  closeMenu() {
    this.isMenuOpen = false;
    this.updateBodyClass();
  }

  private updateBodyClass() {
    if (this.isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }
}
