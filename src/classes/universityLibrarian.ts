import * as Interfaces from '../interfaces';
import { Logger, logMethod, logParameter, writable, format } from '../decorators';

// @sealed('UniversityLibrarian')
// @Logger
class UniversityLibrarian implements Interfaces.Librarian {
  @format() name: string;
  email: string;
  department: string;

  // @logMethod
  assistCustomer(@logParameter custName: string): void {
    console.log(`${this.name} assists ${custName}`);
  }

  // @writable(true)
  assistFaculty(): void {
    console.log('Assisting faculty');
  }

  // @writable(false)
  teachCommunity(): void {
    console.log('Teaching community');
  }
}

export default UniversityLibrarian;