(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{191:function(A,e,t){"use strict";t.d(e,"a",function(){return s});var a=t(6),i=t.n(a),r=t(0),n=t.n(r),o=t(211),c=t.n(o),s=function(A){function e(){return A.apply(this,arguments)||this}return i()(e,A),e.prototype.render=function(){var A=this.props,e=A.to,t=A.children;return n.a.createElement(c.a,{fade:!0,to:e},t)},e}(r.Component)},207:function(A,e,t){"use strict";var a=t(6),i=t.n(a),r=t(0),n=t.n(r),o=t(1),c=t.n(o),s=t(206),l=t(201),d=t.n(l),p=t(202),u=t.n(p),f=t(214),E=t.n(f),m=t(204),g=t.n(m),h=t(205),b=t.n(h),B=t(203),j=t.n(B),Q=t(191);function w(A){var e=A.classes;return n.a.createElement("div",{className:e.root},n.a.createElement(d.a,{className:e.appBar,position:"fixed"},n.a.createElement(u.a,{style:{backgroundColor:Z}},n.a.createElement("span",{to:"/",className:e.grow+" "+e.menuButton},n.a.createElement(Q.a,{to:"/"},"Lama Corp")),n.a.createElement(Q.a,{to:"/"},n.a.createElement(E.a,{color:"inherit",className:e.button},n.a.createElement(j.a,{className:e.leftIcon}),"Home")),n.a.createElement(Q.a,{to:"/projects"},n.a.createElement(E.a,{color:"inherit",className:e.button},n.a.createElement(g.a,{className:e.leftIcon}),"Projects")),n.a.createElement(Q.a,{to:"/about"},n.a.createElement(E.a,{color:"inherit",className:e.button},n.a.createElement(b.a,{className:e.leftIcon}),"About")))))}w.propTypes={classes:c.a.object.isRequired};var C=Object(s.withStyles)({root:{flexGrow:1},appBar:{color:"#000"},leftIcon:{marginRight:"10px",color:"#6c4600"},button:{color:"#6c4600",marginRight:"10px"},grow:{flexGrow:1,fontWeight:400,fontSize:"1.2em",boxShadow:"none",fontFamily:"Montserrat",color:"#000 !important"},lastButton:{marginRight:"0px !important"},menuButton:{marginRight:20}})(w),v=(t(31),t(221)),N=t.n(v),I=t(222),x=t.n(I),y=t(223),S=t.n(y),D=t(224),Y=t.n(D),R=t(225),M=t.n(R),T=t(217),G=t.n(T),L=t(218),O=t.n(L),P=t(219),z=t.n(P),V=t(220),F=t.n(V),k=function(A){function e(){for(var e,t=arguments.length,a=new Array(t),i=0;i<t;i++)a[i]=arguments[i];return(e=A.call.apply(A,[this].concat(a))||this).state={top:!1,left:!1,bottom:!1,right:!1},e.toggleDrawer=function(A,t){return function(){var a;e.setState(((a={})[A]=t,a))}},e}return i()(e,A),e.prototype.render=function(){var A=this.props.classes,e=this.state.left;return n.a.createElement("div",{className:A.root},n.a.createElement(d.a,{position:"fixed",className:A.appBar},n.a.createElement(u.a,{disableGutters:!e},n.a.createElement(G.a,{color:"inherit","aria-label":"Open drawer",className:A.menuButton,onClick:this.toggleDrawer("left",!0)},n.a.createElement(O.a,null)),n.a.createElement(Q.a,{to:"/",className:A.brand+" "+A.menuButton},"Lama Corp"))),n.a.createElement(z.a,{open:this.state.left,onClose:this.toggleDrawer("left",!1),onOpen:this.toggleDrawer("left",!0)},n.a.createElement("div",{className:A.drawerHeader},n.a.createElement(G.a,{onClick:this.toggleDrawer("left",!1)},n.a.createElement(F.a,null))),n.a.createElement("div",{tabIndex:0,role:"button",onClick:this.toggleDrawer("left",!1),onKeyDown:this.toggleDrawer("left",!1)},n.a.createElement(N.a,{className:A.list},n.a.createElement(Q.a,{to:"/"},n.a.createElement(x.a,{button:!0},n.a.createElement(S.a,null,n.a.createElement(j.a,null)),n.a.createElement(Y.a,{primary:"Home"}))),n.a.createElement(Q.a,{to:"/projects"},n.a.createElement(x.a,{button:!0},n.a.createElement(S.a,null,n.a.createElement(g.a,null)),n.a.createElement(Y.a,{primary:"Projects"}))),n.a.createElement(Q.a,{to:"/about"},n.a.createElement(x.a,{button:!0},n.a.createElement(S.a,null,n.a.createElement(b.a,null)),n.a.createElement(Y.a,{primary:"About"}))),n.a.createElement(Q.a,{to:"/contact"},n.a.createElement(x.a,{button:!0},n.a.createElement(S.a,null,n.a.createElement(M.a,null)),n.a.createElement(Y.a,{primary:"Contact"})))))))},e}(n.a.Component);k.propTypes={classes:c.a.object.isRequired};var U=Object(s.withStyles)(function(A){return{list:{width:240,backgroundColor:Z,height:"calc(100vh - 64px)"},fullList:{width:"auto"},root:{overflow:"hidden"},brandOnDesktop:{marginLeft:"32px !important"},brand:{fontWeight:400,fontSize:"1.2em",boxShadow:"none",fontFamily:"Montserrat",color:"#000 !important"},appBar:{backgroundColor:Z,color:"#000"},menuButton:{marginLeft:12,marginRight:20},hide:{display:"none"},drawer:{width:240,flexShrink:0},drawerHeader:Object.assign({backgroundColor:Z,display:"flex",alignItems:"center",padding:"0 8px"},A.mixins.toolbar,{justifyContent:"flex-end"})}},{withTheme:!0})(k);t(179);t.d(e,"b",function(){return Z});var Z="#ffa400",q=function(A){function e(){return A.apply(this,arguments)||this}return i()(e,A),e.prototype.render=function(){var A=this.props,e=A.children,t=A.noContainer;return n.a.createElement("div",{className:"all"},n.a.createElement("div",{className:"navbarOnDesktop"},n.a.createElement(C,null)),n.a.createElement("div",{className:"navbarOnMobile"},n.a.createElement(U,null)),n.a.createElement("div",{className:t?"":"container"},e),n.a.createElement("footer",null,"© ",(new Date).getFullYear()," All rights reserved, Lama Corp | lama-corp.space"))},e}(n.a.Component);e.a=q},209:function(A,e,t){"use strict";var a=t(210),i=t(0),r=t.n(i),n=t(1),o=t.n(n),c=t(235),s=t.n(c);function l(A){var e=A.description,t=A.lang,i=A.meta,n=A.title,o=a.data.site,c=e||o.siteMetadata.description;return r.a.createElement(s.a,{htmlAttributes:{lang:t},title:n,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:n},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:n},{name:"twitter:description",content:c}].concat(i)})}l.defaultProps={lang:"en",meta:[],description:""},l.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),title:o.a.string.isRequired},e.a=l},210:function(A){A.exports={data:{site:{siteMetadata:{title:"Lama Corp",description:"Lama Corp Website.",author:"Lama Corp"}}}}},247:function(A,e,t){"use strict";t(433)("link",function(A){return function(e){return A(this,"a","href",e)}})},276:function(A,e,t){"use strict";t.d(e,"a",function(){return c});t(247);var a=t(6),i=t.n(a),r=t(0),n=t.n(r),o=t(191),c=function(A){function e(){return A.apply(this,arguments)||this}return i()(e,A),e.prototype.render=function(){var A=this.props,e=A.link,t=A.text;return n.a.createElement(o.a,{to:e},n.a.createElement("button",{className:"button lama"},t))},e}(r.Component)},277:function(A,e,t){"use strict";t.d(e,"a",function(){return c});var a=t(6),i=t.n(a),r=t(0),n=t.n(r),o=t(278),c=function(A){function e(){return A.apply(this,arguments)||this}return i()(e,A),e.prototype.render=function(){return n.a.createElement("div",{className:"card-container"},n.a.createElement(o.a,{restyled:!0,title:"Amazing Project",content:"Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire. Il trouve ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C.",primaryButton:["/projects/amazingproject","See more"],secondaryButton:["https://www.gitlab.com","Check this on GitLab",!0]}),n.a.createElement(o.a,{restyled:!0,title:"Amazing Project",content:"Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire. Il trouve ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C.",primaryButton:["/projects/amazingproject","See more"],secondaryButton:["https://www.gitlab.com","Check this on GitLab",!0]}),n.a.createElement(o.a,{restyled:!0,title:"Amazing Project",content:"Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire. Il trouve ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C.",primaryButton:["/projects/amazingproject","See more"],secondaryButton:["https://www.gitlab.com","Check this on GitLab",!0]}),n.a.createElement(o.a,{restyled:!0,title:"Amazing Project",content:"Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire. Il trouve ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C.",primaryButton:["/projects/amazingproject","See more"],secondaryButton:["https://www.gitlab.com","Check this on GitLab",!0]}))},e}(r.Component)},278:function(A,e,t){"use strict";t(247);var a=t(6),i=t.n(a),r=t(0),n=t.n(r),o=t(276),c=function(A){function e(){return A.apply(this,arguments)||this}return i()(e,A),e.prototype.render=function(){var A=this.props,e=A.link,t=A.text;return n.a.createElement("a",{rel:"nofollow",href:e},n.a.createElement("button",{className:"button lama-outlined"},t))},e}(r.Component),s=t(191),l=(t(85),t(86),t(87),t(434)),d=t(84),p=t(435),u=t.n(p),f=function(A){function e(){return A.apply(this,arguments)||this}return i()(e,A),e.prototype.render=function(){var A=this.props;return n.a.createElement(d.StaticQuery,{query:"1442878629",render:function(e){var t=e.images.edges.find(function(e){return e.node.relativePath.includes(A.filename)});return t?n.a.createElement(u.a,{className:A.className,alt:A.alt,fluid:t.node.childImageSharp.fluid}):null},data:l})},e}(n.a.Component);t.d(e,"a",function(){return E});var E=function(A){function e(){return A.apply(this,arguments)||this}return i()(e,A),e.prototype.render=function(){var A=this.props,e=A.title,t=A.content,a=A.primaryButton,i=A.secondaryButton,r=A.image,l=A.alt,d=A.key,p=A.link,u=A.restyled,E=[];return n.a.createElement(s.a,{to:void 0!==p?p:void 0!==a[0]?a[0]:void 0},n.a.createElement("div",{className:"card "+(u?"restyled":""),key:d},n.a.createElement("div",{className:"card-header"},n.a.createElement(f,{className:"card-image",filename:r,alt:l}),n.a.createElement("h2",{className:"h1 card-title"},e)),n.a.createElement("p",{className:"card-content"},t),n.a.createElement("div",{className:"card-actions"},(void 0!==a&&E.push(n.a.createElement(o.a,{text:a[1],link:a[0]})),void 0!==i&&(!0===i[2]?E.push(n.a.createElement(c,{externalLink:!0,text:i[1],link:i[0]})):E.push(n.a.createElement(c,{text:i[1],link:i[0]}))),E))))},e}(r.Component)},433:function(A,e,t){var a=t(13),i=t(24),r=t(25),n=/"/g,o=function(A,e,t,a){var i=String(r(A)),o="<"+e;return""!==t&&(o+=" "+t+'="'+String(a).replace(n,"&quot;")+'"'),o+">"+i+"</"+e+">"};A.exports=function(A,e){var t={};t[A]=e(o),a(a.P+a.F*i(function(){var e=""[A]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",t)}},434:function(A){A.exports={data:{images:{edges:[{node:{relativePath:"favicon.png",name:"favicon",childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAAACXBIWXMAAAsTAAALEwEAmpwYAAADDElEQVQ4y5VUbUxOYRi+nudEsqgfjMpKzSa9xiZaH6MRZfLR3oqslNgSKfkohTZsmG+jFekTLTEfs2Xqh0WYjzEf60dbmWFjVvEjsd7zntv9nN6Sj7Y627XznPu5n+vc93Vf5wDDu7T42eJLwzZBScH42pgD4phVbQT6YMSQWQQja6FQNyzwF4vXzxXdKaGgfStAQb44y2EvtTdzEuRwqutLDo8LhEGljEro7adAh6xo5viUYfU6eiQ0xzLxYb4kqkHPz2LQx2OwURkoYz6e8p7TkAmJjpj36Bni5qcTTFgBnWG83gs7322P8k09480kZyeIrAhoBUuhzfI2WxNSmNIJx5oZ4lTqqJQw0UaXBTXvh65I6CqjHD1MSpkL0IqUUDEsIWMDxSuqEqQ0TAhCV9U6rpBbpmug3MXo6cvz4gntjbSgeJwrwvh5IsOH4e3AZMYERsy5ZNnFBAZVQVnnHsci0uahfkcU3nu48dnpXlh+chU+vzsMupEBirSI7oNWdHCs8/jKXpxMQCdbpL08VdpsJVxdGQ+CCdeGoclRkBqGm7lKChE/vhcJOr0aPYWJ0tZ6iOW6wC1UMy4NwEWoQZBx3rSMrgjZi00D7ATuUGCOL6ye7ni8O1pNTthZYMNWArv+F+wKTMZQFQ4k5EC///uv1Cd7mLASNj5s6mPqVM6t9aEM6mVqoor0D8J/LldnbH6UL5RZddVSU54wOk7zC0oF6SW/wTGjKEkS660rSdaEDEI4ZhQ23c2R9OFoL+H9naBFFtEVPlXcWRQgGiKmiTr+hlviZgtKDBYGS6NzN4NXOGEsNtama5S3ROrfzvDbr5iWeDMwx90F2bXpknZFSyWLSZgcatrmv4RbbmVqtC9G2njiunL/hnC0mYI/kOZvyd8De+qyNSpYJllTzqkxK3w22AdgYbIWrpCq06TemCuMAA/cVhvszT5bBB6wyrfboyRdz5D2+q3CHuKHTLXBXf2esN/4/r9INP9RnjtJhoYKfh7hsAMsnr2kfCrWZSRe8v4LTaKw1zJuf1T2C2ByiPbIn1IUAAAAAElFTkSuQmCC",aspectRatio:1.0847457627118644,src:"/static/12f93d8d0a7a0d69d402301c0867b9c0/59139/favicon.png",srcSet:"/static/12f93d8d0a7a0d69d402301c0867b9c0/d3809/favicon.png 150w,\n/static/12f93d8d0a7a0d69d402301c0867b9c0/fdbb0/favicon.png 300w,\n/static/12f93d8d0a7a0d69d402301c0867b9c0/59139/favicon.png 600w,\n/static/12f93d8d0a7a0d69d402301c0867b9c0/cb30f/favicon.png 900w,\n/static/12f93d8d0a7a0d69d402301c0867b9c0/572fb/favicon.png 1024w",sizes:"(max-width: 600px) 100vw, 600px"}}}},{node:{relativePath:"profile-pic-1.jpg",name:"profile-pic-1",childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAMEBf/EABUBAQEAAAAAAAAAAAAAAAAAAAEC/9oADAMBAAIQAxAAAAGvN6eYcoS8CWQo/8QAHBAAAgICAwAAAAAAAAAAAAAAAQIDEQAxEiEi/9oACAEBAAEFAm8qzyVvCepq46BY07ExXef/xAAVEQEBAAAAAAAAAAAAAAAAAAABEP/aAAgBAwEBPwEIT//EABURAQEAAAAAAAAAAAAAAAAAAAEQ/9oACAECAQE/AVjP/8QAGxAAAQQDAAAAAAAAAAAAAAAAAQACEBIRIjH/2gAIAQEABj8CJVqarMDstMf/xAAaEAEBAQEAAwAAAAAAAAAAAAABABExIUFR/9oACAEBAAE/Ico8CZhhcuD6gcPGxIcMeAfRAbMTsMa3/9oADAMBAAIAAwAAABDHwMD/xAAWEQEBAQAAAAAAAAAAAAAAAAABEEH/2gAIAQMBAT8QJmp//8QAFhEBAQEAAAAAAAAAAAAAAAAAEBFB/9oACAECAQE/EIGD/8QAGxABAQEBAAMBAAAAAAAAAAAAAREAITFBYaH/2gAIAQEAAT8QZytTDuCAJUlpiEEAOfdAifNeJOh4OQD81Q1AZjRFC900pVp8wCVT1v/Z",aspectRatio:1,src:"/static/eac0fb94910cb7833296c32ab127da40/775d9/profile-pic-1.jpg",srcSet:"/static/eac0fb94910cb7833296c32ab127da40/cb3d3/profile-pic-1.jpg 150w,\n/static/eac0fb94910cb7833296c32ab127da40/c83a6/profile-pic-1.jpg 300w,\n/static/eac0fb94910cb7833296c32ab127da40/775d9/profile-pic-1.jpg 600w,\n/static/eac0fb94910cb7833296c32ab127da40/2b1a3/profile-pic-1.jpg 900w,\n/static/eac0fb94910cb7833296c32ab127da40/90537/profile-pic-1.jpg 1080w",sizes:"(max-width: 600px) 100vw, 600px"}}}},{node:{relativePath:"profile-pic-2.jpg",name:"profile-pic-2",childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAMEBf/EABUBAQEAAAAAAAAAAAAAAAAAAAEC/9oADAMBAAIQAxAAAAGvN6eYcoS8CWQo/8QAHBAAAgICAwAAAAAAAAAAAAAAAQIDEQAxEiEi/9oACAEBAAEFAm8qzyVvCepq46BY07ExXef/xAAVEQEBAAAAAAAAAAAAAAAAAAABEP/aAAgBAwEBPwEIT//EABURAQEAAAAAAAAAAAAAAAAAAAEQ/9oACAECAQE/AVjP/8QAGxAAAQQDAAAAAAAAAAAAAAAAAQACEBIRIjH/2gAIAQEABj8CJVqarMDstMf/xAAaEAEBAQEAAwAAAAAAAAAAAAABABExIUFR/9oACAEBAAE/Ico8CZhhcuD6gcPGxIcMeAfRAbMTsMa3/9oADAMBAAIAAwAAABDHwMD/xAAWEQEBAQAAAAAAAAAAAAAAAAABEEH/2gAIAQMBAT8QJmp//8QAFhEBAQEAAAAAAAAAAAAAAAAAEBFB/9oACAECAQE/EIGD/8QAGxABAQEBAAMBAAAAAAAAAAAAAREAITFBYaH/2gAIAQEAAT8QZytTDuCAJUlpiEEAOfdAifNeJOh4OQD81Q1AZjRFC900pVp8wCVT1v/Z",aspectRatio:1,src:"/static/eac0fb94910cb7833296c32ab127da40/775d9/profile-pic-2.jpg",srcSet:"/static/eac0fb94910cb7833296c32ab127da40/cb3d3/profile-pic-2.jpg 150w,\n/static/eac0fb94910cb7833296c32ab127da40/c83a6/profile-pic-2.jpg 300w,\n/static/eac0fb94910cb7833296c32ab127da40/775d9/profile-pic-2.jpg 600w,\n/static/eac0fb94910cb7833296c32ab127da40/2b1a3/profile-pic-2.jpg 900w,\n/static/eac0fb94910cb7833296c32ab127da40/90537/profile-pic-2.jpg 1080w",sizes:"(max-width: 600px) 100vw, 600px"}}}},{node:{relativePath:"profile-pic-3.jpg",name:"profile-pic-3",childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAMEBf/EABUBAQEAAAAAAAAAAAAAAAAAAAEC/9oADAMBAAIQAxAAAAGvN6eYcoS8CWQo/8QAHBAAAgICAwAAAAAAAAAAAAAAAQIDEQAxEiEi/9oACAEBAAEFAm8qzyVvCepq46BY07ExXef/xAAVEQEBAAAAAAAAAAAAAAAAAAABEP/aAAgBAwEBPwEIT//EABURAQEAAAAAAAAAAAAAAAAAAAEQ/9oACAECAQE/AVjP/8QAGxAAAQQDAAAAAAAAAAAAAAAAAQACEBIRIjH/2gAIAQEABj8CJVqarMDstMf/xAAaEAEBAQEAAwAAAAAAAAAAAAABABExIUFR/9oACAEBAAE/Ico8CZhhcuD6gcPGxIcMeAfRAbMTsMa3/9oADAMBAAIAAwAAABDHwMD/xAAWEQEBAQAAAAAAAAAAAAAAAAABEEH/2gAIAQMBAT8QJmp//8QAFhEBAQEAAAAAAAAAAAAAAAAAEBFB/9oACAECAQE/EIGD/8QAGxABAQEBAAMBAAAAAAAAAAAAAREAITFBYaH/2gAIAQEAAT8QZytTDuCAJUlpiEEAOfdAifNeJOh4OQD81Q1AZjRFC900pVp8wCVT1v/Z",aspectRatio:1,src:"/static/eac0fb94910cb7833296c32ab127da40/775d9/profile-pic-3.jpg",srcSet:"/static/eac0fb94910cb7833296c32ab127da40/cb3d3/profile-pic-3.jpg 150w,\n/static/eac0fb94910cb7833296c32ab127da40/c83a6/profile-pic-3.jpg 300w,\n/static/eac0fb94910cb7833296c32ab127da40/775d9/profile-pic-3.jpg 600w,\n/static/eac0fb94910cb7833296c32ab127da40/2b1a3/profile-pic-3.jpg 900w,\n/static/eac0fb94910cb7833296c32ab127da40/90537/profile-pic-3.jpg 1080w",sizes:"(max-width: 600px) 100vw, 600px"}}}},{node:{relativePath:"profile-pic-4.jpg",name:"profile-pic-4",childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAMEBf/EABUBAQEAAAAAAAAAAAAAAAAAAAEC/9oADAMBAAIQAxAAAAGvN6eYcoS8CWQo/8QAHBAAAgICAwAAAAAAAAAAAAAAAQIDEQAxEiEi/9oACAEBAAEFAm8qzyVvCepq46BY07ExXef/xAAVEQEBAAAAAAAAAAAAAAAAAAABEP/aAAgBAwEBPwEIT//EABURAQEAAAAAAAAAAAAAAAAAAAEQ/9oACAECAQE/AVjP/8QAGxAAAQQDAAAAAAAAAAAAAAAAAQACEBIRIjH/2gAIAQEABj8CJVqarMDstMf/xAAaEAEBAQEAAwAAAAAAAAAAAAABABExIUFR/9oACAEBAAE/Ico8CZhhcuD6gcPGxIcMeAfRAbMTsMa3/9oADAMBAAIAAwAAABDHwMD/xAAWEQEBAQAAAAAAAAAAAAAAAAABEEH/2gAIAQMBAT8QJmp//8QAFhEBAQEAAAAAAAAAAAAAAAAAEBFB/9oACAECAQE/EIGD/8QAGxABAQEBAAMBAAAAAAAAAAAAAREAITFBYaH/2gAIAQEAAT8QZytTDuCAJUlpiEEAOfdAifNeJOh4OQD81Q1AZjRFC900pVp8wCVT1v/Z",aspectRatio:1,src:"/static/eac0fb94910cb7833296c32ab127da40/775d9/profile-pic-4.jpg",srcSet:"/static/eac0fb94910cb7833296c32ab127da40/cb3d3/profile-pic-4.jpg 150w,\n/static/eac0fb94910cb7833296c32ab127da40/c83a6/profile-pic-4.jpg 300w,\n/static/eac0fb94910cb7833296c32ab127da40/775d9/profile-pic-4.jpg 600w,\n/static/eac0fb94910cb7833296c32ab127da40/2b1a3/profile-pic-4.jpg 900w,\n/static/eac0fb94910cb7833296c32ab127da40/90537/profile-pic-4.jpg 1080w",sizes:"(max-width: 600px) 100vw, 600px"}}}},{node:{relativePath:"profile-pic-5.jpg",name:"profile-pic-5",childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAMEBf/EABUBAQEAAAAAAAAAAAAAAAAAAAEC/9oADAMBAAIQAxAAAAGvN6eYcoS8CWQo/8QAHBAAAgICAwAAAAAAAAAAAAAAAQIDEQAxEiEi/9oACAEBAAEFAm8qzyVvCepq46BY07ExXef/xAAVEQEBAAAAAAAAAAAAAAAAAAABEP/aAAgBAwEBPwEIT//EABURAQEAAAAAAAAAAAAAAAAAAAEQ/9oACAECAQE/AVjP/8QAGxAAAQQDAAAAAAAAAAAAAAAAAQACEBIRIjH/2gAIAQEABj8CJVqarMDstMf/xAAaEAEBAQEAAwAAAAAAAAAAAAABABExIUFR/9oACAEBAAE/Ico8CZhhcuD6gcPGxIcMeAfRAbMTsMa3/9oADAMBAAIAAwAAABDHwMD/xAAWEQEBAQAAAAAAAAAAAAAAAAABEEH/2gAIAQMBAT8QJmp//8QAFhEBAQEAAAAAAAAAAAAAAAAAEBFB/9oACAECAQE/EIGD/8QAGxABAQEBAAMBAAAAAAAAAAAAAREAITFBYaH/2gAIAQEAAT8QZytTDuCAJUlpiEEAOfdAifNeJOh4OQD81Q1AZjRFC900pVp8wCVT1v/Z",aspectRatio:1,src:"/static/eac0fb94910cb7833296c32ab127da40/775d9/profile-pic-5.jpg",srcSet:"/static/eac0fb94910cb7833296c32ab127da40/cb3d3/profile-pic-5.jpg 150w,\n/static/eac0fb94910cb7833296c32ab127da40/c83a6/profile-pic-5.jpg 300w,\n/static/eac0fb94910cb7833296c32ab127da40/775d9/profile-pic-5.jpg 600w,\n/static/eac0fb94910cb7833296c32ab127da40/2b1a3/profile-pic-5.jpg 900w,\n/static/eac0fb94910cb7833296c32ab127da40/90537/profile-pic-5.jpg 1080w",sizes:"(max-width: 600px) 100vw, 600px"}}}},{node:{relativePath:"profile-pic-6.jpg",name:"profile-pic-6",childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAMEBf/EABUBAQEAAAAAAAAAAAAAAAAAAAEC/9oADAMBAAIQAxAAAAGvN6eYcoS8CWQo/8QAHBAAAgICAwAAAAAAAAAAAAAAAQIDEQAxEiEi/9oACAEBAAEFAm8qzyVvCepq46BY07ExXef/xAAVEQEBAAAAAAAAAAAAAAAAAAABEP/aAAgBAwEBPwEIT//EABURAQEAAAAAAAAAAAAAAAAAAAEQ/9oACAECAQE/AVjP/8QAGxAAAQQDAAAAAAAAAAAAAAAAAQACEBIRIjH/2gAIAQEABj8CJVqarMDstMf/xAAaEAEBAQEAAwAAAAAAAAAAAAABABExIUFR/9oACAEBAAE/Ico8CZhhcuD6gcPGxIcMeAfRAbMTsMa3/9oADAMBAAIAAwAAABDHwMD/xAAWEQEBAQAAAAAAAAAAAAAAAAABEEH/2gAIAQMBAT8QJmp//8QAFhEBAQEAAAAAAAAAAAAAAAAAEBFB/9oACAECAQE/EIGD/8QAGxABAQEBAAMBAAAAAAAAAAAAAREAITFBYaH/2gAIAQEAAT8QZytTDuCAJUlpiEEAOfdAifNeJOh4OQD81Q1AZjRFC900pVp8wCVT1v/Z",aspectRatio:1,src:"/static/eac0fb94910cb7833296c32ab127da40/775d9/profile-pic-6.jpg",srcSet:"/static/eac0fb94910cb7833296c32ab127da40/cb3d3/profile-pic-6.jpg 150w,\n/static/eac0fb94910cb7833296c32ab127da40/c83a6/profile-pic-6.jpg 300w,\n/static/eac0fb94910cb7833296c32ab127da40/775d9/profile-pic-6.jpg 600w,\n/static/eac0fb94910cb7833296c32ab127da40/2b1a3/profile-pic-6.jpg 900w,\n/static/eac0fb94910cb7833296c32ab127da40/90537/profile-pic-6.jpg 1080w",sizes:"(max-width: 600px) 100vw, 600px"}}}},{node:{relativePath:"robots.txt",name:"robots",childImageSharp:null}}]}}}},435:function(A,e,t){"use strict";var a=t(4);e.__esModule=!0,e.default=void 0;var i,r=a(t(6)),n=a(t(21)),o=a(t(22)),c=a(t(10)),s=a(t(0)),l=a(t(1)),d=function(A){var e=(0,c.default)({},A);return e.resolutions&&(e.fixed=e.resolutions,delete e.resolutions),e.sizes&&(e.fluid=e.sizes,delete e.sizes),e},p=Object.create({}),u=function(A){var e=d(A),t=e.fluid?e.fluid.src:e.fixed.src;return p[t]||!1},f=new WeakMap;var E=function(A,e){var t=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(A){A.forEach(function(A){if(f.has(A.target)){var e=f.get(A.target);(A.isIntersecting||A.intersectionRatio>0)&&(i.unobserve(A.target),f.delete(A.target),e())}})},{rootMargin:"200px"})),i);return t&&(t.observe(A),f.set(A,e)),function(){t.unobserve(A),f.delete(A)}},m=function(A){var e=A.src?'src="'+A.src+'" ':'src="" ',t=A.sizes?'sizes="'+A.sizes+'" ':"",a=A.srcSetWebp?"<source type='image/webp' srcset=\""+A.srcSetWebp+'" '+t+"/>":"",i=A.srcSet?'srcset="'+A.srcSet+'" ':"",r=A.title?'title="'+A.title+'" ':"",n=A.alt?'alt="'+A.alt+'" ':'alt="" ',o=A.width?'width="'+A.width+'" ':"",c=A.height?'height="'+A.height+'" ':"",s=A.crossOrigin?'crossorigin="'+A.crossOrigin+'" ':"";return"<picture>"+a+"<img "+(A.loading?'loading="'+A.loading+'" ':"")+o+c+t+i+e+n+r+s+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},g=s.default.forwardRef(function(A,e){var t=A.sizes,a=A.srcSet,i=A.src,r=A.style,n=A.onLoad,l=A.onError,d=A.nativeLazyLoadSupported,p=A.loading,u=(0,o.default)(A,["sizes","srcSet","src","style","onLoad","onError","nativeLazyLoadSupported","loading"]),f={};return d&&(f.loading=p),s.default.createElement("img",(0,c.default)({sizes:t,srcSet:a,src:i},u,{onLoad:n,onError:l,ref:e},f,{style:(0,c.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},r)}))});g.propTypes={style:l.default.object,onError:l.default.func,onLoad:l.default.func};var h=function(A){function e(e){var t;t=A.call(this,e)||this;var a=!0,i=!1,r=e.fadeIn,o=!1,c=u(e);!c&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=!1,i=!0),"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype&&(a=!0,o=!0),"undefined"==typeof window&&(a=!1),e.critical&&(a=!0,i=!1);var l=!(e.critical&&!e.fadeIn);return t.state={isVisible:a,imgLoaded:!1,imgCached:!1,IOSupported:i,fadeIn:r,hasNoScript:l,seenBefore:c,nativeLazyLoadSupported:o},t.imageRef=s.default.createRef(),t.handleImageLoaded=t.handleImageLoaded.bind((0,n.default)((0,n.default)(t))),t.handleRef=t.handleRef.bind((0,n.default)((0,n.default)(t))),t}(0,r.default)(e,A);var t=e.prototype;return t.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:u(this.props)}),this.props.critical){var A=this.imageRef.current;A&&A.complete&&this.handleImageLoaded()}},t.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},t.handleRef=function(A){var e=this;this.state.nativeLazyLoadSupported||this.state.IOSupported&&A&&(this.cleanUpListeners=E(A,function(){var A=u(e.props);e.state.isVisible||"function"!=typeof e.props.onStartLoad||e.props.onStartLoad({wasCached:A}),e.setState({isVisible:!0},function(){return e.setState({imgLoaded:A,imgCached:!!e.imageRef.current.currentSrc})})}))},t.handleImageLoaded=function(){var A,e,t;A=this.props,e=d(A),t=e.fluid?e.fluid.src:e.fixed.src,p[t]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},t.render=function(){var A=d(this.props),e=A.title,t=A.alt,a=A.className,i=A.style,r=void 0===i?{}:i,n=A.imgStyle,o=void 0===n?{}:n,l=A.placeholderStyle,p=void 0===l?{}:l,u=A.placeholderClassName,f=A.fluid,E=A.fixed,h=A.backgroundColor,b=A.durationFadeIn,B=A.Tag,j=A.itemProp,Q=(A.critical,d(this.props).loading);var w=this.state.nativeLazyLoadSupported,C=this.state.imgLoaded||!1===this.state.fadeIn,v=!0===this.state.fadeIn&&!this.state.imgCached,N=(0,c.default)({opacity:C?1:0,transition:v?"opacity "+b+"ms":"none"},o),I="boolean"==typeof h?"lightgray":h,x={transitionDelay:b+"ms"},y=(0,c.default)({opacity:this.state.imgLoaded?0:1},v&&x,o,p),S={title:e,alt:this.state.isVisible?"":t,style:y,className:u};if(f){var D=f;return s.default.createElement(B,{className:(a||"")+" gatsby-image-wrapper",style:(0,c.default)({position:"relative",overflow:"hidden"},r),ref:this.handleRef,key:"fluid-"+JSON.stringify(D.srcSet)},s.default.createElement(B,{style:{width:"100%",paddingBottom:100/D.aspectRatio+"%"}}),I&&s.default.createElement(B,{title:e,style:(0,c.default)({backgroundColor:I,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},v&&x)}),D.base64&&s.default.createElement(g,(0,c.default)({src:D.base64},S)),D.tracedSVG&&s.default.createElement(g,(0,c.default)({src:D.tracedSVG},S)),this.state.isVisible&&s.default.createElement("picture",null,D.srcSetWebp&&s.default.createElement("source",{type:"image/webp",srcSet:D.srcSetWebp,sizes:D.sizes}),s.default.createElement(g,{alt:t,title:e,sizes:D.sizes,src:D.src,crossOrigin:this.props.crossOrigin,srcSet:D.srcSet,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:j,nativeLazyLoadSupported:w,loading:Q})),this.state.hasNoScript&&s.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,c.default)({alt:t,title:e,loading:Q},D))}}))}if(E){var Y=E,R=(0,c.default)({position:"relative",overflow:"hidden",display:"inline-block",width:Y.width,height:Y.height},r);return"inherit"===r.display&&delete R.display,s.default.createElement(B,{className:(a||"")+" gatsby-image-wrapper",style:R,ref:this.handleRef,key:"fixed-"+JSON.stringify(Y.srcSet)},I&&s.default.createElement(B,{title:e,style:(0,c.default)({backgroundColor:I,width:Y.width,opacity:this.state.imgLoaded?0:1,height:Y.height},v&&x)}),Y.base64&&s.default.createElement(g,(0,c.default)({src:Y.base64},S)),Y.tracedSVG&&s.default.createElement(g,(0,c.default)({src:Y.tracedSVG},S)),this.state.isVisible&&s.default.createElement("picture",null,Y.srcSetWebp&&s.default.createElement("source",{type:"image/webp",srcSet:Y.srcSetWebp,sizes:Y.sizes}),s.default.createElement(g,{alt:t,title:e,width:Y.width,height:Y.height,sizes:Y.sizes,src:Y.src,crossOrigin:this.props.crossOrigin,srcSet:Y.srcSet,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:j,nativeLazyLoadSupported:w,loading:Q})),this.state.hasNoScript&&s.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,c.default)({alt:t,title:e,loading:Q},Y))}}))}return null},e}(s.default.Component);h.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var b=l.default.shape({width:l.default.number.isRequired,height:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string}),B=l.default.shape({aspectRatio:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,sizes:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string});h.propTypes={resolutions:b,sizes:B,fixed:b,fluid:B,fadeIn:l.default.bool,durationFadeIn:l.default.number,title:l.default.string,alt:l.default.string,className:l.default.oneOfType([l.default.string,l.default.object]),critical:l.default.bool,crossOrigin:l.default.oneOfType([l.default.string,l.default.bool]),style:l.default.object,imgStyle:l.default.object,placeholderStyle:l.default.object,placeholderClassName:l.default.string,backgroundColor:l.default.oneOfType([l.default.string,l.default.bool]),onLoad:l.default.func,onError:l.default.func,onStartLoad:l.default.func,Tag:l.default.string,itemProp:l.default.string,loading:l.default.oneOf(["auto","lazy","eager"])};var j=h;e.default=j}}]);