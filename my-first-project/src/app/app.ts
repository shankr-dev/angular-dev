import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from './header/header';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar';
import { RightSidebarComponent } from './right-sidebar/right-sidebar';
import { User } from '../dummy-user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, LeftSidebarComponent, RightSidebarComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class AppComponent {
  selectedUser?: User;

  onUserSelect = (user: User) => {
    this.selectedUser = user;
  };
}
