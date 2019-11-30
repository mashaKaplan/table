import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Group} from '../models/Group';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['../app.component.scss', './group.component.scss']
})
export class GroupComponent {
  @Input() group: Group;
  @Input() groupTotal: number;
  @Output() removePaper: EventEmitter<any> = new EventEmitter();
  constructor() { }

  removeItem(paperIdx: number, subGroupIdx: number) {
    this.removePaper.emit({paperIdx, subGroupIdx});
  }

  calculateSubGroupTotal(subGroupIdx: number): number {
    return this.group.subGroups[subGroupIdx].papers.reduce((sum, paper) => (sum + paper.amount), 0);
  }

}
