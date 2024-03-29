import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { IBook } from 'src/app/Interfaces/IBook';
import { BookServiceService } from 'src/app/services/book-service.service';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})
export class ListaLivrosComponent implements OnDestroy {

  listaLivros: IBook[];
  Book: IBook;
  subscription: Subscription;
  NameBook: string = '';

  constructor(private service: BookServiceService) { }
  
  searchBook() {
    this.subscription = this.service.getBooks(this.NameBook).subscribe( {
      next: (data) =>
      {
       this.listaLivros = this.ConvertItem(data);
      }
    });
  }
  
  ConvertItem(data) : IBook[]
  {
    const book: IBook[] = [];
    
    data.forEach(data => {
      book.push(this.Book = 
        {
          title: data.volumeInfo?.title,
          authors: data.volumeInfo?.authors,
          publisher: data.volumeInfo?.publisher,
          publishedDate: data.volumeInfo?.publishedDate,
          description: data.volumeInfo?.description,
          previewLink: data.volumeInfo?.previewLink,
          thumbnail: data.volumeInfo?.imageLinks?.thumbnail
        })
    });
    return book;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}



