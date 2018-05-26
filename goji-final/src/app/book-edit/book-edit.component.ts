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

  ngOnInit() {
    this.getBook(this.route.snapshot.params['id']);
  }


  getBook(id){
  this.commonService.getOneBook(id)
    .subscribe(data=>{
      this.book = data;
    })
  }


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

  clear(bf: NgForm){
    bf.reset();
  }

}
// openSnackBar() {
//   this.snackBar.open("Book with this ISBN already exists", "OK", {
//     duration: 2000,
//   });
// }
