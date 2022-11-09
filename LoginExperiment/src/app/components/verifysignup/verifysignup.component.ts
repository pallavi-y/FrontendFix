import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-verifysignup',
  templateUrl: './verifysignup.component.html',
  styleUrls: ['./verifysignup.component.css']
})
export class VerifysignupComponent implements OnInit {
  Exists:boolean=false;

  //Variable used to keep tab of whether the user has already registered or not
  Found:boolean=false;
  constructor(private service: EmployeeService,private router: Router) { }

  ngOnInit(): void {
  }

  form = {
    email : ''
  }

  onSubmit(): void {

    this.service.setVerify("Verify");
    console.log(JSON.stringify(this.form, null, 2));

    //Check if email is of the right domain
    if(this.form.email.includes("@eurofins.com")){
    this.service.getemail(this.form.email).subscribe(data=>{

      this.Exists=data.exists;
      this.Found=data.found;
      console.log(this.Exists);

      if(this.Exists==true)
    {
      if(this.Found==false){
      this.router.navigate(["/registerform", { 'email': this.form.email }]);
      }
      else{
        alert("User already exists.Please Sign in.")
        this.router.navigate(["/"]);
      }
    }
    else{
      alert("Please Enter Company registered Email");
    }

    });
   
  }
  else{
    alert("Please ensure to enter Eurofins domain mail id.");
  }
}
      
    }


