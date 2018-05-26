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

  ngOnInit() {
    this.getBookDetail(this.route.snapshot.params['id']);
  }

  getBookDetail(id) {
    this.commonService.getOneBook(id)
      .subscribe(data=>{
        this.book = data;
      })
  }

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
