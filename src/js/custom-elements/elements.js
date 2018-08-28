import { html, render } from "lit.html.js";

class Col extends HTMLElement
{
  constructor()
  {
    super();

    this.root = this.attachShadow( { mode: "open" } );

    if(colAuto != null)
    {
      this.classList.add("auto-" + this.colAuto);
    }
    else if(colN != null || colXS != null || colS != null || colM != null || colL != null || colXL != null)
    {
      if(colN >= 1 && colN <= 12)
      {
        this.classList.add("n-" + colN);
      }
      else
      {
        console.log("wrong 'n' attribute");
        this.style.display = "none";
      }
      
      if(colXS >= 1 && colXS <= 12)
      {
        this.classList.add("xs-" + colN);
      }
      else
      {
        console.log("wrong 'xs' attribute");
        this.style.display = "none";
      }
      
      if(colS >= 1 && colS <= 12)
      {
        this.classList.add("s-" + colN);
      }
      else
      {
        console.log("wrong 's' attribute");
        this.style.display = "none";
      }
      
      if(colM >= 1 && colM <= 12)
      {
        this.classList.add("m-" + colN);
      }
      else
      {
        console.log("wrong 'm' attribute");
        this.style.display = "none";
      }
      
      if(colL >= 1 && colL <= 12)
      {
        this.classList.add("l-" + colN);
      }
      else
      {
        console.log("wrong 'l' attribute");
        this.style.display = "none";
      }
      
      if(colXL >= 1 && colXL <= 12)
      {
        this.classList.add("xl-" + colN);
      }
      else
      {
        console.log("wrong 'xl' attribute");
        this.style.display = "none";
      }
    }
    else
    {
      console.log("wrong attribute (probably 'auto')");
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
      <div class="col"></div>
    `;
  }
}

customElements.define("col", Col);