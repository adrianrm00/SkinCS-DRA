import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { map, filter} from 'rxjs/operators';
import { catchError, mapTo, tap } from 'rxjs/operators';

import { Case } from '../case';
import { MessageService } from './message.service';
import { Weapon } from '../weapon';

@Injectable({
  providedIn: 'root'
})
export class WeaponService {

  constructor(private http: HttpClient, private messageService: MessageService) { }

  private casesUrl = 'https://bymykel.github.io/CSGO-API/api/es-ES/crates.json'; // URL to web api
  private weaponUrl = 'https://bymykel.github.io/CSGO-API/api/es-ES/skins.json'; // URL to web api
  private AllItemsUrl = 'https://cs2-api.vercel.app/api/items';  // URL to web api

  /** GET weapon from the server */
  getWeapons(): Observable<Weapon[]> {
    return this.http.get<Weapon[]>(this.weaponUrl)
      .pipe(
        tap(_ => this.log('fetched weapons')),
        catchError(this.handleError<Weapon[]>('getWeapon', []))
      )
  }

  /** GET weapon by id. Will 404 if id not found */
  getWeaponById(id: string): Observable<Weapon[]> {
    const params = new HttpParams().set('id', id);
    return this.http.get<Weapon[]>(this.weaponUrl, { params })
      .pipe(
        map(weapon => weapon.filter(w => w.id === id)),
        tap(_ => this.log(`fetched case id=${id}`)),
        catchError(this.handleError<Weapon[]>(`getCase id=${id}`, []))
      )
  }

  /**
  * Handle Http operation that failed.
  */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`CaseService: ${message}`);
  }

}
