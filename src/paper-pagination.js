/* eslint-disable prettier/prettier */
import { LitElement, html, css, customElement } from 'lit-element';

export class PaperPagination extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        --paper-button-disabled: {
          background-color: var(--dark-primary-color);
          color: var(--text-primary-color);
        }
      }

      .flex {
        @apply --layout;
      }

      .flex-horizontal {
        @apply --layout-horizontal;
      }

      .flex-vertical {
        @apply --layout-vertical;
      }

      .flex-start-justified {
        @apply --layout-start-justified;
      }

      .flex-center-justified {
        @apply --layout-center-justified;
      }

      .flex-end-justified {
        @apply --layout-end-justified;
      }

      #container {
        align-items: center;
      }

      paper-input {
        display: flex;
        position: relative;
        width: 50px;
        height: 60px;
      }

      paper-dropdown-menu {
        width: 50px;
        height: 60px;
      }

      paper-listbox {
        min-width: 60px;
      }

      paper-button {
        height: 30px;
        width: 30px !important;
        min-width: 30px !important;
        border-radius: 50%;
        margin: 0.29em;
        font-weight: 600;
      }

      .selected {
        @apply --paper-button-disabled;
      }
    `;
  }

  render() {
    return html`
      <div hidden$="[[hide]]">
        <div id="container"></div>
      </div>
    `;
  }

  /**
   * Properties
   */
  static get properties() {
    return {
      currentPageLabel: {
        type: String,
        value: 'of ',
      },

      /**
       * Define the position of the pagination.
       * @type {String}
       */
      position: {
        type: String,
        value: 'right',
        observer: '_changePosition',
      },

      /**
       * Maximum page to view -1 to see all page
       * @type {Number}
       */
      viewPageRange: {
        type: Number,
        value: 5,
      },

      /**
       * Current page
       * @type {Number}
       */
      page: {
        type: Number,
        value: 1,
        notify: true,
      },

      /**
       * Total items
       * @type {Number}
       */
      totalItems: {
        type: Number,
      },

      /**
       * Item per page
       * @type {Number}
       */
      itemPerPage: {
        type: Number,
        notify: true,
        observer: '_changeItemPerPage',
      },

      /**
       * Define the position of the pagination.
       * @type {Number}
       */
      numberPages: {
        type: Number,
        readOnly: true,
      },

      /**
       * List of item per page
       * @type {Array<Number>}
       */
      listNumberPerPage: {
        type: Array,
        value: () => {
          return [5, 10, 20, 30, 40, 50];
        },
      },

      /**
       * Define the position of the pagination.
       * @type {String}
       */
      nextIcon: {
        type: String,
      },

      /**
       * Name of the previous icon
       * @type {String}
       */
      previousIcon: {
        type: String,
      },
    };
  }

  static get observers() {
    return ['_render(page, totalItems, itemPerPage)'];
  }

  /**
   * @return {boolean}
   */
  _hide() {
    return this.totalItems <= this.itemPerPage;
  }

  /**
   * @param newValue
   * @private
   */
  _changeItemPerPage(newValue, oldValue) {
    let find = this.listNumberPerPage.find(itemPerPage => {
      return itemPerPage === newValue;
    });

    if (!find) {
      this.listNumberPerPage.push(newValue);
      this.listNumberPerPage.sort((prev, next) => {
        return prev - next;
      });
      this._render(this.page, this.totalItem, this.itemPerPage);
    }

    if (oldValue) {
      let firstPageElement = oldValue * (this.page - 1) + 1;
      this.page = Math.floor((firstPageElement - 1) / newValue + 1);
    }
  }

  /**
   * @param {Number} page
   * @param {Number} totalItem
   * @param {Number} itemPerPage
   * @private
   */
  _render(page, totalItem, itemPerPage) {
    this.hide = this._hide();
    if (typeof page !== 'number' || typeof totalItem !== 'number' || typeof itemPerPage !== 'number' || this.hide) {
      return;
    }

    this._setNumberPages(Math.ceil(totalItem / itemPerPage));

    this._clear();
    this.$.container.appendChild(this._createInputElement(page));

    if (this.nextIcon) {
      this.$.container.appendChild(this._createPreviousElement());
    }

    let middlePageButtonIndex = Math.floor(this.viewPageRange / 2);
    if (page > middlePageButtonIndex) {
      let firstPageButton;
      let lastPageButtonCounter = this.viewPageRange - middlePageButtonIndex;

      switch (true) {
        case this.numberPages > this.viewPageRange + 1 &&
          page + this.viewPageRange <= this.numberPages + lastPageButtonCounter:
          firstPageButton = page - middlePageButtonIndex;
          break;
        case this.numberPages > this.viewPageRange + 1 &&
          page + this.viewPageRange > this.numberPages + lastPageButtonCounter:
          firstPageButton = this.numberPages - this.viewPageRange + 1;
          break;
        default:
          firstPageButton = 1;
      }

      for (
        let count = firstPageButton;
        count < firstPageButton + this.viewPageRange && count <= this.numberPages;
        count++
      ) {
        this._createPageButton(page, count);
      }
    } else {
      for (let count = 1; count <= this.viewPageRange && count <= this.numberPages; count++) {
        this._createPageButton(page, count);
      }
    }

    if (this.nextIcon) {
      this.$.container.appendChild(this._createNextElement());
    }
    this.$.container.appendChild(this._createNumberItemsElement());
  }

  /**
   * @private
   */
  _createInputElement(page) {
    let element = document.createElement('paper-input');
    element.label = this.currentPageLabel + this.numberPages;
    element.alwaysFloatLabel = true;
    element.type = 'number';
    element.value = page;
    element.addEventListener('keyup', this._sendInput.bind(this));
    return element;
  }

  /**
   * @private
   */
  _createPreviousElement() {
    let element = document.createElement('paper-icon-button');
    element.icon = this.previousIcon;
    if (this.page > 1) {
      element.addEventListener('click', this._clickPreviousPage.bind(this));
    } else {
      element.disabled = true;
    }
    return element;
  }

  /**
   * @private
   */
  _createNextElement() {
    let element = document.createElement('paper-icon-button');
    element.icon = this.nextIcon;
    if (this.numberPages <= this.page) {
      element.disabled = true;
    } else {
      element.addEventListener('click', this._clickNextPage.bind(this));
    }
    return element;
  }

  /**
   * @private
   */
  _createNumberItemsElement() {
    let element = document.createElement('paper-dropdown-menu');
    element.label = 'Items';
    element.addEventListener('iron-select', this._clickItemPerPage.bind(this));
    let paperBox = document.createElement('paper-listbox');
    paperBox.slot = 'dropdown-content';
    for (let cont = 0; this.listNumberPerPage.length > cont; cont++) {
      if (this.itemPerPage === this.listNumberPerPage[cont]) {
        paperBox.selected = cont;
      }
      let paperItem = document.createElement('paper-item');
      paperItem.textContent = this.listNumberPerPage[cont];
      paperBox.appendChild(paperItem);
    }
    element.appendChild(paperBox);
    return element;
  }

  /**
   * @private
   */
  _clear() {
    while (this.$.container.hasChildNodes()) {
      this.$.container.removeChild(this.$.container.lastChild);
    }
  }

  /**
   * @param newPosition
   * @param oldPosition
   * @private
   */
  _changePosition(newPosition, oldPosition) {
    switch (newPosition) {
      case 'center':
        this.$.container.className = 'flex flex-center-justified';
        break;
      case 'left':
        this.$.container.className = 'flex flex-start-justified';
        break;
      default:
        this.$.container.className = 'flex flex-end-justified';
        break;
    }
  }

  /**
   * @param {CustomEvent} evt
   * @private
   */
  _clickPage(evt) {
    this.page = evt.target.page;
  }

  /**
   * @param {CustomEvent} evt
   * @private
   */
  _clickPreviousPage(evt) {
    if (this.page < 2) {
      return;
    }
    this.page--;
  }

  /**
   * @param {CustomEvent} evt
   * @private
   */
  _clickNextPage(evt) {
    if (this.numberPages <= this.page) {
      return;
    }
    this.page++;
  }

  /**
   * @param {CustomEvent} event
   * @private
   */
  _sendInput(event) {
    if (event.keyCode === 13) {
      let element = this.$.container.querySelector('paper-input');
      element.value = parseInt(element.value);
      if (element.value <= this.numberPages && element.value >= 1) {
        this.page = element.value;
      } else {
        element.value = undefined;
        element.placeholder = this.page;
      }
    }
  }

  /**
   * @param {CustomEvent} evt
   * @private
   */
  _clickItemPerPage(evt) {
    this.itemPerPage = parseInt(evt.detail.item.textContent);
  }

  /**
   * @param {number} page
   * @param {number} count
   * @private
   */
  _createPageButton(page, count) {
    let element;
    element = document.createElement('paper-button');
    element.textContent = count;
    element.page = count;
    if (count === page) {
      element.disabled = true;
      element.classList.add('selected');
    }
    element.addEventListener('click', this._clickPage.bind(this));
    this.$.container.appendChild(element);
  }
}

customElements.define('paper-pagination', PaperPagination);
