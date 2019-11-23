import {Component, Input, OnInit} from '@angular/core';
import {Group} from '../models/Group';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['../app.component.scss', './group.component.scss']
})
export class GroupComponent implements OnInit {
  @Input() group: Group;
  groupTotal: number;
  constructor() { }

  ngOnInit() {
    this.groupTotal = this.group.subGroups.reduce((sum, subGroup) => (sum + subGroup.papers
      .reduce((subSum, paper) => (subSum + paper.amount), 0)), 0);
  }

}
