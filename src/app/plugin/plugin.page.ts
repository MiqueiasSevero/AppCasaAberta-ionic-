import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
@Component({
  selector: 'app-plugin',
  templateUrl: './plugin.page.html',
  styleUrls: ['./plugin.page.scss'],
})
export class PluginPage implements OnInit {
//    base64Image: any;
//base64Image: string[];
    base64Image = [] ;
    gelocalizacao = { lati : 0 , long :  0 };

   


  constructor(private camera: Camera, private geolocation:Geolocation) { }

  ngOnInit() {
  }

  tirarFoto() { 
   
      const options: CameraOptions = {
        quality: 30,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
      }
      
      this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.geolocation.getCurrentPosition().then((resp) => {
      
        this.gelocalizacao.lati = 10.00031;
        this.gelocalizacao.long = 152.22251;
        // resp.coords.latitude
        // resp.coords.longitude
       }).catch((error) => {
         console.log('Error getting location', error);
       });
       
        this.base64Image.push('data:image/jpeg;base64,' + imageData);
       
      }, (err) => {
      // Handle error
      });




  }
  localizacao() {
    
     
 }

}
