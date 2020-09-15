import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-side-list',
  templateUrl: './side-list.component.html',
  styleUrls: ['./side-list.component.css']
})
export class SideListComponent implements OnInit {

  @Output() sideClose = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public onSideClose = () => {
    this.sideClose.emit();
  }
}
