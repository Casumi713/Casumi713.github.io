import"./disclose-version.DwdwGuwu.js";import{$ as Z,D as p,F as n,G as Tt,H as l,J as dt,K as Mt,M as L,N as Et,O as tt,Q as $,S as Lt,T as j,U as J,V as Dt,W as h,X as ot,Z as rt,_ as zt,b as yt,c as H,d as q,et as It,f as Vt,g as Ht,j as U,k as S,m as bt,p as Rt,q as st,r as qt,rt as Bt,t as Q,tt as r,u as ht,v as R,y as xt,z as D}from"./client.BqsAevRN.js";import"./legacy.D_2L-Zst.js";import{t as I}from"./Icon.BLXNTM-I.js";import{n as O,t as G}from"./translation.rNkBIhEG.js";import{n as lt}from"./config.Dy-QsR7I.js";import{t as k}from"./musicPlayerStore.Be3uT29c.js";import{a as ut,c as Ft,i as At,l as Kt,n as Nt,o as Xt,r as jt,s as Wt,t as Ut}from"./SidebarTrackInfo.DT2RJmGE.js";function Yt(s){const t=s-1;return t*t*t+1}function wt(s){const t=s-1;return t*t*t+1}function gt(s){const t=typeof s=="string"&&s.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return t?[parseFloat(t[1]),t[2]||"px"]:[s,"px"]}function Ot(s,{delay:t=0,duration:e=400,easing:g=wt,x:a=0,y:o=0,opacity:y=0}={}){const u=getComputedStyle(s),_=+u.opacity,i=u.transform==="none"?"":u.transform,c=_*(1-y),[m,v]=gt(a),[C,b]=gt(o);return{delay:t,duration:e,easing:g,css:(f,P)=>`
			transform: ${i} translate(${(1-f)*m}${v}, ${(1-f)*C}${b});
			opacity: ${_-c*P}`}}function Gt(s,{delay:t=0,duration:e=400,easing:g=wt,axis:a="y"}={}){const o=getComputedStyle(s),y=+o.opacity,u=a==="y"?"height":"width",_=parseFloat(o[u]),i=a==="y"?["top","bottom"]:["left","right"],c=i.map(x=>`${x[0].toUpperCase()}${x.slice(1)}`),m=parseFloat(o[`padding${c[0]}`]),v=parseFloat(o[`padding${c[1]}`]),C=parseFloat(o[`margin${c[0]}`]),b=parseFloat(o[`margin${c[1]}`]),f=parseFloat(o[`border${c[0]}Width`]),P=parseFloat(o[`border${c[1]}Width`]);return{delay:t,duration:e,easing:g,css:x=>`overflow: hidden;opacity: ${Math.min(x*20,1)*y};${u}: ${x*_}px;padding-${i[0]}: ${x*m}px;padding-${i[1]}: ${x*v}px;margin-${i[0]}: ${x*C}px;margin-${i[1]}: ${x*b}px;border-${i[0]}-width: ${x*f}px;border-${i[1]}-width: ${x*P}px;min-${u}: 0`}}var Jt=S('<div class="fab-music-panel card-base shadow-xl rounded-2xl p-4 w-[20rem] max-w-[80vw] svelte-1lty5dg"><div class="fab-music-header svelte-1lty5dg"><!> <!></div> <!> <!> <!></div>');function Qt(s,t){Z(t,!0);let e=dt(Tt(k.getState())),g=dt(!1);function a(z){const d=z;d.detail&&st(e,d.detail,!0)}yt(()=>{window.addEventListener("music-sidebar:state",a)}),xt(()=>{typeof window<"u"&&window.removeEventListener("music-sidebar:state",a)});function o(){k.toggle()}function y(){k.prev()}function u(){k.next()}function _(){k.toggleMode()}function i(){st(g,!n(g))}function c(z){k.playIndex(z)}function m(z){k.seek(z)}function v(){k.toggleMute()}function C(z){k.setVolume(z)}var b=Jt(),f=l(b),P=l(f);At(P,{get currentSong(){return n(e).currentSong},get isPlaying(){return n(e).isPlaying},get isLoading(){return n(e).isLoading}}),Ut(h(P,2),{get currentSong(){return n(e).currentSong},get currentTime(){return n(e).currentTime},get duration(){return n(e).duration},get volume(){return n(e).volume},get isMuted(){return n(e).isMuted},onToggleMute:v,onSetVolume:C}),r(f);var x=h(f,2);Nt(x,{get currentTime(){return n(e).currentTime},get duration(){return n(e).duration},onSeek:m});var E=h(x,2);Xt(E,{get isPlaying(){return n(e).isPlaying},get isShuffled(){return n(e).isShuffled},get repeatMode(){return n(e).isRepeating},onToggleMode:_,onPrev:y,onNext:u,onTogglePlay:o,onTogglePlaylist:i}),jt(h(E,2),{get playlist(){return n(e).playlist},get currentIndex(){return n(e).currentIndex},get isPlaying(){return n(e).isPlaying},get show(){return n(g)},onClose:i,onPlaySong:c}),r(b),p(s,b),$()}var Zt=S('<div class="flex-1 min-w-0"><div class="text-sm font-medium text-90 truncate"> </div> <div class="text-xs text-50 truncate"> </div></div>'),$t=S('<div class="text-xs text-30 mt-1"> </div>'),te=S('<div class="flex-1 min-w-0"><div class="song-title text-lg font-bold text-90 truncate mb-1"> </div> <div class="song-artist text-sm text-50 truncate"> </div> <!></div>');function mt(s,t){Z(t,!0);const e=Q(t,"showTime",3,!1),g=Q(t,"size",3,"mini");function a(i){return!Number.isFinite(i)||i<0?"0:00":`${Math.floor(i/60)}:${Math.floor(i%60).toString().padStart(2,"0")}`}var o=tt(),y=J(o),u=i=>{var c=Zt(),m=l(c),v=l(m,!0);r(m);var C=h(m,2),b=l(C,!0);r(C),r(c),D(()=>{j(v,t.song.title),j(b,t.song.artist)}),p(i,c)},_=i=>{var c=te(),m=l(c),v=l(m,!0);r(m);var C=h(m,2),b=l(C,!0);r(C);var f=h(C,2),P=x=>{var E=$t(),z=l(E);r(E),D((d,B)=>j(z,`${d??""} / ${B??""}`),[()=>a(t.currentTime),()=>a(t.duration)]),p(x,E)};R(f,x=>{e()&&x(P)}),r(c),D(()=>{j(v,t.song.title),j(b,t.song.artist)}),p(i,c)};R(y,i=>{g()==="mini"?i(u):i(_,-1)}),p(s,o),$()}var ee=S('<!> <div class="flex-1 min-w-0 cursor-pointer" role="button" tabindex="0"><!></div> <div class="flex items-center gap-1"><button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button> <button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button></div>',1),ne=S('<div class="flex items-center gap-1"><button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button> <button><!></button></div>'),ie=S("<!> <!> <!>",1),re=S("<div><!></div>");function kt(s,t){Z(t,!0);const e=Q(t,"size",3,"mini"),g=Q(t,"showControls",3,!1),a=Q(t,"showPlaylist",3,!1);var o=re(),y=l(o),u=i=>{var c=ee(),m=J(c);ut(m,{get cover(){return t.song.cover},get isPlaying(){return t.isPlaying},get isLoading(){return t.isLoading},size:"mini",interactive:!0,get onclick(){return t.onCoverClick}});var v=h(m,2);mt(l(v),{get song(){return t.song},get currentTime(){return t.currentTime},get duration(){return t.duration},size:"mini"}),r(v);var C=h(v,2),b=l(C);I(l(b),{icon:"material-symbols:visibility-off",class:"text-lg"}),r(b);var f=h(b,2);I(l(f),{icon:"material-symbols:expand-less",class:"text-lg"}),r(f),r(C),D((P,x)=>{H(v,"aria-label",P),H(b,"title",x)},[()=>G(O.musicPlayerExpand),()=>G(O.musicPlayerHide)]),L("click",v,function(...P){t.onInfoClick?.apply(this,P)}),L("keydown",v,P=>{(P.key==="Enter"||P.key===" ")&&(P.preventDefault(),t.onInfoClick?.())}),L("click",b,P=>{P.stopPropagation(),t.onHideClick?.()}),L("click",f,P=>{P.stopPropagation(),t.onExpandClick?.()}),p(i,c)},_=i=>{var c=ie(),m=J(c);ut(m,{get cover(){return t.song.cover},get isPlaying(){return t.isPlaying},get isLoading(){return t.isLoading},size:"expanded"});var v=h(m,2);mt(v,{get song(){return t.song},get currentTime(){return t.currentTime},get duration(){return t.duration},showTime:!0,size:"expanded"});var C=h(v,2),b=f=>{var P=ne(),x=l(P);I(l(x),{icon:"material-symbols:visibility-off",class:"text-lg"}),r(x);var E=h(x,2);let z;I(l(E),{icon:"material-symbols:queue-music",class:"text-lg"}),r(E),r(P),D((d,B)=>{H(x,"title",d),z=q(E,1,"btn-plain w-8 h-8 rounded-lg flex items-center justify-center",null,z,{"text-[var(--primary)]":a()}),H(E,"title",B)},[()=>G(O.musicPlayerHide),()=>G(O.musicPlayerPlaylist)]),L("click",x,function(...d){t.onHideClick?.apply(this,d)}),L("click",E,function(...d){t.onPlaylistClick?.apply(this,d)}),p(f,P)};R(C,f=>{g()&&f(b)}),p(i,c)};R(y,i=>{e()==="mini"?i(u):i(_,-1)}),r(o),D(()=>q(o,1,Vt(e()==="mini"?"flex items-center gap-3 mb-0":"flex items-center gap-4 mb-4"))),p(s,o),$()}U(["click","keydown"]);var ae=S("<div><!></div>");function oe(s,t){var e=ae();let g;kt(l(e),{get song(){return t.song},get currentTime(){return t.currentTime},get duration(){return t.duration},get isPlaying(){return t.isPlaying},get isLoading(){return t.isLoading},size:"mini",get onCoverClick(){return t.onCoverClick},get onInfoClick(){return t.onInfoClick},get onHideClick(){return t.onHideClick},get onExpandClick(){return t.onExpandClick}}),r(e),D(()=>g=q(e,1,"mini-player card-base shadow-xl rounded-2xl p-3 absolute bottom-0 right-0 w-[17.5rem] svelte-g9ac72",null,g,{"mini-enter":!t.isHidden,"mini-leave":t.isHidden,"pointer-events-none":t.isHidden})),p(s,e)}var vt=S("<button><!></button>");function ft(s,t){const e=Q(t,"repeatMode",3,0),g=Q(t,"disabled",3,!1);var a=tt(),o=J(a),y=_=>{var i=vt();let c;I(l(i),{icon:"material-symbols:shuffle",class:"text-lg"}),r(i),D(()=>{c=q(i,1,"w-10 h-10 rounded-lg",null,c,{"btn-regular":t.isActive,"btn-plain":!t.isActive}),i.disabled=g()}),L("click",i,function(...m){t.onclick?.apply(this,m)}),p(_,i)},u=_=>{var i=vt();let c;var m=l(i),v=f=>{I(f,{icon:"material-symbols:repeat-one",class:"text-lg"})},C=f=>{I(f,{icon:"material-symbols:repeat",class:"text-lg"})},b=f=>{I(f,{icon:"material-symbols:repeat",class:"text-lg opacity-50"})};R(m,f=>{e()===1?f(v):e()===2?f(C,1):f(b,-1)}),r(i),D(()=>c=q(i,1,"w-10 h-10 rounded-lg",null,c,{"btn-regular":t.isActive,"btn-plain":!t.isActive})),L("click",i,function(...f){t.onclick?.apply(this,f)}),p(_,i)};R(o,_=>{t.mode==="shuffle"?_(y):_(u,-1)}),p(s,a)}U(["click"]);var le=S('<div class="controls flex items-center justify-center gap-2 mb-4"><!> <!> <!> <!> <!></div>');function se(s,t){var e=le(),g=l(e);ft(g,{mode:"shuffle",get isActive(){return t.isShuffled},get onclick(){return t.onShuffleClick}});var a=h(g,2);Wt(a,{get onclick(){return t.onPrevClick},disabled:!1});var o=h(a,2);Ft(o,{get isPlaying(){return t.isPlaying},get isLoading(){return t.isLoading},get onclick(){return t.onPlayClick}});var y=h(o,2);Kt(y,{get onclick(){return t.onNextClick},disabled:!1});var u=h(y,2);{let _=rt(()=>t.isRepeating>0);ft(u,{mode:"repeat",get isActive(){return n(_)},get repeatMode(){return t.isRepeating},get onclick(){return t.onRepeatClick}})}r(e),p(s,e)}var ue=S('<div class="progress-bar flex-1 h-2 bg-[var(--btn-regular-bg)] rounded-full cursor-pointer" role="slider" tabindex="0" aria-valuemin="0" aria-valuemax="100"><div class="h-full bg-[var(--primary)] rounded-full transition-all duration-100"></div></div>');function ce(s,t){Z(t,!0);var e=ue(),g=l(e);r(e),D(a=>{H(e,"aria-label",a),H(e,"aria-valuenow",t.duration>0?t.currentTime/t.duration*100:0),ht(g,`width: ${t.duration>0?t.currentTime/t.duration*100:0}%`)},[()=>G(O.musicPlayerProgress)]),L("click",e,function(...a){t.onclick?.apply(this,a)}),L("keydown",e,function(...a){t.onkeydown?.apply(this,a)}),p(s,e),$()}U(["click","keydown"]);var de=S('<div class="progress-section mb-4"><!></div>');function ge(s,t){var e=de();ce(l(e),{get currentTime(){return t.currentTime},get duration(){return t.duration},get onclick(){return t.onProgressClick},get onkeydown(){return t.onProgressKeyDown}}),r(e),p(s,e)}var me=S('<button class="btn-plain w-8 h-8 rounded-lg"><!></button>');function ve(s,t){var e=me(),g=l(e),a=u=>{I(u,{icon:"material-symbols:volume-off",class:"text-lg"})},o=u=>{I(u,{icon:"material-symbols:volume-down",class:"text-lg"})},y=u=>{I(u,{icon:"material-symbols:volume-up",class:"text-lg"})};R(g,u=>{t.isMuted||t.volume===0?u(a):t.volume<.5?u(o,1):u(y,-1)}),r(e),L("click",e,function(...u){t.onclick?.apply(this,u)}),p(s,e)}U(["click"]);var fe=S('<div class="flex-1 h-2 bg-[var(--btn-regular-bg)] rounded-full cursor-pointer touch-none" role="slider" tabindex="0" aria-valuemin="0" aria-valuemax="100"><div></div></div>');function ye(s,t){var e=fe(),g=l(e);let a;r(e),Rt(e,o=>t.volumeBarRef?.(o)),D(()=>{H(e,"aria-label",t.ariaLabel),H(e,"aria-valuenow",t.volume*100),a=q(g,1,"h-full bg-[var(--primary)] rounded-full transition-all",null,a,{"duration-100":!t.isVolumeDragging,"duration-0":t.isVolumeDragging}),ht(g,`width: ${t.volume*100}%`)}),L("pointerdown",e,function(...o){t.onpointerdown?.apply(this,o)}),L("keydown",e,function(...o){t.onkeydown?.apply(this,o)}),p(s,e)}U(["pointerdown","keydown"]);var be=S('<div class="bottom-controls flex items-center gap-2"><!> <!> <!></div>');function he(s,t){var e=be(),g=l(e);ve(g,{get volume(){return t.volume},get isMuted(){return t.isMuted},get onclick(){return t.onVolumeButtonClick}});var a=h(g,2);{let y=rt(()=>t.isMuted?0:t.volume);ye(a,{get volume(){return n(y)},get isVolumeDragging(){return t.isVolumeDragging},get volumeBarRef(){return t.volumeBarRef},get onpointerdown(){return t.onSliderPointerDown},get onkeydown(){return t.onSliderKeyDown},get ariaLabel(){return t.ariaLabel}})}var o=h(a,2);Lt(o,()=>t.children??Bt),r(e),p(s,e)}var xe=S('<button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button>'),we=S("<div><!> <!> <!> <!></div>");function ke(s,t){Z(t,!0);var e=we();let g;var a=l(e);kt(a,{get song(){return t.song},get currentTime(){return t.currentTime},get duration(){return t.duration},get isPlaying(){return t.isPlaying},get isLoading(){return t.isLoading},size:"expanded",showControls:!0,get showPlaylist(){return t.showPlaylist},get onHideClick(){return t.onHideClick},get onPlaylistClick(){return t.onPlaylistClick}});var o=h(a,2);ge(o,{get currentTime(){return t.currentTime},get duration(){return t.duration},get onProgressClick(){return t.onProgressClick},get onProgressKeyDown(){return t.onProgressKeyDown}});var y=h(o,2);se(y,{get isPlaying(){return t.isPlaying},get isLoading(){return t.isLoading},get isShuffled(){return t.isShuffled},get isRepeating(){return t.isRepeating},get canSkip(){return t.canSkip},get onPlayClick(){return t.onPlayClick},get onPrevClick(){return t.onPrevClick},get onNextClick(){return t.onNextClick},get onShuffleClick(){return t.onShuffleClick},get onRepeatClick(){return t.onRepeatClick}});var u=h(y,2);{let _=rt(()=>G(O.musicPlayerVolume));he(u,{get volume(){return t.volume},get isMuted(){return t.isMuted},get isVolumeDragging(){return t.isVolumeDragging},get volumeBarRef(){return t.volumeBarRef},get onVolumeButtonClick(){return t.onVolumeButtonClick},get onSliderPointerDown(){return t.onSliderPointerDown},get onSliderKeyDown(){return t.onSliderKeyDown},get ariaLabel(){return n(_)},children:(i,c)=>{var m=xe();I(l(m),{icon:"material-symbols:expand-more",class:"text-lg"}),r(m),D(v=>H(m,"title",v),[()=>G(O.musicPlayerCollapse)]),L("click",m,function(...v){t.onCollapseClick?.apply(this,v)}),p(i,m)},$$slots:{default:!0}})}r(e),D(()=>g=q(e,1,"expanded-player card-base shadow-xl rounded-2xl p-4 transition-all duration-500 ease-in-out absolute bottom-0 right-0 w-80",null,g,{"opacity-0":t.isHidden,"scale-95":t.isHidden,"pointer-events-none":t.isHidden})),p(s,e),$()}U(["click"]);var pe=S('<span class="text-sm text-[var(--content-meta)]"> </span>'),_e=S('<div role="button" tabindex="0"><div class="w-6 h-6 flex items-center justify-center"><!></div> <div class="w-10 h-10 rounded-lg overflow-hidden bg-[var(--btn-regular-bg)] flex-shrink-0"><img decoding="async" class="w-full h-full object-cover"/></div> <div class="flex-1 min-w-0"><div> </div> <div> </div></div></div>');function Pe(s,t){Z(t,!0);const e=Q(t,"lazy",3,!0);function g(d){return d.startsWith("http://")||d.startsWith("https://")||d.startsWith("/")?d:`/${d}`}var a=_e();let o;var y=l(a),u=l(y),_=d=>{I(d,{icon:"material-symbols:graphic-eq",class:"text-[var(--primary)] animate-pulse"})},i=d=>{I(d,{icon:"material-symbols:pause",class:"text-[var(--primary)]"})},c=d=>{var B=pe(),at=l(B,!0);r(B),D(()=>j(at,t.index+1)),p(d,B)};R(u,d=>{t.isCurrent&&t.isPlaying?d(_):t.isCurrent?d(i,1):d(c,-1)}),r(y);var m=h(y,2),v=l(m);r(m);var C=h(m,2),b=l(C);let f;var P=l(b,!0);r(b);var x=h(b,2);let E;var z=l(x,!0);r(x),r(C),r(a),D(d=>{o=q(a,1,"playlist-item flex items-center gap-3 p-3 hover:bg-[var(--btn-plain-bg-hover)] cursor-pointer transition-colors",null,o,{"bg-[var(--btn-plain-bg)]":t.isCurrent,"text-[var(--primary)]":t.isCurrent}),H(a,"aria-label",`播放 ${t.song.title??""} - ${t.song.artist??""}`),H(v,"src",d),H(v,"alt",t.song.title),H(v,"loading",e()?"lazy":"eager"),f=q(b,1,"font-medium truncate",null,f,{"text-[var(--primary)]":t.isCurrent,"text-90":!t.isCurrent}),j(P,t.song.title),E=q(x,1,"text-sm text-[var(--content-meta)] truncate",null,E,{"text-[var(--primary)]":t.isCurrent}),j(z,t.song.artist)},[()=>g(t.song.cover)]),L("click",a,function(...d){t.onclick?.apply(this,d)}),L("keydown",a,d=>{(d.key==="Enter"||d.key===" ")&&(d.preventDefault(),t.onclick())}),p(s,a),$()}U(["click","keydown"]);var Ce=S('<div class="playlist-panel card-base-transparent fixed bottom-70 right-4 w-80 max-h-96 overflow-hidden z-50 svelte-1v267om"><div class="playlist-header flex items-center justify-between p-4 border-b border-[var(--line-divider)]"><h3 class="text-lg font-semibold text-90"> </h3> <button class="btn-plain w-8 h-8 rounded-lg"><!></button></div> <div class="playlist-content overflow-y-auto max-h-80 hide-scrollbar" role="presentation"></div></div>');function Se(s,t){Z(t,!0);var e=tt(),g=J(e),a=o=>{var y=Ce(),u=l(y),_=l(u),i=l(_,!0);r(_);var c=h(_,2);I(l(c),{icon:"material-symbols:close",class:"text-lg"}),r(c),r(u);var m=h(u,2);Ht(m,21,()=>t.playlist,zt,(v,C,b)=>{{let f=rt(()=>b===t.currentIndex);Pe(v,{get song(){return n(C)},index:b,get isCurrent(){return n(f)},get isPlaying(){return t.isPlaying},onclick:()=>t.onPlaySong(b),lazy:b!==0})}}),r(m),r(y),D(v=>j(i,v),[()=>G(O.musicPlayerPlaylist)]),L("click",c,function(...v){t.onClose?.apply(this,v)}),bt(3,y,()=>Gt,()=>({duration:300,axis:"y"})),p(o,y)};R(g,o=>{t.show&&o(a)}),p(s,e),$()}U(["click"]);var Te=S('<div class="fixed bottom-20 right-4 z-[60] max-w-sm"><div class="bg-red-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 animate-slide-up"><!> <span class="text-sm flex-1"> </span> <button class="text-white/80 hover:text-white transition-colors"><!></button></div></div>'),Me=S('<div class="music-player-fab-anchor fixed z-[55]"><div class="music-player-fab-shell"><!></div></div>'),Ee=S("<div><div><!></div> <!> <!> <!></div>"),Le=S(`<!> <!> <style>.music-player-fab-anchor {
			right: var(--fab-group-right, 1.5rem);
			bottom: calc(
				var(--fab-group-bottom, 10rem) +
					(
						var(--fab-button-size, 3rem) *
							var(--fab-visible-count, 1)
					) +
					(
						var(--fab-group-gap, 0.5rem) *
							(var(--fab-visible-count, 1) - 1)
					)
			);
			width: 0;
			height: 0;
			pointer-events: none;
		}

		.music-player-fab-shell {
			position: absolute;
			right: 0;
			bottom: 0.75rem;
			transform-origin: bottom right;
			pointer-events: auto;
			will-change: transform, opacity;
		}

		.orb-player-container {
			position: absolute;
			bottom: 0;
			right: 0;
		}

		.orb-enter {
			animation: orbElasticIn 460ms cubic-bezier(0.22, 1.25, 0.36, 1)
				forwards;
		}

		.orb-leave {
			animation: orbElasticOut 360ms cubic-bezier(0.4, 0, 1, 1) forwards;
		}

		@keyframes orbElasticIn {
			0% {
				opacity: 0;
				transform: translateX(0) scale(0.55);
			}
			70% {
				opacity: 1;
				transform: translateX(0) scale(1.12);
			}
			100% {
				opacity: 1;
				transform: translateX(0) scale(1);
			}
		}

		@keyframes orbElasticOut {
			0% {
				opacity: 1;
				transform: translateX(0) scale(1);
			}
			100% {
				opacity: 0;
				transform: translateX(0) scale(0.6);
			}
		}

		.music-player.hidden-mode {
			width: 3rem;
			height: 3rem;
		}

		.music-player {
			width: 20rem;
			max-width: 20rem;
			min-width: 20rem;
			user-select: none;
		}

		:global(.mini-player) {
			position: absolute;
			bottom: 0;
			right: 0;
		}

		:global(.expanded-player) {
			position: absolute;
			bottom: 0;
			right: 0;
		}

		:global(.orb-player) {
			position: relative;
			backdrop-filter: blur(10px);
			-webkit-backdrop-filter: blur(10px);
		}

		:global(.orb-player::before) {
			content: "";
			position: absolute;
			inset: -0.125rem;
			background: linear-gradient(
				45deg,
				var(--primary),
				transparent,
				var(--primary)
			);
			border-radius: 50%;
			z-index: -1;
			opacity: 0;
			transition: opacity 0.3s ease;
		}

		:global(.orb-player:hover::before) {
			opacity: 0.3;
			animation: rotate 2s linear infinite;
		}

		:global(.orb-player .animate-pulse) {
			animation: musicWave 1.5s ease-in-out infinite;
		}

		@keyframes rotate {
			from {
				transform: rotate(0deg);
			}
			to {
				transform: rotate(360deg);
			}
		}

		@keyframes musicWave {
			0%,
			100% {
				transform: scaleY(0.5);
			}
			50% {
				transform: scaleY(1);
			}
		}

		:global(.animate-pulse) {
			animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
		}

		@keyframes pulse {
			0%,
			100% {
				opacity: 1;
			}
			50% {
				opacity: 0.5;
			}
		}

		:global(.progress-section div:hover),
		:global(.bottom-controls > div:hover) {
			transform: scaleY(1.2);
			transition: transform 0.2s ease;
		}

		@media (max-width: 768px) {
			.music-player-fab-anchor {
				right: var(--fab-group-right, 0.75rem) !important;
				bottom: calc(
					var(--fab-group-bottom, 5rem) +
						(
							var(--fab-button-size, 2.75rem) *
								var(--fab-visible-count, 1)
						) +
						(
							var(--fab-group-gap, 0.5rem) *
								(var(--fab-visible-count, 1) - 1)
						)
				) !important;
			}

			.music-player-fab-shell {
				right: 0 !important;
				bottom: 0.75rem !important;
			}

			.music-player {
				width: 280px !important;
				min-width: 280px !important;
				max-width: 280px !important;
				bottom: 0.5rem !important;
				right: 0.5rem !important;
			}
			:global(.mini-player) {
				width: 280px !important;
			}
			:global(.expanded-player) {
				width: 280px !important;
				max-width: 280px !important;
			}
			.music-player.expanded {
				width: 280px !important;
				min-width: 280px !important;
				max-width: 280px !important;
				right: 0.5rem !important;
			}
			:global(.playlist-panel) {
				width: 280px !important;
				right: 0.5rem !important;
				max-width: 280px !important;
			}
			:global(.controls) {
				gap: 8px;
			}
			:global(.controls button) {
				width: 36px;
				height: 36px;
			}
			:global(.controls button:nth-child(3)) {
				width: 44px;
				height: 44px;
			}
		}

		@media (max-width: 480px) {
			.music-player-fab-anchor {
				right: var(--fab-group-right, 0.5rem) !important;
				bottom: calc(
					var(--fab-group-bottom, 4.5rem) +
						(
							var(--fab-button-size, 2.5rem) *
								var(--fab-visible-count, 1)
						) +
						(
							var(--fab-group-gap, 0.5rem) *
								(var(--fab-visible-count, 1) - 1)
						)
				) !important;
			}

			.music-player-fab-shell {
				right: 0 !important;
				bottom: 0.75rem !important;
			}

			.music-player {
				width: 260px !important;
				min-width: 260px !important;
				max-width: 260px !important;
			}
			:global(.expanded-player) {
				width: 260px !important;
				max-width: 260px !important;
			}
			:global(.playlist-panel) {
				width: 260px !important;
				max-width: 260px !important;
				right: 0.5rem !important;
			}
			:global(.song-title) {
				font-size: 14px;
			}
			:global(.song-artist) {
				font-size: 12px;
			}
			:global(.controls) {
				gap: 6px;
				margin-bottom: 12px;
			}
			:global(.controls button) {
				width: 32px;
				height: 32px;
			}
			:global(.controls button:nth-child(3)) {
				width: 40px;
				height: 40px;
			}
			:global(.playlist-item) {
				padding: 8px 12px;
			}
			:global(.playlist-item .w-10) {
				width: 32px;
				height: 32px;
			}
		}

		@keyframes slide-up {
			from {
				transform: translateY(100%);
				opacity: 0;
			}
			to {
				transform: translateY(0);
				opacity: 1;
			}
		}

		.animate-slide-up {
			animation: slide-up 0.3s ease-out;
		}

		@media (hover: none) and (pointer: coarse) {
			:global(.music-player button),
			:global(.playlist-item) {
				min-height: 44px;
			}
			:global(.progress-section > div),
			:global(.bottom-controls > div:nth-child(2)) {
				height: 12px;
			}
		}

		@keyframes spin-continuous {
			from {
				transform: rotate(0deg);
			}
			to {
				transform: rotate(360deg);
			}
		}

		:global(.cover-container img) {
			animation: spin-continuous 3s linear infinite;
			animation-play-state: paused;
		}

		:global(.cover-container img.spinning) {
			animation-play-state: running;
		}

		:global(button.bg-\\\\[var\\\\(--primary\\\\)\\\\]) {
			box-shadow: 0 0 0 2px var(--primary);
			border: none;
		}</style>`,1);function Ae(s,t){Z(t,!1);let e=Mt(k.getState());const g=lt.showFloatingPlayer,a=(lt.floatingEntryMode??"default")==="fab",o=g&&lt.enable;let y;function u(){k.toggle()}function _(){k.prev()}function i(){k.next()}function c(){k.toggleShuffle()}function m(){k.toggleRepeat()}function v(w){k.playIndex(w)}function C(w){const T=w.currentTarget;if(!T)return;const W=T.getBoundingClientRect(),N=(w.clientX-W.left)/W.width;k.setProgress(N)}function b(w){(w.key==="Enter"||w.key===" ")&&(w.preventDefault(),k.setProgress(.5))}function f(){k.toggleMute()}function P(){k.toggleMute()}function x(w){const T=w.currentTarget;if(!T)return;const W=M=>{const F=T.getBoundingClientRect();if(F.width<=0)return;const A=Math.max(0,Math.min(1,(M-F.left)/F.width));k.setVolume(A)};W(w.clientX);const N=w.pointerId;T.setPointerCapture(N);const et=M=>{M.pointerId===N&&W(M.clientX)},nt=()=>{T.removeEventListener("pointermove",et),T.removeEventListener("pointerup",it),T.removeEventListener("pointercancel",V),T.hasPointerCapture(N)&&T.releasePointerCapture(N)},it=M=>{M.pointerId===N&&(W(M.clientX),nt())},V=M=>{M.pointerId===N&&nt()};T.addEventListener("pointermove",et),T.addEventListener("pointerup",it),T.addEventListener("pointercancel",V)}function E(w){const T=w.target;if(!(T?.tagName==="INPUT"||T?.tagName==="TEXTAREA"||T?.contentEditable==="true")){if(w.key==="ArrowLeft"||w.key==="ArrowDown"){w.preventDefault(),k.setVolume(n(e).volume-.05);return}if(w.key==="ArrowRight"||w.key==="ArrowUp"){w.preventDefault(),k.setVolume(n(e).volume+.05);return}(w.key==="Enter"||w.key===" "||w.key==="m"||w.key==="M")&&(w.preventDefault(),f())}}function z(){k.togglePlaylist()}function d(){k.toggleExpanded()}function B(){k.toggleHidden()}function at(){k.hideError()}function pt(w){}function _t(){return k.canSkip()}yt(()=>{y=k.subscribe(w=>{st(e,w)}),k.initialize()}),xt(()=>{y&&y(),k.destroy()}),qt();var ct=tt();Et("keydown",Dt,E);var Pt=J(ct),Ct=w=>{var T=Le(),W=J(T),N=V=>{var M=Te(),F=l(M),A=l(F);I(A,{icon:"material-symbols:error",class:"text-xl flex-shrink-0"});var X=h(A,2),Y=l(X,!0);r(X);var K=h(X,2);I(l(K),{icon:"material-symbols:close",class:"text-lg"}),r(K),r(F),r(M),D(()=>j(Y,n(e).errorMessage)),L("click",K,at),p(V,M)};R(W,V=>{n(e).showError&&V(N)});var et=h(W,2),nt=V=>{var M=tt(),F=J(M),A=X=>{var Y=Me(),K=l(Y);Qt(l(K),{}),r(K),r(Y),bt(3,K,()=>Ot,()=>({y:16,duration:280,opacity:.12,easing:Yt})),p(X,Y)};R(F,X=>{n(e).isExpanded&&X(A)}),p(V,M)},it=V=>{var M=Ee();let F;var A=l(M);ut(l(A),{get cover(){return n(e).currentSong.cover},get isPlaying(){return n(e).isPlaying},get isLoading(){return n(e).isLoading},size:"orb",onclick:B}),r(A);var X=h(A,2);{let K=ot(()=>n(e).isExpanded||n(e).isHidden);oe(X,{get song(){return n(e).currentSong},get currentTime(){return n(e).currentTime},get duration(){return n(e).duration},get isPlaying(){return n(e).isPlaying},get isLoading(){return n(e).isLoading},get isHidden(){return n(K)},onCoverClick:u,onInfoClick:d,onHideClick:B,onExpandClick:d})}var Y=h(X,2);{let K=ot(_t),St=ot(()=>!n(e).isExpanded);ke(Y,{get song(){return n(e).currentSong},get currentTime(){return n(e).currentTime},get duration(){return n(e).duration},get isPlaying(){return n(e).isPlaying},get isLoading(){return n(e).isLoading},get isShuffled(){return n(e).isShuffled},get isRepeating(){return n(e).isRepeating},get showPlaylist(){return n(e).showPlaylist},get canSkip(){return n(K)},get volume(){return n(e).volume},get isMuted(){return n(e).isMuted},isVolumeDragging:!1,get isHidden(){return n(St)},volumeBarRef:pt,onPlayClick:u,onPrevClick:_,onNextClick:()=>i(),onShuffleClick:c,onRepeatClick:m,onProgressClick:C,onProgressKeyDown:b,onVolumeButtonClick:P,onSliderPointerDown:x,onSliderKeyDown:E,onHideClick:B,onPlaylistClick:z,onCollapseClick:d})}Se(h(Y,2),{get playlist(){return n(e).playlist},get currentIndex(){return n(e).currentIndex},get isPlaying(){return n(e).isPlaying},get show(){return n(e).showPlaylist},onClose:z,onPlaySong:v}),r(M),D(()=>{F=q(M,1,"music-player fixed bottom-4 right-4 z-50 transition-all duration-300 ease-in-out",null,F,{expanded:n(e).isExpanded,"hidden-mode":n(e).isHidden}),q(A,1,`orb-player-container ${n(e).isHidden?"orb-enter pointer-events-auto":"orb-leave pointer-events-none"}`)}),p(V,M)};R(et,V=>{a?V(nt):V(it,-1)}),It(2),p(w,T)};R(Pt,w=>{o&&w(Ct)}),p(s,ct),$()}U(["click"]);export{Ae as default};
