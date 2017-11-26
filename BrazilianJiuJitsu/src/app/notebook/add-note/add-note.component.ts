import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NotebookDataService } from '../../services/notebook-data.service'
import { Position } from '../../enums/position.enum'
import { TechniqueType } from '../../enums/techniqueType.enum'
import { Note } from '../note/note.model'
import { Notebook } from '../notebook.model'
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css'],
  providers: [NotebookDataService]
})
export class AddNoteComponent implements OnInit {

  @Input() public notebook : Notebook;
  @Output() public newNote = new EventEmitter<Note>();
  private note: FormGroup;
  public readonly positions = [
                                "Bottom closed guard",
                                "Top closed guard",
                                "Bottom open guard",
                                "Top open guard",
                                "Top mount",
                                "Bottom mount",
                                "Top side control",
                                "Bottom side control",
                                "Standing",
                                "Bottom butterfly",
                                "Top butterfly",
                                "Bottom half guard",
                                "Top half guard",
                                "Bottom north south",
                                "Top north south",
                                "Back attack",
                                "Back defense",
                                "Top turtle",
                                "Bottom turtle",
                              ];
  public readonly techniqueTypes = [
                                      "Escape",
                                      "Submission",
                                      "Sweep",
                                      "Transition"
                                  ];

  constructor(private fb: FormBuilder, private _notebookDataService: NotebookDataService, private _router: Router) { }

  ngOnInit() {
    this.note = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      description: [''],
      position: ['', [Validators.required, Validators.minLength(2)]],
      techniqueType: ['', [Validators.required, Validators.minLength(2)]],
      counter: ['0', Validators.required],
      image: ['']
    });
  }

  onSubmit() {
    var p: Position;
    var tt: TechniqueType;
    switch(this.note.value.position)
    {
        case "Bottom closed guard": p = Position.BOTTOM_CLOSED_GUARD; break;
        case "Top closed guard": p = Position.TOP_CLOSED_GUARD; break;
        case "Bottom open guard": p = Position.BOTTOM_OPEN_GUARD; break;
        case "Top open guard": p = Position.TOP_OPEN_GUARD; break;
        case "Top mount": p = Position.TOP_MOUNT; break;
        case "Bottom mount": p = Position.BOTTOM_MOUNT; break;
        case "Top side control": p = Position.TOP_SIDE_CONTROL; break;
        case "Bottom side control": p = Position.BOTTOM_SIDE_CONTROL; break;
        case "Standing": p = Position.STANDING; break;
        case "Bottom butterfly": p = Position.BOTTOM_BUTTERFLY; break;
        case "Top butterfly": p = Position.TOP_BUTTERFLY; break;
        case "Bottom half guard": p = Position.BOTTOM_HALF_GUARD; break;
        case "Top half guard": p = Position.TOP_HALF_GUARD; break;
        case "Bottom north south": p = Position.BOTTOM_NORTH_SOUTH; break;
        case "Top north south": p = Position.TOP_NORTH_SOUTH; break;
        case "Back attack": p = Position.BACK_ATTACK; break;
        case "Back defense": p = Position.BACK_DEFENSE; break;
        case "Top turtle": p = Position.TOP_TURTLE; break;
        case "Bottom turtle": p = Position.BOTTOM_TURTLE; break;
    }
    switch(this.note.value.techniqueType)
    {
        case "Submission": tt = TechniqueType.SUBMISSION; break;
        case "Escape": tt = TechniqueType.ESCAPE; break;
        case "Sweep": tt = TechniqueType.SWEEP; break;
        case "Transition": tt = TechniqueType.TRANSITION; break;
    }
    const note = new Note(this.note.value.name, this.note.value.description, p, tt, this.note.value.counter, this.note.value.image);
    this._notebookDataService.addNoteToNotebook(note, this.notebook).subscribe();
    this._router.navigate(['home']);
    }
  }