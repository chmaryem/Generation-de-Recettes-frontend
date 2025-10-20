
import { Routes } from '@angular/router';
import { RecipeFormComponent } from './components/recipe-form/recipe-form.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // redirection vers home

   { path: 'home', component: HomeComponent },
   { path: 'generator', component: RecipeFormComponent }
];
