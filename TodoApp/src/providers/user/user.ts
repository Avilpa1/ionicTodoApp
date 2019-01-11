import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Component } from '@angular/core';

import { LoginPage } from '../pages/login/login';
import { RegistrationPage } from '../pages/registration/registration';


@Injectable()
export class UserProvider {

  constructor(public http: HttpClient) {}
    user = {
      "firstName": '',
      "lastName": '',
      "userName": '',
      "password": ''
    }

    signUpResult: any;

    dbURL: string = "http://localhost:3000/api/userDbs"
    


    signUp() { 
      return this.http.post( this.dbURL, this.user )
    };
    
    signUpUser() {
        this.signUp()
          .subscribe( (response) =>  {
            this.signUpResult = response
            console.log(this.signUpResult)
            this.clearForm()
      })
    }

    clearForm() {
      this.user.firstName = '';
      this.user.lastName = '';
      this.user.userName = '';
      this.user.password = '';
    }



  

}
