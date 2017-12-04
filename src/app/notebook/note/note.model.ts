export class Note {
    private _id: string;
    private _name : string;
    private _description: string;
    private _position: string;
    private _techniqueType: string;
    private _counter: number;
    private _image: string;
    private _date: Date;

    constructor(name: string, description: string, position: string, techniqueType: string, counter?: number, image?: string) {
        this._name = name;
        this._description = description;
        this._position = position;
        this._techniqueType = techniqueType;
        this._counter = counter || 0;
        this._image = image || "http://keithmackay.com/images/picture.jpg";
        this._date = new Date();
    }

    toJSON() {
        return {
            _id: this._id,
            name: this._name,
            description: this._description,
            position: this.position,
            techniqueType: this._techniqueType,
            counter: this._counter,
            image: this._image,
            date: this._date
        };
    }

    static fromJSON(json): Note {
        console.log(json);
        const rec = new Note(json.name, json.description, json.position, json.techniqueType, json.counter, json.image);
        rec._date = json.date;
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

    get position(): string {
        return this._position;
    }
    set position(position: string) {
        this._position = position;
    }

    get techniqueType(): string {
        return this._techniqueType;
    }
    set techniqueType(techniqueType: string) {
        this._techniqueType = techniqueType;
    }

    get counter(): number {
        return this._counter;
    }
    set counter(counter: number) {
        this._counter = counter;
    }

    get image(): string {
        return this._image;
    }

    set image(image: string) {
        this._image = image;
    }

    get date(): Date {
        return this._date;
    }
}