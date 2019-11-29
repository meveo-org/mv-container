import { LitElement, html, css } from "lit-element";

export class MvContainer extends LitElement {
  static get properties() {
    return {
      value: { type: String, attribute: true }
    };
  }

  static get styles() {
    return css`
			:host {
				font-family: var(--font-family, Arial);
				font-size: var(--font-size-m, 10pt);				
      }

      section {
        min-width: var(--mv-container-min-width, 300px);
        padding: var(--mv-container-padding, 20px);
        border: var(--mv-container-border, 1px solid #BFBFBF);
        background-color: var(--mv-container-background, #FFFFFF);
        box-shadow: var(--mv-container-shadow, 10px 10px 5px #aaaaaa);
      }
		`;
  }

  render() {
    return html`
    <section>
      <slot> </slot>
    </section>
    `;
  }
}

customElements.define("mv-container", MvContainer);
