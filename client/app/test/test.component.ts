import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template:require("./test.component.html")
})
export class TestComponent implements OnInit {

  name:string = "박경훈";
  num1:string;
  num2:string;
  result:number;
  op:string;
  isRed : boolean = true;
  constructor() { }

  ngOnInit() {
  }
  alertName():void{
    alert(this.name);
  }
  plus():void{
    if(this.op==""){
      alert("연산자를 입력해주세요.");
      return;
    }
    if(this.op=="+"){
      this.result = parseInt(this.num1) + parseInt(this.num2);
    }else if(this.op=="*"){
      this.result = parseInt(this.num1) * parseInt(this.num2);
    }else if(this.op=="/"){
      this.result = parseInt(this.num1) / parseInt(this.num2);
    }else if(this.op=="-"){
      this.result = parseInt(this.num1) - parseInt(this.num2);
    }
    
    console.log(this.result);
  }

}
