import { Component, Input } from '@angular/core';
import { Node } from 'src/app/d3/models';

@Component({
  selector: '[nodeVisual]',
  templateUrl: './node-visual.component.html',
  styleUrls: ['./node-visual.component.css']
})
export class NodeVisualComponent {
  @Input('nodeVisual') node: Node;

  mobile () {
    if ('matchMedia' in window && window.matchMedia('(max-device-width: 767px)').matches) {
      return true;
    }
    return false;
  }
}
