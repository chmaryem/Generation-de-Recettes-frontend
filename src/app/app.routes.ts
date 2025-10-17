
import { Routes } from '@angular/router';
import { RecipeFormComponent } from './components/recipe-form/recipe-form.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // redirection vers home
  { path: 'home', component: RecipeFormComponent }
];
