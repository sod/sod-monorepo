import{Aa as Vt,C as Nt,E as j,Ea as Wt,F as Rt,Fa as Kt,G as kt,Ga as Xt,Ha as qt,Ja as Zt,Ka as Yt,La as tt,M as z,N as q,O as jt,W as Z,a as yt,b as St,bb as Qt,c as gt,d as xt,e as Et,ea as Pt,f as W,g as It,h as b,i as K,j as M,ja as Ft,k as At,ka as _t,l as Tt,la as Lt,m as Ot,n as bt,o as vt,p as Mt,q as wt,qa as zt,r as X,ra as $t,s as _,sa as Bt,t as Dt,ta as Y,u as L,ua as $,v as w,va as Ut,vb as te,w as I,wa as Jt,x as Ct,xa as Gt,y as D,ya as Q,za as Ht}from"./chunk-CPMFGZH7.js";import{a as R,b as k}from"./chunk-OC64LIZX.js";function Ne(e){let t=e,i=Math.floor(Math.abs(e)),n=e.toString().replace(/^[^.]*\.?/,"").length;return i===1&&n===0?1:5}var ee=["en",[["a","p"],["AM","PM"],void 0],[["AM","PM"],void 0,void 0],[["S","M","T","W","T","F","S"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],["Su","Mo","Tu","We","Th","Fr","Sa"]],void 0,[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],["January","February","March","April","May","June","July","August","September","October","November","December"]],void 0,[["B","A"],["BC","AD"],["Before Christ","Anno Domini"]],0,[6,0],["M/d/yy","MMM d, y","MMMM d, y","EEEE, MMMM d, y"],["h:mm a","h:mm:ss a","h:mm:ss a z","h:mm:ss a zzzz"],["{1}, {0}",void 0,"{1} 'at' {0}",void 0],[".",",",";","%","+","-","E","\xD7","\u2030","\u221E","NaN",":"],["#,##0.###","#,##0%","\xA4#,##0.00","#E0"],"USD","$","US Dollar",{},"ltr",Ne];var F="PERFORM_ACTION",Re="REFRESH",ae="RESET",ue="ROLLBACK",pe="COMMIT",de="SWEEP",le="TOGGLE_ACTION",fe="SET_ACTIONS_ACTIVE",he="JUMP_TO_STATE",me="JUMP_TO_ACTION",ht="IMPORT_STATE",ye="LOCK_CHANGES",Se="PAUSE_RECORDING",C=class{constructor(t,i){if(this.action=t,this.timestamp=i,this.type=F,typeof t.type>"u")throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?')}},et=class{constructor(){this.type=Re}},nt=class{constructor(t){this.timestamp=t,this.type=ae}},it=class{constructor(t){this.timestamp=t,this.type=ue}},ot=class{constructor(t){this.timestamp=t,this.type=pe}},st=class{constructor(){this.type=de}},rt=class{constructor(t){this.id=t,this.type=le}},ne=class{constructor(t,i,n=!0){this.start=t,this.end=i,this.active=n,this.type=fe}},ct=class{constructor(t){this.index=t,this.type=he}},at=class{constructor(t){this.actionId=t,this.type=me}},ut=class{constructor(t){this.nextLiftedState=t,this.type=ht}},pt=class{constructor(t){this.status=t,this.type=ye}},dt=class{constructor(t){this.status=t,this.type=Se}},ie=class{constructor(){this.maxAge=!1}},G=new j("@ngrx/store-devtools Options"),oe=new j("@ngrx/store-devtools Initial Config");function ge(){return null}var ke="NgRx Store DevTools";function je(e){let t={maxAge:!1,monitor:ge,actionSanitizer:void 0,stateSanitizer:void 0,name:ke,serialize:!1,logOnly:!1,autoPause:!1,trace:!1,traceLimit:75,features:{pause:!0,lock:!0,persist:!0,export:!0,import:"custom",jump:!0,skip:!0,reorder:!0,dispatch:!0,test:!0}},i=typeof e=="function"?e():e,n=i.logOnly?{pause:!0,export:!0,test:!0}:!1,o=i.features||n||t.features;o.import===!0&&(o.import="custom");let a=Object.assign({},t,{features:o},i);if(a.maxAge&&a.maxAge<2)throw new Error(`Devtools 'maxAge' cannot be less than 2, got ${a.maxAge}`);return a}function se(e,t){return e.filter(i=>t.indexOf(i)<0)}function xe(e){let{computedStates:t,currentStateIndex:i}=e;if(i>=t.length){let{state:o}=t[t.length-1];return o}let{state:n}=t[i];return n}function sn(e){return e.actionsById[e.nextActionId-1]}function P(e){return new C(e,+Date.now())}function Pe(e,t){return Object.keys(t).reduce((i,n)=>{let o=Number(n);return i[o]=Ee(e,t[o],o),i},{})}function Ee(e,t,i){return k(R({},t),{action:e(t.action,i)})}function Fe(e,t){return t.map((i,n)=>({state:Ie(e,i.state,n),error:i.error}))}function Ie(e,t,i){return e(t,i)}function Ae(e){return e.predicate||e.actionsSafelist||e.actionsBlocklist}function _e(e,t,i,n){let o=[],a={},m=[];return e.stagedActionIds.forEach((r,S)=>{let p=e.actionsById[r];p&&(S&&mt(e.computedStates[S],p,t,i,n)||(a[r]=p,o.push(r),m.push(e.computedStates[S])))}),k(R({},e),{stagedActionIds:o,actionsById:a,computedStates:m})}function mt(e,t,i,n,o){let a=i&&!i(e,t.action),m=n&&!t.action.type.match(n.map(S=>re(S)).join("|")),r=o&&t.action.type.match(o.map(S=>re(S)).join("|"));return a||m||r}function re(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}var H=(()=>{let t=class extends ${},e=t;return(()=>{t.\u0275fac=function(){let n;return function(a){return(n||(n=Nt(t)))(a||t)}}()})(),(()=>{t.\u0275prov=L({token:t,factory:t.\u0275fac})})(),e})(),B={START:"START",DISPATCH:"DISPATCH",STOP:"STOP",ACTION:"ACTION"},lt=new j("@ngrx/store-devtools Redux Devtools Extension"),Te=(()=>{let _DevtoolsExtension=class{constructor(e,t,i){this.config=t,this.dispatcher=i,this.devtoolsExtension=e,this.createActionStreams()}notify(e,t){if(this.devtoolsExtension)if(e.type===F){if(t.isLocked||t.isPaused)return;let i=xe(t);if(Ae(this.config)&&mt(i,e,this.config.predicate,this.config.actionsSafelist,this.config.actionsBlocklist))return;let n=this.config.stateSanitizer?Ie(this.config.stateSanitizer,i,t.currentStateIndex):i,o=this.config.actionSanitizer?Ee(this.config.actionSanitizer,e,t.nextActionId):e;this.sendToReduxDevtools(()=>this.extensionConnection.send(o,n))}else{let i=k(R({},t),{stagedActionIds:t.stagedActionIds,actionsById:this.config.actionSanitizer?Pe(this.config.actionSanitizer,t.actionsById):t.actionsById,computedStates:this.config.stateSanitizer?Fe(this.config.stateSanitizer,t.computedStates):t.computedStates});this.sendToReduxDevtools(()=>this.devtoolsExtension.send(null,i,this.getExtensionConfig(this.config)))}}createChangesObservable(){return this.devtoolsExtension?new yt(e=>{let t=this.devtoolsExtension.connect(this.getExtensionConfig(this.config));return this.extensionConnection=t,t.init(),t.subscribe(i=>e.next(i)),t.unsubscribe}):xt}createActionStreams(){let e=this.createChangesObservable().pipe(Mt()),t=e.pipe(M(r=>r.type===B.START)),i=e.pipe(M(r=>r.type===B.STOP)),n=e.pipe(M(r=>r.type===B.DISPATCH),b(r=>this.unwrapAction(r.payload)),Tt(r=>r.type===ht?this.dispatcher.pipe(M(S=>S.type===Q),It(1e3),Ot(1e3),b(()=>r),At(()=>W(r)),bt(1)):W(r))),a=e.pipe(M(r=>r.type===B.ACTION),b(r=>this.unwrapAction(r.payload))).pipe(_(i)),m=n.pipe(_(i));this.start$=t.pipe(_(i)),this.actions$=this.start$.pipe(X(()=>a)),this.liftedActions$=this.start$.pipe(X(()=>m))}unwrapAction(action){return typeof action=="string"?eval(`(${action})`):action}getExtensionConfig(e){let t={name:e.name,features:e.features,serialize:e.serialize,autoPause:e.autoPause??!1,trace:e.trace??!1,traceLimit:e.traceLimit??75};return e.maxAge!==!1&&(t.maxAge=e.maxAge),t}sendToReduxDevtools(e){try{e()}catch(t){console.warn("@ngrx/store-devtools: something went wrong inside the redux devtools",t)}}},DevtoolsExtension=_DevtoolsExtension;return(()=>{_DevtoolsExtension.\u0275fac=function(t){return new(t||_DevtoolsExtension)(I(lt),I(G),I(H))}})(),(()=>{_DevtoolsExtension.\u0275prov=L({token:_DevtoolsExtension,factory:_DevtoolsExtension.\u0275fac})})(),DevtoolsExtension})(),J={type:Y},Le="@ngrx/store-devtools/recompute",ze={type:Le};function Oe(e,t,i,n,o){if(n)return{state:i,error:"Interrupted by an error up the chain"};let a=i,m;try{a=e(i,t)}catch(r){m=r.toString(),o.handleError(r)}return{state:a,error:m}}function U(e,t,i,n,o,a,m,r,S){if(t>=e.length&&e.length===a.length)return e;let p=e.slice(0,t),y=a.length-(S?1:0);for(let s=t;s<y;s++){let d=a[s],g=o[d].action,u=p[s-1],c=u?u.state:n,T=u?u.error:void 0,O=m.indexOf(d)>-1?u:Oe(i,g,c,T,r);p.push(O)}return S&&p.push(e[e.length-1]),p}function $e(e,t){return{monitorState:t(void 0,{}),nextActionId:1,actionsById:{0:P(J)},stagedActionIds:[0],skippedActionIds:[],committedState:e,currentStateIndex:0,computedStates:[],isLocked:!1,isPaused:!1}}function Be(e,t,i,n,o={}){return a=>(m,r)=>{let{monitorState:S,actionsById:p,nextActionId:y,stagedActionIds:s,skippedActionIds:d,committedState:g,currentStateIndex:u,computedStates:c,isLocked:T,isPaused:x}=m||t;m||(p=Object.create(p));function O(h){let l=h,E=s.slice(1,l+1);for(let A=0;A<E.length;A++)if(c[A+1].error){l=A,E=s.slice(1,l+1);break}else delete p[E[A]];d=d.filter(A=>E.indexOf(A)===-1),s=[0,...s.slice(l+1)],g=c[l].state,c=c.slice(l),u=u>l?u-l:0}function v(){p={0:P(J)},y=1,s=[0],d=[],g=c[u].state,u=0,c=[]}let f=0;switch(r.type){case ye:{T=r.status,f=1/0;break}case Se:{x=r.status,x?(s=[...s,y],p[y]=new C({type:"@ngrx/devtools/pause"},+Date.now()),y++,f=s.length-1,c=c.concat(c[c.length-1]),u===s.length-2&&u++,f=1/0):v();break}case ae:{p={0:P(J)},y=1,s=[0],d=[],g=e,u=0,c=[];break}case pe:{v();break}case ue:{p={0:P(J)},y=1,s=[0],d=[],u=0,c=[];break}case le:{let{id:h}=r;d.indexOf(h)===-1?d=[h,...d]:d=d.filter(E=>E!==h),f=s.indexOf(h);break}case fe:{let{start:h,end:l,active:E}=r,A=[];for(let V=h;V<l;V++)A.push(V);E?d=se(d,A):d=[...d,...A],f=s.indexOf(h);break}case he:{u=r.index,f=1/0;break}case me:{let h=s.indexOf(r.actionId);h!==-1&&(u=h),f=1/0;break}case de:{s=se(s,d),d=[],u=Math.min(u,s.length-1);break}case F:{if(T)return m||t;if(x||m&&mt(m.computedStates[u],r,o.predicate,o.actionsSafelist,o.actionsBlocklist)){let l=c[c.length-1];c=[...c.slice(0,-1),Oe(a,r.action,l.state,l.error,i)],f=1/0;break}o.maxAge&&s.length===o.maxAge&&O(1),u===s.length-1&&u++;let h=y++;p[h]=r,s=[...s,h],f=s.length-1;break}case ht:{({monitorState:S,actionsById:p,nextActionId:y,stagedActionIds:s,skippedActionIds:d,committedState:g,currentStateIndex:u,computedStates:c,isLocked:T,isPaused:x}=r.nextLiftedState);break}case Y:{f=0,o.maxAge&&s.length>o.maxAge&&(c=U(c,f,a,g,p,s,d,i,x),O(s.length-o.maxAge),f=1/0);break}case Q:{if(c.filter(l=>l.error).length>0)f=0,o.maxAge&&s.length>o.maxAge&&(c=U(c,f,a,g,p,s,d,i,x),O(s.length-o.maxAge),f=1/0);else{if(!x&&!T){u===s.length-1&&u++;let l=y++;p[l]=new C(r,+Date.now()),s=[...s,l],f=s.length-1,c=U(c,f,a,g,p,s,d,i,x)}c=c.map(l=>k(R({},l),{state:a(l.state,ze)})),u=s.length-1,o.maxAge&&s.length>o.maxAge&&O(s.length-o.maxAge),f=1/0}break}default:{f=1/0;break}}return c=U(c,f,a,g,p,s,d,i,x),S=n(S,r),{monitorState:S,actionsById:p,nextActionId:y,stagedActionIds:s,skippedActionIds:d,committedState:g,currentStateIndex:u,computedStates:c,isLocked:T,isPaused:x}}}var ce=(()=>{let t=class{constructor(n,o,a,m,r,S,p,y){let s=$e(p,y.monitor),d=Be(p,s,S,y.monitor,y),g=K(K(o.asObservable().pipe(wt(1)),m.actions$).pipe(b(P)),n,m.liftedActions$).pipe(Et(gt)),u=a.pipe(b(d)),c=new St(1),T=g.pipe(Dt(u),vt(({state:f},[h,l])=>{let E=l(f,h);return h.type!==F&&Ae(y)&&(E=_e(E,y.predicate,y.actionsSafelist,y.actionsBlocklist)),m.notify(h,E),{state:E,action:h}},{state:s,action:null})).subscribe(({state:f,action:h})=>{if(c.next(f),h.type===F){let l=h.action;r.next(l)}}),x=m.start$.subscribe(()=>{this.refresh()}),O=c.asObservable(),v=O.pipe(b(xe));Object.defineProperty(v,"state",{value:Bt(v,{manualCleanup:!0,requireSync:!0})}),this.extensionStartSubscription=x,this.stateSubscription=T,this.dispatcher=n,this.liftedState=O,this.state=v}dispatch(n){this.dispatcher.next(n)}next(n){this.dispatcher.next(n)}error(n){}complete(){}performAction(n){this.dispatch(new C(n,+Date.now()))}refresh(){this.dispatch(new et)}reset(){this.dispatch(new nt(+Date.now()))}rollback(){this.dispatch(new it(+Date.now()))}commit(){this.dispatch(new ot(+Date.now()))}sweep(){this.dispatch(new st)}toggleAction(n){this.dispatch(new rt(n))}jumpToAction(n){this.dispatch(new at(n))}jumpToState(n){this.dispatch(new ct(n))}importState(n){this.dispatch(new ut(n))}lockChanges(n){this.dispatch(new pt(n))}pauseRecording(n){this.dispatch(new dt(n))}},e=t;return(()=>{t.\u0275fac=function(o){return new(o||t)(I(H),I($),I(Jt),I(Te),I(Ht),I(kt),I(Ut),I(G))}})(),(()=>{t.\u0275prov=L({token:t,factory:t.\u0275fac})})(),e})(),Ue=new j("@ngrx/store-devtools Is Devtools Extension or Monitor Present");function Je(e,t){return!!e||t.monitor!==ge}function Ge(){let e="__REDUX_DEVTOOLS_EXTENSION__";return typeof window=="object"&&typeof window[e]<"u"?window[e]:null}function He(e={}){return Rt([Te,H,ce,{provide:oe,useValue:e},{provide:Ue,deps:[lt,G],useFactory:Je},{provide:lt,useFactory:Ge},{provide:G,deps:[oe],useFactory:je},{provide:Vt,deps:[ce],useFactory:Ve},{provide:Gt,useExisting:H}])}function Ve(e){return e.state}var be=(()=>{let t=class{static instrument(n={}){return{ngModule:t,providers:[He(n)]}}},e=t;return(()=>{t.\u0275fac=function(o){return new(o||t)}})(),(()=>{t.\u0275mod=D({type:t})})(),(()=>{t.\u0275inj=w({})})(),e})();var N={production:!0};var We=[{path:"",loadChildren:()=>import("./planner.module-QKQB3ZKC.js").then(e=>e.PlannerModule)}],ve=(()=>{let t=class{},e=t;return(()=>{t.\u0275fac=function(o){return new(o||t)}})(),(()=>{t.\u0275mod=D({type:t})})(),(()=>{t.\u0275inj=w({imports:[tt.forRoot(We),tt]})})(),e})();var Me=(()=>{let t=class{},e=t;return(()=>{t.\u0275fac=function(o){return new(o||t)}})(),(()=>{t.\u0275cmp=Ct({type:t,selectors:[["app-root"]],decls:6,vars:0,consts:[[1,"container"],[1,"text-center","mt-5","mb-3"],["href","https://github.com/sod/sod-satisfactory","target","_blank"]],template:function(o,a){o&1&&(z(0,"div",0),jt(1,"router-outlet"),q(),z(2,"div",1),Z(3," Source of this page on "),z(4,"a",2),Z(5," https://github.com/sod/sod-satisfactory "),q()())},dependencies:[Yt],encapsulation:2})})(),e})();var we={},De=N.production?[]:[];Pt(ee);var Ce=(()=>{let t=class{},e=t;return(()=>{t.\u0275fac=function(o){return new(o||t)}})(),(()=>{t.\u0275mod=D({type:t,bootstrap:[Me]})})(),(()=>{t.\u0275inj=w({providers:[{provide:qt,useValue:Xt}],imports:[Lt,ve,zt,Ft,$t,Wt.forRoot(we,{metaReducers:De}),Kt.forRoot(),te,Zt.forRoot(Qt),N.production?[]:be.instrument()]})})(),e})();N.production&&void 0;_t().bootstrapModule(Ce).catch(e=>console.error(e));
