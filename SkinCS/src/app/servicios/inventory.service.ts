import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { Weapon } from '../weapon';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private http: HttpClient, private messageService: MessageService) { }

  private inventoryUrl = 'http://localhost:8080/api/inventories';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  /** GET inventory from the server */
  getInventory(): Observable<Weapon[]>{
    return this.http.get<Weapon[]>(this.inventoryUrl)
      .pipe(
        tap(_ => this.log('fetched inventory')),
        catchError(this.handleError<Weapon[]>('getInventory', []))
      );
  }

  /** GET hero by id. Will 404 if id not found */
  getWeapon(id: number): Observable<Weapon> {
    const url = `${this.inventoryUrl}/${id}`;
    return this.http.get<Weapon>(url).pipe(
      tap(_ => this.log(`fetched weapon id=${id}`)),
      catchError(this.handleError<Weapon>(`getWeapon id=${id}`))
    );
  }

  /** PUT: update the hero on the server */
  updateInventory(weapon: Weapon): Observable<any> {
    return this.http.put(this.inventoryUrl, weapon, this.httpOptions)
      .pipe(
        tap(_ => this.log(`updated weapon id=${weapon.id}`)),
        catchError(this.handleError<any>('updateWeapon'))
      );
  }


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
