import { Position } from "../../enums/position.enum";
import { TechniqueType } from "../../enums/techniqueType.enum";

export class Note {
    private _id: string;
    private _name : string;
    private _description: string;
    private _position: Position;
    private _techniqueType: TechniqueType;
    private _counter: number;
    private _image: string;

    constructor(name: string, description: string, position: Position, techniqueType: TechniqueType, counter?: number, image?: string) {
        this._name = name;
        this._description = description;
        this._position = position;
        this._techniqueType = techniqueType;
        this._counter = counter || 0;
        this._image = image || "http://keithmackay.com/images/picture.jpg";
    }

    toJSON() {
        return {
            _id: this._id,
            name: this._name,
            description: this._description,
            position: this.position,
            techniqueType: this._techniqueType,
            counter: this._counter,
            image: this._image
        };
    }

    static fromJSON(json): Note {
        var p: Position;
        var tt: TechniqueType;
        switch(json.position)
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
        switch(json.techniqueType)
        {
            case "Submission": tt = TechniqueType.SUBMISSION; break;
            case "Escape": tt = TechniqueType.ESCAPE; break;
            case "Sweep": tt = TechniqueType.SWEEP; break;
            case "Transition": tt = TechniqueType.TRANSITION; break;
        }
        const rec = new Note(json.name, json.description, p, tt, json.counter, json.image);
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

    get image(): string {
        return this._image;
    }

    set image(image: string) {
        this._image = image;
    }
}