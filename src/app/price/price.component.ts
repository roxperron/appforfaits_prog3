import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {
@Input() price = 0;
@Input() newprice = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
