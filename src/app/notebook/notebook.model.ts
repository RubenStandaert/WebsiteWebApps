import { Note } from './note/note.model';

export class Notebook {
    private _id: string;
    private _notes: Note[];

    constructor(notes?: Note[]) {
        this._notes = notes || [];
    }

    toJSON() {
        return {
            _id: this._id,
            notes: this._notes,
        };
    }

    static fromJSON(json): Notebook {
        const rec = new Notebook(json.notes.map(note => Note.fromJSON(note)));
        rec._id = json._id;
        return rec;
    }

    get id(): string {
        return this._id;
    }

    get notes(): Note[] {
        return this._notes.sort((a, b) => a.date < b.date? 1 : -1);
    }

    set notes(notes: Note[]) {
        this._notes = notes;
    }
}