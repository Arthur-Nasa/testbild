(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2167:function(e,a,t){"use strict";var r=t(3848);a.default=void 0;var l,o=(l=t(7294))&&l.__esModule?l:{default:l},n=t(1063),c=t(4651),i=t(7426);var s={};function _(e,a,t,r){if(e&&n.isLocalURL(a)){e.prefetch(a,t,r).catch((function(e){0}));var l=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[a+"%"+t+(l?"%"+l:"")]=!0}}var m=function(e){var a,t=!1!==e.prefetch,l=c.useRouter(),m=o.default.useMemo((function(){var a=n.resolveHref(l,e.href,!0),t=r(a,2),o=t[0],c=t[1];return{href:o,as:e.as?n.resolveHref(l,e.as):c||o}}),[l,e.href,e.as]),p=m.href,d=m.as,f=e.children,g=e.replace,u=e.shallow,v=e.scroll,b=e.locale;"string"===typeof f&&(f=o.default.createElement("a",null,f));var h=(a=o.default.Children.only(f))&&"object"===typeof a&&a.ref,P=i.useIntersection({rootMargin:"200px"}),y=r(P,2),x=y[0],j=y[1],A=o.default.useCallback((function(e){x(e),h&&("function"===typeof h?h(e):"object"===typeof h&&(h.current=e))}),[h,x]);o.default.useEffect((function(){var e=j&&t&&n.isLocalURL(p),a="undefined"!==typeof b?b:l&&l.locale,r=s[p+"%"+d+(a?"%"+a:"")];e&&!r&&_(l,p,d,{locale:a})}),[d,p,j,b,t,l]);var N={ref:A,onClick:function(e){a.props&&"function"===typeof a.props.onClick&&a.props.onClick(e),e.defaultPrevented||function(e,a,t,r,l,o,c,i){("A"!==e.currentTarget.nodeName||!function(e){var a=e.currentTarget.target;return a&&"_self"!==a||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&n.isLocalURL(t))&&(e.preventDefault(),null==c&&r.indexOf("#")>=0&&(c=!1),a[l?"replace":"push"](t,r,{shallow:o,locale:i,scroll:c}))}(e,l,p,d,g,u,v,b)},onMouseEnter:function(e){n.isLocalURL(p)&&(a.props&&"function"===typeof a.props.onMouseEnter&&a.props.onMouseEnter(e),_(l,p,d,{priority:!0}))}};if(e.passHref||"a"===a.type&&!("href"in a.props)){var O="undefined"!==typeof b?b:l&&l.locale,w=l&&l.isLocaleDomain&&n.getDomainLocale(d,O,l&&l.locales,l&&l.domainLocales);N.href=w||n.addBasePath(n.addLocale(d,O,l&&l.defaultLocale))}return o.default.cloneElement(a,N)};a.default=m},7426:function(e,a,t){"use strict";var r=t(3848);Object.defineProperty(a,"__esModule",{value:!0}),a.useIntersection=function(e){var a=e.rootMargin,t=e.disabled||!n,i=l.useRef(),s=l.useState(!1),_=r(s,2),m=_[0],p=_[1],d=l.useCallback((function(e){i.current&&(i.current(),i.current=void 0),t||m||e&&e.tagName&&(i.current=function(e,a,t){var r=function(e){var a=e.rootMargin||"",t=c.get(a);if(t)return t;var r=new Map,l=new IntersectionObserver((function(e){e.forEach((function(e){var a=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;a&&t&&a(t)}))}),e);return c.set(a,t={id:a,observer:l,elements:r}),t}(t),l=r.id,o=r.observer,n=r.elements;return n.set(e,a),o.observe(e),function(){n.delete(e),o.unobserve(e),0===n.size&&(o.disconnect(),c.delete(l))}}(e,(function(e){return e&&p(e)}),{rootMargin:a}))}),[t,a,m]);return l.useEffect((function(){if(!n&&!m){var e=o.requestIdleCallback((function(){return p(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[m]),[d,m]};var l=t(7294),o=t(3447),n="undefined"!==typeof IntersectionObserver;var c=new Map},690:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return he}});var r=t(7294);function l(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,r=new Array(a);t<a;t++)r[t]=e[t];return r}function o(e){return function(e){if(Array.isArray(e))return l(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,a){if(e){if("string"===typeof e)return l(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?l(e,a):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var n=t(9008),c=t(1664),i=t(9328),s=t(2809),_=(t(2974),t(7284)),m=t(9103),p=t(8747),d=new Array,f=new Array("children");var g={root:["root","freeBox"],freeBox:["freeBox"]};function u(e){var a=function(a){var t=(0,i.xf)(a,{name:e,descendantNames:o(g[e]),internalArgPropNames:f,internalVariantPropNames:d});return function(e){e.variants;var a=e.args,t=e.overrides,r=e.forNode;return e.dataFetches,(0,i.eh)("div",{"data-plasmic-name":"root","data-plasmic-override":t.root,"data-plasmic-root":!0,"data-plasmic-for-node":r,className:(0,i.AK)(_.all,m.root_reset,p.root)},(0,i.eh)("div",{"data-plasmic-name":"freeBox","data-plasmic-override":t.freeBox,className:(0,i.AK)(_.all,p.freeBox)},i.nR({defaultContents:(0,i.eh)("div",{className:(0,i.AK)(_.all,_.__wab_text,p.text__vf1TR)},"ABOUT US"),value:a.children})))}({variants:t.variants,args:t.args,overrides:t.overrides,dataFetches:a.dataFetches,forNode:e})};return a.displayName="root"===e?"PlasmicNavigation":"PlasmicNavigation.".concat(e),a}var v=Object.assign(u("root"),{freeBox:u("freeBox"),internalVariantProps:d,internalArgProps:f}),b=t(5893);function h(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function P(e,a){return(0,b.jsx)(v,function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?h(Object(t),!0).forEach((function(a){(0,s.Z)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}({root:{ref:a}},e))}var y=r.forwardRef(P),x=t(702),j=new Array,A=new Array;var N={root:["root","img"],img:["img"]};function O(e){var a=function(a){var t=(0,i.xf)(a,{name:e,descendantNames:o(N[e]),internalArgPropNames:A,internalVariantPropNames:j});return function(e){e.variants,e.args;var a=e.overrides,t=e.forNode;return e.dataFetches,(0,i.eh)("div",{"data-plasmic-name":"root","data-plasmic-override":a.root,"data-plasmic-root":!0,"data-plasmic-for-node":t,className:(0,i.AK)(_.all,m.root_reset,x.root)},(0,i.eh)("img",{"data-plasmic-name":"img","data-plasmic-override":a.img,alt:"",className:(0,i.AK)(_.img,x.img),src:"/plasmic/blank_project/images/logo.jpeg"}))}({variants:t.variants,args:t.args,overrides:t.overrides,dataFetches:a.dataFetches,forNode:e})};return a.displayName="root"===e?"PlasmicLogo":"PlasmicLogo.".concat(e),a}var w=Object.assign(O("root"),{img:O("img"),internalVariantProps:j,internalArgProps:A});function K(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function T(e,a){return(0,b.jsx)(w,function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?K(Object(t),!0).forEach((function(a){(0,s.Z)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):K(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}({root:{ref:a}},e))}var H=r.forwardRef(T),C=t(4423),B=new Array,D=new Array("farFarAwayBehindTheWordMountainsFarFromTheCountriesVokaliaAndConsonantiaThereLiveTheBlindTexts","slot3");var F={root:["root"]};var S=Object.assign(function(e){var a=function(a){var t=(0,i.xf)(a,{name:e,descendantNames:o(F[e]),internalArgPropNames:D,internalVariantPropNames:B});return function(e){e.variants;var a=e.args,t=e.overrides,r=e.forNode;return e.dataFetches,(0,i.eh)("div",{"data-plasmic-name":"root","data-plasmic-override":t.root,"data-plasmic-root":!0,"data-plasmic-for-node":r,className:(0,i.AK)(_.all,m.root_reset,C.root)},(0,i.eh)("div",{className:(0,i.AK)(_.all,C.freeBox___3MJFh)},i.nR({defaultContents:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. ",value:a.farFarAwayBehindTheWordMountainsFarFromTheCountriesVokaliaAndConsonantiaThereLiveTheBlindTexts,className:(0,i.AK)(C.slotTargetFarFarAwayBehindTheWordMountainsFarFromTheCountriesVokaliaAndConsonantiaThereLiveTheBlindTexts)})),(0,i.eh)("div",{className:(0,i.AK)(_.all,C.freeBox___8Mu0)},i.nR({defaultContents:"Our mission is design & develop.",value:a.slot3,className:(0,i.AK)(C.slotTargetSlot3)})))}({variants:t.variants,args:t.args,overrides:t.overrides,dataFetches:a.dataFetches,forNode:e})};return a.displayName="root"===e?"PlasmicTitleSubtitle":"PlasmicTitleSubtitle.".concat(e),a}("root"),{internalVariantProps:B,internalArgProps:D});function k(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function z(e,a){return(0,b.jsx)(S,function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?k(Object(t),!0).forEach((function(a){(0,s.Z)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):k(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}({root:{ref:a}},e))}var E=r.forwardRef(z),L=t(823),R=new Array,M=new Array("children");var Q={root:["root","freeBox","rectangle","rectangle2","rectangle3","button"],freeBox:["freeBox"],rectangle:["rectangle"],rectangle2:["rectangle2"],rectangle3:["rectangle3"],button:["button"]};function V(e){var a=function(a){var t=(0,i.xf)(a,{name:e,descendantNames:o(Q[e]),internalArgPropNames:M,internalVariantPropNames:R});return function(e){e.variants;var a=e.args,t=e.overrides,r=e.forNode;return e.dataFetches,(0,i.eh)(i.Kq,{as:"div","data-plasmic-name":"root","data-plasmic-override":t.root,"data-plasmic-root":!0,"data-plasmic-for-node":r,hasGap:!0,className:(0,i.AK)(_.all,m.root_reset,L.root)},(0,i.eh)("div",{"data-plasmic-name":"freeBox","data-plasmic-override":t.freeBox,className:(0,i.AK)(_.all,L.freeBox)},i.nR({defaultContents:"Apply Now For a Home!",value:a.children,className:(0,i.AK)(L.slotTargetChildren)})),(0,i.eh)("div",{className:(0,i.AK)(_.all,_.__wab_text,L.text__pA1Va)},"Preencha o formul\xe1rio e entraremos em contato"),(0,i.eh)("div",{className:(0,i.AK)(_.all,_.__wab_text,L.text__yDfK4)},"Nome"),(0,i.eh)("div",{"data-plasmic-name":"rectangle","data-plasmic-override":t.rectangle,className:(0,i.AK)(_.all,L.rectangle)}),(0,i.eh)("div",{className:(0,i.AK)(_.all,_.__wab_text,L.text___3Pi20)},"Email *"),(0,i.eh)("div",{"data-plasmic-name":"rectangle2","data-plasmic-override":t.rectangle2,className:(0,i.AK)(_.all,L.rectangle2)}),(0,i.eh)("div",{className:(0,i.AK)(_.all,_.__wab_text,L.text__nPdiO)},"Telefone"),(0,i.eh)("div",{"data-plasmic-name":"rectangle3","data-plasmic-override":t.rectangle3,className:(0,i.AK)(_.all,L.rectangle3)}),(0,i.eh)("button",{"data-plasmic-name":"button","data-plasmic-override":t.button,className:(0,i.AK)(_.button,_.__wab_text,L.button),disabled:!1},"ENVIAR"))}({variants:t.variants,args:t.args,overrides:t.overrides,dataFetches:a.dataFetches,forNode:e})};return a.displayName="root"===e?"PlasmicForm":"PlasmicForm.".concat(e),a}var I=Object.assign(V("root"),{freeBox:V("freeBox"),rectangle:V("rectangle"),rectangle2:V("rectangle2"),rectangle3:V("rectangle3"),button:V("button"),internalVariantProps:R,internalArgProps:M});function q(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function J(e,a){return(0,b.jsx)(I,function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?q(Object(t),!0).forEach((function(a){(0,s.Z)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):q(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}({root:{ref:a}},e))}var U=r.forwardRef(J),G=t(9965);function Z(e,a){if(null==e)return{};var t,r,l=function(e,a){if(null==e)return{};var t,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var W=["className","style","title"];function X(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function Y(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?X(Object(t),!0).forEach((function(a){(0,s.Z)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):X(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var $=function(e){var a=e.className,t=e.style,r=e.title,l=Z(e,W);return(0,b.jsxs)("svg",Y(Y({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 36 36",height:"1em",width:"1em",style:Y({fill:"currentcolor"},t||{}),className:(0,i.AK)("plasmic-default__svg",a)},l),{},{children:[r&&(0,b.jsx)("title",{children:r}),(0,b.jsx)("path",{d:"M21.026 7.06a1.125 1.125 0 10-1.552 1.63l8.63 8.185H5.625a1.125 1.125 0 000 2.25h22.443l-8.594 8.185a1.125 1.125 0 101.552 1.63l9.815-9.35a2.248 2.248 0 00-.02-3.2l-9.795-9.33z",fill:"currentColor"})]}))},ee=new Array,ae=new Array("ourShowcase");var te={root:["root","bg2","svg"],bg2:["bg2","svg"],svg:["svg"]};function re(e){var a=function(a){var t=(0,i.xf)(a,{name:e,descendantNames:o(te[e]),internalArgPropNames:ae,internalVariantPropNames:ee});return function(e){e.variants;var a=e.args,t=e.overrides,r=e.forNode;return e.dataFetches,(0,i.eh)("div",{"data-plasmic-name":"root","data-plasmic-override":t.root,"data-plasmic-root":!0,"data-plasmic-for-node":r,className:(0,i.AK)(_.all,m.root_reset,G.root)},(0,i.eh)("div",{className:(0,i.AK)(_.all,G.freeBox__iiLcS)},(0,i.eh)("div",{"data-plasmic-name":"bg2","data-plasmic-override":t.bg2,className:(0,i.AK)(_.all,G.bg2)},(0,i.eh)($,{"data-plasmic-name":"svg","data-plasmic-override":t.svg,className:(0,i.AK)(_.all,G.svg),role:"img"}),(0,i.eh)("div",{className:(0,i.AK)(_.all,G.freeBox__lJYsk)},i.nR({defaultContents:"CONVERSE COM UM CORRETOR",value:a.ourShowcase,className:(0,i.AK)(G.slotTargetOurShowcase)})))))}({variants:t.variants,args:t.args,overrides:t.overrides,dataFetches:a.dataFetches,forNode:e})};return a.displayName="root"===e?"PlasmicBotao":"PlasmicBotao.".concat(e),a}var le=Object.assign(re("root"),{bg2:re("bg2"),svg:re("svg"),internalVariantProps:ee,internalArgProps:ae});function oe(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function ne(e,a){return(0,b.jsx)(le,function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?oe(Object(t),!0).forEach((function(a){(0,s.Z)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):oe(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}({root:{ref:a}},e))}var ce=r.forwardRef(ne);var ie=i.Hf(!0,{mobileOnly:"(min-width:0px) and (max-width:800px)",desktop:"(max-width:1920px)"}),se=t(7142),_e=["className","style","title"];function me(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function pe(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?me(Object(t),!0).forEach((function(a){(0,s.Z)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):me(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var de=function(e){var a=e.className,t=e.style,r=e.title,l=Z(e,_e);return(0,b.jsxs)("svg",pe(pe({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 16 16",height:"1em",width:"1em",style:pe({fill:"currentcolor"},t||{}),className:(0,i.AK)("plasmic-default__svg",a)},l),{},{children:[r&&(0,b.jsx)("title",{children:r}),(0,b.jsx)("path",{d:"M10.195 4.471a.667.667 0 01.943-.942l4 4c.26.26.26.682 0 .942l-4 4a.667.667 0 11-.943-.942l2.862-2.862H1.341A.67.67 0 01.667 8a.67.67 0 01.674-.667h11.716l-2.862-2.862z",fill:"currentColor"})]}))},fe=new Array,ge=new Array("children","farFarAwayBehindTheWordMountainsFarFromTheCountriesVokaliaAndConsonantiaThereLiveTheBlindTexts","slot3","children2");var ue={root:["root","banner","bg","logo","titleSubtitle","form","botao","frame8","rectangle8","frame","rectangle","frame5","rectangle5","frame6","rectangle6","frame4","rectangle4","frame2","rectangle2","frame12","rectangle12","frame3","rectangle3","frame14","rectangle14","frame13","rectangle13","frame10","rectangle10","frame7","rectangle7","frame11","rectangle11","frame9","rectangle9","frame15","rectangle15","project","projectCover","bg2","projectDetails","projectTitleDescription","projectTitle","projectDescription","button","label","svg"],banner:["banner","bg","logo","titleSubtitle","form","botao"],bg:["bg","logo","titleSubtitle","form","botao"],logo:["logo"],titleSubtitle:["titleSubtitle"],form:["form"],botao:["botao"],frame8:["frame8","rectangle8"],rectangle8:["rectangle8"],frame:["frame","rectangle"],rectangle:["rectangle"],frame5:["frame5","rectangle5"],rectangle5:["rectangle5"],frame6:["frame6","rectangle6"],rectangle6:["rectangle6"],frame4:["frame4","rectangle4"],rectangle4:["rectangle4"],frame2:["frame2","rectangle2"],rectangle2:["rectangle2"],frame12:["frame12","rectangle12"],rectangle12:["rectangle12"],frame3:["frame3","rectangle3"],rectangle3:["rectangle3"],frame14:["frame14","rectangle14"],rectangle14:["rectangle14"],frame13:["frame13","rectangle13"],rectangle13:["rectangle13"],frame10:["frame10","rectangle10"],rectangle10:["rectangle10"],frame7:["frame7","rectangle7"],rectangle7:["rectangle7"],frame11:["frame11","rectangle11"],rectangle11:["rectangle11"],frame9:["frame9","rectangle9"],rectangle9:["rectangle9"],frame15:["frame15","rectangle15"],rectangle15:["rectangle15"],project:["project","projectCover","bg2","projectDetails","projectTitleDescription","projectTitle","projectDescription","button","label","svg"],projectCover:["projectCover","bg2"],bg2:["bg2"],projectDetails:["projectDetails","projectTitleDescription","projectTitle","projectDescription","button","label","svg"],projectTitleDescription:["projectTitleDescription","projectTitle","projectDescription"],projectTitle:["projectTitle"],projectDescription:["projectDescription"],button:["button","label","svg"],label:["label"],svg:["svg"]};function ve(e){var a=function(a){var t=(0,i.xf)(a,{name:e,descendantNames:o(ue[e]),internalArgPropNames:ge,internalVariantPropNames:fe});return function(e){e.variants;var a=e.args,t=e.overrides,l=e.forNode,o=(e.dataFetches,(0,i.LK)({screen:ie()}));return(0,i.eh)(r.Fragment,null,(0,i.eh)(n.default,null,(0,i.eh)("title",{key:"title"},""),(0,i.eh)("meta",{key:"og:title",property:"og:title",content:""}),(0,i.eh)("meta",{key:"description",name:"description",property:"og:description",content:""})),(0,i.eh)("style",null,"\n        body {\n          margin: 0;\n        }\n      "),(0,i.eh)("div",{className:_.plasmic_page_wrapper},(0,i.eh)("div",{"data-plasmic-name":"root","data-plasmic-override":t.root,"data-plasmic-root":!0,"data-plasmic-for-node":l,className:(0,i.AK)(_.all,m.root_reset,se.root)},(0,i.zK)(o,"screen","mobileOnly")?(0,i.eh)(y,{className:(0,i.AK)("__wab_instance",se.navigation__nJdmI)},i.nR({defaultContents:(0,i.eh)(i.L,{className:(0,i.AK)(_.all,_.__wab_text,se.link__e4P1H),component:c.default,href:"https://www.plasmic.app/",platform:"nextjs"},"Politica de Privacidade"),value:a.children2})):null,(0,i.eh)("div",{"data-plasmic-name":"banner","data-plasmic-override":t.banner,className:(0,i.AK)(_.all,se.banner)},(0,i.eh)(i.Kq,{as:"div","data-plasmic-name":"bg","data-plasmic-override":t.bg,hasGap:!0,className:(0,i.AK)(_.all,se.bg)},(0,i.eh)("div",{className:(0,i.AK)(_.all,se.freeBox___3RtFf)},(0,i.eh)(H,{"data-plasmic-name":"logo","data-plasmic-override":t.logo,className:(0,i.AK)("__wab_instance",se.logo)}),(0,i.eh)(y,{className:(0,i.AK)("__wab_instance",se.navigation__raeq6)},i.nR({defaultContents:(0,i.eh)(i.L,{className:(0,i.AK)(_.all,_.__wab_text,se.link___6S3Tg),component:c.default,href:"https://www.plasmic.app/",platform:"nextjs"},"Politica de Privacidade"),value:a.children}))),(0,i.eh)(i.Kq,{as:"div",hasGap:!0,className:(0,i.AK)(_.all,se.columns__zQzMh)},(0,i.eh)("div",{className:(0,i.AK)(_.all,se.column__xxgqt)},(0,i.eh)(E,{"data-plasmic-name":"titleSubtitle","data-plasmic-override":t.titleSubtitle,className:(0,i.AK)("__wab_instance",se.titleSubtitle),farFarAwayBehindTheWordMountainsFarFromTheCountriesVokaliaAndConsonantiaThereLiveTheBlindTexts:i.nR({defaultContents:"Um projeto completo pra voc\xea morar bem, com 12 op\xe7\xf5es de plantas, torre \xfanica e em uma excelente localiza\xe7\xe3o. Oben, muito acima do comum.",value:a.farFarAwayBehindTheWordMountainsFarFromTheCountriesVokaliaAndConsonantiaThereLiveTheBlindTexts}),slot3:i.nR({defaultContents:"Conhe\xe7a o Oben ",value:a.slot3})})),(0,i.eh)("div",{className:(0,i.AK)(_.all,se.column___8Bcnx)},(0,i.eh)(U,{"data-plasmic-name":"form","data-plasmic-override":t.form,className:(0,i.AK)("__wab_instance",se.form)},(0,i.eh)("div",{className:(0,i.AK)(_.all,_.__wab_text,se.text__z6Nuy)},"Preencha o Formul\xe1rio")))),((0,i.zK)(o,"screen","mobileOnly"),(0,i.eh)(ce,{"data-plasmic-name":"botao","data-plasmic-override":t.botao,className:(0,i.AK)("__wab_instance",se.botao),ourShowcase:"CONVERSE COM UM CORRETOR"})))),(0,i.eh)("div",{className:(0,i.AK)(_.all,se.freeBox__pKhgU)},(0,i.eh)("div",{className:(0,i.AK)(_.all,se.freeBox__yCg5A)},(0,i.eh)("div",{className:(0,i.AK)(_.all,_.__wab_text,se.text__npKQc)},"DIFERENCIAIS")),(0,i.eh)(i.Kq,{as:"div",hasGap:!0,className:(0,i.AK)(_.all,se.freeBox__sXeOz)},(0,i.eh)(i.Kq,{as:"div",hasGap:!0,className:(0,i.AK)(_.all,se.columns__ko6O0)},(0,i.eh)("div",{className:(0,i.AK)(_.all,se.column__gqib0)},(0,i.eh)("div",{"data-plasmic-name":"frame8","data-plasmic-override":t.frame8,className:(0,i.AK)(_.all,se.frame8)},(0,i.eh)("div",{"data-plasmic-name":"rectangle8","data-plasmic-override":t.rectangle8,className:(0,i.AK)(_.all,se.rectangle8)}),(0,i.eh)("div",{className:(0,i.AK)(_.all,_.__wab_text,se.text__lATer)},"Medidores individuais para energia, \xe1gua e g\xe1s")),(0,i.eh)("div",{"data-plasmic-name":"frame","data-plasmic-override":t.frame,className:(0,i.AK)(_.all,se.frame)},(0,i.eh)("div",{"data-plasmic-name":"rectangle","data-plasmic-override":t.rectangle,className:(0,i.AK)(_.all,se.rectangle)}),(0,i.eh)("div",{className:(0,i.AK)(_.all,_.__wab_text,se.text__yQzk7)},"Antissuc\xe7\xe3o piscina")),(0,i.eh)("div",{"data-plasmic-name":"frame5","data-plasmic-override":t.frame5,className:(0,i.AK)(_.all,se.frame5)},(0,i.eh)("div",{"data-plasmic-name":"rectangle5","data-plasmic-override":t.rectangle5,className:(0,i.AK)(_.all,se.rectangle5)}),(0,i.eh)("div",{className:(0,i.AK)(_.all,_.__wab_text,se.text__wlXjy)},"Descarte seletivo")),(0,i.eh)("div",{"data-plasmic-name":"frame6","data-plasmic-override":t.frame6,className:(0,i.AK)(_.all,se.frame6)},(0,i.eh)("div",{"data-plasmic-name":"rectangle6","data-plasmic-override":t.rectangle6,className:(0,i.AK)(_.all,se.rectangle6)}),(0,i.eh)("div",{className:(0,i.AK)(_.all,_.__wab_text,se.text___84Br)},"Sistema dual flush")),(0,i.eh)("div",{"data-plasmic-name":"frame4","data-plasmic-override":t.frame4,className:(0,i.AK)(_.all,se.frame4)},(0,i.eh)("div",{"data-plasmic-name":"rectangle4","data-plasmic-override":t.rectangle4,className:(0,i.AK)(_.all,se.rectangle4)}),(0,i.eh)("div",{className:(0,i.AK)(_.all,_.__wab_text,se.text__bfKx0)},"\xc1reas de lazer entregues equipadas e decoradas")),(0,i.eh)("div",{"data-plasmic-name":"frame2","data-plasmic-override":t.frame2,className:(0,i.AK)(_.all,se.frame2)},(0,i.eh)("div",{"data-plasmic-name":"rectangle2","data-plasmic-override":t.rectangle2,className:(0,i.AK)(_.all,se.rectangle2)}),(0,i.eh)("div",{className:(0,i.AK)(_.all,_.__wab_text,se.text__azPc4)},"Automa\xe7\xe3o das \xe1reas comuns")),(0,i.eh)("div",{"data-plasmic-name":"frame12","data-plasmic-override":t.frame12,className:(0,i.AK)(_.all,se.frame12)},(0,i.eh)("div",{"data-plasmic-name":"rectangle12","data-plasmic-override":t.rectangle12,className:(0,i.AK)(_.all,se.rectangle12)}),(0,i.eh)("div",{className:(0,i.AK)(_.all,_.__wab_text,se.text__tEzo8)},"Wifi nas \xe1reas de lazer")),(0,i.eh)("div",{"data-plasmic-name":"frame3","data-plasmic-override":t.frame3,className:(0,i.AK)(_.all,se.frame3)},(0,i.eh)("div",{"data-plasmic-name":"rectangle3","data-plasmic-override":t.rectangle3,className:(0,i.AK)(_.all,se.rectangle3)}),(0,i.eh)("div",{className:(0,i.AK)(_.all,_.__wab_text,se.text___77Ymy)},"Ambientes internos de lazer climatizados"))),(0,i.eh)("div",{className:(0,i.AK)(_.all,se.column__lN1Gc)},(0,i.eh)("div",{"data-plasmic-name":"frame14","data-plasmic-override":t.frame14,className:(0,i.AK)(_.all,se.frame14)},(0,i.eh)("div",{"data-plasmic-name":"rectangle14","data-plasmic-override":t.rectangle14,className:(0,i.AK)(_.all,se.rectangle14)}),(0,i.eh)("div",{className:(0,i.AK)(_.all,_.__wab_text,se.text__jAtgL)},"Ponto para carga de carro el\xe9trico.")),(0,i.eh)("div",{"data-plasmic-name":"frame13","data-plasmic-override":t.frame13,className:(0,i.AK)(_.all,se.frame13)},(0,i.eh)("div",{"data-plasmic-name":"rectangle13","data-plasmic-override":t.rectangle13,className:(0,i.AK)(_.all,se.rectangle13)}),(0,i.eh)("div",{className:(0,i.AK)(_.all,_.__wab_text,se.text___6Cgif)},((0,i.zK)(o,"screen","mobileOnly"),"Torneiras com temporizador nos sanit\xe1rios das \xe1reas de lazer"))),(0,i.eh)("div",{"data-plasmic-name":"frame10","data-plasmic-override":t.frame10,className:(0,i.AK)(_.all,se.frame10)},(0,i.eh)("div",{"data-plasmic-name":"rectangle10","data-plasmic-override":t.rectangle10,className:(0,i.AK)(_.all,se.rectangle10)}),(0,i.eh)("div",{className:(0,i.AK)(_.all,_.__wab_text,se.text__tp3C)},"Estacionamento coberto")),(0,i.eh)("div",{"data-plasmic-name":"frame7","data-plasmic-override":t.frame7,className:(0,i.AK)(_.all,se.frame7)},(0,i.eh)("div",{"data-plasmic-name":"rectangle7","data-plasmic-override":t.rectangle7,className:(0,i.AK)(_.all,se.rectangle7)}),(0,i.eh)("div",{className:(0,i.AK)(_.all,_.__wab_text,se.text__krJnr)},"Portas e guarni\xe7\xf5es com madeira certificada")),(0,i.eh)("div",{"data-plasmic-name":"frame11","data-plasmic-override":t.frame11,className:(0,i.AK)(_.all,se.frame11)},(0,i.eh)("div",{"data-plasmic-name":"rectangle11","data-plasmic-override":t.rectangle11,className:(0,i.AK)(_.all,se.rectangle11)}),(0,i.eh)("div",{className:(0,i.AK)(_.all,_.__wab_text,se.text__mArBc)},"Esquadrias integradas com venezianas deslizantes nos dormit\xf3rios")),(0,i.eh)("div",{"data-plasmic-name":"frame9","data-plasmic-override":t.frame9,className:(0,i.AK)(_.all,se.frame9)},(0,i.eh)("div",{"data-plasmic-name":"rectangle9","data-plasmic-override":t.rectangle9,className:(0,i.AK)(_.all,se.rectangle9)}),(0,i.eh)("div",{className:(0,i.AK)(_.all,_.__wab_text,se.text__cZbtk)},"Sensores de presen\xe7a nas \xe1reas comuns")),(0,i.eh)("div",{"data-plasmic-name":"frame15","data-plasmic-override":t.frame15,className:(0,i.AK)(_.all,se.frame15)},(0,i.eh)("div",{"data-plasmic-name":"rectangle15","data-plasmic-override":t.rectangle15,className:(0,i.AK)(_.all,se.rectangle15)}),(0,i.eh)("div",{className:(0,i.AK)(_.all,_.__wab_text,se.text___12J8L)},"Entradas independentes para moradores, visitantes e servi\xe7os com espera")))))),(0,i.eh)("div",{className:(0,i.AK)(_.all,se.freeBox__klKyI)},(0,i.eh)("div",{"data-plasmic-name":"project","data-plasmic-override":t.project,className:(0,i.AK)(_.all,se.project)},(0,i.eh)("div",{"data-plasmic-name":"projectCover","data-plasmic-override":t.projectCover,className:(0,i.AK)(_.all,se.projectCover)},(0,i.eh)("div",{"data-plasmic-name":"bg2","data-plasmic-override":t.bg2,className:(0,i.AK)(_.all,se.bg2)})),(0,i.eh)(i.Kq,{as:"div","data-plasmic-name":"projectDetails","data-plasmic-override":t.projectDetails,hasGap:!0,className:(0,i.AK)(_.all,se.projectDetails)},(0,i.eh)(i.Kq,{as:"div","data-plasmic-name":"projectTitleDescription","data-plasmic-override":t.projectTitleDescription,hasGap:!0,className:(0,i.AK)(_.all,se.projectTitleDescription)},(0,i.eh)("div",{"data-plasmic-name":"projectTitle","data-plasmic-override":t.projectTitle,className:(0,i.AK)(_.all,_.__wab_text,se.projectTitle)},"Project Tite"),(0,i.eh)("div",{"data-plasmic-name":"projectDescription","data-plasmic-override":t.projectDescription,className:(0,i.AK)(_.all,_.__wab_text,se.projectDescription)},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, fermentum amet faucibus sed id nisi lectus at.")),(0,i.eh)(i.Kq,{as:"div","data-plasmic-name":"button","data-plasmic-override":t.button,hasGap:!0,className:(0,i.AK)(_.all,se.button)},(0,i.eh)("div",{"data-plasmic-name":"label","data-plasmic-override":t.label,className:(0,i.AK)(_.all,_.__wab_text,se.label)},"Get started"),(0,i.eh)(de,{"data-plasmic-name":"svg","data-plasmic-override":t.svg,className:(0,i.AK)(_.all,se.svg),role:"img"}))))))))}({variants:t.variants,args:t.args,overrides:t.overrides,dataFetches:a.dataFetches,forNode:e})};return a.displayName="root"===e?"PlasmicHomepage":"PlasmicHomepage.".concat(e),a}var be=Object.assign(ve("root"),{banner:ve("banner"),bg:ve("bg"),logo:ve("logo"),titleSubtitle:ve("titleSubtitle"),form:ve("form"),botao:ve("botao"),frame8:ve("frame8"),rectangle8:ve("rectangle8"),frame:ve("frame"),rectangle:ve("rectangle"),frame5:ve("frame5"),rectangle5:ve("rectangle5"),frame6:ve("frame6"),rectangle6:ve("rectangle6"),frame4:ve("frame4"),rectangle4:ve("rectangle4"),frame2:ve("frame2"),rectangle2:ve("rectangle2"),frame12:ve("frame12"),rectangle12:ve("rectangle12"),frame3:ve("frame3"),rectangle3:ve("rectangle3"),frame14:ve("frame14"),rectangle14:ve("rectangle14"),frame13:ve("frame13"),rectangle13:ve("rectangle13"),frame10:ve("frame10"),rectangle10:ve("rectangle10"),frame7:ve("frame7"),rectangle7:ve("rectangle7"),frame11:ve("frame11"),rectangle11:ve("rectangle11"),frame9:ve("frame9"),rectangle9:ve("rectangle9"),frame15:ve("frame15"),rectangle15:ve("rectangle15"),project:ve("project"),projectCover:ve("projectCover"),bg2:ve("bg2"),projectDetails:ve("projectDetails"),projectTitleDescription:ve("projectTitleDescription"),projectTitle:ve("projectTitle"),projectDescription:ve("projectDescription"),button:ve("button"),label:ve("label"),svg:ve("svg"),internalVariantProps:fe,internalArgProps:ge});var he=function(){return(0,b.jsx)(be,{})}},5301:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(690)}])},9965:function(e){e.exports={root:"PlasmicBotao_root__gGn76",freeBox__iiLcS:"PlasmicBotao_freeBox__iiLcS__c-fsd",bg2:"PlasmicBotao_bg2__3BQm-",svg:"PlasmicBotao_svg__1ww9B",freeBox__lJYsk:"PlasmicBotao_freeBox__lJYsk__3F6ev",slotTargetOurShowcase:"PlasmicBotao_slotTargetOurShowcase__3oXhl"}},823:function(e){e.exports={root:"PlasmicForm_root__1gVHA",freeBox:"PlasmicForm_freeBox__29_Ip",slotTargetChildren:"PlasmicForm_slotTargetChildren__3YEb3",text__pA1Va:"PlasmicForm_text__pA1Va__J7G24",text__yDfK4:"PlasmicForm_text__yDfK4__13bve",rectangle:"PlasmicForm_rectangle__4bw3t",text___3Pi20:"PlasmicForm_text___3Pi20__3iiWt",rectangle2:"PlasmicForm_rectangle2__3_7b_",text__nPdiO:"PlasmicForm_text__nPdiO__A9blw",rectangle3:"PlasmicForm_rectangle3__1QBia",button:"PlasmicForm_button__1uiwX"}},7142:function(e){e.exports={root:"PlasmicHomepage_root__HBlX_",navigation__nJdmI:"PlasmicHomepage_navigation__nJdmI__3r_Fb",link__e4P1H:"PlasmicHomepage_link__e4P1H__3iHPj",banner:"PlasmicHomepage_banner__3ApcW",bg:"PlasmicHomepage_bg__2PHkz",freeBox___3RtFf:"PlasmicHomepage_freeBox___3RtFf__1Wng1",logo:"PlasmicHomepage_logo__5znvM",navigation__raeq6:"PlasmicHomepage_navigation__raeq6__2cTF0",link___6S3Tg:"PlasmicHomepage_link___6S3Tg__3pTjk",columns__zQzMh:"PlasmicHomepage_columns__zQzMh__mn5Wg",column__xxgqt:"PlasmicHomepage_column__xxgqt__u7QgA",titleSubtitle:"PlasmicHomepage_titleSubtitle__3yZS8",column___8Bcnx:"PlasmicHomepage_column___8Bcnx__2xln9",form:"PlasmicHomepage_form__chOf-",text__z6Nuy:"PlasmicHomepage_text__z6Nuy__3UKL7",botao:"PlasmicHomepage_botao__1phna",freeBox__pKhgU:"PlasmicHomepage_freeBox__pKhgU__13Lv6",freeBox__yCg5A:"PlasmicHomepage_freeBox__yCg5A__1TFRt",text__npKQc:"PlasmicHomepage_text__npKQc__1kzPV",freeBox__sXeOz:"PlasmicHomepage_freeBox__sXeOz__2flvR",columns__ko6O0:"PlasmicHomepage_columns__ko6O0__3jt0A",column__gqib0:"PlasmicHomepage_column__gqib0__3bOpg",frame8:"PlasmicHomepage_frame8__3WjEx",rectangle8:"PlasmicHomepage_rectangle8__2r-bq",text__lATer:"PlasmicHomepage_text__lATer__3Nb59",frame:"PlasmicHomepage_frame__2GKa2",rectangle:"PlasmicHomepage_rectangle__1RK79",text__yQzk7:"PlasmicHomepage_text__yQzk7__odN2I",frame5:"PlasmicHomepage_frame5__6Bg7M",rectangle5:"PlasmicHomepage_rectangle5__1A_57",text__wlXjy:"PlasmicHomepage_text__wlXjy__1hsIL",frame6:"PlasmicHomepage_frame6__35UpD",rectangle6:"PlasmicHomepage_rectangle6__38ATH",text___84Br:"PlasmicHomepage_text___84Br__2dciU",frame4:"PlasmicHomepage_frame4__2Loo3",rectangle4:"PlasmicHomepage_rectangle4__1AF6C",text__bfKx0:"PlasmicHomepage_text__bfKx0__3kFl9",frame2:"PlasmicHomepage_frame2__3LKcZ",rectangle2:"PlasmicHomepage_rectangle2__vJR5m",text__azPc4:"PlasmicHomepage_text__azPc4__3A0vV",frame12:"PlasmicHomepage_frame12__3LrTk",rectangle12:"PlasmicHomepage_rectangle12__3J1I9",text__tEzo8:"PlasmicHomepage_text__tEzo8__U_GsM",frame3:"PlasmicHomepage_frame3__1O76V",rectangle3:"PlasmicHomepage_rectangle3__15zhD",text___77Ymy:"PlasmicHomepage_text___77Ymy__3uc-c",column__lN1Gc:"PlasmicHomepage_column__lN1Gc__SfyCS",frame14:"PlasmicHomepage_frame14__3ZAy_",rectangle14:"PlasmicHomepage_rectangle14__Uiyjp",text__jAtgL:"PlasmicHomepage_text__jAtgL__G8-4G",frame13:"PlasmicHomepage_frame13__1V-tE",rectangle13:"PlasmicHomepage_rectangle13__24f82",text___6Cgif:"PlasmicHomepage_text___6Cgif__10rk4",frame10:"PlasmicHomepage_frame10__2-hr4",rectangle10:"PlasmicHomepage_rectangle10__1Q-ek",text__tp3C:"PlasmicHomepage_text__tp3C__3k18j",frame7:"PlasmicHomepage_frame7__2EVOT",rectangle7:"PlasmicHomepage_rectangle7__2THxj",text__krJnr:"PlasmicHomepage_text__krJnr__1-Osf",frame11:"PlasmicHomepage_frame11__22Mjt",rectangle11:"PlasmicHomepage_rectangle11__2tIDc",text__mArBc:"PlasmicHomepage_text__mArBc__39aTF",frame9:"PlasmicHomepage_frame9__1IL_T",rectangle9:"PlasmicHomepage_rectangle9__37w_x",text__cZbtk:"PlasmicHomepage_text__cZbtk__qUAHr",frame15:"PlasmicHomepage_frame15__2dLv_",rectangle15:"PlasmicHomepage_rectangle15__1OB1T",text___12J8L:"PlasmicHomepage_text___12J8L__3SAc6",freeBox__klKyI:"PlasmicHomepage_freeBox__klKyI__MGb-g",project:"PlasmicHomepage_project__2qJXx",projectCover:"PlasmicHomepage_projectCover__3bs-P",bg2:"PlasmicHomepage_bg2__3GHcs",projectDetails:"PlasmicHomepage_projectDetails__1ZODR",projectTitleDescription:"PlasmicHomepage_projectTitleDescription__3fC_5",projectTitle:"PlasmicHomepage_projectTitle__80D4m",projectDescription:"PlasmicHomepage_projectDescription__2LPbO",button:"PlasmicHomepage_button__30Zvy",label:"PlasmicHomepage_label__3Uzq_",svg:"PlasmicHomepage_svg__2iD33"}},702:function(e){e.exports={root:"PlasmicLogo_root__3lvrP",img:"PlasmicLogo_img__1TQJE","__wab_img-spacer":"PlasmicLogo___wab_img-spacer__2uiAq"}},8747:function(e){e.exports={root:"PlasmicNavigation_root__3cA7Q",freeBox:"PlasmicNavigation_freeBox__2D-Cd",text__vf1TR:"PlasmicNavigation_text__vf1TR__19AcW"}},4423:function(e){e.exports={root:"PlasmicTitleSubtitle_root__2Nwnb",freeBox___3MJFh:"PlasmicTitleSubtitle_freeBox___3MJFh__1pcbX",slotTargetFarFarAwayBehindTheWordMountainsFarFromTheCountriesVokaliaAndConsonantiaThereLiveTheBlindTexts:"PlasmicTitleSubtitle_slotTargetFarFarAwayBehindTheWordMountainsFarFromTheCountriesVokaliaAndConsonantiaThereLiveTheBlindTexts__2JSfR",freeBox___8Mu0:"PlasmicTitleSubtitle_freeBox___8Mu0__2iE7y",slotTargetSlot3:"PlasmicTitleSubtitle_slotTargetSlot3__10TyB"}},9103:function(e){e.exports={root_reset:"plasmic_blank_project_root_reset__25rpu"}},7284:function(e){e.exports={all:"plasmic__default_style_all__1QizC",img:"plasmic__default_style_img__3g8in plasmic__default_style_all__1QizC",span:"plasmic__default_style_span__2zDQq plasmic__default_style_all__1QizC",input:"plasmic__default_style_input__1SIfv plasmic__default_style_all__1QizC",textarea:"plasmic__default_style_textarea__aORkV plasmic__default_style_all__1QizC",button:"plasmic__default_style_button__3IN4h plasmic__default_style_all__1QizC",code:"plasmic__default_style_code__Sz3Ne plasmic__default_style_all__1QizC",pre:"plasmic__default_style_pre__2L7Pg plasmic__default_style_all__1QizC",p:"plasmic__default_style_p__2Ks8w plasmic__default_style_all__1QizC",h1:"plasmic__default_style_h1__18nhR plasmic__default_style_all__1QizC",h2:"plasmic__default_style_h2__u_nut plasmic__default_style_all__1QizC",h3:"plasmic__default_style_h3__2rKIU plasmic__default_style_all__1QizC",h4:"plasmic__default_style_h4__102jt plasmic__default_style_all__1QizC",h5:"plasmic__default_style_h5__2T8ui plasmic__default_style_all__1QizC",h6:"plasmic__default_style_h6__26ghp plasmic__default_style_all__1QizC",address:"plasmic__default_style_address__3e6gS plasmic__default_style_all__1QizC",ol:"plasmic__default_style_ol__cfuZ8 plasmic__default_style_all__1QizC",ul:"plasmic__default_style_ul__2EsAM plasmic__default_style_all__1QizC",select:"plasmic__default_style_select__26-_r plasmic__default_style_all__1QizC",li:"plasmic__default_style_li__24ESa plasmic__default_style_all__1QizC",plasmic_default__component_wrapper:"plasmic__default_style_plasmic_default__component_wrapper__3qif4",__wab_text:"plasmic__default_style___wab_text__1BDc3",plasmic_page_wrapper:"plasmic__default_style_plasmic_page_wrapper__17wzu"}},2974:function(){},9008:function(e,a,t){e.exports=t(639)},1664:function(e,a,t){e.exports=t(2167)}},function(e){e.O(0,[774,888,179],(function(){return a=5301,e(e.s=a);var a}));var a=e.O();_N_E=a}]);