import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() public sideToggle = new EventEmitter();
  
  title = 'Karl';
  constructor() {}

  ngOnInit(): void {

  }

  public onToggleSide = () => { 
    this.sideToggle.emit();
  }
}
