import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderMasterService {

  private lUrl: string = 'http://localhost:8080';
  constructor(private http: HttpClient) { }

  public getBuyerService(): Observable<any>
  {
    const url = this.lUrl + '/api/getBuyer';
    return this.http.get(url);
  }
  
  public getstyleService(): Observable<any>
  {
    const url = this.lUrl + '/api/getStyleMaster';
    return this.http.get(url);
  }

  public saveOrderMasterService(myForm){
    const url = this.lUrl + '/api/saveOrderMaster';
    return this.http.post(url, myForm);
  }

  
}
