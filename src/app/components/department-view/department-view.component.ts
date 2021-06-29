import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-view',
  templateUrl: './department-view.component.html',
  styleUrls: ['./department-view.component.scss']
})
export class DepartmentViewComponent implements OnInit {

  tableHaderName: string = 'Department List';

  columns: string[] = ['Department Name', 'Head of Department', 'Contact Number', 'edit'];

  hospitalList: any = [{ 'Department Name': 'x', 'Head of Department': 'Dr. A P Kulashekhar', 'Contact Number': 9876543210 },
  { 'Department Name': 'a', 'Head of Department': 'Dr. A P Kulashekhar', 'Contact Number': 9876543210 },
  { 'Department Name': 'abc', 'Head of Department': 'Dr. A P Kulashekhar', 'Contact Number': 9876543210 },
  { 'Department Name': 'ab', 'Head of Department': 'Dr. A P Kulashekhar', 'Contact Number': 9876543210 },
  { 'Department Name': 's', 'Head of Department': 'Dr. A P Kulashekhar', 'Contact Number': 9876543210 },
  { 'Department Name': 'c', 'Head of Department': 'Dr. A P Kulashekhar', 'Contact Number': 9876543210 },
  { 'Department Name': 'p', 'Head of Department': 'Dr. A P Kulashekhar', 'Contact Number': 9876543210 },
  { 'Department Name': 'q', 'Head of Department': 'Dr. A P Kulashekhar', 'Contact Number': 9876543210 },
  { 'Department Name': 'o', 'Head of Department': 'Dr. A P Kulashekhar', 'Contact Number': 9876543210 },
  { 'Department Name': 'i', 'Head of Department': 'Dr. A P Kulashekhar', 'Contact Number': 9876543210 },
  { 'Department Name': 'y', 'Head of Department': 'Dr. A P Kulashekhar', 'Contact Number': 9876543210 },
  { 'Department Name': 'e', 'Head of Department': 'Dr. A P Kulashekhar', 'Contact Number': 9876543210 }]

  rowActions = [
    { label: 'EDIT', icon: 'fa fa-pencil-square-o', hoverIcon: 'fa fa-pencil-square-o' },
    { label: 'DELETE', icon: 'base-comment', hoverIcon: 'base-comment_fill' }
  ];

  sortByParameter: {} = { label: 'Department Name', value: 'departmentName' };

  constructor() { }

  ngOnInit(): void {
  }

  tableEvent(e: any) {
    console.log(e, e['event']);
    switch (e.event) {
      case 'EDIT':
        console.log(e, e['event']);
        // this.editCOnfig(e);
        break;
      case 'DELETE':
        console.log(e, e['event']);
        // this.deleteConfig(e);
        break;
      case 'VIEW':
        console.log(e, e['event']);
        // this.viewConfing(e);
        break;
      case 'SORT':
        console.log(e, e['event']);
        this.sortList(e.data);
        break;
      default:
        break;
    }
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

}
