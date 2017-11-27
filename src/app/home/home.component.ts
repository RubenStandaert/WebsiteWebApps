import { Notebook } from '../notebook/notebook.model';
import { Component, OnInit, Input } from '@angular/core';
import { Route,  Router } from '@angular/router';
import { NotebookDataService } from '../services/notebook-data.service'
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NotebookDataService]
})
export class HomeComponent implements OnInit {

  private _notebook: Observable<Notebook>;

  constructor(private _notebookDataService : NotebookDataService, private router: Router) {
   }

  ngOnInit() {
    // TO DO: get correct ID by user
    this._notebook = this._notebookDataService.notebookByID("5a130a2a34e45f3864f84778");
  }

  get notebook() {
    return this._notebook;
  }

  onNoteClick(NoteID) {
    // TO DO
    this.router.navigateByUrl('/wedstrijd-gegevens/' + NoteID);
  }

}