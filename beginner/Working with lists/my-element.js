import {html, css, LitElement} from 'lit';
// TODO: Import directives

class MyElement extends LitElement {
  static styles = css`
    /* playground-fold */
    :host {
      display: block;
      width: 400px;
      height: 400px;
    }
    #board {
      display: grid;
      grid-template-columns: repeat(8, 1fr);
      grid-template-rows: repeat(8, 1fr);
      border: 2px solid #404040;
      box-sizing: border-box;
      height: 100%;
    }
    #board > div {
      padding: 2px;
    }
    .black {
      color: #ddd;
      background: black;
    }
    .white {
      color: gray;
      background: white;
    }
    /* playground-fold-end */

  `;

  render() {
    return html`
      <p>Let's play a game!</p>
      <div id="board">
        <!-- TODO: Place squares here. -->
      </div>
    `;
  }
}
customElements.define('my-element', MyElement);

const getColor = (row, col) => ((row + col) % 2 ? 'white' : 'black');
const getLabel = (row, col) => `${String.fromCharCode(65 + col)}${8 - row}`;
