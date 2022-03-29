import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculadora';
  textall="";
  res=0;
  calculate2():void{
    this.res=eval(this.textall);
  }
  ADD(number:string): void{
    this.textall=this.textall+number;
    (<HTMLInputElement>document.getElementById("textall")).value=this.textall;
    this.calculate2();
  }
}
