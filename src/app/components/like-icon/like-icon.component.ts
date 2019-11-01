import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-like-icon',
  templateUrl: './like-icon.component.html',
  styleUrls: ['./like-icon.component.css']
})
export class LikeIconComponent implements OnInit {

  @Input() likes : number;

  constructor() { }

  ngOnInit() {
  }

}
