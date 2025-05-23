import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HamburgerMenuService {
  private menuOpenSubject = new BehaviorSubject<boolean>(false);
  public menuOpen$ = this.menuOpenSubject.asObservable();

  toggleMenu() {
    this.menuOpenSubject.next(!this.menuOpenSubject.value);
  }

  openMenu() {
    this.menuOpenSubject.next(true);
  }

  closeMenu() {
    this.menuOpenSubject.next(false);
  }

  get isMenuOpen(): boolean {
    return this.menuOpenSubject.value;
  }
}
