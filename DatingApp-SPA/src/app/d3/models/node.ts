import * as d3 from 'd3';
import APP_CONFIG from '../../app.config';

export class Node implements d3.SimulationNodeDatum {
    index?: number;
    x?: number;
    y?: number;
    vx?: number;
    vy?: number;
    fx?: number | null;
    fy?: number | null;
    id: string;
    name?: string;
    linkCount = 0;

    constructor(id, name?) {
        this.id = id;
        this.name = name;
    }

    prop = () => {
        return Math.sqrt(this.linkCount / APP_CONFIG.N);
    }

    get r() {
        return Math.max(window.innerWidth / 12, 40);
      }

    get fontSize() {
        return (8 + (window.innerWidth) / 50) + 'px';
    }

    get color() {
        const index = Math.floor(APP_CONFIG.SPECTRUM.length * this.prop());
        return APP_CONFIG.SPECTRUM[index];
    }
}
