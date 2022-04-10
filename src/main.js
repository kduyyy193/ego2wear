import { datas } from "./datas.js";
let htmls = datas.map(function (data) {
  return `
    <div class="product  hvr-bounce-out  c-6" data-aos="fade-right">
      <div class="product-item">
          <div class="product-img">
              <img src="${data.img}" alt="ERROR" class="lazy-load">
          </div>
      </div>
      <div class="product-info">
        <div class="product-top">
                <h3 class="product-name">${data.name}</h3>
                <h6 class="product-name">${data.desc}</h6>
        </div>
          <div class="product-cart--price">
              <div class="product-price">
              ${data.price}
              </div>
              <div class="product-cart hvr-buzz ">
                  Mua ngay
              </div>
          </div>
      </div>
  </div>
      `;
});
const containerProduct = document.querySelector(".container__product");

containerProduct.innerHTML = htmls.join("");
