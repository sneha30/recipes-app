import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Users} from '../users';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {

  users = Users.EMPTY_MODEL;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onSubmit() {
    let url = 'http://192.168.1.106:5000/recipes/new'
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    this.http.post(url, this.users, httpOptions).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log("Error occured");
      }
    );
    alert(JSON.stringify(this.users) )
  }
}
