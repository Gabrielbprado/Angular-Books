import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'author'
})
export class AuthorPipe implements PipeTransform {

  transform(author: string[]): string {
    if(author)
    {
      return author[0];
    }
    return '';
  }

}
