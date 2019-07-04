import { Component, OnInit } from '@angular/core';
import { BooksService, Book } from './services/books.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  books: Array<Book> = [];

  constructor(private booksService: BooksService) {
    
  }

  ngOnInit() {
    this.booksService.getArticles().subscribe((res: Book[]) => {
      this.books = res;
    })
  }
}
