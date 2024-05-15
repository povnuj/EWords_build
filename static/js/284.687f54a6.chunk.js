/*! For license information please see 284.687f54a6.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkenglish_words_learning=self.webpackChunkenglish_words_learning||[]).push([[284],{284:(t,e,c)=>{c.r(e),c.d(e,{scopeCss:()=>B});var s="-shadowcsshost",n="-shadowcssslotted",o="-shadowcsscontext",r=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",l=new RegExp("("+s+r,"gim"),a=new RegExp("("+o+r,"gim"),i=new RegExp("("+n+r,"gim"),p=s+"-no-combinator",h=/-shadowcsshost-no-combinator([^\s]*)/,g=[/::shadow/g,/::content/g],u=/-shadowcsshost/gim,d=t=>new RegExp("((?<!(^@supports(.*)))|(?<={.*))(".concat(t,"\\b)"),"gim"),m=d("::slotted"),f=d(":host"),x=d(":host-context"),_=/\/\*\s*[\s\S]*?\*\//g,w=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,S=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,b=/([{}])/g,v=/(^.*?[^\\])??((:+)(.*)|$)/,E="%BLOCK%",W=(t,e)=>{const c=k(t);let s=0;return c.escapedString.replace(S,(function(){const t=arguments.length<=2?void 0:arguments[2];let n="",o=arguments.length<=4?void 0:arguments[4],r="";o&&o.startsWith("{"+E)&&(n=c.blocks[s++],o=o.substring(8),r="{");const l=e({selector:t,content:n});return"".concat(arguments.length<=1?void 0:arguments[1]).concat(l.selector).concat(arguments.length<=3?void 0:arguments[3]).concat(r).concat(l.content).concat(o)}))},k=t=>{const e=t.split(b),c=[],s=[];let n=0,o=[];for(let r=0;r<e.length;r++){const t=e[r];"}"===t&&n--,n>0?o.push(t):(o.length>0&&(s.push(o.join("")),c.push(E),o=[]),c.push(t)),"{"===t&&n++}o.length>0&&(s.push(o.join("")),c.push(E));return{escapedString:c.join(""),blocks:s}},O=(t,e,c)=>t.replace(e,(function(){for(var t=arguments.length,e=new Array(t),s=0;s<t;s++)e[s]=arguments[s];if(e[2]){const t=e[2].split(","),s=[];for(let n=0;n<t.length;n++){const o=t[n].trim();if(!o)break;s.push(c(p,o,e[3]))}return s.join(",")}return p+e[3]})),$=(t,e,c)=>t+e.replace(s,"")+c,R=(t,e,c)=>e.indexOf(s)>-1?$(t,e,c):t+e+c+", "+e+" "+t+c,j=(t,e)=>{const c=(t=>(t=t.replace(/\[/g,"\\[").replace(/\]/g,"\\]"),new RegExp("^("+t+")([>\\s~+[.,{:][\\s\\S]*)?$","m")))(e);return!c.test(t)},C=(t,e)=>t.replace(v,(function(t){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"")+e+(arguments.length>3&&void 0!==arguments[3]?arguments[3]:"")+(arguments.length>4&&void 0!==arguments[4]?arguments[4]:"")})),T=(t,e,c)=>{const s="."+(e=e.replace(/\[is=([^\]]*)\]/g,(function(t){return arguments.length<=1?void 0:arguments[1]}))),n=t=>{let n=t.trim();if(!n)return"";if(t.indexOf(p)>-1)n=((t,e,c)=>{if(u.lastIndex=0,u.test(t)){const e=".".concat(c);return t.replace(h,((t,c)=>C(c,e))).replace(u,e+" ")}return e+" "+t})(t,e,c);else{const e=t.replace(u,"");e.length>0&&(n=C(e,s))}return n},o=(t=>{const e=[];let c=0;return{content:(t=t.replace(/(\[[^\]]*\])/g,((t,s)=>{const n="__ph-".concat(c,"__");return e.push(s),c++,n}))).replace(/(:nth-[-\w]+)(\([^)]+\))/g,((t,s,n)=>{const o="__ph-".concat(c,"__");return e.push(n),c++,s+o})),placeholders:e}})(t);let r,l="",a=0;const i=/( |>|\+|~(?!=))\s*/g;let g=!((t=o.content).indexOf(p)>-1);for(;null!==(r=i.exec(t));){const e=r[1],c=t.slice(a,r.index).trim();g=g||c.indexOf(p)>-1;const s=g?n(c):c;l+="".concat(s," ").concat(e," "),a=i.lastIndex}const d=t.substring(a);return g=g||d.indexOf(p)>-1,l+=g?n(d):d,m=o.placeholders,l.replace(/__ph-(\d+)__/g,((t,e)=>m[+e]));var m},L=(t,e,c,s,n)=>W(t,(t=>{let o=t.selector,r=t.content;"@"!==t.selector[0]?o=((t,e,c,s)=>t.split(",").map((t=>s&&t.indexOf("."+s)>-1?t.trim():j(t,e)?T(t,e,c).trim():t.trim())).join(", "))(t.selector,e,c,s):(t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document"))&&(r=L(t.content,e,c,s,n));return{selector:o.replace(/\s{2,}/g," ").trim(),content:r}})),y=(t,e,c,r,h)=>{const u=((t,e)=>{const c="."+e+" > ",s=[];return t=t.replace(i,(function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];if(e[2]){const t=e[2].trim(),n=e[3],o=c+t+n;let r="";for(let c=e[4]-1;c>=0;c--){const t=e[5][c];if("}"===t||","===t)break;r=t+r}const l=(r+o).trim(),a="".concat(r.trimEnd()).concat(o.trim()).trim();if(l!==a){const t="".concat(a,", ").concat(l);s.push({orgSelector:l,updatedSelector:t})}return o}return p+e[3]})),{selectors:s,cssText:t}})(t=(t=>O(t,a,R))(t=(t=>O(t,l,$))(t=(t=>t.replace(x,"$1".concat(o)).replace(f,"$1".concat(s)).replace(m,"$1".concat(n)))(t))),r);return t=(t=>g.reduce(((t,e)=>t.replace(e," ")),t))(t=u.cssText),e&&(t=L(t,e,c,r,h)),{cssText:(t=(t=A(t,c)).replace(/>\s*\*\s+([^{, ]+)/gm," $1 ")).trim(),slottedSelectors:u.selectors.map((t=>({orgSelector:A(t.orgSelector,c),updatedSelector:A(t.updatedSelector,c)})))}},A=(t,e)=>t.replace(/-shadowcsshost-no-combinator/g,".".concat(e)),B=(t,e,c)=>{const s=e+"-h",n=e+"-s",o=t.match(w)||[];t=(t=>t.replace(_,""))(t);const r=[];if(c){const e=t=>{const e="/*!@___".concat(r.length,"___*/"),c="/*!@".concat(t.selector,"*/");return r.push({placeholder:e,comment:c}),t.selector=e+t.selector,t};t=W(t,(t=>"@"!==t.selector[0]?e(t):t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document")?(t.content=W(t.content,e),t):t))}const l=y(t,e,s,n,c);return t=[l.cssText,...o].join("\n"),c&&r.forEach((e=>{let{placeholder:c,comment:s}=e;t=t.replace(c,s)})),l.slottedSelectors.forEach((e=>{const c=new RegExp(e.orgSelector.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"g");t=t.replace(c,e.updatedSelector)})),t}}}]);
//# sourceMappingURL=284.687f54a6.chunk.js.map