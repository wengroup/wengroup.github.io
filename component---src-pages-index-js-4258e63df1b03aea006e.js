(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[678],{2993:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,c){if(e===c)return!0;if(e&&c&&"object"==typeof e&&"object"==typeof c){if(e.constructor!==c.constructor)return!1;var l,o,s,u;if(Array.isArray(e)){if((l=e.length)!=c.length)return!1;for(o=l;0!=o--;)if(!i(e[o],c[o]))return!1;return!0}if(r&&e instanceof Map&&c instanceof Map){if(e.size!==c.size)return!1;for(u=e.entries();!(o=u.next()).done;)if(!c.has(o.value[0]))return!1;for(u=e.entries();!(o=u.next()).done;)if(!i(o.value[1],c.get(o.value[0])))return!1;return!0}if(n&&e instanceof Set&&c instanceof Set){if(e.size!==c.size)return!1;for(u=e.entries();!(o=u.next()).done;)if(!c.has(o.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(c)){if((l=e.length)!=c.length)return!1;for(o=l;0!=o--;)if(e[o]!==c[o])return!1;return!0}if(e.constructor===RegExp)return e.source===c.source&&e.flags===c.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===c.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===c.toString();if((l=(s=Object.keys(e)).length)!==Object.keys(c).length)return!1;for(o=l;0!=o--;)if(!Object.prototype.hasOwnProperty.call(c,s[o]))return!1;if(t&&e instanceof Element)return!1;for(o=l;0!=o--;)if(("_owner"!==s[o]&&"__v"!==s[o]&&"__o"!==s[o]||!e.$$typeof)&&!i(e[s[o]],c[s[o]]))return!1;return!0}return e!=e&&c!=c}e.exports=function(e,t){try{return i(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},4839:function(e,t,r){"use strict";var n,a=r(7294),i=(n=a)&&"object"==typeof n&&"default"in n?n.default:n;function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var o,s=[];function u(){o=e(s.map((function(e){return e.props}))),m.canUseDOM?t(o):r&&(o=r(o))}var m=function(e){var t,r;function a(){return e.apply(this,arguments)||this}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.peek=function(){return o},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=o;return o=void 0,s=[],e};var c=a.prototype;return c.UNSAFE_componentWillMount=function(){s.push(this),u()},c.componentDidUpdate=function(){u()},c.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},c.render=function(){return i.createElement(n,this.props)},a}(a.PureComponent);return c(m,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),c(m,"canUseDOM",l),m}}},6556:function(e,t,r){"use strict";r.d(t,{J:function(){return l}});var n=r(7294),a=r(3089),i=r(1597),c=r(3127),l=function(e){var t=e.news,r=e.showGrid;return n.createElement("div",{id:"news",className:r?"w-2/3 mx-auto max-w-3xl":"pt-8 h-128 border-2 rounded-xl p-4 bg-slate-100 shadow-md flex flex-col mt-16"},n.createElement("div",{className:" w-14 h-14 mx-auto mb-2"},n.createElement(i.Link,{to:"/News"},n.createElement("img",{src:"icon/News.svg",alt:"news"})),n.createElement("hr",null)),n.createElement("div",{className:""+(!r&&"overflow-scroll h-128 p-4")},t.map((function(e){return n.createElement(a.P,{to:"/News#"+e.title,key:e.id},n.createElement("ul",{className:" mb-5"},n.createElement("li",{className:" pb-5"},n.createElement("div",{className:"flex flex-row"},n.createElement("p",{className:"subTitle text-sm"},e.date)),n.createElement("div",{className:r?"mk mk-page":"mk"},n.createElement(c.D,{children:e.content}))),n.createElement("hr",null)))}))))}},4628:function(e,t,r){"use strict";r.d(t,{A:function(){return s}});var n=r(7294),a=r(1597),i=r(3089),c=r(2306),l=r(1071),o=r(3127),s=function(e){var t=e.researches,r=e.showLink,s=(0,a.useStaticQuery)("3457343949");return n.createElement("article",{id:"research",className:r?"px-14 sm:w-4/5 mx-auto max-w-5xl sm:pt-20":"px-14 sm:w-4/5 mx-auto max-w-5xl"},n.createElement("h2",{className:"text-center"},r?n.createElement(a.Link,{to:"Researches"},"RESEARCH"):"RESEARCH"),n.createElement("div",{className:"flex flex-row justify-center mb-10"},s.file.childrenImageSharp===[]?n.createElement(c.M,{icon:s.file.childrenImageSharp}):n.createElement(l.f,{icon:s.file.publicURL})),n.createElement("ul",{className:"grid gap-5"},t.map((function(e){return n.createElement(i.P,{to:"/Researches#"+e.title,key:e.id,className:"pb-6 w-full"},n.createElement("p",{className:"subTitle pb-4"},e.title),n.createElement("p",{className:"pb-4"},n.createElement(o.D,{children:e.content,className:"markdown"})),n.createElement("hr",null))}))))}},2306:function(e,t,r){"use strict";r.d(t,{M:function(){return i}});var n=r(7294),a=r(8945),i=function(e){var t=e.icon,r=e.smaller,i=t.gatsbyImageData[0];return n.createElement(n.Fragment,null,n.createElement("div",{className:r?"w-7 h-7 pr-1":"w-8 h-8"},n.createElement(a.G,{image:i,className:"icon"})),n.createElement("div",{className:r?"w-7 h-7 pr-1 ":"w-8 h-8"},n.createElement(a.G,{image:i})),n.createElement("div",{className:r?"w-7 h-7 pr-1":"w-8 h-8"},n.createElement(a.G,{image:i})))}},1071:function(e,t,r){"use strict";r.d(t,{f:function(){return a}});var n=r(7294),a=function(e){var t=e.icon,r=e.smaller;return n.createElement(n.Fragment,null,n.createElement("div",{className:r?"w-7 h-7 pr-1":"w-8 h-8"},n.createElement("img",{src:t,alt:"icon"})),n.createElement("div",{className:r?"w-7 h-7 pr-1":"w-8 h-8"},n.createElement("img",{src:t,alt:"icon"})),n.createElement("div",{className:r?"w-7 h-7 pr-1":"w-8 h-8"},n.createElement("img",{src:t,alt:"icon"})))}},339:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Pe}});var n,a,i,c,l=r(7294),o=r(1633),s=r(6556),u=r(3201),m=r(9845),f=r(1597),p=r(2306),d=r(1071),h=r(3127),E=function(e){var t=e.codes,r=e.showLink,n=e.showGrid,a=(0,f.useStaticQuery)("588823974");return l.createElement("div",{id:"code",className:"w-full pt-12 mb-32"},l.createElement("h2",{className:"text-center pt-8"},r?l.createElement(f.Link,{to:"Codes"},"CODE"):"CODE"),l.createElement("div",{className:"flex flex-row justify-center pb-6 mb-10"},a.file.childrenImageSharp===[]?l.createElement(p.M,{icon:a.file.childrenImageSharp}):l.createElement(d.f,{icon:a.file.publicURL})),l.createElement("ul",{id:"codes",className:n?"grid grid-cols-1 place-content-center w-full place-items-center gap-7":"px-14 grid grid-cols-1 sm:grid-cols-2 gap-16"},t.map((function(e){return l.createElement("li",{key:e.id,className:"border-yellow-600 border-b-4 rounded-lg p-5 bg-slate-100 shadow-xl max-w-3xl"},l.createElement("p",{className:"subTitle"},e.title),l.createElement("p",null,l.createElement(h.D,{children:e.content,className:"markdown"})),l.createElement("a",{href:e.github,className:"pt-2 flex items-center hover:underline hover:text-Button"},l.createElement(u.NML,null),l.createElement("p",{className:"pl-3 "},"GitHub")),l.createElement("a",{href:e.document,className:"pt-2 flex items-center hover:underline hover:text-Button"},l.createElement(m.oXr,null),l.createElement("p",{className:"pl-3 "},"Documentation")))}))))},y=function(){var e=(0,f.useStaticQuery)("4053220039");return l.createElement("div",{className:"pt-24",id:"publications"},l.createElement("h2",{className:"text-center"},"PUBLICATIONS"),l.createElement("div",{className:"flex flex-row justify-center mb-10"},e.file.childrenImageSharp===[]?l.createElement(p.M,{icon:e.file.childrenImageSharp,smaller:!0}):l.createElement(d.f,{icon:e.file.publicURL,smaller:!0})),l.createElement("div",{className:"flex flex-col sm:flex-row gap-6 justify-center text-lg w-max mx-auto"},l.createElement("a",{href:"https://scholar.google.com/citations?user=RXLH5k4AAAAJ&hl=en",className:"hover:text-Button hover:underline flex items-center"},l.createElement("div",{className:"w-6 h-6"},l.createElement("img",{src:"icon/Googlescholar.svg",alt:""})),l.createElement("p",{className:"indent-2"},"Google Scholar")),l.createElement("a",{href:"https://www.researchgate.net/profile/Mingjian-Wen",className:"hover:text-Button hover:underline flex space-x-1 items-center "},l.createElement("div",{className:"w-6 h-6"},l.createElement("img",{src:"icon/Researchgate.svg",alt:""})),l.createElement("p",{className:"indent-2"},"ResearchGate")),l.createElement("a",{href:"https://orcid.org/0000-0003-0013-575X",className:"hover:text-Button hover:underline flex space-x-1 items-center "},l.createElement("div",{className:"w-6 h-6"},l.createElement("img",{src:"icon/Orcid.svg",alt:""})),l.createElement("p",{className:"indent-2"},"ORCID"))))},g=function(){var e=(0,f.useStaticQuery)("1206980783").allStrapiAbout.nodes;return l.createElement("article",{id:"about",className:"sm:col-span-2 pt-16"},l.createElement("div",null,l.createElement("h2",{className:"text-center"},"ABOUT"),l.createElement("div",{className:"flex flex-row justify-center mb-10"}),l.createElement("p",null,l.createElement(h.D,{children:e[0].about,className:"markdown"}))),l.createElement(y,null))},b=r(4628),v=r(8945),w=function(e){var t=e.people,r=t.description,n=t.email,a=t.name,i=t.website,c=t.photo,o=t.title,s=t.cv;return l.createElement(l.Fragment,null,l.createElement("div",{className:"flex flex-col "},l.createElement("div",{className:"flex flex-col sm:flex-row"},l.createElement("div",{className:"sm:mx-0  sm:pb-0 text-center"},l.createElement(v.G,{image:c.localFile.childImageSharp.gatsbyImageData,alt:a,className:"h-32 w-32 rounded-full ring-2 ring-white sm:mr-4 "})),l.createElement("div",{className:"text-sm self-center text-center sm:text-left"},l.createElement("p",{className:"text-lg font-semibold"},a),l.createElement("p",{className:"w-max"},o),l.createElement("p",{className:"text-slate-800"},n),l.createElement("p",null,i),l.createElement("p",null,l.createElement(h.D,{children:s,className:"markdown"})))),l.createElement("p",{className:"text-sm mt-5"},l.createElement(h.D,{children:r,className:"markdown"}))))},T=function(e){var t=e.graduates,r=e.pi,n=(0,f.useStaticQuery)("441946907");return l.createElement("div",{id:"people"},l.createElement(l.Fragment,null,l.createElement("h2",{className:"text-center pt-20"},"PEOPLE"),l.createElement("div",{className:"flex flex-row justify-center mb-10 "},n.file.childrenImageSharp===[]?l.createElement(p.M,{icon:n.file.childrenImageSharp,smaller:!0}):l.createElement(d.f,{icon:n.file.publicURL,smaller:!0}))),l.createElement("div",null,l.createElement("h2",{className:"text-center sm:text-left people-title sm:pl-11"},"Principal Investigator"),l.createElement("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-10 p-11 pt-5"},l.createElement(w,{people:r[0]}))),l.createElement("div",null,l.createElement("h2",{className:"text-center sm:text-left people-title sm:pl-11 "},"Graduate Students"),l.createElement("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-10 p-11 pt-5"},t.map((function(e){return l.createElement("div",{key:e.id},l.createElement(w,{people:e}))})))))},x=r(5697),N=r.n(x),S=r(4839),A=r.n(S),O=r(2993),C=r.n(O),k=r(6494),j=r.n(k),I="bodyAttributes",L="htmlAttributes",P="titleAttributes",R={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},M=(Object.keys(R).map((function(e){return R[e]})),"charset"),D="cssText",_="href",B="http-equiv",H="innerHTML",U="itemprop",F="name",G="property",q="rel",Y="src",W="target",z={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},K="defaultTitle",Q="defer",J="encodeSpecialCharacters",V="onChangeClientState",X="titleTemplate",$=Object.keys(z).reduce((function(e,t){return e[z[t]]=t,e}),{}),Z=[R.NOSCRIPT,R.SCRIPT,R.STYLE],ee="data-react-helmet",te="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},re=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},ne=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),ae=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ie=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},ce=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},le=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},oe=function(e){var t=pe(e,R.TITLE),r=pe(e,X);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=pe(e,K);return t||n||void 0},se=function(e){return pe(e,V)||function(){}},ue=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return ae({},e,t)}),{})},me=function(e,t){return t.filter((function(e){return void 0!==e[R.BASE]})).map((function(e){return e[R.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),a=0;a<n.length;a++){var i=n[a].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},fe=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ge("Helmet: "+e+' should be of type "Array". Instead found type "'+te(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var a={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),c=0;c<i.length;c++){var l=i[c],o=l.toLowerCase();-1===t.indexOf(o)||r===q&&"canonical"===e[r].toLowerCase()||o===q&&"stylesheet"===e[o].toLowerCase()||(r=o),-1===t.indexOf(l)||l!==H&&l!==D&&l!==U||(r=l)}if(!r||!e[r])return!1;var s=e[r].toLowerCase();return n[r]||(n[r]={}),a[r]||(a[r]={}),!n[r][s]&&(a[r][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(a),c=0;c<i.length;c++){var l=i[c],o=j()({},n[l],a[l]);n[l]=o}return e}),[]).reverse()},pe=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},de=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){de(e)}),0)}),he=function(e){return clearTimeout(e)},Ee="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||de:r.g.requestAnimationFrame||de,ye="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||he:r.g.cancelAnimationFrame||he,ge=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},be=null,ve=function(e,t){var r=e.baseTag,n=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,c=e.metaTags,l=e.noscriptTags,o=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,m=e.title,f=e.titleAttributes;xe(R.BODY,n),xe(R.HTML,a),Te(m,f);var p={baseTag:Ne(R.BASE,r),linkTags:Ne(R.LINK,i),metaTags:Ne(R.META,c),noscriptTags:Ne(R.NOSCRIPT,l),scriptTags:Ne(R.SCRIPT,s),styleTags:Ne(R.STYLE,u)},d={},h={};Object.keys(p).forEach((function(e){var t=p[e],r=t.newTags,n=t.oldTags;r.length&&(d[e]=r),n.length&&(h[e]=p[e].oldTags)})),t&&t(),o(e,d,h)},we=function(e){return Array.isArray(e)?e.join(""):e},Te=function(e,t){void 0!==e&&document.title!==e&&(document.title=we(e)),xe(R.TITLE,t)},xe=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(ee),a=n?n.split(","):[],i=[].concat(a),c=Object.keys(t),l=0;l<c.length;l++){var o=c[l],s=t[o]||"";r.getAttribute(o)!==s&&r.setAttribute(o,s),-1===a.indexOf(o)&&a.push(o);var u=i.indexOf(o);-1!==u&&i.splice(u,1)}for(var m=i.length-1;m>=0;m--)r.removeAttribute(i[m]);a.length===i.length?r.removeAttribute(ee):r.getAttribute(ee)!==c.join(",")&&r.setAttribute(ee,c.join(","))}},Ne=function(e,t){var r=document.head||document.querySelector(R.HEAD),n=r.querySelectorAll(e+"["+"data-react-helmet]"),a=Array.prototype.slice.call(n),i=[],c=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===H)r.innerHTML=t.innerHTML;else if(n===D)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var l=void 0===t[n]?"":t[n];r.setAttribute(n,l)}r.setAttribute(ee,"true"),a.some((function(e,t){return c=t,r.isEqualNode(e)}))?a.splice(c,1):i.push(r)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:a,newTags:i}},Se=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},Ae=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[z[r]||r]=e[r],t}),t)},Oe=function(e,t,r){switch(e){case R.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[ee]=!0,a=Ae(r,n),[l.createElement(R.TITLE,a,e)];var e,r,n,a},toString:function(){return function(e,t,r,n){var a=Se(r),i=we(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+le(i,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+le(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case I:case L:return{toComponent:function(){return Ae(t)},toString:function(){return Se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,a=((n={key:r})[ee]=!0,n);return Object.keys(t).forEach((function(e){var r=z[e]||e;if(r===H||r===D){var n=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=t[e]})),l.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var a=Object.keys(n).filter((function(e){return!(e===H||e===D)})).reduce((function(e,t){var a=void 0===n[t]?t:t+'="'+le(n[t],r)+'"';return e?e+" "+a:a}),""),i=n.innerHTML||n.cssText||"",c=-1===Z.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(c?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}},Ce=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,a=e.htmlAttributes,i=e.linkTags,c=e.metaTags,l=e.noscriptTags,o=e.scriptTags,s=e.styleTags,u=e.title,m=void 0===u?"":u,f=e.titleAttributes;return{base:Oe(R.BASE,t,n),bodyAttributes:Oe(I,r,n),htmlAttributes:Oe(L,a,n),link:Oe(R.LINK,i,n),meta:Oe(R.META,c,n),noscript:Oe(R.NOSCRIPT,l,n),script:Oe(R.SCRIPT,o,n),style:Oe(R.STYLE,s,n),title:Oe(R.TITLE,{title:m,titleAttributes:f},n)}},ke=A()((function(e){return{baseTag:me([_,W],e),bodyAttributes:ue(I,e),defer:pe(e,Q),encode:pe(e,J),htmlAttributes:ue(L,e),linkTags:fe(R.LINK,[q,_],e),metaTags:fe(R.META,[F,M,B,G,U],e),noscriptTags:fe(R.NOSCRIPT,[H],e),onChangeClientState:se(e),scriptTags:fe(R.SCRIPT,[Y,H],e),styleTags:fe(R.STYLE,[D],e),title:oe(e),titleAttributes:ue(P,e)}}),(function(e){be&&ye(be),e.defer?be=Ee((function(){ve(e,(function(){be=null}))})):(ve(e),be=null)}),Ce)((function(){return null})),je=(a=ke,c=i=function(e){function t(){return re(this,t),ce(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!C()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case R.SCRIPT:case R.NOSCRIPT:return{innerHTML:t};case R.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,a=e.newChildProps,i=e.nestedChildren;return ae({},n,((t={})[r.type]=[].concat(n[r.type]||[],[ae({},a,this.mapNestedChildrenToProps(r,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,a=e.newProps,i=e.newChildProps,c=e.nestedChildren;switch(n.type){case R.TITLE:return ae({},a,((t={})[n.type]=c,t.titleAttributes=ae({},i),t));case R.BODY:return ae({},a,{bodyAttributes:ae({},i)});case R.HTML:return ae({},a,{htmlAttributes:ae({},i)})}return ae({},a,((r={})[n.type]=ae({},i),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=ae({},t);return Object.keys(e).forEach((function(t){var n;r=ae({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return l.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,i=a.children,c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[$[r]||r]=e[r],t}),t)}(ie(a,["children"]));switch(r.warnOnInvalidChildren(e,i),e.type){case R.LINK:case R.META:case R.NOSCRIPT:case R.SCRIPT:case R.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:c,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=ie(e,["children"]),n=ae({},r);return t&&(n=this.mapChildrenToProps(t,n)),l.createElement(a,n)},ne(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(l.Component),i.propTypes={base:N().object,bodyAttributes:N().object,children:N().oneOfType([N().arrayOf(N().node),N().node]),defaultTitle:N().string,defer:N().bool,encodeSpecialCharacters:N().bool,htmlAttributes:N().object,link:N().arrayOf(N().object),meta:N().arrayOf(N().object),noscript:N().arrayOf(N().object),onChangeClientState:N().func,script:N().arrayOf(N().object),style:N().arrayOf(N().object),title:N().string,titleAttributes:N().object,titleTemplate:N().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=a.peek,i.rewind=function(){var e=a.rewind();return e||(e=Ce({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},c);je.renderStatic=je.rewind;var Ie=function(){return l.createElement(je,{htmlAttributes:{lang:"en"},title:"Mingjian Wen"},l.createElement("meta",{name:"description",content:"This is Mingjian Wen's website"}))},Le=function(e){var t=e.positions,r=(0,f.useStaticQuery)("2488457095");return l.createElement("div",{id:"position"},l.createElement("h2",{className:" text-center"},"OPENINGS"),l.createElement("div",{className:"flex flex-row justify-center mb-10"},r.file.childrenImageSharp===[]?l.createElement(p.M,{icon:r.file.childrenImageSharp}):l.createElement(d.f,{icon:r.file.publicURL})),l.createElement("ul",{className:"sm:w-128 flex mx-auto mb-10 w-5/6 flex-col"},t.map((function(e){return l.createElement("li",{key:e.id,className:" mb-7"},l.createElement("h2",{className:"text-center sm:text-left people-title pb-2"},e.title),l.createElement("p",null,l.createElement(h.D,{children:e.content,className:"markdown"})))}))))},Pe=function(e){var t=e.data,r=t.allStrapiCodes.nodes,n=t.allStrapiResearchWorks.nodes,a=t.allStrapiNews.nodes,i=t.allStrapiGraduates.nodes,c=t.allStrapiPi.nodes,u=t.allStrapiPositions.nodes;return l.createElement(o.Z,null,l.createElement(Ie,null),l.createElement("div",{className:"grid sm:grid-cols-3 gap-10 justify-center sm:mb-11 pb-8 px-8"},l.createElement(g,null),l.createElement(s.J,{news:a})),l.createElement(T,{graduates:i,pi:c}),l.createElement(b.A,{researches:n,showLink:!0}),l.createElement(E,{codes:r}),l.createElement(Le,{positions:u}))}}}]);
//# sourceMappingURL=component---src-pages-index-js-4258e63df1b03aea006e.js.map