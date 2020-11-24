import {Component, Host, Injector, OnInit, Optional, Self, SkipSelf} from '@angular/core';
import {TargetService} from '../../../target.service';
import {RootService} from '../../../root.service';
import {SecondService} from '../../../second.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  providers: [
    {provide: TargetService, useFactory: () => new TargetService('t child')},
    {provide: SecondService, useFactory: () => new SecondService('s child')},
  ],
})
export class ChildComponent implements OnInit {

  constructor(
    injector: Injector,
    targetService: TargetService,
    @SkipSelf() parentService: TargetService,
    @Self() selfService: TargetService,
    @Host() hostTargetService: TargetService,
    secondService: SecondService,
    @SkipSelf() parentSecondService: SecondService, // нет в родительском компоненте, но есть в модуле
    @Self() selfSecondService: SecondService,
    @SkipSelf() selfRoot: RootService,
    root: RootService,
    @Host() @Optional() host: RootService
  ) {

    console.log(`Child(@Host): ${hostTargetService.title}`); // t child
    console.log(`Child: ${targetService.title}`); // t parent
    console.log(`Child: ${secondService.title}`); // t child

    console.log(`Child(@SkipSelf): ${parentService.title}`); // t parent
    console.log(`Child(@Self): ${selfService.title}`); // t child


    console.log(`Child(@SkipSelf): ${parentSecondService.title}`); // s module
    console.log(`Child(@Self()): ${selfSecondService.title}`); // s child

    console.log(`Child: ${root.title}`); // root module
    console.log(`Child: ${selfRoot.title}`); // root module

    console.log(`Child(@Host): ${host}`); // null

    console.log(`Child injector: `);
    console.log(injector);
  }

  ngOnInit(): void {
  }

}
