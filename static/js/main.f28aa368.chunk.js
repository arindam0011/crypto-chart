(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e,a,t){},13:function(e,a,t){},14:function(e,a,t){"use strict";t.r(a);var c=t(0),r=t.n(c),n=t(3),l=t.n(n);t(13),t(1);var o=e=>{let{data:a,searchValue:t}=e;return r.a.createElement("table",{id:"Table"},r.a.createElement("tbody",null,a.filter(e=>e.name.toLowerCase().includes(t.toLowerCase())||e.symbol.toLowerCase().includes(t.toLowerCase())).map(e=>r.a.createElement("tr",{className:"row",key:e.id},r.a.createElement("td",null,r.a.createElement("div",{className:"logo_name"},r.a.createElement("div",{className:"logo"},r.a.createElement("img",{src:e.image,alt:e.name})),r.a.createElement("div",{className:"name"},e.name))),r.a.createElement("td",{className:"symbol"},e.symbol.toUpperCase()),r.a.createElement("td",{className:"price"},"$",e.current_price),r.a.createElement("td",{className:"volume"},"$",e.total_volume),r.a.createElement("td",{className:"percentage",style:e.ath_change_percentage>=0?{color:"green"}:{color:"red"}},e.ath_change_percentage.toFixed(2),"%"),r.a.createElement("td",{className:"market_cap"},"Mkt Cap: $",e.market_cap)))))};var s=()=>{const[e,a]=Object(c.useState)(""),[t,n]=Object(c.useState)([]),[l,s]=Object(c.useState)([]);return Object(c.useEffect)(()=>{fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false").then(e=>e.json()).then(e=>{n(e),s(e)}).catch(e=>{console.error(e)})},[]),r.a.createElement("div",{id:"container-main"},r.a.createElement("div",{className:"SearchAndSoetingBar"},r.a.createElement("input",{id:"search",value:e,onChange:e=>a(e.target.value),type:"text",placeholder:"Search By Name or Symbol"}),r.a.createElement("div",{id:"sort-btn1",className:"btn",onClick:()=>s([...t].sort((e,a)=>e.market_cap-a.market_cap))},"Sort By Mkt Cap"),r.a.createElement("div",{id:"sort-btn2",className:"btn",onClick:()=>s([...t].sort((e,a)=>a.ath_change_percentage-e.ath_change_percentage))},"Sort By Percentage")),r.a.createElement(o,{data:l,searchValue:e}))};var m=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(s,null))};l.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m,null)))},4:function(e,a,t){e.exports=t(14)}},[[4,1,2]]]);
//# sourceMappingURL=main.f28aa368.chunk.js.map