(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{155:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a.n(n),l=a(0),o=a.n(l),i=a(168),s=a(171),c=a(33),d=a.n(c),u=a(369),m=a(173),p=(a(76),a(370)),f=function(e){function t(t){var a;return(a=e.call(this,t)||this).getOrCreateIndex=function(){return a.index?a.index:p.Index.load(a.props.searchIndex)},a.search=function(e){var t=e.target.value;a.index=a.getOrCreateIndex(),a.setState({query:t,results:a.index.search(t,{expand:!0}).map(function(e){var t=e.ref;return a.index.documentStore.getDoc(t)})})},a.state={query:"",results:[]},a}return r()(t,e),t.prototype.render=function(){return o.a.createElement("div",null,o.a.createElement("input",{type:"text",className:"searchField",placeholder:"Enter your search query here.",value:this.state.query,onChange:this.search}),o.a.createElement("div",{className:"search-results"},this.state.results.map(function(e){return o.a.createElement("div",{className:"search-result"},o.a.createElement("span",null,o.a.createElement(m.a,{to:"/"+e.slug},e.title)),o.a.createElement("br",null),o.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.excerpt}}))})))},t}(l.Component),h=function(){return o.a.createElement(m.b,{query:"3825362541",render:function(e){return o.a.createElement("header",null,o.a.createElement(f,{searchIndex:e.siteSearchIndex.index}))},data:u})};a.d(t,"pageQuery",function(){return g});var b=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data,t=e.site.siteMetadata.title,a=e.allMarkdownRemark.edges;return o.a.createElement(i.a,{location:this.props.location,title:t},o.a.createElement(s.a,{title:"Home"}),o.a.createElement(h,null),o.a.createElement("h1",{className:"articles-title"},"Articles"),o.a.createElement("div",{className:"articles-container"},a.map(function(e){var t=e.node,a=t.frontmatter.title||t.frontmatter.slug;return o.a.createElement("div",{className:"article",key:t.fields.slug},o.a.createElement("h3",{className:"article-title"},o.a.createElement(d.a,{to:t.fields.slug},a)),o.a.createElement("small",{className:"article-date"},t.frontmatter.date),o.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.excerpt}}))})))},t}(o.a.Component),g=(t.default=b,"2785444898")},168:function(e,t,a){"use strict";var n=a(7),r=a.n(n),l=a(0),o=a.n(l),i=(a(35),a(4)),s=a.n(i),c=a(159),d=a.n(c),u=a(174),m=a(186),p=a.n(m),f=a(179),h=a.n(f),b=a(182),g=a.n(b),E=a(183),y=a.n(E),v=a(189),w=a.n(v),x=a(188),C=a.n(x),N=a(184),S=a.n(N),k=a(185),q=a.n(k),L=a(187),I=a.n(L),j=a(191),M=a.n(j),R=a(190),O=a.n(R),B=a(193),H=a.n(B),T=a(33),D=a.n(T),P=a(194),A=a.n(P),W=a(197),z=a.n(W),F=a(196),_=a.n(F),G=a(195),J=a.n(G),Q=a(192),Y=a.n(Q),K=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={openNavbar:!1},t.handleClick=function(){t.setState(function(e){return{open:!e.open}})},t.handleDrawerOpen=function(){t.setState({openNavbar:!0})},t.handleDrawerClose=function(){t.setState({openNavbar:!1})},t}return r()(t,e),t.prototype.render=function(){var e,t=this.props.classes,a=this.state.openNavbar;return o.a.createElement("div",{className:t.root},o.a.createElement(h.a,null),o.a.createElement(g.a,{position:"fixed",className:d()(t.appBar,(e={},e[t.appBarShift]=a,e))},o.a.createElement(y.a,{disableGutters:!a},o.a.createElement(S.a,{color:"inherit","aria-label":"Open drawer",onClick:this.handleDrawerOpen,className:d()(t.menuButton,a&&t.hide)},o.a.createElement(q.a,null)),o.a.createElement(D.a,{to:"/",className:t.brand},"Lama Corp"))),o.a.createElement(p.a,{className:t.drawer,variant:"persistent",anchor:"left",open:a,classes:{paper:t.drawerPaper}},o.a.createElement("div",{className:t.drawerHeader},o.a.createElement(S.a,{onClick:this.handleDrawerClose},o.a.createElement(I.a,null))),o.a.createElement(C.a,null),o.a.createElement(w.a,null,o.a.createElement(D.a,{to:"/"},o.a.createElement(O.a,{button:!0},o.a.createElement(M.a,null,o.a.createElement(Y.a,null)),o.a.createElement(H.a,{primary:"Home"}))),o.a.createElement(D.a,{to:"/projects"},o.a.createElement(O.a,{button:!0},o.a.createElement(M.a,null,o.a.createElement(A.a,null)),o.a.createElement(H.a,{primary:"Projects"}))),o.a.createElement(D.a,{to:"/about"},o.a.createElement(O.a,{button:!0},o.a.createElement(M.a,null,o.a.createElement(J.a,null)),o.a.createElement(H.a,{primary:"About"}))),o.a.createElement(D.a,{to:"/blog"},o.a.createElement(O.a,{button:!0},o.a.createElement(M.a,null,o.a.createElement(_.a,null)),o.a.createElement(H.a,{primary:"Blog"}))),o.a.createElement(D.a,{to:"/contact"},o.a.createElement(O.a,{button:!0},o.a.createElement(M.a,null,o.a.createElement(z.a,null)),o.a.createElement(H.a,{primary:"Contact"}))))),o.a.createElement("div",{className:t.drawerHeader}))},t}(o.a.Component);K.propTypes={classes:s.a.object.isRequired,theme:s.a.object.isRequired};var U=Object(u.withStyles)(function(e){return{appBar:{backgroundColor:"#ffa500",color:"#000",transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - 240px)",marginLeft:240,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginLeft:12,marginRight:20},hide:{display:"none"},drawer:{width:240,flexShrink:0},drawerPaper:{backgroundColor:"#ffa500",color:"#000",width:240},drawerHeader:Object.assign({display:"flex",alignItems:"center",padding:"0 8px"},e.mixins.toolbar,{justifyContent:"flex-end"}),brand:{fontWeight:800,fontSize:"1.2em"}}},{withTheme:!0})(K),V=(a(147),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return o.a.createElement("div",null,o.a.createElement(U,null),o.a.createElement("div",{className:"container"},o.a.createElement("div",null,e)),o.a.createElement("footer",null,"© ",(new Date).getFullYear()," All rights reserved, Lama Corp | lama-corp.space"," "))},t}(o.a.Component));t.a=V},169:function(e,t,a){var n;e.exports=(n=a(178))&&n.default||n},171:function(e,t,a){"use strict";var n=a(172),r=a(0),l=a.n(r),o=a(4),i=a.n(o),s=a(203),c=a.n(s);function d(e){var t=e.description,a=e.lang,r=e.meta,o=e.title,i=n.data.site,s=t||i.siteMetadata.description;return l.a.createElement(c.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+i.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:o},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:i.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:s}].concat(r)})}d.defaultProps={lang:"en",meta:[],description:""},d.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.arrayOf(i.a.object),title:i.a.string.isRequired},t.a=d},172:function(e){e.exports={data:{site:{siteMetadata:{title:"Lama Corp",description:"A starter blog demonstrating what Gatsby can do.",author:"Lama Corp"}}}}},173:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var n=a(0),r=a.n(n),l=a(4),o=a.n(l),i=a(33),s=a.n(i);a.d(t,"a",function(){return s.a});a(169);var c=r.a.createContext({}),d=function(e){return r.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},178:function(e,t,a){"use strict";a.r(t);a(35);var n=a(0),r=a.n(n),l=a(4),o=a.n(l),i=a(57),s=a(2),c=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},369:function(e){e.exports={data:{siteSearchIndex:{index:{version:"0.9.5",fields:["title"],ref:"id",documentStore:{docs:{"949d2b6b-7694-5a3f-b289-bee2d224010e":{id:"949d2b6b-7694-5a3f-b289-bee2d224010e",title:"Post Name here",tags:["animals","Chicago","zoos"],slug:"/anotherpost/"},"47812a53-b809-5c59-8293-6be780341559":{id:"47812a53-b809-5c59-8293-6be780341559",title:"Hello World",tags:["rust","cargo","pizza"],slug:"/apost/"}},docInfo:{"949d2b6b-7694-5a3f-b289-bee2d224010e":{title:3},"47812a53-b809-5c59-8293-6be780341559":{title:2}},length:2,save:!0},index:{title:{root:{docs:{},df:0,p:{docs:{},df:0,o:{docs:{},df:0,s:{docs:{},df:0,t:{docs:{"949d2b6b-7694-5a3f-b289-bee2d224010e":{tf:1}},df:1}}}},n:{docs:{},df:0,a:{docs:{},df:0,m:{docs:{},df:0,e:{docs:{"949d2b6b-7694-5a3f-b289-bee2d224010e":{tf:1}},df:1}}}},h:{docs:{},df:0,e:{docs:{},df:0,r:{docs:{},df:0,e:{docs:{"949d2b6b-7694-5a3f-b289-bee2d224010e":{tf:1}},df:1}},l:{docs:{},df:0,l:{docs:{},df:0,o:{docs:{"47812a53-b809-5c59-8293-6be780341559":{tf:1}},df:1}}}}},w:{docs:{},df:0,o:{docs:{},df:0,r:{docs:{},df:0,l:{docs:{},df:0,d:{docs:{"47812a53-b809-5c59-8293-6be780341559":{tf:1}},df:1}}}}}}}},pipeline:["trimmer","stopWordFilter","stemmer"]}},allMarkdownRemark:{edges:[{node:{excerpt:"Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux…",fields:{slug:"/anotherpost/"},frontmatter:{date:"May 06, 2015",title:"Post Name here",description:"BLabla"}}},{node:{excerpt:"Wow! I love blogging so much already.Did you know that “despite its name, salted duck eggs can also be made from\nchicken eggs, though the…",fields:{slug:"/apost/"},frontmatter:{date:"May 06, 2015",title:"Hello World",description:"BLabla"}}}]}}}}}]);