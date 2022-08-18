import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Router  } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-Add-Employee',
  templateUrl: './Add-Employee.component.html',
  styleUrls: ['./Add-Employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  form:any;
  topics=['angular','react','java'];
  onClick(){
    console.log("hello");}

  constructor(
    private router:Router,
    private route:ActivatedRoute  ) {
    this.form=new FormGroup(
      {
        id:new FormControl("",Validators.required),
        name:new FormControl("",Validators.required),
        email:new FormControl("",Validators.required),
        phone:new FormControl("",Validators.required),
        course:new FormControl("",Validators.required)




      }
    )
   }

  ngOnInit() {
  }
  save(){
    this.router.navigate(['/employeelist'])
  }

}
