class MemberCard extends HTMLElement {
  connectedCallback () {
    this.attachShadow({ mode: 'open' })
    const templateContent = this.getTemplateContent()
    const template = document.createElement('template')
    template.innerHTML = templateContent
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
  
  getTemplateContent () {
    const memberUrl = this.getAttribute('portfolio-url')
    const memberImageSrc = this.getAttribute('member-image-src')
    const memberName = this.getAttribute('member-name')
    const memberRole = this.getAttribute('member-role')
    return `
    <style>
    /* Featured Batata Harra */
    a {
      background-color: transparent;
      color: inherit;
      text-decoration: none;
    }
    
    img {
      border-style: none;
    }
    
    .card__container__figure {
      margin-block-start: 0;
      margin-block-end: 0;
      margin-inline-start: 0;
      margin-inline-end: 0;
      display: grid;
      grid-template-rows: 1fr auto;
      width: 100%;
      box-sizing: border-box;
      height: 100%;
      padding: 6px;
      background-color: #bb7c6a40;
      border-radius: 4px;
    }
    
    .card__container__figure__img__container {
      position: relative;
    }
    
    .card__container__figure__img__container img {
      width: 100%;
      aspect-ratio: 1/1;
      border-radius: 4px;
    }
    
    .card__container__figure__figcaption {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
    }
    
    .card__container__figure__figcaption__member {
      color: #feb522;
      font-size: 1.15em;
    }
    
    .card__container__figure__figcaption__title {
      font: 100% system-ui, sans-serif;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    
    @media (min-width: 960px) {
      .card__container {
        place-content: start;
      }
    }
    </style>
    
    <a href="${memberUrl}">
      <figure class="card__container__figure">
        <div class="card__container__figure__img__container">
          <img src="${memberImageSrc}" alt="${memberName}" />
        </div>
        <figcaption class="card__container__figure__figcaption">
          <span class="card__container__figure__figcaption__member"
            >${memberName}</span
          ><span class="card__container__figure__figcaption__title"
            >${memberRole}</span
          >
        </figcaption>
      </figure>
    </a>`
  }
}

window.customElements.define('member-card', MemberCard)
