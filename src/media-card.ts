/* eslint-disable prettier/prettier */
import { LitElement, html, customElement, property, CSSResult, TemplateResult, css, PropertyValues } from 'lit-element';
import {
  HomeAssistant,
  hasConfigOrEntityChanged,
  hasAction,
  ActionHandlerEvent,
  handleAction,
  LovelaceCardEditor,
  getLovelace,
} from 'custom-card-helpers';

import './editor';

import { MediaCardConfig } from './types';
import { actionHandler } from './action-handler-directive';
import { CARD_VERSION } from './const';

import { localize } from './localize/localize';

/* eslint no-console: 0 */
console.info(
  `%c  MEDIA-CARD \n%c  ${localize('common.version')} ${CARD_VERSION}    `,
  'color: orange; font-weight: bold; background: black',
  'color: white; font-weight: bold; background: dimgray',
);

function loadCSS(url) {
  const link = document.createElement('link');
  link.type = 'text/css';
  link.rel = 'stylesheet';
  link.href = url;
  document.head.appendChild(link);
}

//loadCSS('https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css');

// TODO Name your custom element
@customElement('media-card')
export class MediaCard extends LitElement {
  public static async getConfigElement(): Promise<LovelaceCardEditor> {
    return document.createElement('media-card-editor') as LovelaceCardEditor;
  }

  public static getStubConfig(): object {
    return {};
  }

  // TODO Add any properities that should cause your element to re-render here
  @property() public hass?: HomeAssistant;
  @property() private _config?: MediaCardConfig;

  public setConfig(config: MediaCardConfig): void {
    // TODO Check for required fields and that they are of the proper format
    if (!config || config.show_error) {
      throw new Error(localize('common.invalid_configuration'));
    }

    if (config.test_gui) {
      getLovelace().setEditMode(true);
    }

    this._config = {
      name: 'MediaCard',
      ...config,
    };
  }

  protected shouldUpdate(changedProps: PropertyValues): boolean {
    return hasConfigOrEntityChanged(this, changedProps, false);
  }

  protected render(): TemplateResult | void {
    if (!this._config || !this.hass) {
      return html`
      `;
    }

    const stateObj = this.hass.states[this._config.entity];

    if (this._config.entity && !stateObj) {
      return html`
        <ha-card>
          <div class="kc_warning">Entity Unavailable</div>
        </ha-card>
      `;
    }

    const json = JSON.parse(stateObj.attributes.data);
    if (!json || !json[1] || this.prev_json == JSON.stringify(json)) return;
    this.prev_json = JSON.stringify(json);

    const view = this._config.image_style || "fanart";
    const dateform = this._config.date || "mmdd";
    const icon = this._config.icon || json[0]["icon"];
    const icon_hide = this._config.icon == "none" ? "display:none;" : "";
    const icon_color = this._config.icon_color || "white";
    const flag_color = this._config.flag_color || "var(--primary-color)";
    const flag = this._config.flag == undefined ? true : this._config.flag;
    const timeform = {
      hour12: this._config.clock != 24,
      hour: "2-digit",
      minute: "2-digit"
    };
    const title_text = this._config.title_text || json[0]["title_default"];
    const line1_text = this._config.line1_text || json[0]["line1_default"];
    const line2_text = this._config.line2_text || json[0]["line2_default"];
    const line3_text = this._config.line3_text || json[0]["line3_default"];
    const line4_text = this._config.line4_text || json[0]["line4_default"];
    const line5_text = this._config.line5_text || json[0]["line5_default"];

    const text_link = this._config.text_link || json[0]["text_link_default"];
    const link = this._config.link || json[0]["link_default"];

    const title_size = this._config.title_size || "large";
    const line1_size =
      this._config.line1_size || this._config.line_size || "medium";
    const line2_size =
      this._config.line2_size || this._config.line_size || "small";
    const line3_size =
      this._config.line3_size || this._config.line_size || "small";
    const line4_size =
      this._config.line4_size || this._config.line_size || "small";
    const line5_size =
      this._config.line5_size || this._config.line_size || "small";
    const tSize = size =>
      size == "large" ? "14" : size == "medium" ? "12" : "10";
    const size = [
      tSize(title_size),
      tSize(line1_size),
      tSize(line2_size),
      tSize(line3_size),
      tSize(line4_size),
      tSize(line5_size)
    ];
    const defaultClr = "var(--primary-text-color)";
    const title_color =
      this._config.title_color ||
      defaultClr;
    const line1_color =
      this._config.line1_color ||
      this._config.line_color ||
      defaultClr;
    const line2_color =
      this._config.line2_color ||
      this._config.line_color ||
      defaultClr;
    const line3_color =
      this._config.line3_color ||
      this._config.line_color ||
      defaultClr;
    const line4_color =
      this._config.line4_color ||
      this._config.line_color ||
      defaultClr;
    const line5_color =
      this._config.line5_color ||
      this._config.line_color ||
      defaultClr;

    return html`
      <ha-card
        @action=${this._handleAction}
        .actionHandler=${actionHandler({
      hasHold: hasAction(this._config.hold_action),
      hasDoubleTap: hasAction(this._config.double_tap_action),
      repeat: this._config.hold_action ? this._config.hold_action.repeat : undefined,
    })}
        tabindex="0"
      >
        <div class="kc_front">
          <div class="">
            <h2 class="">Our Changing Planet</h2>
            <h3 class="">by Kurt Wagner</h3>
          </div>
          <div>
            <div>
              <mwc-button>Read</mwc-button>
              <mwc-button>Bookmark</mwc-button>
            </div>
            <div>
              <paper-icon-button icon="mdi:heart-outline" title="Add to favorites"></paper-icon-button>
              <button
                class="mdc-icon-button material-icons mdc-card__action mdc-card__action--icon--unbounded"
                title="Share"
                data-mdc-ripple-is-unbounded="true"
              >
                share
              </button>
              <button
                class="mdc-icon-button material-icons mdc-card__action mdc-card__action--icon--unbounded"
                title="More options"
                data-mdc-ripple-is-unbounded="true"
              >
                more_vert
              </button>
            </div>
          </div>
        </div>
        <div class="kc_back kc_masked">
          <img width="100%" height="100%" align="right"src="https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/2.jpg" />
        </div>
      </ha-card>
    `;
  }

  private _handleAction(ev: ActionHandlerEvent): void {
    if (this.hass && this._config && ev.detail.action) {
      handleAction(this, this.hass, this._config, ev.detail.action);
    }
  }

  static get styles(): CSSResult {
    return css`
      .kc_back {
        position: absolute;
        z-index: -1;
        height: 200px;
      }
      .kc_front {
        position: absolute;
        z-index: 1;
      }
      .kc_semi_opaque {
        opacity: 25%;
      }
      .kc_opaque {
        opacity: 100%;
      }
      .kc_masked {
        -webkit-mask-image: linear-gradient(to left, rgba(0, 0, 0, 1.0), transparent);
      }
      .kc_background_img {
        background-image: url("https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/2.jpg");
        //background-position: content;
        min-height: 100px;
      }
      .kc_warning {
        display: block;
        color: black;
        background-color: #fce588;
        padding: 8px;
      }
    `;
  }
}
