import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from '../shared/common.service';
import { Observable } from 'rxjs/Observable';
import {MatSnackBar} from '@angular/material';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BookCreateComponent implements OnInit {

  book = {};

  constructor(private router: Router,
              private commonService: CommonService,
              private route: ActivatedRoute,
              public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  //saveBook function is called when a new book entry is done and Add Book button is clicked.
  //So, this function calls storeBooks function present in the CommonService which in turn makes an http request
  //to the backemd to the CREATE Route.
  //AFter being added to the db, it navigates to the /book-details route that shows the details of that nnew book added.
  //Further, a snackbar message pops up saying that the book has been createdd an this msg stays for 20000 msecs.
  saveBook(form: NgForm) {
    console.log("Inside the on save");
    console.log("seeeeeeeeeeeeeeeeeee");
    console.log(form);
    this.commonService.storeBooks(this.book)
      .subscribe((response) => {
          // console.log("res is");
          // console.log(response);
          let id = response['_id'];
          // console.log("id is"+id);
          this.router.navigate(['/book-details', id], {relativeTo: this.route});
          this.snackBar.open("Book has been created","OK",{
            duration: 20000,
          });
        }, (err) => {
          console.log(err);
        }
      );
  }
}
