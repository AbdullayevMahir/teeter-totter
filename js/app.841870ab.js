(function(){"use strict";var t={5135:function(t,e,i){var o=i(9242),n=i(3396);function a(t,e,i,o,a,s){const l=(0,n.up)("TeeterTotter");return(0,n.wg)(),(0,n.j4)(l)}function s(t,e,i,o,a,s){const l=(0,n.up)("TheScene");return(0,n.wg)(),(0,n.j4)(l)}const l={ref:"scene",class:"scene"};function r(t,e,i,o,a,s){const r=(0,n.up)("TheControls"),g=(0,n.up)("GameInfo"),h=(0,n.up)("TheWeight"),c=(0,n.up)("TheBalance");return(0,n.wg)(),(0,n.iD)("div",l,[(0,n.Wm)(r),(0,n.Wm)(g),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.weights,((t,e)=>((0,n.wg)(),(0,n.j4)(h,{key:e,index:e,type:t.type,"is-falling":t.isFalling,weight:t.weight,"position-y":t.positionY,"position-probability":t.horizontalPositionProbability,side:"left"},null,8,["index","type","is-falling","weight","position-y","position-probability"])))),128)),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.rightWeights,((t,e)=>((0,n.wg)(),(0,n.j4)(h,{key:e,index:e,type:t.type,"is-falling":t.isFalling,weight:t.weight,"position-y":t.positionY,"position-probability":t.horizontalPositionProbability,side:"right"},null,8,["index","type","is-falling","weight","position-y","position-probability"])))),128)),(0,n.Wm)(c,{ref:"balanceTemplateRef"},null,512)],512)}var g=i(7139);const h={class:"info-container"};function c(t,e,i,o,a,s){return(0,n.wg)(),(0,n.iD)("div",h,[(0,n._)("div",null,[(0,n._)("p",null,"Total Weight: "+(0,g.zw)(o.weight.totalLeftWeight.toFixed(2)),1),(0,n._)("p",null,"Momentum: "+(0,g.zw)(o.force.leftForce.toFixed(2)),1)]),(0,n._)("div",null,[(0,n._)("p",null,"Total Weight: "+(0,g.zw)(o.weight.totalRightWeight.toFixed(2)),1),(0,n._)("p",null,"Momentum: "+(0,g.zw)(o.force.rightForce.toFixed(2)),1)])])}var u=i(9749),p={name:"GameInfo",setup(){const t=(0,u.oR)(),e=(0,n.Fl)((e=>t.getters["main/getTotalWeight"])),i=(0,n.Fl)((e=>t.getters["main/getMomentum"]));return{weight:e,force:i}}},m=i(89);const d=(0,m.Z)(p,[["render",c],["__scopeId","data-v-20ea7927"]]);var f=d;const w=t=>((0,n.dD)("data-v-7a525ee2"),t=t(),(0,n.Cn)(),t),b={class:"balance"},v=w((()=>(0,n._)("div",{class:"balance__space"},null,-1))),F=w((()=>(0,n._)("div",{class:"balance__balance-bottom"},null,-1)));function W(t,e,i,o,a,s){return(0,n.wg)(),(0,n.iD)("div",b,[v,(0,n.Uk)(" "+(0,g.zw)(o.rotationAngle.toFixed(2))+" ",1),(0,n._)("div",{style:(0,g.j5)({transform:"rotate("+o.rotationAngle+"deg)"}),ref:"balanceLine",class:"balance__line"},null,4),F])}var R=i(4870),y={name:"TheBalance",setup(){const t=(0,u.oR)(),e=(0,R.iH)(null),i=(0,n.Fl)((e=>t.getters["balance/getRotationAngle"]));return(0,n.bv)((()=>{t.dispatch("balance/setBalanceLineTopPosition",e.value.getBoundingClientRect().top)})),{balanceLine:e,rotationAngle:i}}};const P=(0,m.Z)(y,[["render",W],["__scopeId","data-v-7a525ee2"]]);var T=P;const D={class:"shape__weight"},L=["src"];function A(t,e,i,o,a,s){return(0,n.wg)(),(0,n.iD)("div",{class:(0,g.C_)([i.type,"shape"]),style:(0,g.j5)({width:o.boxWidth+"px",height:o.boxWidth+"px",top:o.shapeTopPosition+"px",left:"left"===i.side?o.positionX+"px":"initial",right:"right"===i.side?o.positionX+"px":"initial"})},[(0,n._)("span",D,(0,g.zw)(i.weight),1),"triangle"===i.type?((0,n.wg)(),(0,n.iD)("img",{key:0,class:"shape__image",src:o.triangleImage,alt:"trinagle"},null,8,L)):(0,n.kq)("",!0)],6)}const x=(t,e,i,o="left")=>{const n=Math.abs(500*Math.sin(_(e))),a=parseInt(t)+n*(1-i),s=parseInt(t)-n*(1-i);return"left"===o&&e>0||"right"===o&&e<0?s:a},_=t=>t*(Math.PI/180),S=t=>8*t+60;var I={name:"TheWeight",props:{index:{type:Number,default:0},type:{type:String,default:"t"},weight:{type:Number,default:1},positionY:{type:Number,default:1},isFalling:Boolean,positionProbability:{type:Number,default:1},side:{type:String,default:"left"}},setup(t){const e=(0,u.oR)(),i=(0,R.iH)(S(t.weight)),o=(0,n.Fl)((t=>e.getters["main/getBalanceLimits"])),a=(0,n.Fl)((e=>o.value+500*t.positionProbability)),s=(0,n.Fl)((e=>t.positionY)),l=(0,n.Fl)((t=>e.getters["balance/getRotationAngle"])),r=(0,n.Fl)((t=>e.getters["balance/getBalanceTopPosition"]));(0,n.YP)((()=>(0,R.iH)(t.positionY)),(()=>{const o=x(r.value,l.value,t.positionProbability,t.side);o<t.positionY+i.value&&t.isFalling&&e.dispatch("left"===t.side?"main/updateWeightFalling":"main/updateRightWeightFalling",{index:t.index,isFalling:!1})}));const g="/teeter-totter/triangle.png";return{boxWidth:i,balanceSideLimits:o,positionX:a,shapeTopPosition:s,triangleImage:g}}};const B=(0,m.Z)(I,[["render",A],["__scopeId","data-v-9b6bf118"]]);var z=B;const k=4,G=.05,Y=(t,e)=>e&&t?t>e?t/e*G:e/t*-1*G:0,C={class:"info-container"};function M(t,e,i,o,a,s){return(0,n.wg)(),(0,n.iD)("div",C,[(0,n._)("button",{class:(0,g.C_)({pause:!o.gameState,play:o.gameState}),onClick:e[0]||(e[0]=t=>o.setGameState(!0))},(0,g.zw)(o.gameState?"Continue":"Pause"),3)])}var j={name:"TheControls",setup(){const t=(0,u.oR)(),e=(0,n.Fl)((e=>t.getters["main/getGameState"])),i=(0,n.Fl)((e=>t.getters["main/getTotalWeight"])),o=(0,n.Fl)((e=>t.getters["main/getMomentum"])),a=()=>{t.dispatch("main/setGameState",!e.value)};return{weight:i,force:o,setGameState:a,gameState:e}}};const O=(0,m.Z)(j,[["render",M],["__scopeId","data-v-19b2bf25"]]);var E=O;const N=t=>{const e=e=>{37===e.keyCode?t.dispatch("main/setIsArrowLeftDown",!0):39===e.keyCode&&t.dispatch("main/setIsArrowRightDown",!0)},i=e=>{37===e.keyCode?t.dispatch("main/setIsArrowLeftDown",!1):39===e.keyCode&&t.dispatch("main/setIsArrowRightDown",!1)};(0,n.bv)((()=>window.addEventListener("keydown",e))),(0,n.bv)((()=>window.addEventListener("keyup",i))),(0,n.Ah)((()=>window.removeEventListener("keydown",e))),(0,n.Ah)((()=>window.removeEventListener("keyUp",i)))};var Z={name:"TheScene",components:{TheWeight:z,GameInfo:f,TheBalance:T,TheControls:E},setup(){const t=(0,u.oR)(),e=(0,R.iH)(null),i=(0,n.Fl)((e=>t.getters["main/getGameState"])),o=(0,n.Fl)((e=>t.getters["main/getWeights"])),a=(0,n.Fl)((e=>t.getters["main/getRandomWeights"])),s=(0,n.Fl)((e=>t.getters["balance/getRotationAngle"])),l=(0,n.Fl)((e=>t.getters["balance/getBalanceTopPosition"])),r=(0,n.Fl)((e=>t.getters["main/getIsArrowLeftDown"])),g=(0,n.Fl)((e=>t.getters["main/getIsArrowRightDown"])),h=(0,n.Fl)((e=>t.getters["main/getMomentum"]));N(t);const c=e=>t.dispatch("main/setGameState",!0),p=()=>{o.value.forEach(((e,i)=>{e.isFalling&&t.dispatch("main/updateWeightPosition",i)})),a.value.forEach(((e,i)=>{e.isFalling&&t.dispatch("main/updateRightWeightPosition",i)}))},m=()=>{const e=Y(h.value.rightForce,h.value.leftForce);t.dispatch("balance/setRotationDelta",e),t.dispatch("balance/setBalanceRotationDeg")},d=(e,i="left")=>{e.forEach(((e,o)=>{if(e.isFalling)return;let n=x(l.value,s.value,e.horizontalPositionProbability,i);n-=S(e.weight),t.dispatch("left"===i?"main/setFalledWeightPosition":"main/setFalledRightWeightPosition",{index:o,position:n})}))},f=(e,i="left")=>{let o=0;e.forEach(((e,n)=>{e.isFalling||(o+=e.weight,t.dispatch("left"===i?"main/setTotalLeftWeight":"main/setTotalRightWeight",o))}))},w=()=>{(r.value||g.value)&&o.value.forEach(((e,i)=>{e.isFalling&&t.dispatch(r.value?"main/moveLeft":"main/moveRight",i)}))},b=e=>{(t.getters["balance/getRotationAngle"]>30||t.getters["balance/getRotationAngle"]<-30)&&(c(),alert("Game Over!"))};return(0,n.bv)((()=>{const n=(e.value.clientWidth-1e3)/2;t.dispatch("main/setBalanceSideLimit",{balanceSideLimit:n});const s=()=>{if(i.value)return requestAnimationFrame(s);p(),d(a.value,"right"),d(o.value,"left"),f(a.value,"right"),f(o.value,"left"),w(),m(),b(),requestAnimationFrame(s)};requestAnimationFrame(s)})),{scene:e,store:t,weights:o,rightWeights:a}}};const H=(0,m.Z)(Z,[["render",r],["__scopeId","data-v-7ab68a4f"]]);var q=H,X={name:"TeeterTotter",components:{TheScene:q}};const K=(0,m.Z)(X,[["render",s]]);var U=K,J={name:"TeeterTotterApp",components:{TeeterTotter:U}};const Q=(0,m.Z)(J,[["render",a]]);var V=Q;const $=(t,e)=>{let i=0,o=0;for(let n of e)n.isFalling||(o+=n.weight*(1-n.horizontalPositionProbability));for(let n of t)n.isFalling||(i+=n.weight*(1-n.horizontalPositionProbability));return{rightForce:i,leftForce:o}},tt=(t,e)=>Math.floor(Math.random()*(Math.floor(e)-Math.ceil(t)+1))+t,et=["rectangle","circle","triangle"],it=()=>({isGamePaused:!1,isArrowRightDown:!1,isArrowLeftDown:!1,balanceSideLimits:0,balanceRotationDeg:0,totalLeftWeight:0,totalRightWeight:0,force:{leftForce:0,rightForce:0},rightWeights:[{type:"circle",weight:3,isFalling:!0,horizontalPositionProbability:.7,positionY:-100}],weights:[{type:"triangle",weight:5,isFalling:!0,horizontalPositionProbability:.3,positionY:-250}]}),ot={getBalanceLimits:t=>t.balanceSideLimits,getWeights:t=>t.weights,getRandomWeights:t=>t.rightWeights,getMomentum(t){return $(t.rightWeights,t.weights)},getTotalWeight(t){return{totalRightWeight:t.totalRightWeight,totalLeftWeight:t.totalLeftWeight}},getGameState(t){return t.isGamePaused},getIsArrowRightDown(t){return t.isArrowRightDown},getIsArrowLeftDown(t){return t.isArrowLeftDown}},nt={setBalanceSideLimit({commit:t},e){t("setBalanceLimit",e)},setBalanceRotationDeg({commit:t},e){t("setBalanceRotationDeg",e)},pushNewWeight({commit:t},e){t("pushNewWeight",e)},updateWeightFalling({commit:t},{index:e,isFalling:i}){t("updateWeightFalling",{index:e,isFalling:i}),t("pushNewWeight")},updateRightWeightFalling({commit:t},{index:e,isFalling:i}){t("updateRightWeightFalling",{index:e,isFalling:i}),t("pushNewWeightToRight")},updateWeightPosition({commit:t},e){t("updateWeightPosition",e)},updateRightWeightPosition({commit:t},e){t("updateRightWeightPosition",e)},setFalledWeightPosition({commit:t},{index:e,position:i}){t("setFalledWeightPosition",{index:e,position:i})},setFalledRightWeightPosition({commit:t},{index:e,position:i}){t("setFalledRightWeightPosition",{index:e,position:i})},setTotalRightWeight({commit:t},e){t("setTotalRightWeight",e)},setIsArrowLeftDown({commit:t},e){t("setIsArrowLeftDown",e)},setIsArrowRightDown({commit:t},e){t("setIsArrowRightDown",e)},moveLeft({commit:t},e){t("moveLeft",e)},moveRight({commit:t},e){t("moveRight",e)},setTotalLeftWeight({commit:t},e){t("setTotalLeftWeight",e)},setGameState({commit:t},e){t("setGameState",e)}},at={setBalanceLimit(t,{balanceSideLimit:e}){t.balanceSideLimits=e},setBalanceRotationDeg(t,{balanceRotationDeg:e}){t.balanceRotationDeg=e},pushNewWeight(t){const e=tt(1,10),i=tt(1,7)/10,o=tt(0,2);t.weights.push({type:et[o],weight:e,isFalling:!0,horizontalPositionProbability:i,positionY:-100})},pushNewWeightToRight(t){const e=tt(1,10),i=tt(1,7)/10,o=tt(0,2);t.rightWeights.push({type:et[o],weight:e,isFalling:!0,horizontalPositionProbability:i,positionY:-100})},updateWeightPosition(t,e){t.weights[e].positionY+=k},updateRightWeightPosition(t,e){t.rightWeights[e].positionY+=k},updateWeightFalling(t,{index:e,isFalling:i}){t.weights[e].isFalling=i},updateRightWeightFalling(t,{index:e,isFalling:i}){t.rightWeights[e].isFalling=i},setFalledWeightPosition(t,{index:e,position:i}){t.weights[e].positionY=i},setFalledRightWeightPosition(t,{index:e,position:i}){t.rightWeights[e].positionY=i},setIsArrowLeftDown(t,e){t.isArrowLeftDown=e},setIsArrowRightDown(t,e){t.isArrowRightDown=e},moveLeft(t,e){t.weights[e].horizontalPositionProbability>0&&(t.weights[e].horizontalPositionProbability-=.003)},moveRight(t,e){t.weights[e].horizontalPositionProbability<.8&&(t.weights[e].horizontalPositionProbability+=.003)},setTotalRightWeight(t,e){t.totalRightWeight=e},setTotalLeftWeight(t,e){t.totalLeftWeight=e},setGameState(t,e){t.isGamePaused=e}};var st={namespaced:!0,state:it,getters:ot,actions:nt,mutations:at};const lt=()=>({balanceTopPosition:0,rotationAngle:0,rotationDelta:.05,rightSideForce:0,leftSideForce:0}),rt={getRotationDelta:t=>t.rotationDelta,getRotationAngle:t=>t.rotationAngle,getBalanceTopPosition:t=>t.balanceTopPosition},gt={setBalanceRotationDeg({commit:t}){t("setBalanceRotationDeg")},setBalanceLineTopPosition({commit:t},e){t("setBalanceLineTopPosition",e)},setRotationDelta({commit:t},e){t("setRotationDelta",e)}},ht={setBalanceRotationDeg(t){t.rotationAngle=t.rotationAngle+t.rotationDelta},setBalanceLineTopPosition(t,e){t.balanceTopPosition=e},setRotationDelta(t,e){t.rotationDelta=e}};var ct={namespaced:!0,state:lt,getters:rt,actions:gt,mutations:ht};const ut=!1;var pt=(0,u.MT)({modules:{main:st,balance:ct},strict:ut,plugins:ut?[(0,u.hu)()]:[]});(0,o.ri)(V).use(pt).mount("#app")}},e={};function i(o){var n=e[o];if(void 0!==n)return n.exports;var a=e[o]={exports:{}};return t[o](a,a.exports,i),a.exports}i.m=t,function(){var t=[];i.O=function(e,o,n,a){if(!o){var s=1/0;for(h=0;h<t.length;h++){o=t[h][0],n=t[h][1],a=t[h][2];for(var l=!0,r=0;r<o.length;r++)(!1&a||s>=a)&&Object.keys(i.O).every((function(t){return i.O[t](o[r])}))?o.splice(r--,1):(l=!1,a<s&&(s=a));if(l){t.splice(h--,1);var g=n();void 0!==g&&(e=g)}}return e}a=a||0;for(var h=t.length;h>0&&t[h-1][2]>a;h--)t[h]=t[h-1];t[h]=[o,n,a]}}(),function(){i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,{a:e}),e}}(),function(){i.d=function(t,e){for(var o in e)i.o(e,o)&&!i.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};i.O.j=function(e){return 0===t[e]};var e=function(e,o){var n,a,s=o[0],l=o[1],r=o[2],g=0;if(s.some((function(e){return 0!==t[e]}))){for(n in l)i.o(l,n)&&(i.m[n]=l[n]);if(r)var h=r(i)}for(e&&e(o);g<s.length;g++)a=s[g],i.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return i.O(h)},o=self["webpackChunkteeter_totter"]=self["webpackChunkteeter_totter"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=i.O(void 0,[998],(function(){return i(5135)}));o=i.O(o)})();
//# sourceMappingURL=app.841870ab.js.map