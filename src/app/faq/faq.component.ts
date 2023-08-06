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
  console.log(event)
}
changeIcon2()
{
  this.show2=!this.show2
  console.log(event)

 
}
changeIcon3()
{
  this.show3=!this.show3
  console.log(event)

 
}
changeIcon4()
{
  this.show4=!this.show4
  console.log(event)

 
}
changeIcon5()
{
 
    this.show5=!this.show5
}


  constructor() { }

  ngOnInit(): void {
   
  }

}
