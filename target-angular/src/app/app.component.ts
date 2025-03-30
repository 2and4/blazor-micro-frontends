import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlazorComponentComponent } from "./blazor/blazor-component.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BlazorComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'target-angular';
}
