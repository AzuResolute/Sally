import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { ForceDirectedGraph, Node } from '../../d3/models';
import { D3Service } from '../../d3/d3.service';


@Component({
// tslint:disable-next-line: component-selector
  selector: 'graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit, AfterViewInit {
  @Input('nodes') nodes;
  @Input('links') links;
  graph: ForceDirectedGraph;

  _options: { width, height } = { width: 800, height: 600};

  constructor(private d3Service: D3Service) { }

  ngOnInit() {
    this.graph = this.d3Service.getForceDirectedGraph(this.nodes, this.links, this.options);
  }

  ngAfterViewInit() {
    this.graph.initSimulation(this.options);
  }

  get options() {
    return this._options = {
      width: window.innerWidth,
      height: window.innerHeight
    };
  }
}
