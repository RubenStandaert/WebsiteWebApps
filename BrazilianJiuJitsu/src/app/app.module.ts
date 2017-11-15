import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoteComponent } from './note/note.component';
import { NotebookComponent } from './notebook/notebook.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    NotebookComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
