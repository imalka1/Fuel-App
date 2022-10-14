import { Component, OnInit } from '@angular/core';
import {FuelAdminService} from "../../../_service/fuel-admin.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-stock-out-admin',
  templateUrl: './stock-out-admin.component.html',
  styleUrls: ['./stock-out-admin.component.css']
})
export class StockOutAdminComponent implements OnInit {

  fuelStockOut;
  fuelStations=[];


  constructor(private fuelAdminService: FuelAdminService, private router: Router) {
    this.fuelStockOut = this.fuelAdminService.newOutFuelStock()
  }

  addFuelStockOut(){
    this.fuelAdminService.addFuelAdminStockOut(this.fuelStockOut).subscribe(() => {
      this.router.navigate(['/view_stock_out']);
    })
  }


  ngOnInit(): void {
    this.getFuelStations()
  }

  getFuelStations(){
    this.fuelAdminService.getFuelStations().subscribe((data) => {
      console.log(data)
      this.fuelStations=data
    })
  }

}
