(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{186:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return s});var n=a(6),r=a.n(n),o=a(0),l=a.n(o),c=a(208),s=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return l.a.createElement(c.a,{noContainer:!0},l.a.createElement("div",{className:"hero"},l.a.createElement("img",{className:"hero-image",src:"https://source.unsplash.com/WLUHO9A_xik/1200x1200",alt:""}),l.a.createElement("h1",{className:"hero-title"},"Diego Dorn")),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"bio-container"},l.a.createElement("h1",null,"Bio"),l.a.createElement("p",null,"Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l’imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n’a pas fait que survivre cinq siècles, mais s’est aussi adapté à la bureautique informatique, sans que son contenu n’en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker."))))},t}(o.Component)},191:function(e,t,a){"use strict";a.d(t,"a",function(){return i});var n=a(6),r=a.n(n),o=a(0),l=a.n(o),c=a(212),s=a.n(c),i=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.to,a=e.children;return l.a.createElement(s.a,{fade:!0,to:t},a)},t}(o.Component)},208:function(e,t,a){"use strict";var n=a(6),r=a.n(n),o=a(0),l=a.n(o),c=a(1),s=a.n(c),i=a(207),m=a(201),u=a.n(m),p=a(202),d=a.n(p),f=a(215),E=a.n(f),h=a(204),g=a.n(h),b=a(206),w=a.n(b),v=a(203),x=a.n(v),y=a(205),N=a.n(y),C=a(191);function k(e){var t=e.classes;return l.a.createElement("div",{className:t.root},l.a.createElement(u.a,{className:t.appBar,position:"fixed"},l.a.createElement(d.a,{style:{backgroundColor:K}},l.a.createElement("span",{to:"/",className:t.grow+" "+t.menuButton},l.a.createElement(C.a,{to:"/"},"Lama Corp")),l.a.createElement(C.a,{to:"/"},l.a.createElement(E.a,{color:"inherit",className:t.button},l.a.createElement(x.a,{className:t.leftIcon}),"Home")),l.a.createElement(C.a,{to:"/projects"},l.a.createElement(E.a,{color:"inherit",className:t.button},l.a.createElement(g.a,{className:t.leftIcon}),"Projects")),l.a.createElement(C.a,{to:"/contact"},l.a.createElement(E.a,{color:"inherit",className:t.button},l.a.createElement(N.a,{className:t.leftIcon}),"Contact")),l.a.createElement(C.a,{to:"/about"},l.a.createElement(E.a,{color:"inherit",className:t.button},l.a.createElement(w.a,{className:t.leftIcon}),"About")))))}k.propTypes={classes:s.a.object.isRequired};var D=Object(i.withStyles)({root:{flexGrow:1},appBar:{color:"#000"},leftIcon:{marginRight:"10px",color:"#6c4600"},button:{color:"#6c4600",marginRight:"10px"},grow:{flexGrow:1,fontWeight:400,fontSize:"1.2em",boxShadow:"none",fontFamily:"Montserrat",color:"#000 !important"},lastButton:{marginRight:"0px !important"},menuButton:{marginRight:20}})(k),L=(a(31),a(222)),I=a.n(L),B=a(223),j=a.n(B),O=a(224),q=a.n(O),S=a(225),R=a.n(S),A=a(218),H=a.n(A),M=a(219),F=a.n(M),G=a(220),P=a.n(G),T=a(221),W=a.n(T),z=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={top:!1,left:!1,bottom:!1,right:!1},t.toggleDrawer=function(e,a){return function(){var n;t.setState(((n={})[e]=a,n))}},t}return r()(t,e),t.prototype.render=function(){var e=this.props.classes,t=this.state.left;return l.a.createElement("div",{className:e.root},l.a.createElement(u.a,{position:"fixed",className:e.appBar},l.a.createElement(d.a,{disableGutters:!t},l.a.createElement(H.a,{color:"inherit","aria-label":"Open drawer",className:e.menuButton,onClick:this.toggleDrawer("left",!0)},l.a.createElement(F.a,null)),l.a.createElement(C.a,{to:"/",className:e.brand+" "+e.menuButton},"Lama Corp"))),l.a.createElement(P.a,{open:this.state.left,onClose:this.toggleDrawer("left",!1),onOpen:this.toggleDrawer("left",!0)},l.a.createElement("div",{className:e.drawerHeader},l.a.createElement(H.a,{onClick:this.toggleDrawer("left",!1)},l.a.createElement(W.a,null))),l.a.createElement("div",{tabIndex:0,role:"button",onClick:this.toggleDrawer("left",!1),onKeyDown:this.toggleDrawer("left",!1)},l.a.createElement(I.a,{className:e.list},l.a.createElement(C.a,{to:"/"},l.a.createElement(j.a,{button:!0},l.a.createElement(q.a,null,l.a.createElement(x.a,null)),l.a.createElement(R.a,{primary:"Home"}))),l.a.createElement(C.a,{to:"/projects"},l.a.createElement(j.a,{button:!0},l.a.createElement(q.a,null,l.a.createElement(g.a,null)),l.a.createElement(R.a,{primary:"Projects"}))),l.a.createElement(C.a,{to:"/contact"},l.a.createElement(j.a,{button:!0},l.a.createElement(q.a,null,l.a.createElement(N.a,null)),l.a.createElement(R.a,{primary:"Contact"}))),l.a.createElement(C.a,{to:"/about"},l.a.createElement(j.a,{button:!0},l.a.createElement(q.a,null,l.a.createElement(w.a,null)),l.a.createElement(R.a,{primary:"About"})))))))},t}(l.a.Component);z.propTypes={classes:s.a.object.isRequired};var J=Object(i.withStyles)(function(e){return{list:{width:240,backgroundColor:K,height:"calc(100vh - 64px)"},fullList:{width:"auto"},root:{overflow:"hidden"},brandOnDesktop:{marginLeft:"32px !important"},brand:{fontWeight:400,fontSize:"1.2em",boxShadow:"none",fontFamily:"Montserrat",color:"#000 !important"},appBar:{backgroundColor:K,color:"#000"},menuButton:{marginLeft:12,marginRight:20},hide:{display:"none"},drawer:{width:240,flexShrink:0},drawerHeader:Object.assign({backgroundColor:K,display:"flex",alignItems:"center",padding:"0 8px"},e.mixins.toolbar,{justifyContent:"flex-end"})}},{withTheme:!0})(z);a(179);a.d(t,"b",function(){return K});var K="#ffa400",U=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,a=e.noContainer;return l.a.createElement("div",{className:"all"},l.a.createElement("header",null,l.a.createElement("nav",{className:"navbarOnDesktop"},l.a.createElement(D,null)),l.a.createElement("nav",{className:"navbarOnMobile"},l.a.createElement(J,null))),l.a.createElement("main",{className:a?"":"container"},t),l.a.createElement("footer",null,"© ",(new Date).getFullYear()," All rights reserved, Lama Corp | lama-corp.space"))},t}(l.a.Component);t.a=U}}]);