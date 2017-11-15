import { Notebook } from '../notebook.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notebook',
  templateUrl: './notebook.component.html',
  styleUrls: ['./notebook.component.css']
})
export class NotebookComponent implements OnInit {

  notebook: Notebook;

  constructor(notebook: Notebook) {
    this.notebook = notebook;
   }

  ngOnInit() {
  }

}
