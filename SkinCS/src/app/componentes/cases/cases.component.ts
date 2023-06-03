import { Component } from '@angular/core';
import { Case } from 'src/app/case';
import { CaseService } from 'src/app/servicios/case.service';
import { MessageService } from 'src/app/servicios/message.service';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.scss']
})
export class CasesComponent {

  constructor(private caseService: CaseService, private messageService: MessageService) { }

  selectedCase?: Case;
  cases: Case[] = [];

  ngOnInit(): void {
    this.getCases();
  }

  getCases(): void {
    this.caseService.getCases()
      .subscribe(cases => this.cases = cases);
  }

}
