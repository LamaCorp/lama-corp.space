(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{155:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a.n(n),c=a(0),l=a.n(c),o=a(167),i=a(188),s=a(33),d=a.n(s),u=a(368),m=a(190),p=(a(76),a(369)),f=function(e){function t(t){var a;return(a=e.call(this,t)||this).getOrCreateIndex=function(){return a.index?a.index:p.Index.load(a.props.searchIndex)},a.search=function(e){var t=e.target.value;a.index=a.getOrCreateIndex(),a.setState({query:t,results:a.index.search(t,{expand:!0}).map(function(e){var t=e.ref;return a.index.documentStore.getDoc(t)})})},a.state={query:"",results:[]},a}return r()(t,e),t.prototype.render=function(){return l.a.createElement("div",null,l.a.createElement("input",{type:"text",className:"searchField",placeholder:"Enter your search query here.",value:this.state.query,onChange:this.search}),l.a.createElement("div",{className:"search-results"},this.state.results.map(function(e){return l.a.createElement("div",{className:"search-result"},l.a.createElement("span",null,l.a.createElement(m.a,{to:"/"+e.slug},e.title)),l.a.createElement("br",null),l.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.excerpt}}))})))},t}(c.Component),h=function(){return l.a.createElement(m.b,{query:"3825362541",render:function(e){return l.a.createElement("header",null,l.a.createElement(f,{searchIndex:e.siteSearchIndex.index}))},data:u})};a.d(t,"pageQuery",function(){return g});var b=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data,t=e.site.siteMetadata.title,a=e.allMarkdownRemark.edges;return l.a.createElement(o.a,{location:this.props.location,title:t},l.a.createElement(i.a,{title:"Home"}),l.a.createElement(h,null),l.a.createElement("h1",{className:"articles-title"},"Articles"),l.a.createElement("div",{className:"articles-container"},a.map(function(e){var t=e.node,a=t.frontmatter.title||t.frontmatter.slug;return l.a.createElement("div",{className:"article",key:t.fields.slug},l.a.createElement("h3",{className:"article-title"},l.a.createElement(d.a,{to:t.fields.slug},a)),l.a.createElement("small",{className:"article-date"},t.frontmatter.date),l.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.excerpt}}))})))},t}(l.a.Component),g=(t.default=b,"2785444898")},167:function(e,t,a){"use strict";var n=a(7),r=a.n(n),c=a(0),l=a.n(c),o=(a(35),a(4)),i=a.n(o),s=a(158),d=a.n(s),u=a(169),m=a(177),p=a.n(m),f=a(171),h=a.n(f),b=a(172),g=a.n(b),E=a(173),y=a.n(E),v=a(180),w=a.n(v),x=a(179),C=a.n(x),N=a(174),S=a.n(N),k=a(175),q=a.n(k),L=a(178),I=a.n(L),j=a(182),M=a.n(j),R=a(181),O=a.n(R),B=a(183),H=a.n(B),T=a(33),D=a.n(T),P=a(184),A=a.n(P),W=a(187),z=a.n(W),F=a(186),_=a.n(F),G=a(185),J=a.n(G),Q=a(170),Y=a.n(Q),K=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={openNavbar:!1},t.handleClick=function(){t.setState(function(e){return{open:!e.open}})},t.handleDrawerOpen=function(){t.setState({openNavbar:!0})},t.handleDrawerClose=function(){t.setState({openNavbar:!1})},t}return r()(t,e),t.prototype.render=function(){var e,t=this.props.classes,a=this.state.openNavbar;return l.a.createElement("div",{className:t.root},l.a.createElement(h.a,null),l.a.createElement(g.a,{position:"fixed",className:d()(t.appBar,(e={},e[t.appBarShift]=a,e))},l.a.createElement(y.a,{disableGutters:!a},l.a.createElement(S.a,{color:"inherit","aria-label":"Open drawer",onClick:this.handleDrawerOpen,className:d()(t.menuButton,a&&t.hide)},l.a.createElement(q.a,null)),l.a.createElement(D.a,{to:"/",className:t.brand},"Lama Corp"))),l.a.createElement(p.a,{className:t.drawer,variant:"persistent",anchor:"left",open:a,classes:{paper:t.drawerPaper}},l.a.createElement("div",{className:t.drawerHeader},l.a.createElement(S.a,{onClick:this.handleDrawerClose},l.a.createElement(I.a,null))),l.a.createElement(C.a,null),l.a.createElement(w.a,null,l.a.createElement(D.a,{to:"/"},l.a.createElement(O.a,{button:!0},l.a.createElement(M.a,null,l.a.createElement(Y.a,null)),l.a.createElement(H.a,{primary:"Home"}))),l.a.createElement(D.a,{to:"/projects"},l.a.createElement(O.a,{button:!0},l.a.createElement(M.a,null,l.a.createElement(A.a,null)),l.a.createElement(H.a,{primary:"Projects"}))),l.a.createElement(D.a,{to:"/about"},l.a.createElement(O.a,{button:!0},l.a.createElement(M.a,null,l.a.createElement(J.a,null)),l.a.createElement(H.a,{primary:"About"}))),l.a.createElement(D.a,{to:"/blog"},l.a.createElement(O.a,{button:!0},l.a.createElement(M.a,null,l.a.createElement(_.a,null)),l.a.createElement(H.a,{primary:"Blog"}))),l.a.createElement(D.a,{to:"/contact"},l.a.createElement(O.a,{button:!0},l.a.createElement(M.a,null,l.a.createElement(z.a,null)),l.a.createElement(H.a,{primary:"Contact"}))))),l.a.createElement("div",{className:t.drawerHeader}))},t}(l.a.Component);K.propTypes={classes:i.a.object.isRequired,theme:i.a.object.isRequired};var U=Object(u.withStyles)(function(e){return{appBar:{backgroundColor:"#ffa500",color:"#000",transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - 240px)",marginLeft:240,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginLeft:12,marginRight:20},hide:{display:"none"},drawer:{width:240,flexShrink:0},drawerPaper:{backgroundColor:"#ffa500",color:"#000",width:240},drawerHeader:Object.assign({display:"flex",alignItems:"center",padding:"0 8px"},e.mixins.toolbar,{justifyContent:"flex-end"}),brand:{fontWeight:800,fontSize:"1.2em"}}},{withTheme:!0})(K),V=(a(145),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return l.a.createElement("div",{className:"all"},l.a.createElement(U,null),l.a.createElement("div",{className:"container"},l.a.createElement("div",null,e)),l.a.createElement("footer",null,"© ",(new Date).getFullYear()," All rights reserved, Lama Corp | lama-corp.space"," "))},t}(l.a.Component));t.a=V},168:function(e,t,a){var n;e.exports=(n=a(194))&&n.default||n},188:function(e,t,a){"use strict";var n=a(189),r=a(0),c=a.n(r),l=a(4),o=a.n(l),i=a(202),s=a.n(i);function d(e){var t=e.description,a=e.lang,r=e.meta,l=e.title,o=n.data.site,i=t||o.siteMetadata.description;return c.a.createElement(s.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:i},{property:"og:title",content:l},{property:"og:description",content:i},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:i}].concat(r)})}d.defaultProps={lang:"en",meta:[],description:""},d.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),title:o.a.string.isRequired},t.a=d},189:function(e){e.exports={data:{site:{siteMetadata:{title:"Lama Corp",description:"A starter blog demonstrating what Gatsby can do.",author:"Lama Corp"}}}}},190:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var n=a(0),r=a.n(n),c=a(4),l=a.n(c),o=a(33),i=a.n(o);a.d(t,"a",function(){return i.a});a(168);var s=r.a.createContext({}),d=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},194:function(e,t,a){"use strict";a.r(t);a(35);var n=a(0),r=a.n(n),c=a(4),l=a.n(c),o=a(56),i=a(2),s=function(e){var t=e.location,a=i.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=s},368:function(e){e.exports={data:{siteSearchIndex:{index:{version:"0.9.5",fields:["title"],ref:"id",documentStore:{docs:{"9c8d836b-580c-5619-bbd0-8a21139c71c2":{id:"9c8d836b-580c-5619-bbd0-8a21139c71c2",title:"Post Name here",tags:["animals","Chicago","zoos"],slug:"/anotherpost/"},"0b39e616-09c5-5112-b1bb-947245c9b613":{id:"0b39e616-09c5-5112-b1bb-947245c9b613",title:"Hello World",tags:["rust","cargo","pizza"],slug:"/apost/"}},docInfo:{"9c8d836b-580c-5619-bbd0-8a21139c71c2":{title:3},"0b39e616-09c5-5112-b1bb-947245c9b613":{title:2}},length:2,save:!0},index:{title:{root:{docs:{},df:0,p:{docs:{},df:0,o:{docs:{},df:0,s:{docs:{},df:0,t:{docs:{"9c8d836b-580c-5619-bbd0-8a21139c71c2":{tf:1}},df:1}}}},n:{docs:{},df:0,a:{docs:{},df:0,m:{docs:{},df:0,e:{docs:{"9c8d836b-580c-5619-bbd0-8a21139c71c2":{tf:1}},df:1}}}},h:{docs:{},df:0,e:{docs:{},df:0,r:{docs:{},df:0,e:{docs:{"9c8d836b-580c-5619-bbd0-8a21139c71c2":{tf:1}},df:1}},l:{docs:{},df:0,l:{docs:{},df:0,o:{docs:{"0b39e616-09c5-5112-b1bb-947245c9b613":{tf:1}},df:1}}}}},w:{docs:{},df:0,o:{docs:{},df:0,r:{docs:{},df:0,l:{docs:{},df:0,d:{docs:{"0b39e616-09c5-5112-b1bb-947245c9b613":{tf:1}},df:1}}}}}}}},pipeline:["trimmer","stopWordFilter","stemmer"]}},allMarkdownRemark:{edges:[{node:{excerpt:"Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux…",fields:{slug:"/anotherpost/"},frontmatter:{date:"May 06, 2015",title:"Post Name here",description:"BLabla"}}},{node:{excerpt:"Wow! I love blogging so much already.Did you know that “despite its name, salted duck eggs can also be made from\nchicken eggs, though the…",fields:{slug:"/apost/"},frontmatter:{date:"May 06, 2015",title:"Hello World",description:"BLabla"}}}]}}}}}]);