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

  constructor() {
    
   }

  ngOnInit() {
  }

}
