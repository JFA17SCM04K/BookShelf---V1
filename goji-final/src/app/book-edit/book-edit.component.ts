import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonService } from '../shared/common.service';
import { MatSnackBar } from '@angular/material';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BookEditComponent implements OnInit {

  book = {};

  constructor(private http: HttpClient,
              private router: Router,
              private route: ActivatedRoute,
              private commonService: CommonService,
              public snackBar: MatSnackBar) { }

//Fetches the 'id' from the route and calls the getBook() function.
  ngOnInit() {
    this.getBook(this.route.snapshot.params['id']);
  }

//Calls the getOneBook function from the CommonService that initiates the http request to the back end to get one book corresponding to that id.
//AFter fetching the response the data is store in the book variable.
  getBook(id){
  this.commonService.getOneBook(id)
    .subscribe(data=>{
      this.book = data;
    })
  }

//On hitting Edit button, this function is called that further calls the updateExistingBook function of the CommonService
//that initiates the http req to backend to call the update route which - finds the Book with this 'id' an updates it.
//After this, the page is navigated to the /book-details/:id to see the changes made. Also, after editting
//the nackbar message pops up saying that the 'Book has been eddited'.
  updateBook(id, data){
    this.commonService.updateExistingBook(id, data)
      .subscribe((response)=>{
        let id = response['_id'];
        this.router.navigate(['/book-details',id],{relativeTo: this.route});
        this.snackBar.open("Book has been edited","OK",{
          duration: 20000,
        });
      },(err)=>{
        console.log(err);
      })
  }

//There is a way to clear all the fields of the book in the edit form.
  clear(bf: NgForm){
    bf.reset();
  }

}
