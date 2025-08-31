import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from './header/header';
import { RightSidebarComponent } from './right-sidebar/right-sidebar';
import { SidebarComponent } from './sidebar/sidebar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, SidebarComponent, RightSidebarComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class AppComponent {
  selectedUserId: number | null = null;

  onUserSelect = (userId : number) =>{
    this.selectedUserId = userId;
  }
}
