import { Injectable } from '@angular/core';
import { Herb } from 'src/app/model/herb';
import {HttpService} from 'src/app/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class HerbService {
  url: string='https://localhost:44388/api/Herbs';
  constructor(private http: HttpService) { }

  onHerb(model:Herb){
    return this.http
        .requestPost('Herbs/AddHerb', model)
        .toPromise() as Promise<{success,message}>;
  }

  getHerb(){
    return this.http
    .requestGet('Herbs')
    .toPromise() as Promise<[]>;
  }

  onUpdate(id: any, model: Herb) {
    return this.http
        .requestPut('Herbs/' + id, model)
        .toPromise() as Promise<{ message }>;
}

getProduct() {
    return this.http
        .requestGet('Herbs')
        .toPromise() as Promise<Herb[]>;
}

getOneProduct(id: any) {
    return this.http
        .requestGet('Herbs/' + id)
        .toPromise() as Promise<Herb>;
}

onDelete(id: any) {
    return this.http
        .requestDelete('Herbs/' + id)
        .toPromise() as Promise<{ message }>;
}
}
