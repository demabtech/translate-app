import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tr-support',
  template: `
  <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
    <div class="col-md-5 p-lg-5 mx-auto my-5">
      <h1 class="display-5 font-weight-normal">{{ 'SUPPORT.lbl_title' | translate }}</h1>
      <p class="lead font-weight-normal">{{ 'SUPPORT.lbl_description' | translate }}</p>
    </div>
    <div class="product-device shadow-sm d-none d-md-block"></div>
    <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
  </div>  
  `,
  styles: []
})
export class SupportComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
