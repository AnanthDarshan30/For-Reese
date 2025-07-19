import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './main.html',
  styleUrls: ['./main.scss'],
})
export class MainPageComponent implements OnInit {
  show: boolean[] = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.revealParagraphs();
  }

  revealParagraphs() {
    let delay = 2000;
    for (let i = 1; i < this.show.length; i++) {
      setTimeout(() => {
        this.show[i] = true;
        this.show = [...this.show]; // force change detection
        this.cdr.detectChanges();
      }, delay);
      delay += 1800;
    }
  }
}
