import { Component, OnInit } from '@angular/core';
import { sideBar } from 'src/app/models/sideBar';
import { sideBarService } from '../../../services/sideBar.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
  providers: [sideBarService],
})
export class FiltersComponent implements OnInit {
  categoryList: sideBar[] = [];
  browse = '';
  filter = '';
  filterByPrice = '';
  color: any = [];
  panelOpenState = false;
  constructor(private categoryService: sideBarService) {}

  ngOnInit(): void {
    this.categoryService.getsideBar().subscribe((sideBar: any) => {
      this.categoryList = sideBar['data'];
      this.browse = 'BROWSE';
      this.filter = 'FILTER BY';
      this.color = ['Black', 'Blue', 'Green'];
      this.filterByPrice = 'FILTER BY PRICE';
    });
  }
}
