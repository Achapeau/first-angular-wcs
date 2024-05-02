import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  constructor(private http: HttpClient) {}
getData() {
  this.http.get('https://jsonplaceholder.typicode.com/todos').subscribe((data) => {
    console.log(data);
  })
}
  title = "Youhou!!!... (désolé, j'ai pas la passion)";
}
