import { Component, OnInit } from '@angular/core';
import { APiServiceService } from '../Services/api-service.service';
import { FormBuilder,FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  locationdropdown:any;
  RetResponseMsg:any;
  passwordType:any='password';
  clr={red:false,green:false}

constructor(public ApiService:APiServiceService,public fb:FormBuilder){

}

UserDetails:any=this.fb.group({
username:['',Validators.required],
password:['',Validators.required],
cities:['',Validators.required],
Role:['',Validators.required]
})

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
  console.log(this.UserDetails);
  const Data={
    username:this.UserDetails.value.username,
    password:this.UserDetails.value.password,
    LocationId:this.UserDetails.value.cities,
    roles:this.UserDetails.value.Role,
  
    
  }
  this.ApiService.PostDetails(Data).subscribe((res:any)=>{
    console.log(res);
this.RetResponseMsg=res.message;
if(res.status==1){
  this.clr={green:true,red:false}
}
else{
  this.clr={green:false,red:true}
}
  })
}
}
