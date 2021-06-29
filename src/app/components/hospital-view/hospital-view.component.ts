import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// const HOSPITAL_SCHEMA = {
//   "Hospital Name": "text",
//   "Contact Number": "text",
//   "View department": "text",
// }

@Component({
  selector: 'app-hospital-view',
  templateUrl: './hospital-view.component.html',
  styleUrls: ['./hospital-view.component.scss']
})
export class HospitalViewComponent implements OnInit {


  tableHaderName: string = 'Hospital List';

  columns: string[] = ['Hospital Name', 'Contact Number', 'View department', 'edit'];

  hospitalList = [{ 'Hospital Name': 'ac', 'Contact Number': 9958369954, 'View department': 'view' },
  { 'Hospital Name': 'ab', 'Contact Number': 9958369954, 'View department': 'view' },
  { 'Hospital Name': 'abb', 'Contact Number': 9958369954, 'View department': 'view' },
  { 'Hospital Name': 'abc', 'Contact Number': 9958369954, 'View department': 'view' },
  { 'Hospital Name': 'adcd', 'Contact Number': 9958369954, 'View department': 'view' }
    // { 'Hospital Name': 'abc', 'Contact Number': 9958369954, 'View department': 'view' },
    // { 'Hospital Name': 'abc', 'Contact Number': 9958369954, 'View department': 'view' },
    // { 'Hospital Name': 'abc', 'Contact Number': 9958369954, 'View department': 'view' },
    // { 'Hospital Name': 'abc', 'Contact Number': 9958369954, 'View department': 'view' },
  ]

  rowActions = [
    { label: 'EDIT', icon: 'fa fa-pencil-square-o', hoverIcon: 'fa fa-pencil-square-o' },
    { label: 'DELETE', icon: 'fa fa-delete', hoverIcon: 'fa fa-delete' }
  ];

  sortByParameter: {} = { label: 'Hospital Name', value: 'hospitalName' };

  // dataSchema: any = HOSPITAL_SCHEMA;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }

  tableEvent(e: any) {
    console.log(e, e['event']);
    switch (e.event) {
      case 'EDIT':
        console.log(e, e['event']);
        this.editCOnfig(e);
        break;
      case 'DELETE':
        console.log(e, e['event']);
        this.deleteConfig(e);
        break;
      case 'VIEW':
        console.log(e, e['event']);
        this.viewConfing(e);
        break;
      case 'SORT':
        console.log(e, e['event']);
        this.sortList(e.data);
        break;
      default:
        break;
    }
  }

  editCOnfig(rowData: any) {

  }

  deleteConfig(rowData: any) {
    this.hospitalList.splice(this.hospitalList.findIndex(hospital => hospital['Hospital Name'] === rowData['Hospital Name']), 1);
    console.log(this.hospitalList);
  }

  viewConfing(rowData: any) {
    this.router.navigate(['../department'], { relativeTo: this.activatedRoute });
  }

  sortList(sortByObject: any) {
    console.log(sortByObject);
    this.hospitalList.sort(function sort(a: any, b: any) {
      if (a[sortByObject.label].toLowerCase() < b[sortByObject.label].toLowerCase()) {
        return -1;
      }
      else if (a[sortByObject.label].toLowerCase() > b[sortByObject.label].toLowerCase()) {
        return 1;
      }
      else
        return 0;
    });
    console.log('this.hospitalList', this.hospitalList);
  }

  // deleteRow(rowData: any) {
  //   this.hospitalList.splice(this.hospitalList.findIndex(hospital => hospital['Hospital Name'] === rowData['Hospital Name']), 1);
  //   console.log(this.hospitalList);
  // }

}
