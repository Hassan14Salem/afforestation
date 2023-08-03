import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FAQComponent implements OnInit {
changeIcon:string ="fa-minus"

changeTheIcon(){
  $('.change').click(()=> {
    $('.change').css('background','red')
  })
}
 
  constructor() { }

  ngOnInit(): void {
   
  }

}
