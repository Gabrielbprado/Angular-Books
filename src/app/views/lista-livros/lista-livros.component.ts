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

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}



