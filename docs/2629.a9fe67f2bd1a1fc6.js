"use strict";(self.webpackChunkchatHRB=self.webpackChunkchatHRB||[]).push([[2629],{2629:(y,d,l)=>{l.r(d),l.d(d,{hrb_nav_bar:()=>b});var r=l(6604),h=l(6120);const s={baseClassname:"hrb-nav-bar",disableVerticalScroll:"hrb-util--disable-vertical-scroll",mobileMenuAriaLabel:"Mobile menu",mobileMenu:"hrb-mobile-menu"},b=class{constructor(m){(0,r.r)(this,m),this.isOpen=!1,this.currentlySelectedDropdown="",this.currentMobileMenuIcon="menu",this.addPrimaryNavItemsFromSlots=()=>{const a=this.el.querySelectorAll('[slot="primary-nav"] hrb-nav-primary-item'),i=this.el.querySelector(".hrb-nav-bar__primary-items");a.forEach(n=>{const e=document.createElement("li");e.className="hrb-nav-bar__primary-item",e.appendChild(n);const t=e.querySelector("[data-hrb-nav-bar-primary-item]");t.addEventListener("click",this.toggleDropdown),t.addEventListener("mouseenter",this.removeAllActiveClasses),t.addEventListener("mouseleave",this.addActiveClass),i.appendChild(e)})},this.addActiveClass=a=>{const{parentNode:i}=a.currentTarget,n=i.querySelector("[data-hrb-nav-bar-panel]"),e=i.querySelector("[data-hrb-nav-bar-primary-item]");if(e&&n){const t=n.getAttribute("id");t&&t===this.currentlySelectedDropdown&&e.classList.add(`${s.baseClassname}__primary-item-link--active`)}},this.removeAllActiveClasses=()=>{const a=this.el.querySelectorAll("[data-hrb-nav-bar-primary-item]");a&&""===this.currentlySelectedDropdown&&a.forEach(i=>{i.classList.remove(`${s.baseClassname}__primary-item-link--active`)})},this.addSecondaryNavItemsFromSlots=()=>{const a=this.el.querySelectorAll('[slot="secondary-nav"] [data-hrb-nav-bar-secondary-item]'),i=this.el.querySelector("[data-hrb-nav-bar-secondary]"),n=this.el.querySelector("[data-hrb-nav-bar-mobile-menu]");a.forEach(e=>{const t=document.createElement("li"),o=e.hasAttribute("hide-on-small");t.className=`${s.baseClassname}__secondary-item`,o&&(t.className=`${t.className} ${t.className}--hidden-small`),t.appendChild(e),i.insertBefore(t,n)})},this.openDropdown=a=>{const{parentNode:i}=a.currentTarget,n=i.querySelector("[data-hrb-nav-bar-panel]"),e=i.querySelector("[data-hrb-nav-bar-primary-item]"),t=n.getAttribute("id"),o=this.el.querySelector("[data-hrb-nav-bar-overlay]");n&&t&&e&&(n.classList.add(`${s.baseClassname}__panel--is-open`),o&&o.classList.add(`${s.baseClassname}__overlay--is-open`),this.currentlySelectedDropdown=t,this.isOpen=!0,this.isOpen&&this.currentlySelectedDropdown===s.mobileMenu&&(i.querySelector("[data-hrb-nav-bar-mobile-menu-circle]").setAttribute("theme","light-grey-1"),this.currentMobileMenuIcon="close",document.querySelector("body").classList.add(s.disableVerticalScroll)))},this.closeDropdown=()=>{if(!this.isOpen)return;const a=this.el.querySelector("[data-hrb-nav-bar-overlay]");this.el.querySelectorAll("[data-hrb-nav-bar-panel]").forEach(n=>{n.classList.remove(`${s.baseClassname}__panel--is-open`)}),a.classList.remove(`${s.baseClassname}__overlay--is-open`),this.currentlySelectedDropdown="",this.isOpen=!1,this.removeAllActiveClasses(),this.currentlySelectedDropdown!==s.mobileMenu&&(this.el.querySelector("[data-hrb-nav-bar-mobile-menu-circle]").setAttribute("theme",""),this.currentMobileMenuIcon="menu",document.querySelector("body").classList.remove(s.disableVerticalScroll))},this.toggleDropdown=a=>{const{parentNode:i}=a.currentTarget,n=i.querySelector("[data-hrb-nav-bar-primary-item]"),e=i.querySelector("[data-hrb-nav-bar-panel]"),t=this.el.querySelectorAll("[data-hrb-nav-bar-primary-item]");if(t&&t.forEach(o=>{this.setAriaExpanded(o,!1)}),n&&e){const o=e.getAttribute("id"),c=this.isOpen&&this.currentlySelectedDropdown===o;a.preventDefault(),this.closeDropdown(),c||(this.openDropdown(a),this.setAriaExpanded(n))}else this.closeDropdown()},this.setAriaExpanded=(a,i=!0)=>{a&&a.setAttribute("aria-expanded",i)}}componentWillLoad(){this.hasMobilePanelSlot=!!this.el.querySelector('[slot="mobile-panel"]')}componentDidLoad(){this.addPrimaryNavItemsFromSlots(),this.addSecondaryNavItemsFromSlots()}render(){const{currentMobileMenuIcon:m,currentlySelectedDropdown:a,hasMobilePanelSlot:i,isOpen:n}=this,{baseClassname:e,mobileMenu:t,mobileMenuAriaLabel:o}=s,c=(0,h.g)([`${e}__container`,n&&`${e}__container--is-open`]);return(0,r.h)(r.H,null,(0,r.h)("nav",{class:c},(0,r.h)("div",{class:`${e}__primary`},(0,r.h)("slot",{name:"logo"}),(0,r.h)("ul",{class:`${e}__primary-items`,"data-hrb-nav-bar-primary":!0,role:"menubar"})),(0,r.h)("ul",{class:`${e}__secondary`,"data-hrb-nav-bar-secondary":!0},i&&(0,r.h)("li",{class:`${e}__secondary-item ${e}__secondary-item--mobile-menu`,"data-hrb-nav-bar-mobile-menu":!0},(0,r.h)("button",{"aria-haspopup":"true","aria-label":o,"aria-controls":"hrb-mobile-menu","aria-expanded":n&&a===t,class:`${e}__secondary-item-link`,onClick:this.toggleDropdown,"data-hrb-nav-bar-primary-item":!0},(0,r.h)("hrb-circled",{"data-hrb-nav-bar-mobile-menu-circle":!0},(0,r.h)("hrb-icon",{class:`${e}__secondary-item-icon`,name:m}))),(0,r.h)("div",{id:"hrb-mobile-menu",class:`${e}__panel ${e}__panel--mobile`,"data-hrb-nav-bar-panel":!0},(0,r.h)("div",{"data-hrb-nav-bar-panel-content":!0,class:`${e}__panel-content`},(0,r.h)("slot",{name:"mobile-panel"}))))),(0,r.h)("div",{class:`${e}__hidden-slots`},(0,r.h)("slot",{name:"primary-nav"}),(0,r.h)("slot",{name:"secondary-nav"}))),(0,r.h)("div",{"aria-hidden":!0,"data-hrb-nav-bar-overlay":!0,class:`${e}__overlay`,onClick:this.closeDropdown}))}get el(){return(0,r.g)(this)}};b.style=".hrb-nav-bar__container{-ms-flex-align:center;align-items:center;background-color:#ffffff;color:#262626;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;min-height:80px;padding:18px 20px;width:100%;z-index:999}@media (min-width: 900px){.hrb-nav-bar__container{min-height:120px;padding:38px 40px}}.hrb-nav-bar__container--is-open{position:fixed}@media (min-width: 900px){.hrb-nav-bar__container--is-open{position:relative}}.hrb-nav-bar__primary{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex}.hrb-nav-bar__secondary{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex}.hrb-nav-bar__secondary-item{margin-left:8px}@media (min-width: 900px){.hrb-nav-bar__secondary-item{margin-left:16px}}.hrb-nav-bar__secondary-item--hidden-small{display:none}@media (min-width: 900px){.hrb-nav-bar__secondary-item--hidden-small{display:block}}@media (min-width: 1200px){.hrb-nav-bar__secondary-item--mobile-menu{display:none}}.hrb-nav-bar__panel{background-color:#ffffff;height:calc(100vh - 80px);left:0;overflow:hidden;padding:80px 40px 40px;pointer-events:none;position:fixed;top:80px;-webkit-transform:scaleY(0);transform:scaleY(0);-webkit-transform-origin:center top;transform-origin:center top;-webkit-transition:visibility 250ms ease 200ms, -webkit-transform 250ms ease-out 200ms;transition:visibility 250ms ease 200ms, -webkit-transform 250ms ease-out 200ms;transition:transform 250ms ease-out 200ms, visibility 250ms ease 200ms;transition:transform 250ms ease-out 200ms, visibility 250ms ease 200ms, -webkit-transform 250ms ease-out 200ms;visibility:hidden;width:100%;z-index:999}@media (min-width: 900px){.hrb-nav-bar__panel{border-radius:0 0 15px 15px;-webkit-box-shadow:0 5px 20px -20px #262626;box-shadow:0 5px 20px -20px #262626;height:auto;padding:60px 40px 100px;position:absolute;top:120px}}@media (min-width: 1200px){.hrb-nav-bar__panel{padding:40px 40px 120px;-webkit-transition:none;transition:none}}.hrb-nav-bar__panel-content{height:100%;opacity:0;-webkit-transition:opacity 200ms;transition:opacity 200ms}@media (min-width: 900px){.hrb-nav-bar__panel-content{height:auto}}@media (min-width: 1200px){.hrb-nav-bar__panel-content{-webkit-transition:none;transition:none}}.hrb-nav-bar__panel--is-open{pointer-events:auto;-webkit-transform:scaleY(1);transform:scaleY(1);-webkit-transition:-webkit-transform 250ms ease-in;transition:-webkit-transform 250ms ease-in;transition:transform 250ms ease-in;transition:transform 250ms ease-in, -webkit-transform 250ms ease-in;visibility:visible}.hrb-nav-bar__panel--is-open .hrb-nav-bar__panel-content{opacity:1;-webkit-transition:opacity 200ms ease 250ms;transition:opacity 200ms ease 250ms}.hrb-nav-bar__overlay{background-color:rgba(241, 245, 247, 0.75);opacity:0;position:fixed;-webkit-transition:opacity 100ms ease calc(250ms + 200ms), visibility 100ms ease calc(250ms + 200ms);transition:opacity 100ms ease calc(250ms + 200ms), visibility 100ms ease calc(250ms + 200ms);visibility:hidden;width:100%}.hrb-nav-bar__overlay.hrb-nav-bar__overlay--is-open{opacity:1;-webkit-transition:opacity 100ms ease;transition:opacity 100ms ease;visibility:visible}@media (min-width: 900px){.hrb-nav-bar__overlay{height:100vh;top:0}}@media (min-width: 1200px){.hrb-nav-bar__overlay{-webkit-transition:opacity 100ms ease;transition:opacity 100ms ease}}.hrb-nav-bar__hidden-slots{display:none}"}}]);