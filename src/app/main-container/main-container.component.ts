import { Component, OnInit } from '@angular/core';
import {papersData} from '../data/papersData';
import {Group} from '../models/Group';
import {SubGroup} from '../models/SubGroup';
import {Paper} from '../models/Paper';

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
    this.total = this.calculateTotal();
  }

  removePaper($event: {paperIdx: number, subGroupIdx: number}, groupIndex: number) {
    const groupToUpdate = this.papersData[groupIndex];
    const subGroupToUpdate = groupToUpdate.subGroups[$event.subGroupIdx];
    subGroupToUpdate.papers.splice($event.paperIdx, 1);
    if (!subGroupToUpdate.papers.length) {
      groupToUpdate.subGroups.splice($event.subGroupIdx, 1);
    }
    if (!groupToUpdate.subGroups.length) {
      this.papersData.splice(groupIndex, 1);
    }
    this.total = this.calculateTotal();
  }

  private calculateTotal(): number {
    return this.papersData.reduce((sum, group) =>
      (sum + group.subGroups.reduce((groupSum, subGroup) =>
        (groupSum + subGroup.papers.reduce((subGroupSum, paper) => (subGroupSum + paper.amount), 0)), 0)), 0);
  }

  calculateGroupTotal(groupIndex: number): number {
    return this.papersData[groupIndex].subGroups.reduce((sum, subGroup) => (sum + subGroup.papers
      .reduce((subSum, paper) => (subSum + paper.amount), 0)), 0);
  }


  sortById() {
    this.papersData.forEach((group: Group) => group.subGroups
      .forEach((subGroup: SubGroup) => subGroup.papers.sort((p1, p2) => p1.id - p2.id)));
  }

  sortByAmount() {
    this.papersData.forEach((group: Group) => group.subGroups
      .forEach((subGroup: SubGroup) => subGroup.papers.sort((p1: Paper, p2: Paper) => p1.amount - p2.amount)));
  }

}
