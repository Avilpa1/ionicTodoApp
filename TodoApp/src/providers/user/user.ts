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

    itemObj = {
      "item": ''
    }

    signUpResult: any;
    logInResult: any;
    userDataResult: any;
    addItemResult: any;
    getItemResult: any

    activeId: any;
    activeToken: any;
    userLoggedIn: any = ''
    dbURL: string = "http://localhost:3000/api/userDbs"

    // User Sign Up
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

    // User Login
    logIn() {
      return this.http.post( this.dbURL + '/login', this.userCred )
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
          
          this.clearForm()
          this.findUserData() 
      })
    }

    // Retrives User ID and Token
    findData(id, token) {
      return this.http.get( this.dbURL + '/' + id + "?access_token=" + token )
    }

    findUserData() {
      this.findData(this.activeId, this.activeToken)
        .subscribe( (response) =>  {
          this.userDataResult = response
          console.log(this.userDataResult)
          this.userLoggedIn = 'Welcome, ' + this.userDataResult.firstName
          this.getItems()
      })
    }

    // Add Item to User DB List
    addItemRequest(id, token) {
      return this.http.post( this.dbURL + '/' + id + '/lists?access_token=' + token, this.itemObj  )
    }

    addItem() {
      this.addItemRequest(this.activeId, this.activeToken)
        .subscribe( (response) =>  {
          this.addItemResult = response
          console.log(this.addItemResult)
      }) 
    }

    // Delete Item From User DB List
    delItemRequest(id, token) {
      return this.http.delete( 'http://localhost:3000/api/lists/' + id + '?access_token=' + token )
    }

    delItem(id) {
      this.delItemRequest(id, this.activeToken)
        .subscribe( (response) =>  {
          this.userDataResult = response
          console.log(this.userDataResult)
          this.getItems()
      })
    }

    // Retrives DB Items
    getItemData(id, token) {
      return this.http.get( this.dbURL + '/' + id + '/lists' + '?access_token=' + token )
    }

    getItems() {
      this.getItemData(this.activeId, this.activeToken)
        .subscribe( (response) =>  {
          this.getItemResult = response
          console.log(this.getItemResult)
      })
    }

    // Clears Sign Up and Login Forms
    clearForm() {
      this.user.firstName = '';
      this.user.lastName = '';
      this.user.username = '';
      this.user.password = '';
      this.userCred.username = '';
      this.userCred.password = '';
    }

  //User logout
  logout() {
    console.log('user logged out')
    //logout code goes here
    this.userLoggedIn = '';
    this.activeId = '';
    this.activeToken = '';
    this.getItemResult = '';
    window.sessionStorage.clear()
  }

  logInCheck() {
    this.activeId = window.sessionStorage.getItem('userId')
    this.activeToken = window.sessionStorage.getItem('token')
    
    let location = window.location.href.substr(-4)
    
    if (this.activeId != null) {
      this.findUserData()
    }
  }

  

}
