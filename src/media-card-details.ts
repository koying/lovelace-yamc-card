/* eslint-disable prettier/prettier */

import { HassEntity } from 'home-assistant-js-websocket';
import { css, CSSResult, customElement, html, LitElement, property, TemplateResult } from 'lit-element';
import { HomeAssistant } from 'custom-card-helpers';
import { MediaCardDetailsConfig } from './types';
import { localize } from './localize/localize';

@customElement('media-card-details')
class MediaCardDetails extends LitElement {
    @property() public hass?: HomeAssistant;
    @property() private _config?: MediaCardDetailsConfig;

    public setConfig(config: MediaCardDetailsConfig): void {
        // TODO Check for required fields and that they are of the proper format
        if (!config) {
            throw new Error(localize('common.invalid_configuration'));
        }

        this._config = {
            name: 'MediaCardDetails',
            ...config,
        };
    }

    protected render(): TemplateResult {
        if (!this.hass || !this._config) {
            return html``;
        }

        const stateObj = this.hass.states[this._config.entity];

        const item = stateObj.attributes.cur_item
        const tlink = item.imdb_url;
        const glink = item.vfs_url;
        let isremovable = true;
        if (item.type === "tvshow") {
            isremovable = false;
        }

        // return html` <ha-attributes .stateObj=${this.stateObj}></ha-attributes> `;
        return html`
            <div class="wrapper">
            <div class="kc_front">
                <div class="kc_text_medium" title="${item.tagline}">${item.tagline}</div>
            </div>
            <img class="kc_img" src="${item.fanart}" />
            <div class="kc_buttons">
                  ${tlink != "null" && tlink.length > 0 ? html`<mwc-button .url="${tlink}" @click="${this._openURL}">Details</mwc-button>` : html``}
                  ${glink != "null" && glink.length > 0 ? html`<mwc-button .url="${glink}" @click="${this._openURL}">Launch</mwc-button>` : html``}
                  <mwc-button
                    .url="${item.info_url}"
                    @click="${this._handleInfoButton}"
                    >
                      Info
                  </mwc-button>
                 ${isremovable ? html`
                    <mwc-button
                    .id="${item.id}"
                    .type="${item.type}"
                    @click="${this._handleDeleteButton}"
                    >
                      Delete
                    </mwc-button>
                  ` : html``}
            </diV>
            </div>
    `;
    }

    private _handleDeleteButton(ev: MouseEvent): void {
        if (this.hass) {
            if (!confirm(`Are you sure you want to delete this item?`)) {
                return;
            }

            const id = (ev.currentTarget as any).id;
            const type = (ev.currentTarget as any).type;
            this.hass.callService("kodi", "remove", {
                id: id, type: type
            });
        }
    }

    private _handleInfoButton(ev: MouseEvent): void {
        if (this.hass) {
            const url = (ev.currentTarget as any).url;
            this.hass.callService("kodi", "view_info", { url: url });
        }
    }

    private _openURL(ev: MouseEvent): void {
        if (this.hass) {
            const url = (ev.currentTarget as any).url;
            window.open(url, "_blank");
        }
    }

    static get styles(): CSSResult {
        return css`
      .wrapper {
        margin: 0px 20px 8px;
        padding-top: 10px;
        display: flex;
        flex-direction: column;
        align-content: center;
        overflow-x: hidden;
      }
      .kc_buttons {
          align-self: center;
      }
      .kc_text_large {
        color: var(--primary-text-color);
        font-size: 16px;
        font-weight: 600;
        text-decoration: none;
      }
      .kc_text_medium {
        color: var(--primary-text-color);
        font-size: 14px;
        line-height: 16px;
        text-decoration: none;
        white-space: nowrap;
        text-overflow: ellipsis;
        text-align: left;
        align-self: left;
      }
      .kc_masked {
        -webkit-mask-image: linear-gradient(to left, rgba(0, 0, 0, 1.0) 60%, transparent);
        mask-image: linear-gradient(to left, rgba(0, 0, 0, 1.0) 60%, transparent);
      }
      .kc_img {
        width: 100%;
        margin: 8px 0px;
      }

    `;
    }
}

