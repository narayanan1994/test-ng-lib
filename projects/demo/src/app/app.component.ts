import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AllUsers, UserList } from '@test-ng-lib';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'demo';
  userList: UserList[] = AllUsers;
}
