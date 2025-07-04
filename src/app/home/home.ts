import { Component, inject, OnInit } from '@angular/core';
import { DataService } from '../services/data';
import { Section } from '../section/section';
import { Banner } from '../banner/banner';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Banner, Section, CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements OnInit {
  private dataService = inject(DataService);
  sections: any[] = [];
  heroBanner: any | null = null;

ngOnInit(): void {
  this.dataService.getSections().subscribe((res: any) => {
    this.sections = res;
  });

  this.dataService.getHeroBanner().subscribe((banner: any) => {
    this.heroBanner = banner;
  });

}
}
