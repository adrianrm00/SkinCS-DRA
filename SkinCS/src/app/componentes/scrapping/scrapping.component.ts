import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { scrapping } from 'src/app/scrapping';

@Component({
  selector: 'app-scrapping',
  templateUrl: './scrapping.component.html',
  styleUrls: ['./scrapping.component.scss']
})
export class ScrappingComponent {

  scrapping: scrapping[]  = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.retrieveWeaponData();
  }

  retrieveWeaponData() {
    const url = 'http://localhost:8080/api/weapons/data'
    this.http.get<any[]>(url).subscribe(
      data => {
        this.scrapping = data;
      },
      error => {
        console.log(error);
      }
    );
  }

}
