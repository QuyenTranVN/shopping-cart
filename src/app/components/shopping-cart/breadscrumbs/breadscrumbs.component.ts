import { Component, OnInit } from '@angular/core';
import { DataShareService } from 'src/app/services/dataShare.service';

@Component({
  selector: 'app-breadscrumbs',
  templateUrl: './breadscrumbs.component.html',
  styleUrls: ['./breadscrumbs.component.scss'],
})
export class BreadscrumbsComponent implements OnInit {
  constructor(private dataShare: DataShareService) {}

  ngOnInit(): void {
    this.getBreadsCrumb();
  }

  getBreadsCrumb() {
    this.dataShare.bread.subscribe((data) => {
      console.log(data);
    });
  }
}
