import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HamburgerMenuService } from '../../services/hamburger-menu.service';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.css'],
  imports: [CommonModule, RouterModule],
})
export class HamburgerMenuComponent {
  isMenuOpen = false;
  currentRoute: string = 'false';

  constructor(
    private hamburgerMenu: HamburgerMenuService,
    private router: Router,
  ) {
    this.hamburgerMenu.menuOpen$.subscribe((isOpen) => {
      this.isMenuOpen = isOpen;
      this.updateBodyClass();
    });

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentRoute = event.urlAfterRedirects;
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
