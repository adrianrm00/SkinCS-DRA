import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Case } from 'src/app/case';
import { CaseService } from 'src/app/servicios/case.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cases-detail',
  templateUrl: './cases-detail.component.html',
  styleUrls: ['./cases-detail.component.scss']
})
export class CasesDetailComponent {

  @Input() case?: Case;

  constructor( private route: ActivatedRoute, private caseService: CaseService, private location: Location) { }

  ngOnInit(): void {
    this.getCase();
  }

  getCase(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.caseService.getCase(id)
      .subscribe(c => this.case = c);
  }

  goBack(): void {
    this.location.back();
  }

}
