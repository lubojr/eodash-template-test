import{p as E,o as _e,g as M,r as R,c as g,u as $,a as v,F as j,m as B,k as pe,b as ae,d as ie,e as Le,f as Xe,h as ze,i as Ye,s as C,w as ue,j as Ge,l as q,n as De,q as re,t as Be,v as le,x as se,y as Ue,I as fe,z as je,A as qe,B as he,C as Ke,D as me,E as Ne,G as Qe,H as P,J as Je,K as Ze,L as et,M as ge,N as tt,O as nt,P as W,Q as D,R as U,S as ye,T as A,U as oe,V as be,W as we,X as Se,Y as ot}from"./index-DZKhfqhz.js";import{m as lt,V as O,u as Ee,a as st,b as at,c as it}from"./VBtn-DKMZYeEr.js";import{u as ut,a as rt}from"./color-DR6YAIKz.js";import{f as ct,a as dt,s as vt}from"./forwardRefs-VqJb2hov.js";import{u as ft}from"./ssrBoot-CTP60ufr.js";import{M as ht,V as xe}from"./index-CA3kEV1c.js";import{V as ke,m as mt,u as gt}from"./index-C-RrBPad.js";import{V as yt}from"./VMain-Ca6ViH2Y.js";import"./dimensions-Dyf2zZiE.js";const ce=Symbol.for("vuetify:v-tabs"),bt=E({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},..._e(lt({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),Pe=M()({name:"VTab",props:bt(),setup(e,t){let{slots:o,attrs:n}=t;const{textColorClasses:s,textColorStyles:u}=ut(e,"sliderColor"),l=R(),f=R(),r=g(()=>e.direction==="horizontal"),m=g(()=>l.value?.group?.isSelected.value??!1);function w(c){let{value:a}=c;if(a){const x=l.value?.$el.parentElement?.querySelector(".v-tab--selected .v-tab__slider"),h=f.value;if(!x||!h)return;const I=getComputedStyle(x).color,T=x.getBoundingClientRect(),V=h.getBoundingClientRect(),_=r.value?"x":"y",p=r.value?"X":"Y",y=r.value?"right":"bottom",b=r.value?"width":"height",k=T[_],H=V[_],z=k>H?T[y]-V[y]:T[_]-V[_],K=Math.sign(z)>0?r.value?"right":"bottom":Math.sign(z)<0?r.value?"left":"top":"center",N=(Math.abs(z)+(Math.sign(z)<0?T[b]:V[b]))/Math.max(T[b],V[b])||0,Y=T[b]/V[b]||0,G=1.5;dt(h,{backgroundColor:[I,"currentcolor"],transform:[`translate${p}(${z}px) scale${p}(${Y})`,`translate${p}(${z/G}px) scale${p}(${(N-1)/G+1})`,"none"],transformOrigin:Array(3).fill(K)},{duration:225,easing:vt})}}return $(()=>{const c=O.filterProps(e);return v(O,B({symbol:ce,ref:l,class:["v-tab",e.class],style:e.style,tabindex:m.value?0:-1,role:"tab","aria-selected":String(m.value),active:!1},c,n,{block:e.fixed,maxWidth:e.fixed?300:void 0,"onGroup:selected":w}),{...o,default:()=>v(j,null,[o.default?.()??e.text,!e.hideSlider&&v("div",{ref:f,class:["v-tab__slider",s.value],style:u.value},null)])})}),ct({},l)}}),wt=e=>{const{touchstartX:t,touchendX:o,touchstartY:n,touchendY:s}=e,u=.5,l=16;e.offsetX=o-t,e.offsetY=s-n,Math.abs(e.offsetY)<u*Math.abs(e.offsetX)&&(e.left&&o<t-l&&e.left(e),e.right&&o>t+l&&e.right(e)),Math.abs(e.offsetX)<u*Math.abs(e.offsetY)&&(e.up&&s<n-l&&e.up(e),e.down&&s>n+l&&e.down(e))};function St(e,t){const o=e.changedTouches[0];t.touchstartX=o.clientX,t.touchstartY=o.clientY,t.start?.({originalEvent:e,...t})}function xt(e,t){const o=e.changedTouches[0];t.touchendX=o.clientX,t.touchendY=o.clientY,t.end?.({originalEvent:e,...t}),wt(t)}function kt(e,t){const o=e.changedTouches[0];t.touchmoveX=o.clientX,t.touchmoveY=o.clientY,t.move?.({originalEvent:e,...t})}function Tt(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const t={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:o=>St(o,t),touchend:o=>xt(o,t),touchmove:o=>kt(o,t)}}function Vt(e,t){const o=t.value,n=o?.parent?e.parentElement:e,s=o?.options??{passive:!0},u=t.instance?.$.uid;if(!n||!u)return;const l=Tt(t.value);n._touchHandlers=n._touchHandlers??Object.create(null),n._touchHandlers[u]=l,pe(l).forEach(f=>{n.addEventListener(f,l[f],s)})}function Ct(e,t){const o=t.value?.parent?e.parentElement:e,n=t.instance?.$.uid;if(!o?._touchHandlers||!n)return;const s=o._touchHandlers[n];pe(s).forEach(u=>{o.removeEventListener(u,s[u])}),delete o._touchHandlers[n]}const We={mounted:Vt,unmounted:Ct},It=We,Re=Symbol.for("vuetify:v-window"),Me=Symbol.for("vuetify:v-window-group"),$e=E({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||e==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{type:[Boolean,String],default:"force"},...ae(),...ie(),...Le()},"VWindow"),Te=M()({name:"VWindow",directives:{Touch:We},props:$e(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:o}=t;const{themeClasses:n}=Xe(e),{isRtl:s}=ze(),{t:u}=Ye(),l=Ee(e,Me),f=R(),r=g(()=>s.value?!e.reverse:e.reverse),m=C(!1),w=g(()=>{const y=e.direction==="vertical"?"y":"x",k=(r.value?!m.value:m.value)?"-reverse":"";return`v-window-${y}${k}-transition`}),c=C(0),a=R(void 0),x=g(()=>l.items.value.findIndex(y=>l.selected.value.includes(y.id)));ue(x,(y,b)=>{const k=l.items.value.length,H=k-1;k<=2?m.value=y<b:y===H&&b===0?m.value=!0:y===0&&b===H?m.value=!1:m.value=y<b}),Ge(Re,{transition:w,isReversed:m,transitionCount:c,transitionHeight:a,rootRef:f});const h=g(()=>e.continuous||x.value!==0),I=g(()=>e.continuous||x.value!==l.items.value.length-1);function T(){h.value&&l.prev()}function V(){I.value&&l.next()}const _=g(()=>{const y=[],b={icon:s.value?e.nextIcon:e.prevIcon,class:`v-window__${r.value?"right":"left"}`,onClick:l.prev,"aria-label":u("$vuetify.carousel.prev")};y.push(h.value?o.prev?o.prev({props:b}):v(O,b,null):v("div",null,null));const k={icon:s.value?e.prevIcon:e.nextIcon,class:`v-window__${r.value?"left":"right"}`,onClick:l.next,"aria-label":u("$vuetify.carousel.next")};return y.push(I.value?o.next?o.next({props:k}):v(O,k,null):v("div",null,null)),y}),p=g(()=>e.touch===!1?e.touch:{...{left:()=>{r.value?T():V()},right:()=>{r.value?V():T()},start:b=>{let{originalEvent:k}=b;k.stopPropagation()}},...e.touch===!0?{}:e.touch});return $(()=>q(v(e.tag,{ref:f,class:["v-window",{"v-window--show-arrows-on-hover":e.showArrows==="hover"},n.value,e.class],style:e.style},{default:()=>[v("div",{class:"v-window__container",style:{height:a.value}},[o.default?.({group:l}),e.showArrows!==!1&&v("div",{class:"v-window__controls"},[_.value])]),o.additional?.({group:l})]}),[[De("touch"),p.value]])),{group:l}}}),_t=E({..._e($e(),["continuous","nextIcon","prevIcon","showArrows","touch","mandatory"])},"VTabsWindow"),pt=M()({name:"VTabsWindow",props:_t(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:o}=t;const n=re(ce,null),s=Be(e,"modelValue"),u=g({get(){return s.value!=null||!n?s.value:n.items.value.find(l=>n.selected.value.includes(l.id))?.value},set(l){s.value=l}});return $(()=>{const l=Te.filterProps(e);return v(Te,B({_as:"VTabsWindow"},l,{modelValue:u.value,"onUpdate:modelValue":f=>u.value=f,class:["v-tabs-window",e.class],style:e.style,mandatory:!1,touch:!1}),o)}),{}}}),zt=E({eager:Boolean},"lazy");function Bt(e,t){const o=C(!1),n=g(()=>o.value||e.eager||t.value);ue(t,()=>o.value=!0);function s(){e.eager||(o.value=!1)}return{isBooted:o,hasContent:n,onAfterLeave:s}}const He=E({reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...ae(),...st(),...zt()},"VWindowItem"),Ve=M()({name:"VWindowItem",directives:{Touch:It},props:He(),emits:{"group:selected":e=>!0},setup(e,t){let{slots:o}=t;const n=re(Re),s=at(e,Me),{isBooted:u}=ft();if(!n||!s)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const l=C(!1),f=g(()=>u.value&&(n.isReversed.value?e.reverseTransition!==!1:e.transition!==!1));function r(){!l.value||!n||(l.value=!1,n.transitionCount.value>0&&(n.transitionCount.value-=1,n.transitionCount.value===0&&(n.transitionHeight.value=void 0)))}function m(){l.value||!n||(l.value=!0,n.transitionCount.value===0&&(n.transitionHeight.value=se(n.rootRef.value?.clientHeight)),n.transitionCount.value+=1)}function w(){r()}function c(h){l.value&&Ue(()=>{!f.value||!l.value||!n||(n.transitionHeight.value=se(h.clientHeight))})}const a=g(()=>{const h=n.isReversed.value?e.reverseTransition:e.transition;return f.value?{name:typeof h!="string"?n.transition.value:h,onBeforeEnter:m,onAfterEnter:r,onEnterCancelled:w,onBeforeLeave:m,onAfterLeave:r,onLeaveCancelled:w,onEnter:c}:!1}),{hasContent:x}=Bt(e,s.isSelected);return $(()=>v(ht,{transition:a.value,disabled:!u.value},{default:()=>[q(v("div",{class:["v-window-item",s.selectedClass.value,e.class],style:e.style},[x.value&&o.default?.()]),[[le,s.isSelected.value]])]})),{groupItem:s}}}),Et=E({...He()},"VTabsWindowItem"),Pt=M()({name:"VTabsWindowItem",props:Et(),setup(e,t){let{slots:o}=t;return $(()=>{const n=Ve.filterProps(e);return v(Ve,B({_as:"VTabsWindowItem"},n,{class:["v-tabs-window-item",e.class],style:e.style}),o)}),{}}});function Wt(e){let{selectedElement:t,containerElement:o,isRtl:n,isHorizontal:s}=e;const u=L(s,o),l=Ae(s,n,o),f=L(s,t),r=Fe(s,t),m=f*.4;return l>r?r-m:l+u<r+f?r-u+f+m:l}function Rt(e){let{selectedElement:t,containerElement:o,isHorizontal:n}=e;const s=L(n,o),u=Fe(n,t),l=L(n,t);return u-s/2+l/2}function Ce(e,t){return t?.[e?"scrollWidth":"scrollHeight"]||0}function Mt(e,t){return t?.[e?"clientWidth":"clientHeight"]||0}function Ae(e,t,o){if(!o)return 0;const{scrollLeft:n,offsetWidth:s,scrollWidth:u}=o;return e?t?u-s+n:n:o.scrollTop}function L(e,t){return t?.[e?"offsetWidth":"offsetHeight"]||0}function Fe(e,t){return t?.[e?"offsetLeft":"offsetTop"]||0}const $t=Symbol.for("vuetify:v-slide-group"),Oe=E({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:$t},nextIcon:{type:fe,default:"$next"},prevIcon:{type:fe,default:"$prev"},showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["always","desktop","mobile"].includes(e)},...ae(),...je(),...ie(),...it({selectedClass:"v-slide-group-item--active"})},"VSlideGroup"),Ie=M()({name:"VSlideGroup",props:Oe(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:o}=t;const{isRtl:n}=ze(),{displayClasses:s,mobile:u}=qe(e),l=Ee(e,e.symbol),f=C(!1),r=C(0),m=C(0),w=C(0),c=g(()=>e.direction==="horizontal"),{resizeRef:a,contentRect:x}=he(),{resizeRef:h,contentRect:I}=he(),T=Ke(),V=g(()=>({container:a.el,duration:200,easing:"easeOutQuart"})),_=g(()=>l.selected.value.length?l.items.value.findIndex(i=>i.id===l.selected.value[0]):-1),p=g(()=>l.selected.value.length?l.items.value.findIndex(i=>i.id===l.selected.value[l.selected.value.length-1]):-1);if(me){let i=-1;ue(()=>[l.selected.value,x.value,I.value,c.value],()=>{cancelAnimationFrame(i),i=requestAnimationFrame(()=>{if(x.value&&I.value){const d=c.value?"width":"height";m.value=x.value[d],w.value=I.value[d],f.value=m.value+1<w.value}if(_.value>=0&&h.el){const d=h.el.children[p.value];b(d,e.centerActive)}})})}const y=C(!1);function b(i,d){let S=0;d?S=Rt({containerElement:a.el,isHorizontal:c.value,selectedElement:i}):S=Wt({containerElement:a.el,isHorizontal:c.value,isRtl:n.value,selectedElement:i}),k(S)}function k(i){if(!me||!a.el)return;const d=L(c.value,a.el),S=Ae(c.value,n.value,a.el);if(!(Ce(c.value,a.el)<=d||Math.abs(i-S)<16)){if(c.value&&n.value&&a.el){const{scrollWidth:te,offsetWidth:ne}=a.el;i=te-ne-i}c.value?T.horizontal(i,V.value):T(i,V.value)}}function H(i){const{scrollTop:d,scrollLeft:S}=i.target;r.value=c.value?S:d}function z(i){if(y.value=!0,!(!f.value||!h.el)){for(const d of i.composedPath())for(const S of h.el.children)if(S===d){b(S);return}}}function K(i){y.value=!1}let X=!1;function N(i){!X&&!y.value&&!(i.relatedTarget&&h.el?.contains(i.relatedTarget))&&F(),X=!1}function Y(){X=!0}function G(i){if(!h.el)return;function d(S){i.preventDefault(),F(S)}c.value?i.key==="ArrowRight"?d(n.value?"prev":"next"):i.key==="ArrowLeft"&&d(n.value?"next":"prev"):i.key==="ArrowDown"?d("next"):i.key==="ArrowUp"&&d("prev"),i.key==="Home"?d("first"):i.key==="End"&&d("last")}function F(i){if(!h.el)return;let d;if(!i)d=Ne(h.el)[0];else if(i==="next"){if(d=h.el.querySelector(":focus")?.nextElementSibling,!d)return F("first")}else if(i==="prev"){if(d=h.el.querySelector(":focus")?.previousElementSibling,!d)return F("last")}else i==="first"?d=h.el.firstElementChild:i==="last"&&(d=h.el.lastElementChild);d&&d.focus({preventScroll:!0})}function Q(i){const d=c.value&&n.value?-1:1,S=(i==="prev"?-d:d)*m.value;let ee=r.value+S;if(c.value&&n.value&&a.el){const{scrollWidth:te,offsetWidth:ne}=a.el;ee+=te-ne}k(ee)}const J=g(()=>({next:l.next,prev:l.prev,select:l.select,isSelected:l.isSelected})),Z=g(()=>{switch(e.showArrows){case"always":return!0;case"desktop":return!u.value;case!0:return f.value||Math.abs(r.value)>0;case"mobile":return u.value||f.value||Math.abs(r.value)>0;default:return!u.value&&(f.value||Math.abs(r.value)>0)}}),de=g(()=>Math.abs(r.value)>1),ve=g(()=>{if(!a.value)return!1;const i=Ce(c.value,a.el),d=Mt(c.value,a.el);return i-d-Math.abs(r.value)>1});return $(()=>v(e.tag,{class:["v-slide-group",{"v-slide-group--vertical":!c.value,"v-slide-group--has-affixes":Z.value,"v-slide-group--is-overflowing":f.value},s.value,e.class],style:e.style,tabindex:y.value||l.selected.value.length?-1:0,onFocus:N},{default:()=>[Z.value&&v("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!de.value}],onMousedown:Y,onClick:()=>de.value&&Q("prev")},[o.prev?.(J.value)??v(xe,null,{default:()=>[v(ke,{icon:n.value?e.nextIcon:e.prevIcon},null)]})]),v("div",{key:"container",ref:a,class:"v-slide-group__container",onScroll:H},[v("div",{ref:h,class:"v-slide-group__content",onFocusin:z,onFocusout:K,onKeydown:G},[o.default?.(J.value)])]),Z.value&&v("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!ve.value}],onMousedown:Y,onClick:()=>ve.value&&Q("next")},[o.next?.(J.value)??v(xe,null,{default:()=>[v(ke,{icon:n.value?e.prevIcon:e.nextIcon},null)]})])]})),{selected:l.selected,scrollTo:Q,scrollOffset:r,focus:F}}});function Ht(){const t=Qe("useScopeId").vnode.scopeId;return{scopeId:t?{[t]:""}:void 0}}function At(e){return e?e.map(t=>Ze(t)?t:{text:t,value:t}):[]}const Ft=E({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...Oe({mandatory:"force",selectedClass:"v-tab-item--selected"}),...mt(),...ie()},"VTabs"),Ot=M()({name:"VTabs",props:Ft(),emits:{"update:modelValue":e=>!0},setup(e,t){let{attrs:o,slots:n}=t;const s=Be(e,"modelValue"),u=g(()=>At(e.items)),{densityClasses:l}=gt(e),{backgroundColorClasses:f,backgroundColorStyles:r}=rt(P(e,"bgColor")),{scopeId:m}=Ht();return Je({VTab:{color:P(e,"color"),direction:P(e,"direction"),stacked:P(e,"stacked"),fixed:P(e,"fixedTabs"),sliderColor:P(e,"sliderColor"),hideSlider:P(e,"hideSlider")}}),$(()=>{const w=Ie.filterProps(e),c=!!(n.window||e.items.length>0);return v(j,null,[v(Ie,B(w,{modelValue:s.value,"onUpdate:modelValue":a=>s.value=a,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},l.value,f.value,e.class],style:[{"--v-tabs-height":se(e.height)},r.value,e.style],role:"tablist",symbol:ce},m,o),{default:()=>[n.default?.()??u.value.map(a=>n.tab?.({item:a})??v(Pe,B(a,{key:a.text,value:a.value}),{default:()=>n[`tab.${a.value}`]?.({item:a})}))]}),c&&v(pt,B({modelValue:s.value,"onUpdate:modelValue":a=>s.value=a,key:"tabs-window"},m),{default:()=>[u.value.map(a=>n.item?.({item:a})??v(Pt,{value:a.value},{default:()=>n[`item.${a.value}`]?.({item:a})})),n.window?.()]})])}),{}}}),Nt={__name:"MobileLayout",setup(e){const t=re(et),o=t.template.widgets,n=ge(o),[s]=ge([t.template?.background]),{mainRect:u}=tt(),l=R(-1),f=R(null),r=R("");return nt(()=>{r.value=u.value.bottom+(f.value?.$el?.clientHeight??0)+"px"}),(m,w)=>(W(),D(yt,{class:"overflow-hidden",style:{height:"91dvh"}},{default:U(()=>[(W(),D(ye(A(s).component),B({id:"bg-widget"},A(s).props),null,16)),(W(!0),oe(j,null,be(A(n),(c,a)=>q((W(),oe("div",{id:"overlay",class:"pa-2",key:a,style:we({bottom:r.value,position:"absolute",overflow:"hidden",width:"100%",left:0,top:A(u).top+"px",zIndex:1,background:"rgb(var(--v-theme-surface))"})},[v(O,{icon:"",variant:"text",style:{height:"5%",position:"relative"},onClick:w[0]||(w[0]=x=>l.value=-1)},{default:U(()=>[Se("✕")]),_:1}),q((W(),D(ye(c.value.component),B({style:{height:"94% !important"},key:c.value.id,ref_for:!0},c.value.props),null,16)),[[le,l.value===a]])],4)),[[le,l.value===a]])),128)),v(Ot,{ref_key:"tabs",ref:f,"align-tabs":"center","bg-color":"surface",style:we({position:"relative",bottom:(A(u).bottom||48)+"px",zIndex:10}),"show-arrows":"",modelValue:l.value,"onUpdate:modelValue":w[1]||(w[1]=c=>l.value=c)},{default:U(()=>[(W(!0),oe(j,null,be(A(n),(c,a)=>(W(),D(Pe,{key:a,value:a},{default:U(()=>[Se(ot(c.value.title),1)]),_:2},1032,["value"]))),128))]),_:1},8,["style","modelValue"])]),_:1}))}};export{Nt as default};
