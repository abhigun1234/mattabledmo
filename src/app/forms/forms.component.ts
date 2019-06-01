import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  name=""
  countries=['india','southafrica','srilanka','austrailia','pakistan','bangladesh']
  constructor() { }

  ngOnInit() {
  }
  register(val:string)
  { alert('hello')
    console.log(val)
  }
}
