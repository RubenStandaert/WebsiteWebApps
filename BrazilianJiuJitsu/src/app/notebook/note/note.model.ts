import { Position } from "../../enums/position.enum";
import { TechniqueType } from "../../enums/techniqueType.enum";

export class Note {
    private _id: string;
    private _name : string;
    private _description: string;
    private _position: Position;
    private _techniqueType: TechniqueType;
    private _counter: number;

    constructor(name: string, description: string, position: Position, techniqueType: TechniqueType, counter?: number) {
        this._name = name;
        this._description = description;
        this._position = position;
        this._techniqueType = techniqueType;
        this._counter = counter || 0;
    }

    toJSON() {
        return {
            _id: this._id,
            name: this._name,
            description: this._description,
            position: this.position,
            techniqueType: this._techniqueType,
            counter: this._counter
        };
    }

    static fromJSON(json): Note {
        const rec = new Note(json.name, json.description, json.position, json.techniqueType, json.counter);
        rec._id = json._id;
        return rec;
    }

    get id(): string {
        return this._id;
    }
    get name(): string {
        return this._name;
    }
    set name(name: string) {
        this._name = name;
    }

    get description(): string {
        return this._description;
    }
    set description(description: string) {
        this.description = description;
    }

    get position(): Position {
        return this._position;
    }
    set position(position: Position) {
        this._position = position;
    }

    get techniqueType(): TechniqueType {
        return this._techniqueType;
    }
    set techniqueType(techniqueType: TechniqueType) {
        this._techniqueType = techniqueType;
    }

    get counter(): number {
        return this._counter;
    }
    set counter(counter: number) {
        this._counter = counter;
    }

    get counterName(): string {
        switch(this.techniqueType)
        {
          case TechniqueType.ESCAPE: return 'Escapes';
          case TechniqueType.SUBMISSION: return 'Taps';
          case TechniqueType.SWEEP: return 'Sweeps';
          case TechniqueType.TRANSITION: return 'Transitions';
        }
    }
}