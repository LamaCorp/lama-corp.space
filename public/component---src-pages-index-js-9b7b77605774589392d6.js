(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{190:function(e,t,a){"use strict";a.r(t);var n=a(6),r=a.n(n),o=a(0),i=a.n(o),l=a(196),c=a(206),s=(a(9),a(242)),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement("div",{className:"card-container"},i.a.createElement(s.a,{title:"Diego Dorn",content:"some content here :)",primaryButton:["/team/diego","More about Diego"]}),i.a.createElement(s.a,{title:"Diego Dorn",content:"some content here :)",primaryButton:["/team/diego","More about Diego"]}),i.a.createElement(s.a,{title:"Diego Dorn",content:"some content here :)",primaryButton:["/team/diego","More about Diego"]}),i.a.createElement(s.a,{title:"Diego Dorn",content:"some content here :)",primaryButton:["/team/diego","More about Diego"]}),i.a.createElement(s.a,{title:"Diego Dorn",content:"some content here :)",primaryButton:["/team/diego","More about Diego"]}),i.a.createElement(s.a,{title:"Diego Dorn",content:"some content here :)",primaryButton:["/team/diego","More about Diego"]}))},t}(o.Component),m=a(195),p=a(241),d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this,t=[];return i.a.createElement("div",null,i.a.createElement("div",{className:"cta"},i.a.createElement("h1",{className:"cta-title"},this.props.title),i.a.createElement("p",{className:"cta-subtitle"},this.props.description),i.a.createElement("div",{className:"cta-actions"},void 0!==e.props.multipleButtons&&void 0!==e.props.buttons?(e.props.buttons.forEach(function(e){t.push(i.a.createElement(p.a,{link:e[1],text:e[0]}))}),t):void 0!==e.props.buttonText?i.a.createElement(p.a,{link:e.props.buttonLink,text:e.props.buttonText}):i.a.createElement("span",{style:{color:"#f00",fontWeight:"bold",textDecoration:"underline"}},"(ERROR) You need to add at least one button"))))},t}(o.Component),h=a(253);a.d(t,"pageQuery",function(){return f});var E=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data,t=e.site.siteMetadata.title,a=e.allMarkdownRemark.edges;return i.a.createElement(l.a,{location:this.props.location,title:t},i.a.createElement(c.a,{title:"Home"}),i.a.createElement(d,{title:"Who we are",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint adipisci laudantium quos error quaerat labore quam numquam, molestias placeat. Laborum.",buttonText:"About us",buttonLink:"/about"}),i.a.createElement("h2",{className:"h1"},"Team"),i.a.createElement(u,null),i.a.createElement("h1",{className:"articles-title"},i.a.createElement(m.a,{to:"/blog"},"Last articles ")),i.a.createElement("div",{className:"card-container"},a.map(function(e){var t=e.node,a=t.frontmatter.title||t.frontmatter.slug;return i.a.createElement(m.a,{to:t.fields.slug},i.a.createElement("div",{className:"card",key:t.fields.slug},i.a.createElement("small",null,t.frontmatter.date),i.a.createElement("div",{className:"card-header"},i.a.createElement("h3",{className:"card-title"},a)),i.a.createElement("p",{className:"card-content",dangerouslySetInnerHTML:{__html:t.excerpt}})))})),i.a.createElement("h1",null,"Our projects"),i.a.createElement(h.a,null),i.a.createElement(d,{title:"Contact us",description:"Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire. Il trouve ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C.",buttonText:"Contact us",buttonLink:"/contact"}))},t}(i.a.Component),f=(t.default=E,"1351314099")},195:function(e,t,a){"use strict";a.d(t,"a",function(){return u});var n=a(6),r=a.n(n),o=a(0),i=a.n(o),l=a(208),c=a.n(l),s=a(196),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.to,a=e.children;return i.a.createElement(c.a,{paintDrip:!0,hex:s.b,to:t},a)},t}(o.Component)},196:function(e,t,a){"use strict";a.d(t,"b",function(){return G});var n=a(6),r=a.n(n),o=(a(31),a(0)),i=a.n(o),l=a(1),c=a.n(l),s=a(224),u=a(213),m=a.n(u),p=a(215),d=a.n(p),h=a(216),E=a.n(h),f=a(217),g=a.n(f),b=a(219),v=a.n(b),y=a(223),w=a.n(y),C=a(209),x=a.n(C),D=a(210),k=a.n(D),N=a(211),L=a.n(N),B=a(212),j=a.n(B),M=a(195),S=a(220),I=a.n(S),q=a(222),T=a.n(q),z=a(221),A=a.n(z),O=a(218),R=a.n(O),J=a(214),P=a.n(J),G=(a(181),"#ffa500"),H=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={top:!1,left:!1,bottom:!1,right:!1},t.toggleDrawer=function(e,a){return function(){var n;t.setState(((n={})[e]=a,n))}},t}return r()(t,e),t.prototype.render=function(){var e,t=this.props,a=t.classes,n=t.children,r=this.state.left;return i.a.createElement("div",{className:"all"},i.a.createElement(x.a,{position:"fixed",className:a.appBar},i.a.createElement(k.a,{disableGutters:!r},i.a.createElement(L.a,((e={color:"inherit","aria-label":"Open drawer",onClick:this.handleDrawerOpen,className:a.menuButton}).onClick=this.toggleDrawer("left",!0),e),i.a.createElement(j.a,null)),i.a.createElement(M.a,{to:"/",className:a.brand},"Lama Corp"))),i.a.createElement(m.a,{open:this.state.left,onClose:this.toggleDrawer("left",!1),onOpen:this.toggleDrawer("left",!0)},i.a.createElement("div",{className:a.drawerHeader},i.a.createElement(L.a,{onClick:this.toggleDrawer("left",!1)},i.a.createElement(P.a,null))),i.a.createElement("div",{tabIndex:0,role:"button",onClick:this.toggleDrawer("left",!1),onKeyDown:this.toggleDrawer("left",!1)},i.a.createElement(d.a,{className:a.list},i.a.createElement(M.a,{to:"/"},i.a.createElement(E.a,{button:!0},i.a.createElement(g.a,null,i.a.createElement(R.a,null)),i.a.createElement(v.a,{primary:"Home"}))),i.a.createElement(M.a,{to:"/projects"},i.a.createElement(E.a,{button:!0},i.a.createElement(g.a,null,i.a.createElement(I.a,null)),i.a.createElement(v.a,{primary:"Projects"}))),i.a.createElement(M.a,{to:"/about"},i.a.createElement(E.a,{button:!0},i.a.createElement(g.a,null,i.a.createElement(A.a,null)),i.a.createElement(v.a,{primary:"About"}))),i.a.createElement(M.a,{to:"/blog"},i.a.createElement(E.a,{button:!0},i.a.createElement(g.a,null,i.a.createElement(T.a,null)),i.a.createElement(v.a,{primary:"Blog"}))),i.a.createElement(M.a,{to:"/contact"},i.a.createElement(E.a,{button:!0},i.a.createElement(g.a,null,i.a.createElement(w.a,null)),i.a.createElement(v.a,{primary:"Contact"})))))),i.a.createElement("div",{className:a.content},n),i.a.createElement("footer",null,"© ",(new Date).getFullYear()," All rights reserved, Lama Corp | lama-corp.space"))},t}(i.a.Component);H.propTypes={classes:c.a.object.isRequired},t.a=Object(s.withStyles)(function(e){var t;return(t={list:{width:250,backgroundColor:G,height:"calc(100vh - 64px)"},fullList:{width:"auto"},menuButton:{marginLeft:-12,marginRight:20},brand:{fontWeight:800,fontSize:"1.2em",boxShadow:"none",fontFamily:"Montserrat",color:"#000 !important"},appBar:{backgroundColor:G,color:"#000"}}).menuButton={marginLeft:12,marginRight:20},t.hide={display:"none"},t.drawer={width:250,flexShrink:0},t.drawerHeader=Object.assign({backgroundColor:G,display:"flex",alignItems:"center",padding:"0 8px"},e.mixins.toolbar,{justifyContent:"flex-end"}),t.content={width:"90%",margin:"0 auto",marginTop:"8em"},t},{withTheme:!0})(H)},206:function(e,t,a){"use strict";var n=a(207),r=a(0),o=a.n(r),i=a(1),l=a.n(i),c=a(227),s=a.n(c);function u(e){var t=e.description,a=e.lang,r=e.meta,i=e.title,l=n.data.site,c=t||l.siteMetadata.description;return o.a.createElement(s.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:i},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:c}].concat(r)})}u.defaultProps={lang:"en",meta:[],description:""},u.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),title:l.a.string.isRequired},t.a=u},207:function(e){e.exports={data:{site:{siteMetadata:{title:"Lama Corp",description:"Lama Corp Website.",author:"Lama Corp"}}}}},234:function(e,t,a){"use strict";a(252)("link",function(e){return function(t){return e(this,"a","href",t)}})},241:function(e,t,a){"use strict";a.d(t,"a",function(){return c});a(234);var n=a(6),r=a.n(n),o=a(0),i=a.n(o),l=a(195),c=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.link,a=e.text;return i.a.createElement(l.a,{to:t},i.a.createElement("button",{className:"button lama"},a))},t}(o.Component)},242:function(e,t,a){"use strict";var n=a(6),r=a.n(n),o=a(0),i=a.n(o),l=a(241),c=(a(234),a(84),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.link,a=e.text;return i.a.createElement("a",{rel:"nofollow",href:t},i.a.createElement("button",{className:"button lama-outlined"},a))},t}(o.Component)),s=a(195);a.d(t,"a",function(){return u});var u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.content,n=e.primaryButton,r=e.secondaryButton,o=[];return i.a.createElement(s.a,{to:n[0]},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-header"},i.a.createElement("h2",{className:"h1 card-title"},t)),i.a.createElement("p",{className:"card-content"},a),i.a.createElement("div",{className:"card-actions"},(void 0!==n&&o.push(i.a.createElement(l.a,{text:n[1],link:n[0]})),void 0!==r&&(!0===r[2]?o.push(i.a.createElement(c,{externalLink:!0,text:r[1],link:r[0]})):o.push(i.a.createElement(c,{text:r[1],link:r[0]}))),o))))},t}(o.Component)},252:function(e,t,a){var n=a(13),r=a(24),o=a(25),i=/"/g,l=function(e,t,a,n){var r=String(o(e)),l="<"+t;return""!==a&&(l+=" "+a+'="'+String(n).replace(i,"&quot;")+'"'),l+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(l),n(n.P+n.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},253:function(e,t,a){"use strict";a.d(t,"a",function(){return c});var n=a(6),r=a.n(n),o=a(0),i=a.n(o),l=a(242),c=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement("div",{className:"card-container"},i.a.createElement(l.a,{title:"Amazing Project",content:"Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire. Il trouve ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C.",primaryButton:["/projects/amazingproject","See more"],secondaryButton:["https://www.gitlab.com","Check this on GitLab",!0]}),i.a.createElement(l.a,{title:"Amazing Project",content:"Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire. Il trouve ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C.",primaryButton:["/projects/amazingproject","See more"],secondaryButton:["https://www.gitlab.com","Check this on GitLab",!0]}),i.a.createElement(l.a,{title:"Amazing Project",content:"Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire. Il trouve ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C.",primaryButton:["/projects/amazingproject","See more"],secondaryButton:["https://www.gitlab.com","Check this on GitLab",!0]}),i.a.createElement(l.a,{title:"Amazing Project",content:"Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire. Il trouve ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C.",primaryButton:["/projects/amazingproject","See more"],secondaryButton:["https://www.gitlab.com","Check this on GitLab",!0]}))},t}(o.Component)}}]);