import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
})
export class UserProfileComponent {
  oldest: boolean = true;
  user = {
    name: 'Picace',
    firstname: 'Pers',
    age: 42,
    quote: 'Two beer or not two beer ?',
    photo: 'https://randomuser.me/api/portraits/lego/6.jpg',
    alt: 'Aï Carambar!',
  };

  textButton: string = 'Hide age';

  showAge(): void {
    this.oldest = !this.oldest;
    if (this.oldest) {
      this.textButton = 'Show age';
    } else {
      this.textButton = 'Hide age';
    }
  }
}
