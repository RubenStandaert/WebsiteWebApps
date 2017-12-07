import { Notebook } from '../notebook.model';
import { Component, OnInit, Input } from '@angular/core';
import { Route,  Router } from '@angular/router';
import { NotebookDataService } from '../../services/notebook-data.service'
import { Subscription } from 'rxjs';
import * as html2canvas from 'html2canvas';
import * as jsPDF  from 'jspdf';

@Component({
  selector: 'app-notebook',
  templateUrl: './notebook.component.html',
  styleUrls: ['./notebook.component.css'],
  providers: [NotebookDataService]
})
export class NotebookComponent implements OnInit {

  @Input() public notebook: Notebook;

  constructor(private _notebookDataService : NotebookDataService, private router: Router) {
   }

  ngOnInit() {
  }

  clearNotebook() {
    if(window.confirm('Are sure you want to delete all your notes?'))
    {      
      const subscription : Subscription = this._notebookDataService.clearNoteBook(this.notebook).subscribe(obj => {
        if(obj)
        {
          subscription.unsubscribe();
          this.notebook.notes = [];
        }
      });
    };
  }
}