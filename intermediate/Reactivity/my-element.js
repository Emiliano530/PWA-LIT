import {LitElement, html} from 'lit';
import {map} from 'lit/directives/map.js';

export class MyElement extends LitElement {
  static properties = {
    groceries: {},
  };

  constructor() {
    super();
    this.groceries = ['tea', 'milk', 'honey', 'chocolate'];
  }

  removeItem(item) {
    const indexToRemove = this.groceries.indexOf(item);
    this.groceries.splice(indexToRemove, 1);
  }

  render() {
    return html`
      ${map(
        this.groceries,
        (item) =>
          html`<button @click=${() =>
            this.removeItem(item)}>x</button> ${item}<br>`
      )}
    `;
  }
}
customElements.define('my-element', MyElement);
