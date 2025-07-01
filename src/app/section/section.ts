import { Component, Input } from '@angular/core';
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
}
