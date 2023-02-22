import {LitElement, html} from 'lit';
import {map} from 'lit/directives/map.js';

class MyElement extends LitElement {
  static properties = {
    things: {state: true},
  };

  constructor() {
    super();
    this.things = [
      'Raindrops on roses',
      'Whiskers on kittens',
      'Bright copper kettles',
      'Warm woolen mittens',
    ];
  }

  render() {
    return html`
      <p>A few of my favorite things</p>
      <ul>
        <!-- TODO: Add click event handlers for the delete button  below. -->
        ${map(
          this.things,
          (thing, index) => html`
            <li>
              ${thing}
              <button>Delete</button>
            </li>
          `
        )}
      </ul>
    `;
  }
}
customElements.define('my-element', MyElement);
