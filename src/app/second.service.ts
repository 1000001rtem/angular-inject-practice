import { Injectable } from '@angular/core';

@Injectable()
export class SecondService {

  title = 'default';

  constructor(title: string) {
    this.title = title;
  }
}
