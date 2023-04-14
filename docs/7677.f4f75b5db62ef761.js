"use strict";(self.webpackChunkchatHRB=self.webpackChunkchatHRB||[]).push([[7677],{7677:(ee,E,c)=>{c.r(E),c.d(E,{hrb_modal:()=>A});var M=c(5861),l=c(6604),f=c(6120),F=c(9015);function Y(e,i){for(var r=0;r<i.length;r++){var h=i[r];h.enumerable=h.enumerable||!1,h.configurable=!0,"value"in h&&(h.writable=!0),Object.defineProperty(e,h.key,h)}}function p(e){return function z(e){if(Array.isArray(e))return x(e)}(e)||function P(e){if(typeof Symbol<"u"&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function R(e,i){if(e){if("string"==typeof e)return x(e,i);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return x(e,i)}}(e)||function K(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e,i){(null==i||i>e.length)&&(i=e.length);for(var r=0,h=new Array(i);r<i;r++)h[r]=e[r];return h}var e,i,r,b,v,w=(e=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex^="-"])'],i=function(){function m(o){var t=o.targetModal,a=o.triggers,s=void 0===a?[]:a,n=o.onShow,g=void 0===n?function(){}:n,k=o.onClose,H=void 0===k?function(){}:k,L=o.openTrigger,W=void 0===L?"data-micromodal-trigger":L,T=o.closeTrigger,G=void 0===T?"data-micromodal-close":T,$=o.openClass,Z=void 0===$?"is-open":$,S=o.disableScroll,J=void 0!==S&&S,B=o.disableFocus,Q=void 0!==B&&B,O=o.awaitCloseAnimation,V=void 0!==O&&O,D=o.awaitOpenAnimation,X=void 0!==D&&D,I=o.debugMode,q=void 0!==I&&I;(function j(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")})(this,m),this.modal=document.getElementById(t),this.config={debugMode:q,disableScroll:J,openTrigger:W,closeTrigger:G,openClass:Z,onShow:g,onClose:H,awaitCloseAnimation:V,awaitOpenAnimation:X,disableFocus:Q},s.length>0&&this.registerTriggers.apply(this,p(s)),this.onClick=this.onClick.bind(this),this.onKeydown=this.onKeydown.bind(this)}return function N(e,i,r){i&&Y(e.prototype,i),r&&Y(e,r)}(m,[{key:"registerTriggers",value:function(){for(var t=this,a=arguments.length,s=new Array(a),n=0;n<a;n++)s[n]=arguments[n];s.filter(Boolean).forEach(function(g){g.addEventListener("click",function(k){return t.showModal(k)})})}},{key:"showModal",value:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(this.activeElement=document.activeElement,this.modal.setAttribute("aria-hidden","false"),this.modal.classList.add(this.config.openClass),this.scrollBehaviour("disable"),this.addEventListeners(),this.config.awaitOpenAnimation){var s=function n(){t.modal.removeEventListener("animationend",n,!1),t.setFocusToFirstNode()};this.modal.addEventListener("animationend",s,!1)}else this.setFocusToFirstNode();this.config.onShow(this.modal,this.activeElement,a)}},{key:"closeModal",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,a=this.modal;if(this.modal.setAttribute("aria-hidden","true"),this.removeEventListeners(),this.scrollBehaviour("enable"),this.activeElement&&this.activeElement.focus&&this.activeElement.focus(),this.config.onClose(this.modal,this.activeElement,t),this.config.awaitCloseAnimation){var s=this.config.openClass;this.modal.addEventListener("animationend",function n(){a.classList.remove(s),a.removeEventListener("animationend",n,!1)},!1)}else a.classList.remove(this.config.openClass)}},{key:"closeModalById",value:function(t){this.modal=document.getElementById(t),this.modal&&this.closeModal()}},{key:"scrollBehaviour",value:function(t){if(this.config.disableScroll){var a=document.querySelector("body");switch(t){case"enable":Object.assign(a.style,{overflow:""});break;case"disable":Object.assign(a.style,{overflow:"hidden"})}}}},{key:"addEventListeners",value:function(){this.modal.addEventListener("touchstart",this.onClick),this.modal.addEventListener("click",this.onClick),document.addEventListener("keydown",this.onKeydown)}},{key:"removeEventListeners",value:function(){this.modal.removeEventListener("touchstart",this.onClick),this.modal.removeEventListener("click",this.onClick),document.removeEventListener("keydown",this.onKeydown)}},{key:"onClick",value:function(t){t.target.hasAttribute(this.config.closeTrigger)&&this.closeModal(t)}},{key:"onKeydown",value:function(t){27===t.keyCode&&this.closeModal(t),9===t.keyCode&&this.retainFocus(t)}},{key:"getFocusableNodes",value:function(){var t=this.modal.querySelectorAll(e);return Array.apply(void 0,p(t))}},{key:"setFocusToFirstNode",value:function(){var t=this;if(!this.config.disableFocus){var a=this.getFocusableNodes();if(0!==a.length){var s=a.filter(function(n){return!n.hasAttribute(t.config.closeTrigger)});s.length>0&&s[0].focus(),0===s.length&&a[0].focus()}}}},{key:"retainFocus",value:function(t){var a=this.getFocusableNodes();if(0!==a.length)if(a=a.filter(function(n){return null!==n.offsetParent}),this.modal.contains(document.activeElement)){var s=a.indexOf(document.activeElement);t.shiftKey&&0===s&&(a[a.length-1].focus(),t.preventDefault()),!t.shiftKey&&a.length>0&&s===a.length-1&&(a[0].focus(),t.preventDefault())}else a[0].focus()}}]),m}(),r=null,b=function(o){if(!document.getElementById(o))return console.warn("MicroModal: \u2757Seems like you have missed %c'".concat(o,"'"),"background-color: #f8f9fa;color: #50596c;font-weight: bold;","ID somewhere in your code. Refer example below to resolve it."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<div class="modal" id="'.concat(o,'"></div>')),!1},v=function(o,t){if(function(o){o.length<=0&&(console.warn("MicroModal: \u2757Please specify at least one %c'micromodal-trigger'","background-color: #f8f9fa;color: #50596c;font-weight: bold;","data attribute."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<a href="#" data-micromodal-trigger="my-modal"></a>'))}(o),!t)return!0;for(var a in t)b(a);return!0},{init:function(o){var t=Object.assign({},{openTrigger:"data-micromodal-trigger"},o),a=p(document.querySelectorAll("[".concat(t.openTrigger,"]"))),s=function(o,t){var a=[];return o.forEach(function(s){var n=s.attributes[t].value;void 0===a[n]&&(a[n]=[]),a[n].push(s)}),a}(a,t.openTrigger);if(!0!==t.debugMode||!1!==v(a,s))for(var n in s){var g=s[n];t.targetModal=n,t.triggers=p(g),r=new i(t)}},show:function(o,t){var a=t||{};a.targetModal=o,(!0!==a.debugMode||!1!==b(o))&&(r&&r.removeEventListeners(),(r=new i(a)).showModal())},close:function(o){o?r.closeModalById(o):r.closeModal()}});window.MicroModal=w;const A=class{constructor(e){(0,l.r)(this,e),this.swipeUp=(0,l.c)(this,"swipeUp",7),this.swipeRight=(0,l.c)(this,"swipeRight",7),this.swipeDown=(0,l.c)(this,"swipeDown",7),this.swipeLeft=(0,l.c)(this,"swipeLeft",7),this.hrbClose=(0,l.c)(this,"hrbClose",7),this.hrbOpen=(0,l.c)(this,"hrbOpen",7),this.modalId=(0,f.a)(),this.variant="header-empty-title",this.size="small",this.theme="white",this.modalTitle="Newly Opened Modal",this.type="default",this.disableBackground=!1,this.getConfig=()=>({awaitCloseAnimation:!0,onClose:()=>this.hrbClose.emit(this),onShow:()=>this.hrbOpen.emit(this)}),this.handleClose=()=>w.close(this.modalId),this.containerAriaLabel=`${this.modalId}-title`,this.isLarge="large"===this.size||"large"===this.type,this.typeIsSize="large"===this.type||"medium"===this.type||"small"===this.type,this.isDrawer="drawer"===this.type,this.isSheet="sheet"===this.type,this.noClose=this.isLarge||this.disableBackground,this.closeButtonClasses=(0,f.g)([(!!this.isSheet||!!this.isDrawer)&&"hrb-modal--drag-close"]),this.headerClasses=(0,f.g)(["hrb-modal__header",`hrb-modal-header-title--${this.variant}`,this.closeButtonClasses]),this.footerClasses=(0,f.g)(["hrb-modal__footer",this.closeButtonClasses]),this.renderCloseButton=(i,r)=>!0===this.isDrawer||!0===this.isSheet?(0,l.h)("button",{onClick:r,class:"hrb-modal__close-button hrb-modal--drag-close"},(0,l.h)("span",null,"close")):(0,l.h)("hrb-circle-button",{class:"hrb-modal__close-button",onClick:r,"p-aria-label":"Close Modal",size:i},(0,l.h)("hrb-icon",{name:"close"}))}swipedUp(e){this.swipeUp.emit(e),!0===this.isDrawer&&this.handleClose()}swipedRight(e){this.swipeRight.emit(e)}swipedDown(e){this.swipeDown.emit(e),!0===this.isSheet&&this.handleClose()}swipedLeft(e){this.swipeLeft.emit(e)}close(){var e=this;return(0,M.Z)(function*(){e.handleClose()})()}show(){var e=this;return(0,M.Z)(function*(){w.show(e.modalId,e.getConfig())})()}componentWillLoad(){this.hasHeader=!!this.el.querySelector('[slot="hrb-modal-header"]')}componentDidLoad(){return F.s.createSwipeEvents}componentDidRender(){const{getConfig:e}=this;w.init(e())}render(){const{containerAriaLabel:e,handleClose:i,noClose:r,hasHeader:h,isLarge:b,isDrawer:_,modalId:v,renderCloseButton:u,size:C,theme:y,typeIsSize:m,modalTitle:o,type:t}=this,a=b?"medium":"small",s=(0,f.g)(["hrb-modal",`hrb-modal--${t}`,!m&&`hrb-modal--${C}`,!h&&"hrb-modal--no-header",!!y&&`hrb-modal--${y}`]);return(0,l.h)("div",{class:s,id:v,"aria-hidden":"true"},(0,l.h)("div",{class:"hrb-modal__overlay",tabindex:"-1","data-micromodal-close":!r},b&&u(a,i),(0,l.h)("div",{class:"hrb-modal__scroll-container","data-micromodal-close":!r},(0,l.h)("main",{"aria-labelledby":e,"aria-label":"Open Model","aria-modal":"true",class:"hrb-modal__main",role:"dialog"},(0,l.h)("header",{class:this.headerClasses},(0,l.h)("h2",{class:"hrb-modal__header-title",id:e},o),(0,l.h)("slot",{name:"hrb-modal-header"}),!b&&!_&&u(a,i)),(0,l.h)("div",{id:`${v}-content`,class:"hrb-modal__content"},(0,l.h)("slot",null)),(0,l.h)("div",{class:this.footerClasses},_&&u(a,i))))))}get el(){return(0,l.g)(this)}};A.style='@-webkit-keyframes modal-slide-in{0%{-webkit-transform:translateY(10%);transform:translateY(10%)}50%{-webkit-transform:translateY(-5%);transform:translateY(-5%)}100%{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes modal-slide-in{0%{-webkit-transform:translateY(10%);transform:translateY(10%)}50%{-webkit-transform:translateY(-5%);transform:translateY(-5%)}100%{-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes modal-slide-out{0%{-webkit-transform:translateY(0);transform:translateY(0)}100%{-webkit-transform:translateY(10px);transform:translateY(10px)}}@keyframes modal-slide-out{0%{-webkit-transform:translateY(0);transform:translateY(0)}100%{-webkit-transform:translateY(10px);transform:translateY(10px)}}.hrb-modal[aria-hidden=false] .hrb-modal__main{-webkit-animation:modal-slide-in 200ms ease;animation:modal-slide-in 200ms ease}.hrb-modal[aria-hidden=true] .hrb-modal__main{-webkit-animation:modal-slide-out 200ms ease;animation:modal-slide-out 200ms ease}.hrb-modal[aria-hidden=false] .hrb-modal__overlay{-webkit-animation:fade-in 200ms ease;animation:fade-in 200ms ease}.hrb-modal[aria-hidden=true] .hrb-modal__overlay{-webkit-animation:fade-out 200ms ease;animation:fade-out 200ms ease}.hrb-modal{display:none;position:relative;z-index:9999}.hrb-modal.is-open{display:block}.hrb-modal__overlay{-ms-flex-align:center;align-items:center;background:rgba(214, 218, 224, 0.6);bottom:0;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;left:0;position:fixed;right:0;top:0;will-change:transform}.hrb-modal__scroll-container{display:block;overflow-y:auto;width:100vw}.hrb-modal--small .hrb-modal__scroll-container,.hrb-modal--medium .hrb-modal__scroll-container{padding:20px 0}@media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none){.hrb-modal__scroll-container{overflow-y:visible}}.hrb-modal__main{display:block;margin:0 auto;position:relative;will-change:transform}.hrb-modal__main .hrb-modal__content{padding:30px;padding-top:20px}@media (min-width: 900px){.hrb-modal__main .hrb-modal__content{padding:40px;padding-top:20px}}.hrb-modal--small .hrb-modal__main,.hrb-modal--medium .hrb-modal__main{border-radius:15px;-webkit-box-shadow:0 10px 20px 0 rgba(0, 0, 0, 0.08);box-shadow:0 10px 20px 0 rgba(0, 0, 0, 0.08)}.hrb-modal--small .hrb-modal__main{max-width:calc(100% - (20px * 2))}@media (min-width: 900px){.hrb-modal--small .hrb-modal__main{width:520px}}.hrb-modal--medium .hrb-modal__main{max-width:calc(100% - (20px * 2))}@media (min-width: 900px){.hrb-modal--medium .hrb-modal__main{width:920px}}.hrb-modal--large .hrb-modal__main{max-width:calc(100% - (20px * 2))}@media (min-width: 900px){.hrb-modal--large .hrb-modal__main{width:680px}}.hrb-modal--blue:not(.hrb-modal--large) .hrb-modal__main{background:#3bc0f8}.hrb-modal--blue.hrb-modal--large .hrb-modal__overlay{background:#3bc0f8}.hrb-modal--green:not(.hrb-modal--large) .hrb-modal__main{background:#14aa40}.hrb-modal--green.hrb-modal--large .hrb-modal__overlay{background:#14aa40}.hrb-modal--light-blue:not(.hrb-modal--large) .hrb-modal__main{background:#d7f2fd}.hrb-modal--light-blue.hrb-modal--large .hrb-modal__overlay{background:#d7f2fd}.hrb-modal--light-green:not(.hrb-modal--large) .hrb-modal__main{background:#d0eed8}.hrb-modal--light-green.hrb-modal--large .hrb-modal__overlay{background:#d0eed8}.hrb-modal--light-yellow:not(.hrb-modal--large) .hrb-modal__main{background:#fdf4cc}.hrb-modal--light-yellow.hrb-modal--large .hrb-modal__overlay{background:#fdf4cc}.hrb-modal--white:not(.hrb-modal--large) .hrb-modal__main{background:#ffffff}.hrb-modal--white.hrb-modal--large .hrb-modal__overlay{background:#ffffff}.hrb-modal--yellow:not(.hrb-modal--large) .hrb-modal__main{background:#f5cc02}.hrb-modal--yellow.hrb-modal--large .hrb-modal__overlay{background:#f5cc02}.hrb-modal-header-title--header-empty-title{padding:30px;padding-bottom:0}.hrb-modal-header-title--header-empty-title .hrb-modal__header-title{opacity:0}@media (min-width: 900px){.hrb-modal-header-title--header-empty-title{padding-top:40px}}.hrb-modal-header-title--header-small-title{padding:30px;font-family:"Graphik", "Helvetica Neue", "Helvetica", sans-serif;font-style:normal;font-weight:600;font-size:1.125rem;line-height:1.3333333333}@media (min-width: 900px){.hrb-modal-header-title--header-small-title{font-size:1.5rem;line-height:1.1666666667}}@media (min-width: 900px){.hrb-modal-header-title--header-small-title{padding:30px 40px}}.hrb-modal-header-title--header-little-title{border-bottom:1px solid rgba(38, 38, 38, 0.1);padding:30px;font-family:"Graphik", "Helvetica Neue", "Helvetica", sans-serif;font-style:normal;font-weight:500;font-size:0.875rem;line-height:1.2857142857}@media (min-width: 900px){.hrb-modal-header-title--header-little-title{font-size:1.125rem;line-height:1.3333333333}}@media (min-width: 900px){.hrb-modal-header-title--header-little-title{padding:30px 40px}}.hrb-modal__header,.hrb-modal__footer{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;position:relative}.hrb-modal__header.hrb-modal--drag-close,.hrb-modal__footer.hrb-modal--drag-close{-ms-flex-direction:column-reverse;flex-direction:column-reverse}.hrb-modal__header.hrb-modal--drag-close .hrb-modal__close-button,.hrb-modal__footer.hrb-modal--drag-close .hrb-modal__close-button{left:0;position:relative;top:0}.hrb-modal__close-button{position:absolute;right:20px;top:20px}.hrb-modal__close-button.hrb-modal--drag-close{height:38px;-webkit-transition:-webkit-box-shadow 0.2s ease-in;transition:-webkit-box-shadow 0.2s ease-in;transition:box-shadow 0.2s ease-in;transition:box-shadow 0.2s ease-in, -webkit-box-shadow 0.2s ease-in}.hrb-modal__close-button.hrb-modal--drag-close:focus{outline:none;outline:1px dashed rgba(38, 38, 38, 0.6);outline-offset:2px}.hrb-modal__close-button.hrb-modal--drag-close:focus::-moz-focus-inner{border:0}.hrb-modal__close-button.hrb-modal--drag-close span{clip:rect(1px, 1px, 1px, 1px);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}.hrb-modal__close-button.hrb-modal--drag-close::before{background-color:#d6dae0;border-radius:2px;content:" ";display:block;height:2px;width:65px}.hrb-modal--large .hrb-modal__close-button{z-index:1}@media (min-width: 900px){.hrb-modal--large .hrb-modal__close-button{right:40px;top:40px}}@media (max-width: 899px){.hrb-modal--large .hrb-modal__close-button .hrb-circled{height:44px;width:44px}}@-webkit-keyframes sheet-slide-in{0%{opacity:0;-webkit-transform:translateY(100%);transform:translateY(100%)}100%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes sheet-slide-in{0%{opacity:0;-webkit-transform:translateY(100%);transform:translateY(100%)}100%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes sheet-slide-out{0%{-webkit-transform:translateY(0);transform:translateY(0)}100%{-webkit-transform:translateY(100%);transform:translateY(100%)}}@keyframes sheet-slide-out{0%{-webkit-transform:translateY(0);transform:translateY(0)}100%{-webkit-transform:translateY(100%);transform:translateY(100%)}}@-webkit-keyframes drawer-slide-in{0%{opacity:0;-webkit-transform:translateY(-100%);transform:translateY(-100%)}100%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes drawer-slide-in{0%{opacity:0;-webkit-transform:translateY(-100%);transform:translateY(-100%)}100%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes drawer-slide-out{0%{-webkit-transform:translateY(0);transform:translateY(0)}100%{-webkit-transform:translateY(-100%);transform:translateY(-100%)}}@keyframes drawer-slide-out{0%{-webkit-transform:translateY(0);transform:translateY(0)}100%{-webkit-transform:translateY(-100%);transform:translateY(-100%)}}.hrb-modal--sheet .hrb-modal__overlay{-ms-flex-pack:end;justify-content:flex-end}.hrb-modal--sheet .hrb-modal__scroll-container{padding-bottom:0}.hrb-modal--sheet .hrb-modal__main{border-bottom-left-radius:0;border-bottom-right-radius:0}.hrb-modal--sheet .hrb-modal__main .hrb-modal__header{padding-top:0}.hrb-modal--sheet.hrb-modal[aria-hidden=false] .hrb-modal__scroll-container{-webkit-animation:sheet-slide-in 200ms ease;animation:sheet-slide-in 200ms ease}.hrb-modal--sheet.hrb-modal[aria-hidden=true] .hrb-modal__scroll-container{-webkit-animation:sheet-slide-out 200ms ease;animation:sheet-slide-out 200ms ease}.hrb-modal--drawer .hrb-modal__overlay{-ms-flex-pack:start;justify-content:flex-start}.hrb-modal--drawer .hrb-modal__scroll-container{padding-top:0}.hrb-modal--drawer .hrb-modal__main{border-top-left-radius:0;border-top-right-radius:0}.hrb-modal--drawer.hrb-modal[aria-hidden=false] .hrb-modal__scroll-container{-webkit-animation:drawer-slide-in 200ms ease;animation:drawer-slide-in 200ms ease}.hrb-modal--drawer.hrb-modal[aria-hidden=true] .hrb-modal__scroll-container{-webkit-animation:drawer-slide-out 200ms ease;animation:drawer-slide-out 200ms ease}'}}]);