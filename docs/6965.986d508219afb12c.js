"use strict";(self.webpackChunkchatHRB=self.webpackChunkchatHRB||[]).push([[6965],{6965:(y,b,r)=>{r.r(b),r.d(b,{hrb_circle_button_with_label:()=>a});var o=r(6604),s=r(7436),d=r(6120),h=r(1575);const g={baseClassname:"hrb-circle-button-with-label"},a=class{constructor(l){(0,o.r)(this,l),this.as="a",this.disabled=!1,this.icon="phone",this.theme="default",this.getProps=()=>{const{pAriaLabel:e,pAriaLabelledby:n,pAriaRole:t,as:i,disabled:u,href:m,rel:w,target:p,type:k}=this,x=i===h.b.button,c={"aria-label":e,"aria-labelledby":n,"aria-role":t,"aria-disabled":u};return i===h.b.anchor?Object.assign(Object.assign({},c),{href:m,rel:w,target:p}):x?Object.assign(Object.assign({},c),{type:k,disabled:u}):Object.assign({},c)}}componentWillLoad(){this.validateLinkType()}validateLinkType(){if(!this.as)return;const{as:l}=this;(0,s.g)(l)||this.throwConsoleError(l,"link type")}throwConsoleError(l,e){console.error(`<hrb-circle-button-with-label /> : "${l}" is not a valid ${e}`)}render(){const l=this.getProps(),{baseClassname:e}=g,{icon:n,theme:t}=this,i=(0,d.g)([`${e}`,`${e}--${t}`]);return(0,o.h)(o.H,null,(0,o.h)(this.as,Object.assign({class:i},l),(0,o.h)("hrb-circled",{class:`${e}__icon`,theme:t},(0,o.h)("hrb-icon",{name:n})),(0,o.h)("span",{class:`${e}__label`},(0,o.h)("slot",null))))}};a.style='hrb-circle-button-with-label{border-radius:16px;display:inline-block}.hrb-circle-button-with-label__icon{margin-right:12px;-webkit-transition:background-color 100ms ease;transition:background-color 100ms ease}.hrb-circle-button-with-label{-ms-flex-align:center;align-items:center;background-color:transparent;display:-ms-flexbox;display:flex;height:60px;padding:0 40px 0 10px;-webkit-transition:background-color 200ms ease, color 200ms ease;transition:background-color 200ms ease, color 200ms ease}.hrb-circle-button-with-label__label{font-family:"Graphik", "Helvetica Neue", "Helvetica", sans-serif;font-style:normal;font-weight:600;font-size:1.125rem;line-height:1.3333333333}@media (min-width: 900px){.hrb-circle-button-with-label__label{font-size:1.5rem;line-height:1.1666666667}}.hrb-circle-button-with-label--default:hover{background-color:white;color:#262626}.hrb-circle-button-with-label--default:hover .hrb-icon{color:#262626}.hrb-circle-button-with-label--default:focus{outline:none;outline:1px dashed rgba(38, 38, 38, 0.6);outline-offset:2px}.hrb-circle-button-with-label--default:focus::-moz-focus-inner{border:0}.hrb-circle-button-with-label--blue:hover{background-color:#3bc0f8;color:#262626}.hrb-circle-button-with-label--blue:hover .hrb-icon{color:#262626}.hrb-circle-button-with-label--blue:focus{outline:none;outline:1px dashed rgba(38, 38, 38, 0.6);outline-offset:2px}.hrb-circle-button-with-label--blue:focus::-moz-focus-inner{border:0}.hrb-circle-button-with-label--light-grey-1:hover{background-color:#f1f5f7;color:#262626}.hrb-circle-button-with-label--light-grey-1:hover .hrb-icon{color:#262626}.hrb-circle-button-with-label--light-grey-1:focus{outline:none;outline:1px dashed rgba(38, 38, 38, 0.6);outline-offset:2px}.hrb-circle-button-with-label--light-grey-1:focus::-moz-focus-inner{border:0}.hrb-circle-button-with-label--light-grey-2:hover{background-color:#e8eef1;color:#262626}.hrb-circle-button-with-label--light-grey-2:hover .hrb-icon{color:#262626}.hrb-circle-button-with-label--light-grey-2:focus{outline:none;outline:1px dashed rgba(38, 38, 38, 0.6);outline-offset:2px}.hrb-circle-button-with-label--light-grey-2:focus::-moz-focus-inner{border:0}.hrb-circle-button-with-label--medium-light-green:hover{background-color:#89d49f;color:#262626}.hrb-circle-button-with-label--medium-light-green:hover .hrb-icon{color:#262626}.hrb-circle-button-with-label--medium-light-green:focus{outline:none;outline:1px dashed rgba(38, 38, 38, 0.6);outline-offset:2px}.hrb-circle-button-with-label--medium-light-green:focus::-moz-focus-inner{border:0}.hrb-circle-button-with-label--medium-dark-green:hover{background-color:#008427;color:#ffffff}.hrb-circle-button-with-label--medium-dark-green:hover .hrb-icon{color:#ffffff}.hrb-circle-button-with-label--medium-dark-green:focus{outline:none;outline:1px dashed rgba(38, 38, 38, 0.6);outline-offset:2px}.hrb-circle-button-with-label--medium-dark-green:focus::-moz-focus-inner{border:0}.hrb-circle-button-with-label--medium-light-blue:hover{background-color:#9ddffb;color:#262626}.hrb-circle-button-with-label--medium-light-blue:hover .hrb-icon{color:#262626}.hrb-circle-button-with-label--medium-light-blue:focus{outline:none;outline:1px dashed rgba(38, 38, 38, 0.6);outline-offset:2px}.hrb-circle-button-with-label--medium-light-blue:focus::-moz-focus-inner{border:0}.hrb-circle-button-with-label--medium-dark-blue:hover{background-color:#0095ff;color:#262626}.hrb-circle-button-with-label--medium-dark-blue:hover .hrb-icon{color:#262626}.hrb-circle-button-with-label--medium-dark-blue:focus{outline:none;outline:1px dashed rgba(38, 38, 38, 0.6);outline-offset:2px}.hrb-circle-button-with-label--medium-dark-blue:focus::-moz-focus-inner{border:0}.hrb-circle-button-with-label--medium-light-yellow:hover{background-color:#fae580;color:#262626}.hrb-circle-button-with-label--medium-light-yellow:hover .hrb-icon{color:#262626}.hrb-circle-button-with-label--medium-light-yellow:focus{outline:none;outline:1px dashed rgba(38, 38, 38, 0.6);outline-offset:2px}.hrb-circle-button-with-label--medium-light-yellow:focus::-moz-focus-inner{border:0}.hrb-circle-button-with-label--medium-dark-yellow:hover{background-color:#e9ab00;color:#262626}.hrb-circle-button-with-label--medium-dark-yellow:hover .hrb-icon{color:#262626}.hrb-circle-button-with-label--medium-dark-yellow:focus{outline:none;outline:1px dashed rgba(38, 38, 38, 0.6);outline-offset:2px}.hrb-circle-button-with-label--medium-dark-yellow:focus::-moz-focus-inner{border:0}.hrb-circle-button-with-label--ui-green:hover{background-color:#11A63D;color:#ffffff}.hrb-circle-button-with-label--ui-green:hover .hrb-icon{color:#ffffff}.hrb-circle-button-with-label--ui-green:focus{outline:none;outline:1px dashed rgba(38, 38, 38, 0.6);outline-offset:2px}.hrb-circle-button-with-label--ui-green:focus::-moz-focus-inner{border:0}.hrb-circle-button-with-label--yellow:hover{background-color:#f5cc02;color:#262626}.hrb-circle-button-with-label--yellow:hover .hrb-icon{color:#262626}.hrb-circle-button-with-label--yellow:focus{outline:none;outline:1px dashed rgba(38, 38, 38, 0.6);outline-offset:2px}.hrb-circle-button-with-label--yellow:focus::-moz-focus-inner{border:0}.hrb-circle-button-with-label--outline:hover{background-color:transparent;color:#262626}.hrb-circle-button-with-label--outline:hover .hrb-icon{color:#262626}.hrb-circle-button-with-label--outline:focus{outline:none;outline:1px dashed rgba(38, 38, 38, 0.6);outline-offset:2px}.hrb-circle-button-with-label--outline:focus::-moz-focus-inner{border:0}'}}]);