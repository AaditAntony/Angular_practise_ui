import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BeautifulCardComponent } from './beautiful-card/beautiful-card.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,BeautifulCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_practise';
}
