(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[678],{2993:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function l(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var c,o,s,u;if(Array.isArray(e)){if((c=e.length)!=i.length)return!1;for(o=c;0!=o--;)if(!l(e[o],i[o]))return!1;return!0}if(r&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(u=e.entries();!(o=u.next()).done;)if(!i.has(o.value[0]))return!1;for(u=e.entries();!(o=u.next()).done;)if(!l(o.value[1],i.get(o.value[0])))return!1;return!0}if(n&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(u=e.entries();!(o=u.next()).done;)if(!i.has(o.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((c=e.length)!=i.length)return!1;for(o=c;0!=o--;)if(e[o]!==i[o])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if((c=(s=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(o=c;0!=o--;)if(!Object.prototype.hasOwnProperty.call(i,s[o]))return!1;if(t&&e instanceof Element)return!1;for(o=c;0!=o--;)if(("_owner"!==s[o]&&"__v"!==s[o]&&"__o"!==s[o]||!e.$$typeof)&&!l(e[s[o]],i[s[o]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return l(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},4839:function(e,t,r){"use strict";var n,a=r(7294),l=(n=a)&&"object"==typeof n&&"default"in n?n.default:n;function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var o,s=[];function u(){o=e(s.map((function(e){return e.props}))),m.canUseDOM?t(o):r&&(o=r(o))}var m=function(e){var t,r;function a(){return e.apply(this,arguments)||this}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.peek=function(){return o},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=o;return o=void 0,s=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){s.push(this),u()},i.componentDidUpdate=function(){u()},i.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},i.render=function(){return l.createElement(n,this.props)},a}(a.PureComponent);return i(m,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),i(m,"canUseDOM",c),m}}},5960:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Be}});var n,a,l,i,c=r(7294),o=r(1633),s=r(3780),u=r(3201),m=r(9845),f=r(1597),p=r(8945),d=function(e){var t=e.icon,r=e.smaller,n=t.gatsbyImageData[0];return c.createElement(c.Fragment,null,c.createElement("div",{className:r?"w-7 h-7 pr-1":"w-8 h-8"},c.createElement(p.G,{image:n,className:"icon"})),c.createElement("div",{className:r?"w-7 h-7 pr-1 ":"w-8 h-8"},c.createElement(p.G,{image:n})),c.createElement("div",{className:r?"w-7 h-7 pr-1":"w-8 h-8"},c.createElement(p.G,{image:n})))},h=function(e){var t=e.icon,r=e.smaller;return c.createElement(c.Fragment,null,c.createElement("div",{className:r?"w-7 h-7 pr-1":"w-8 h-8"},c.createElement("img",{src:t,alt:"icon"})),c.createElement("div",{className:r?"w-7 h-7 pr-1":"w-8 h-8"},c.createElement("img",{src:t,alt:"icon"})),c.createElement("div",{className:r?"w-7 h-7 pr-1":"w-8 h-8"},c.createElement("img",{src:t,alt:"icon"})))},E=r(3127),g=function(e){var t=e.codes,r=e.showLink,n=e.showGrid,a=(0,f.useStaticQuery)("588823974");return c.createElement("div",{id:"codes",className:"w-full pt-12 mb-32"},c.createElement("h2",{className:"text-center pt-8"},r?c.createElement(f.Link,{to:"Codes"},"CODES"):"CODES"),c.createElement("div",{className:"flex flex-row justify-center pb-6 mb-10"},a.file.childrenImageSharp===[]?c.createElement(d,{icon:a.file.childrenImageSharp}):c.createElement(h,{icon:a.file.publicURL})),c.createElement("ul",{className:n?"grid grid-cols-1 place-content-center w-full place-items-center gap-7":"px-14 grid grid-cols-1 sm:grid-cols-2 gap-16"},t.map((function(e){return c.createElement("li",{key:e.id,className:"border-yellow-600 border-b-4 rounded-lg p-5 bg-slate-100 shadow-xl max-w-3xl"},c.createElement("p",{className:"subTitle"},e.frontmatter.title),c.createElement("p",null,c.createElement(E.D,{children:e.frontmatter.description,className:"markdown"})),c.createElement("a",{href:e.frontmatter.github,className:"pt-2 flex items-center hover:underline hover:text-Button"},c.createElement(u.NML,null),c.createElement("p",{className:"pl-3 "},"GitHub")),c.createElement("a",{href:e.frontmatter.document,className:"pt-2 flex items-center hover:underline hover:text-Button"},c.createElement(m.oXr,null),c.createElement("p",{className:"pl-3 "},"Documentation")))}))))},y=function(){var e=(0,f.useStaticQuery)("2387897461");return c.createElement("div",{className:"pt-24",id:"publications"},c.createElement("h2",{className:"text-center"},"PUBLICATIONS"),c.createElement("div",{className:"flex flex-row justify-center mb-10"},e.subTitle.childrenImageSharp===[]?c.createElement(d,{icon:e.subTitle.childrenImageSharp,smaller:!0}):c.createElement(h,{icon:e.subTitle.publicURL,smaller:!0})),c.createElement("div",{className:"flex flex-col sm:flex-row gap-6 justify-center text-lg w-max mx-auto"},c.createElement("a",{href:"https://scholar.google.com/citations?user=RXLH5k4AAAAJ&hl=en",className:"hover:text-Button hover:underline flex items-center"},c.createElement("div",{className:"w-6 h-6"},c.createElement("img",{src:e.google.publicURL,alt:"googlescholar"})),c.createElement("p",{className:"indent-2"},"Google Scholar")),c.createElement("a",{href:"https://www.researchgate.net/profile/Mingjian-Wen",className:"hover:text-Button hover:underline flex space-x-1 items-center "},c.createElement("div",{className:"w-6 h-6"},c.createElement("img",{src:e.researchGate.publicURL,alt:"researchgate"})),c.createElement("p",{className:"indent-2"},"ResearchGate")),c.createElement("a",{href:"https://orcid.org/0000-0003-0013-575X",className:"hover:text-Button hover:underline flex space-x-1 items-center "},c.createElement("div",{className:"w-6 h-6"},c.createElement("img",{src:e.orcid.publicURL,alt:"orcid"})),c.createElement("p",{className:"indent-2"},"ORCID"))))},b=function(){var e=(0,f.useStaticQuery)("1118814919").allMarkdownRemark.nodes;return c.createElement("article",{id:"about",className:"sm:col-span-2 pt-16"},c.createElement("div",null,c.createElement("h2",{className:"text-center"}),"  /* there used to be an `About` text; we've removed it */",c.createElement("div",{className:"flex flex-row justify-center mb-10"}),c.createElement("p",null,c.createElement("div",{dangerouslySetInnerHTML:{__html:e[0].html}}))),c.createElement(y,null))},v=function(e){var t=e.item,r=e.imgs;return c.createElement("div",{key:t.id,className:"pb-6 w-full "},c.createElement("p",{className:"subTitle pb-4",id:t.frontmatter.title},t.frontmatter.title),c.createElement("p",{className:"pb-4"},c.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}})),c.createElement("div",{className:""},r.map((function(e){return e.relativePath===t.frontmatter.img?c.createElement("img",{src:e.publicURL,className:" w-1/2 mb-4 mx-auto"}):null}))),c.createElement("hr",null))},w=function(e){var t=e.researches,r=e.showLink,n=(0,f.useStaticQuery)("473037864"),a=n.allFile.nodes;return c.createElement("article",{id:"research",className:"px-14 sm:w-4/5 mx-auto max-w-5xl sm:pt-20"},c.createElement("h2",{className:"text-center"},r?c.createElement(f.Link,{to:"Researches"},"RESEARCH"):"RESEARCH"),c.createElement("div",{className:"flex flex-row justify-center mb-10"},n.file.childrenImageSharp===[]?c.createElement(d,{icon:n.file.childrenImageSharp}):c.createElement(h,{icon:n.file.publicURL})),c.createElement("ul",{className:"grid gap-5"},t.map((function(e){return c.createElement(v,{item:e,key:e.id,imgs:a})}))))},T=function(e){var t=e.people,r=e.img,n=e.pi,a=t.frontmatter,l=(0,f.useStaticQuery)("705201582");return c.createElement(c.Fragment,null,c.createElement("div",{className:"flex flex-col "},c.createElement("div",{className:"flex flex-col sm:flex-row"},c.createElement("div",{className:"sm:mx-0  sm:pb-0 text-center"},r.map((function(e){return e.relativePath===a.photo?c.createElement(p.G,{image:e.childImageSharp.gatsbyImageData,alt:a.name,className:"h-32 w-32 headshot sm:mr-4 "}):null}))),c.createElement("div",{className:"text-sm self-center text-center sm:text-left"},c.createElement("p",{className:"text-lg font-semibold"},a.name),n&&c.createElement("p",{className:"w-max"},a.title),c.createElement("p",{className:"text-slate-800"},a.Email),n&&c.createElement("p",{className:"markdown"},c.createElement("a",{href:l.file.publicURL,target:"_blank"},"CV")))),c.createElement("p",{className:"text-sm mt-5"},c.createElement(E.D,{children:a.description,className:"markdown"}))))},x=function(){var e=(0,f.useStaticQuery)("3343336607"),t=e.allMarkdownRemark.nodes,r=e.allFile.nodes;return t.length?c.createElement("div",null,c.createElement("h2",{className:"text-center sm:text-left people-title sm:pl-11 "},"Graduate Students"),c.createElement("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-10 p-11 pt-5"},t.map((function(e){return c.createElement("div",{key:e.id},c.createElement(T,{people:e,img:r}))})))):null},N=function(){var e=(0,f.useStaticQuery)("2725451950"),t=e.allMarkdownRemark.nodes,r=e.allFile.nodes;return t.length?c.createElement("div",null,c.createElement("h2",{className:"text-center sm:text-left people-title sm:pl-11 "},"Principal Investigator"),c.createElement("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-10 p-11 pt-5"},t.map((function(e){return c.createElement("div",{key:e.id},c.createElement(T,{people:e,img:r,pi:!0}))})))):null},S=function(){var e=(0,f.useStaticQuery)("2481778709"),t=e.allMarkdownRemark.nodes,r=e.allFile.nodes;return t.length?c.createElement("div",null,c.createElement("h2",{className:"text-center sm:text-left people-title sm:pl-11 "},"Postdocs"),c.createElement("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-10 p-11 pt-5"},t.map((function(e){return c.createElement("div",{key:e.id},c.createElement(T,{people:e,img:r}))})))):null},A=function(){var e=(0,f.useStaticQuery)("4268223788"),t=e.allMarkdownRemark.nodes,r=e.allFile.nodes;return t.length?c.createElement("div",null,c.createElement("h2",{className:"text-center sm:text-left people-title sm:pl-11 "},"Undergraduate Students"),c.createElement("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-10 p-11 pt-5"},t.map((function(e){return c.createElement("div",{key:e.id},c.createElement(T,{people:e,img:r}))})))):null},C=function(){var e=(0,f.useStaticQuery)("441946907");return c.createElement("div",{id:"people"},c.createElement(c.Fragment,null,c.createElement("h2",{className:"text-center pt-20 mt-20 sm:mt-0"},"PEOPLE"),c.createElement("div",{className:"flex flex-row justify-center mb-10 "},e.file.childrenImageSharp===[]?c.createElement(d,{icon:e.file.childrenImageSharp,smaller:!0}):c.createElement(h,{icon:e.file.publicURL,smaller:!0}))),c.createElement("div",{className:"flex flex-col gap-8"},c.createElement(N,null),c.createElement(S,null),c.createElement(x,null),c.createElement(A,null)))},O=r(5697),k=r.n(O),j=r(4839),L=r.n(j),I=r(2993),P=r.n(I),R=r(6494),M=r.n(R),_="bodyAttributes",D="htmlAttributes",U="titleAttributes",B={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},F=(Object.keys(B).map((function(e){return B[e]})),"charset"),H="cssText",q="href",G="http-equiv",Q="innerHTML",Y="itemprop",K="name",z="property",W="rel",V="src",X="target",J={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},$="defaultTitle",Z="defer",ee="encodeSpecialCharacters",te="onChangeClientState",re="titleTemplate",ne=Object.keys(J).reduce((function(e,t){return e[J[t]]=t,e}),{}),ae=[B.NOSCRIPT,B.SCRIPT,B.STYLE],le="data-react-helmet",ie="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ce=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},oe=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),se=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ue=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},me=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},fe=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},pe=function(e){var t=ye(e,B.TITLE),r=ye(e,re);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=ye(e,$);return t||n||void 0},de=function(e){return ye(e,te)||function(){}},he=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return se({},e,t)}),{})},Ee=function(e,t){return t.filter((function(e){return void 0!==e[B.BASE]})).map((function(e){return e[B.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),a=0;a<n.length;a++){var l=n[a].toLowerCase();if(-1!==e.indexOf(l)&&r[l])return t.concat(r)}return t}),[])},ge=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&xe("Helmet: "+e+' should be of type "Array". Instead found type "'+ie(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var a={};r.filter((function(e){for(var r=void 0,l=Object.keys(e),i=0;i<l.length;i++){var c=l[i],o=c.toLowerCase();-1===t.indexOf(o)||r===W&&"canonical"===e[r].toLowerCase()||o===W&&"stylesheet"===e[o].toLowerCase()||(r=o),-1===t.indexOf(c)||c!==Q&&c!==H&&c!==Y||(r=c)}if(!r||!e[r])return!1;var s=e[r].toLowerCase();return n[r]||(n[r]={}),a[r]||(a[r]={}),!n[r][s]&&(a[r][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var l=Object.keys(a),i=0;i<l.length;i++){var c=l[i],o=M()({},n[c],a[c]);n[c]=o}return e}),[]).reverse()},ye=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},be=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){be(e)}),0)}),ve=function(e){return clearTimeout(e)},we="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||be:r.g.requestAnimationFrame||be,Te="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ve:r.g.cancelAnimationFrame||ve,xe=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},Ne=null,Se=function(e,t){var r=e.baseTag,n=e.bodyAttributes,a=e.htmlAttributes,l=e.linkTags,i=e.metaTags,c=e.noscriptTags,o=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,m=e.title,f=e.titleAttributes;Oe(B.BODY,n),Oe(B.HTML,a),Ce(m,f);var p={baseTag:ke(B.BASE,r),linkTags:ke(B.LINK,l),metaTags:ke(B.META,i),noscriptTags:ke(B.NOSCRIPT,c),scriptTags:ke(B.SCRIPT,s),styleTags:ke(B.STYLE,u)},d={},h={};Object.keys(p).forEach((function(e){var t=p[e],r=t.newTags,n=t.oldTags;r.length&&(d[e]=r),n.length&&(h[e]=p[e].oldTags)})),t&&t(),o(e,d,h)},Ae=function(e){return Array.isArray(e)?e.join(""):e},Ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=Ae(e)),Oe(B.TITLE,t)},Oe=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(le),a=n?n.split(","):[],l=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var o=i[c],s=t[o]||"";r.getAttribute(o)!==s&&r.setAttribute(o,s),-1===a.indexOf(o)&&a.push(o);var u=l.indexOf(o);-1!==u&&l.splice(u,1)}for(var m=l.length-1;m>=0;m--)r.removeAttribute(l[m]);a.length===l.length?r.removeAttribute(le):r.getAttribute(le)!==i.join(",")&&r.setAttribute(le,i.join(","))}},ke=function(e,t){var r=document.head||document.querySelector(B.HEAD),n=r.querySelectorAll(e+"["+"data-react-helmet]"),a=Array.prototype.slice.call(n),l=[],i=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===Q)r.innerHTML=t.innerHTML;else if(n===H)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute(le,"true"),a.some((function(e,t){return i=t,r.isEqualNode(e)}))?a.splice(i,1):l.push(r)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),l.forEach((function(e){return r.appendChild(e)})),{oldTags:a,newTags:l}},je=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},Le=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[J[r]||r]=e[r],t}),t)},Ie=function(e,t,r){switch(e){case B.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[le]=!0,a=Le(r,n),[c.createElement(B.TITLE,a,e)];var e,r,n,a},toString:function(){return function(e,t,r,n){var a=je(r),l=Ae(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+fe(l,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+fe(l,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case _:case D:return{toComponent:function(){return Le(t)},toString:function(){return je(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,a=((n={key:r})[le]=!0,n);return Object.keys(t).forEach((function(e){var r=J[e]||e;if(r===Q||r===H){var n=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=t[e]})),c.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var a=Object.keys(n).filter((function(e){return!(e===Q||e===H)})).reduce((function(e,t){var a=void 0===n[t]?t:t+'="'+fe(n[t],r)+'"';return e?e+" "+a:a}),""),l=n.innerHTML||n.cssText||"",i=-1===ae.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+l+"</"+e+">")}),"")}(e,t,r)}}}},Pe=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,a=e.htmlAttributes,l=e.linkTags,i=e.metaTags,c=e.noscriptTags,o=e.scriptTags,s=e.styleTags,u=e.title,m=void 0===u?"":u,f=e.titleAttributes;return{base:Ie(B.BASE,t,n),bodyAttributes:Ie(_,r,n),htmlAttributes:Ie(D,a,n),link:Ie(B.LINK,l,n),meta:Ie(B.META,i,n),noscript:Ie(B.NOSCRIPT,c,n),script:Ie(B.SCRIPT,o,n),style:Ie(B.STYLE,s,n),title:Ie(B.TITLE,{title:m,titleAttributes:f},n)}},Re=L()((function(e){return{baseTag:Ee([q,X],e),bodyAttributes:he(_,e),defer:ye(e,Z),encode:ye(e,ee),htmlAttributes:he(D,e),linkTags:ge(B.LINK,[W,q],e),metaTags:ge(B.META,[K,F,G,z,Y],e),noscriptTags:ge(B.NOSCRIPT,[Q],e),onChangeClientState:de(e),scriptTags:ge(B.SCRIPT,[V,Q],e),styleTags:ge(B.STYLE,[H],e),title:pe(e),titleAttributes:he(U,e)}}),(function(e){Ne&&Te(Ne),e.defer?Ne=we((function(){Se(e,(function(){Ne=null}))})):(Se(e),Ne=null)}),Pe)((function(){return null})),Me=(a=Re,i=l=function(e){function t(){return ce(this,t),me(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!P()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case B.SCRIPT:case B.NOSCRIPT:return{innerHTML:t};case B.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,a=e.newChildProps,l=e.nestedChildren;return se({},n,((t={})[r.type]=[].concat(n[r.type]||[],[se({},a,this.mapNestedChildrenToProps(r,l))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,a=e.newProps,l=e.newChildProps,i=e.nestedChildren;switch(n.type){case B.TITLE:return se({},a,((t={})[n.type]=i,t.titleAttributes=se({},l),t));case B.BODY:return se({},a,{bodyAttributes:se({},l)});case B.HTML:return se({},a,{htmlAttributes:se({},l)})}return se({},a,((r={})[n.type]=se({},l),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=se({},t);return Object.keys(e).forEach((function(t){var n;r=se({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return c.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,l=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[ne[r]||r]=e[r],t}),t)}(ue(a,["children"]));switch(r.warnOnInvalidChildren(e,l),e.type){case B.LINK:case B.META:case B.NOSCRIPT:case B.SCRIPT:case B.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:i,nestedChildren:l});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:l})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=ue(e,["children"]),n=se({},r);return t&&(n=this.mapChildrenToProps(t,n)),c.createElement(a,n)},oe(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(c.Component),l.propTypes={base:k().object,bodyAttributes:k().object,children:k().oneOfType([k().arrayOf(k().node),k().node]),defaultTitle:k().string,defer:k().bool,encodeSpecialCharacters:k().bool,htmlAttributes:k().object,link:k().arrayOf(k().object),meta:k().arrayOf(k().object),noscript:k().arrayOf(k().object),onChangeClientState:k().func,script:k().arrayOf(k().object),style:k().arrayOf(k().object),title:k().string,titleAttributes:k().object,titleTemplate:k().string},l.defaultProps={defer:!0,encodeSpecialCharacters:!0},l.peek=a.peek,l.rewind=function(){var e=a.rewind();return e||(e=Pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);Me.renderStatic=Me.rewind;var _e=function(){return c.createElement(Me,{htmlAttributes:{lang:"en"},title:"Mingjian Wen"},c.createElement("meta",{name:"description",content:"This is Mingjian Wen's website"}))},De=function(e){var t=e.positions,r=(0,f.useStaticQuery)("2488457095");return c.createElement("div",{id:"position",className:"pt-12"},c.createElement("h2",{className:" text-center pt-8"},"OPENINGS"),c.createElement("div",{className:"flex flex-row justify-center mb-10"},r.file.childrenImageSharp===[]?c.createElement(d,{icon:r.file.childrenImageSharp}):c.createElement(h,{icon:r.file.publicURL})),c.createElement("ul",{className:"sm:w-128 flex mx-auto w-5/6 flex-col"},t.map((function(e){return c.createElement("li",{key:e.id,className:" mb-7"},c.createElement("h2",{className:"text-center sm:text-left people-title pb-2"},e.frontmatter.title),c.createElement("p",null,c.createElement(E.D,{children:e.frontmatter.description,className:"markdown"})))}))))},Ue=r(4845),Be=function(e){var t=e.data,r=t.researchData.nodes,n=t.newsData.nodes,a=t.codeData.nodes,l=t.positionData.nodes,i=(0,Ue.K)(n[0].html);return c.createElement(o.Z,null,c.createElement(_e,null),c.createElement("div",{className:"grid sm:grid-cols-3 gap-10 justify-center sm:mb-11 pb-8 px-8"},c.createElement(b,null),c.createElement(s.J,{news:i})),c.createElement(C,null),c.createElement(w,{researches:r}),c.createElement(g,{codes:a}),c.createElement(De,{positions:l}))}}}]);
//# sourceMappingURL=component---src-pages-index-js-d60d71d6d888a198120c.js.map