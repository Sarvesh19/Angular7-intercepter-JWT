import { Component, OnInit, Input, EventEmitter, Output, HostListener } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
	@Input() name :any;
	str : string ="lol.....";
  	@Output() sendValFromChild  = new EventEmitter<string>();
  	private numberOfClicks : number = 0;

  	  //change: EventEmitter<number> = new EventEmitter<number>();


  constructor() {
  	//this.sendValFromChild1();


   }

  ngOnInit() {
  }

  sendValFromChild1(){
  	this.sendValFromChild.emit(this.str);
  }

   @HostListener('click', ['$event.target'])
  onClick(btn) {
    console.log('button', btn, 'number of clicks:', this.numberOfClicks++);
 }

}
