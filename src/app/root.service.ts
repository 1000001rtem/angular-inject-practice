import {Injectable} from '@angular/core';

@Injectable()
export class RootService {

  title = 'default';

  constructor(title: string) {
    this.title = title;
  }
}
