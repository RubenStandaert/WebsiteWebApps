import { Note } from './note.model'
import { TechniqueType } from '../../enums/techniqueType.enum'
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})

export class NoteComponent implements OnInit {

  note: Note;
  counterName: string;

  constructor(note: Note) {
    this.note = note;
    switch(note.techniqueType)
    {
      case TechniqueType.ESCAPE: this.counterName = 'Escapes'; break;
      case TechniqueType.SUBMISSION: this.counterName = 'Taps'; break;
      case TechniqueType.SWEEP: this.counterName = 'Sweeps'; break;
      case TechniqueType.TRANSITION: this.counterName = 'Transitions'; break;
    }
   }

  ngOnInit() {
  }

}
