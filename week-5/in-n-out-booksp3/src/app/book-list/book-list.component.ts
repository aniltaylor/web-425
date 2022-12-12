/**
 * Title: book-list.component.ts
 * Author: anita taylor
 * Date: DEC 8 2022
 * Description: Book list component (book list page)
 */
import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { IBook } from '../book.interface';
import {Observable} from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { BookDetailsDialogComponent } from '../book-details-dialog/book-details-dialog.component';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books: Observable<IBook[]>;
  header: Array<string> = ['isbn', 'title', 'numOfPages', 'authors'];
  book !: IBook;

  constructor(private booksService: BooksService, private dialog: MatDialog) {
    this.books = this.booksService.getBooks();

  }

  ngOnInit(): void {
  }

showBookDetails(isbn: string){
    this.book = this.booksService.getBook(isbn) ;
console.log(this.book);
const dialogRef = this.dialog.open(BookDetailsDialogComponent, {
  data: {
   book: this.book
  },
  disableClose: true,
  width: '800px'
})
dialogRef.afterClosed().subscribe(result => {
  if (result === 'confirm') {
   this.book.isbn = "";
   this.book.authors = [];
   this.book.description = "";
   this.book.title = "";
   this.book.numOfPages = 0;
     }

 });
  }


}
