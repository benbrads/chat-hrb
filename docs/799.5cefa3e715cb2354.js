"use strict";(self.webpackChunkchatHRB=self.webpackChunkchatHRB||[]).push([[799],{799:(c,i,t)=>{t.r(i),t.d(i,{hrb_option_card:()=>a});var n=t(5861),e=t(6604),d=t(6120);const a=class{constructor(s){(0,e.r)(this,s),this.isSelected=(0,e.c)(this,"isSelected",7),this.isExpanded=(0,e.c)(this,"isExpanded",7),this.custom=!1,this.disabled=!1,this.expands=!1,this.icon="add",this.selected=!1,this.selectedIcon="check",this.badgeText=null,this.badgeIcon=null,this.badgeTheme="light-grey-1",this.buttonId=(0,d.a)(),this.expandedId=(0,d.a)(),this.expanded=!1,this.select=()=>{this.selected=!this.selected,!0===this.selected&&this.isSelected.emit(this),!0===this.expands&&(this.expanded=!this.expanded,!0===this.expanded&&this.isExpanded.emit(this))}}selectOption(){var s=this;return(0,n.Z)(function*(){s.select()})()}render(){const s=(0,d.g)(["hrb-option-card",this.selected&&"hrb-option-card--selected",`hrb-option-card--${this.theme}`,this.disabled&&"hrb-option-card--disabled"]),h=(0,d.g)(["hrb-option-card--expanded-content",this.expanded?"hrb-option-card--expanded":"hrb-option-card--collapsed"]);return(0,e.h)(e.H,{selected:this.selected,expands:this.expands,tabindex:"0"},(0,e.h)("hrb-card",{theme:this.theme,class:s},(0,e.h)("button",{id:this.buttonId,"aria-expanded":!0===this.expands?this.expanded.toString():"","aria-controls":!0===this.expands?this.expandedId:"",disabled:this.disabled,tabindex:0,onClick:this.select},(0,e.h)("hrb-card-content",{class:"hrb-option-card--content"},!this.custom&&(0,e.h)("hrb-badge-label",{badgeTitle:this.badgeTitle,badgeSubtitle:this.badgeSubtitle,size:"large",image:this.badgeImage,imageAlt:this.badgeImageAlt,text:this.badgeText,icon:this.badgeIcon,theme:this.badgeTheme}),(0,e.h)("slot",{name:"custom"}),(0,e.h)("hrb-circled",{theme:this.selected?"ui-green":"outline",size:"x-small"},!this.selected&&(0,e.h)("hrb-icon",{name:this.icon}),this.selected&&(0,e.h)("hrb-icon",{class:"selected-icon",name:this.selectedIcon})))),this.expands&&(0,e.h)("div",{id:this.expandedId,class:h,"aria-hidden":(!this.expanded).toString(),"aria-labelledby":this.buttonId,role:"region"},(0,e.h)("slot",null))))}};a.style="hrb-option-card:focus,hrb-card:focus,button:focus{outline:none}hrb-option-card[custom] hrb-circled{position:absolute;right:28px;top:28px}.hrb-option-card .hrb-card{border:1px solid #e8eef1}.hrb-option-card .hrb-option-card--content{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.hrb-option-card .hrb-option-card--content .hrb-circled{-webkit-box-shadow:#e8eef1 inset 0 0 0 2px;box-shadow:#e8eef1 inset 0 0 0 2px}.hrb-option-card .hrb-option-card--expanded-content{display:none}.hrb-option-card.hrb-option-card--disabled{pointer-events:none}.hrb-option-card.hrb-option-card--disabled .hrb-card{opacity:0.5}.hrb-option-card.hrb-option-card--selected .hrb-card{border:1px solid #11A63D}.hrb-option-card.hrb-option-card--selected .hrb-circled{background-color:#11A63D;-webkit-box-shadow:#11A63D inset 0 0 0 2px;box-shadow:#11A63D inset 0 0 0 2px}.hrb-option-card.hrb-option-card--selected .hrb-option-card--expanded-content{display:block;padding:0 28px 28px}"}}]);