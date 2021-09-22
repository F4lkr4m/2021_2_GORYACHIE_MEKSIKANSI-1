(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['footer.hbs'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"footer\">\n    <div class=\"footer__upper-footer\">\n        <div class=\"footer__image\">\n            <img src=\"../../assets/images/Fx9UOP_UU4k.jpg\" alt=\"\">\n        </div>\n        <div class=\"footer__navigation\">\n            <ul class=\"footer__navigation-ul\">\n                <li><a href=\"\" class=\"footer__help\">Помощь</a></li>\n                <li><a href=\"\" class=\"footer__help\">Войти для доставки</a></li>\n                <li><a href=\"\" class=\"footer__help\">Рестораны рядом со мной</a></li>\n                <li><a href=\"\" class=\"footer__help\">Контакты</a></li>\n                <li><a href=\"\" class=\"footer__help\">HMEats для ресторанов</a></li>\n                <li><a href=\"\" class=\"footer__help\">HMEats для курьеров</a></li>\n            </ul>\n        </div>\n    </div>\n    <hr class=\"footer__line\">\n    <div class=\"footer__lower-footer\">\n        <h3 class=\"footer__title\">© 2021 HOT TECHNOLOGIES INC.</h3>\n    </div>\n</div>";
},"useData":true});
templates['header.hbs'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"header\">\n    <div class=\"header__content\">\n        <div class=\"left-box\">\n            <button class=\"button button_color_white\">\n                <svg class=\"button__icon_nav\" width=\"26\" height=\"20\" viewBox=\"0 0 26 20\" fill=\"none\"\n                     xmlns=\"http://www.w3.org/2000/svg\">\n                    <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\n                          d=\"M25.9163 10.0001C25.9163 9.30973 25.3567 8.75008 24.6663 8.75008H1.33301C0.642651 8.75008 0.0830078 9.30973 0.0830078 10.0001C0.0830078 10.6904 0.642651 11.2501 1.33301 11.2501H24.6663C25.3567 11.2501 25.9163 10.6904 25.9163 10.0001Z\"\n                          fill=\"black\"/>\n                    <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\n                          d=\"M25.9163 1.66675C25.9163 0.976392 25.3567 0.416748 24.6663 0.416748H1.33301C0.642651 0.416748 0.0830078 0.976392 0.0830078 1.66675C0.0830078 2.3571 0.642651 2.91675 1.33301 2.91675H24.6663C25.3567 2.91675 25.9163 2.3571 25.9163 1.66675Z\"\n                          fill=\"black\"/>\n                    <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\n                          d=\"M25.9163 18.3334C25.9163 17.6431 25.3567 17.0834 24.6663 17.0834H1.33301C0.642651 17.0834 0.0830078 17.6431 0.0830078 18.3334C0.0830078 19.0238 0.642651 19.5834 1.33301 19.5834H24.6663C25.3567 19.5834 25.9163 19.0238 25.9163 18.3334Z\"\n                          fill=\"black\"/>\n                </svg>\n            </button>\n        </div>\n\n        <div class=\"right-box\">\n            <button class=\"button button_shape_rounded button_color_gray\">\n                <svg class=\"button__icon\" width=\"11\" height=\"14\" viewBox=\"0 0 11 14\" fill=\"none\"\n                     xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M3.46851 6.25C3.46851 5.12817 4.37793 4.21875 5.49976 4.21875C6.62158 4.21875 7.53101 5.12817 7.53101 6.25C7.53101 7.37183 6.62158 8.28125 5.49976 8.28125C4.37793 8.28125 3.46851 7.37183 3.46851 6.25Z\"\n                          fill=\"black\"/>\n                    <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\n                          d=\"M0.35822 5.54837C0.572994 2.94278 2.75036 0.9375 5.36479 0.9375H5.63475C8.24918 0.9375 10.4265 2.94278 10.6413 5.54837C10.757 6.95124 10.3236 8.34424 9.43258 9.43395L6.43692 13.0976C5.95256 13.6899 5.04698 13.6899 4.56262 13.0976L1.56696 9.43395C0.675922 8.34424 0.242584 6.95124 0.35822 5.54837ZM5.49976 3.28125C3.86016 3.28125 2.53101 4.6104 2.53101 6.25C2.53101 7.8896 3.86016 9.21875 5.49976 9.21875C7.13935 9.21875 8.46851 7.8896 8.46851 6.25C8.46851 4.6104 7.13935 3.28125 5.49976 3.28125Z\"\n                          fill=\"black\"/>\n                </svg>\n                Москва\n            </button>\n            <label class=\"search-input__label search-input__label_size_m\">\n                <svg class=\"search-label__icon\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\"\n                     xmlns=\"http://www.w3.org/2000/svg\">\n                    <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\n                          d=\"M14.3854 15.4458C11.7351 17.5685 7.85569 17.4014 5.3989 14.9446C2.76287 12.3086 2.76287 8.0347 5.3989 5.39866C8.03494 2.76262 12.3088 2.76262 14.9448 5.39866C17.4016 7.85544 17.5687 11.7349 15.446 14.3851L20.6017 19.5408C20.8946 19.8337 20.8946 20.3085 20.6017 20.6014C20.3088 20.8943 19.8339 20.8943 19.541 20.6014L14.3854 15.4458ZM6.45956 13.8839C4.40931 11.8337 4.40931 8.50957 6.45956 6.45932C8.50982 4.40907 11.8339 4.40907 13.8842 6.45932C15.9329 8.50807 15.9344 11.8288 13.8887 13.8794C13.8872 13.8809 13.8857 13.8824 13.8842 13.8839C13.8827 13.8854 13.8812 13.8869 13.8797 13.8884C11.8291 15.9342 8.50831 15.9327 6.45956 13.8839Z\"\n                          fill=\"black\"/>\n                </svg>\n                <input class=\"search-input\" placeholder=\"Что то ищете?\"/>\n            </label>\n\n            <button class=\"button button_shape_rounded button_color_black\">\n                <svg class=\"button__icon\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\"\n                     xmlns=\"http://www.w3.org/2000/svg\">\n                    <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\n                          d=\"M18.1477 3.25H4.33514L3.15497 1.1346C3.0225 0.897154 2.7719 0.75 2.5 0.75H1C0.585786 0.75 0.25 1.08579 0.25 1.5C0.25 1.91421 0.585786 2.25 1 2.25H2.0596L3.22429 4.33765L5.91037 10.2809L5.91312 10.2869L6.14971 10.8104L3.45287 13.687C3.25895 13.8939 3.19825 14.1924 3.29599 14.4585C3.39372 14.7247 3.63317 14.913 3.91486 14.9452L6.37299 15.2261C9.44767 15.5775 12.5524 15.5775 15.627 15.2261L18.0852 14.9452C18.4967 14.8981 18.7922 14.5264 18.7452 14.1148C18.6981 13.7033 18.3264 13.4078 17.9149 13.4549L15.4567 13.7358C12.4952 14.0742 9.50481 14.0742 6.54331 13.7358L5.56779 13.6243L7.54717 11.513C7.56632 11.4925 7.5841 11.4713 7.60052 11.4494L8.35334 11.5474C9.40826 11.6847 10.4746 11.7116 11.5351 11.6277C14.0086 11.4321 16.301 10.2551 17.9015 8.35907L18.4795 7.67425C18.499 7.65125 18.517 7.62711 18.5335 7.60194L19.6109 5.96009C20.3745 4.79633 19.5397 3.25 18.1477 3.25ZM7.65627 9.94405C7.49086 9.92253 7.34823 9.81745 7.27858 9.66604L7.27725 9.66311L5.05674 4.75H18.1477C18.3466 4.75 18.4658 4.9709 18.3567 5.13716L17.3042 6.74123L16.7552 7.39152C15.4132 8.98139 13.4909 9.96832 11.4169 10.1324C10.4603 10.208 9.49842 10.1837 8.54688 10.0599L7.65627 9.94405Z\"\n                          fill=\"white\"/>\n                    <path d=\"M5.5 16.5C4.67157 16.5 4 17.1716 4 18C4 18.8284 4.67157 19.5 5.5 19.5C6.32843 19.5 7 18.8284 7 18C7 17.1716 6.32843 16.5 5.5 16.5Z\"\n                          fill=\"white\"/>\n                    <path d=\"M15 18C15 17.1716 15.6716 16.5 16.5 16.5C17.3284 16.5 18 17.1716 18 18C18 18.8284 17.3284 19.5 16.5 19.5C15.6716 19.5 15 18.8284 15 18Z\"\n                          fill=\"white\"/>\n                </svg>\n                Корзина\n            </button>\n            <button href=\"login\" class=\"button button_shape_rounded button_width_s\">\n                Login\n            </button>\n        </div>\n    </div>\n</div>";
},"useData":true});
templates['promoLine.hbs'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"promo-line\">\n    <div class=\"promo-line__title\">\n        <div class=\"promo-line__main-title\">\n            Захотели покушать?!<br>Закажите у нас!\n        </div>\n\n        <div class=\"promo-line__description-title\">\n            Найдите свой любимые ресторан, кухню или блюдо\n        </div>\n    </div>\n    <div class=\"promo-line__blocks\">\n        <div class=\"promo-block promo-line__promo-block\">\n            <div class=\"promo-block__left-box\">\n                <div class=\"promo-block__title\">\n                    Самые вкусные наггетсы на свете!<br>Всего лишь по 60₽!\n                </div>\n\n                <button class=\"button button_height_s button_color_white button_shape_rounded promo-block__button\">\n                    Перейти к акции\n                    <svg width=\"14\" height=\"10\" viewBox=\"0 0 14 10\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <path d=\"M8.46967 1.53033C8.17678 1.23744 8.17678 0.762563 8.46967 0.46967C8.76256 0.176777 9.23744 0.176777 9.53033 0.46967L13.5303 4.46967C13.8232 4.76256 13.8232 5.23744 13.5303 5.53033L9.53033 9.53033C9.23744 9.82322 8.76256 9.82322 8.46967 9.53033C8.17678 9.23744 8.17678 8.76256 8.46967 8.46967L11.1893 5.75H1.5C1.08579 5.75 0.75 5.41421 0.75 5C0.75 4.58579 1.08579 4.25 1.5 4.25H11.1893L8.46967 1.53033Z\" fill=\"black\"/>\n                    </svg>\n                </button>\n            </div>\n\n            <div class=\"promo-block__img-box\">\n                <img class=\"promo-block__img\" src=\"../../assets/images/image.jpeg\" alt=\"nuggetsImage\"/>\n            </div>\n        </div>\n        <div class=\"promo-block promo-line__promo-block\">\n            <div class=\"promo-block__left-box\">\n                <div class=\"promo-block__title\">\n                    Самые вкусные наггетсы на свете!<br>Всего лишь по 60₽!\n                </div>\n\n                <button class=\"button button_height_s button_color_white button_shape_rounded promo-block__button\">\n                    Перейти к акции\n                    <svg width=\"14\" height=\"10\" viewBox=\"0 0 14 10\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <path d=\"M8.46967 1.53033C8.17678 1.23744 8.17678 0.762563 8.46967 0.46967C8.76256 0.176777 9.23744 0.176777 9.53033 0.46967L13.5303 4.46967C13.8232 4.76256 13.8232 5.23744 13.5303 5.53033L9.53033 9.53033C9.23744 9.82322 8.76256 9.82322 8.46967 9.53033C8.17678 9.23744 8.17678 8.76256 8.46967 8.46967L11.1893 5.75H1.5C1.08579 5.75 0.75 5.41421 0.75 5C0.75 4.58579 1.08579 4.25 1.5 4.25H11.1893L8.46967 1.53033Z\" fill=\"black\"/>\n                    </svg>\n                </button>\n            </div>\n\n            <div class=\"promo-block__img-box\">\n                <img class=\"promo-block__img\" src=\"../../assets/images/image.jpeg\" alt=\"nuggetsImage\"/>\n            </div>\n        </div>\n    </div>\n</div>";
},"useData":true});
templates['restaurantBlock.hbs'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<a href=\"#\" class=\"restaurant-block\">\n    <div class=\"restaurant-block__img-box\">\n        <img class=\"restaurant-block__img\" src="
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"imgUrl") : depth0), depth0))
    + " alt=\"restaurant image\"/>\n    </div>\n\n    <div class=\"restaurant-block__information\">\n        <div class=\"restaurant-block__text-box\">\n            <div class=\"restaurant-block__restaurant-title\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))
    + "</div>\n            <div class=\"restaurant-block__delivery-info\">\n                <div class=\"information__delivery-cost\">от "
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"cost") : depth0), depth0))
    + "₽ Беспл. доставка</div>\n                <svg width=\"14\" height=\"14\" viewBox=\"0 0 14 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M9.37165 5.24686C9.5425 5.076 9.5425 4.799 9.37165 4.62814C9.2008 4.45729 8.92379 4.45729 8.75293 4.62814L6.9999 6.38117L5.24686 4.62814C5.07601 4.45729 4.799 4.45729 4.62815 4.62814C4.45729 4.799 4.45729 5.07601 4.62815 5.24686L6.38118 6.99989L4.62814 8.75293C4.45729 8.92378 4.45729 9.20079 4.62814 9.37165C4.799 9.5425 5.076 9.5425 5.24686 9.37165L6.9999 7.61861L8.75294 9.37165C8.92379 9.5425 9.2008 9.5425 9.37165 9.37165C9.54251 9.20079 9.54251 8.92378 9.37165 8.75293L7.61862 6.99989L9.37165 5.24686Z\" fill=\"black\"/>\n                </svg>\n                <div class=\"information__delivery-time\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"minDeliveryTime") : depth0), depth0))
    + " - "
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"maxDeliveryTime") : depth0), depth0))
    + " мин</div>\n            </div>\n        </div>\n\n        <div class=\"restaurant-block__rating\">\n            <div class=\"rating__text\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"rating") : depth0), depth0))
    + "</div>\n        </div>\n    </div>\n</a>";
},"useData":true});
templates['sortBox.hbs'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"sort-box\">\n    <div class=\"sort-box__text-container\">\n        <h1 class=\"sort-box__text\">Все магазины</h1>\n    </div>\n    <div class=\"sort-box__sort-container\">\n        <button class=\"sort-box__expand-button\">\n            <div class=\"sort-box__text-block\">\n                Сортировка\n                <div class=\"sort-box__expand-svg\">\n                    <svg width=\"24px\" height=\"24px\" fill=\"none\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"\n                         aria-hidden=\"true\" focusable=\"false\">\n                        <path d=\"M17 11.7494V14.916L12 11.0827L7 14.916V11.7494L12 7.91602L17 11.7494Z\"\n                              fill=\"#000000\"></path>\n                    </svg>\n                </div>\n            </div>\n        </button>\n        <div class=\"h3\" style=\"height:18px\"></div>\n        <label class=\"sort-box__radio-container\">Cамые популярные\n            <input type=\"radio\" checked=\"checked\" name=\"radio\">\n            <span class=\"sort-box__checkmark\"></span>\n        </label>\n        <label class=\"sort-box__radio-container\">Рейтинг\n            <input type=\"radio\" name=\"radio\">\n            <span class=\"sort-box__checkmark\"></span>\n        </label>\n        <label class=\"sort-box__radio-container\">Время доставки\n            <input type=\"radio\" name=\"radio\">\n            <span class=\"sort-box__checkmark\"></span>\n        </label>\n    </div>\n\n    <div class=\"h3\" style=\"height:18px\"></div>\n\n    <div class=\"sort-box__price-range-container\">\n        <button class=\"sort-box__expand-button\">\n            <div class=\"sort-box__text-block\">\n                Диапазон стоимости\n                <div class=\"sort-box__expand-svg\">\n                    <svg width=\"24px\" height=\"24px\" fill=\"none\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"\n                         aria-hidden=\"true\" focusable=\"false\">\n                        <path d=\"M17 11.7494V14.916L12 11.0827L7 14.916V11.7494L12 7.91602L17 11.7494Z\"\n                              fill=\"#000000\"></path>\n                    </svg>\n                </div>\n            </div>\n        </button>\n\n\n        <article class=\"sort-box__checkbox\">\n            <input type=\"checkbox\" class=\"sort-box__checkbox_input\" checked=\"\"/>\n            <div class=\"sort-box__checkbox_text-container\">\n      <span>\n         ₽\n      </span>\n            </div>\n        </article>\n\n        <article class=\"sort-box__checkbox\">\n            <input type=\"checkbox\" class=\"sort-box__checkbox_input\"/>\n            <div class=\"sort-box__checkbox_text-container\">\n      <span>\n        ₽₽\n      </span>\n            </div>\n        </article>\n\n        <article class=\"sort-box__checkbox\">\n            <input type=\"checkbox\" class=\"sort-box__checkbox_input\"/>\n            <div class=\"sort-box__checkbox_text-container\">\n      <span>\n       ₽₽₽\n      </span>\n            </div>\n        </article>\n\n        <article class=\"sort-box__checkbox\">\n            <input type=\"checkbox\" class=\"sort-box__checkbox_input\"/>\n            <div class=\"sort-box__checkbox_text-container\">\n      <span>\n        ₽₽₽₽\n      </span>\n            </div>\n        </article>\n    </div>\n\n    <div class=\"h3\" style=\"height:50px\"></div>\n\n    <div class=\"sort-box__free-delivery-range-picker\">\n        <button class=\"sort-box__expand-button\">\n            <div class=\"sort-box__text-block\">\n                Бесплатная доставка от\n                <div class=\"sort-box__expand-svg\">\n                    <svg width=\"24px\" height=\"24px\" fill=\"none\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"\n                         aria-hidden=\"true\" focusable=\"false\">\n                        <path d=\"M17 11.7494V14.916L12 11.0827L7 14.916V11.7494L12 7.91602L17 11.7494Z\"\n                              fill=\"#000000\"></path>\n                    </svg>\n                </div>\n            </div>\n        </button>\n\n        <div class=\"h3\" style=\"height:18px\"></div>\n\n        <div class=\"sort-box__slider-container\">\n            <input type=\"range\" min=\"0\" max=\"1000\" value=\"50\" class=\"sort-box__slider\" id=\"myRange\" step=\"250\">\n            <p>₽: <span id=\"demo\"></span></p>\n        </div>\n\n        <script>\n            var slider = document.getElementById(\"myRange\");\n            var output = document.getElementById(\"demo\");\n            output.innerHTML = slider.value;\n\n            slider.oninput = function() {\n                output.innerHTML = this.value;\n            }\n        </script>\n    </div>\n\n    <div class=\"sort-box__price-range-container\">\n        <button class=\"sort-box__expand-button\">\n            <div class=\"sort-box__text-block\">\n                Диета\n                <div class=\"sort-box__expand-svg\">\n                    <svg width=\"24px\" height=\"24px\" fill=\"none\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"\n                         aria-hidden=\"true\" focusable=\"false\">\n                        <path d=\"M17 11.7494V14.916L12 11.0827L7 14.916V11.7494L12 7.91602L17 11.7494Z\"\n                              fill=\"#000000\"></path>\n                    </svg>\n                </div>\n            </div>\n        </button>\n\n\n        <article class=\"sort-box__checkbox\">\n            <input type=\"checkbox\" class=\"sort-box__checkbox_input\" checked=\"\"/>\n            <div class=\"sort-box__checkbox_text-container\">\n      <span>\n        Вегетарианская\n      </span>\n            </div>\n        </article>\n\n        <article class=\"sort-box__checkbox\">\n            <input type=\"checkbox\" class=\"sort-box__checkbox_input\"/>\n            <div class=\"sort-box__checkbox_text-container\">\n      <span>\n        Веган\n      </span>\n            </div>\n        </article>\n\n        <article class=\"sort-box__checkbox\">\n            <input type=\"checkbox\" class=\"sort-box__checkbox_input\"/>\n            <div class=\"sort-box__checkbox_text-container\">\n      <span>\n       Без глютена\n      </span>\n            </div>\n        </article>\n\n        <article class=\"sort-box__checkbox\">\n            <input type=\"checkbox\" class=\"sort-box__checkbox_input\"/>\n            <div class=\"sort-box__checkbox_text-container\">\n      <span>\n        Гипоаллергенная\n      </span>\n            </div>\n        </article>\n    </div>\n</div>";
},"useData":true});
templates['sortUnderheader.hbs'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"sort-underheader\">\n    <button class=\"button button_color_white button_sort-type sort-underheader__button\">\n        <svg class=\"button__icon-sort\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M10.2303 0.502846C4.98512 0.375697 0.629996 4.52467 0.502846 9.76983C0.375697 15.015 4.52467 19.3701 9.76983 19.4973C10.1075 19.5055 10.4129 19.4107 10.668 19.2177C10.9156 19.0305 11.0871 18.7729 11.207 18.4973C11.4422 17.957 11.5214 17.2484 11.5254 16.5177C11.5398 13.8759 13.8573 11.5817 16.4726 11.6808C17.1921 11.7081 17.8862 11.6695 18.4211 11.4931C18.6917 11.4039 18.9551 11.2686 19.1568 11.0576C19.3687 10.836 19.4894 10.5542 19.4973 10.2303C19.6244 4.98512 15.4754 0.629996 10.2303 0.502846ZM6.8901 13.4028C6.3419 13.4698 5.95184 13.9686 6.01888 14.5168C6.08593 15.065 6.58468 15.455 7.13288 15.388C7.68108 15.3209 8.07114 14.8222 8.00409 14.274C7.93705 13.7258 7.4383 13.3357 6.8901 13.4028ZM3.54812 10.7891C3.48108 10.2409 3.87113 9.74218 4.41933 9.67513C4.96753 9.60809 5.46629 9.99815 5.53333 10.5463C5.60037 11.0945 5.21032 11.5933 4.66212 11.6603C4.11391 11.7274 3.61516 11.3373 3.54812 10.7891ZM5.91897 5.46194C5.37077 5.52898 4.98071 6.02773 5.04775 6.57593C5.1148 7.12413 5.61355 7.51419 6.16175 7.44715C6.70995 7.3801 7.1 6.88135 7.03296 6.33315C6.96592 5.78495 6.46717 5.39489 5.91897 5.46194ZM13.6973 7.28116C13.6303 6.73296 14.0203 6.23421 14.5685 6.16717C15.1167 6.10012 15.6155 6.49018 15.6825 7.03838C15.7496 7.58658 15.3595 8.08533 14.8113 8.15238C14.2631 8.21942 13.7644 7.82936 13.6973 7.28116ZM9.99264 8.87868C9.44443 8.94573 9.05438 9.44448 9.12142 9.99268C9.18846 10.5409 9.68722 10.9309 10.2354 10.8639C10.7836 10.7969 11.1737 10.2981 11.1066 9.7499C11.0396 9.2017 10.5408 8.81164 9.99264 8.87868ZM9.39309 5.03705C9.32605 4.48885 9.7161 3.9901 10.2643 3.92306C10.8125 3.85601 11.3113 4.24607 11.3783 4.79427C11.4453 5.34247 11.0553 5.84122 10.5071 5.90827C9.95889 5.97531 9.46013 5.58525 9.39309 5.03705Z\" fill=\"black\"/>\n        </svg>\n        Pizza\n    </button>\n    <button class=\"button button_color_white button_sort-type sort-underheader__button\">\n        <svg class=\"button__icon-sort\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M10.2303 0.502846C4.98512 0.375697 0.629996 4.52467 0.502846 9.76983C0.375697 15.015 4.52467 19.3701 9.76983 19.4973C10.1075 19.5055 10.4129 19.4107 10.668 19.2177C10.9156 19.0305 11.0871 18.7729 11.207 18.4973C11.4422 17.957 11.5214 17.2484 11.5254 16.5177C11.5398 13.8759 13.8573 11.5817 16.4726 11.6808C17.1921 11.7081 17.8862 11.6695 18.4211 11.4931C18.6917 11.4039 18.9551 11.2686 19.1568 11.0576C19.3687 10.836 19.4894 10.5542 19.4973 10.2303C19.6244 4.98512 15.4754 0.629996 10.2303 0.502846ZM6.8901 13.4028C6.3419 13.4698 5.95184 13.9686 6.01888 14.5168C6.08593 15.065 6.58468 15.455 7.13288 15.388C7.68108 15.3209 8.07114 14.8222 8.00409 14.274C7.93705 13.7258 7.4383 13.3357 6.8901 13.4028ZM3.54812 10.7891C3.48108 10.2409 3.87113 9.74218 4.41933 9.67513C4.96753 9.60809 5.46629 9.99815 5.53333 10.5463C5.60037 11.0945 5.21032 11.5933 4.66212 11.6603C4.11391 11.7274 3.61516 11.3373 3.54812 10.7891ZM5.91897 5.46194C5.37077 5.52898 4.98071 6.02773 5.04775 6.57593C5.1148 7.12413 5.61355 7.51419 6.16175 7.44715C6.70995 7.3801 7.1 6.88135 7.03296 6.33315C6.96592 5.78495 6.46717 5.39489 5.91897 5.46194ZM13.6973 7.28116C13.6303 6.73296 14.0203 6.23421 14.5685 6.16717C15.1167 6.10012 15.6155 6.49018 15.6825 7.03838C15.7496 7.58658 15.3595 8.08533 14.8113 8.15238C14.2631 8.21942 13.7644 7.82936 13.6973 7.28116ZM9.99264 8.87868C9.44443 8.94573 9.05438 9.44448 9.12142 9.99268C9.18846 10.5409 9.68722 10.9309 10.2354 10.8639C10.7836 10.7969 11.1737 10.2981 11.1066 9.7499C11.0396 9.2017 10.5408 8.81164 9.99264 8.87868ZM9.39309 5.03705C9.32605 4.48885 9.7161 3.9901 10.2643 3.92306C10.8125 3.85601 11.3113 4.24607 11.3783 4.79427C11.4453 5.34247 11.0553 5.84122 10.5071 5.90827C9.95889 5.97531 9.46013 5.58525 9.39309 5.03705Z\" fill=\"black\"/>\n        </svg>\n        Pizza\n    </button>\n    <button class=\"button button_color_white button_sort-type sort-underheader__button\">\n        <svg class=\"button__icon-sort\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M10.2303 0.502846C4.98512 0.375697 0.629996 4.52467 0.502846 9.76983C0.375697 15.015 4.52467 19.3701 9.76983 19.4973C10.1075 19.5055 10.4129 19.4107 10.668 19.2177C10.9156 19.0305 11.0871 18.7729 11.207 18.4973C11.4422 17.957 11.5214 17.2484 11.5254 16.5177C11.5398 13.8759 13.8573 11.5817 16.4726 11.6808C17.1921 11.7081 17.8862 11.6695 18.4211 11.4931C18.6917 11.4039 18.9551 11.2686 19.1568 11.0576C19.3687 10.836 19.4894 10.5542 19.4973 10.2303C19.6244 4.98512 15.4754 0.629996 10.2303 0.502846ZM6.8901 13.4028C6.3419 13.4698 5.95184 13.9686 6.01888 14.5168C6.08593 15.065 6.58468 15.455 7.13288 15.388C7.68108 15.3209 8.07114 14.8222 8.00409 14.274C7.93705 13.7258 7.4383 13.3357 6.8901 13.4028ZM3.54812 10.7891C3.48108 10.2409 3.87113 9.74218 4.41933 9.67513C4.96753 9.60809 5.46629 9.99815 5.53333 10.5463C5.60037 11.0945 5.21032 11.5933 4.66212 11.6603C4.11391 11.7274 3.61516 11.3373 3.54812 10.7891ZM5.91897 5.46194C5.37077 5.52898 4.98071 6.02773 5.04775 6.57593C5.1148 7.12413 5.61355 7.51419 6.16175 7.44715C6.70995 7.3801 7.1 6.88135 7.03296 6.33315C6.96592 5.78495 6.46717 5.39489 5.91897 5.46194ZM13.6973 7.28116C13.6303 6.73296 14.0203 6.23421 14.5685 6.16717C15.1167 6.10012 15.6155 6.49018 15.6825 7.03838C15.7496 7.58658 15.3595 8.08533 14.8113 8.15238C14.2631 8.21942 13.7644 7.82936 13.6973 7.28116ZM9.99264 8.87868C9.44443 8.94573 9.05438 9.44448 9.12142 9.99268C9.18846 10.5409 9.68722 10.9309 10.2354 10.8639C10.7836 10.7969 11.1737 10.2981 11.1066 9.7499C11.0396 9.2017 10.5408 8.81164 9.99264 8.87868ZM9.39309 5.03705C9.32605 4.48885 9.7161 3.9901 10.2643 3.92306C10.8125 3.85601 11.3113 4.24607 11.3783 4.79427C11.4453 5.34247 11.0553 5.84122 10.5071 5.90827C9.95889 5.97531 9.46013 5.58525 9.39309 5.03705Z\" fill=\"black\"/>\n        </svg>\n        Pizza\n    </button>\n    <button class=\"button button_color_white button_sort-type sort-underheader__button\">\n        <svg class=\"button__icon-sort\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M10.2303 0.502846C4.98512 0.375697 0.629996 4.52467 0.502846 9.76983C0.375697 15.015 4.52467 19.3701 9.76983 19.4973C10.1075 19.5055 10.4129 19.4107 10.668 19.2177C10.9156 19.0305 11.0871 18.7729 11.207 18.4973C11.4422 17.957 11.5214 17.2484 11.5254 16.5177C11.5398 13.8759 13.8573 11.5817 16.4726 11.6808C17.1921 11.7081 17.8862 11.6695 18.4211 11.4931C18.6917 11.4039 18.9551 11.2686 19.1568 11.0576C19.3687 10.836 19.4894 10.5542 19.4973 10.2303C19.6244 4.98512 15.4754 0.629996 10.2303 0.502846ZM6.8901 13.4028C6.3419 13.4698 5.95184 13.9686 6.01888 14.5168C6.08593 15.065 6.58468 15.455 7.13288 15.388C7.68108 15.3209 8.07114 14.8222 8.00409 14.274C7.93705 13.7258 7.4383 13.3357 6.8901 13.4028ZM3.54812 10.7891C3.48108 10.2409 3.87113 9.74218 4.41933 9.67513C4.96753 9.60809 5.46629 9.99815 5.53333 10.5463C5.60037 11.0945 5.21032 11.5933 4.66212 11.6603C4.11391 11.7274 3.61516 11.3373 3.54812 10.7891ZM5.91897 5.46194C5.37077 5.52898 4.98071 6.02773 5.04775 6.57593C5.1148 7.12413 5.61355 7.51419 6.16175 7.44715C6.70995 7.3801 7.1 6.88135 7.03296 6.33315C6.96592 5.78495 6.46717 5.39489 5.91897 5.46194ZM13.6973 7.28116C13.6303 6.73296 14.0203 6.23421 14.5685 6.16717C15.1167 6.10012 15.6155 6.49018 15.6825 7.03838C15.7496 7.58658 15.3595 8.08533 14.8113 8.15238C14.2631 8.21942 13.7644 7.82936 13.6973 7.28116ZM9.99264 8.87868C9.44443 8.94573 9.05438 9.44448 9.12142 9.99268C9.18846 10.5409 9.68722 10.9309 10.2354 10.8639C10.7836 10.7969 11.1737 10.2981 11.1066 9.7499C11.0396 9.2017 10.5408 8.81164 9.99264 8.87868ZM9.39309 5.03705C9.32605 4.48885 9.7161 3.9901 10.2643 3.92306C10.8125 3.85601 11.3113 4.24607 11.3783 4.79427C11.4453 5.34247 11.0553 5.84122 10.5071 5.90827C9.95889 5.97531 9.46013 5.58525 9.39309 5.03705Z\" fill=\"black\"/>\n        </svg>\n        Pizza\n    </button>\n</div>";
},"useData":true});
templates['userLoginForm.hbs'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<form id= \"form\" action=\"\" class=\"login-page\">\n    <div class=\"login-page__logo-container\">\n        <img href=\"/\" src=\"../../assets/images/Hot%20Mexicans%20Eats-logos_transparent.png\" class=\"login-page__logo\" alt=\"\">\n    </div>\n    <div class=\"login-page__login-container\">\n        <div class=\"login-page__login-form\">\n            <h1 class=\"login-page__login_welcome-back-text\">С возвращением!</h1>\n            <input id=\"login\" placeholder=\"Электронная почта или номер телефона\" required class=\"input login-page__login_input\">\n            <input id=\"password\" type=\"password\" placeholder=\"Пароль\"  required class=\"input login-page__login_input\">\n            <button class=\"login-page__submit-button\" type=\"submit\">Войти</button>\n        </div>\n    </div>\n\n    <div class=\"login-page__register-container\">\n        <span class=\"login-page__register-container_span\">Еще нет аккаунта HMEats? <a href=\"signup\" class=\"login-page__register-container_register\">Зарегистрируйся!</a></span>\n    </div>\n</form>";
},"useData":true});
templates['userSignUpForm.hbs'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<form action=\"\" class=\"login-page\">\n    <div class=\"register-page__logo-container\">\n        <img href=\"home\" src=\"../../assets/images/Hot%20Mexicans%20Eats-logos_transparent.png\" class=\"register-page__logo\" alt=\"\">\n    </div>\n    <div class=\"register-page__register-container\">\n        <div class=\"register-page__register-form\">\n            <h1 class=\"register-page__register_welcome-back-text\">Хочешь заказать еду? <br> Присоединяйся!</h1>\n            <input placeholder=\"Электронная почта\" required class=\"input register-page__login_input\">\n            <input placeholder=\"Номер телефона\" required class=\"input register-page__login_input\">\n            <input type=\"password\" placeholder=\"Пароль\"  required class=\"input register-page__login_input\">\n            <input type=\"password\" placeholder=\"Повторение пароля\"  required class=\"input register-page__login_input\">\n            <button class=\"register-page__submit-button\" type=\"submit\">Зарегистрироваться</button>\n        </div>\n    </div>\n\n    <div class=\"register-page__register-container\">\n        <span class=\"register-page__register-container_span\">Уже пользовались HMEats? <a href=\"login\" class=\"register-page__register-container_register\">Войти!</a></span>\n    </div>\n</form>";
},"useData":true});
templates['homePage.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <div class=\"home-page__restaurant-block\">\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"restaurant"),depth0,{"name":"restaurant","data":data,"indent":"                        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "                    </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"header"),depth0,{"name":"header","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n<div class=\"home-page\">\n    <div class=\"home-page__content\">\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"sortUnderheader"),depth0,{"name":"sortUnderheader","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "        <div class=\"home-page__promo-line\">\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"promoLine"),depth0,{"name":"promoLine","data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "        </div>\n\n        <div class=\"home-page__line\">\n            <div class=\"home-page__sort\">\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"sortBox"),depth0,{"name":"sortBox","data":data,"indent":"                ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "            </div>\n\n            <div class=\"home-page__restaurants-list\">\n                <div class=\"home-page__restaurant-block-title\">\n                    <h3>Популярное</h3>\n                </div>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"restaurantList") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":19,"column":16},"end":{"line":23,"column":26}}})) != null ? stack1 : "")
    + "            </div>\n        </div>\n    </div>\n</div>\n\n";
},"usePartial":true,"useData":true});
templates['loginPage.hbs'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"loginUserInput"),depth0,{"name":"loginUserInput","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"usePartial":true,"useData":true});
templates['signUpPage.hbs'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"signUpUserInput"),depth0,{"name":"signUpUserInput","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"usePartial":true,"useData":true});
})();