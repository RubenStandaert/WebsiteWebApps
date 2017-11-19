import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotebookComponent } from './notebook/notebook.component';
import { NoteComponent } from './note/note.component'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations:
   [NotebookComponent, NoteComponent]
})
export class NotebookModule { }
