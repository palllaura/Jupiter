import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { ItemCard } from '../item-card/item-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [ItemCard, CommonModule],
  templateUrl: './section.html',
  styleUrls: ['./section.css']
})

export class Section {
  @Input() title!: string;
  @Input() items: any[] = [];
  @ViewChild('scrollContainer', { static: false }) scrollContainer!: ElementRef;

  showLeftButton = false;
  showRightButton = false;

  ngAfterViewInit() {
    this.updateButtonVisibility();
  }

  scrollLeft(): void {
    this.scrollContainer.nativeElement.scrollBy({ left: -1000, behavior: 'smooth' });
    setTimeout(() => this.updateButtonVisibility(), 300);
  }

  scrollRight(): void {
    this.scrollContainer.nativeElement.scrollBy({ left: 1000, behavior: 'smooth' });
    setTimeout(() => this.updateButtonVisibility(), 300);
  }

  updateButtonVisibility(): void {
    const el = this.scrollContainer.nativeElement;
    this.showLeftButton = el.scrollLeft > 0;
    this.showRightButton = el.scrollLeft + el.clientWidth < el.scrollWidth;
  }

  onScroll(): void {
    this.updateButtonVisibility();
  }
}