import { Component, OnInit, ElementRef } from '@angular/core';
import { StudentService } from '../student.service';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { Student } from '../student';
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(private studentservice:StudentService, private element: ElementRef) { }

  student : Student=new Student();
  submitted = false;
  dataTemp : any;

  valFromChild: any;
  nameVal  = "sarvesh in child";


  ngOnInit() {
    this.submitted=false;

    this.studentservice.getStudentFromFlask()
      .subscribe(data => {
        console.log(data)
        this.dataTemp = data;
      }, error => console.log(error));


  }

  public sendValFromChild(event : string){
    this.valFromChild = event;
  }

  studentsaveform=new FormGroup({
    student_name:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),
    student_email:new FormControl('',[Validators.required,Validators.email]),
    student_branch:new FormControl()
  });

  saveStudent(saveStudent){
    this.student=new Student();   
    this.student.firstName=this.StudentName.value;
    this.student.email=this.StudentEmail.value;
    this.student.lastName=this.StudentBranch.value;
    this.submitted = true;
    this.save();
  }

  

  save() {
console.log(this.element);

    this.studentservice.createStudent(this.student)
      .subscribe(data => console.log(data), error => console.log(error));
    this.student = new Student();
  }

  get StudentName(){
    return this.studentsaveform.get('student_name');
  }

  get StudentEmail(){
    return this.studentsaveform.get('student_email');
  }

  get StudentBranch(){
    return this.studentsaveform.get('student_branch');
  }

  addStudentForm(){
    this.submitted=false;
    this.studentsaveform.reset();
  }
}
