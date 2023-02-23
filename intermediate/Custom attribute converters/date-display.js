import {LitElement, html} from 'lit';

export class DateDisplay extends LitElement {
  static properties = {
    date: {attribute: false},
  };

  constructor() {
    super();
    this.date = new Date();
  }

  render() {
    const locale = 'en-US';
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return html`
      <p>The given date is: ${this.date.toLocaleDateString(locale, options)}</p>
    `;
  }
}
customElements.define('date-display', DateDisplay);
