import {Injector, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OneComponent} from './one.component';
import {ParentComponent} from './parent/parent.component';
import {ChildComponent} from './parent/child/child.component';
import {TargetService} from '../target.service';
import {SecondService} from '../second.service';
import { ChildDirective } from './parent/child/child.directive';
import {RootService} from '../root.service';


@NgModule({
  declarations: [OneComponent, ParentComponent, ChildComponent, ChildDirective],
  providers: [
    {provide: TargetService, useFactory: () => new TargetService('t module')},
    {provide: SecondService, useFactory: () => new SecondService('s module')},
    ],
  imports: [
    CommonModule
  ],
  exports: [OneComponent]
})
export class OneModule {
  constructor(injector: Injector) {
    console.log('One module injector: ');
    console.log(injector);
  }
}
