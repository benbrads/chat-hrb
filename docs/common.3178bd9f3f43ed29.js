"use strict";(self.webpackChunkchatHRB=self.webpackChunkchatHRB||[]).push([[8592],{9892:(d,a,n)=>{n.d(a,{a:()=>c,c:()=>u,h:()=>e,i:()=>t});const t=!!window.MSInputMethodContext&&!!document.DOCUMENT_NODE,e="IntersectionObserver"in window,c=!!window.HTMLImageElement&&"loading"in window.HTMLImageElement.prototype,u=()=>!!(typeof window.orientation<"u"||navigator.userAgent.match(/IEMobile/)||navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i))},1575:(d,a,n)=>{n.d(a,{b:()=>t});const t={anchor:"a",button:"button",span:"span"}},5472:(d,a,n)=>{n.d(a,{c:()=>t});const t={colS:17,colM:17,colL:35}},4733:(d,a,n)=>{n.d(a,{C:()=>t});const t={baseClassname:"hrb-select",baseClassnameCustom:"hrb-select-custom",baseClassnameNative:"hrb-select-native",baseClassnameOption:"hrb-select-option",baseId:"hrb-select",childTypes:{option:"OPTION",optGroup:"OPTGROUP"},ieBlurDelay:200,inputIcons:{chevronDown:"chevron-down",chevronUp:"chevron-up"}}},7447:(d,a,n)=>{n.d(a,{H:()=>t});const t={baseClassname:"hrb-input",iconAnimationTimeoutDuration:100,passwordToggleIcon:{eye:"eye",eyeFilled:"eye-filled"},passwordToggleTypes:{password:"password",text:"text"},passwordToggleLabels:{hidePassword:"Hide password",showPassword:"Show password"}}},4438:(d,a,n)=>{n.d(a,{a:()=>e,b:()=>c,k:()=>t,u:()=>u});const t={ArrowDown:"arrowDown",ArrowUp:"arrowUp",Down:"arrowDown",Home:"home",End:"end",Esc:"escape",Escape:"escape",PageDown:"pageDown",PageUp:"pageUp",Enter:"returnK"," ":"space",Spacebar:"space",Up:"arrowUp"},e={40:"arrowDown",38:"arrowUp",36:"home",35:"end",27:"escape",34:"pageDown",33:"pageUp",13:"returnK",32:"space"},c=["arrowDown","arrowUp","pageDown","pageUp","space"],u=["arrowDown","arrowUp"]},6120:(d,a,n)=>{n.d(a,{a:()=>c,f:()=>g,g:()=>m,r:()=>h,s:()=>u});const c=()=>`${(()=>{const i="abcdefghijklmnopqrstuvwxyz".split("");return i[Math.floor(Math.random()*i.length)]})()}${10,Math.random().toString(36).substring(2,10)}`,u=(o,i)=>o.match<i.match?-1:o.match>i.match?1:0,m=o=>o.filter(i=>!!i).join(" ").trim(),h=o=>{const[i,r]=o.split("/");return parseInt(r,10)/parseInt(i,10)*100},g=[]},8930:(d,a,n)=>{n.d(a,{n:()=>t});const t=/\d+\/\d+/},9015:(d,a,n)=>{n.d(a,{s:()=>t});const t={createSwipeEvents:((e,c)=>{const u=e;"function"!=typeof e.CustomEvent&&(u.CustomEvent=function(s,b){let l=b;l=b||{bubbles:!1,cancelable:!1,detail:void 0};const w=c.createEvent("CustomEvent");return w.initCustomEvent(s,l.bubbles,l.cancelable,l.detail),w},u.CustomEvent.prototype=e.Event.prototype);let m=null,h=null,g=null,o=null,i=null,r=null;const y=(s,b,l)=>{let w;for(;w&&w!==c.documentElement;){const p=s.getAttribute(b);if(p)return p;w=s.parentNode}return l};c.addEventListener("touchstart",s=>{"true"!==s.target.getAttribute("data-swipe-ignore")&&(r=s.target,i=Date.now(),m=s.touches[0].clientX,h=s.touches[0].clientY,g=0,o=0)},!1),c.addEventListener("touchmove",s=>{m&&h&&(g=m-s.touches[0].clientX,o=h-s.touches[0].clientY)},!1),c.addEventListener("touchend",s=>{if(r!==s.target)return;const b=parseInt(y(r,"data-swipe-threshold","20"),10),l=parseInt(y(r,"data-swipe-timeout","500"),10),w=Date.now()-i;let p="";const f=s.changedTouches||s.touches||[];if(Math.abs(g)>Math.abs(o)?Math.abs(g)>b&&w<l&&(p=g>0?"swiped-left":"swiped-right"):Math.abs(o)>b&&w<l&&(p=o>0?"swiped-up":"swiped-down"),""!==p){const v={dir:p.replace(/swiped-/,""),xStart:parseInt(m,10),xEnd:parseInt((f[0]||{}).clientX||-1,10),yStart:parseInt(h,10),yEnd:parseInt((f[0]||{}).clientY||-1,10)};r.dispatchEvent(new CustomEvent("swiped",{bubbles:!0,cancelable:!0,detail:v})),r.dispatchEvent(new CustomEvent(p,{bubbles:!0,cancelable:!0,detail:v}))}m=null,h=null,i=null},!1)})(window,document)}},1348:(d,a,n)=>{n.d(a,{T:()=>t});var t=(()=>{return(e=t||(t={})).darkGreen="dark-green",e.darkGrey="dark-grey",e.primaryBlack="primary-black",e.white="white",e.primaryButton="primary-button",e.primaryButtonSmall="primary-button-small",e.primaryButtonMedium="primary-button-medium",e.primaryButtonLarge="primary-button-large",e.primaryButtonLight="primary-button-light",e.primaryButtonLightSmall="primary-button-light-small",e.primaryButtonLightMedium="primary-button-light-medium",e.primaryButtonLightLarge="primary-button-light-large",e.secondaryButton="secondary-button",e.secondaryButtonSmall="secondary-button-small",e.secondaryButtonMedium="secondary-button-medium",e.secondaryButtonLarge="secondary-button-large",e.secondaryButtonLight="secondary-button-light",e.secondaryButtonLightSmall="secondary-button-light-small",e.secondaryButtonLightMedium="secondary-button-light-medium",e.secondaryButtonLightLarge="secondary-button-light-large",t;var e})()},7436:(d,a,n)=>{n.d(a,{a:()=>h,b:()=>o,c:()=>i,g:()=>g});var t=n(1575);const e=["","account","add-document","add","alert","arrow-down","arrow-left","arrow-right","arrow-up","attachment","bookmark-filled","bookmark","calculator","calendar-filled","calendar","camera","card","check","chevron-down","chevron-left","chevron-right","chevron-up","close","documents","download","edit","error","eye-filled","eye-off","eye","facebook","folder","graph","hang-up","heart-filled","heart","help","history","instagram","linkedin","location-filled","location","lock-unlocked","lock","mail","menu","messages","microphone-off","microphone","money","nav-accounts-active","nav-accounts-green-filled","nav-accounts","nav-home-active","nav-home-green-filled","nav-home","nav-messages-active","nav-messages-green-filled","nav-messages","nav-page-green-filled","nav-page","nav-taxes-active","nav-taxes-green-filled","nav-taxes","online-medium","online-small","overflow","pause","phone","play","print","refresh","screenshare-stop","screenshare","search","settings","star-filled","star","subtract","time","transfer","trash","twitter","upload","video-off","video","youtube"],c=[".DS_Store","accounting-coach","accounting-software","accuracy","added-dependent","adopted","advance","advisor-match","any-device","audit-assistance","better-together","bookkeeping-team-member","business-insurance","business-tax","care","changed-jobs","charitable-Donors","chat","child","childcare","claim","complicated","connect-your-aacounts","contractors","contributed-hsa","creativity","curious","customer-centric","determined","doc-drop-off","docu-dollar-brand","e-sign","earned-income","easy-payroll","emerald-card","employee","enter-manually","expat","experienced-advisors","file-however","first-year","flexible-options","foreign-income","freelance","full-time-resident","guarantee","hablas-espanol","handwashing","help-faq","homeowner","household-changes","how-we-got-this","hrb-insights","hrb-office","hsa-contributors","i-have-kids","i-have-other-dependents","i-made-donations","im-not-sure","individualized-care","interest-income","investment","invoicing-tools","large-expenses","letter","make-appointment","manage-in-app","marital-status","married","mask","max-refund","medical-expense","mobile-receipt-upload","non-resident","not-right-now","office-or-virtual","office","on-demand-tech-support","one-to-one","parents","part-time-resident","passionate","payment-solutions","peace-of-mind","phone-call","phone-or-online","piggy-bank-brand","powerful-tools","prep-and-file","print-sign-send","product","protective-glass","regular-check-ins","rental-property","save-close","savings","scan","screen-share","second-look","security","self-employed","single","small-business","social-distancing","something-else","ssn-income","step-by-step-guidance","straightforward","student","tax-pro","taxes","thumbs-down","thumbs-up","tips-advice","travel-expenses","unemployment","unlimited-help","upfront-pricing","video-call","w2-picture","ways-to-file","wipe-surfaces","year-end-filing-help","year-round-support"],u=["jumbo","large","medium","small","small-reg","little","body-copy","body-copy-strong","body-copy-on-green","body-copy-small","body-copy-support","metadata","cta","cta-small","nav","nav-reg","cta-qualifier","card","headline-one","headline-two","headline-three","headline-four","headline-five"],m=["body-copy","large","little","medium","small"],h=r=>e.concat(c).includes(r),g=r=>Object.values(t.b).includes(r),o=r=>Object.values(m).includes(r),i=r=>Object.values(u).includes(r)}}]);