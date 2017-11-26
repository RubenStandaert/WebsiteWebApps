import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotebookComponent } from './notebook/notebook.component';
import { NoteComponent } from './note/note.component'
import { HomeComponent } from '../home/home.component'
import { RouterModule, Routes } from '@angular/router';
import { AddNoteComponent } from './add-note/add-note.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'add-note', component: AddNoteComponent }
];

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations:
   [HomeComponent, NotebookComponent, NoteComponent, AddNoteComponent]
})
export class NotebookModule { }
