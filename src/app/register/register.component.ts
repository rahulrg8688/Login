import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormArray, Validators, FormControl, Form } from '@angular/forms';
import { APiServiceService } from '../Services/api-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  passwordType:any;
  RetResponseMsg:any;
  clr:any;
  locationdropdown:any;
  constructor(public fb:FormBuilder,public ApiService:APiServiceService){}
  UserDetails:any=this.fb.group({
    username:['',Validators.required],
    password:['',Validators.required],
    
    Role:['',Validators.required],
    city:this.fb.array([this.createCity()])
    })

    createCity():FormControl{
      return this.fb.control('',Validators.required);
    }
    get city():FormArray{
      return this.UserDetails.get('city') as FormArray;
    }
    addItem():void{
      this.city.push(this.createCity());
    }
    removeItem(i:any){
      if(i>0){
        this.city.removeAt(i);
      }
      
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
      console.log(this.UserDetails.value);
      const data={
        username:this.UserDetails.value.username,
        password:this.UserDetails.value.password,
        LocationId:this.UserDetails.value.city[0],
        roles:this.UserDetails.value.Role,
        LocationId2:this.UserDetails.value.city[1]

      }
      console.log(data);
      this.ApiService.Register(data).subscribe((res:any)=>{
        console.log(res);
      })
    }
}
