import { Injectable } from '@angular/core';
import * as d3 from 'd3';
import { Node, Link, ForceDirectedGraph } from './models';

@Injectable()
export class D3Service {
    constructor() {}
    applyZoomableBehavior() {}
    applyDraggableBehavior() {}
    getForceDirectedGraph(nodes: Node[], links: Link[], options: { width, height}) {
        const graph = new ForceDirectedGraph(nodes, links, options);
        return graph;
    }
}
