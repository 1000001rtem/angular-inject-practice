import {Component, Injector, OnInit} from '@angular/core';
import {TargetService} from '../../target.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  providers: [{provide: TargetService, useFactory: () => new TargetService('t parent')}],
})
export class ParentComponent implements OnInit {

  constructor(injector: Injector) {
    console.log(`Parent injector: `);
    console.log(injector);
  }

  ngOnInit(): void {
  }

}
