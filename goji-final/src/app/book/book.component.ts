import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonService } from '../shared/common.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books: any;
  constructor(private commonService: CommonService) {}

  //Calls the service that initiates the http request to get all the books from the db and then subscribes to the response
  //and puts it to the books.
  ngOnInit() {
    this.commonService.getBooks()
      .subscribe(data =>{
        this.books = data;
      })
  }

}
