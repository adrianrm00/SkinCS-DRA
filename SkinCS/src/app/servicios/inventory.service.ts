import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { Weapon } from '../weapon';
import { catchError, map, tap } from 'rxjs/operators';
import { Inventory } from '../inventory';

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

  /** PUT: update the inventory on the server */
  updateInventory(weapon: Inventory, id: Number): Observable<any> {
    const url = `${this.inventoryUrl}/${id}`;
    return this.http.put(url, weapon, this.httpOptions)
      .pipe(
        tap(_ => this.log(`updated weapon id=${weapon.name}`)),
        catchError(this.handleError<any>('updateWeapon'))
      );
  }


  /** POST: add a new inventory to the server */
  addInventory(weapon: Inventory): Observable<Weapon> {
    return this.http.post<Weapon>(this.inventoryUrl, weapon, this.httpOptions)
      .pipe(
        tap((newWeapon: Weapon) => this.log(`added weapon w/ id=${newWeapon.id}`)),
        catchError(this.handleError<Weapon>('addWeapon'))
      );
  }

  /** DELETE: delete the inventory from the server */
  deleteW(id: number): Observable<Inventory> {
    const url = `${this.inventoryUrl}/${id}`;

    return this.http.delete<Inventory>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted Weapon id=${id}`)),
      catchError(this.handleError<Inventory>('deletewEApon'))
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
