"use strict";(self.webpackChunkchatHRB=self.webpackChunkchatHRB||[]).push([[4152],{4152:(p,r,a)=>{a.r(r),a.d(r,{hrb_toggle_tip:()=>s});var t=a(6604),i=a(6120);const s=class{constructor(l){(0,t.r)(this,l),this.position="top",this.toggleTip=()=>{const e=this.el.getElementsByClassName("hrb-toggle-tip--button")[0],g=e.getAttribute("data-toggletip-content"),o=e.getElementsByTagName("div");e.addEventListener("click",()=>{o[0].innerHTML="",window.setTimeout(()=>{o[0].innerHTML='<span class="hrb-toggle-tip-bubble"><span class="hrb-toggle-tip-bubble--animation">'+g+"</span></span>"},100)}),document.addEventListener("click",n=>{e[0]!==n.target&&(o[0].innerHTML="")}),e[0].addEventListener("keydown",n=>{27===(n[0].keyCode||n[0].which)&&(o[0].innerHTML="")})}}render(){const l=(0,i.g)(["hrb-toggle-tip-container",`hrb-toggle-tip-bubble--${this.position}`]);return(0,t.h)(t.H,null,(0,t.h)("hrb-text",null,(0,t.h)("hrb-circle-button",{onClick:this.toggleTip,class:"hrb-toggle-tip--button","data-toggletip-content":"Four score and seven years ago... ","p-aria-label":"This could be a prop",theme:"outline"},(0,t.h)("hrb-icon",{name:"help"}),(0,t.h)("div",{class:l,role:"status"}))))}get el(){return(0,t.g)(this)}};s.style="@-webkit-keyframes toggletip{0%{opacity:0;-webkit-transform:translateY(-12px);transform:translateY(-12px)}50%{-webkit-transform:translateY(4px);transform:translateY(4px)}100%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes toggletip{0%{opacity:0;-webkit-transform:translateY(-12px);transform:translateY(-12px)}50%{-webkit-transform:translateY(4px);transform:translateY(4px)}100%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}.hrb-toggle-tip--button{position:relative}.hrb-toggle-tip--button .hrb-toggle-tip-container{-ms-flex-align:center;align-items:center;bottom:0;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;left:0;position:absolute;right:0;top:0}.hrb-toggle-tip-bubble{display:block;left:0;position:absolute;top:0}.hrb-toggle-tip-bubble--animation{-webkit-animation:toggletip 0.25s;animation:toggletip 0.25s;background:#262626;border-radius:16px;color:#ffffff;display:block;min-width:100px;padding:16px 32px}.hrb-toggle-tip-bubble--left .hrb-toggle-tip-bubble{-webkit-transform:translate(-110%, calc(-50% + 24px));transform:translate(-110%, calc(-50% + 24px))}.hrb-toggle-tip-bubble--right .hrb-toggle-tip-bubble{left:auto;right:0;-webkit-transform:translate(110%, calc(-50% + 24px));transform:translate(110%, calc(-50% + 24px))}.hrb-toggle-tip-bubble--bottom .hrb-toggle-tip-bubble{bottom:0;top:auto;-webkit-transform:translate(calc(-50% + 24px), 110%);transform:translate(calc(-50% + 24px), 110%)}.hrb-toggle-tip-bubble--top .hrb-toggle-tip-bubble{-webkit-transform:translate(calc(-50% + 24px), -110%);transform:translate(calc(-50% + 24px), -110%)}"}}]);