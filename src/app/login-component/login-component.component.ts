import { Component, OnInit } from '@angular/core';
import { APiServiceService } from '../Services/api-service.service';
import { FormBuilder,FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  locationdropdown:any;
  IsSubmit:any=false;
  RetResponseMsg:any;
  passwordType:any='password';
  ButtonText:any=false;
  clr={red:false,green:false}

constructor(public ApiService:APiServiceService,public fb:FormBuilder,public route:Router){

}

UserDetails:any=this.fb.group({
username:['',Validators.required],
password:['',Validators.required],
cities:['',Validators.required],
Role:['',Validators.required]
})

get user() {
  return this.UserDetails.controls;
}
ngOnInit(): void {
  const data=this.ApiService.getLocation().subscribe((res:any)=>{
    console.log(res);
    this.locationdropdown=res;
  })
}
togglePassword(){
  if(this.passwordType==='password'){
    this.passwordType='text';
  }
  else{
    this.passwordType='password'
  }

}
submit(){
  this.RetResponseMsg='';
  this.IsSubmit=true;
  console.log(this.UserDetails);
  const Data={
    username:this.UserDetails.value.username,
    password:this.UserDetails.value.password,
    LocationId:this.UserDetails.value.cities,
    roles:this.UserDetails.value.Role,
  
    
  }
  if(this.UserDetails.valid){
console.log("Started");
this.ButtonText=true;


  
  this.ApiService.PostDetails(Data).subscribe((res:any)=>{
    console.log(res);
    this.ButtonText=false;
      this.RetResponseMsg=res.message;
   
    if(res.status==1){
      alert("Login successful")
      this.clr={green:true,red:false}
      this.route.navigate(['/home']);
    }
    else{
      this.clr={green:false,red:true}
    }
  


})


  
 
}
}
}
