import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  standalone: true,
  imports: [],
})
export class UserComponent {
  @Input({ required: true }) id!: number;
  @Input({ required: true }) name!: string;
  @Input({ required: true }) email!: string;
  @Input({ required: true }) isOnline: boolean = false;

  @Output() select = new EventEmitter<number>();

  onUserCLick = () => {
    this.select.emit(this.id);
  };
}
