import { Injectable } from '@angular/core';
import { Notebook } from '../notebook/notebook.model'
import { Note } from '../notebook/note/note.model'
import { Observable } from 'rxjs/Rx';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map'
import { AuthenticationService } from './authentication.service';

@Injectable()
export class NotebookDataService {

  private _appUrl = '/API';

  constructor(private http: Http, private auth: AuthenticationService) {
  }

  /*get notebooks(): Observable<Notebook[]> {
    return this.http.get(`${this._appUrl}/notebooks`, { headers: new Headers({Authorization: `Bearer ${this.auth.token}`}) })
      .map(response => response.json().map(item => Notebook.fromJSON(item)));
  }*/

  notebookByID(ID : String) : Observable<Notebook> {
    return this.http.get(`${this._appUrl}/notebook/${ID}`, { headers: new Headers({Authorization: `Bearer ${this.auth.token}`}) })
    .map(response => response.json()).map(item => Notebook.fromJSON(item));
  }

  addNoteToNotebook(note: Note, nb: Notebook): Observable<Note> {
    return this.http.post(`${this._appUrl}/notebook/${nb.id}/notes/add`, note, { headers: new Headers({Authorization: `Bearer ${this.auth.token}`}) })
      .map(res => res.json()).map(item => Note.fromJSON(item));
  }

  removeNoteFromNotebook(note : Note, nb: Notebook) {
    return this.http.post(`${this._appUrl}/notebook/${nb.id}/notes/delete/${note.id}`,
     { headers: new Headers({Authorization: `Bearer ${this.auth.token}`}) }).map(res => res.json()).map(item => Notebook.fromJSON(item));
  }
  

}
