import * as Types from './types';
import { Category } from './enums';
import * as Interfaces from './interfaces';

export function getAllBooks(): Array<Interfaces.Book> {
  const books: Interfaces.Book[] = [
    { id: 1, category: Category.JavaScript, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true },
    { id: 2, category: Category.JavaScript, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false },
    { id: 3, category: Category.CSS, title: 'CSS Secrets', author: 'Lea Verou', available: true },
    { id: 4, category: Category.JavaScript, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true }
  ];

  return books;
}

export function logFirstAvailable(books: readonly object[] = getAllBooks()): void {
  const numberOfBooks = books.length;

  console.log(books.find(book => book['available'])['title']);

  console.log(`Number of books ${numberOfBooks}`);
}

export function getBookTitlesByCategory(category: Category = Category.JavaScript) {
  const books = getAllBooks();
  const titles: string[] = [];

  return books.filter(book => book['category'] === category).map(book => book['title']);
}

export function logBookTitles(titles: string[]): void {
  return titles.forEach((title: string) => console.log(title));

}

export function getBookAuthorByIndex(index: number): [string, string] {
  const books = getAllBooks();

  const [title, author] = books['index'] as [title: string, author: string];

  return [title, author];
}

export function calcTotalPages(): bigint {
  const data = <const>[
    { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
    { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
    { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 }
  ];

  const result = data.reduce((acc, element) => acc + BigInt(element.books) * BigInt(element.avgPagesPerBook), BigInt(0));

  return result;
}

export function createCustomerId(name: string, id: number): string {
  return `Id-${id}, Name-${name}`;
}


export function createCustomer(name: string, age?: number, city?: string): void {
  if (name) {
    console.log(`Customer name: ${name};`);
  }
  if (age) {
    console.log(`Customer age: ${age};`);
  }
  if (city) {
    console.log(`Customer city: ${city}`);
  }
}



export function getBookByID(id: number): Types.BookOrUndefined {
  const books = getAllBooks();

  return books.find((book: { id: number }) => book.id === id);

}

export function checkoutBooks(customer: string, ...booksIds: number[]) {
  console.log(`Customer Name: ${customer}`);
  const titles: string[] = [];

  booksIds.forEach((id) => {
    const book = getBookByID(id);

    if (book?.available) {
      titles.push(book.title);
    }
  });

  return titles;
}


export function getTitles(author: string): string[];
export function getTitles(available: boolean): string[];
export function getTitles(id: number, available: boolean): string[];
export function getTitles(...args: (string | number | boolean)[]): string[] {
  const books = getAllBooks();

  if (args.length === 1) {
    const [arg] = args;

    if (typeof arg === 'string') {
      return books.filter((book: any) => book.author === arg).map((book: any) => book.title);
    } else if (typeof arg === 'boolean') {
      return books.filter((book: any) => book.available === arg).map((book: any) => book.title);
    }
  } else if (args.length === 2) {
    const [id, available] = args;

    if (typeof id === 'number' && typeof available === 'boolean') {
      return books.filter((book: any) => book.available === id && book.id === id).map((book: any) => book.title);
    }
  }
}


export function assertStringValue(value: string): asserts value is string {
  if (typeof value !== 'string') {
    throw new Error('value should have been a string');
  }
}

export function bookTitleTransform(title: any) {
  assertStringValue(title);

  return [...title].reverse().join('');
}

export function printBook(book: Interfaces.Book): void {
  console.log(book);
}

export function getBookProps(book: Interfaces.Book, prop: Types.BookProperties) {
  if (typeof book[prop] === 'function') {
    return book[prop][`name`];
  }

  return book[prop];
}


export function purge<T>(inventory: Array<T>): Array<T> {
  return inventory.slice(1, 2);
}

export function getBooksByCategory(category: Category, callback: Interfaces.LibMgrCallback): void {
  setTimeout(() => {
    try {
      const titles = getBookTitlesByCategory(category);

      if (titles.length > 0) {
        callback(null, titles);
      } else {
        throw new Error('No Books found');
      }
    } catch (error) {
      callback(error, null);
    }
  }, 2000);
}

export function logCategorySearch(error: Error, titles: string[]): void {
  if (error) {
    console.log(`Error message: ${error.message}`);
  } else {
    console.log(titles);
  }
}


export function getBooksByCategoryPromise(category: Category): Promise<string[]> {
  return new Promise<string[]>((resolve, reject) => {
    setTimeout(() => {
      const titles = getBookTitlesByCategory(category);

      if (titles.length > 0) {
        resolve(titles);
      } else {
        reject('No Books found');
      }
    }, 2000);
  });
}

export async function logSearchResults(category: Category): Promise<void> {
  try {
    const titles = await getBooksByCategoryPromise(category);
    console.log(titles?.length);
  } catch {
    console.log('No Books found');
  }
}