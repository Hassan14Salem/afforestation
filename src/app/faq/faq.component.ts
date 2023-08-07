import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FAQComponent implements OnInit {
show:boolean=false
show2:boolean=false
show3:boolean=false
show4:boolean=false
show5:boolean=false

changeIcon()
{
  this.show=!this.show
  this.show2=false
  this.show3=false
  this.show4=false
  this.show5=false
  
}
changeIcon2()
{
  this.show2=!this.show2

 
}
changeIcon3()
{
  this.show3=!this.show3

 
}
changeIcon4()
{
  this.show4=!this.show4

 
}
changeIcon5()
{
 
    this.show5=!this.show5
}


  constructor() { }

  ngOnInit(): void {
   
  }

}
