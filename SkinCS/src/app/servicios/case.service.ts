import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { map, filter} from 'rxjs/operators';
import { catchError, mapTo, tap } from 'rxjs/operators';

import { Case } from '../case';
import { MessageService } from './message.service';
import { CASES } from '../mock-cases';

@Injectable({
  providedIn: 'root'
})
export class CaseService {

  constructor(private http: HttpClient, private messageService: MessageService) { }

  private casesUrl = 'https://bymykel.github.io/CSGO-API/api/es-ES/crates.json'; // URL to web api
  private weaponUrl = 'https://bymykel.github.io/CSGO-API/api/es-ES/skins.json'; // URL to web api
  private AllItemsUrl = 'https://cs2-api.vercel.app/api/items';  // URL to web api

  /**GET operations from the server */
  getCases(): Observable<Case[]> {
    const excludeWords = ['grafitis', 'Radicals', 'kits']; // Words to exclude from the list

    return this.http.get<Case[]>(this.casesUrl)
      .pipe(
        map(cases => cases.filter(cases => cases.name.includes('Caja'))),
        map(cases => cases.filter(cases => !excludeWords.some(word => cases.name.includes(word)))),
        tap(_ => this.log('fetched cases')),
        catchError(this.handleError<Case[]>('getCase', []))
      );
  }

  /** GET hero by id. Will 404 if id not found */
  getCase(id: string): Observable<Case> {
    const url = `${this.casesUrl}?id=${id}`;
    return this.http.get<Case>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Case>(`getCase id=${id}`))
    );
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
