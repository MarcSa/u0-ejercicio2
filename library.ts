import {Book} from "./classes/Book";
import {DigitalResource} from "./classes/DigitalResource";

const resource =
    new DigitalResource(
        1,
        "Introducció a TypeScript",
        "Anna",
    );
const book =
    new Book(
        2,
        "Aprèn TypeScript",
        "Marc",
        350,
    );

const isBookLarge =
    (
        book: Book,
    ): boolean =>
        book.numPages >
        300;

const markAsLoaned =
    (
        book: Book,
        status: string,
    ) => {
        book.status =
            status;
        console.log(
            `Estado de "${book.title}" actualizado a ${status}`,
        );
    };

book.status =
    "Disponible";

console.log(
    book.showDetails(),
);

console.log(
    resource.showDetails(),
);

console.log(
    `Is '${book.title}' a large book? ${isBookLarge(book) ? "Si" : "No"}`,
);

markAsLoaned(
    book,
    "Prestado",
);

console.log(
    `Detalles: ${book.showDetails()}`,
);
