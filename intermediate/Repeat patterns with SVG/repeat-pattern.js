import {LitElement, html} from 'lit';

export class RepeatPattern extends LitElement {
  render() {
    return html`<svg height="100%" width="100%"></svg>`;
  }
}
customElements.define('repeat-pattern', RepeatPattern);
