import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NotebookDataService } from '../../services/notebook-data.service'
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
  public note: FormGroup;
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

  constructor(private fb: FormBuilder, private _notebookDataService: NotebookDataService) { }

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
    if(this.note.valid)
    {
      const note = new Note(this.note.value.name, this.note.value.description, this.note.value.position, this.note.value.techniqueType, this.note.value.counter, this.note.value.image);
      this._notebookDataService.addNoteToNotebook(note, this.notebook).subscribe();
      this.note.reset();
    }
    
    }
  }