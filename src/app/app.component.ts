import { Component } from '@angular/core';
import { LoginComponent } from "./components/login/login.component";

@Component({
  selector: 'app-root',
  imports: [ LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'e-commerce';
}
