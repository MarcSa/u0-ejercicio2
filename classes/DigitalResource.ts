import {IResource} from "../interfaces/iresouce.interface";

export class DigitalResource implements IResource {
    readonly id: number;
    title: string;
    author: string;
    private _status: string =
        "Archivado";

    constructor(
        id: number,
        title: string,
        author: string,
    ) {
        this.id =
            id;
        this.title =
            title;
        this.author =
            author;
    }
    get status(): String {
        return this
            ._status;
    }
    set status(
        status: string,
    ) {
        this._status =
            status;
    }
    showDetails(): string {
        return `${this.title} (${this.author}) - Estado: ${this.status}.`;
    }
}
