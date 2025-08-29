import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from '../user/user';
import { DUMMY_USERS } from '../../dummy-user';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.html',
  standalone: true,
  imports: [CommonModule, UserComponent]
})
export class SidebarComponent {
  user = DUMMY_USERS;
}
 