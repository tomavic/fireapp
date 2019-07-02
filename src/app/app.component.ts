import { Component, OnInit } from '@angular/core';
import { BooksService } from './services/books.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'fireapp';
  books;

  constructor(private booksService: BooksService) {
    
  }

  ngOnInit() {
    this.books = this.booksService.getBooks().subscribe((res) => {
      console.log(res);
    })
  }
}
