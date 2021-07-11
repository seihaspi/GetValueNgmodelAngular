import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GetvalueAngular';
  // submit(form:any){
  //   console.log(form);
  // }

  user:any={
    email:"",
    password:""
  };
  login(){
    console.log(this.user);
  }

}


