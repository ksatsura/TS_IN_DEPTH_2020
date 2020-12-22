import { ReferenceItem } from '../classes';
import { positiveInteger } from '../decorators';

class Encyclopedia extends ReferenceItem {
  constructor(public edition: number, id: number, title: string, year: number) {
    super(id, title, year);
  }

  private _copies: number;

  @positiveInteger
  get copies() {
    return this._copies;
  }

  set copies(value) {
    this._copies = value;
  }

  printItem() {
    super.printItem();
    // Object.getPrototypeOf(); - можно обратиться к протатипу
    console.log(`Edition - ${this.edition}, year - ${this.year}`);
  }

  printCitation(): void {
    console.log(`${this.title} - ${this.year}`);
  }
}

export default Encyclopedia;
