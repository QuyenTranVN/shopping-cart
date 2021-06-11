import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AdminService } from 'src/app/services/admin.service';
import { MatDialog } from '@angular/material/dialog';
import { AdminCreateUserComponent } from '../admin-create-user/admin-create-user.component';
import { PageEvent } from '@angular/material/paginator';
import { DialogComponent } from 'src/app/components/shared/dialog/dialog.component';
export interface PeriodicElement {
  id: number;
  avatar: string;
  username: string;
  email: string;
}

const ELEMENT_DATA: PeriodicElement[] = [];
@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.scss'],
})
export class AdminUserComponent implements AfterViewInit {
  // dataSource: any;
  PageEvent: PageEvent;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  length: number;
  current_page: number = 1;
  constructor(private adminService: AdminService, public dialog: MatDialog) {}

  // ngOnInit(): void {
  //   // this.getUser();
  // }
  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
    this.getUser();
  }
  getUser() {
    let paginator = '?perPage=15&page=' + this.current_page;
    this.adminService.adminUser(paginator).subscribe((data: any) => {
      this.dataSource = data['data'];
      this.length = data.pagination.total;
      this.current_page = data.pagination.currentPage;
    });
  }

  delete(id: number) {
    this.dialog
      .open(DialogComponent, {
        data: {
          message: 'Do you want to delete it?',
          confirmButton: 'Yes',
          cancelButton: 'No',
        },
      })
      .afterClosed()
      .subscribe((res) => {
        if (res === 'success') {
          this.adminService.adminDeleteUser(id).subscribe((data) => {
            this.getUser();
          });
        }
      });
  }
  changePag(e: any) {
    this.current_page = parseInt(e.pageIndex) + 1;
    console.log(this.current_page);
    this.getUser();
  }
}
