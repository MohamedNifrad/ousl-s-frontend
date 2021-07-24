import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StyleMasterService {

  private lUrl: string = 'http://localhost:8080';
  constructor(private http: HttpClient) { }

  public getCategoryService(): Observable<any>
  {
    const url = this.lUrl + '/api/getCategory';
    return this.http.get(url);
  }

  public getItemService(): Observable<any>
  {
    const url = this.lUrl + '/api/getItem';
    return this.http.get(url);
  }

  public saveList(myForm){
    const url = this.lUrl + '/api/saveStyleMaster';
    return this.http.post(url, myForm);
  }

  public getItemByCategoryService(id): Observable<any>
  {
    const url = this.lUrl + '/api/getItemByCategory/'+id;
    return this.http.get(url);
  }

  public deleteItemByService(id): Observable<any>
  {
    const url = this.lUrl + '/api/delete/'+id;
    return this.http.delete(url);
  }
}