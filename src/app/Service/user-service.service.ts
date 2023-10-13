import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor( private auth: Auth) {
   }
  
  registerAuth(user:any){
    user ={
      email:String,
      password:String,
    }
    return from(signInWithEmailAndPassword(this.auth, user.email, user.password ));

  }

  logout(){
    return from(this.auth.signOut());
  }
}


