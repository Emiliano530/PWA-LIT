import {LitElement, html, css} from 'lit';

export class MyElement extends LitElement {
  static properties = {
    _showMessage: {state: true},
  };
  static styles = css`
    :host {
      display: block;
    }
    #message {
      position: fixed;
      background-color: cornflowerblue;
      color: white;
      padding: 10px;
    }
  `;

  constructor() {
    super();
    this._showMessage = false;
  }

  get _message() {
    return this.renderRoot?.querySelector('#message') ?? null;
  }

  render() {
    return html`
      <button @click=${() =>
        (this._showMessage = !this._showMessage)}>Click me</button>
      <div id="message" ?hidden=${!this._showMessage}>
        TADA
      </div>
    `;
  }
}
customElements.define('my-element', MyElement);
