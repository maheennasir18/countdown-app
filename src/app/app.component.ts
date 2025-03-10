import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CountdownTimerComponent } from "./components/countdown-timer/countdown-timer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CountdownTimerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'countdown-app'; 
}
