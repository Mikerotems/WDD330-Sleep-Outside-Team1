import { renderListWithTemplate } from "./utils.mjs";

function productCardTemplate(product) {
  return `
    <li class="product-card">
      <a href="product_pages/?products=${product.Id}">
        <img src="${product.Image}" alt="${product.Name}">
        <h2>${product.Brand.Name}</h2>
        <h3>${product.Name}</h3>
        <p class="product-card__price">$${product.FinalPrice}</p>
      </a>
    </li>
    `;
}

export default class ProductList{
    constructor(category, datasource, ListElement){
            this.category = category;
            this.datasource = datasource;
            this.ListElement = ListElement;
    }
    async init(){
        const list = await this.datasource.getData();
        this.renderList(list);
    }
    renderList(list) {
    renderListWithTemplate(productCardTemplate, this.listElement, list);
  }
}