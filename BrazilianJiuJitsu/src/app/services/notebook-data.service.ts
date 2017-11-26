import { Injectable } from '@angular/core';
import { Notebook } from '../notebook/notebook.model'
import { Note } from '../notebook/note/note.model'
import { Observable } from 'rxjs/Rx';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class NotebookDataService {

  private _appUrl = 'http://localhost:4200/API';

  constructor(private http: Http) {
  }

  get notebooks(): Observable<Notebook[]> {
    return this.http.get(`${this._appUrl}/notebooks`)
      .map(response => response.json().map(item => Notebook.fromJSON(item)));
  }

  // TO DO: get actual notebook by user
  notebookByID(ID : String) : Observable<Notebook> {
    return this.http.get(`${this._appUrl}/notebook/${ID}`)
    .map(response => response.json()).map(item => Notebook.fromJSON(item));
  }

  addNoteToNotebook(note: Note, nb: Notebook): Observable<Note> {
    return this.http.post(`${this._appUrl}/notebook/${nb.id}/notes/add`, note)
      .map(res => res.json()).map(item => Note.fromJSON(item));
  }

  removeNotebook(nb) {
    return this.http.delete(`${this._appUrl}/notebook/${nb.id}`).map(res => res.json()).map(item => Notebook.fromJSON(item));
  }
}
