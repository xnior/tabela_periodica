import{aa as Me}from"./chunk-3JVMYXAP.js";import"./chunk-KZ2GJGIH.js";import{h as Ae}from"./chunk-JIXCEJMG.js";import{b as Ce}from"./chunk-ZJKGZJHG.js";import"./chunk-5H6KVSAJ.js";import{$a as _e,A as X,Ab as ve,B as ee,Bb as P,Cb as ye,Db as T,Eb as S,Fb as W,Gb as d,J as te,Ja as y,K as ie,Mb as F,Nb as De,Oa as R,R as ne,Ra as I,S as se,Sa as N,Ta as f,U as m,Ua as he,Wa as ue,Z as $,Za as p,_ as oe,_a as pe,ab as D,ba as ae,bb as w,bc as we,da as l,db as b,f as M,fa as j,ga as O,gb as fe,ha as re,i as A,ia as u,ib as ge,ja as le,jb as me,jc as Te,k as q,kb as be,kc as Se,lb as h,m as Y,mb as c,nb as U,oa as ce,pa as E,sb as k,ub as z,vb as x,x as Z,xa as de,y as K}from"./chunk-EO2AJH4H.js";var Oe=[{path:"",title:"Tabela Periodica",loadComponent:()=>import("./chunk-WBMHEGVT.js").then(e=>e.TableComponent)},{path:"elementos",title:"Pesquisar Dados de Elementos",loadComponent:()=>import("./chunk-CDCJYKRP.js").then(e=>e.ListelementsComponent)},{path:"balanceamento",title:"Balanceamento de Equa\xE7\xF5es Qu\xEDmicas",loadComponent:()=>import("./chunk-TZVJ2XOO.js").then(e=>e.ChemBalanceComponent)}];var Ee={providers:[Me(Oe),Ae()]};function B(e){e||(de(B),e=l(N));let t=new M(r=>e.onDestroy(r.next.bind(r)));return r=>r.pipe(m(t))}var ze=e=>({$implicit:e});var We=["ngbNavOutlet",""];function Qe(e,t){}function Je(e,t){if(e&1&&(h(0,"div",0),p(1,Qe,0,0,"ng-template",1),c()),e&2){let r=x().$implicit,i=x();w("item",r)("nav",i.nav)("role",i.paneRole),R(),w("ngTemplateOutlet",(r.contentTpl==null?null:r.contentTpl.templateRef)||null)("ngTemplateOutletContext",De(5,ze,r.active||i.isPanelTransitioning(r)))}}function qe(e,t){if(e&1&&p(0,Je,2,7,"div",0),e&2){let r=t.$implicit,i=x();fe(0,r.isPanelInDom()||i.isPanelTransitioning(r)?0:-1)}}var Ne={animation:!0,transitionTimerDelayMs:5},Ye=(()=>{let t=class t{constructor(){this.animation=Ne.animation}};t.\u0275fac=function(s){return new(s||t)},t.\u0275prov=$({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();function Ze(e){let{transitionDelay:t,transitionDuration:r}=window.getComputedStyle(e),i=parseFloat(t),s=parseFloat(r);return(i+s)*1e3}function L(e){return e!=null}function Ke(e){return(e||document.body).getBoundingClientRect()}function Xe(e){return t=>new M(r=>{let i=a=>e.run(()=>r.next(a)),s=a=>e.run(()=>r.error(a)),n=()=>e.run(()=>r.complete());return t.subscribe({next:i,error:s,complete:n})})}var et=()=>{},{transitionTimerDelayMs:tt}=Ne,G=new Map,Re=(e,t,r,i)=>{let s=i.context||{},n=G.get(t);if(n)switch(i.runningTransition){case"continue":return q;case"stop":e.run(()=>n.transition$.complete()),s=Object.assign(n.context,s),G.delete(t)}let a=r(t,i.animation,s)||et;if(!i.animation||window.getComputedStyle(t).transitionProperty==="none")return e.run(()=>a()),Y(void 0).pipe(Xe(e));let o=new A,_=new A,v=o.pipe(ie(!0));G.set(t,{transition$:o,complete:()=>{_.next(),_.complete()},context:s});let Le=Ze(t);return e.runOutsideAngular(()=>{let He=Z(t,"transitionend").pipe(m(v),X(({target:$e})=>$e===t)),Ve=K(Le+tt).pipe(m(v));ee(Ve,He,_).pipe(m(v)).subscribe(()=>{G.delete(t),e.run(()=>{a(),o.next(),o.complete()})})}),o.asObservable()};var g=function(e){return e[e.Tab=9]="Tab",e[e.Enter=13]="Enter",e[e.Escape=27]="Escape",e[e.Space=32]="Space",e[e.PageUp=33]="PageUp",e[e.PageDown=34]="PageDown",e[e.End=35]="End",e[e.Home=36]="Home",e[e.ArrowLeft=37]="ArrowLeft",e[e.ArrowUp=38]="ArrowUp",e[e.ArrowRight=39]="ArrowRight",e[e.ArrowDown=40]="ArrowDown",e}(g||{});var Yi=(()=>{let e=()=>/iPad|iPhone|iPod/.test(navigator.userAgent)||/Macintosh/.test(navigator.userAgent)&&navigator.maxTouchPoints&&navigator.maxTouchPoints>2,t=()=>/Android/.test(navigator.userAgent);return typeof navigator<"u"?!!navigator.userAgent&&(e()||t()):!1})();var Zi=["a[href]","button:not([disabled])",'input:not([disabled]):not([type="hidden"])',"select:not([disabled])","textarea:not([disabled])","[contenteditable]",'[tabindex]:not([tabindex="-1"])'].join(", ");var Ki=new Date(1882,10,12),Xi=new Date(2174,10,25);var en=1e3*60*60*24;var Q=1080,it=24*Q,nt=12*Q+793,tn=29*it+nt,nn=11*Q+204;var st=(()=>{let t=class t{constructor(){this._ngbConfig=l(Ye),this.destroyOnHide=!0,this.orientation="horizontal",this.roles="tablist",this.keyboard=!0}get animation(){return this._animation??this._ngbConfig.animation}set animation(i){this._animation=i}};t.\u0275fac=function(s){return new(s||t)},t.\u0275prov=$({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})(),ke=e=>L(e)&&e!=="",ot=0,J=(()=>{let t=class t{constructor(){this.templateRef=l(ve)}};t.\u0275fac=function(s){return new(s||t)},t.\u0275dir=u({type:t,selectors:[["ng-template","ngbNavContent",""]],standalone:!0});let e=t;return e})(),xe=(()=>{let t=class t{constructor(i){this.role=i,this.nav=l(C)}};t.\u0275fac=function(s){return new(s||t)(E("role"))},t.\u0275dir=u({type:t,selectors:[["","ngbNavItem","",5,"ng-container"]],hostVars:1,hostBindings:function(s,n){s&2&&D("role",n.role?n.role:n.nav.roles?"presentation":void 0)},standalone:!0});let e=t;return e})(),H=(()=>{let t=class t{constructor(){this._nav=l(C),this._nativeElement=l(y).nativeElement,this.disabled=!1,this.shown=new f,this.hidden=new f}ngAfterContentChecked(){this.contentTpl=this.contentTpls.first}ngOnInit(){L(this.domId)||(this.domId=`ngb-nav-${ot++}`)}get active(){return this._nav.activeId===this.id}get id(){return ke(this._id)?this._id:this.domId}get panelDomId(){return`${this.domId}-panel`}isPanelInDom(){return(L(this.destroyOnHide)?!this.destroyOnHide:!this._nav.destroyOnHide)||this.active}isNgContainer(){return this._nativeElement.nodeType===Node.COMMENT_NODE}};t.\u0275fac=function(s){return new(s||t)},t.\u0275dir=u({type:t,selectors:[["","ngbNavItem",""]],contentQueries:function(s,n,a){if(s&1&&P(a,J,4),s&2){let o;T(o=S())&&(n.contentTpls=o)}},hostVars:2,hostBindings:function(s,n){s&2&&b("nav-item",!0)},inputs:{destroyOnHide:"destroyOnHide",disabled:"disabled",domId:"domId",_id:[j.None,"ngbNavItem","_id"]},outputs:{shown:"shown",hidden:"hidden"},exportAs:["ngbNavItem"],standalone:!0});let e=t;return e})(),C=(()=>{let t=class t{constructor(i){this.role=i,this._config=l(st),this._cd=l(I),this._document=l(we),this._nativeElement=l(y).nativeElement,this.destroyRef=l(N),this._navigatingWithKeyboard=!1,this.activeIdChange=new f,this.animation=this._config.animation,this.destroyOnHide=this._config.destroyOnHide,this.orientation=this._config.orientation,this.roles=this._config.roles,this.keyboard=this._config.keyboard,this.shown=new f,this.hidden=new f,this.navItemChange$=new A,this.navChange=new f}click(i){i.disabled||this._updateActiveId(i.id)}onFocusout({relatedTarget:i}){this._nativeElement.contains(i)||(this._navigatingWithKeyboard=!1)}onKeyDown(i){if(this.roles!=="tablist"||!this.keyboard)return;let s=i.which,n=this.links.filter(_=>!_.navItem.disabled),{length:a}=n,o=-1;if(n.forEach((_,v)=>{_.nativeElement===this._document.activeElement&&(o=v)}),a){switch(s){case g.ArrowUp:case g.ArrowLeft:o=(o-1+a)%a;break;case g.ArrowRight:case g.ArrowDown:o=(o+1)%a;break;case g.Home:o=0;break;case g.End:o=a-1;break}this.keyboard==="changeWithArrows"&&this.select(n[o].navItem.id),n[o].nativeElement.focus(),this._navigatingWithKeyboard=!0,i.preventDefault()}}select(i){this._updateActiveId(i,!1)}ngAfterContentInit(){if(!L(this.activeId)){let i=this.items.first?this.items.first.id:null;ke(i)&&(this._updateActiveId(i,!1),this._cd.detectChanges())}this.items.changes.pipe(B(this.destroyRef)).subscribe(()=>this._notifyItemChanged(this.activeId))}ngOnChanges({activeId:i}){i&&!i.firstChange&&this._notifyItemChanged(i.currentValue)}_updateActiveId(i,s=!0){if(this.activeId!==i){let n=!1;s&&this.navChange.emit({activeId:this.activeId,nextId:i,preventDefault:()=>{n=!0}}),n||(this.activeId=i,this.activeIdChange.emit(i),this._notifyItemChanged(i))}}_notifyItemChanged(i){this.navItemChange$.next(this._getItemById(i))}_getItemById(i){return this.items&&this.items.find(s=>s.id===i)||null}};t.\u0275fac=function(s){return new(s||t)(E("role"))},t.\u0275dir=u({type:t,selectors:[["","ngbNav",""]],contentQueries:function(s,n,a){if(s&1&&(P(a,H,4),P(a,V,5)),s&2){let o;T(o=S())&&(n.items=o),T(o=S())&&(n.links=o)}},hostVars:6,hostBindings:function(s,n){s&1&&z("keydown.arrowLeft",function(o){return n.onKeyDown(o)})("keydown.arrowRight",function(o){return n.onKeyDown(o)})("keydown.arrowDown",function(o){return n.onKeyDown(o)})("keydown.arrowUp",function(o){return n.onKeyDown(o)})("keydown.Home",function(o){return n.onKeyDown(o)})("keydown.End",function(o){return n.onKeyDown(o)})("focusout",function(o){return n.onFocusout(o)}),s&2&&(D("aria-orientation",n.orientation==="vertical"&&n.roles==="tablist"?"vertical":void 0)("role",n.role?n.role:n.roles?"tablist":void 0),b("nav",!0)("flex-column",n.orientation==="vertical"))},inputs:{activeId:"activeId",animation:"animation",destroyOnHide:"destroyOnHide",orientation:"orientation",roles:"roles",keyboard:"keyboard"},outputs:{activeIdChange:"activeIdChange",shown:"shown",hidden:"hidden",navChange:"navChange"},exportAs:["ngbNav"],standalone:!0,features:[le]});let e=t;return e})(),V=(()=>{let t=class t{constructor(i){this.role=i,this.navItem=l(H),this.nav=l(C),this.nativeElement=l(y).nativeElement}get tabindex(){return this.nav.keyboard===!1?this.navItem.disabled?-1:void 0:this.nav._navigatingWithKeyboard||this.navItem.disabled||!this.navItem.active?-1:void 0}};t.\u0275fac=function(s){return new(s||t)(E("role"))},t.\u0275dir=u({type:t,selectors:[["","ngbNavLink",""]],hostVars:14,hostBindings:function(s,n){s&2&&(k("id",n.navItem.domId),D("role",n.role?n.role:n.nav.roles?"tab":void 0)("tabindex",n.tabindex)("aria-controls",n.navItem.isPanelInDom()?n.navItem.panelDomId:null)("aria-selected",n.navItem.active)("aria-disabled",n.navItem.disabled),b("nav-link",!0)("nav-item",n.navItem.isNgContainer())("active",n.navItem.active)("disabled",n.navItem.disabled))},standalone:!0});let e=t;return e})(),Pe=(()=>{let t=class t extends V{};t.\u0275fac=(()=>{let i;return function(n){return(i||(i=ce(t)))(n||t)}})(),t.\u0275dir=u({type:t,selectors:[["button","ngbNavLink",""]],hostAttrs:["type","button"],hostVars:1,hostBindings:function(s,n){s&1&&z("click",function(){return n.nav.click(n.navItem)}),s&2&&k("disabled",n.navItem.disabled)},standalone:!0,features:[ue]});let e=t;return e})();var at=({classList:e})=>(e.remove("show"),()=>e.remove("active")),rt=(e,t)=>{t&&Ke(e),e.classList.add("show")},Ie=(()=>{let t=class t{constructor(){this.nativeElement=l(y).nativeElement}};t.\u0275fac=function(s){return new(s||t)},t.\u0275dir=u({type:t,selectors:[["","ngbNavPane",""]],hostAttrs:[1,"tab-pane"],hostVars:5,hostBindings:function(s,n){s&2&&(k("id",n.item.panelDomId),D("role",n.role?n.role:n.nav.roles?"tabpanel":void 0)("aria-labelledby",n.item.domId),b("fade",n.nav.animation))},inputs:{item:"item",nav:"nav",role:"role"},standalone:!0});let e=t;return e})(),Fe=(()=>{let t=class t{constructor(){this._cd=l(I),this._ngZone=l(he),this._activePane=null}isPanelTransitioning(i){return this._activePane?.item===i}ngAfterViewInit(){this._updateActivePane(),this.nav.navItemChange$.pipe(B(this.nav.destroyRef),se(this._activePane?.item||null),te(),ne(1)).subscribe(i=>{let s={animation:this.nav.animation,runningTransition:"stop"};this._cd.detectChanges(),this._activePane?Re(this._ngZone,this._activePane.nativeElement,at,s).subscribe(()=>{let n=this._activePane?.item;this._activePane=this._getPaneForItem(i),this._cd.markForCheck(),this._activePane&&(this._activePane.nativeElement.classList.add("active"),Re(this._ngZone,this._activePane.nativeElement,rt,s).subscribe(()=>{i&&(i.shown.emit(),this.nav.shown.emit(i.id))})),n&&(n.hidden.emit(),this.nav.hidden.emit(n.id))}):this._updateActivePane()})}_updateActivePane(){this._activePane=this._getActivePane(),this._activePane?.nativeElement.classList.add("show"),this._activePane?.nativeElement.classList.add("active")}_getPaneForItem(i){return this._panes&&this._panes.find(s=>s.item===i)||null}_getActivePane(){return this._panes&&this._panes.find(i=>i.item.active)||null}};t.\u0275fac=function(s){return new(s||t)},t.\u0275cmp=O({type:t,selectors:[["","ngbNavOutlet",""]],viewQuery:function(s,n){if(s&1&&ye(Ie,5),s&2){let a;T(a=S())&&(n._panes=a)}},hostVars:2,hostBindings:function(s,n){s&2&&b("tab-content",!0)},inputs:{paneRole:"paneRole",nav:[j.None,"ngbNavOutlet","nav"]},standalone:!0,features:[F],attrs:We,decls:2,vars:0,consts:[["ngbNavPane","",3,"item","nav","role"],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(s,n){s&1&&me(0,qe,1,1,null,null,ge),s&2&&be(n.nav.items)},dependencies:[Ie,Te],encapsulation:2,changeDetection:0});let e=t;return e})();var Be=(()=>{let t=class t{};t.\u0275fac=function(s){return new(s||t)},t.\u0275mod=re({type:t}),t.\u0275inj=oe({});let e=t;return e})();var sn=new ae("live announcer delay",{providedIn:"root",factory:()=>100});var ct=()=>[import("./chunk-QSHYGPFA.js").then(e=>e.RouterOutlet),import("./chunk-QSHYGPFA.js").then(e=>e.RouterLink),J,C,H,xe,Pe,V,Fe];function dt(e,t){e&1&&d(0,"Tabela Peri\xF3dica")}function ht(e,t){e&1&&d(0,"Pesquisar Elementos")}function ut(e,t){e&1&&d(0,"Calculadora de Balanceador Qu\xEDmico")}function pt(e,t){if(e&1&&(h(0,"ul",1,2)(2,"li",3)(3,"button",4),d(4,"Tabela"),c(),p(5,dt,1,0,"ng-template",5),c(),h(6,"li",3)(7,"button",6),d(8,"Pesquisar"),c(),p(9,ht,1,0,"ng-template",5),c(),h(10,"li",3)(11,"button",7),d(12,"Balanceador"),c(),p(13,ut,1,0,"ng-template",5),c()(),U(14,"div",8)(15,"p")(16,"p")(17,"p")(18,"router-outlet")),e&2){let r=W(1);R(14),w("ngbNavOutlet",r)}}function _t(e,t){e&1&&(h(0,"h2"),d(1,"Carregando o aplicativo..."),c())}function ft(e,t){e&1&&(h(0,"h2"),d(1,"Ocorreu um erro ao carregar o aplicativo."),c())}var Ge=(()=>{let t=class t{constructor(){this.title="TABELA_PERIODICA"}};t.\u0275fac=function(s){return new(s||t)},t.\u0275cmp=O({type:t,selectors:[["app-root"]],standalone:!0,features:[F],decls:6,vars:0,consts:[[1,"container-router"],["ngbNav","",1,"nav-pills","topmenu"],["nav","ngbNav"],["ngbNavItem",""],["ngbNavLink","","routerLink",""],["ngbNavContent",""],["ngbNavLink","","routerLink","/elementos"],["ngbNavLink","","routerLink","/balanceamento"],[1,"titulo",3,"ngbNavOutlet"]],template:function(s,n){s&1&&(h(0,"section",0),p(1,pt,19,1)(2,_t,2,0)(3,ft,2,0),pe(4,1,ct,null,2,3),_e(0,-1),c())},dependencies:[Se,Be],styles:["[_nghost-%COMP%]   .container-router[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex-direction:column;margin:25px 0 0}[_nghost-%COMP%]   .topmenu[_ngcontent-%COMP%]{justify-content:space-between;width:250px}[_nghost-%COMP%]   .titulo[_ngcontent-%COMP%]{text-align:center;margin:30px;letter-spacing:3px;font-size:1.5rem;color:var(--white);font-family:Roboto,helvetica neue,sans-serif}[_nghost-%COMP%]   button[_ngcontent-%COMP%]{border:none;height:35px;cursor:pointer;background:var(--grey);border-radius:7px;display:flex;align-items:center;color:var(--white);font-family:Roboto,helvetica neue,sans-serif;font-size:1rem}[_nghost-%COMP%]   button[_ngcontent-%COMP%]:hover{background:var(--secondary);transition:.5s}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex-wrap:wrap;list-style:none;gap:10px;margin:0;padding:0}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{flex:20%;height:50px;width:100px}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;height:100%;border:none;justify-content:center;cursor:pointer;background:var(--black-010);border-radius:7px}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background:var(--primary);transition:.5s}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;border-radius:7px;filter:grayscale(100%)}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{filter:grayscale(0%);transition:.5s}@media screen and (max-width: 768px){[_nghost-%COMP%]   .topmenu[_ngcontent-%COMP%]{width:250px;justify-content:center}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{flex:10%}}"]});let e=t;return e})();Ce(Ge,Ee).catch(e=>console.error(e));
