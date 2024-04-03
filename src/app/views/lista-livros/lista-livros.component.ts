import { Component, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription, debounceTime, filter, map, switchMap } from 'rxjs';
import { IBook } from 'src/app/Interfaces/IBook';
import { BookServiceService } from 'src/app/services/book-service.service';

const STOP = 400;
@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})
export class ListaLivrosComponent {

  Book: IBook;
  NameBook = new FormControl();

  constructor(private service: BookServiceService) { }

  findBook$ = this.NameBook.valueChanges.pipe(
    debounceTime(STOP),
   filter(value => value.length > 3),
   switchMap((value) => this.service.getBooks(value)),
   map(data => this.ConvertItem(data))
  )
  

  ConvertItem(data) : IBook[]
  {
    const book: IBook[] = [];
    
    data.forEach(data => {
      const convert = data.volumeInfo;
      book.push(this.Book = 
        {
          title: convert?.title,
          authors: convert?.authors,
          publisher: convert?.publisher,
          publishedDate: convert?.publishedDate,
          description: convert?.description,
          previewLink: convert?.previewLink,
          thumbnail: convert?.imageLinks?.thumbnail
        })
    });
    return book;
  }



}



