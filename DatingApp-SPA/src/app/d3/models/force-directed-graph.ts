import { EventEmitter } from '@angular/core';
import { Link } from './link';
import { Node } from './node';
import * as d3 from 'd3';

const FORCES = {
    LINKS: 1 / 50,
    COLLISION: 1,
    CHARGE: -1
};

export class ForceDirectedGraph {
    public ticker: EventEmitter<d3.Simulation<Node, Link>> = new EventEmitter();
    public simulation: d3.Simulation<any, any>;

    public _nodes: Node[] = [];
    public _links: Link[] = [];

    constructor(nodes, links, options: {width, height}) {
        this._nodes = nodes;
        this._links = links;
        this.initSimulation(options);
    }

    initNodes() {
        if (!this.simulation) {
            throw new Error('simulation was not initialized yet');
        }

        this.simulation.nodes(this._nodes);
    }

    initLinks() {
        if (!this.simulation) {
            throw new Error('simulation was not initialized yet');
        }

        this.simulation.force('links',
            d3.forceLink(this._links)
                .strength(FORCES.LINKS));
    }

    initSimulation(options) {
        if (!options || !options.with || !options.height) {
            throw new Error('missing options when initializing simulation');
        }

        if (!this.simulation) {
            const ticker = this.ticker;

            this.simulation = d3.forceSimulation()
                .force('charge',
                d3.forceManyBody()
                    .strength(FORCES.CHARGE)
            );

            this.simulation.on('tick', function() {
                ticker.emit(this);
            });

            this.initNodes();
            this.initLinks();
        }

        this.simulation.force('centers', d3.forceCenter(
            options.width / 2, options.height / 2
        ));

        this.simulation.restart();
    }
}
