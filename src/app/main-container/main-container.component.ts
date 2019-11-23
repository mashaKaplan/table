import { Component, OnInit } from '@angular/core';
import {papersData} from '../data/papersData';
import {Group} from '../models/Group';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['../app.component.scss', './main-container.component.scss']
})
export class MainContainerComponent implements OnInit {
  papersData: Group[];
  total: number;
  constructor() { }

  ngOnInit() {
    this.papersData = papersData;
    this.total = this.papersData.reduce((sum, group) =>
      (sum + group.subGroups.reduce((groupSum, subGroup) =>
      (groupSum + subGroup.papers.reduce((subGroupSum, paper) => (subGroupSum + paper.amount), 0)), 0)), 0);
  }

}
