import { Component, OnInit } from '@angular/core';
import {TargetService} from '../target.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css'],
  providers: [{provide: TargetService, useFactory: () => new TargetService('one')}],
})
export class OneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
