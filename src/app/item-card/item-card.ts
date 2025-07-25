import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-card.html',
  styleUrl: './item-card.css'
})
export class ItemCard {
  @Input() item: any;

    get imageUrl(): string {
      return this.item.verticalPhotos?.[0]?.photoTypes?.["80"]?.url ?? '';
  }

    logClick(): void {
      console.log('User clicked on:', this.item.heading);
  }

    logFavourite(): void {
      console.log('Added to favourites:', this.item.heading);
  }
}
