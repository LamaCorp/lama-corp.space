(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{192:function(e,t,a){"use strict";a.r(t);a(31);var n=a(6),r=a.n(n),l=a(0),o=a.n(l),i=a(195),c=a(196),s=a(206),m=a(437),p=a.n(m),u=a(438),d=a.n(u);d.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete d.a.googleFonts;var f=new p.a(d.a);var g=f.rhythm,h=f.scale;a.d(t,"pageQuery",function(){return w});var E=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata.title,a=this.props.pageContext,n=a.previous,r=a.next;return o.a.createElement(c.a,{location:this.props.location,title:t},o.a.createElement(s.a,{title:e.frontmatter.title,description:e.frontmatter.description||e.excerpt}),o.a.createElement("h1",null,e.frontmatter.title),o.a.createElement("p",{style:Object.assign({},h(-.2),{display:"block",marginBottom:g(1),marginTop:g(-1)})},e.frontmatter.date),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}),o.a.createElement("hr",{style:{marginBottom:g(1)}}),o.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},o.a.createElement("li",null,n&&o.a.createElement(i.a,{to:n.fields.slug,rel:"prev"},"← ",n.frontmatter.title)),o.a.createElement("li",null,r&&o.a.createElement(i.a,{to:r.fields.slug,rel:"next"},r.frontmatter.title," →"))))},t}(o.a.Component),w=(t.default=E,"3654438753")},195:function(e,t,a){"use strict";a.d(t,"a",function(){return m});var n=a(6),r=a.n(n),l=a(0),o=a.n(l),i=a(208),c=a.n(i),s=a(196),m=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.to,a=e.children;return o.a.createElement(c.a,{paintDrip:!0,hex:s.b,to:t},a)},t}(l.Component)},196:function(e,t,a){"use strict";a.d(t,"b",function(){return J});var n=a(6),r=a.n(n),l=(a(31),a(0)),o=a.n(l),i=a(1),c=a.n(i),s=a(224),m=a(213),p=a.n(m),u=a(215),d=a.n(u),f=a(216),g=a.n(f),h=a(217),E=a.n(h),w=a(219),y=a.n(w),b=a(223),v=a.n(b),C=a(209),x=a.n(C),k=a(210),D=a.n(k),j=a(211),L=a.n(j),S=a(212),B=a.n(S),T=a(195),M=a(220),N=a.n(M),O=a(222),R=a.n(O),A=a(221),H=a.n(A),F=a(218),I=a.n(F),W=a(214),q=a.n(W),J=(a(181),"#ffa500"),P=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={top:!1,left:!1,bottom:!1,right:!1},t.toggleDrawer=function(e,a){return function(){var n;t.setState(((n={})[e]=a,n))}},t}return r()(t,e),t.prototype.render=function(){var e,t=this.props,a=t.classes,n=t.children,r=this.state.left;return o.a.createElement("div",{className:"all"},o.a.createElement(x.a,{position:"fixed",className:a.appBar},o.a.createElement(D.a,{disableGutters:!r},o.a.createElement(L.a,((e={color:"inherit","aria-label":"Open drawer",onClick:this.handleDrawerOpen,className:a.menuButton}).onClick=this.toggleDrawer("left",!0),e),o.a.createElement(B.a,null)),o.a.createElement(T.a,{to:"/",className:a.brand},"Lama Corp"))),o.a.createElement(p.a,{open:this.state.left,onClose:this.toggleDrawer("left",!1),onOpen:this.toggleDrawer("left",!0)},o.a.createElement("div",{className:a.drawerHeader},o.a.createElement(L.a,{onClick:this.toggleDrawer("left",!1)},o.a.createElement(q.a,null))),o.a.createElement("div",{tabIndex:0,role:"button",onClick:this.toggleDrawer("left",!1),onKeyDown:this.toggleDrawer("left",!1)},o.a.createElement(d.a,{className:a.list},o.a.createElement(T.a,{to:"/"},o.a.createElement(g.a,{button:!0},o.a.createElement(E.a,null,o.a.createElement(I.a,null)),o.a.createElement(y.a,{primary:"Home"}))),o.a.createElement(T.a,{to:"/projects"},o.a.createElement(g.a,{button:!0},o.a.createElement(E.a,null,o.a.createElement(N.a,null)),o.a.createElement(y.a,{primary:"Projects"}))),o.a.createElement(T.a,{to:"/about"},o.a.createElement(g.a,{button:!0},o.a.createElement(E.a,null,o.a.createElement(H.a,null)),o.a.createElement(y.a,{primary:"About"}))),o.a.createElement(T.a,{to:"/blog"},o.a.createElement(g.a,{button:!0},o.a.createElement(E.a,null,o.a.createElement(R.a,null)),o.a.createElement(y.a,{primary:"Blog"}))),o.a.createElement(T.a,{to:"/contact"},o.a.createElement(g.a,{button:!0},o.a.createElement(E.a,null,o.a.createElement(v.a,null)),o.a.createElement(y.a,{primary:"Contact"})))))),o.a.createElement("div",{className:a.content},n),o.a.createElement("footer",null,"© ",(new Date).getFullYear()," All rights reserved, Lama Corp | lama-corp.space"))},t}(o.a.Component);P.propTypes={classes:c.a.object.isRequired},t.a=Object(s.withStyles)(function(e){var t;return(t={list:{width:250,backgroundColor:J,height:"calc(100vh - 64px)"},fullList:{width:"auto"},menuButton:{marginLeft:-12,marginRight:20},brand:{fontWeight:800,fontSize:"1.2em",boxShadow:"none",fontFamily:"Montserrat",color:"#000 !important"},appBar:{backgroundColor:J,color:"#000"}}).menuButton={marginLeft:12,marginRight:20},t.hide={display:"none"},t.drawer={width:250,flexShrink:0},t.drawerHeader=Object.assign({backgroundColor:J,display:"flex",alignItems:"center",padding:"0 8px"},e.mixins.toolbar,{justifyContent:"flex-end"}),t.content={width:"90%",margin:"0 auto",marginTop:"8em"},t},{withTheme:!0})(P)},206:function(e,t,a){"use strict";var n=a(207),r=a(0),l=a.n(r),o=a(1),i=a.n(o),c=a(227),s=a.n(c);function m(e){var t=e.description,a=e.lang,r=e.meta,o=e.title,i=n.data.site,c=t||i.siteMetadata.description;return l.a.createElement(s.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+i.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:o},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:i.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:c}].concat(r)})}m.defaultProps={lang:"en",meta:[],description:""},m.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.arrayOf(i.a.object),title:i.a.string.isRequired},t.a=m},207:function(e){e.exports={data:{site:{siteMetadata:{title:"Lama Corp",description:"Lama Corp Website.",author:"Lama Corp"}}}}}}]);