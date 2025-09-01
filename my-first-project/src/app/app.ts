import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from './header/header';
import { User } from './user/user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class AppComponent {
  selectedUser?: User;

  onUserSelect = (user: User) => {
    this.selectedUser = user;
  };
}
