(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{185:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return u});var n=a(21),r=a.n(n),l=a(6),o=a.n(l),i=a(0),c=a.n(i),s=a(196),m=a(206),u=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={body:"",subject:""},a.handleBody=a.handleBody.bind(r()(a)),a.handleSubject=a.handleSubject.bind(r()(a)),a}o()(t,e);var a=t.prototype;return a.handleBody=function(e){this.setState({body:e.target.value})},a.handleSubject=function(e){this.setState({subject:e.target.value})},a.render=function(){var e="mailto:felixdorn@protonmail.com?subject="+this.state.subject+"&body="+this.state.body;return c.a.createElement(s.a,null,c.a.createElement(m.a,{title:"Contact"}),c.a.createElement("h1",null,"Contact us"),c.a.createElement("form",null,c.a.createElement("input",{className:"field",type:"text",onChange:this.handleSubject,placeholder:"Enter the subject"}),c.a.createElement("textarea",{onChange:this.handleBody,className:"field",placeholder:"Body",value:this.state.value}),c.a.createElement("a",{href:e,className:"button lama mt-2"},"Send")))},t}(i.Component)},195:function(e,t,a){"use strict";a.d(t,"a",function(){return m});var n=a(6),r=a.n(n),l=a(0),o=a.n(l),i=a(208),c=a.n(i),s=a(196),m=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.to,a=e.children;return o.a.createElement(c.a,{paintDrip:!0,hex:s.b,to:t},a)},t}(l.Component)},196:function(e,t,a){"use strict";a.d(t,"b",function(){return P});var n=a(6),r=a.n(n),l=(a(31),a(0)),o=a.n(l),i=a(1),c=a.n(i),s=a(224),m=a(213),u=a.n(m),d=a(215),p=a.n(d),h=a(216),f=a.n(h),g=a(217),E=a.n(g),b=a(219),y=a.n(b),w=a(223),v=a.n(w),C=a(209),j=a.n(C),x=a(210),S=a.n(x),B=a(211),D=a.n(B),k=a(212),N=a.n(k),L=a(195),O=a(220),M=a.n(O),T=a(222),A=a.n(T),R=a(221),H=a.n(R),q=a(218),F=a.n(q),I=a(214),J=a.n(I),P=(a(181),"#ffa500"),W=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={top:!1,left:!1,bottom:!1,right:!1},t.toggleDrawer=function(e,a){return function(){var n;t.setState(((n={})[e]=a,n))}},t}return r()(t,e),t.prototype.render=function(){var e,t=this.props,a=t.classes,n=t.children,r=this.state.left;return o.a.createElement("div",{className:"all"},o.a.createElement(j.a,{position:"fixed",className:a.appBar},o.a.createElement(S.a,{disableGutters:!r},o.a.createElement(D.a,((e={color:"inherit","aria-label":"Open drawer",onClick:this.handleDrawerOpen,className:a.menuButton}).onClick=this.toggleDrawer("left",!0),e),o.a.createElement(N.a,null)),o.a.createElement(L.a,{to:"/",className:a.brand},"Lama Corp"))),o.a.createElement(u.a,{open:this.state.left,onClose:this.toggleDrawer("left",!1),onOpen:this.toggleDrawer("left",!0)},o.a.createElement("div",{className:a.drawerHeader},o.a.createElement(D.a,{onClick:this.toggleDrawer("left",!1)},o.a.createElement(J.a,null))),o.a.createElement("div",{tabIndex:0,role:"button",onClick:this.toggleDrawer("left",!1),onKeyDown:this.toggleDrawer("left",!1)},o.a.createElement(p.a,{className:a.list},o.a.createElement(L.a,{to:"/"},o.a.createElement(f.a,{button:!0},o.a.createElement(E.a,null,o.a.createElement(F.a,null)),o.a.createElement(y.a,{primary:"Home"}))),o.a.createElement(L.a,{to:"/projects"},o.a.createElement(f.a,{button:!0},o.a.createElement(E.a,null,o.a.createElement(M.a,null)),o.a.createElement(y.a,{primary:"Projects"}))),o.a.createElement(L.a,{to:"/about"},o.a.createElement(f.a,{button:!0},o.a.createElement(E.a,null,o.a.createElement(H.a,null)),o.a.createElement(y.a,{primary:"About"}))),o.a.createElement(L.a,{to:"/blog"},o.a.createElement(f.a,{button:!0},o.a.createElement(E.a,null,o.a.createElement(A.a,null)),o.a.createElement(y.a,{primary:"Blog"}))),o.a.createElement(L.a,{to:"/contact"},o.a.createElement(f.a,{button:!0},o.a.createElement(E.a,null,o.a.createElement(v.a,null)),o.a.createElement(y.a,{primary:"Contact"})))))),o.a.createElement("div",{className:a.content},n),o.a.createElement("footer",null,"© ",(new Date).getFullYear()," All rights reserved, Lama Corp | lama-corp.space"))},t}(o.a.Component);W.propTypes={classes:c.a.object.isRequired},t.a=Object(s.withStyles)(function(e){var t;return(t={list:{width:250,backgroundColor:P,height:"calc(100vh - 64px)"},fullList:{width:"auto"},menuButton:{marginLeft:-12,marginRight:20},brand:{fontWeight:800,fontSize:"1.2em",boxShadow:"none",fontFamily:"Montserrat",color:"#000 !important"},appBar:{backgroundColor:P,color:"#000"}}).menuButton={marginLeft:12,marginRight:20},t.hide={display:"none"},t.drawer={width:250,flexShrink:0},t.drawerHeader=Object.assign({backgroundColor:P,display:"flex",alignItems:"center",padding:"0 8px"},e.mixins.toolbar,{justifyContent:"flex-end"}),t.content={width:"90%",margin:"0 auto",marginTop:"8em"},t},{withTheme:!0})(W)},206:function(e,t,a){"use strict";var n=a(207),r=a(0),l=a.n(r),o=a(1),i=a.n(o),c=a(227),s=a.n(c);function m(e){var t=e.description,a=e.lang,r=e.meta,o=e.title,i=n.data.site,c=t||i.siteMetadata.description;return l.a.createElement(s.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+i.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:o},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:i.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:c}].concat(r)})}m.defaultProps={lang:"en",meta:[],description:""},m.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.arrayOf(i.a.object),title:i.a.string.isRequired},t.a=m},207:function(e){e.exports={data:{site:{siteMetadata:{title:"Lama Corp",description:"Lama Corp Website.",author:"Lama Corp"}}}}}}]);