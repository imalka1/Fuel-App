import { Component, OnInit } from '@angular/core';
import {FuelAdminService} from "../../../_service/fuel-admin.service";

@Component({
  selector: 'app-update-stock-in',
  templateUrl: './update-stock-in.component.html',
  styleUrls: ['./update-stock-in.component.css']
})
export class UpdateStockInComponent implements OnInit {
  updatefuelStockIn;
  fuelIn;

  constructor(private fuelAdminService: FuelAdminService) {

    this.updatefuelStockIn = this.fuelAdminService.fuelIn;
    console.log(">>>>")
    console.log(this.updatefuelStockIn);
    this.updatefuelStockIn = this.fuelAdminService.newAddFuelStock()
  }

  updateFuelStockIn(){
    console.log(this.updatefuelStockIn.id + "...");
    this.fuelAdminService.updateStockIn(this.updatefuelStockIn).subscribe(data => {

    })
  }


  ngOnInit(): void {
    this.updatefuelStockIn = this.fuelAdminService.fuelIn;
  }

}

