"use strict";(self.webpackChunkchatHRB=self.webpackChunkchatHRB||[]).push([[1925],{1925:(a,i,o)=>{o.r(i),o.d(i,{hrb_overflow_menu:()=>s});var n=o(5861),e=o(6604),r=o(6120);const s=class{constructor(t){(0,e.r)(this,t),this.hrbBlur=(0,e.c)(this,"hrbBlur",7),this.hrbChange=(0,e.c)(this,"hrbChange",7),this.hrbFocus=(0,e.c)(this,"hrbFocus",7),this.hrbInput=(0,e.c)(this,"hrbInput",7),this.overflowId=(0,r.a)(),this.as="div",this.onBlur=()=>this.hrbBlur.emit(this),this.onFocus=()=>this.hrbFocus.emit(this),this.menuOpen=!1,this.handleButtonClicked=()=>{this.menuOpen=!this.menuOpen,this.hrbChange.emit(this),this.hrbInput.emit(this)},this.buttonID=""!==this.el.id?`${this.el.id}-overflow-button`:`${this.overflowId}-overflow-button`,this.contentID=""!==this.el.id?`${this.el.id}-overflow-content`:`${this.overflowId}-overflow-content`,this.renderOverflowButton=h=>(0,e.h)("hrb-circle-button",{"aria-controls":this.contentID,"aria-expanded":this.menuOpen.toString(),id:this.buttonID,class:"overflow-button",onClick:h,"p-aria-label":this.menuOpen?"Close Overflow Menu":"Open Overflow Menu"},(0,e.h)("hrb-icon",{name:this.menuOpen?"close":"overflow"}))}getElement(){var t=this;return(0,n.Z)(function*(){return t.buttonRef})()}setFocus(){var t=this;return(0,n.Z)(function*(){t.buttonRef.focus()})()}toggle(){var t=this;return(0,n.Z)(function*(){t.handleButtonClicked()})()}render(){return(0,e.h)(e.H,{class:"overflow-menu-component"},this.renderOverflowButton(this.handleButtonClicked),(0,e.h)("div",{"aria-hidden":(!this.menuOpen).toString(),"aria-labelledby":this.buttonID,class:"overflow-wrap "+(this.menuOpen?"open":"closed"),id:this.contentID,role:"region"},(0,e.h)(this.as,{class:"overflow-menu "+(this.menuOpen?"open":"closed")},(0,e.h)("slot",null))),(0,e.h)("svg",{class:"circle-expand "+(this.menuOpen?"open":"closed"),viewBox:"0 0 80 80",xmlns:"http://www.w3.org/2000/svg"},(0,e.h)("circle",{cx:"40",cy:"40",r:"40"})))}get el(){return(0,e.g)(this)}};s.style="@-webkit-keyframes menu-open{0%{height:100%}100%{height:100%}}@keyframes menu-open{0%{height:100%}100%{height:100%}}.overflow-menu-component{border-radius:16px;bottom:0;left:0;overflow:hidden;position:absolute;right:0;top:0}.overflow-button{bottom:24px;left:auto;position:absolute;right:24px;top:auto;z-index:30}.circle-expand{bottom:34px;fill:#11A63D;height:24px;left:auto;position:absolute;right:34px;top:auto;-webkit-transition:all 0.4s cubic-bezier(0.33, 0.66, 0.66, 1);transition:all 0.4s cubic-bezier(0.33, 0.66, 0.66, 1);width:24px;z-index:10}.circle-expand.open{-webkit-transform:scale(150);transform:scale(150)}.circle-expand.close{-webkit-transform:scale(1);transform:scale(1)}.overflow-wrap{display:-ms-flexbox;display:flex;height:100%;position:relative;width:100%}.overflow-wrap.open{z-index:20}.overflow-menu{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:100%}.hrb-layout__layout-card-list--base .overflow-menu{-ms-flex-align:center;align-items:center;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap}"}}]);