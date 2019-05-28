import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  template:'<br><input #myInput type="text"> <button (click)="logMessage(myInput.value)" value="submit">Submit</button><br>{{name}}',
  styles: []
})


export class ContactComponent implements OnInit {

public name="See the result in console";

    constructor(){

    }
    ngOnInit(){

    }
    logMessage(value){
      console.log(value)

    }
}
