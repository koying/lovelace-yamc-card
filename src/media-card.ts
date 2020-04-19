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

function loadCSS(url): void {
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
  cardSize = 0;

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
    if (!json || !json[1]) return;

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
    const global_link = this._config.link || json[0]["link_default"];

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
    this.cardSize = Math.min(json.length - 1, this._config.max || 5);

    function truncate(text, chars) {
      // When to truncate depending on size
      chars = chars == "large" ? 30 : chars == "medium" ? 33 : 42;
      // Remove parentheses & contents: "Shameless (US)" becomes "Shameless".
      text = text.replace(/ *\([^)]*\) */g, " ");
      // Truncate only at whole word w/ no punctuation or space before ellipsis.
      if (text.length > chars) {
        for (let i = chars; i > 0; i--) {
          if (
            text.charAt(i).match(/( |:|-|;|"|'|,)/) &&
            text.charAt(i - 1).match(/[a-zA-Z0-9_]/)
          ) {
            return `${text.substring(0, i)}...`;
          }
        }
      } else {
        return text;
      }
    }

    function format_date(input_date) {
      // Match UTC ISO formatted date with time
      let fd_day, fd_month, fd_year;
      if (String(input_date).match(/[T]\d+[:]\d+[:]\d+[Z]/)) {
        fd_day = new Date(input_date).toLocaleDateString([], {
          day: "2-digit"
        });
        fd_month = new Date(input_date).toLocaleDateString([], {
          month: "2-digit"
        });
        fd_year = new Date(input_date).toLocaleDateString([], {
          year: "numeric"
        });
        // Match date string. ie: 2018-10-31
      } else if (String(input_date).match(/\d+[-]\d+[-]\d+/)) {
        input_date = input_date.split("-");
        fd_month = input_date[1];
        fd_day = input_date[2];
        fd_year = input_date[3];
      } else {
        return "";
      }
      if (dateform == "ddmm") return `${fd_day}/${fd_month}/${fd_year}`;
      else return `${fd_month}/${fd_day}/${fd_year}`;
    }

    const HTML: Array<TemplateResult> = [];

    for (let count = 1; count <= this.cardSize; count++) {
      const item = (key: string) => json[count][key];
      if (!item("airdate")) continue;
      if (this._config.hide_flagged && item("flag")) continue;
      else if (this._config.hide_unflagged && !item("flag")) continue;
      const airdate = new Date(item("airdate"));
      const dflag = item("flag") && flag ? "color: " + icon_color + ";" : "display:none;";
      const image =
        view == "poster" ? item("poster") : item("fanart") || item("poster");
      const daysBetween = Math.round(
        Math.abs(
          (new Date().getTime() - airdate.getTime()) / (24 * 60 * 60 * 1000)
        )
      );
      const day =
        daysBetween <= 7 ?
          airdate.toLocaleDateString([], {
            weekday: "long"
          }) :
          airdate.toLocaleDateString([], {
            weekday: "short"
          });

      // Format runtime as either '23 min' or '01:23' if over an hour
      const hrs = String(Math.floor(item("runtime") / 60)).padStart(2, "0");
      const min = String(Math.floor(item("runtime") % 60)).padStart(2, "0");
      const runtime =
        item("runtime") > 0 ? (item("runtime") > 60 ? `${hrs}:${min}` : `${min} min`) : "";


      const line = [title_text, line1_text, line2_text, line3_text, line4_text, line5_text];
      const tfull = [title_text, line1_text, line2_text, line3_text, line4_text, line5_text];
      const tsize = [title_size, line1_size, line2_size, line3_size, line4_size, line5_size];

      // Keyword map for replacement, return null if empty so we can hide empty sections
      const keywords = /\$title|\$episode|\$genres|\$number|\$rating|\$release|\$runtime|\$studio|\$day|\$date|\$time|\$aired|\$tagline|\$info|\$imdb_url|\$vfs_url/g;
      const keys = {
        $title: item("title") || null,
        $episode: item("episode") || null,
        $genres: item("genres") || null,
        $number: item("number") || null,
        $rating: item("rating") || null,
        $release: item("release") || null,
        $studio: item("studio") || null,
        $runtime: runtime || null,
        $day: day || null,
        $time: airdate.toLocaleTimeString([], timeform) || null,
        $date: format_date(item("airdate")) || null,
        $aired: format_date(item("aired")) || null,
        $tagline: item("tagline") || null,
        $info: item("info") || null,
        $imdb_url: item("imdb_url") || null,
        $vfs_url: item("vfs_url") || null
      };

      // Replace keywords in lines
      for (let i = 0; i < line.length; i++) {
        line[i] = line[i].replace(" - ", "-");
        // Split at '-' so we can ignore entire contents if keyword returns null
        const text = line[i].replace(keywords, val => keys[val]).split("-");
        const filtered: string[] = [];
        // Rebuild lines, ignoring null
        for (let t = 0; t < text.length; t++) {
          if (text[t].match(null)) continue;
          else filtered.push(text[t]);
        }
        // Replacing twice to get keywords in component generated strings
        tfull[i] = filtered.join(" - ").replace(keywords, val => keys[val]);
        line[i] = truncate(tfull[i], tsize[i]);
      }

      let tlink = "";
      if (text_link.length > 0) {
        tlink = text_link.replace(keywords, val => keys[val]);
      }
      let glink = "";
      if (global_link.length > 0) {
        glink = global_link.replace(keywords, val => keys[val]);
      }

      if (view == "poster") {
      } else {
        HTML.push(html`
          <!-- <tr><td class="kc_td" style="background-image: linear-gradient(to left, rgba(0, 0, 0, 1.0), transparent), url(${image});"> -->
          <tr><td class="kc_td">
            <div class="kc_front">
              <div class="">
                ${line.map((_item, i) => html`
                  <div class="kc_text_${tsize[i]}" title="${tfull[i]}">${line[i].match("empty") ? html`<br/>` : line[i]}</div>
                `)}
              </div>
              <div>
                <div>
                  ${tlink != "null" && tlink.length > 0 ? html`<mwc-button .url="${tlink}" @click="${this._openURL}">Details</mwc-button>` : html``}
                  ${glink != "null" && glink.length > 0 ? html`<mwc-button .url="${glink}" @click="${this._openURL}">Launch</mwc-button>` : html``}
                  <mwc-button
                  .id="${item("id")}"
                  .type="${item("type")}"
                  @click="${this._handleDeleteButton}"
                  >
                    Delete
                  </mwc-button>
                </div>
<!--                 <div>
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
 -->              </div>
            </div>
            <img class="kc_img kc_masked" align="right" src="${image}" />
            <ha-icon icon="${icon}" style="position: absolute; right: 10px; ${dflag}"></ha-icon>
          </td></tr>
        `);
      }
    }
    return html`
          <ha-card
            .actionHandler=${actionHandler({
      hasHold: hasAction(this._config.hold_action),
      hasDoubleTap: hasAction(this._config.double_tap_action),
      repeat: this._config.hold_action ? this._config.hold_action.repeat : undefined,
    })}
            tabindex="0"
          >
            <table class="kc_table">
              ${HTML.map((item) => item)}
            </table>
          </ha-card>
    `;
  }

  private _handleAction(ev: ActionHandlerEvent): void {
    if (this.hass && this._config && ev.detail.action) {
      handleAction(this, this.hass, this._config, ev.detail.action);
    }
  }

  private _handleDeleteButton(ev: MouseEvent): void {
    if (this.hass && this._config) {
      const id = (ev.currentTarget as any).id;
      const type = (ev.currentTarget as any).type;
      this.hass.callService("kodi", "remove", {
        id: id, type: type
      });
    }
  }

  private _openURL(ev: MouseEvent): void {
    if (this.hass && this._config) {
      const url = (ev.currentTarget as any).url;
      window.open(url, "_blank");
    }
  }

  static get styles(): CSSResult {
    return css`
      .kc_a:hover {
        text-decoration: underline;
      }
      .kc_text_small {
        color: var(--primary-text-color);
        font-size: 12px;
        text-decoration: none;
      }
      .kc_text_medium {
        color: var(--primary-text-color);
        font-size: 14px;
        text-decoration: none;
      }
      .kc_text_large {
        color: var(--primary-text-color);
        font-size: 16px;
        font-weight: 600;
        text-decoration: none;
      }
      .kc_container {
        width:100%;
        overflow:auto;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 10px;
        background-repeat:no-repeat;
        background-size:auto 100%;
        position:relative;
      }
      .kc_back {
/*         position: relative;
        z-index: -1;
 */
      }
      .kc_front {
        position: absolute;
        margin-top: 5px;
        margin-left: 10px;
        //z-index: 1;
      }
      .kc_table {
        width: 100%;
        border-spacing: 0px 5px;
      }
      .kc_td {
        background-position: content;
        border-collapse: collapse;
        padding: 3px;
        -webkit-box-shadow: 2px 2px 3px 2px rgba(0,0,0,0.50);
        -moz-box-shadow: 2px 2px 3px 2px rgba(0,0,0,0.50);
        box-shadow: 2px 2px 3px 2px rgba(0,0,0,0.50);     }
      .kc_semi_opaque {
        opacity: 25%;
      }
      .kc_opaque {
        opacity: 100%;
      }
      .kc_masked {
        -webkit-mask-image: linear-gradient(to left, rgba(0, 0, 0, 1.0), transparent);
        mask-image: linear-gradient(to left, rgba(0, 0, 0, 1.0), transparent);
      }
      .kc_img {
        height: 140px;
      }
      .kc_warning {
        display: block;
        color: black;
        background-color: #fce588;
        padding: 8px;
      }
      `;
  }

  public getCardSize(): number {
    return 10;
    //return this.cardSize;
  }
}
