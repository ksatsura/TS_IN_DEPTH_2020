import * as Types from './types';
import { Category } from './enums';
import * as Interfaces from './interfaces';
import { RefBook, Library, ReferenceItem, UniversityLibrarian, Shelf, } from './classes';
import { createCustomer, getBooksByCategory, logCategorySearch, purge, getBooksByCategoryPromise, logSearchResults } from './functions';



showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}
// describe function type


// Task 02.01
// logFirstAvailable(getAllBooks());
// console.log(getAllBooks());

// const titles = getBookTitlesByCategory(Category.JavaScript);
// logBookTitles(titles);

// console.log(getBookAuthorByIndex(0));

// console.log(calcTotalPages());

//Task 03.01
// const myId: string = createCustomerId('Kate', 5);

// console.log(myId);

// let idGenerator: myFunction;

// idGenerator = (name: string, id: number) => `Id-${id}, Name-${name}`;
// idGenerator = createCustomerId;

// console.log(idGenerator('Kate', 5));

//Task 03.02

// createCustomer('Kate', undefined, 'Minsk');
// console.log(getBookTitlesByCategory());
// console.log(logFirstAvailable());

// console.log(checkoutBooks('Kate', 1, 2, 3));


//Task 03.03
// console.log(getTitles('Evan Burchard'));

//Task 03.04
// let result = bookTitleTransform('Hello');
// console.log(result);
// result = bookTitleTransform(123);
// console.log(123);

// Task 04.01
// const myBook = {
//     id: 5,
//     title: 'Colors, Backgrounds, and Gradients',
//     author: 'Eric A. Meyer',
//     available: true,
//     category: Category.CSS,
//     // year: 2015,
//     // copies: 3,
//     pages: 200,
//     damageReason: (reason) => `Damaged: ${reason}`
// };
// printBook(myBook);

// console.log(myBook.damageReason('missing back cover'));


//Task 04.02
// const logDamage: DamageLogger = (reason: string) => `Damaged: ${reason}`;
// console.log(logDamage('missing back cover'));
//
// Task 04.03
// const favouriteAuthor: Author = {
//     name: 'Author Name',
//     email: 'email@email.com',
//     numBookPublished: 20
// };

// const favouriteLibrarian: Librarian = {
//     name: 'Author Librarirna',
//     email: 'email@email.com',
//     department: 'Department',
//     assistCustomer: (custName) => console.log(custName)
// };

// console.log(favouriteAuthor);
// console.log(favouriteLibrarian);

//Task 04.04
// const offer: any = {};
// console.log(offer?.magazine);
// console.log(offer?.magazine?.getTitle?.());

//Task 04.05
// console.log(getBookProps(getAllBooks()[0], 'title'));
// console.log(getBookProps(getAllBooks()[0], 'markDamaged'));
// console.log(getBookProps(getAllBooks()[0], 'isbn'));


//Task 05.01
// const ref: ReferenceItem = new ReferenceItem(1, 'TypeScript', 2020);
// console.log(ref);
// ref.printItem();
// ref.publisher = 'Random publisher';
// console.log(ref.publisher);
// console.log(ref.getID());

//Task 05.02
// const refBook = new RefBook(1, 1, 'TypeScript', 2020);
// console.log(refBook);
// refBook.printItem();

//Task 05.03
// const refBook = new Encyclopedia(1, 1, 'TypeScript', 2020);
// console.log(refBook);
// refBook.printCitation();

// //Task 05.04
// const librarian: Interfaces.Librarian = new UniversityLibrarian();
// librarian.name = 'Anna';
// librarian.assistCustomer('Boris');

// // Task 05.05
// const personBook: Types.PersonBook = {
//     name: 'Author Name',
//     email: 'email@email.com',
// }

// Task 06.05

// const flag = true;

// if (flag) {
//     import('./classes').then(...)
// }

// Task 06.06

// let lib: Library = {
//     id: 1,
//     name: 'Ann',
//     address: 'Minsk'
// }

// console.log(lib);

//Task 07.01
// const inventory: Interfaces.Book[] =
//     [
//         { id: 1, category: Category.JavaScript, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true },
//         { id: 2, category: Category.JavaScript, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false },
//         { id: 3, category: Category.CSS, title: 'CSS Secrets', author: 'Lea Verou', available: true },
//         { id: 4, category: Category.JavaScript, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true }
//     ];

// const result = purge<Interfaces.Book>(inventory);
// console.log(result);

//Task 07.02
// const bookShelf: Shelf<Interfaces.Book> = new Shelf<Interfaces.Book>();
// inventory.forEach(book => bookShelf.add(book));
// console.log(bookShelf.getFirst().title);

// const magazines = [
//     { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//     { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//     { title: 'Five Points', publisher: 'GSU' }
// ];

// const magazineShelf: Shelf<Interfaces.Magazine> = new Shelf<Interfaces.Magazine>();
// magazines.forEach(mag => magazineShelf.add(mag));
// console.log(magazineShelf.getFirst().title);


// //Task 07.03
// magazineShelf.printTitles();
// console.log(magazineShelf.find('Five points'));

// Task 07.04
// const obj: Types.BookRequiredFields = {
//     id: 1,
//     title: 'unknown',
//     author: 'Author',
//     available: false,
//     category: Category.CSS,
//     pages: 100,
//     markDamaged: null,
// };

// const updBook: Types.UpdatedBook = {
//     id: 1,
//     title: 'Some Title',
// };

// const params: Parameters<Types.СreateCustomerFunctionType> = ['Anna', 30];
// createCustomer(...params);

// Task 08.02
// const obj = new UniversityLibrarian();
// console.log(obj);


//Task 08.03 08.04
// const obj = new UniversityLibrarian();
// obj.assistCustomer = null;
// obj.teachCommunity = null;
// console.log(obj);


//Task 08.04
// const ref = new RefBook(1, 12, 'Random title', 2020);

//Task 08.05
// const obj = new UniversityLibrarian();
// obj.name = 'Anna';
// console.log(obj);
// obj.assistCustomer('Boris');

//Task 08.06
// const obj = new UniversityLibrarian();
// obj.name = 'Anna';
// console.log(obj);
// obj.assistCustomer('Boris');


//Task 08.07
// const ref = new RefBook(1, 12, 'Random title', 2020);
// ref.copies = 10;
// ref.copies = -4;

//Task 09.01
// console.log('Start');
// getBooksByCategory(Category.JavaScript, logCategorySearch);
// getBooksByCategory(Category.SoftWare, logCategorySearch);
// console.log('End');

//Task 09.02
// console.log('Start');
// getBooksByCategoryPromise(Category.JavaScript)
//     .then(titles => { console.log(titles); return titles.length; })
//     .then(length => console.log(length))
//     .catch(console.log);
// getBooksByCategoryPromise(Category.SoftWare)
//     .then(console.log)
//     .catch(console.log);
// console.log('End');

//Task 09.03
console.log('Begin');
logSearchResults(Category.JavaScript);
logSearchResults(Category.SoftWare);
console.log('End');