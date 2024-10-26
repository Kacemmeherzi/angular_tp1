import { Time } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'WSUUP HOMIE';
  count = 1 ;
  inter : any ;
  color : string = 'red' ;
@ViewChild("namein") Input !: ElementRef 

  name :string = "kacem"
  age : number = 23 ;
  changecolor() :void {
    this.color = this.Input.nativeElement.value
  }
  increament() : void {
    this.count= this.count+ 1 ;
  }
  decreament() : void {
    this.count = this.count- 1 ;
  }
auto () : void {
  this.inter =  setInterval(()=>{
    this.count= this.count+1
  },10)
  
}
stop() : void{
     clearInterval(this.inter)
  }

  getname(): string {
    return this.name ;
    
  }
  changename() : void {

this.name = this.Input.nativeElement.value  }
}
