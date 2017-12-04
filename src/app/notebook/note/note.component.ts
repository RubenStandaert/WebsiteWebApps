import { Note } from './note.model'
import { Component, OnInit, Input } from '@angular/core';
import { NotebookDataService } from '../../services/notebook-data.service'
import { AuthenticationService } from '../../services/authentication.service';
import { Notebook } from '../notebook.model';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css'],
  providers: [NotebookDataService, AuthenticationService]
})

export class NoteComponent implements OnInit {

  @Input() public note: Note;
  @Input() public notebook: Notebook;
  
  constructor(private _notebookDataService : NotebookDataService, private _authenticationService : AuthenticationService) {
    
   }

  ngOnInit() {
  }

  deleteNote(){
    if(window.confirm('Are sure you want to delete ' + this.note.name + '?'))
    {      
      const subscription : Subscription = this._notebookDataService.removeNoteFromNotebook(this.note, this.notebook).subscribe(obj => {
        if(obj)
        {
          subscription.unsubscribe();
          this.notebook.notes = this.notebook.notes.filter(note => note.id != this.note.id);
        }
      });
    };
  }
}
