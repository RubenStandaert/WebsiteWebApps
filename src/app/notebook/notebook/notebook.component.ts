import { Notebook } from '../notebook.model';
import { Component, OnInit, Input } from '@angular/core';
import { Route,  Router } from '@angular/router';
import { NotebookDataService } from '../../services/notebook-data.service'

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

  onNoteClick(NoteID) {
    // TO DO
    this.router.navigateByUrl('/wedstrijd-gegevens/' + NoteID);
  }

}