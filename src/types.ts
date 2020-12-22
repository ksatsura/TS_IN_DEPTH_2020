import * as Interfaces from './interfaces';
import { createCustomer } from './functions';

type myFunction = (name1: string, id: number) => string;

type BookProperties = keyof Interfaces.Book;

type PersonBook = Interfaces.Person & Interfaces.Book;

type BookOrUndefined = Interfaces.Book | undefined;

type BookRequiredFields = Required<Interfaces.Book>;

type UpdatedBook = Partial<Interfaces.Book>;

type AuthorWoEmail = Omit<Interfaces.Author, 'email'>;

type СreateCustomerFunctionType = (name: string, age?: number, city?: string) => void;

const createCustomerIDArr: myFunction = (name: string, id: number) => `${id} - ${name}`;

export { BookProperties, PersonBook, BookOrUndefined, BookRequiredFields, UpdatedBook, СreateCustomerFunctionType }
