(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(3776)}])},8418:function(e,r,t){"use strict";function n(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=[],n=!0,a=!1,s=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(t.push(i.value),!r||t.length!==r);n=!0);}catch(o){a=!0,s=o}finally{try{n||null==c.return||c.return()}finally{if(a)throw s}}return t}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}r.default=void 0;var a,s=(a=t(7294))&&a.__esModule?a:{default:a},i=t(6273),c=t(387),o=t(7190);var l={};function d(e,r,t,n){if(e&&i.isLocalURL(r)){e.prefetch(r,t,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;l[r+"%"+t+(a?"%"+a:"")]=!0}}var u=function(e){var r,t=!1!==e.prefetch,a=c.useRouter(),u=s.default.useMemo((function(){var r=n(i.resolveHref(a,e.href,!0),2),t=r[0],s=r[1];return{href:t,as:e.as?i.resolveHref(a,e.as):s||t}}),[a,e.href,e.as]),h=u.href,f=u.as,m=e.children,p=e.replace,v=e.shallow,x=e.scroll,g=e.locale;"string"===typeof m&&(m=s.default.createElement("a",null,m));var j=(r=s.default.Children.only(m))&&"object"===typeof r&&r.ref,_=n(o.useIntersection({rootMargin:"200px"}),2),y=_[0],N=_[1],b=s.default.useCallback((function(e){y(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[j,y]);s.default.useEffect((function(){var e=N&&t&&i.isLocalURL(h),r="undefined"!==typeof g?g:a&&a.locale,n=l[h+"%"+f+(r?"%"+r:"")];e&&!n&&d(a,h,f,{locale:r})}),[f,h,N,g,t,a]);var w={ref:b,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,t,n,a,s,c,o){("A"!==e.currentTarget.nodeName||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(t))&&(e.preventDefault(),null==c&&n.indexOf("#")>=0&&(c=!1),r[a?"replace":"push"](t,n,{shallow:s,locale:o,scroll:c}))}(e,a,h,f,p,v,x,g)},onMouseEnter:function(e){r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),i.isLocalURL(h)&&d(a,h,f,{priority:!0})}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var H="undefined"!==typeof g?g:a&&a.locale,k=a&&a.isLocaleDomain&&i.getDomainLocale(f,H,a&&a.locales,a&&a.domainLocales);w.href=k||i.addBasePath(i.addLocale(f,H,a&&a.defaultLocale))}return s.default.cloneElement(r,w)};r.default=u},7190:function(e,r,t){"use strict";function n(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=[],n=!0,a=!1,s=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(t.push(i.value),!r||t.length!==r);n=!0);}catch(o){a=!0,s=o}finally{try{n||null==c.return||c.return()}finally{if(a)throw s}}return t}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootMargin,t=e.disabled||!i,o=a.useRef(),l=n(a.useState(!1),2),d=l[0],u=l[1],h=a.useCallback((function(e){o.current&&(o.current(),o.current=void 0),t||d||e&&e.tagName&&(o.current=function(e,r,t){var n=function(e){var r=e.rootMargin||"",t=c.get(r);if(t)return t;var n=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var r=n.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;r&&t&&r(t)}))}),e);return c.set(r,t={id:r,observer:a,elements:n}),t}(t),a=n.id,s=n.observer,i=n.elements;return i.set(e,r),s.observe(e),function(){i.delete(e),s.unobserve(e),0===i.size&&(s.disconnect(),c.delete(a))}}(e,(function(e){return e&&u(e)}),{rootMargin:r}))}),[t,r,d]);return a.useEffect((function(){if(!i&&!d){var e=s.requestIdleCallback((function(){return u(!0)}));return function(){return s.cancelIdleCallback(e)}}}),[d]),[h,d]};var a=t(7294),s=t(9311),i="undefined"!==typeof IntersectionObserver;var c=new Map},3776:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return u}});var n=t(5893),a=t(9008),s=t(214),i=t.n(s),c=t(1664),o=t(5606),l=t.n(o);function d(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"pagewidth",children:(0,n.jsxs)("nav",{className:l().nav,children:[(0,n.jsx)("a",{children:"Base64"}),(0,n.jsx)("a",{className:"text-left ".concat(l().navButtons),children:"Alpha"}),(0,n.jsx)("a",{className:"text-center ".concat(l().navButtons),children:"Portfolio"}),(0,n.jsx)(c.default,{href:"https://discord.gg/fEr3HZN36x",children:(0,n.jsx)("a",{target:"_blank",className:"text-center ".concat(l().navButtons),children:"Discord"})}),(0,n.jsx)(c.default,{href:"https://twitter.com/base64tech",children:(0,n.jsx)("a",{target:"_blank",className:"text-right ".concat(l().navButtons),children:"Twitter"})})]})})})}var u=function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a.default,{children:[(0,n.jsx)("title",{children:"Base64"}),(0,n.jsx)("meta",{name:"description",content:"Base64"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsx)(d,{}),(0,n.jsxs)("main",{className:"pagewidth ".concat(i().main),children:[(0,n.jsxs)("div",{className:i().gridHalves,children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{className:i().h2,children:"Blockchain & Web3"}),(0,n.jsx)("p",{className:i().p,children:"Base64 promotes web3 principals to empower teams with optimized strategies that act as accelerators for their NFT projects. We provide a community incubator where artists and developers can collaborate on their ideas with the support of a team of NFT veterans."})]}),(0,n.jsx)("div",{children:(0,n.jsx)("img",{src:"/assets/img/asset-1.svg"})}),(0,n.jsx)("div",{children:(0,n.jsx)("img",{src:"/assets/img/asset-2.svg"})}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:"text-uppercase ".concat(i().p),children:"OUR AIM IS"}),(0,n.jsx)("h2",{className:i().h2,children:"Bespoke Crypto Experiences"}),(0,n.jsx)("p",{className:i().p,children:"Base64 wants to curate and create best-of-class user experiences, whether working with partners or on our own endeavors. Everyone shall be an enjoyooooorrr!"})]})]}),(0,n.jsxs)("div",{className:"m-y-6",children:[(0,n.jsx)("p",{className:"text-uppercase text-center ".concat(i().p),children:"Our Value"}),(0,n.jsx)("h2",{className:"text-center ".concat(i().h2),style:{marginBottom:"4rem"},children:"What We Offer"}),(0,n.jsxs)("div",{className:i().gridThirds,children:[(0,n.jsx)("div",{children:(0,n.jsxs)("div",{className:i().cardInner,children:[(0,n.jsx)("div",{className:i().cardFront,children:(0,n.jsx)("h3",{className:i().cardHeading,children:"Go-to-market Strategy"})}),(0,n.jsx)("div",{className:i().cardBack,children:(0,n.jsx)("p",{children:"Resilient strategies to help your team adjust and stay ahead of the fast pace of NFTs. Full spectrum approaches that evaluate every critical element of your project, and provide both battle tested and innovative solutions."})})]})}),(0,n.jsx)("div",{children:(0,n.jsxs)("div",{className:i().cardInner,children:[(0,n.jsx)("div",{className:i().cardFront,children:(0,n.jsx)("h3",{className:i().cardHeading,children:"Technology"})}),(0,n.jsx)("div",{className:i().cardBack,children:(0,n.jsx)("p",{children:"Helping teams by providing secure, gas-reduced, and fully optimized solutions that are fit for purpose on mint day, and provide a strong foundation for sustainability and scale into the future."})})]})}),(0,n.jsx)("div",{children:(0,n.jsxs)("div",{className:i().cardInner,children:[(0,n.jsx)("div",{className:i().cardFront,children:(0,n.jsx)("h3",{className:i().cardHeading,children:"Business Strategy"})}),(0,n.jsx)("div",{className:i().cardBack,children:(0,n.jsx)("p",{children:"Bootstrap your ecosystem through partnerships that mutually build on your combined brand. Pursue collaborations to strengthen your tokenomics design, and support a robust circular economy that brings value to all participants."})})]})}),(0,n.jsx)("div",{children:(0,n.jsxs)("div",{className:i().cardInner,children:[(0,n.jsx)("div",{className:i().cardFront,children:(0,n.jsx)("h3",{className:i().cardHeading,children:"Gaming"})}),(0,n.jsx)("div",{className:i().cardBack,children:(0,n.jsx)("p",{children:"Build game designs and puzzles that are interactive and fun, engage the NFT holder through community, and extend into the Metaverse."})})]})}),(0,n.jsx)("div",{children:(0,n.jsxs)("div",{className:i().cardInner,children:[(0,n.jsx)("div",{className:i().cardFront,children:(0,n.jsx)("h3",{className:i().cardHeading,children:"Community"})}),(0,n.jsx)("div",{className:i().cardBack,children:(0,n.jsx)("p",{children:"Create community engagement strategies that feature organic growth, community incentives, and promote loyalty to the brand. All media forms are addressed to ensure maximum exposure across Discord, Twitter, Website and other mediums of user interaction."})})]})}),(0,n.jsx)("div",{children:(0,n.jsxs)("div",{className:i().cardInner,children:[(0,n.jsx)("div",{className:i().cardFront,children:(0,n.jsx)("h3",{className:i().cardHeading,children:"Art"})}),(0,n.jsx)("div",{className:i().cardBack,children:(0,n.jsx)("p",{children:"Direction on emergent art styles preferred by the NFT community, generative patterns and practices, and asset hosting tradeoffs."})})]})}),(0,n.jsx)("div",{style:{backgroundColor:"transparent"}}),(0,n.jsx)("div",{children:(0,n.jsxs)("div",{className:i().cardInner,children:[(0,n.jsx)("div",{className:i().cardFront,children:(0,n.jsx)("h3",{className:i().cardHeading,children:"DeFi"})}),(0,n.jsx)("div",{className:i().cardBack,children:(0,n.jsx)("p",{children:"DeFi2 architectures that embrace market equilibrium and mutual incentive principles for all participants. Avoid mercenary tactics by building them out of your initial designs with proven strategies."})})]})}),(0,n.jsx)("div",{style:{backgroundColor:"transparent"}})]})]})]}),(0,n.jsx)("footer",{className:i().footer,children:(0,n.jsx)("a",{href:"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:"Powered by Base64"})})]})}},5606:function(e){e.exports={nav:"Header_nav__F3t74",navButtons:"Header_navButtons__nhlPt"}},214:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",gridHalves:"Home_gridHalves__CGAqs",gridThirds:"Home_gridThirds__5dO2E",cardInner:"Home_cardInner__944Wt",cardFront:"Home_cardFront__N4LeY",cardBack:"Home_cardBack__katZS",cardHeading:"Home_cardHeading__VD2gS",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb",h2:"Home_h2__6Pq8T",p:"Home_p__4qyJX"}},9008:function(e,r,t){e.exports=t(5443)},1664:function(e,r,t){e.exports=t(8418)}},function(e){e.O(0,[774,888,179],(function(){return r=5301,e(e.s=r);var r}));var r=e.O();_N_E=r}]);