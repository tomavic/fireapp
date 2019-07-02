import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


export interface Book {
  id?: string;
  title?: string;
  description?: string;
}


@Injectable({
  providedIn: 'root'
})
export class BooksService {

  booksCollection: AngularFirestoreCollection<Book>;
  books$: Observable<Array<Book>>;

  constructor(private afs: AngularFirestore) {
    this.books$ = afs.collection('books').valueChanges();
  }


  getBooks() {
    return this.books$;
  }



}
