import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customer: any;
  constructor() { }

  ngOnInit() {
    this.customer = {
      name: "John Doe",
      address: {
        city: "Cluj-Napoca"
      }
    }
  }

  changed(customer: any) {
    this.customer = customer;
  }
}
