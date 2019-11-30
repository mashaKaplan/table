import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SubGroup} from '../models/SubGroup';

@Component({
  selector: 'app-sub-group',
  templateUrl: './sub-group.component.html',
  styleUrls: ['../app.component.scss', './sub-group.component.scss']
})
export class SubGroupComponent {
@Input() subGroup: SubGroup;
@Input() subGroupTotal: number;
@Output() removePaper: EventEmitter<any> = new EventEmitter();
  constructor() { }

  removeItem(index: number) {
    this.removePaper.emit(index);
  }

}
