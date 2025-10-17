import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RecipeService } from '../../service/recipe.service'; // 👈 à importer
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-recipe-form',
  standalone: true,
  imports: [CommonModule, FormsModule,HttpClientModule],
  templateUrl: './recipe-form.component.html',
  styleUrl: './recipe-form.component.css'
})
export class RecipeFormComponent {
  ingredients: string[] = [];
  currentIngredient: string = '';
  constraints = {
    vegan: false,
    halal: false,
    keto: false,
    sansLactose: false,
    sansSucre: false,
    richeEnProteines: false
  };
  maxTime: number = 30;
  equipment: string = '';
  nutritionalGoal: string = '';
  showResults: boolean = false;
  recipes: any = null;
  isLoading: boolean = false;

  constructor(private recipeService: RecipeService) {}

  addIngredient(): void {
    if (this.currentIngredient.trim()) {
      this.ingredients.push(this.currentIngredient.trim());
      this.currentIngredient = '';
    }
  }

  removeIngredient(index: number): void {
    this.ingredients.splice(index, 1);
  }

  toggleConstraint(key: string): void {
    this.constraints[key as keyof typeof this.constraints] = !this.constraints[key as keyof typeof this.constraints];
  }

  onSubmit(): void {
    if (this.ingredients.length === 0) {
      alert('Veuillez ajouter au moins un ingrédient');
      return;
    }

    this.isLoading = true;

    const payload = {
      ingredients: this.ingredients,
      constraints: this.constraints,
      maxTime: this.maxTime,
      equipment: this.equipment,
      nutritionalGoal: this.nutritionalGoal
    };

    this.recipeService.generateRecipes(payload).subscribe({
      next: (response) => {
        this.recipes = response;
        this.showResults = true;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Erreur API:', error);
        alert("Erreur lors de la génération des recettes !");
        this.isLoading = false;
      }
    });
  }

  resetForm(): void {
    this.ingredients = [];
    this.currentIngredient = '';
    this.constraints = {
      vegan: false,
      halal: false,
      keto: false,
      sansLactose: false,
      sansSucre: false,
      richeEnProteines: false
    };
    this.maxTime = 30;
    this.equipment = '';
    this.nutritionalGoal = '';
    this.showResults = false;
    this.recipes = null;
  }

  getSelectedConstraints(): string[] {
    return Object.entries(this.constraints)
      .filter(([_, value]) => value)
      .map(([key]) => this.formatConstraintName(key));
  }

  formatConstraintName(key: string): string {
    const names: { [key: string]: string } = {
      vegan: 'Vegan',
      halal: 'Halal',
      keto: 'Keto',
      sansLactose: 'Sans lactose',
      sansSucre: 'Sans sucre',
      richeEnProteines: 'Riche en protéines'
    };
    return names[key] || key;
  }
}
