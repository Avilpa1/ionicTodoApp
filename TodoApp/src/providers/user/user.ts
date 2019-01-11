import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Component } from '@angular/core';

@Injectable()
export class UserProvider {

  constructor(public http: HttpClient) {}

    user = {
      "firstName": '',
      "lastName": '',
      "username": '',
      "password": ''
    }

    userCred = {
      "username": '',
      "password": ''
    }

    signUpResult: any;
    loginResult: any;
    userDataResult: any;
    activeId: any 
    activeToken: any
    userLoggedIn: any = ''
    dbURL: string = "http://localhost:3000/api/userDbs"
    liURL: string = "http://localhost:3000/api/userDbs/login"


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

    logIn() {
      return this.http.post( this.liURL, this.userCred )
    }

    logInUser() {
        this.logIn()
          .subscribe( (response) =>  {
          this.logInResult = response
          console.log(this.logInResult)
          
          window.sessionStorage.setItem('token', this.logInResult.token);
          window.sessionStorage.setItem('userId', this.logInResult.userId);
          
          this.activeId = this.logInResult.userId
          this.activeToken = this.logInResult.token
          
          console.log(this.activeId)
          this.clearForm()
          this.findUserData()
          
      })
    }

    findData(id, token) {
      return this.http.get( this.dbURL + '/' + id + "?access_token=" + token )
    }

    findUserData() {
      this.findData(this.activeId, this.activeToken)
        .subscribe( (response) =>  {
          this.userDataResult = response
          console.log(this.userDataResult)
          this.userLoggedIn = 'Welcome, ' + this.userDataResult.firstName
      })
    }

    clearForm() {
      this.user.firstName = '';
      this.user.lastName = '';
      this.user.username = '';
      this.user.password = '';
      this.userCred.username = '';
      this.userCred.password = '';
    }


  

}
