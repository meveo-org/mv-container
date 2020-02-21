import { LitElement, html, css } from "lit-element";
import "./mv-container.js";
import "mv-font-awesome";

export class MvContainerDemo extends LitElement {
  static get properties() {
    return {
      value: { type: String, attribute: true },
      open: { type: Boolean, attribute: true },
      theme: { type: String, attribute: true }
    };
  }

  static get styles() {
    return css`
      :host {
        font-family: var(--font-family, Arial);
        font-size: var(--font-size-m, 10pt);
      }

      .main {
        --main-margin: 50px;
        --auto-grid-min-size: calc(300px + var(--main-margin));
        margin: var(--main-margin);
        padding: 0;
        width: calc(100% - var(--main-margin * 2));
        height: calc(100% - var(--main-margin * 2));        
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(var(--auto-grid-min-size), 1fr));
        grid-gap: var(--main-margin);       
      }

      mv-container {
        --mv-container-min-width: 300px;        
        --mv-container-margin: auto 0;
        --mv-container-padding: 20px 30px;        
      }
      
      mv-fa[icon="lightbulb"] {
        font-size: 50px;
        cursor: pointer;
        margin: 20px;
      }
      
      .theme {
        display: flex;
        justify-content: flex-start;
      }      
    `;
  }

  constructor() {
    super();
    this.open = true;
    this.theme = "light";
  }

  render() {
    const iconColor = `color: ${this.open ? "yellow" : ""}`;
    const textColor = `color: ${this.open ? "" : "#FFFFFF"}`;
    return html`
    <div class="theme">
      <mv-fa icon="lightbulb" style="${iconColor}" @click=${this.toggleLightBulb}></mv-fa>
    </div>
    <div class="main" style="${textColor}">
      <mv-container .theme="${this.theme}">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu nisl nunc mi ipsum faucibus vitae. Duis ut diam quam nulla. Odio euismod lacinia at quis risus. Id nibh tortor id aliquet lectus proin nibh nisl condimentum. Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Volutpat est velit egestas dui id ornare arcu. Vulputate dignissim suspendisse in est. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Arcu odio ut sem nulla pharetra diam sit. Nibh cras pulvinar mattis nunc sed blandit libero volutpat. Est placerat in egestas erat imperdiet sed euismod. Ac feugiat sed lectus vestibulum mattis ullamcorper velit. Mauris augue neque gravida in fermentum et. Senectus et netus et malesuada fames ac. Auctor neque vitae tempus quam pellentesque. Lorem ipsum dolor sit amet.</p>
        <p>Sed vulputate mi sit amet mauris. Neque egestas congue quisque egestas diam. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Urna molestie at elementum eu facilisis sed. Lacus sed turpis tincidunt id aliquet risus. Cursus mattis molestie a iaculis at erat pellentesque. Consectetur adipiscing elit duis tristique sollicitudin nibh sit. Eget arcu dictum varius duis at consectetur lorem donec. Duis tristique sollicitudin nibh sit amet commodo nulla. Nunc congue nisi vitae suscipit tellus mauris. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in. Accumsan sit amet nulla facilisi morbi tempus iaculis urna.</p>
      </mv-container>
      <mv-container .theme="${this.theme}">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu nisl nunc mi ipsum faucibus vitae. Duis ut diam quam nulla. Odio euismod lacinia at quis risus. Id nibh tortor id aliquet lectus proin nibh nisl condimentum. Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Volutpat est velit egestas dui id ornare arcu. Vulputate dignissim suspendisse in est. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Arcu odio ut sem nulla pharetra diam sit. Nibh cras pulvinar mattis nunc sed blandit libero volutpat. Est placerat in egestas erat imperdiet sed euismod. Ac feugiat sed lectus vestibulum mattis ullamcorper velit. Mauris augue neque gravida in fermentum et. Senectus et netus et malesuada fames ac. Auctor neque vitae tempus quam pellentesque. Lorem ipsum dolor sit amet.</p>
        <p>Sed vulputate mi sit amet mauris. Neque egestas congue quisque egestas diam. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Urna molestie at elementum eu facilisis sed. Lacus sed turpis tincidunt id aliquet risus. Cursus mattis molestie a iaculis at erat pellentesque. Consectetur adipiscing elit duis tristique sollicitudin nibh sit. Eget arcu dictum varius duis at consectetur lorem donec. Duis tristique sollicitudin nibh sit amet commodo nulla. Nunc congue nisi vitae suscipit tellus mauris. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in. Accumsan sit amet nulla facilisi morbi tempus iaculis urna.</p>
        <p>Volutpat est velit egestas dui id ornare arcu odio ut. Pharetra convallis posuere morbi leo. Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. Sit amet est placerat in. In pellentesque massa placerat duis. Ipsum faucibus vitae aliquet nec ullamcorper sit amet. Nulla aliquet porttitor lacus luctus accumsan. Massa ultricies mi quis hendrerit dolor magna eget est lorem. At varius vel pharetra vel turpis. Interdum consectetur libero id faucibus nisl tincidunt eget nullam.</p>
      </mv-container>
      <mv-container .theme="${this.theme}">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu nisl nunc mi ipsum faucibus vitae. Duis ut diam quam nulla. Odio euismod lacinia at quis risus. Id nibh tortor id aliquet lectus proin nibh nisl condimentum. Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Volutpat est velit egestas dui id ornare arcu. Vulputate dignissim suspendisse in est. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Arcu odio ut sem nulla pharetra diam sit. Nibh cras pulvinar mattis nunc sed blandit libero volutpat. Est placerat in egestas erat imperdiet sed euismod. Ac feugiat sed lectus vestibulum mattis ullamcorper velit. Mauris augue neque gravida in fermentum et. Senectus et netus et malesuada fames ac. Auctor neque vitae tempus quam pellentesque. Lorem ipsum dolor sit amet.</p>
      </mv-container>
      <mv-container .theme="${this.theme}">
        <p>Sed vulputate mi sit amet mauris. Neque egestas congue quisque egestas diam. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Urna molestie at elementum eu facilisis sed. Lacus sed turpis tincidunt id aliquet risus. Cursus mattis molestie a iaculis at erat pellentesque. Consectetur adipiscing elit duis tristique sollicitudin nibh sit. Eget arcu dictum varius duis at consectetur lorem donec. Duis tristique sollicitudin nibh sit amet commodo nulla. Nunc congue nisi vitae suscipit tellus mauris. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in. Accumsan sit amet nulla facilisi morbi tempus iaculis urna.</p>
        <p>Volutpat est velit egestas dui id ornare arcu odio ut. Pharetra convallis posuere morbi leo. Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. Sit amet est placerat in. In pellentesque massa placerat duis. Ipsum faucibus vitae aliquet nec ullamcorper sit amet. Nulla aliquet porttitor lacus luctus accumsan. Massa ultricies mi quis hendrerit dolor magna eget est lorem. At varius vel pharetra vel turpis. Interdum consectetur libero id faucibus nisl tincidunt eget nullam.</p>
      </mv-container>
      <mv-container .theme="${this.theme}">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu nisl nunc mi ipsum faucibus vitae. Duis ut diam quam nulla. Odio euismod lacinia at quis risus. Id nibh tortor id aliquet lectus proin nibh nisl condimentum. Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Volutpat est velit egestas dui id ornare arcu. Vulputate dignissim suspendisse in est. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Arcu odio ut sem nulla pharetra diam sit. Nibh cras pulvinar mattis nunc sed blandit libero volutpat. Est placerat in egestas erat imperdiet sed euismod. Ac feugiat sed lectus vestibulum mattis ullamcorper velit. Mauris augue neque gravida in fermentum et. Senectus et netus et malesuada fames ac. Auctor neque vitae tempus quam pellentesque. Lorem ipsum dolor sit amet.</p>        
        <p>Volutpat est velit egestas dui id ornare arcu odio ut. Pharetra convallis posuere morbi leo. Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. Sit amet est placerat in. In pellentesque massa placerat duis. Ipsum faucibus vitae aliquet nec ullamcorper sit amet. Nulla aliquet porttitor lacus luctus accumsan. Massa ultricies mi quis hendrerit dolor magna eget est lorem. At varius vel pharetra vel turpis. Interdum consectetur libero id faucibus nisl tincidunt eget nullam.</p>
      </mv-container>
      <mv-container .theme="${this.theme}">
        <p>Volutpat est velit egestas dui id ornare arcu odio ut. Pharetra convallis posuere morbi leo. Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. Sit amet est placerat in. In pellentesque massa placerat duis. Ipsum faucibus vitae aliquet nec ullamcorper sit amet. Nulla aliquet porttitor lacus luctus accumsan. Massa ultricies mi quis hendrerit dolor magna eget est lorem. At varius vel pharetra vel turpis. Interdum consectetur libero id faucibus nisl tincidunt eget nullam.</p>
      </mv-container>
      <mv-container .theme="${this.theme}">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu nisl nunc mi ipsum faucibus vitae. Duis ut diam quam nulla. Odio euismod lacinia at quis risus. Id nibh tortor id aliquet lectus proin nibh nisl condimentum. Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Volutpat est velit egestas dui id ornare arcu. Vulputate dignissim suspendisse in est. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Arcu odio ut sem nulla pharetra diam sit. Nibh cras pulvinar mattis nunc sed blandit libero volutpat. Est placerat in egestas erat imperdiet sed euismod. Ac feugiat sed lectus vestibulum mattis ullamcorper velit. Mauris augue neque gravida in fermentum et. Senectus et netus et malesuada fames ac. Auctor neque vitae tempus quam pellentesque. Lorem ipsum dolor sit amet.</p>
        <p>Sed vulputate mi sit amet mauris. Neque egestas congue quisque egestas diam. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Urna molestie at elementum eu facilisis sed. Lacus sed turpis tincidunt id aliquet risus. Cursus mattis molestie a iaculis at erat pellentesque. Consectetur adipiscing elit duis tristique sollicitudin nibh sit. Eget arcu dictum varius duis at consectetur lorem donec. Duis tristique sollicitudin nibh sit amet commodo nulla. Nunc congue nisi vitae suscipit tellus mauris. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in. Accumsan sit amet nulla facilisi morbi tempus iaculis urna.</p>
        <p>Volutpat est velit egestas dui id ornare arcu odio ut. Pharetra convallis posuere morbi leo. Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. Sit amet est placerat in. In pellentesque massa placerat duis. Ipsum faucibus vitae aliquet nec ullamcorper sit amet. Nulla aliquet porttitor lacus luctus accumsan. Massa ultricies mi quis hendrerit dolor magna eget est lorem. At varius vel pharetra vel turpis. Interdum consectetur libero id faucibus nisl tincidunt eget nullam.</p>
      </mv-container>
      <mv-container .theme="${this.theme}">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu nisl nunc mi ipsum faucibus vitae. Duis ut diam quam nulla. Odio euismod lacinia at quis risus. Id nibh tortor id aliquet lectus proin nibh nisl condimentum. Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Volutpat est velit egestas dui id ornare arcu. Vulputate dignissim suspendisse in est. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Arcu odio ut sem nulla pharetra diam sit. Nibh cras pulvinar mattis nunc sed blandit libero volutpat. Est placerat in egestas erat imperdiet sed euismod. Ac feugiat sed lectus vestibulum mattis ullamcorper velit. Mauris augue neque gravida in fermentum et. Senectus et netus et malesuada fames ac. Auctor neque vitae tempus quam pellentesque. Lorem ipsum dolor sit amet.</p>
        <p>Volutpat est velit egestas dui id ornare arcu odio ut. Pharetra convallis posuere morbi leo. Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. Sit amet est placerat in. In pellentesque massa placerat duis. Ipsum faucibus vitae aliquet nec ullamcorper sit amet. Nulla aliquet porttitor lacus luctus accumsan. Massa ultricies mi quis hendrerit dolor magna eget est lorem. At varius vel pharetra vel turpis. Interdum consectetur libero id faucibus nisl tincidunt eget nullam.</p>
      </mv-container>
    </div>
    `;
  }

  toggleLightBulb = () => {
    this.open = !this.open;
    if (this.open) {
      this.theme = "light";
    } else {
      this.theme = "dark";
    }
  };
}

customElements.define("mv-container-demo", MvContainerDemo);
