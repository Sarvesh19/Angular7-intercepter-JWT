import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PartnerlistComponent } from './partnerlist/partnerlist.component';
import {DataTablesModule} from 'angular-datatables';
import { StudentListComponent } from './student-list/student-list.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { SearchItemComponent } from './search-item/search-item.component';
import { BlockUIModule } from 'ng-block-ui';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { ChildComponent } from './child/child.component';
import { HighlightDirective } from './add-student/highlighter.directive';
import { AuthenticationService } from './authentication.service';
//import { AuthGaurdService } from './auth-gaurd.service';
import { BasicAuthHtppInterceptorService } from './basic-auth-intercepter.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    PartnerlistComponent,
    StudentListComponent,
    AddStudentComponent,
    SearchItemComponent,
    ChildComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule,
    //BlockUIModule.forRoot(),
    Ng4LoadingSpinnerModule.forRoot()

  ],
  providers: [ AuthenticationService, {
    provide: HTTP_INTERCEPTORS, useClass: BasicAuthHtppInterceptorService, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
