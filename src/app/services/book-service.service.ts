import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IResultBook } from '../Interfaces/IResultBook';
import { IBookItem } from '../Interfaces/IBookItems';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  private readonly API = 'https://www.googleapis.com/books/v1/volumes';
  constructor(private http: HttpClient) { }

  getBooks(NameBook: string): Observable<IBookItem[]> {

    const params = new HttpParams().append('q', NameBook);
    return this.http.get<IResultBook>(this.API, {params}).pipe(
      map(data =>  data.items)
      );
  }
}
