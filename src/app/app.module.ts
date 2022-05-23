import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TodoApp } from './todo.service';
import { TodoCreate } from './todocreate.component';

@NgModule({
  declarations: [
    AppComponent,TodoCreate
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [TodoApp],
  bootstrap: [AppComponent]
})
export class AppModule { }
