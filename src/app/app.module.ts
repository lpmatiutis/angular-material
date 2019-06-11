import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatSelectModule, MatInputModule, MatMenuModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatChipsModule} from '@angular/material/chips'; 

import {RouterModule} from '@angular/router';

import { ROUTES } from './app.routes';


import { AppComponent } from './app.component';
import { PruebamaterialComponent } from './components/pruebamaterial/pruebamaterial.component';

@NgModule({
  declarations: [
    AppComponent,
    PruebamaterialComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatMenuModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    RouterModule.forRoot(ROUTES, {useHash:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
