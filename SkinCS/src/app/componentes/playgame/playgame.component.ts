import { Component } from '@angular/core';
import { Case } from 'src/app/case';
import { CaseService } from 'src/app/servicios/case.service';
import { MessageService } from 'src/app/servicios/message.service';

@Component({
  selector: 'app-playgame',
  templateUrl: './playgame.component.html',
  styleUrls: ['./playgame.component.scss']
})
export class PlaygameComponent {
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
