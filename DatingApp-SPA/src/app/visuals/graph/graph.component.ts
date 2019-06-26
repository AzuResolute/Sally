import { Component, OnInit, AfterViewInit, Input, HostListener, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { ForceDirectedGraph, Node } from '../../d3/models';
import { D3Service } from '../../d3/d3.service';


@Component({
// tslint:disable-next-line: component-selector
  selector: 'graph',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit, AfterViewInit {
  @Input('nodes') nodes;
  @Input('links') links;
  graph: ForceDirectedGraph;

  _options: { width, height } = { width: 800, height: 600};

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.graph.initSimulation(this.options);
  }

  constructor(private d3Service: D3Service, private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.graph = this.d3Service.getForceDirectedGraph(this.nodes, this.links, this.options);
    this.graph.ticker.subscribe((d) => {
      this.cdRef.markForCheck();
    });
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
