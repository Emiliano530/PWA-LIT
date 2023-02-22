import {LitElement, html} from 'lit';

export class ToDoList extends LitElement {
  static properties = {
    _listItems: {state: true},
  };

  constructor() {
    super();
    this._listItems = [
      {text: 'Start Lit tutorial', completed: true},
      {text: 'Make to-do list', completed: false},
    ];
  }

  render() {
    return html`
      <h2>To Do</h2>
      <ul>
         <!-- TODO: Render list items. -->
      </ul>
      <input id="newitem" aria-label="New item">
      <button @click=${this.addToDo}>Add</button>
    `;
  }

  // TODO: Add click handler.
  addToDo() {}
}
customElements.define('todo-list', ToDoList);
