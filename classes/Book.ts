import {DigitalResource} from "./DigitalResource";
export class Book extends DigitalResource {
    numPages: number;
    constructor(
        id: number,
        title: string,
        author: string,
        numPages: number,
    ) {
        super(
            id,
            title,
            author,
        );
        this.numPages =
            numPages;
    }
    showDetails(): string {
        return `${this.title} (${this.author}) - Estado: ${this.status}. Páginas: ${this.numPages}`;
    }
}
