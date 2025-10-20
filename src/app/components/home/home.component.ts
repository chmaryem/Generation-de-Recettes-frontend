import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
   imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  features = [
    {
      icon: '📖',
      title: 'Recettes Simples',
      description: 'Des recettes faciles à réaliser pour tous les niveaux',
      color: '#4CAF50'
    },
    {
      icon: '🎨',
      title: 'Créations Originales',
      description: 'Laissez-vous surprendre par des combinaisons innovantes',
      color: '#FF9800'
    },
    {
      icon: '⚡',
      title: 'Solutions Express',
      description: 'Des plats délicieux en moins de 5 minutes',
      color: '#2196F3'
    }
  ];

  constraints = [
    { icon: '🌱', label: 'Vegan' },
    { icon: '🕌', label: 'Halal' },
    { icon: '🥑', label: 'Keto' },
    { icon: '🚫🥛', label: 'Sans lactose' },
    { icon: '🚫🍬', label: 'Sans sucre' },
    { icon: '💪', label: 'Protéines' }
  ];

  testimonials = [
    {
      name: 'Sarah M.',
      text: 'Une révolution dans ma cuisine ! Je trouve toujours des idées créatives.',
      rating: 5,
      avatar: '👩‍🦰'
    },
    {
      name: 'Ahmed K.',
      text: 'Parfait pour mes contraintes halal et keto. Application indispensable !',
      rating: 5,
      avatar: '👨‍💼'
    },
    {
      name: 'Julie L.',
      text: 'Les recettes express me sauvent tous les soirs après le travail.',
      rating: 5,
      avatar: '👩‍🍳'
    }
  ];

  stats = [
    { value: '10K+', label: 'Recettes générées' },
    { value: '5K+', label: 'Utilisateurs actifs' },
    { value: '4.9/5', label: 'Note moyenne' },
    { value: '98%', label: 'Satisfaction' }
  ];

  constructor(private router: Router) {}

  navigateToGenerator(): void {
    // Navigation vers le composant de génération
     this.router.navigate(['/generator']);
    console.log('Navigation vers le générateur');
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
