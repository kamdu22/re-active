import { html, render } from "lit.html.js";

/* Grid tag */
class Grid extends HTMLElement
{
  constructor()
  {
    super();

    render(this.template, this.root);
  }

  template()
  {
    return html`
      <div class="grid"></div>
    `;
  }
}

customElements.define("grid", Grid);

/* Col tag */
var colClasses;
class Col extends HTMLElement
{
  constructor()
  {
    super();

    this.root = this.attachShadow( { mode: "open" } );

    if(this.colAuto != null && ((this.colAuto.includes("xs-") || this.colAuto.includes("s-") || this.colAuto.includes("m-") || this.colAuto.includes("l-") || this.colAuto.includes("xl-")) || (this.colAuto >= 1 && this.colAuto <= 12)))
    {
      colClasses += "auto-" + this.colAuto + " ";
    }

    if(this.colN != null && (this.colN >= 1 && this.colN <= 12))
    {
      colClasses += "n-" + this.colN + " ";
    }

    if(this.colXS != null && (this.colXS >= 1 && this.colXS <= 12))
    {
      colClasses += "xs-" + this.colXS + " ";
    }

    if(this.colS != null && (this.colS >= 1 && this.colS <= 12))
    {
      colClasses += "s-" + this.colS + " ";
    }

    if(this.colM != null && (this.colM >= 1 && this.colM <= 12))
    {
      colClasses += "m-" + this.colM + " ";
    }

    if(this.colL != null && (this.colL >= 1 && this.colL <= 12))
    {
      colClasses += "l-" + this.colL + " ";
    }

    if(this.colXL != null && (this.colXL >= 1 && this.colXL <= 12))
    {
      colClasses += "xl-" + this.colXL + " ";
    }

    render(this.template, this.root);
  }

  get colAuto()
  {
    return this.getAttribute("auto");
  }

  get colN()
  {
    return this.getAttribute("n");
  }

  get colXS()
  {
    return this.getAttribute("xs");
  }

  get colS()
  {
    return this.getAttribute("s");
  }

  get colM()
  {
    return this.getAttribute("m");
  }

  get colL()
  {
    return this.getAttribute("l");
  }

  get colXL()
  {
    return this.getAttribute("xl");
  }

  template()
  {
    return html`
      <div class="col ${colClasses}"></div>
    `;
  }
}

customElements.define("col", Col);


/* Alert tag */

class Alert extends HTMLElement
{
  constructor()
  {
    super();

    this.root = this.attachShadow( { mode: "open" } );

    render(this.template, this.root);
  }

  get type()
  {
    return this.getAttribute("type");
  }

  get title()
  {
    return this.getAttribute("title");
  }

  get content()
  {
    return this.getAttribute("content");
  }

  get hasCanelButton()
  {
    return this.getAttribute("cancelable");
  }

  template()
  {
    if(this.hasCanelButton == "true")
    {
      return html`
        <div class="alert ${this.type}"> <div class="alert-title">${this.title}</div> ${this.content} <div class="cancel-button"></div> </div>
      `;
    }
    else if(this.hasCanelButton == "false" || this.hasCanelButton == null)
    {
      return html`
        <div class="alert ${this.type}"> <div class="alert-title">${this.title}</div> ${this.content} </div>
      `;
    }
  }
}

customElements.define("alert", Alert);