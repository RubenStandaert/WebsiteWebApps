import { Note } from './note/note.model';

export class Notebook {
    private _id: string;
    private _notes: Note[];

    constructor(notes?: Note[]) {
        this._notes = notes || new Array<Note>();
    }

    toJSON() {
        return {
            _id: this._id,
            notes: this._notes,
        };
    }

    static fromJSON(json): Notebook {
        const rec = new Notebook(json.notes);
        rec._id = json._id;
        return rec;
    }

    get id(): string {
        return this._id;
    }

    get notes(): Note[] {
        return this._notes;
    }
}