'use strict';
import {HomePage} from './pages/homePage/homePage.js';
import {SignUpPage} from './pages/signUpPage/signUpPage.js';
import {LoginPage} from './pages/loginPage/loginPage.js';
import Http from './modules/http.js'

const http = new Http()

http.ajaxGet()
    .then(response => {
      console.log(response)
      console.log('hello world');
    })
    .catch(response => {
      console.log(response)
    })


Handlebars.registerPartial('header', Handlebars.templates['header.hbs']);
Handlebars.registerPartial('restaurant',
    Handlebars.templates['restaurantBlock.hbs']);
Handlebars.registerPartial('promoLine', Handlebars.templates['promoLine.hbs']);
Handlebars.registerPartial('sortUnderheader',
    Handlebars.templates['sortUnderheader.hbs']);
Handlebars.registerPartial('sortBox', Handlebars.templates['sortBox.hbs']);
Handlebars.registerPartial('loginUserInput',
    Handlebars.templates['userLoginForm.hbs']);
Handlebars.registerPartial('signUpUserInput',
    Handlebars.templates['userSignUpForm.hbs']);

Handlebars.registerHelper('times', function(n, block) {
  let accum = '';
  for (let i = 0; i < n; ++i) {
    accum += block.fn(i);
  }
  return accum;
});

const application = document.getElementById('app');
const footer = document.getElementById('foot');
const footerTemplate = Handlebars.templates['footer.hbs'];
footer.innerHTML = footerTemplate({});
const homePage = new HomePage(application);
const loginPage = new LoginPage(application);
const signUpPage = new SignUpPage(application);

const homePageRender = () => {
  homePage.render();
};

const loginPageRender = () => {
  loginPage.render();
};

const signUpPageRender = () => {
  signUpPage.render();
};

const config = {
  login: {
    open: loginPageRender,
  },
  signUp: {
    open: signUpPageRender,
  },
  home: {
    open: homePageRender,
  },
};


loginPage.render();

application.addEventListener('click', (e) => {
  const {target} = e;

  if (target instanceof HTMLAnchorElement ||
      target instanceof HTMLButtonElement ||
      target instanceof HTMLImageElement) {
    e.preventDefault();
    console.log(config[target.getAttribute('href')]);
    config[target.getAttribute('href')].open();
  }
});
