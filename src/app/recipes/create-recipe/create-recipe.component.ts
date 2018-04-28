import { Component, OnInit } from '@angular/core';
import {MatDatepickerModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RecipesModel } from '../recipes-model';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css']
})
export class CreateRecipeComponent implements OnInit {

  recipe = RecipesModel.EMPTY_MODEL;

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
    this.http.post(url, this.recipe, httpOptions).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log("Error occured");
      }
    );
    alert(JSON.stringify(this.recipe) )
  }
}
