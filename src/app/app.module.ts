import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule }   from '@angular/forms';

import { MatDatepickerModule, MatNativeDateModule, MatExpansionModule, MatRadioButton, MatRadioButtonBase, MatRadioModule, MatTableModule } from '@angular/material';
import { MatInputModule, MatButtonModule, MatFormFieldModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { CreateRecipeComponent } from './recipes/create-recipe/create-recipe.component';
import { UsersComponent } from './users/users.component';
import { CreateuserComponent } from './users/createuser/createuser.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    CreateRecipeComponent,
    UsersComponent,
    CreateuserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,HttpClientModule,
    MatDatepickerModule, MatNativeDateModule,
    MatInputModule, MatButtonModule,
    MatFormFieldModule, MatExpansionModule,
    MatRadioModule, MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
