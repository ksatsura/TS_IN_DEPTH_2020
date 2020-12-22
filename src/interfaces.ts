import { Category } from './enums';


interface Book {
  id: number;
  title: string;
  author: string;
  available: boolean;
  category: Category;
  pages?: number;
  markDamaged?: DamageLogger
}

interface Person {
  name: string;
  email: string;
}

interface Author extends Person {
  numBookPublished: number;
}

interface Librarian extends Person {
  department: string;
  assistCustomer: (custName: string) => void
}

interface DamageLogger {
  (reason: string): void;
}

interface Magazine {
  title: string;
  publisher: string;
}

interface ShelfItem {
  title: string;
}

interface LibMgrCallback {
  (error: Error, titles: string[]): void;
}

export { Book, Person, Author, Librarian, DamageLogger as Logger, Magazine, ShelfItem, LibMgrCallback }