(this["webpackJsonpvirtual-scroll"]=this["webpackJsonpvirtual-scroll"]||[]).push([[0],{12:function(t,e,i){},13:function(t,e,i){},14:function(t,e,i){"use strict";i.r(e);var n=i(0),a=i.n(n),s=i(2),o=i.n(s),r=(i(12),i(3)),l=i(4),c=i(5),h=i(6),f=(i(13),function(t){Object(h.a)(i,t);var e=Object(c.a)(i);function i(t){var n;return Object(r.a)(this,i),(n=e.call(this,t)).state={init:!1,offset:0,length:30,avgRowHeight:40},n}return Object(l.a)(i,[{key:"componentDidUpdate",value:function(t,e){if(e.init!==this.state.init&&this.setState({inView:this.listRef.scrollHeight/this.state.avgRowHeight}),e.offset>this.state.offset&&this.state.offset>0){for(var i=this.listRef.querySelectorAll(".List-item"),n=e.offset-this.state.offset,a=0,s=0;s<n&&s<i.length;s++)a+=i[s].clientHeight;var o=(this.state.avgRowHeight*e.offset-a)/this.state.offset;this.setState({avgRowHeight:o})}}},{key:"renderListItems",value:function(t,e){var i=this.props.data.slice(t,t+e);return n.createElement(n.Fragment,null,i.map((function(e,i){var a=t+i;return n.createElement("div",{className:"List-item",key:a,style:{height:"".concat(a%2===1?40:40+a%5*20,"px"),background:a%2===1?"white":"#d5d5d5"}},n.createElement("p",null,e))})))}},{key:"onScrollHandler",value:function(){if(this.listRef){for(var t=this.props.data,e=this.state,i=e.offset,n=e.avgRowHeight,a=this.listRef,s=a.scrollTop,o=a.querySelectorAll(".List-item"),r=Math.floor(s-i*n),l=0,c=0,h=0;h<o.length&&c+o[h].clientHeight<=a.clientHeight;){c+=o[h].clientHeight,l++,h++}if(r>0){for(var f=r,g=i,u=n,m=0;m<o.length&&f>=o[m].clientHeight;){var v=o[m].clientHeight;f-=v,u=(g*u+v)/(g+1),g++,m++}(g=g<t.length-l?g:t.length-l-1)>i&&this.setState({inView:l,offset:g,avgRowHeight:u})}else if(n){var d=i+(Math.floor(r/n)||-1);d<i&&this.setState({inView:l,offset:d<0?0:d})}}}},{key:"render",value:function(){var t=this,e=this.props.data,i=this.state,a=i.offset,s=i.inView,o=i.length,r=i.avgRowHeight,l=Math.max(0,(a-5)*r),c=Math.max(0,(e.length-s-(a+5)-1)*r);return n.createElement("div",{ref:function(e){t.listRef=e,e&&!t.state.init&&t.setState({init:!0})},className:"List",onScroll:this.onScrollHandler.bind(this)},n.createElement("div",{className:"List-topPadding",style:{height:l}}),this.renderListItems(Math.max(0,a-5),o),n.createElement("div",{className:"List-bottomPadding",style:{height:c}}))}}]),i}(n.Component)),g=Array.from({length:100},(function(t,e){return"List Item:- ".concat(e)}));var u=function(){return a.a.createElement(f,{data:g})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},7:function(t,e,i){t.exports=i(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.3a2136bf.chunk.js.map