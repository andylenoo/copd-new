import {
  Component,
  computed,
  ElementRef,
  signal,
  ViewChild,
} from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './containers/header/header.component';
import { FooterComponent } from './containers/footer/footer.component';
import { Cta2Component } from './components/cta/cta.component';
import { filter } from 'rxjs';
import { HamburgerMenuService } from './services/hamburger-menu.service';
import { HamburgerMenuComponent } from './containers/hamburger-menu/hamburger-menu.component';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [
    // LandingLayoutComponent,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    HamburgerMenuComponent,
    CommonModule,
    TranslateModule,
  ],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'copd';

  constructor(
    private router: Router,
    private hamburgerMenu: HamburgerMenuService,
    private translate: TranslateService,
  ) {
    // console.log('AppComponent initialized');
    translate.addLangs(['en', 'tr']);
    translate.setDefaultLang('en');
    translate.use('en');

    // this.translate.setDefaultLang('en');
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        window.scrollTo(0, 0);
      });
  }

  // switchLang(lang: any) {
  //   this.translate.use(lang);
  // }

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
