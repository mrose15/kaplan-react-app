(this.webpackJsonpkaplan=this.webpackJsonpkaplan||[]).push([[0],{29:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),o=n(21),r=n.n(o),s=(n(29),n(5)),i=n(6),l=n(8),h=n(7),u=n(22),j=n.n(u),b=n(0);function d(e){var t=e.book;return Object(b.jsxs)("div",{className:"container__col-xs-12 container__col-md-5 bookcard",children:[Object(b.jsx)("h3",{children:t.volumeInfo.title}),Object(b.jsx)("p",{children:t.volumeInfo.authors[0]}),Object(b.jsx)("p",{children:t.volumeInfo.publisher}),Object(b.jsx)("p",{children:t.volumeInfo.publishedDate})]})}var p=function(e){return Object(b.jsx)("input",{type:e.type,placeholder:e.placeholder,className:e.className,onChange:e.handleChange})},O=n(24),m=n(23),v=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),o=0;o<c;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={books:[],searchField:""},e.editSearchTerm=function(t){e.setState({searchField:t.target.value})},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;j.a.get("https://www.googleapis.com/books/v1/volumes?q=kaplan%20test%20prep").then((function(t){e.setState({books:t.data.items})})).catch((function(e){throw e}))}},{key:"render",value:function(){var e=this.state,t=e.books,n=e.searchField,c=[];return t.forEach((function(e){if("".concat(e.volumeInfo.title," ").concat(e.volumeInfo.authors[0]," ").concat(e.volumeInfo.publisher).toLowerCase().includes(n.toLowerCase()))return c.push(e)})),Object(b.jsxs)("section",{className:"container__row booklist",children:[Object(b.jsxs)("div",{className:"container__col-xs-6",children:[Object(b.jsx)(m.a,{icon:O.a}),Object(b.jsx)(p,{placeholder:"Search",type:"search",handleChange:this.editSearchTerm})]}),Object(b.jsx)("div",{className:"container__col-xs-12",children:Object(b.jsx)("h2",{children:"All Books"})}),c.map((function(e){return Object(b.jsx)(d,{book:e},e.id)}))]})}}]),n}(a.a.Component),f=n(11);var x=function(e){var t=Object(c.useState)(e.size),n=Object(f.a)(t,1)[0],a=Object(c.useState)(e.variant),o=Object(f.a)(a,1)[0];return Object(b.jsx)("button",{className:"btn btn--".concat(o," btn--").concat(n),children:e.children})},_=(n(52),function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(b.jsx)("main",{className:"container",children:Object(b.jsxs)("div",{className:"container__row",children:[Object(b.jsx)("div",{className:"container__col-xs-6 container__col-md-8",children:Object(b.jsx)("h1",{children:"Books"})}),Object(b.jsx)("div",{className:"container__col-xs-6 container__col-md-3 flex-align-center",children:Object(b.jsx)(x,{variant:"primary",size:"lg",children:"Create New Book"})}),Object(b.jsx)(v,{})]})})}}]),n}(a.a.Component)),k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,54)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),o(e),r(e)}))};r.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(_,{})}),document.getElementById("root")),k()}},[[53,1,2]]]);
//# sourceMappingURL=main.b446652f.chunk.js.map