import { Component } from '@angular/core';
import { Case } from 'src/app/case';
import { CaseService } from 'src/app/servicios/case.service';

@Component({
  selector: 'app-topcases',
  templateUrl: './topcases.component.html',
  styleUrls: ['./topcases.component.scss']
})
export class TopcasesComponent {

  constructor(private caseService: CaseService) { }

  cases: Case[] = [];

  ngOnInit(): void {
    this.getCases();
  }

  getCases(): void {
    this.caseService.getCases()
      .subscribe(cases => this.cases = cases.slice(1, 5));
  }

}
