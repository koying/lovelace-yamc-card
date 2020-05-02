/* eslint-disable prettier/prettier */

import { HassEntity } from 'home-assistant-js-websocket';
import { css, CSSResult, customElement, html, LitElement, property, TemplateResult } from 'lit-element';
import { HomeAssistant } from 'custom-card-helpers';

@customElement('media-card-more-info')
class MoreInfoMediaCard extends LitElement {
    @property() public hass!: HomeAssistant;

    @property() public stateObj?: HassEntity;

    protected render(): TemplateResult {
        if (!this.hass || !this.stateObj) {
            return html``;
        }

        const item = this.stateObj.attributes.cur_item
        const tlink = item.imdb_url;
        const glink = item.vfs_url;
        let isremovable = true;
        if (item.type === "tvshow") {
            isremovable = false;
        }

        // return html` <ha-attributes .stateObj=${this.stateObj}></ha-attributes> `;
        return html`
            <div class="actions">
            <div class="kc_front">
                <div class="kc_text_large" title="${item.title}">${item.title}</div>
            </div>
            <img class="kc_img" src="${item.fanart}" />
            <div>
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

    private _handleActionClick(e: MouseEvent): void {
        const action = (e.currentTarget as any).action;
        this.hass.callService('counter', action, {
            entity_id: this.stateObj!.entity_id,
        });
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
      .actions {
        margin: 0 8px;
        padding-top: 10px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }
      .kc_text_large {
        color: var(--primary-text-color);
        font-size: 16px;
        font-weight: 600;
        text-decoration: none;
      }
      .kc_masked {
        -webkit-mask-image: linear-gradient(to left, rgba(0, 0, 0, 1.0) 60%, transparent);
        mask-image: linear-gradient(to left, rgba(0, 0, 0, 1.0) 60%, transparent);
      }
      .kc_img {
        width: 300px;
        margin: 8px 0px;
      }

    `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'media-card-more-info': MoreInfoMediaCard;
    }
}
