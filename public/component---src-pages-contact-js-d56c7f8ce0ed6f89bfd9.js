(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{183:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return u}),a.d(t,"pageQuery",function(){return p});var n=a(21),r=a.n(n),o=a(6),l=a.n(o),c=a(0),i=a.n(c),s=a(208),m=a(210),u=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={body:"",subject:""},a.handleBody=a.handleBody.bind(r()(a)),a.handleSubject=a.handleSubject.bind(r()(a)),a}l()(t,e);var a=t.prototype;return a.handleBody=function(e){this.setState({body:e.target.value})},a.handleSubject=function(e){this.setState({subject:e.target.value})},a.render=function(){var e="mailto:"+this.props.data.site.siteMetadata.mail+"?subject="+this.state.subject+"&body="+this.state.body;return i.a.createElement(s.a,null,i.a.createElement(m.a,{title:"Contact"}),i.a.createElement("h1",null,"Contact us"),i.a.createElement("form",null,i.a.createElement("input",{className:"field",type:"text",onChange:this.handleSubject,placeholder:"Enter the subject"}),i.a.createElement("textarea",{onChange:this.handleBody,className:"field",placeholder:"Body",value:this.state.value}),i.a.createElement("a",{href:e,className:"button lama mt-2"},"Send")))},t}(c.Component),p="1097489062"},191:function(e,t,a){"use strict";a.d(t,"a",function(){return s});var n=a(6),r=a.n(n),o=a(0),l=a.n(o),c=a(212),i=a.n(c),s=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.to,a=e.children;return l.a.createElement(i.a,{fade:!0,to:t},a)},t}(o.Component)},208:function(e,t,a){"use strict";var n=a(6),r=a.n(n),o=a(0),l=a.n(o),c=a(1),i=a.n(c),s=a(207),m=a(201),u=a.n(m),p=a(202),d=a.n(p),h=a(215),f=a.n(h),E=a(204),b=a.n(E),g=a(206),y=a.n(g),w=a(203),v=a.n(w),C=a(205),N=a.n(C),j=a(191);function x(e){var t=e.classes;return l.a.createElement("div",{className:t.root},l.a.createElement(u.a,{className:t.appBar,position:"fixed"},l.a.createElement(d.a,{style:{backgroundColor:K}},l.a.createElement("span",{to:"/",className:t.grow+" "+t.menuButton},l.a.createElement(j.a,{to:"/"},"Lama Corp")),l.a.createElement(j.a,{to:"/"},l.a.createElement(f.a,{color:"inherit",className:t.button},l.a.createElement(v.a,{className:t.leftIcon}),"Home")),l.a.createElement(j.a,{to:"/projects"},l.a.createElement(f.a,{color:"inherit",className:t.button},l.a.createElement(b.a,{className:t.leftIcon}),"Projects")),l.a.createElement(j.a,{to:"/contact"},l.a.createElement(f.a,{color:"inherit",className:t.button},l.a.createElement(N.a,{className:t.leftIcon}),"Contact")),l.a.createElement(j.a,{to:"/about"},l.a.createElement(f.a,{color:"inherit",className:t.button},l.a.createElement(y.a,{className:t.leftIcon}),"About")))))}x.propTypes={classes:i.a.object.isRequired};var B=Object(s.withStyles)({root:{flexGrow:1},appBar:{color:"#000"},leftIcon:{marginRight:"10px",color:"#6c4600"},button:{color:"#6c4600",marginRight:"10px"},grow:{flexGrow:1,fontWeight:400,fontSize:"1.2em",boxShadow:"none",fontFamily:"Montserrat",color:"#000 !important"},lastButton:{marginRight:"0px !important"},menuButton:{marginRight:20}})(x),S=(a(31),a(222)),k=a.n(S),D=a(223),L=a.n(D),O=a(224),M=a.n(O),R=a(225),I=a.n(R),A=a(218),T=a.n(A),H=a(219),q=a.n(H),F=a(220),G=a.n(F),P=a(221),W=a.n(P),z=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={top:!1,left:!1,bottom:!1,right:!1},t.toggleDrawer=function(e,a){return function(){var n;t.setState(((n={})[e]=a,n))}},t}return r()(t,e),t.prototype.render=function(){var e=this.props.classes,t=this.state.left;return l.a.createElement("div",{className:e.root},l.a.createElement(u.a,{position:"fixed",className:e.appBar},l.a.createElement(d.a,{disableGutters:!t},l.a.createElement(T.a,{color:"inherit","aria-label":"Open drawer",className:e.menuButton,onClick:this.toggleDrawer("left",!0)},l.a.createElement(q.a,null)),l.a.createElement(j.a,{to:"/",className:e.brand+" "+e.menuButton},"Lama Corp"))),l.a.createElement(G.a,{open:this.state.left,onClose:this.toggleDrawer("left",!1),onOpen:this.toggleDrawer("left",!0)},l.a.createElement("div",{className:e.drawerHeader},l.a.createElement(T.a,{onClick:this.toggleDrawer("left",!1)},l.a.createElement(W.a,null))),l.a.createElement("div",{tabIndex:0,role:"button",onClick:this.toggleDrawer("left",!1),onKeyDown:this.toggleDrawer("left",!1)},l.a.createElement(k.a,{className:e.list},l.a.createElement(j.a,{to:"/"},l.a.createElement(L.a,{button:!0},l.a.createElement(M.a,null,l.a.createElement(v.a,null)),l.a.createElement(I.a,{primary:"Home"}))),l.a.createElement(j.a,{to:"/projects"},l.a.createElement(L.a,{button:!0},l.a.createElement(M.a,null,l.a.createElement(b.a,null)),l.a.createElement(I.a,{primary:"Projects"}))),l.a.createElement(j.a,{to:"/contact"},l.a.createElement(L.a,{button:!0},l.a.createElement(M.a,null,l.a.createElement(N.a,null)),l.a.createElement(I.a,{primary:"Contact"}))),l.a.createElement(j.a,{to:"/about"},l.a.createElement(L.a,{button:!0},l.a.createElement(M.a,null,l.a.createElement(y.a,null)),l.a.createElement(I.a,{primary:"About"})))))))},t}(l.a.Component);z.propTypes={classes:i.a.object.isRequired};var J=Object(s.withStyles)(function(e){return{list:{width:240,backgroundColor:K,height:"calc(100vh - 64px)"},fullList:{width:"auto"},root:{overflow:"hidden"},brandOnDesktop:{marginLeft:"32px !important"},brand:{fontWeight:400,fontSize:"1.2em",boxShadow:"none",fontFamily:"Montserrat",color:"#000 !important"},appBar:{backgroundColor:K,color:"#000"},menuButton:{marginLeft:12,marginRight:20},hide:{display:"none"},drawer:{width:240,flexShrink:0},drawerHeader:Object.assign({backgroundColor:K,display:"flex",alignItems:"center",padding:"0 8px"},e.mixins.toolbar,{justifyContent:"flex-end"})}},{withTheme:!0})(z);a(179);a.d(t,"b",function(){return K});var K="#ffa400",Q=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,a=e.noContainer;return l.a.createElement("div",{className:"all"},l.a.createElement("header",null,l.a.createElement("nav",{className:"navbarOnDesktop"},l.a.createElement(B,null)),l.a.createElement("nav",{className:"navbarOnMobile"},l.a.createElement(J,null))),l.a.createElement("main",{className:a?"":"container"},t),l.a.createElement("footer",null,"© ",(new Date).getFullYear()," All rights reserved, Lama Corp | lama-corp.space"))},t}(l.a.Component);t.a=Q},210:function(e,t,a){"use strict";var n=a(211),r=a(0),o=a.n(r),l=a(1),c=a.n(l),i=a(235),s=a.n(i);function m(e){var t=e.description,a=e.lang,r=e.meta,l=e.title,c=n.data.site,i=t||c.siteMetadata.description;return o.a.createElement(s.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:i},{property:"og:title",content:l},{property:"og:description",content:i},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:i}].concat(r)})}m.defaultProps={lang:"en",meta:[],description:""},m.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),title:c.a.string.isRequired},t.a=m},211:function(e){e.exports={data:{site:{siteMetadata:{title:"Lama Corp",description:"Lama Corp Website.",author:"Lama Corp"}}}}}}]);