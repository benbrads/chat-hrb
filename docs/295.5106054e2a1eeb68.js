"use strict";(self.webpackChunkchatHRB=self.webpackChunkchatHRB||[]).push([[295],{295:(z,d,i)=>{i.r(d),i.d(d,{hrb_circle_button:()=>r});var t=i(6604),p=i(6120),g=i(7436),u=i(1575);const v={baseClassname:"hrb-circle-button"},r=class{constructor(e){(0,t.r)(this,e),this.as="button",this.disabled=!1,this.size="small",this.theme="default",this.transparent=!1,this.getProps=()=>{const{pAriaControls:c,pAriaExpaned:n,pAriaLabel:l,pAriaLabelledby:o,pAriaRole:a,pTabIndex:b,as:s,disabled:f,href:m,rel:C,target:E,type:y}=this,x=s===u.b.button,h={"aria-label":l,"aria-labelledby":o,"aria-role":a,"aria-disabled":f,"aria-controls":c,"aria-expanded":n,tabindex:b};return s===u.b.anchor?Object.assign(Object.assign({},h),{href:m,rel:C,target:E}):x?Object.assign(Object.assign({},h),{type:y,disabled:f}):Object.assign({},h)}}componentWillLoad(){this.validateLinkType()}validateLinkType(){(0,g.g)(this.as)||this.throwConsoleError(this.as,"type")}throwConsoleError(e,c){console.error(`<hrb-circle-button /> : "${e}" is not a valid circle-button ${c}`)}render(){const e=this.getProps(),{autoIdentifier:c,disabled:n,size:l,theme:o}=this,{baseClassname:a}=v,b=(0,p.g)([`${a}`,n&&`${a}--disabled`]);let s=c;return s||(r.counter+=1,s=`HrbCircleButton${r.counter}`),(0,t.h)(t.H,null,(0,t.h)(this.as,Object.assign({class:b},e,{"data-automation-action":s}),(0,t.h)("hrb-circled",{size:l,theme:o},(0,t.h)("slot",null),(0,t.h)("svg",{class:"circle-bg",viewBox:"0 0 80 80",xmlns:"http://www.w3.org/2000/svg"},(0,t.h)("circle",{cx:"40",cy:"40",r:"40"})))))}};r.counter=0,r.style="hrb-circle-button{-webkit-tap-highlight-color:transparent}hrb-circle-button[disabled]{pointer-events:none}.hrb-circle-button .hrb-circled{-webkit-transition:all 0.2s cubic-bezier(0.33, 0.66, 0.66, 1);transition:all 0.2s cubic-bezier(0.33, 0.66, 0.66, 1)}.hrb-circle-button .hrb-circled .hrb-icon{fill:#262626;position:relative;z-index:1}.hrb-circle-button .hrb-circled .circle-bg{opacity:0;-webkit-transition:all 0.2s cubic-bezier(0.33, 0.66, 0.66, 1);transition:all 0.2s cubic-bezier(0.33, 0.66, 0.66, 1)}.hrb-circle-button .hrb-circled:hover{color:#ffffff}.hrb-circle-button .hrb-circled:hover .hrb-icon *:last-child{color:#ffffff}.hrb-circle-button .hrb-circled:hover .circle-bg{fill:#262626;opacity:1;-webkit-transform:scale(1);transform:scale(1)}.hrb-circle-button:focus{outline:none}.hrb-circle-button:focus .hrb-circled{outline:1px dashed rgba(38, 38, 38, 0.6);outline-offset:2px}.hrb-circle-button--disabled{cursor:default;opacity:0.5}.circle-bg{position:absolute;-webkit-transform:scale(0);transform:scale(0);-webkit-transition:all 0.2s cubic-bezier(0.33, 0.66, 0.66, 1);transition:all 0.2s cubic-bezier(0.33, 0.66, 0.66, 1);z-index:0}"}}]);