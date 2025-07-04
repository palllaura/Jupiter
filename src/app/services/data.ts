import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://services.err.ee/api/v2/category/getByUrl?url=video&domain=jupiter.err.ee';

  constructor(private http: HttpClient) {}

getAllItems(): Observable<any[]> {
  return this.http.get<any>(this.apiUrl).pipe(
    map(response => {
      const frontPage = response?.data?.category?.frontPage;
      console.log('FrontPage:', frontPage);
      if (!Array.isArray(frontPage)) {
        return [];
      }
      return frontPage.filter((section: any) => section.hasOwnProperty('highTimeline'));
    })
  );
}

getHeroBanner(): Observable<any | null> {
  return this.getAllItems().pipe(
    map(sections => {
      const bannerSection = sections.find(section => section.highTimeline === false);
      return bannerSection?.data?.[0] ?? null;
    })
  );
}


  getSections(): Observable<any[]> {
    return this.getAllItems().pipe(
      map(items => items.filter(item => item?.highTimeline === true))
    );
  }

  getBanners(): Observable<any[]> {
    return this.getAllItems().pipe(
      map(items => items.filter(item => item?.highTimeline === false))
    );
  }

}
