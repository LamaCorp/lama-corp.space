(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{188:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return s});var n=a(6),r=a.n(n),l=a(0),o=a.n(l),c=a(208),s=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement(c.a,{noContainer:!0},o.a.createElement("div",{className:"hero"},o.a.createElement("img",{className:"hero-image",src:"https://source.unsplash.com/WLUHO9A_xik/1200x1200",alt:""}),o.a.createElement("h1",{className:"hero-title"},"Diego Dorn")),o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"bio-container"},o.a.createElement("h1",null,"Bio"),o.a.createElement("p",null,"Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l’imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n’a pas fait que survivre cinq siècles, mais s’est aussi adapté à la bureautique informatique, sans que son contenu n’en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker."))))},t}(l.Component)},194:function(e,t,a){"use strict";a.d(t,"a",function(){return i});var n=a(6),r=a.n(n),l=a(0),o=a.n(l),c=a(217),s=a.n(c),i=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.to,a=e.children;return o.a.createElement(s.a,{fade:!0,to:t},a)},t}(l.Component)},208:function(e,t,a){"use strict";var n=a(6),r=a.n(n),l=(a(31),a(0)),o=a.n(l),c=a(1),s=a.n(c),i=a(205),m=a(220),u=a.n(m),p=a(222),d=a.n(p),E=a(223),f=a.n(E),h=a(224),g=a.n(h),b=a(225),w=a.n(b),x=a(226),y=a.n(x),v=a(197),N=a.n(v),C=a(199),B=a.n(C),L=a(206),k=a.n(L),D=a(219),I=a.n(D),j=a(194),q=a(202),O=a.n(q),R=a(204),S=a.n(R),A=a(203),H=a.n(A),T=a(201),F=a.n(T),G=a(221),M=a.n(G),P=a(218),W=a.n(P),z=a(200),J=a.n(z);function K(e){var t,a=e.classes;return o.a.createElement("div",{className:a.root},o.a.createElement(N.a,{className:a.appBar,position:"fixed"},o.a.createElement(B.a,{style:{backgroundColor:Y}},o.a.createElement("span",((t={to:"/",className:a.menuButton}).className=a.grow,t),o.a.createElement(j.a,{to:"/"},"Lama Corp")),o.a.createElement(J.a,{color:"inherit",className:a.button},o.a.createElement(F.a,{className:a.leftIcon}),o.a.createElement(j.a,{to:"/"},"Home")),o.a.createElement(J.a,{color:"inherit",className:a.button},o.a.createElement(O.a,{className:a.leftIcon}),o.a.createElement(j.a,{to:"/projects"},"              Projects")),o.a.createElement(J.a,{color:"inherit",className:a.button},o.a.createElement(H.a,{className:a.leftIcon}),o.a.createElement(j.a,{to:"/about"},"About")),o.a.createElement(J.a,{color:"inherit",className:a.lastButton},o.a.createElement(S.a,{className:a.leftIcon}),o.a.createElement(j.a,{to:"/blog"},"Blog")))))}K.propTypes={classes:s.a.object.isRequired};var U=Object(i.withStyles)({root:{flexGrow:1},appBar:{color:"#000"},leftIcon:{marginRight:"10px",color:"#6c4600"},button:{color:"#6c4600",marginRight:"10px"},grow:{flexGrow:1,fontWeight:400,fontSize:"1.2em",boxShadow:"none",fontFamily:"Montserrat",color:"#000 !important"},lastButton:{marginRight:"0px !important"},menuButton:{marginLeft:-12,marginRight:20}})(K);a(181);a.d(t,"b",function(){return Y});var Y="#ffa500",_=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={top:!1,left:!1,bottom:!1,right:!1},t.toggleDrawer=function(e,a){return function(){var n;t.setState(((n={})[e]=a,n))}},t}return r()(t,e),t.prototype.render=function(){var e,t,a=this.props,n=a.classes,r=a.children,l=this.state.left;return o.a.createElement("div",{className:"all"},o.a.createElement(W.a,{query:"(min-width: 885px"},o.a.createElement(U,null)),o.a.createElement(W.a,{query:"(max-width: 885px)"},o.a.createElement(N.a,{position:"fixed",className:n.appBar},o.a.createElement(B.a,{disableGutters:!l},o.a.createElement(k.a,((e={color:"inherit","aria-label":"Open drawer",onClick:this.handleDrawerOpen,className:n.menuButton}).onClick=this.toggleDrawer("left",!0),e),o.a.createElement(I.a,null)),o.a.createElement(j.a,((t={to:"/",className:n.brand}).className=n.menuButton,t),"Lama Corp"))),o.a.createElement(u.a,{open:this.state.left,onClose:this.toggleDrawer("left",!1),onOpen:this.toggleDrawer("left",!0)},o.a.createElement("div",{className:n.drawerHeader},o.a.createElement(k.a,{onClick:this.toggleDrawer("left",!1)},o.a.createElement(M.a,null))),o.a.createElement("div",{tabIndex:0,role:"button",onClick:this.toggleDrawer("left",!1),onKeyDown:this.toggleDrawer("left",!1)},o.a.createElement(d.a,{className:n.list},o.a.createElement(j.a,{to:"/"},o.a.createElement(f.a,{button:!0},o.a.createElement(g.a,null,o.a.createElement(F.a,null)),o.a.createElement(w.a,{primary:"Home"}))),o.a.createElement(j.a,{to:"/projects"},o.a.createElement(f.a,{button:!0},o.a.createElement(g.a,null,o.a.createElement(O.a,null)),o.a.createElement(w.a,{primary:"Projects"}))),o.a.createElement(j.a,{to:"/about"},o.a.createElement(f.a,{button:!0},o.a.createElement(g.a,null,o.a.createElement(H.a,null)),o.a.createElement(w.a,{primary:"About"}))),o.a.createElement(j.a,{to:"/blog"},o.a.createElement(f.a,{button:!0},o.a.createElement(g.a,null,o.a.createElement(S.a,null)),o.a.createElement(w.a,{primary:"Blog"}))),o.a.createElement(j.a,{to:"/contact"},o.a.createElement(f.a,{button:!0},o.a.createElement(g.a,null,o.a.createElement(y.a,null)),o.a.createElement(w.a,{primary:"Contact"}))))))),o.a.createElement("div",{className:n.content},r),o.a.createElement("footer",null,"© ",(new Date).getFullYear()," All rights reserved, Lama Corp | lama-corp.space"))},t}(o.a.Component);_.propTypes={classes:s.a.object.isRequired};t.a=Object(i.withStyles)(function(e){var t;return(t={list:{width:250,backgroundColor:Y,height:"calc(100vh - 64px)"},fullList:{width:"auto"},menuButton:{marginLeft:-12,marginRight:20},brandOnDesktop:{marginLeft:"32px !important"},brand:{fontWeight:400,fontSize:"1.2em",boxShadow:"none",fontFamily:"Montserrat",color:"#000 !important"},appBar:{backgroundColor:Y,color:"#000"}}).menuButton={marginLeft:12,marginRight:20},t.hide={display:"none"},t.drawer={width:250,flexShrink:0},t.drawerHeader=Object.assign({backgroundColor:Y,display:"flex",alignItems:"center",padding:"0 8px"},e.mixins.toolbar,{justifyContent:"flex-end"}),t.content={width:"90%",margin:"0 auto",marginTop:"8em"},t},{withTheme:!0})(_)}}]);