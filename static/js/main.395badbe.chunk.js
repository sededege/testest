(this["webpackJsonpi-pod-starter-code"]=this["webpackJsonpi-pod-starter-code"]||[]).push([[0],{16:function(A,e,t){},18:function(A,e,t){},21:function(A,e,t){"use strict";t.r(e);var s=t(1),a=t.n(s),i=t(11),n=t.n(i),l=(t(16),t(2)),r=t(4),c=t(5),o=t(3),u=(t(17),t(10),t(18),t(9)),m=t.n(u),d=t(0),g=function(A){Object(c.a)(t,A);var e=Object(o.a)(t);function t(){var A;return Object(l.a)(this,t),(A=e.call(this)).wheelControll=function(e){var t=A.props,s=t.updateActiveMenu,a=t.currentMenu;if(0===e.detail.distanceFromOrigin&&(A.angle=e.detail.angle),Math.abs(A.angle-e.detail.angle)>300){if(A.angle=Math.abs(e.detail.angle),0===e.detail.distanceFromLast)return;e.detail.distanceFromLast<0?s(1,a):s(0,a)}else if(Math.abs(A.angle-e.detail.angle)>15){if(A.angle=Math.abs(e.detail.angle),0===e.detail.distanceFromLast)return;e.detail.distanceFromLast>0?s(1,a):s(0,a)}},A.angle=0,A}return Object(r.a)(t,[{key:"render",value:function(){var A=this.props,e=A.playing,t=A.changeMenuForward,s=A.active,a=A.currentMenu,i=A.theme,n=A.wheelColor;return Object(d.jsxs)("div",{className:"wheel-container",id:"wheel-container",children:[Object(d.jsxs)("div",{style:{backgroundColor:n},className:e?"wheel colored":"wheel",id:"wheel",children:[Object(d.jsx)("div",{className:"controll",id:"menu",children:Object(d.jsx)("div",{style:{color:i},children:Object(d.jsx)("span",{style:h.style,children:"MENU"})})}),Object(d.jsx)("div",{className:"controll",id:"forward",children:Object(d.jsx)("i",{style:{color:i},className:"fa fa-fast-forward"})}),Object(d.jsx)("div",{className:"controll",id:"play-pause",children:Object(d.jsx)("div",{children:e?Object(d.jsx)("i",{style:{color:i},className:"fa fa-pause"}):Object(d.jsx)("i",{style:{color:i},className:"fa fa-play"})})}),Object(d.jsx)("div",{className:"controll",id:"reverse",children:Object(d.jsx)("i",{style:{color:i},className:"fa fa-fast-backward"})})]}),Object(d.jsx)("div",{style:{backgroundColor:i},className:e?"blank pulsating-circle":"blank",id:"blank",onClick:function(){t(s,a)},children:Object(d.jsx)("i",{style:h.stylee,className:e?" ":"fa fa-power-off"})})]})}},{key:"componentDidMount",value:function(){var A=this.props,e=A.changeMenuBackward,t=A.togglePlayPause,s=A.seekSongForward,a=A.seekSongReverse,i=this.wheelControll,n=document.getElementById("wheel"),l=m.a.Region(n),r=document.getElementById("menu"),c=document.getElementById("play-pause"),o=document.getElementById("reverse"),u=document.getElementById("forward"),d=new m.a.Tap({maxDelay:1e4,numInputs:1,tolerance:1});l.bind(r,"tap",(function(A){e()})),l.bind(n,"rotate",(function(A){i(A)})),l.bind(c,"tap",(function(A){t()})),l.bind(o,d,(function(A){a(A)})),l.bind(u,d,(function(A){s(A)}))}}]),t}(a.a.Component),h={style:{color:"rgba(7, 31, 46, 0.367)"},stylee:{color:"rgba(7, 31, 46, 0.367)",fontSize:"2rem",lineHeight:"75px"}},j=g,p=function(A){Object(c.a)(t,A);var e=Object(o.a)(t);function t(){var A;return Object(l.a)(this,t),(A=e.call(this)).state={time:A.getCurrentTime()},A.stateId="",A}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var A=this;!0!==this.props.noty&&(this.stateId=setInterval((function(){A.setState({time:A.getCurrentTime()})}),6e4))}},{key:"componentDidUpdate",value:function(){var A=this.props,e=A.setNoty;!0===A.noty&&setTimeout((function(){e()}),1e3)}},{key:"componentWillUnmount",value:function(){!0!==this.props.noty&&clearInterval(this.stateId)}},{key:"getCurrentTime",value:function(){var A=new Date,e=A.getHours()+":"+A.getMinutes();return A.getMinutes()<10&&(e=A.getHours()+":0"+A.getMinutes()),e}},{key:"render",value:function(){var A=this.state.time,e=this.props,t=e.playing,s=e.noty,a=e.notifyText;return Object(d.jsxs)("div",{className:"bar",children:[Object(d.jsxs)("h5",{className:"heading",children:["M-iPod ",Object(d.jsx)("i",{className:"fa fa-wifi"})]}),!0===s&&Object(d.jsx)("h5",{className:"notification",children:a}),!1===s&&Object(d.jsx)("h3",{className:"time",children:A}),Object(d.jsxs)("div",{className:"right-container-nav",children:[t?Object(d.jsx)("h5",{className:"play-pause-nav",children:Object(d.jsx)("i",{className:"fa fa-pause",children:t})}):Object(d.jsxs)("h5",{className:"play-pause-nav",children:[Object(d.jsx)("i",{className:"fa fa-play"})," "]}),Object(d.jsx)("img",{className:"battery",src:"data:image/png;base64,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sARLsARLsARLsAQrSLCOBUuwBEuwOjqUpykOpWAJlmAJVphDKViCJViCJViCJViCJViCJViCJViCJViCFTlYl4IlWFmCdSZYgnVzsM4FS7ByBOuOYAlWhmCdCZZgZVkqECzBEizBEizBEizBEizBEizB+oY7giVYgiVYUYI1ECzBEizB6ihYA8ESLMESLMESLMESLMESLMESLMEqMlgjwRIswRKs3BaJgtUIlmAJlmAJlmAJlmAhWIIlWIIlWIIlWLmCdVlYsP4WLMESrHqCdR48WG8FS7AEq55gnQmWYAmWYAmWYAmWYAmWYAmWYAmWYAmWYAmWYAmWYAmWYAmWYAmWYAmWYAmWYAmWYAmWYAmWYAmWYLXgvlAJlmAJVpRgPRAqwRIswRIswRIswRIswRIswRIswRIswRIswRIswRIswRIswRIswRIswRIswRIswRIswRKsLoN1KViCJViC1dVddi5YgiVYghXlLjsTLMESLMESLMESLMESLMESLMESLMFqM1j3BEuwBEuwOgrWY4dSsARLsKIEy6EULMESLMESLMESLHeZQylYCNbNHhdxl10IlmBRYbCO97++U/zHvBAswRIswbr5FikjWBeCJViCJViCJViCJViCJViCJViCJViCJViCJViCJViCJViCJViCJViCJViCJViCJViCJViCJViCJViCJViCJViCJViCJViCJViCJViCJViCJViC1adgDQRLsARLsDoK1qlgCZZgCVaUYA0ES7AES7AES7AES7AES7AES7AES7AES7AES7AES7AES7AES7AES7AES7AES7AES7AES7AES7AES7AE66MjwRIswRKsKME6ECzBEizBEizBEizBEizBEizBEizBEizBEizBEizBEizBEizBEizBEizBEizBEizBEizBEizBChKsx4IlWIIlWB0dynspDqVgCZZgCVaYQylYgiVYgiVYgiVYgiVYgiVYgiVYgtVasM4FS7AyBGsgWIKVI1gXgiVYNwfroWAJVpZgvRAswUofrIFgCVaWYF0IlmAJlmAJlmAJlmAJlmAJlmBd7VSwBEuwBKujYB0nuEUES7AES7BaCdaBYAmWYAmWYAmWYAmWYAmWYAmWYBUZrKlgCZZgCVZuTaJgLQRLsARLsARLsARLsBAswRIswRIswRKsbMEalBWsrWAJlmDVE6yHgiVYgiVY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",alt:"Battery"})]})]})}}]),t}(a.a.Component),I=t.p+"static/media/game.1da01396.gif",v=t.p+"static/media/songs.937f15cc.gif",b=t.p+"static/media/setting.a9b16c97.gif",B=function(A){Object(c.a)(t,A);var e=Object(o.a)(t);function t(){return Object(l.a)(this,t),e.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){var A=this.props,e=A.active,t=A.menuItems,s=A.songImgUrl;return Object(d.jsxs)("div",{className:"menu-container",children:[Object(d.jsx)("div",{className:"menu",children:Object(d.jsx)("ul",{children:t.map((function(A,t){return e===t?Object(d.jsxs)("li",{className:"active",children:["\xa0\xbb\xa0",A]},t):Object(d.jsxs)("li",{children:["\xa0",A]},t)}))})}),Object(d.jsxs)("div",{className:"leaf",children:[0===e&&Object(d.jsx)("img",{className:"leaf-img",src:s,alt:""}),1===e&&Object(d.jsx)("img",{className:"leaf-img",src:v,alt:""}),2===e&&Object(d.jsx)("img",{className:"leaf-img",src:I,alt:""}),3===e&&Object(d.jsx)("img",{className:"leaf-img",src:b,alt:""})]})]})}}]),t}(a.a.Component),O=B,f=function(A){Object(c.a)(t,A);var e=Object(o.a)(t);function t(){return Object(l.a)(this,t),e.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){var A=this.props,e=A.musicItems,t=A.active;return Object(d.jsxs)("div",{className:"music",children:[Object(d.jsx)("h2",{children:"Music"}),Object(d.jsx)("ul",{children:e.map((function(A,e){return t===e?Object(d.jsxs)("li",{className:"active",children:["\xa0\xbb\xa0",A]},e):Object(d.jsxs)("li",{children:["\xa0",A]},e)}))})]})}}]),t}(a.a.Component),w=f,C=function(A){Object(c.a)(t,A);var e=Object(o.a)(t);function t(){return Object(l.a)(this,t),e.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){var A=this.props,e=A.songItems,t=A.active;return Object(d.jsxs)("div",{className:"music",children:[Object(d.jsx)("h2",{children:"Songs"}),Object(d.jsx)("ul",{children:e.map((function(A,e){return t===e?Object(d.jsxs)("li",{className:"active",children:["\xa0\xbb\xa0",A]},e):Object(d.jsxs)("li",{id:"song1",children:["\xa0",A]},e)}))})]})}}]),t}(a.a.Component),W=C,E=function(A){Object(c.a)(t,A);var e=Object(o.a)(t);function t(){return Object(l.a)(this,t),e.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){var A=this.props.active;return Object(d.jsxs)("div",{className:"settings",children:[Object(d.jsx)("h2",{children:"Settings"}),Object(d.jsxs)("ul",{children:[0===A?Object(d.jsx)("li",{className:"active",children:"\xa0\xbb\xa0Themes"}):Object(d.jsx)("li",{children:"Themes"}),1===A?Object(d.jsx)("li",{className:"active",children:"\xa0\xbb\xa0Wheel Color"}):Object(d.jsx)("li",{children:"Wheel Color"}),2===A?Object(d.jsx)("li",{className:"active",children:"\xa0\xbb\xa0Wallpaper"}):Object(d.jsx)("li",{children:"Wallpaper"})]})]})}}]),t}(a.a.Component),y=E,S=function(A){Object(c.a)(t,A);var e=Object(o.a)(t);function t(A){var s;return Object(l.a)(this,t),(s=e.call(this,A)).state={currentTime:0},s.intervalId="",s}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var A=this,e=this.props.audio;this.setState({currentTime:e.currentTime}),this.intervalId=setInterval((function(){A.setState({currentTime:A.props.audio.currentTime})}),100)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalId)}},{key:"render",value:function(){var A=this.props,e=A.songItems,t=A.playing,s=A.songIndex,a=A.audio,i=A.songImgUrl,n=Math.floor(this.state.currentTime/60)+":"+Math.floor(this.state.currentTime%60),l=Math.floor(a.duration/60)+":"+Math.floor(a.duration%60),r={width:this.state.currentTime/a.duration*100+"%"};return"NaN:NaN"===l&&(l="0:00"),Math.floor(this.state.currentTime%60<10)&&(n=Math.floor(this.state.currentTime/60)+":0"+Math.floor(this.state.currentTime%60)),Object(d.jsxs)("div",{className:"now-playing-container",children:[Object(d.jsxs)("div",{className:"song-details",children:[Object(d.jsx)("img",{src:i,alt:"songImg"}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:e[s]}),t&&Object(d.jsx)("h5",{className:"play-pause-nav",children:"Playing"}),!t&&Object(d.jsx)("h5",{className:"play-pause-nav",children:"Paused"})]})]}),Object(d.jsxs)("div",{className:"status",children:[n,Object(d.jsx)("div",{id:"progress",children:Object(d.jsx)("div",{style:r,id:"progress-bar"})}),l]})]})}}]),t}(a.a.Component),x=function(A){Object(c.a)(t,A);var e=Object(o.a)(t);function t(){return Object(l.a)(this,t),e.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){var A=this.props.active;return Object(d.jsxs)("div",{className:"music",children:[Object(d.jsx)("h2",{children:"Theme Select"}),Object(d.jsx)("ul",{children:["Rosy Gold","Soil Gray","Illuminati Gold","Breathing Purple","Black"].map((function(e,t){return A===t?Object(d.jsxs)("li",{className:"active theme-li",children:["\xa0\xbb\xa0",e]},t):Object(d.jsxs)("li",{className:"theme-li",children:[e," "]},t)}))})]})}}]),t}(a.a.Component),V=x,Y=function(A){Object(c.a)(t,A);var e=Object(o.a)(t);function t(){return Object(l.a)(this,t),e.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){var A=this.props.active;return Object(d.jsxs)("div",{className:"music",children:[Object(d.jsx)("h2",{children:"Wheel Color"}),Object(d.jsx)("ul",{children:["Black","White","Brown","Purple"].map((function(e,t){return A===t?Object(d.jsxs)("li",{className:"active theme-li",children:["\xa0\xbb\xa0",e]},t):Object(d.jsxs)("li",{className:"theme-li",children:[e," "]},t)}))})]})}}]),t}(a.a.Component),M=Y,N=function(A){Object(c.a)(t,A);var e=Object(o.a)(t);function t(){var A;return Object(l.a)(this,t),(A=e.call(this)).state={time:A.getCurrentTime()},A.stateId="",A}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var A=this;!0!==this.props.noty&&(this.stateId=setInterval((function(){A.setState({time:A.getCurrentTime()})}),6e4))}},{key:"componentDidUpdate",value:function(){var A=this.props,e=A.setNoty;!0===A.noty&&setTimeout((function(){e()}),1e3)}},{key:"componentWillUnmount",value:function(){!0!==this.props.noty&&clearInterval(this.stateId)}},{key:"getCurrentTime",value:function(){var A=new Date,e=A.getHours()+":"+A.getMinutes();return A.getMinutes()<10&&(e=A.getHours()+":0"+A.getMinutes()),e}},{key:"render",value:function(){var A=this.state.time;return Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"lock-display",children:[Object(d.jsx)("div",{className:"upper-div-lock",children:Object(d.jsx)("h3",{children:"Mini iPod!"})}),Object(d.jsx)("i",{className:"fa fa-lock","aria-hidden":"true"}),Object(d.jsx)("h3",{className:"lockscreen-time",children:A})]}),Object(d.jsx)("div",{className:"bottom-div-lock",children:Object(d.jsx)("h3",{children:"Power Button to unlock!"})})]})}}]),t}(a.a.Component),R=function(A){Object(c.a)(t,A);var e=Object(o.a)(t);function t(){return Object(l.a)(this,t),e.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){var A=this.props.active;return Object(d.jsxs)("div",{className:"music",children:[Object(d.jsx)("h2",{children:"Wallpaper Select"}),Object(d.jsx)("ul",{children:["Wallpaper1","Wallpaper2","Wallpaper3"].map((function(e,t){return A===t?Object(d.jsxs)("li",{className:"active theme-li",children:["\xa0\xbb\xa0",e]},t):Object(d.jsxs)("li",{className:"theme-li",children:[e," "]},t)}))})]})}}]),t}(a.a.Component),L=R,J=function(A){Object(c.a)(t,A);var e=Object(o.a)(t);function t(){return Object(l.a)(this,t),e.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){var A=this.props,e=A.active,t=A.currentMenu,s=A.menuItems,a=A.musicItems,i=A.songItems,n=A.playing,l=A.songIndex,r=A.audio,c=A.songUrl,o=A.songImgUrl,u=A.wallpaper,m=A.wallpaperItems,g=A.noty,h=A.setNoty,j=A.notifyText;return Object(d.jsxs)("div",{style:{backgroundImage:"url(".concat(m[u],")")},className:"display",children:[Object(d.jsx)(p,{noty:g,setNoty:h,playing:n,notifyText:j}),-2===t&&Object(d.jsx)(N,{}),-1===t&&Object(d.jsx)(O,{songImgUrl:o,menuItems:s,active:e}),1===t&&Object(d.jsx)(w,{musicItems:a,active:e}),2===t&&Object(d.jsx)("div",{className:"blank-div",children:Object(d.jsx)("h1",{className:"empty-text",children:"Games"})}),3===t&&Object(d.jsx)(y,{active:e}),4===t&&Object(d.jsx)(W,{songItems:i,active:e}),5===t&&Object(d.jsx)("div",{className:"blank-div",children:Object(d.jsx)("h1",{className:"empty-text",children:"Artists"})}),6===t&&Object(d.jsx)("div",{className:"blank-div",children:Object(d.jsx)("h1",{className:"empty-text",children:"Albums"})}),(0===t||7===t)&&Object(d.jsx)(S,{songImgUrl:o,audio:r,songUrl:c,playing:n,songIndex:l,songItems:i}),8===t&&Object(d.jsx)(V,{active:e}),9===t&&Object(d.jsx)(M,{active:e}),10===t&&Object(d.jsx)(L,{active:e})]})}}]),t}(a.a.Component),k=J,Z=t(7),z=t.n(Z),U=function(A){Object(c.a)(t,A);var e=Object(o.a)(t);function t(){var A;Object(l.a)(this,t);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(A=e.call.apply(e,[this].concat(a))).rotatePod=function(){z()(".App").toggleClass("rotate-anti-clockwise"),z()(".wheel-container").toggleClass("rotate-clockwise"),z()(".display").toggleClass("rotate-clockwise"),z()(".frame").toggleClass("rframe"),z()(".speaker").toggleClass("rspeaker")},A}return Object(r.a)(t,[{key:"render",value:function(){var A=this.props,e=A.active,t=A.updateActiveMenu,s=A.currentMenu,a=A.changeMenuBackward,i=A.changeMenuForward,n=A.menuItems,l=A.musicItems,r=A.togglePlayPause,c=A.songItems,o=A.playing,u=A.songIndex,m=A.theme,g=A.audio,h=A.songUrl,p=A.songImgUrl,I=A.seekSongForward,v=A.seekSongReverse,b=A.wheelColor,B=A.wallpaper,O=A.wallpaperItems,f=A.noty,w=A.setNoty,C=A.notifyText;return Object(d.jsx)("div",{className:"case-container",children:Object(d.jsxs)("div",{style:{backgroundColor:m},className:"frame",id:o?"color-frame":" ",children:[Object(d.jsx)("div",{className:"speaker"}),Object(d.jsx)(k,{songIndex:u,playing:o,active:e,musicItems:l,menuItems:n,currentMenu:s,songItems:c,audio:g,songUrl:h,songImgUrl:p,wallpaper:B,wallpaperItems:O,noty:f,setNoty:w,notifyText:C}),Object(d.jsx)(j,{playing:o,theme:m,active:e,menuItems:n,currentMenu:s,changeMenuForward:i,changeMenuBackward:a,updateActiveMenu:t,togglePlayPause:r,seekSongForward:I,seekSongReverse:v,wheelColor:b}),Object(d.jsx)("button",{className:"rotate",onClick:this.rotatePod,children:Object(d.jsx)("i",{className:"fa fa-undo"})})]})})}}]),t}(a.a.Component),T=U,D=t.p+"static/media/ZB - Mummy aa Gai kya Song  ( New Video)(MP3_320K).d364d2d7.mp3",F=t.p+"static/media/149499-chura-liya-hai-tumne-jo-dil-ko-mp3-song-300.3fa1b2a8.jpg",P=t.p+"static/media/EMIWAY - MACHAYENGE 3 _ SWAALINA _ ( OFFICIAL MUSIC VIDEO.7c56abe0.jpg",Q=t.p+"static/media/EMIWAY BANTAI - PAANI MAI _ SWAALINA _ YOUNG GALIB.979d4f14.jpg",G=t.p+"static/media/Mummy aa Gai kya Song.5c2cf94a.jpg",K=t.p+"static/media/wallpaper.1a8c7907.jpg",q=function(A){Object(c.a)(t,A);var e=Object(o.a)(t);function t(){var A;return Object(l.a)(this,t),(A=e.call(this)).seekSongForward=function(e){if(-2!==A.state.currentMenu&&!1!==A.state.playing)if(e.detail.interval<250){A.state.audio.pause();var t=A.state.songIndex;t===A.state.songItemsUrl.length-1?t=0:t++;var s=A.state.songItemsUrl[t],a=A.state.songImgItemsUrl[t];A.setState({songIndex:t,songImgUrl:a,songUrl:s,audio:new Audio(s)},(function(){A.state.audio.play()}))}else if(e.detail.interval>250&&e.detail.interval<1e4){var i=e.detail.interval/100;A.setState((function(A){return A.audio.currentTime+=i,A}))}},A.seekSongReverse=function(e){if(-2!==A.state.currentMenu&&!1!==A.state.playing)if(console.log(e.detail.interval),e.detail.interval<250){A.state.audio.pause();var t=A.state.songIndex;0===t?t=A.state.songItemsUrl.length-1:t--;var s=A.state.songItemsUrl[t],a=A.state.songImgItemsUrl[t];A.setState({songIndex:t,songImgUrl:a,songUrl:s,audio:new Audio(s)},(function(){A.state.audio.play()}))}else if(e.detail.interval>250&&e.detail.interval<1e4){var i=e.detail.interval/100;A.setState((function(A){return A.audio.currentTime-=i,A}))}},A.togglePlayPause=function(){-2!==A.state.currentMenu&&(!0===A.state.playing?(A.setState({playing:!1}),A.state.audio.pause()):(A.setState({playing:!0}),A.state.audio.play()))},A.updateActiveMenu=function(e,t){if(-1===t||1===t||4===t||8===t||3===t||9===t||10===t){var s;s=A.state.lengthMenuKey[t],1===e?A.state.active>=s?A.setState({active:0}):A.setState({active:A.state.active+1}):A.state.active<=0?A.setState({active:s}):A.setState({active:A.state.active-1})}},A.setTheme=function(e){var t="";0===e?t=" rgb(2, 52, 74)":1===e?t="rgb(210, 210, 210)":2===e?t="#F5DDC5":3===e?t="#D1CDDA":4===e&&(t="black"),A.setState({theme:t,noty:!0,notifyText:"Theme Changed"})},A.setWheelColor=function(e){var t="";0===e?t="#212121":1===e?t="white":2===e?t="#3E2723":3===e&&(t="#3D5AFE"),A.setState({wheelColor:t,noty:!0,notifyText:"Wheel Color Changed"})},A.setWallpaper=function(e){A.setState({wallpaper:e,noty:!0,notifyText:"Wallpaper Changed"})},A.chagePlayingSongFromMusicMenu=function(e,t){var s=A.state.songItemsUrl[e],a=A.state.songImgItemsUrl[e];A.state.audio.pause(),A.setState({currentMenu:7,songUrl:s,navigationStack:t,active:0,playing:!0,songIndex:e,audio:new Audio(s),songImgUrl:a},(function(){A.state.audio.play()}))},A.changeMenuBackward=function(){var e=A.state.navigationStack.slice();if(-2!==A.state.currentMenu){var t=e.pop();A.setState({currentMenu:t,navigationStack:e,active:0})}},A.changeMenuForward=function(e,t){var s=A.state.navigationStack.slice();if(-2===t||-1===t||1===t||4===t||3===t||8===t||9===t||0===t||7===t||10===t){if(-2===t)return s.push(A.state.currentMenu),void A.setState({currentMenu:-1,navigationStack:s,active:0});if(-1===t)return s.push(A.state.currentMenu),void A.setState({currentMenu:e,navigationStack:s,active:0});if(7!==t&&0!==t)if(8!==t)if(9!==t)if(10!==t)if(s.push(A.state.currentMenu),4!==t){var a=A.state.menuMapping[t][e];A.setState({currentMenu:a,navigationStack:s,active:0})}else A.chagePlayingSongFromMusicMenu(e,s,t);else A.setWallpaper(e);else A.setWheelColor(e);else A.setTheme(e);else A.togglePlayPause()}},A.setNoty=function(){A.setState({noty:!1})},A.state={active:0,menuItems:["Now Playing","Music","Games","Settings"],musicItems:["All Songs","Artist","Albums"],songItemsUrl:[D,D,D,D],songImgItemsUrl:[F,P,Q,G],wallpaperItems:[K,K,K],songItems:["Maine Poochha Chand Se","Mera Chand Mujhe Aaya Hai Nazar","Neele Neele Ambar Par","Mummy aa Gai kya"],songIndex:0,lengthMenuKey:{"-1":3,1:2,4:4,8:4,3:2,9:3,10:2},menuMapping:{"-1":[0,1,2,3],1:[4,5,6],3:[8,9,10]},currentMenu:-2,navigationStack:[],songUrl:D,playing:!1,theme:"rgb(210, 210, 210)",audio:new Audio(D),songImgUrl:F,wheelColor:"white",wallpaper:0,noty:!1,notifyText:"Wallpaper Changed"},A}return Object(r.a)(t,[{key:"render",value:function(){var A=this.state,e=A.audio,t=A.active,s=A.currentMenu,a=A.menuItems,i=A.musicItems,n=A.songItems,l=A.playing,r=A.songIndex,c=A.theme,o=A.songUrl,u=A.songImgUrl,m=A.wheelColor,g=A.wallpaper,h=A.wallpaperItems,j=A.noty,p=A.notifyText;return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(T,{songIndex:r,active:t,menuItems:a,musicItems:i,currentMenu:s,changeMenuForward:this.changeMenuForward,changeMenuBackward:this.changeMenuBackward,updateActiveMenu:this.updateActiveMenu,togglePlayPause:this.togglePlayPause,songItems:n,playing:l,theme:c,audio:e,songUrl:o,songImgUrl:u,seekSongForward:this.seekSongForward,seekSongReverse:this.seekSongReverse,wheelColor:m,wallpaper:g,wallpaperItems:h,noty:j,setNoty:this.setNoty,notifyText:p})})}}]),t}(a.a.Component),H=document.getElementById("root");n.a.render(Object(d.jsx)(s.StrictMode,{children:Object(d.jsx)(q,{})}),H)}},[[21,1,2]]]);
//# sourceMappingURL=main.395badbe.chunk.js.map