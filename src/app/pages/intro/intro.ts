import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.html',
  styleUrls: ['./intro.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class IntroPageComponent {
  questionText: string = 'Are you my girlfriend?';
  showNameInput: boolean = false;
  enteredName: string = '';
  isNameCorrect: boolean = false;

  constructor(private router: Router) {}

  // Called when "No" is clicked — show input field
  showInput() {
    this.questionText = 'If you are my girlfriend, type your name below:';
    this.showNameInput = true;
  }

  // Track name input and validate it
  onNameChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.enteredName = input.value.toLowerCase();
    this.isNameCorrect = this.enteredName === 'reese';
  }

  // Move "Yes" button around playfully
  moveYesButton(event: MouseEvent) {
    const button = event.target as HTMLElement;
    const container = button.parentElement;

    if (container) {
      const containerRect = container.getBoundingClientRect();
      const maxX = containerRect.width - button.offsetWidth;
      const maxY = containerRect.height - button.offsetHeight;

      const randomX = Math.random() * maxX;
      const randomY = Math.random() * maxY;

      button.style.position = 'absolute';
      button.style.left = `${randomX}px`;
      button.style.top = `${randomY}px`;
    }
  }

  // Make submit button dodge if name is incorrect
  maybeDodgeSubmit(event: MouseEvent) {
    if (!this.isNameCorrect) {
      const button = event.target as HTMLElement;
      const container = button.parentElement;

      if (container) {
        const containerRect = container.getBoundingClientRect();
        const maxX = containerRect.width - button.offsetWidth;
        const maxY = containerRect.height - button.offsetHeight;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        button.style.position = 'absolute';
        button.style.left = `${randomX}px`;
        button.style.top = `${randomY}px`;
      }
    }
  }

  // Navigate to main page if correct name
  goToMainPage() {
    if (this.isNameCorrect) {
      this.router.navigate(['/main']);
    }
  }
}
