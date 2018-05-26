import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../shared/common.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BookDetailComponent implements OnInit {

  book = {};
  constructor(private router: Router,
              private route: ActivatedRoute,
              private http: HttpClient,
              private commonService: CommonService,
              public snackBar: MatSnackBar) { }

  //Firstly, it catches the id of the book whose details we want to see. And further calls the getBookDetail function
  ngOnInit() {
    this.getBookDetail(this.route.snapshot.params['id']);
  }

  //getBookDetail calls the getOneBook(id) function in the CommonService that initiates the http request to the backend
  //to get the data corresponsing to the 'id' passed.
  //The data received is stored in the variable book and used to get the data on the template
  getBookDetail(id) {
    this.commonService.getOneBook(id)
      .subscribe(data=>{
        this.book = data;
      })
  }

  //deleteBook calls the deleteOneBook(id) function in the CommonService that initiates the http request to the backend
  //to call the delete route to delete the data corresponding to the 'id'.
  //After deletion, the page is routed to the min page that is '/books' route. Also, a snackbar message pops up saying
  //that the book has been deleted.
  deleteBook(id){
    this.commonService.deleteOneBook(id)
      .subscribe(res =>{
        this.router.navigate(['/books'],{relativeTo: this.route});
        this.snackBar.open("Book has been deleted","OK",{
          duration: 20000,
        });
      }, (err) => {
        console.log(err);
      });
  }

}
