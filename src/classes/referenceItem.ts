import { timeout } from "../decorators";

export default abstract class ReferenceItem {
  // private title: string; // | undefined ;
  // year: number;

  // constructor(newTitle: string, newYear: number) {
  //     console.log('Creating a new ReferenceItem...');
  //     this.title = newTitle;
  //     this.year = newYear;
  // }
  #id: number;

  static department: string = 'Clasical Literature';

  private _publisher: string;

  get publisher(): string {
    return this._publisher.toUpperCase();
  }

  set publisher(newPublisher: string) {
    this._publisher = newPublisher;
  }

  constructor(id: number, public title: string, protected year: number) {
    console.log('Creating a new ReferenceItem...');
    this.#id = id;
  }

  getID(): number {
    return this.#id;
  }

  @timeout(2000)
  printItem(): void {
    console.log(`${this.title} was published in ${this.year}`);
    console.log(`${ReferenceItem.department} - department`);
  }

  abstract printCitation(): void;

}

