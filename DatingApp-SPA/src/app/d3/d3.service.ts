import { Injectable } from '@angular/core';
import * as d3 from 'd3';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class D3Service {
    constructor(private http: HttpClient) {}
    applyZoomableBehavior() {}
    applyDraggableBehavior() {}
    getForceDirectedGraph() {}
}
