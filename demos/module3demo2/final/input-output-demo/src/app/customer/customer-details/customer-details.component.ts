import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerDetailsComponent implements OnInit {

  @Input() customer: any;
  @Output() customerChanged = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
    this.customer.name = "Tina Doe";
    setTimeout(()=> {
      this.customer.name = "SomeOther Doe";
    }, 2000);
  }

  change() {
    this.customer.name = "Jane Doe";
    this.customerChanged.emit(this.customer);
  }
}
