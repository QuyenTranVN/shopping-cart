import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AdminService } from 'src/app/services/admin.service';

const ELEMENT_DATA: any[] = [];

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private adminService: AdminService) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.getDashboard();
  }
  getDashboard() {
    this.adminService.staticBill().subscribe((data: any) => {
      this.dataSource = data['data'];
      console.log(data);
    });
  }
}
