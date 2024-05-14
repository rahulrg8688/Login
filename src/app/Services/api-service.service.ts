import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APiServiceService {

  constructor(private Route:Router,public Http:HttpClient) { }

  public Api="https://localhost:7140/api/Login/"

  PostDetails(data:any){
   return this.Http.post(this.Api+"validateUser",data)
  }
  getLocation(){
    return this.Http.get(this.Api+"cities")
  }
  Register(data:any){
    return this.Http.post(this.Api+"Register",data);
  }
  duplicatename(data:any){
    return this.Http.get(this.Api+`GetDuplicate?username=${data}`);
  }
}
