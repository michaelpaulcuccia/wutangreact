(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"Rza","image":"https://cdn.livekindly.co/wp-content/uploads/2018/01/rza-e1551850425334.jpeg","alias":"The Abbott","location":"Shaolin"},{"id":2,"name":"Gza","image":"https://i.pinimg.com/originals/73/61/3c/73613c0101f11c87fcaf75731606813e.jpg","alias":"Genius","location":"Brooklyn"},{"id":3,"name":"Ol\' Dirty Bastard","image":"https://img.discogs.com/bKSwQGLDWYoKszERnA7-lAX2XTk=/600x800/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-39015-1525011317-4534.jpeg.jpg","alias":"Dirt McGirt","location":"Brooklyn Zoo"},{"id":4,"name":"Inspectah Deck","image":"https://paddle8-staging.imgix.net/media/artwork/artworkimageproxy/1433948048-w8jo2p10xdzsvalgfxnn.png?auto=format&fit=clip&ixlib=react-8.5.1&w=974","alias":"The Rebel INS","location":"Shaolin"},{"id":5,"name":"Raekwon","image":"https://cdns-images.dzcdn.net/images/artist/a025cf1ffda32db9d8e6fed7c5baa0ad/500x500.jpg","alias":"The Chef","location":"The Kitchen"},{"id":6,"name":"U God","image":"https://wutangclan.net/wp-content/uploads/2019/03/ugod123.jpg","alias":"Golden Armz","location":"Shaolin"},{"id":7,"name":"Ghostface Killah","image":"https://i.pinimg.com/originals/23/40/a2/2340a2577e7d61ebe8a4f5446e75e2a5.jpg","alias":"Iron Man","location":"Shaolin"},{"id":8,"name":"Method Man","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuaVLmAor1OS0gkKRsBrT9DmJnTE8UNbfpIMvdSSTvWA2aBxED&s","alias":"Johnny Blaze","location":"Shaolin"},{"id":9,"name":"Masta Killa","image":"https://static.hiphopdx.com/2012/11/Masta_Killa-RZA-hhdx.jpg","alias":"High Chief","location":"Brooklyn"},{"id":10,"name":"Cappadonna","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0EaxU3mmjge_wm8O89zzv4KtM-j4IRspe-5pv7lUx3dD3kvCvFw&s","alias":"Cappuccino","location":"Shaolin"}]')},,,,function(e,a,t){e.exports=t(17)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),c=t(2),o=t.n(c),l=t(7),r=t(3),s=t(4),m=t(8),d=t(5),h=t(9);t(15);var g=function(e){return i.a.createElement("div",{onClick:function(){return e.handleClick(e.id)},className:"card"},i.a.createElement("div",{className:"img-container"},i.a.createElement("img",{alt:e.name,src:e.image})),i.a.createElement("div",{className:"content"},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("strong",null,"Name:")," ",e.name),i.a.createElement("li",null,i.a.createElement("strong",null,"Alias:")," ",e.alias),i.a.createElement("li",null,i.a.createElement("strong",null,"Location:")," ",e.location))))},p=function(e){return i.a.createElement("div",{className:"\n      jumbotron jumbotron-fluid p-2 text-center ".concat(e.dark?"bg-dark text-light":"bg-light text-dark"," ")},i.a.createElement("span",{className:"m-3",style:{fontSize:30}},"Score: ",e.score),i.a.createElement("span",{className:"m-3",style:{fontSize:30}},"High Score: ",e.highScore))},u=function(e){return i.a.createElement("div",{className:e.helper?"row ".concat(e.helper):"row"},e.children)},f=t(6),k=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(t=Object(m.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(i)))).state={friends:f,clicked:[],highScore:0},t.randomize=function(e){for(var a=e.length-1;a>0;a--){var t=Math.floor(Math.random()*(a+1)),n=[e[t],e[a]];e[a]=n[0],e[t]=n[1]}return e},t.handleClickOnImage=function(e){t.state.clicked.includes(e)?(alert("you lost"),t.resetGame()):t.setState((function(a){return{clicked:[].concat(Object(l.a)(a.clicked),[e]),friends:t.randomize(t.state.friends)}}),(function(){t.checkHighScore(),t.handleWin()}))},t.checkHighScore=function(){t.state.clicked.length>t.state.highScore&&t.setState({highScore:t.state.clicked.length})},t.handleWin=function(){t.state.clicked.length===t.state.friends.length&&(alert("You won!"),t.resetGame())},t.resetGame=function(){t.setState({clicked:[]}),t.randomize(t.state.friends)},t}return Object(h.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){this.setState({friends:this.randomize(this.state.friends)})}},{key:"render",value:function(){var e=this;console.log(this.state);var a=this.state,t=a.clicked,n=a.friends,c=a.highScore;return i.a.createElement("div",null,i.a.createElement(p,{score:t.length,highScore:c,dark:!0}),i.a.createElement(u,{helper:"justify-content-center"},n.map((function(a){var t=a.id,n=a.name,c=a.image,o=a.alias,l=a.location;return i.a.createElement(g,{header:n,dark:!0,id:t,key:t,name:n,image:c,alias:o,location:l,handleClick:e.handleClickOnImage})}))))}}]),a}(n.Component);t(16);o.a.render(i.a.createElement(k,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.dae2f774.chunk.js.map