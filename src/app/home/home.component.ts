import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';//อิมพอต
import {HerbService} from 'src/app/services/herb.service';
import {AlertService} from 'src/app/services/alert.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  item = [];//
  herb = [];
  errMsg: string;
  constructor(private route: Router,
    private HerbSV:HerbService,
    private alert:AlertService) { }

  ngOnInit() {
    this.fetchHerb();
  }
  gotoCreate(){
    this.route.navigate(['/','create']);//
  }

  private fetchHerb() {
    this.HerbSV.getHerb()
    .then(
      item => {
        this.herb = item;
        console.log(item);
      }
      )
  }

  onDelete(id) {
    const result = confirm('ยืนยันการลบ?');
    if (result) {
      const data = {
        HerbId : id
      };
      this.HerbSV
        .onDelete(id)
        .then(res => {
          this.alert.notify(res.message, 'success');
          this.fetchHerb();
        })
        
  }
}
}
