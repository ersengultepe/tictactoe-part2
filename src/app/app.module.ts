import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatSliderModule } from '@angular/material/slider';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { XoxComponent } from './components/xox/xox.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GameComponent } from './components/game/game.component';

@NgModule({
  declarations: [
    AppComponent,
    XoxComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    MatSliderModule,
    MatIconModule,
    MatAutocompleteModule,
    AppRoutingModule,
    MatChipsModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
