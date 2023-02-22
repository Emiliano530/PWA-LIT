import {LitElement, html} from 'lit';

export class NameTag extends LitElement {
  static properties = {
    name: {},
  };

  constructor() {
    super();
    this.name = 'Emiliano';
  }

  render() {
    // TODO: Add declarative event listener to input.
    return html`
      <p>Hello, ${this.name}</p>
      <input placeholder="Enter your name">
    `;
  }
}
customElements.define('name-tag', NameTag);
