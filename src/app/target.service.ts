import {Injectable} from '@angular/core';

@Injectable()
export class TargetService {

  title = 'default';

  constructor(title: string) {
    this.title = title;
  }
}
