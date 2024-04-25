import { ActualiteComponent } from './../actualite/actualite.component';
import { Routes } from '@angular/router';
import { Average1Component } from '../average1/average1.component';
import { Average2Component } from '../average2/average2.component';
import { Average3Component } from '../average3/average3.component';

import { AppComponent } from './app.component';


export const routes: Routes = [
  { path: 'average1', component: Average1Component },
  { path: 'average2', component: Average2Component },
  { path: 'average3', component: Average3Component },
  { path: 'actualite', component: ActualiteComponent }



];
