import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ServiceProvider} from '../../providers/service-provider';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  usuarios:any[];

  constructor(public navCtrl: NavController, public service: ServiceProvider) {
    this.getDados("pessoas");
  }

  getDados(obj:string){
    this.service.getData(obj).subscribe(
      data=>this.usuarios= data,
      err=>console.log(err)
    );
  }

}
