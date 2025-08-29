import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from '../user/user';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.html',
  standalone: true,
  imports: [CommonModule, UserComponent]
})
export class SidebarComponent {
  searchQuery: string = '';
  
  users = [
    { name: 'John Doe', email: 'john.doe@example.com', isOnline: true },
    { name: 'Jane Smith', email: 'jane.smith@example.com', isOnline: false },
    { name: 'Mike Johnson', email: 'mike.johnson@example.com', isOnline: true },
    { name: 'Sarah Wilson', email: 'sarah.wilson@example.com', isOnline: true },
    { name: 'Tom Brown', email: 'tom.brown@example.com', isOnline: false }
  ];
}
