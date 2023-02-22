import {html, LitElement} from 'lit';

class WordViewer extends LitElement {
  static properties = {
    words: {},
  };

  constructor() {
    super();
    // TODO: Add `idx` state
    this.words = 'initial value';
  }

  render() {
    // TODO: Split the `words` by `'.'`, and from the resulting word array
    // only show the word on index `this.idx`.
    return html`<pre>${this.words}</pre>`;
  }
}
customElements.define('word-viewer', WordViewer);
