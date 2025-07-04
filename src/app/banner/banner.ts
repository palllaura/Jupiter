import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './banner.html',
  styleUrl: './banner.css'
})
export class Banner {
    @Input() heading!: string;
    @Input() item: any;

    get imageUrl(): string {
    return this.item.photos?.[0]?.photoTypes?.["2"]?.url ?? '';
  }
}
