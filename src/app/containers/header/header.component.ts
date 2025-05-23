import {
  Component,
  computed,
  ElementRef,
  OnInit,
  signal,
  ViewChild,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { HamburgerMenuService } from '../../services/hamburger-menu.service';
import { HamburgerMenuComponent } from '../hamburger-menu/hamburger-menu.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [RouterModule, HamburgerMenuComponent, CommonModule],
})
export class HeaderComponent {
  constructor(private hamburgerMenu: HamburgerMenuService) {}

  width = signal<number>(0);
  isMobile = computed(() => this.width() <= 1024);

  @ViewChild('box', { static: true }) box!: ElementRef<HTMLElement>;
  private ro!: ResizeObserver;

  ngAfterViewInit() {
    this.ro = new ResizeObserver(([entry]) =>
      this.width.set(entry.contentRect.width),
    );
    this.ro.observe(this.box.nativeElement);
    this.width.set(this.box.nativeElement.getBoundingClientRect().width);
  }

  toggleMenu() {
    this.hamburgerMenu.toggleMenu();
  }

  closeMenu() {
    this.hamburgerMenu.closeMenu();
  }
}
