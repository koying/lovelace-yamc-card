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
import { popUp, closePopUp } from "card-tools/src/popup";

import './editor';
import './yamc-card-more-info'
import './yamc-card-details'
import './vaadin-pagination.js';

import { MediaCardConfig } from './types';
import { actionHandler } from './action-handler-directive';
import { CARD_VERSION } from './const';

import { localize } from './localize/localize';

/* eslint no-console: 0 */
console.info(
  `%c  YAMC \n%c  ${localize('common.version')} ${CARD_VERSION}    `,
  'color: orange; font-weight: bold; background: black',
  'color: white; font-weight: bold; background: dimgray',
);

const ENTER_KEY = 13;

@customElement('yamc-card')
export class MediaCard extends LitElement {
  cardSize = 0;
  @property() private _helpers?: any;

  private async loadCardHelpers(): Promise<void> {
    this._helpers = await (window as any).loadCardHelpers();
    if (this._helpers) {
      this._helpers.importMoreInfoControl('light');
    }
  }

  public static async getConfigElement(): Promise<LovelaceCardEditor> {
    return document.createElement('yamc-card-editor') as LovelaceCardEditor;
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
      name: 'YAMC',
      ...config,
    };
    this.loadCardHelpers();
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

    const json = JSON.parse(stateObj.attributes.yamc.data);
    if (!json || !json[0]) return;

    const view = this._config.image_style || "fanart";
    const dateform = this._config.date || "mmdd";
    const flag_color = this._config.flag_color || "rgba(250, 250, 250, 50%)";
    const bflag = "background-color: " + flag_color + ";";
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
            text.charAt(i).match(/( |:|-|;|"|'|,|.)/) &&
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
      if (String(input_date).match(/[T]\d+[:]\d+[:].+[Z]/)) {
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
        fd_day = input_date[2];
        fd_month = input_date[1];
        fd_year = input_date[0];
      } else {
        return input_date;
      }
      if (dateform == "ddmm") return `${fd_day}/${fd_month}/${fd_year}`;
      else return `${fd_month}/${fd_day}/${fd_year}`;
    }

    const HTML: Array<TemplateResult> = [];

    for (let count = 1; count <= this.cardSize; count++) {
      const item = (key: string) => json[count][key];
      if (!item("airdate"))
        continue;
      if (this._config.hide_flagged && item("flag"))
        continue;
      else if (this._config.hide_unflagged && !item("flag"))
        continue;
      const airdate = new Date(item("airdate"));
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

      // Format runtime as either '23 min' or '1h23' if over an hour
      const hrs = String(Math.floor(item("runtime") / 60));
      const min = String(Math.floor(item("runtime") % 60)).padStart(2, "0");
      const runtime =
        item("runtime") > 0 ? (item("runtime") > 60 ? `${hrs}h${min}` : `${min} min`) : "";


      const line = [title_text, line1_text, line2_text, line3_text, line4_text, line5_text];
      const tfull = [title_text, line1_text, line2_text, line3_text, line4_text, line5_text];
      const tsize = [title_size, line1_size, line2_size, line3_size, line4_size, line5_size];

      // Keyword map for replacement, return null if empty so we can hide empty sections
      const keywords = /\$title|\$episode|\$genres|\$number|\$rating|\$release|\$runtime|\$studio|\$day|\$date|\$time|\$tagline|\$info|\$info_url|\$stream_url/g;
      const keys = {
        $title: item("title") || null,
        $episode: item("episode") || null,
        $genres: item("genres") || null,
        $number: item("number") || null,
        $rating: item("rating") || null,
        $release: format_date(item("release")) || null,
        $studio: item("studio") || null,
        $runtime: runtime || null,
        $day: day || null,
        $time: airdate.toLocaleTimeString([], timeform) || null,
        $date: format_date(item("airdate")) || null,
        $tagline: item("tagline") || null,
        $info: item("info") || null,
        $info_url: item("info_url") || null,
        $stream_url: item("stream_url") || null
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

      let icon = "mdi:check";
      let icon_color = "darkgreen";
      let icon_hide = this._config.icon_hide || false;

      const progress = item("progress")
      if (progress == 0) {
        icon_hide = true;
      } else if (progress < 100) {
        icon_color = "tomato";
        icon = "mdi:progress-check"
      }

      if (view == "poster") {
      } else {
        HTML.push(html`
          <!-- <tr><td class="kc_td" style="background-image: linear-gradient(to left, rgba(0, 0, 0, 1.0), transparent), url(${image});"> -->
          <tr>
            <td colspan="2" class="kc_td" @action=${this._handleAction} .item="${json[count]}" .actionHandler=${actionHandler({
          hasHold: hasAction(this._config.hold_action), hasDoubleTap: hasAction(this._config.double_tap_action), repeat:
            this._config.hold_action ? this._config.hold_action.repeat : undefined,
        })}>
              <div class="kc_front">
                <div class="">
                  ${line.map((_item, i) => html`
                  <div class="kc_text_${tsize[i]}" title="${tfull[i]}">${line[i].match("empty") ? html`<br />` : line[i]}</div>
                  `)}
                </div>
              </div>
              <img class="kc_img kc_masked" align="right" src="${image}" />
              <div style="position: relative;">
                ${icon_hide ? html`` : html`
                <ha-icon icon="${icon}" class="kc_icon_indic"
                  style="position: absolute; right: 10px; top: 5px; color: ${icon_color}; ${bflag};"></ha-icon>
                `}
              </div>
            </td>
          </tr>
        `);
      }
    }

    const pl_json = JSON.parse(stateObj.attributes.yamc.playlists);

    return html`
          <ha-card tabindex="0">
            <table class="kc_table">
              <tr>
                <td style="padding: 10px 10px 3px;" width="40%">
                  <paper-input label="Search" value="${stateObj.attributes.yamc.last_search}" @keypress=${({ target, keyCode })=>
                    {
        if (keyCode === ENTER_KEY)
          this._search(target.value);
      }}
                    no-label-float
                    ></paper-input>
                </td>
                <td style="padding: 10px 10px 3px;">
                  <paper-dropdown-menu style="width: 100%" label="Playlist" no-label-float>
                    <paper-listbox style="width: 100%" slot="dropdown-content" .selected=${stateObj.attributes.yamc.last_playlist}
                      attr-for-selected="item-name" @selected-item-changed=${this._set_playlist}>
                      ${pl_json.sort().map((pl) => html`<paper-item item-name=${pl["name"]}>${pl["description"]}</paper-item>`)}
                    </paper-listbox>
                  </paper-dropdown-menu>
                  <div style="position: absolute; font-size: 8px; line-height: 10px; top: 60px; right: 10px">
                    ${((stateObj.attributes.yamc.page - 1) * stateObj.attributes.yamc.page_size) +
      1}-${Math.min(((stateObj.attributes.yamc.page)
        * stateObj.attributes.yamc.page_size), stateObj.attributes.yamc.total_items)}
                    / ${stateObj.attributes.yamc.total_items}
                  </div>
                </td>
              </tr>
              ${stateObj.attributes.yamc.total_items > stateObj.attributes.yamc.page_size ? html`
              <tr>
                <td colspan=2 align="center">
                  <vaadin-pagination page=${stateObj.attributes.yamc.page} total=${stateObj.attributes.yamc.total_items}
                    limit=${stateObj.attributes.yamc.page_size} size=3 @page-change=${this._onPageChanged}></vaadin-pagination>
                </td>
              </tr>
              ` : html``}
              ${HTML.map((item) => item)}
            </table>
          </ha-card>
    `;
  }

  private _handleAction(ev: ActionHandlerEvent): void {
    if (this.hass && this._config && ev.detail.action) {
      const stateObj = this.hass.states[this._config.entity];
      stateObj.attributes.yamc.cur_item = (ev.currentTarget as any).item
      popUp(`${stateObj.attributes.yamc.cur_item.title} (${stateObj.attributes.yamc.cur_item.release})`,
        { type: "custom:yamc-card-details", entity: this._config.entity, domain: this._config.domain, target_player: this._config.target_player }
      )
      //handleAction(this, this.hass, this._config, ev.detail.action);
    }
  }

  private _onPageChanged(ev): void {
    if (!this.hass || !this._config)
      return;

    console.log("NewPage", ev.detail.newPage);

    this.hass.callService(this._config.domain, "yamc_setpage", {
      entity_id: this._config.entity,
      page: ev.detail.newPage
    });
  }

  private _set_playlist(ev): void {
    if (!this.hass || !this._config || ev.target.selected === "")
      return;

    const stateObj = this.hass.states[this._config.entity];
    if (stateObj.attributes.yamc.last_playlist === ev.target.selected)
      return;

    this.hass.callService(this._config.domain, "yamc_setplaylist", {
      entity_id: this._config.entity,
      playlist: ev.target.selected
    });
  }

  private _search(text: string): void {
    if (this.hass && this._config) {

      const stateObj = this.hass.states[this._config.entity];
      if (stateObj.attributes.yamc.last_search === text)
        return;

      this.hass.callService(this._config.domain, "search", {
        entity_id: this._config.entity,
        search_term: text
      });
    }
  }

  static get styles(): CSSResult {
    return css`
      .kc_icon_indic {
        height: 27px;
        width: 27px;
        border-radius: 50%;
        display: inline-block;
      }
      .kc_a:hover {
        text-decoration: underline;
      }
      .kc_text_small {
        color: var(--primary-text-color);
        font-size: 12px;
        line-height: 14px;
        text-decoration: none;
      }
      .kc_text_medium {
        color: var(--primary-text-color);
        font-size: 14px;
        line-height: 16px;
        text-decoration: none;
      }
      .kc_text_large {
        color: var(--primary-text-color);
        font-size: 16px;
        line-height: 18px;
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
        z-index: 1;
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
        -webkit-mask-image: linear-gradient(to left, rgba(0, 0, 0, 1.0) 60%, transparent);
        mask-image: linear-gradient(to left, rgba(0, 0, 0, 1.0) 60%, transparent);
      }
      .kc_img {
        height: 105px;
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
    //return 10;
    return this.cardSize * 2;
  }
}
