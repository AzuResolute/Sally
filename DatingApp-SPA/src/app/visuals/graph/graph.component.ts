import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  @Input('nodes') nodes;
  @Input('links') links;

  constructor() { }

  ngOnInit() {
  }

}
