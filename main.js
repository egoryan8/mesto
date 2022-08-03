(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r,o,i,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._cardTitle=e.name,this._cardImage=e.link,this._likes=e.likes,this._cardId=e.cardId,this._userId=e.userId,this._ownerId=e.ownerId,this._handleDeleteCard=o,this._handleLikeAdd=i,this._handleRemoveLike=a,this._cardSelector=n,this._handleClickToOpenCard=r}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._imageElement=this._element.querySelector(".card__image"),this._titleElement=this._element.querySelector(".card__title"),this._likeButton=this._element.querySelector(".card__like-btn"),this._deleteButton=this._element.querySelector(".card__delete-btn"),this._likesCount=this._element.querySelector(".card__likes-count"),this._imageElement.src=this._cardImage,this._imageElement.alt=this._cardTitle,this._titleElement.textContent=this._cardTitle,this._likesCount.textContent="".concat(this._likes.length),this._setEventListeners(),this._handleLikeState(),this.handleDeleteButtonState(),this._element}},{key:"_setEventListeners",value:function(){var e=this;this._imageElement.addEventListener("click",(function(){e._handleClickToOpenCard(e._cardTitle,e._cardImage)})),this._likeButton.addEventListener("click",(function(){e._likeButton.classList.contains("card__like-btn_active")?e._handleRemoveLike():e._handleLikeAdd()})),this._deleteButton.addEventListener("click",(function(){e._handleDeleteCard()}))}},{key:"handleDeleteButtonState",value:function(){this._userId!==this._ownerId&&(this._deleteButton.remove(),this._deleteButton=null)}},{key:"_handleLikeState",value:function(){var e=this;this._likes.forEach((function(t){t._id===e._userId?e.addLike():e.removeLike()}))}},{key:"addLike",value:function(){this._likeButton.classList.add("card__like-btn_active")}},{key:"removeLike",value:function(){this._likeButton.classList.remove("card__like-btn_active")}},{key:"setLikesCount",value:function(e){this._likesCount.textContent="".concat(e.likes.length)}},{key:"deleteCard",value:function(){this._element.remove(),this._element=null}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._form=t,this._inputSelector=n.inputSelector,this._inputErrorClass=n.inputErrorClass,this._errorClass=n.errorClass,this._submitButtonSelector=n.submitBtnSelector,this._inactiveButtonClass=n.inactiveBtnClass,this._inputList=Array.from(this._form.querySelectorAll(this._inputSelector)),this._submitButtonElement=this._form.querySelector(this._submitButtonSelector)}var t,r;return t=e,(r=[{key:"_getErrorElement",value:function(e){return this._errorElement=this._form.querySelector(".".concat(e.id,"-input-error")),this._errorElement}},{key:"_showInputError",value:function(e){this._getErrorElement(e),e.classList.add(this._inputErrorClass),this._errorElement.textContent=e.validationMessage,this._errorElement.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){this._getErrorElement(e),this._errorElement&&(e.classList.remove(this._inputErrorClass),this._errorElement.textContent="",this._errorElement.classList.remove(this._errorClass))}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._submitButtonElement.classList.add(this._inactiveButtonClass),this._submitButtonElement.setAttribute("disabled","true")):(this._submitButtonElement.classList.remove(this._inactiveButtonClass),this._submitButtonElement.removeAttribute("disabled"))}},{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e._hideInputError(t)}))}},{key:"enableValidation",value:function(){this._form.addEventListener("submit",(function(e){return e.preventDefault()})),this._setEventListeners()}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){(t.target===t.currentTarget||t.target.classList.contains("popup__close-btn"))&&e.close()}))}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(){return u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=c(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},u.apply(this,arguments)}function c(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=h(e)););return e}function l(e,t){return l=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},l(e,t)}function f(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&l(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=h(r);if(o){var n=h(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return f(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._submitHandler=t,n._form=n._popup.querySelector(".form"),n._inputList=n._popup.querySelectorAll(".form__item"),n._submitButton=n._form.querySelector(".form__save-btn"),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){return e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;u(h(a.prototype),"setEventListeners",this).call(this),this._popup.addEventListener("submit",(function(t){t.preventDefault(),e._submitHandler(e._getInputValues())}))}},{key:"close",value:function(){u(h(a.prototype),"close",this).call(this),this._form.reset()}},{key:"handleButtonText",value:function(e){this._submitButton.textContent=e?"Сохранение...":"Сохранить"}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(i);function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(){return y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=v(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},y.apply(this,arguments)}function v(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=k(e)););return e}function m(e,t){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},m(e,t)}function b(e,t){if(t&&("object"===p(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function k(e){return k=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},k(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=k(r);if(o){var n=k(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._image=t._popup.querySelector(".popup__image"),t._title=t._popup.querySelector(".popup__image-caption"),t}return t=a,(n=[{key:"open",value:function(e,t){y(k(a.prototype),"open",this).call(this),this._image.src=t,this._image.alt=e,this._title.textContent=e}}])&&_(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(i);function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var w=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._container=n,this._renderer=r}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;this._renderedItems=e,this._renderedItems.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&g(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var O=function(){function e(t){var n=t.profileName,r=t.profileStatus,o=t.profileAvatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=n,this._status=r,this._avatar=o}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return this._userInfo={name:this._name.textContent,about:this._status.textContent,avatar:this._avatar.src},this._userInfo}},{key:"setUserInfo",value:function(e){this._name.textContent=e.name,this._status.textContent=e.about,this._avatar.src=e.avatar}}])&&S(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var L=function(){function e(t){var n=t.url,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=n,this._headers=r}var t,n;return t=e,(n=[{key:"_handleServerResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getCards",value:function(){return this._cards=fetch("".concat(this._url,"/cards"),{headers:this._headers}).then(this._handleServerResponse),this._cards}},{key:"getProfile",value:function(){return this._profileInfo=fetch("".concat(this._url,"/users/me"),{headers:this._headers}).then(this._handleServerResponse),this._profileInfo}},{key:"setProfile",value:function(e){return this._settedProfile=fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then(this._handleServerResponse),this._settedProfile}},{key:"setAvatar",value:function(e){return this._newAvatar=fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then(this._handleServerResponse),this._newAvatar}},{key:"addLike",value:function(e){return this._like=fetch("".concat(this._url,"/cards/").concat(e._id,"/likes"),{method:"PUT",headers:this._headers}).then(this._handleServerResponse),this._like}},{key:"deleteLike",value:function(e){return this._deleteLike=fetch("".concat(this._url,"/cards/").concat(e._id,"/likes"),{method:"DELETE",headers:this._headers}).then(this._handleServerResponse),this._deleteLike}},{key:"addCard",value:function(e){return this._addedCard=fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.title,link:e.link})}).then(this._handleServerResponse),this._addedCard}},{key:"deleteCard",value:function(e){return this._deletedCard=fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._handleServerResponse),this._deletedCard}}])&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function P(e){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(e)}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function I(){return I="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=B(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},I.apply(this,arguments)}function B(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=q(e)););return e}function R(e,t){return R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},R(e,t)}function T(e,t){if(t&&("object"===P(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function q(e){return q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},q(e)}var x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&R(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=q(r);if(o){var n=q(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return T(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._form=n._popup.querySelector(".form"),n._submitHandler=t,n}return t=a,(n=[{key:"open",value:function(e){this._card=e,I(q(a.prototype),"open",this).call(this)}},{key:"setEventListeners",value:function(){var e=this;I(q(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._submitHandler(e._card)}))}}])&&j(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(i),A=document.querySelector(".profile__edit-btn"),D=document.querySelector(".profile__name"),V=document.querySelector(".profile__status"),U=document.querySelector(".profile__avatar"),H=document.querySelector("#profile-name"),N=document.querySelector("#profile-status"),J=document.querySelector(".profile__add-btn"),z=document.querySelector(".places__cards-list"),M=document.querySelector(".profile__avatar-edit"),F={},G={formSelector:".form",inputSelector:".form__item",submitBtnSelector:".form__save-btn",inputErrorClass:"form__item_type_error",errorClass:"form__item-error_visible",inactiveBtnClass:"form__save-btn_disabled"},K=new L({url:"https://mesto.nomoreparties.co/v1/cohort-47",headers:{authorization:"9cd7abe3-5559-4a23-a51d-befd5fe922ed","Content-Type":"application/json"}}),Q=function(e,t){Z.open(e,t)},W=function(e){var n=new t({name:e.name,link:e.link,likes:e.likes,userId:ne,ownerId:e.owner._id,cardId:e._id},"#card-template",Q,(function(){return re.open(n)}),(function(){return K.addLike(e).then((function(e){n.setLikesCount(e),n.addLike()}))}),(function(){return K.deleteLike(e).then((function(e){n.setLikesCount(e),n.removeLike()}))}));return n.generateCard()},X=new w({renderer:function(e){X.addItem(W(e))}},z),Y=new d(".popup_add-place",(function(e){return Y.handleButtonText(!0),K.addCard(e).then((function(e){X.addItem(W(e)),Y.close()})).catch((function(e){console.log(e)}))}));Y.setEventListeners();var Z=new E(".popup_open-card");Z.setEventListeners();var $=new O({profileName:D,profileStatus:V,profileAvatar:U}),ee=new d(".popup_edit-profile",(function(e){return ee.handleButtonText(!0),K.setProfile(e).then((function(e){$.setUserInfo(e),ee.close()})).catch((function(e){return console.log(e)}))}));ee.setEventListeners();var te=new d(".popup_edit-avatar",(function(e){return te.handleButtonText(!0),K.setAvatar(e).then((function(e){$.setUserInfo(e),te.close()})).catch((function(e){console.log(e)}))}));te.setEventListeners();var ne,re=new x(".popup_you-sure",(function(e){return K.deleteCard(e._cardId).then((function(){e.deleteCard(),re.close()})).catch((function(e){return console.log(e)}))}));re.setEventListeners(),Promise.all([K.getCards(),K.getProfile()]).then((function(e){ne=e[1]._id,X.renderItems(e[0].reverse()),$.setUserInfo(e[1])})).catch((function(e){console.log(e)})),A.addEventListener("click",(function(){var e=$.getUserInfo();H.value=e.name,N.value=e.about,F["edit-profile-form"].resetValidation(),ee.handleButtonText(!1),ee.open()})),J.addEventListener("click",(function(){F["add-place-form"].resetValidation(),Y.handleButtonText(!1),Y.open()})),M.addEventListener("click",(function(){F["edit-avatar-form"].resetValidation(),te.handleButtonText(!1),te.open()})),Array.from(document.querySelectorAll(G.formSelector)).forEach((function(e){var t=new r(e,G),n=e.getAttribute("name");F[n]=t,t.enableValidation()}))})();