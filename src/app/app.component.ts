import { ActualiteComponent } from '../actualite/actualite.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Average1Component } from '../average1/average1.component';
import { Average2Component } from '../average2/average2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: '../average2/average2.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-frontend';


}
