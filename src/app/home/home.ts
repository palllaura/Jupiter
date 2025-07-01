import { Component, inject, OnInit } from '@angular/core';
import { DataService } from '../services/data';
import { Section } from '../section/section';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Section, CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements OnInit {
  private dataService = inject(DataService);
  frontPageSections: any[] = [];

ngOnInit(): void {
  this.dataService.getSections().subscribe((res: any) => {
    console.log('API response:', res);
    this.frontPageSections = res.data.category.frontPage;
    console.log('frontPageSections:', this.frontPageSections);
  });
}
}
