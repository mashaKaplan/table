import {Component, Input, OnInit} from '@angular/core';
import {SubGroup} from '../models/SubGroup';

@Component({
  selector: 'app-sub-group',
  templateUrl: './sub-group.component.html',
  styleUrls: ['../app.component.scss', './sub-group.component.scss']
})
export class SubGroupComponent implements OnInit {
@Input() subGroup: SubGroup;
  subGroupTotal: number;
  constructor() { }

  ngOnInit() {
    this.subGroupTotal = this.subGroup.papers.reduce((sum, paper) => (sum + paper.amount), 0);
  }

}
