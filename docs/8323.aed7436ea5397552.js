"use strict";(self.webpackChunkchatHRB=self.webpackChunkchatHRB||[]).push([[8323],{8323:(c,n,t)=>{t.r(n),t.d(n,{hrb_inline_alert:()=>s});var h=t(5861),e=t(6604),a=t(6120);const s=class{constructor(l){(0,e.r)(this,l),this.alertClosed=(0,e.c)(this,"alertClosed",7),this.alertOpen=(0,e.c)(this,"alertOpen",7),this.buttonId=(0,a.a)(),this.containerId=(0,a.a)(),this.isClosed=!1,this.isClosing=!1,this.state={expandedContentHeight:0},this.theme="light-green",this.headerTitle="Newly opened alert",this.variant="header-empty-title",this.getExpandedContentHeight=()=>this.expandedContent.clientHeight,this.updateHeightStates=()=>{const{getExpandedContentHeight:r,state:o}=this,b=r();this.state=Object.assign(Object.assign({},o),{expandedContentHeight:b})},this.animateClose=()=>{this.isClosing=!0,this.state.expandedContentHeight=0},this.closeAlertPrivate=()=>{this.animateClose(),requestAnimationFrame(()=>{setTimeout(()=>{this.isClosed=!0,this.isClosing=!1},2e3)}),this.alertClosed.emit(this)}}componentDidLoad(){requestAnimationFrame(()=>{this.alertOpen.emit(this),this.updateHeightStates()})}closeAlert(){var l=this;return(0,h.Z)(function*(){l.closeAlertPrivate()})()}render(){return(0,e.h)(e.H,{"is-closing":this.isClosing,"is-closed":this.isClosed,style:{height:`${this.state.expandedContentHeight}px`},id:`${this.containerId}`,role:"alert"},(0,e.h)("div",{class:`hrb-alert--wrap hrb-inline-alert--${this.theme}`,ref:r=>{this.expandedContent=r}},(0,e.h)("div",{class:`hrb-inline-alert__header hrb-inline-alert--${this.variant}`},(0,e.h)("h2",{class:"hrb-inline-alert__header-title"},this.headerTitle),(0,e.h)("div",{class:"hrb-inline-alert__header--close"},(0,e.h)("hrb-circle-button",{"data-automation-action":this.autoIdentifier?this.autoIdentifier:this.buttonId,onClick:this.closeAlertPrivate,pAriaLabel:`Close ${this.containerId} alert`,id:this.buttonId},(0,e.h)("hrb-icon",{name:"close"})))),(0,e.h)("div",{class:"hrb-alert-body"},(0,e.h)("slot",null))))}};s.style='hrb-inline-alert{display:block;-webkit-transition:all 0.2s cubic-bezier(0.33, 0.66, 0.66, 1);transition:all 0.2s cubic-bezier(0.33, 0.66, 0.66, 1)}hrb-inline-alert[is-closed]{display:none}hrb-inline-alert[is-closing] .hrb-alert--wrap{opacity:0}hrb-inline-alert .hrb-alert--wrap{border-radius:16px;-webkit-box-shadow:0 10px 20px 0 rgba(0, 0, 0, 0.08);box-shadow:0 10px 20px 0 rgba(0, 0, 0, 0.08);display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-webkit-transition:all 0.2s cubic-bezier(0.33, 0.66, 0.66, 1);transition:all 0.2s cubic-bezier(0.33, 0.66, 0.66, 1);width:100%}hrb-inline-alert .hrb-alert--wrap.hrb-inline-alert--light-green{background-color:#d0eed8;border:1px solid #d0eed8}hrb-inline-alert .hrb-alert--wrap.hrb-inline-alert--light-yellow{background-color:#fdf4cc;border:1px solid #fdf4cc}hrb-inline-alert .hrb-alert--wrap.hrb-inline-alert--light-red{background-color:#fef8fb;border:1px solid #dc1f00}hrb-inline-alert .hrb-alert--wrap.hrb-inline-alert--light-blue{background-color:#d7f2fd;border:1px solid #d7f2fd}hrb-inline-alert .hrb-inline-alert__header{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}hrb-inline-alert .hrb-inline-alert__header .hrb-inline-alert__header-title{-ms-flex:9;flex:9;-ms-flex-pack:start;justify-content:flex-start}hrb-inline-alert .hrb-inline-alert__header .hrb-inline-alert__header--close{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1}hrb-inline-alert .hrb-inline-alert__header .hrb-inline-alert__header--close hrb-circle-button{margin-left:auto}hrb-inline-alert .hrb-inline-alert__header .hrb-inline-alert__header--close hrb-circle-button .hrb-circled[theme=default]{background:transparent}hrb-inline-alert .hrb-inline-alert__header.hrb-inline-alert--header-empty-title{padding:calc(20px / 2);padding-bottom:0}hrb-inline-alert .hrb-inline-alert__header.hrb-inline-alert--header-empty-title .hrb-inline-alert__header-title{opacity:0}@media (min-width: 900px){hrb-inline-alert .hrb-inline-alert__header.hrb-inline-alert--header-empty-title{padding:20px;padding-top:20px}}hrb-inline-alert .hrb-inline-alert__header.hrb-inline-alert--header-small-title{padding:20px;font-family:"Graphik", "Helvetica Neue", "Helvetica", sans-serif;font-style:normal;font-weight:600;font-size:1.125rem;line-height:1.3333333333}@media (min-width: 900px){hrb-inline-alert .hrb-inline-alert__header.hrb-inline-alert--header-small-title{font-size:1.5rem;line-height:1.1666666667}}@media (min-width: 900px){hrb-inline-alert .hrb-inline-alert__header.hrb-inline-alert--header-small-title{padding:20px 20px}}hrb-inline-alert .hrb-inline-alert__header.hrb-inline-alert--header-little-title{border-bottom:1px solid rgba(38, 38, 38, 0.1);padding:20px;font-family:"Graphik", "Helvetica Neue", "Helvetica", sans-serif;font-style:normal;font-weight:500;font-size:0.875rem;line-height:1.2857142857}@media (min-width: 900px){hrb-inline-alert .hrb-inline-alert__header.hrb-inline-alert--header-little-title{font-size:1.125rem;line-height:1.3333333333}}@media (min-width: 900px){hrb-inline-alert .hrb-inline-alert__header.hrb-inline-alert--header-little-title{padding:20px 20px}}hrb-inline-alert .hrb-alert-body{display:-ms-flexbox;display:flex;margin-top:4px;padding:20px}'}}]);