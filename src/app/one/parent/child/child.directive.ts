import {Directive, Host} from '@angular/core';
import {TargetService} from '../../../target.service';
import {SecondService} from '../../../second.service';

@Directive({
  selector: '[appChild]',
  providers: [
    {provide: TargetService, useFactory: () => new TargetService('decorator')},
  ],
})
export class ChildDirective {

  constructor(
    target: TargetService,
    @Host() parent: SecondService // Достанет оттуда куда прикрепили
  ) {
    console.log(`Декоратор(свой): ${target.title}`);
    console.log(`Декоратор(из родителя) ${parent.title}`);
  }

}
