import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [RouterModule, CommonModule],
})
export class HeaderComponent implements OnInit {
  currentRoute: string = 'false';
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentRoute = event.urlAfterRedirects;
      });
  }
}
