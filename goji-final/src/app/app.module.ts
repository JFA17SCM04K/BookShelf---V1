import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MessageModule} from 'primeng/message';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { HeaderComponent } from './header/header.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatChipsModule} from '@angular/material/chips';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule,MatSelectModule} from '@angular/material';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {TableModule} from 'primeng/table';
import {MatMenuModule} from '@angular/material/menu';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {GrowlModule} from 'primeng/growl';




import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {RadioButtonModule} from 'primeng/radiobutton';
import {CheckboxModule} from 'primeng/checkbox';
import {DropdownModule} from 'primeng/dropdown';
import {CalendarModule} from 'primeng/calendar';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {SpinnerModule} from 'primeng/spinner';
import {ChartModule} from 'primeng/chart';
import {ChartComponent} from './chart/chart.component';
import {CommonService} from './shared/common.service';
import {DialogModule} from 'primeng/dialog';

const appRoutes: Routes = [
  {
    path: 'books',
    component: BookComponent,
    data: { title: 'Book List' }
  },
  {
    path: 'books/charts',
    component: ChartComponent,
    data: { title: 'Charts' }
  },
  {
  path: 'book-details/:id',
  component: BookDetailComponent,
  data: { title: 'Book Details' }
  },
  {
  path: 'book-create',
  component: BookCreateComponent,
  data: { title: 'Create Book' }
  },
  {
  path: 'book-edit/:id',
  component: BookEditComponent,
  data: { title: 'Edit Book' }
  },
  { path: '',
    redirectTo: '/books',
    pathMatch: 'full'
  }
];
@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookDetailComponent,
    BookCreateComponent,
    BookEditComponent,
    HeaderComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatTabsModule,
    MatChipsModule,
    MatGridListModule,
    MatRadioModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    InputTextModule,
    ButtonModule,
    RadioButtonModule,
    TableModule,
    CheckboxModule,
    DropdownModule,
    CalendarModule,
    InputTextareaModule,
    SpinnerModule,
    MatMenuModule,
    MatDialogModule,
    MatSnackBarModule,
    MatListModule,
    MatDividerModule,
    ChartModule,
    MessageModule,
    MatProgressBarModule,
    GrowlModule,
    MatProgressSpinnerModule,
    DialogModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
