import { Notebook } from '../notebook.model';
import { Component, OnInit } from '@angular/core';
import { Route,  Router } from '@angular/router';

@Component({
  selector: 'app-notebook',
  templateUrl: './notebook.component.html',
  styleUrls: ['./notebook.component.css']
})
export class NotebookComponent implements OnInit {

  notebook: Notebook;

  constructor(notebook: Notebook, private router: Router) {
    this.notebook = notebook;
   }

  ngOnInit() {
  }

  onNoteClick(NoteID) 
  {
    this.router.navigateByUrl('/wedstrijd-gegevens/' + NoteID);
  }

}
