import { Component } from "@angular/core";

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.html'
})  
export class HeaderComponent {
  searchQuery: string = '';
  hasNotifications: boolean = true;
  userName: string = 'User';
  userStatus: string = 'Online';

  onSearch(event: Event) {
    const target = event.target as HTMLInputElement;
    this.searchQuery = target.value;
    // Implement search functionality here
    console.log('Searching for:', this.searchQuery);
  }
}