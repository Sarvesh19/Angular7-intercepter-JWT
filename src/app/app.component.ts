import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service' ;

import { first } from 'rxjs/operators';
import {UserDetail} from './user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'FormSubmit';

  private  json: UserDetail = {
	"userName": "sarvesh",
	"password": "sarvesh123"
}

    constructor(private router: Router, private auth : AuthenticationService) {}



  ngOnInit() {
	this.auth.authenticate(this.json)
            .subscribe(
                data => {

                	
    				this.router.navigate([''])
                },
                error => {
                    console.log(error);
                    //this.loading = false;
                });



  }
}
