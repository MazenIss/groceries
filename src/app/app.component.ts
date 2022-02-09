import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  b:boolean=false;
  onSelected(s:string){
    (s==='recipe') ? this.b=false : this.b=true;
  }

}
