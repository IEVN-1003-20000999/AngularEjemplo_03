import { Component } from '@angular/core';
import { IProductos } from '../iproductos';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent {

  imageWidth:number=50;
  imageMargin:number=2;
  muestraImg:boolean=true;
  listFilter:String="";

  showImage():void{
    this.muestraImg=!this.muestraImg;
  }

  productos:IProductos[]=[
    {
      "Modelo":'Sentra',
      "Descripcion":"4 puertas Familiar",
      "Year":"febrero 2 2022",
      "Precio":120000,
      "Marca":"Nissan",
      "Color":"Azul",
      "ImagenUrl":"https://acroadtrip.blob.core.windows.net/catalogo-imagenes/s/RT_V_0c7166c16ff74073b65851f7f0b360ed.jpg"
    },
    {
      "Modelo":'A4',
      "Descripcion":"4 puertas Familiar",
      "Year":"marzo 5 2020",
      "Precio":180000,
      "Marca":"Audi",
      "Color":"Blanco",
      "ImagenUrl":"https://cloudflarestockimages.dealereprocess.com/resrc/images/stockphoto_asset-c_limit,f_auto,fl_lossy,w_auto/v1/svp/Colors_PNG1280/2020/20nissan/20nissansentrasvsd8a/nissan_20sentrasvsd8a_angularfront_freshpowder"
    },
    {
      "Modelo":'Rio',
      "Descripcion":"2 puertas Familiar",
      "Year":"febrero 2 2019",
      "Precio":130000,
      "Marca":"Kia",
      "Color":"Negro",
      "ImagenUrl":"https://65e81151f52e248c552b-fe74cd567ea2f1228f846834bd67571e.ssl.cf1.rackcdn.com/ldm-images/2019-Kia-Rio-Aurora-Black.png"
    }
  ]

}
