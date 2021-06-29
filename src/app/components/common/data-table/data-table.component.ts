import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  dataSource = [];

  @Input() tableHeaderName: string = '';

  @Input() columns: string[] = [];

  @Input() tableData: any = [];

  @Input() actions: any[] = [];

  @Input() linksColumnIndex = [-1];

  @Input() hoverColumnIndex = [-1];

  @Input() hoverColumnIcon = '';

  @Input() sortByParameter: any = {};

  @Input() backButtonShow: boolean = false;

  @Output() rowAction = new EventEmitter();

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    console.log(this.tableData);
    console.log(this.sortByParameter);
  }

  rowActionEvent(row: any, event: any) {
    console.log(row, event);
    this.rowAction.emit({ row, event });
    console.log('rowactiondata', this.rowAction);
  }

  sortByActionEvent(data: any, event: any) {
    this.rowAction.emit({ data, event });
  }

  navigate() {
    this.router.navigate(['../'], { relativeTo: this.activatedRoute });
  }
}
