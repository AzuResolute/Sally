import { Injectable } from '@angular/core';
import * as d3 from 'd3';
import { Node, Link, ForceDirectedGraph } from './models';

@Injectable()
export class D3Service {

    constructor() {}

    applyZoomableBehavior(svgElement, containerElement) {
        let svg, container, zoomed, zoom;

        svg = d3.select(svgElement);
        container = d3.select(containerElement);

        zoomed = () => {
            const transform = d3.event.transform;
            container.attr('transform', 'translate(' + transform.x + ',' + transform.y + ') scale(' + transform.k + ')');
        };

        zoom = () => {
            d3.zoom().on('zoom', zoomed);
        };
    }
    applyDraggableBehavior() {}
    getForceDirectedGraph(nodes: Node[], links: Link[], options: { width, height}) {
        const graph = new ForceDirectedGraph(nodes, links, options);
        return graph;
    }
}
