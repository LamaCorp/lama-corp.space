(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{185:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return s});var n=a(6),r=a.n(n),l=a(0),o=a.n(l),i=a(194),s=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement(i.a,null,o.a.createElement("h1",null,"Amazing Project"),o.a.createElement("p",null,"Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d'entre elles a été altérée par l'addition d'humour ou de mots aléatoires qui ne ressemblent pas une seconde à du texte standard. Si vous voulez utiliser un passage du Lorem Ipsum, vous devez être sûr qu'il n'y a rien d'embarrassant caché dans le texte. Tous les générateurs de Lorem Ipsum sur Internet tendent à reproduire le même extrait sans fin, ce qui fait de lipsum.com le seul vrai générateur de Lorem Ipsum. Iil utilise un dictionnaire de plus de 200 mots latins, en combinaison de plusieurs structures de phrases, pour générer un Lorem Ipsum irréprochable. Le Lorem Ipsum ainsi obtenu ne contient aucune répétition, ni ne contient des mots farfelus, ou des touches d'humour."),o.a.createElement("div",{className:"card-container"},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-header"},o.a.createElement("h1",{className:"card-title"},"A really")),o.a.createElement("p",{className:"card-content"},"Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire. Il trouve ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C."))),o.a.createElement("a",{rel:"nofollow",className:"button lama",href:"https://gitlab.com"},"Check on Gitlab"))},t}(l.Component)},193:function(e,t,a){"use strict";a.d(t,"a",function(){return u});var n=a(6),r=a.n(n),l=a(0),o=a.n(l),i=a(206),s=a.n(i),c=a(194),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.to,a=e.children;return o.a.createElement(s.a,{paintDrip:!0,hex:c.b,to:t},a)},t}(l.Component)},194:function(e,t,a){"use strict";a.d(t,"b",function(){return F});var n=a(6),r=a.n(n),l=(a(31),a(0)),o=a.n(l),i=a(1),s=a.n(i),c=a(222),u=a(211),m=a.n(u),d=a(213),p=a.n(d),h=a(214),f=a.n(h),E=a(215),g=a.n(E),b=a(217),w=a.n(b),v=a(221),y=a.n(v),C=a(207),x=a.n(C),L=a(208),N=a.n(L),I=a(209),k=a.n(I),D=a(210),j=a.n(D),B=a(193),S=a(218),q=a.n(S),A=a(220),O=a.n(A),z=a(219),T=a.n(z),H=a(216),J=a.n(H),P=a(212),R=a.n(P),F=(a(179),"#ffa500"),G=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={top:!1,left:!1,bottom:!1,right:!1},t.toggleDrawer=function(e,a){return function(){var n;t.setState(((n={})[e]=a,n))}},t}return r()(t,e),t.prototype.render=function(){var e,t=this.props,a=t.classes,n=t.children,r=this.state.left;return o.a.createElement("div",{className:"all"},o.a.createElement(x.a,{position:"fixed",className:a.appBar},o.a.createElement(N.a,{disableGutters:!r},o.a.createElement(k.a,((e={color:"inherit","aria-label":"Open drawer",onClick:this.handleDrawerOpen,className:a.menuButton}).onClick=this.toggleDrawer("left",!0),e),o.a.createElement(j.a,null)),o.a.createElement(B.a,{to:"/",className:a.brand},"Lama Corp"))),o.a.createElement(m.a,{open:this.state.left,onClose:this.toggleDrawer("left",!1),onOpen:this.toggleDrawer("left",!0)},o.a.createElement("div",{className:a.drawerHeader},o.a.createElement(k.a,{onClick:this.toggleDrawer("left",!1)},o.a.createElement(R.a,null))),o.a.createElement("div",{tabIndex:0,role:"button",onClick:this.toggleDrawer("left",!1),onKeyDown:this.toggleDrawer("left",!1)},o.a.createElement(p.a,{className:a.list},o.a.createElement(B.a,{to:"/"},o.a.createElement(f.a,{button:!0},o.a.createElement(g.a,null,o.a.createElement(J.a,null)),o.a.createElement(w.a,{primary:"Home"}))),o.a.createElement(B.a,{to:"/projects"},o.a.createElement(f.a,{button:!0},o.a.createElement(g.a,null,o.a.createElement(q.a,null)),o.a.createElement(w.a,{primary:"Projects"}))),o.a.createElement(B.a,{to:"/about"},o.a.createElement(f.a,{button:!0},o.a.createElement(g.a,null,o.a.createElement(T.a,null)),o.a.createElement(w.a,{primary:"About"}))),o.a.createElement(B.a,{to:"/blog"},o.a.createElement(f.a,{button:!0},o.a.createElement(g.a,null,o.a.createElement(O.a,null)),o.a.createElement(w.a,{primary:"Blog"}))),o.a.createElement(B.a,{to:"/contact"},o.a.createElement(f.a,{button:!0},o.a.createElement(g.a,null,o.a.createElement(y.a,null)),o.a.createElement(w.a,{primary:"Contact"})))))),o.a.createElement("div",{className:a.content},n),o.a.createElement("footer",null,"© ",(new Date).getFullYear()," All rights reserved, Lama Corp | lama-corp.space"))},t}(o.a.Component);G.propTypes={classes:s.a.object.isRequired},t.a=Object(c.withStyles)(function(e){var t;return(t={list:{width:250,backgroundColor:F,height:"calc(100vh - 64px)"},fullList:{width:"auto"},menuButton:{marginLeft:-12,marginRight:20},brand:{fontWeight:800,fontSize:"1.2em",boxShadow:"none",fontFamily:"Montserrat",color:"#000 !important"},appBar:{backgroundColor:F,color:"#000"}}).menuButton={marginLeft:12,marginRight:20},t.hide={display:"none"},t.drawer={width:250,flexShrink:0},t.drawerHeader=Object.assign({backgroundColor:F,display:"flex",alignItems:"center",padding:"0 8px"},e.mixins.toolbar,{justifyContent:"flex-end"}),t.content={width:"90%",margin:"0 auto",marginTop:"8em"},t},{withTheme:!0})(G)}}]);