import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTable, MatTableModule} from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputFormComponent } from './input-form/input-form.component';
import { DetailsTableComponent } from './details-table/details-table.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input'

@NgModule({
  declarations: [
    AppComponent,
    InputFormComponent,
    DetailsTableComponent,
    NavigationBarComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
