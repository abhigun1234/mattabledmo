import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wcteam',
  templateUrl: './wcteam.component.html',
  styleUrls: ['./wcteam.component.css']
})
export class WcteamComponent implements OnInit {
  countries=['india','srilanka','pakistan','south-africa','austrilia']
  constructor() { }

  ngOnInit() {
  }
  submit(val:any)
  {
    console.log(val)
  }

}
