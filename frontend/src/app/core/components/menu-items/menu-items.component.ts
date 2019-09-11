import { Component, OnInit } from '@angular/core';
// dependencies
import { Router } from '@angular/router';
import { trigger, state, style } from '@angular/animations';
// models
import { MenuItem } from '../../models/core.model';
// services
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.scss'],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({ transform: 'rotate(0deg)' })),
      state('expanded', style({ transform: 'rotate(90deg)' }))
    ])
  ]
})

export class MenuItemsComponent implements OnInit {

  centered: boolean = true;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() { }

  onClick(item: MenuItem) {
    if (item.children && item.children.length > 0) {
      item.expanded = !item.expanded;
    } else if (item.route) {
      this.router.navigateByUrl(item.route);
    }
  }

  logout() {
    this.authService.logout();
  }

  menuItems: MenuItem[] = [
    {
      name: 'MENU.NEW_FT',
      route: '/back-office/admin-home',
      icon: 'assessment',
      children: [],
      expanded: false,
      role: [
        "ROLE_ADMIN"
      ]
    },
    {
      name: 'MENU.DASHBOARD',
      route: '/back-office/admin-home',
      icon: 'dashboard',
      children: [],
      expanded: false,
      role: [
        "ROLE_ADMIN"
      ]
    }
  ]

}