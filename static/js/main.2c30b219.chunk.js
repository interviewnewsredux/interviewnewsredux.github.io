(window["webpackJsonpmy-app"]=window["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,t){e.exports={APIKey:"b5e5c8f361424ccab40c738aef523780",page_size:10,domain:"washingtonpost.com,nytimes.com"}},20:function(e,t,a){e.exports=a(34)},25:function(e,t,a){},26:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),o=a.n(c),s=(a(25),a(26),a(27),a(5)),i=a(6),l=a(8),u=a(7),d=a(9),p=a(2),h=a(11),m=a.n(h),f=a(3),g=a(17),v=a(18);function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function y(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(a,!0).forEach((function(t){Object(v.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var E={data:[],loading:!0,page:1,search:"",error:!1,totalResults:9999},O=Object(f.c)({fetch:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CLEAR_DATA":return y({},e,{data:[],loading:!0,page:t.page,search:t.search,error:!1});case"NEW_FETCH_API":return y({},e,{data:t.payload.articles,loading:!1,page:t.page,search:t.search,error:!1,totalResults:t.payload.totalResults});case"FETCH_API_PAGINATION":return y({},e,{data:e.data.concat(t.payload.articles),loading:!1,page:t.page,search:t.search,error:!1,totalResults:t.payload.totalResults});case"LOAD_FROM_STORE":return y({},e,{data:t.payload,loading:!1,page:t.page,search:t.search,error:!0,totalResults:t.payload.totalResults});case"LOADING_API":return y({},e,{loading:!0});case"API_ERROR":return y({},e,{error:!0});default:return e}}});function w(){try{var e=localStorage.getItem("state");if(null===e)return;return console.log(JSON.parse(e)),JSON.parse(e)}catch(t){return void console.log(t)}}var N=[g.a],A=Object(f.e)(O,{},Object(f.d)(f.a.apply(void 0,N)));A.subscribe((function(){var e=A.getState();if(!e.fetch.error&&!e.fetch.loading)try{e.fetch.data.length>=1&&function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(a){console.log(a)}}(e)}catch(t){console.log(t)}}));var j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return function(a){a(1===t?{type:"CLEAR_DATA",loading:!0,payload:{},page:t}:{type:"LOADING_API",loading:!0,page:t}),fetch("https://newsapi.org/v2/everything?"+"domains=".concat(m.a.domain)+"&apiKey=".concat(m.a.APIKey)+"&pageSize=".concat(m.a.page_size)+"&page=".concat(t)+"&q=".concat(e)).then((function(e){return e.json()})).then((function(n){"error"===n.status?a({type:"API_ERROR",payload:n,search:e,page:t,loading:!1}):a(1===t?{type:"NEW_FETCH_API",payload:n,search:e,page:t,loading:!1}:{type:"FETCH_API_PAGINATION",payload:n,search:e,page:t,loading:!1})})).catch((function(e){console.log(e);var t=w();a({type:"LOAD_FROM_STORE",payload:t.fetch.data,search:t.fetch.search,page:t.fetch.page,loading:!1,error:!0})}))}},P=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"control has-icons-left has-icons-right is-flex"},r.a.createElement("input",{className:"input",type:"text",placeholder:"Search",id:"searchBox",onKeyPress:function(t){"Enter"===t.key&&e.props.fetchAPI(t.target.value,1)},onChange:function(t){return e.props.fetchAPI(t.target.value,1)}}),r.a.createElement("span",{className:"icon is-medium is-left"},r.a.createElement("i",{className:"fas fa-search clickableIcon"})))}}]),t}(n.Component),I=Object(p.b)(null,{fetchAPI:j})(P);var R=function(){return r.a.createElement("nav",{className:"navbar is-transparent is-fixed-top headerBg level"},r.a.createElement("div",{className:"navbar-brand headerBg"},r.a.createElement("h1",{className:"navbar-item has-text-white"},"US News")),r.a.createElement("div",{className:"navbar-menu is-active headerBg"},r.a.createElement("div",{className:"navbar-end"},r.a.createElement("div",{className:"navbar-item"},r.a.createElement(I,null)))))},k=a(19),_=a.n(k);var S={"The Washington Post":"https://user-images.githubusercontent.com/24837709/66290275-62094000-e911-11e9-93bf-952c809e838c.jpg","The New York Times":"https://user-images.githubusercontent.com/24837709/66290236-443bdb00-e911-11e9-8451-8bccb0a1536b.png"},T=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.data||[],t=400;return window.innerWidth<t&&(t=window.innerWidth),r.a.createElement("div",{className:"container columns is-multiline is-marginless is-paddingless is-centered"},e.map((function(e,a){return r.a.createElement("div",{className:"column is-one-third is-flex clickableBox",style:{minWidth:t},key:"".concat(a,"-").concat(e.title)},r.a.createElement("div",{className:"card",key:e.title,onClick:function(){return window.open(e.url)}},r.a.createElement("div",{className:"paddedBox"},r.a.createElement("article",{className:"media is-marginless"},r.a.createElement("div",{className:"media-left"},r.a.createElement("div",{className:"circle has-text-centered is-size-4"},e.source.name[0].toUpperCase())),r.a.createElement("div",{className:"media-content"},r.a.createElement("div",{className:"content"},r.a.createElement("strong",null,e.source.name),r.a.createElement("br",null),r.a.createElement("p",{className:"is-size-7"},(n=e.publishedAt,_()(n).add(c,"hours").format("YYYY-MM-DD hh:mma"))))))),r.a.createElement("div",{className:"card-image"},r.a.createElement("figure",{className:"image"},r.a.createElement("img",{src:e.urlToImage||S[e.source.name],alt:"cardimg"}))),r.a.createElement("div",{className:"card-content has-text-left"},r.a.createElement("p",{className:"title is-5"},e.title),r.a.createElement("div",{className:"content is-size-7"},e.description,r.a.createElement("br",null)))));var n,c})))}}]),t}(n.Component),x=Object(p.b)((function(e){return{data:e.fetch.data,loading:e.fetch.loading}}),{})(T),C=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.fetchAPI();var t={root:document.querySelector(null)},a=new IntersectionObserver((function(t){t.forEach((function(t){t.isIntersecting&&!1===e.props.loading&&e.props.fetchAPI(e.props.search,e.props.page+1)}))}),t),n=document.querySelector("#end");a.observe(n)}},{key:"render",value:function(){return r.a.createElement("div",{className:"container is-centered body",id:"checkBody"},r.a.createElement(x,null),r.a.createElement("br",null),!0===this.props.error?r.a.createElement("p",{className:"has-text-danger"},"Error loading more articles. Please refresh and try again."):null,0===this.props.totalResults?r.a.createElement("p",null,"No results for the search term: ",r.a.createElement("b",null,this.props.search)):null,this.props.totalResults>0&&this.props.totalResults<=10*this.props.page?r.a.createElement("p",null,"You have reached the end of search results for search term: ",r.a.createElement("b",null,this.props.search)):null,!0===this.props.loading&&!1===this.props.error?r.a.createElement("i",{className:"fas fa-sync fa-spin has-text-black is-size-1"}):null,r.a.createElement("div",{id:"end"},r.a.createElement("br",null)),r.a.createElement("br",null))}}]),t}(n.Component),D=Object(p.b)((function(e){return{search:e.fetch.search,data:e.fetch.data,page:e.fetch.page,loading:e.fetch.loading,error:e.fetch.error,totalResults:e.fetch.totalResults}}),{fetchAPI:j})(C);var W=function(){return r.a.createElement(p.a,{store:A},r.a.createElement("div",{className:"App"},r.a.createElement(R,null),r.a.createElement(D,null)))},B=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function L(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(W,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");B?(!function(e,t){fetch(e).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):L(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):L(t,e)}))}}()}},[[20,1,2]]]);
//# sourceMappingURL=main.2c30b219.chunk.js.map