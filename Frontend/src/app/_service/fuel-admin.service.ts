import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FuelAdminService {

  fuelIn;
  fuelOut;
  fuelOrders;

  private baseURL = environment.backend_url;

  constructor(private http: HttpClient) {
  }

  addFuelAdmin(fuelAdmin): Observable<any> {
    return this.http.post<any>(environment.backend_url + '/fuel_admin/addFuelAdmin', fuelAdmin);
  }
  addFuelAdminStockIn(fuelAdmin): Observable<any> {
    console.log(fuelAdmin);
    return this.http.post<any>(environment.backend_url + '/fuel_admin/addFuelStock', fuelAdmin);
  }
  addFuelAdminStockOut(fuelAdmin): Observable<any> {
    console.log(fuelAdmin);
    return this.http.post<any>(environment.backend_url + '/fuel_admin/outFuelStock', fuelAdmin);
  }
  getFuelAdminStockIn(): Observable<any> {
    return this.http.get<any>(environment.backend_url + '/fuel_admin/getFuelStockIn');
  }
  getFuelAdminStockOut(): Observable<any> {
    return this.http.get<any>(environment.backend_url + "/fuel_admin/getFuelStockOut");
  }

  getFuelOrders(): Observable<any>{
    return this.http.get<any>(environment.backend_url + "fuel_admin/getFuelOrders");
  }

  getFuelStations(): Observable<any> {
    return this.http.get<any>(environment.backend_url + "/fuel_admin/getFuelStation");
  }

  updateStockIn(fuelIn): Observable<any> {
   // console.log("pppppp")
    console.log(fuelIn)
    return this.http.put<any>(environment.backend_url + "/fuel_admin/updateStockIn/" + fuelIn.id, fuelIn);
  }

  updateStockOut(fuelOut): Observable<any> {
    return this.http.put<any>(environment.backend_url + "/fuel_admin/updateStockOut/" + fuelOut.id, fuelOut);
  }

  deleteStockIn(id: string): Observable<any> {
    console.log(id);
    return this.http.delete<any>(environment.backend_url + '/fuel_admin/deleteStockIn/' + id);
  }

  deleteStockOut(id: string): Observable<any> {
    return this.http.delete<any>(environment.backend_url + '/fuel_admin/deleteStockOut/' + id);
  }

  getStockInById(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseURL + '/fuel_admin/getStockInById'}/${id}`);

  }




  newFuelAdmin() {
    return {
      nic: '',
      name: '',
      address: '',
      appUser: {
        email: '',
        password: '',
        contactNumber: '',
      }
    };
  }
  newAddFuelStock() {
    return {
      id: '',
      fuelType: '',
      stockFrom: '',
      amount: '',
      time: '',
      date: ''
    };
  }
  newOutFuelStock() {
    return {
      id: '',
      fuelType: '',
      date: '',
      time: '',
      amount: '',
      vehicleNumber: '',
      driverName: '',
      number: '',
      fuelStation: {
        id: '',
        address:''
      }
    };
  }

}
