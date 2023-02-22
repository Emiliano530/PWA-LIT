import {css, html, LitElement} from 'lit';

class WordViewer extends LitElement {
  static properties = {
    idx: {state: true},
    words: {},
  };
  static styles = css`
    :host {
      background-color: white;
      color: violet;
      cursor: pointer;
      display: block;
    }
    pre {
      padding: 0.2em;
    }
  `;

  constructor() {
    super();
    // TODO: Add `playDirection` state.
    this.idx = 0;
    this.words = 'initial value';
  }

  intervalTimer;

  connectedCallback() {
    super.connectedCallback();
    this.intervalTimer = setInterval(this.tickToNextWord, 1000);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    clearInterval(this.intervalTimer);
    this.intervalTimer = undefined;
  }

  render() {
    const splitWords = this.words.split('.');
    // TODO: Update math so it won't go negatively out of bounds.
    const word = splitWords[this.idx % splitWords.length];
    // TODO: Add @click event handler that calls `this.switchPlayDirection`
    return html`<pre>${word}</pre>`;
  }
  // TODO: Increment by `this.playDirection`
  tickToNextWord = () => {
    this.idx += 1;
  };
}
customElements.define('word-viewer', WordViewer);
