(this["webpackJsonpreact-player"]=this["webpackJsonpreact-player"]||[]).push([[0],{16:function(e,t,c){},22:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(2),r=c.n(a),i=c(10),s=c.n(i),o=c(3),l=c(6),u=(c(16),c(5)),d=c(4),j=function(e){var t=e.audioRef,c=e.currentSong,r=e.isPlaying,i=e.setIsPlaying,s=e.setSongInfo,l=e.songInfo,j=e.songs,p=e.setSongs,b=e.setCurrentSong;Object(a.useEffect)((function(){var e=j.map((function(e){return e.id===c.id?Object(o.a)(Object(o.a)({},e),{},{active:!0}):Object(o.a)(Object(o.a)({},e),{},{active:!1})}));if(p(e),r){var n=t.current.play();void 0!==n&&n.then((function(e){t.current.play()}))}}),[c]);var h=function(e){return Math.floor(e/60)+":"+("0"+Math.floor(e%60)).slice(-2)},f=function(e){var t=j.findIndex((function(e){return e.id===c.id}));if("skip-forward"===e&&b(j[(t+1)%j.length]),"skip-back"===e){if((t-1)%j.length===-1)return b(j[j.length-1]);b(j[(t-1)%j.length])}};return Object(n.jsxs)("div",{className:"player",children:[Object(n.jsxs)("div",{className:"time-control",children:[Object(n.jsx)("p",{children:h(l.currentTime)}),Object(n.jsx)("input",{min:0,max:l.duration||0,value:l.currentTime,onChange:function(e){t.current.currentTime=e.target.value,s(Object(o.a)(Object(o.a)({},l),{},{currentTime:e.target.value}))},type:"range"}),Object(n.jsx)("p",{children:h(l.duration)})]}),Object(n.jsxs)("div",{className:"play-control",children:[Object(n.jsx)(u.a,{onClick:function(){return f("skip-back")},className:"skip-back",size:"2x",icon:d.a}),Object(n.jsx)(u.a,{onClick:function(){r?(t.current.pause(),i(!r)):(t.current.play(),i(!r))},className:"play",size:"2x",icon:r?d.d:d.e}),Object(n.jsx)(u.a,{onClick:function(){return f("skip-forward")},className:"skip-forward",size:"2x",icon:d.b})]})]})},p=function(e){var t=e.currentSong;return Object(n.jsxs)("div",{className:"song-container",children:[Object(n.jsx)("img",{alt:t.name,src:t.cover}),Object(n.jsx)("h2",{children:t.name}),Object(n.jsx)("h3",{children:t.artist})]})},b=function(e){var t=e.song,c=e.songs,a=e.setCurrentSong,r=e.id,i=e.audioRef,s=e.isPlaying,l=e.setSongs;return Object(n.jsxs)("div",{onClick:function(){var e=c.filter((function(e){return e.id===r}));a(e[0]);var t=c.map((function(e){return e.id===r?Object(o.a)(Object(o.a)({},e),{},{active:!0}):Object(o.a)(Object(o.a)({},e),{},{active:!1})}));if(l(t),s){var n=i.current.play();void 0!==n&&n.then((function(e){i.current.play()}))}},className:"library-song ".concat(t.active?"selected":""),children:[Object(n.jsx)("img",{alt:t.name,src:t.cover}),Object(n.jsxs)("div",{className:"song-description",children:[Object(n.jsx)("h3",{children:t.name}),Object(n.jsx)("h4",{children:t.artist})]})]})},h=function(e){var t=e.songs,c=e.setCurrentSong,a=e.audioRef,r=e.isPlaying,i=e.setSongs,s=e.libraryStatus;return Object(n.jsxs)("div",{className:"library ".concat(s?"active-library":""),children:[Object(n.jsx)("h2",{children:"Library"}),Object(n.jsx)("div",{className:"library-songs",children:t.map((function(e){return Object(n.jsx)(b,{songs:t,setCurrentSong:c,song:e,id:e.id,audioRef:a,isPlaying:r,setSongs:i},e.id)}))})]})},f=function(e){var t=e.libraryStatus,c=e.setLibraryStatus;return Object(n.jsxs)("nav",{children:[Object(n.jsx)("h1",{children:"Waves"}),Object(n.jsxs)("button",{onClick:function(){return c(!t)},children:["Library",Object(n.jsx)(u.a,{icon:d.c})]})]})},m=c(24);var g=function(){return[{name:"Paved Paths",artist:"Leavv",cover:"https://chillhop.com/wp-content/uploads/2020/09/88e7eb711f8c71d87fc102e97cf91e36f692348d-300x300.jpg",id:Object(m.a)(),active:!0,color:["#D9E8A9","#CF8F60"],audio:"https://mp3.chillhop.com/serve.php/?mp3=9919"},{name:"Pine and Oak",artist:"Philanthrope, The Field Tapes",cover:"https://chillhop.com/wp-content/uploads/2020/09/2899f7cc22ab12e17d0119819aac3ca9dbab46e6-300x300.jpg",id:Object(m.a)(),active:!1,color:["#94392F","#AC6D55"],audio:"https://mp3.chillhop.com/serve.php/?mp3=10249"},{name:"burn my mind",artist:"Tesk",cover:"https://chillhop.com/wp-content/uploads/2020/06/52bd092974ccce9aa610c33f03575fc2d7f9c7d2-300x300.jpg",id:Object(m.a)(),active:!1,color:["#EEEEF2","#AEBDB2"],audio:"https://mp3.chillhop.com/serve.php/?mp3=8137"},{name:"this again...",artist:"SwuM, quickly, quickly",cover:"https://chillhop.com/wp-content/uploads/2020/07/f3dda653e5ff94d787639ef56cb8e922d321a04f-300x300.jpg",id:Object(m.a)(),active:!1,color:["#222222","#2B312D"],audio:"https://mp3.chillhop.com/serve.php/?mp3=8953"},{name:"Sleepover",artist:"Nymano, JK the Sage",cover:"https://chillhop.com/wp-content/uploads/2020/09/09fb436604242df99f84b9f359acb046e40d2e9e-300x300.jpg",id:Object(m.a)(),active:!1,color:["#5C5581","#222222"],audio:"https://mp3.chillhop.com/serve.php/?mp3=10130"},{name:"Lunar Cycles",artist:"Sleepy Fish",cover:" https://chillhop.com/wp-content/uploads/2020/09/c209a7df7b9bc133dfff73ce86ebc3c57c2b73dd-300x300.jpg",id:Object(m.a)(),active:!1,color:["#1E5A76","#AA4C3D"],audio:"https://mp3.chillhop.com/serve.php/?mp3=10031"}]};var O=function(){var e=Object(a.useRef)(null),t=Object(a.useState)(g()),c=Object(l.a)(t,2),r=c[0],i=c[1],s=Object(a.useState)(r[0]),u=Object(l.a)(s,2),d=u[0],b=u[1],m=Object(a.useState)(!1),O=Object(l.a)(m,2),v=O[0],x=O[1],y=Object(a.useState)({currentTime:0,duration:0}),S=Object(l.a)(y,2),k=S[0],C=S[1],P=Object(a.useState)(!1),N=Object(l.a)(P,2),T=N[0],w=N[1],F=function(e){var t=e.target.currentTime,c=e.target.duration;C(Object(o.a)(Object(o.a)({},k),{},{currentTime:t,duration:c}))};return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(f,{libraryStatus:T,setLibraryStatus:w}),Object(n.jsx)(p,{currentSong:d}),Object(n.jsx)(j,{audioRef:e,isPlaying:v,setIsPlaying:x,currentSong:d,setSongInfo:C,songInfo:k,songs:r,setCurrentSong:b,setSongs:i}),Object(n.jsx)(h,{songs:r,setCurrentSong:b,audioRef:e,isPlaying:v,setSongs:i,libraryStatus:T}),Object(n.jsx)("audio",{onTimeUpdate:F,onLoadedMetadata:F,ref:e,src:d.audio})]})},v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,25)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),r(e),i(e)}))};s.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(O,{})}),document.getElementById("root")),v()}},[[22,1,2]]]);
//# sourceMappingURL=main.3b9449c7.chunk.js.map