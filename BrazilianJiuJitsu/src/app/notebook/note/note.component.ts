import { Note } from './note.model'
import { TechniqueType } from '../../enums/techniqueType.enum'
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})

export class NoteComponent implements OnInit {

  @Input() public note: Note;
  public counterName: string;

  constructor() {
    switch(this.note.techniqueType)
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
