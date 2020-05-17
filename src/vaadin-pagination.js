import { LitElement, html, css } from 'lit-element';

class VaadinPagination extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        font-size: 14px;
      }

      div.paginator-page-container {
        display: block;
        @apply --layout-horizontal;
        @apply --layout-center;
        @apply --layout-center-justified;
        @apply --layout-center-center;
      }

      :host paper-button {
        margin: 0px 4px;
        padding: 2px 8px;
        /*margin: 0px;*/
        display: inline-block;
        position: relative;
        min-width: fit-content;
      }

      :host paper-button {
        color: var(--primary-text-color);
        background-color: transparent;
        border-radius: 16px;
      }

      :host paper-button[disabled] {
        background-color: var(--paper-item-icon-active-color);
      }

      :host span {
        margin: 0px 4px;
      }
    `;
  }

  static get properties() {
    return {
      /** Per-page limit of the elements. */
      limit: {
        type: Number,
        reflect: true,
        attribute: true,
      },
      /** Total count of the elements. */
      total: {
        type: Number,
        reflect: true,
        attribute: true,
      },
      /** Current page. */
      page: {
        type: Number,
        reflect: true,
        attribute: true,
      },
      /** Count of the pages displayed before or after the current page. */
      size: {
        type: Number,
        reflect: true,
        attribute: true,
      },
      /** Number of paginated pages. */
      pages: {
        type: Number,
      },
      /** Has pages before the current page. */
      hasBefore: {
        type: Boolean,
      },
      /** Has pages after the current page. */
      hasNext: {
        type: Boolean,
      },
      /** Has pages. */
      hasPages: {
        type: Boolean,
      },
      /** Displayed page elements */
      items: {
        type: Array,
      },
    };
  }

  constructor() {
    super();
    this.limit = 2;
    this.page = 2;
    this.size = 2;
    this.items = {};
    this.total = 20;
    this.hasBefore = this.computeBefore(this.page, this.pages);
    this.hasNext = this.computeNext(this.page, this.pages);
    this.hasPages = this.computeHasPage(this.items.size, this.total);
  }

  set page(val) {
    const oldVal = this._page;
    this._page = val;
    this.requestUpdate('page', oldVal);
    this.onPageChange(this._page, oldVal);
    this.observePageCount(this._page, this.limit, this.total);
  }

  get page() {
    return this._page;
  }

  set limit(val) {
    const oldVal = this._limit;
    this._limit = val;
    this.requestUpdate('limit', oldVal);
    this.observePageCount(this.page, this._limit, this.total);
  }

  get limit() {
    return this._limit;
  }

  set total(val) {
    const oldVal = this._total;
    this._total = val;
    this.requestUpdate('total', oldVal);
    this.observePageCount(this.page, this.limit, this._total);
  }

  get total() {
    return this._total;
  }

  set size(val) {
    const oldVal = this._size;
    this._size = val;
    this.requestUpdate('size', oldVal);
    this.observePageCount(this.page, this.limit, this._total);
  }

  get size() {
    return this._size;
  }

  render() {
    return html`
      <iron-iconset-svg name="pagination-icons" size="24">
        <svg>
          <defs>
            <g id="fast-forward">
              <path d="M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z"></path>
            </g>
            <g id="fast-rewind">
              <path d="M11 18V6l-8.5 6 8.5 6zm.5-6l8.5 6V6l-8.5 6z"></path>
            </g>
            <g id="navigate-before">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
            </g>
            <g id="navigate-next">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
            </g>
          </defs>
        </svg>
      </iron-iconset-svg>

      <div class="paginator-page-container" ?hidden="${!this.hasPage}">
        <paper-icon-button
          icon="mdi:skip-backward"
          @click="${event => this.onBegin()}"
          ?hidden="${!this.hasBefore}"
        ></paper-icon-button>
        <paper-icon-button
          icon="mdi:chevron-left"
          @click="${event => this.onBefore()}"
          ?hidden="${!this.hasBefore}"
        ></paper-icon-button>
        ${this.items.map(
          item => html`
            <paper-button
              raised="${!this.isCurrent(item, this.page)}"
              ?disabled="${this.isCurrent(item, this.page)}"
              @click="${event => this.onChange(item)}"
            >
              ${item}
            </paper-button>
          `,
        )}

        <paper-icon-button
          icon="mdi:chevron-right"
          @click=${event => this.onNext()}
          ?hidden="${!this.hasNext}"
        ></paper-icon-button>
        <paper-icon-button
          icon="mdi:skip-forward"
          @click=${event => this.onEnd()}
          ?hidden="${!this.hasNext}"
        ></paper-icon-button>
      </div>
    `;
  }

  computeBefore(page, pages) {
    return page > 1;
  }

  computeNext(page, pages) {
    return page < pages;
  }

  computeHasPage(itemsLength, total) {
    return itemsLength < total;
  }

  observePageCount(page, limit, total) {
    if (limit && total) {
      this.pages = parseInt(Math.ceil(parseFloat(total) / parseFloat(limit)));
    }

    if (page && limit && total) {
      const items = [];
      let firstIndex = page - parseInt(Math.floor(parseFloat(this.size) / 2));
      let lastIndex = page + parseInt(Math.floor(parseFloat(this.size) / 2));
      if (firstIndex < 1) {
        firstIndex = 1;
        lastIndex = Math.min(firstIndex + this.size - 1, this.pages);
      }
      if (lastIndex > this.pages) {
        lastIndex = this.pages;
        firstIndex = Math.max(1, lastIndex - this.size + 1);
      }
      for (let num = firstIndex; num <= lastIndex; num++) {
        items.push(num);
      }
      this.items = items;
      console.log(
        'paginated',
        page,
        'from',
        firstIndex,
        'to',
        lastIndex,
        limit,
        '/',
        this.pages,
        ':',
        items,
        'size',
        this.size,
      );
    }
  }

  onPageChange(newValue, oldValue) {
    this.dispatchEvent(new CustomEvent('page-change', { detail: { newPage: newValue, oldPage: oldValue } }));
  }

  isCurrent(index, page) {
    /*     console.log(index);

    console.log(index == page);
    console.log(page);
 */ return index == page;
  }

  onChange(item) {
    this.page = item;
    /*     console.log(this.id, 'pagination changed to', this.page);
     */ this.requestUpdate();
  }

  onBefore(event) {
    this.page = this.page > 0 ? this.page - 1 : 1;
  }

  onNext(event) {
    this.page = this.page < this.pages ? this.page + 1 : this.pages;
  }
  onBegin(event) {
    this.page = 1;
  }

  onEnd(event) {
    this.page = this.pages;
  }
}

customElements.define('vaadin-pagination', VaadinPagination);
