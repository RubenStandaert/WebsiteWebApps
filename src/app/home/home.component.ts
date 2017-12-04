import { Notebook } from '../notebook/notebook.model';
import { Component, OnInit, Input } from '@angular/core';
import { Route,  Router } from '@angular/router';
import { NotebookDataService } from '../services/notebook-data.service'
import { AuthenticationService } from '../services/authentication.service'
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NotebookDataService]
})
export class HomeComponent implements OnInit {

  public notebook: Observable<Notebook>;

  constructor(private _notebookDataService : NotebookDataService, private _authenticationService : AuthenticationService) {
   }

  ngOnInit() {
    this.notebook = this._notebookDataService.notebookByID(this._authenticationService.notebookID);
  }
}