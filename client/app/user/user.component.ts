import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  template:require("./user.component.html")
})
export class UserComponent implements OnInit {

  userName:string = "";
  userAge:number = 0;
  userNameList:Array<Object> = [
    {name:"홍길동", age:30},
    {name:"김길동", age:10},
    {name:"이길동", age:20} 
  ];

  userNum:number = 0;
  constructor() { }

  ngOnInit() {
  }

addUser():void{
    this.userNameList.push({name:this.userName,age:this.userAge});
    console.log(this.userNameList);
}
  updateUser():void{
      this.userNameList[this.userNum]
      = {name:this.userName,age:this.userAge};
      alert("수정 완료");
  }  
  deleteUser():void{
    var delObj:Object =
    this.userNameList[this.userNum];
    alert(delObj["name"] + "님 삭제 완료");
    this.userNameList.splice(this.userNum, 1);
  }

}
