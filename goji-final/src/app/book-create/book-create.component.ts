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

  saveBook(form: NgForm) {
    console.log("Inside the on save");
    console.log("seeeeeeeeeeeeeeeeeee");
    console.log(form);
    this.commonService.storeRecipes(this.book)
      .subscribe((response) => {
          console.log("res is");
          console.log(response);
          let id = response['_id'];
          console.log("id is"+id);
          this.router.navigate(['/book-details', id], {relativeTo: this.route});
          this.snackBar.open("Book has been created","OK",{
            duration: 20000,
          });
        }, (err) => {
          console.log(err);
        }
      );
  }

  // openSnackBar() {
  //   this.snackBar.open("Book with this ISBN already exists", "OK", {
  //     duration: 2000,
  //   });
  // }

  // saveBook() {
  //   console.log("Inside the on save");
  //   this.commonService.storeRecipes(this.book)
  //     .subscribe((response) => {
  //
  //       console.log("response is"+response);
  //
  //           if(response['exists'] == 1){
  //               console.log("The book with this isbn already exists");
  //               console.log(response['exists']);
  //               this.snackBar.open("Book with this ISBN already exists", "OK", {
  //                 duration: 20000,
  //               });
  //               this.router.navigate(['/books'], {relativeTo: this.route});
  //           }
  //           else{
  //                 console.log("inside the else asfter snackbar");
  //                 console.log(response['exists']);
  //                 console.log("res is");
  //                 console.log(response);
  //                 let id = response['_id'];
  //                 console.log("id is"+id);
  //                 this.router.navigate(['/book-details', id], {relativeTo: this.route});
  //               }
  //           }, (err) =>{
  //             console.log(err);
  //           });
  //
  //     }

    }
