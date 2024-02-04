import{a as z}from"./chunk-G4OZODC3.js";import{f as Z}from"./chunk-G3ET6EPM.js";import{$ as N,W as I,Z as D,aa as F,da as K}from"./chunk-T23V5DOL.js";import{Cb as o,Ib as x,Ka as v,Za as y,ha as A,hb as i,ib as l,jb as C,qb as r}from"./chunk-4Z65B2I4.js";var q=(()=>{let n=class n{constructor(){this.formulaElem=new N,this.hideDelay=new N(5e3),this.RANDOM_DEMOS=["H2 + O2 = H2O","Fe + O2 = Fe2O3","NH3 + O2 = N2 + H2O","C2H2 + O2 = CO2 + H2O","C3H8O + O2 = CO2 + H2O","Na + O2 = Na2O","P4 + O2 = P2O5","Na2O + H2O = NaOH","Mg + HCl = MgCl2 + H2","AgNO3 + LiOH = AgOH + LiNO3","Pb + PbO2 + H^+ + SO4^2- = PbSO4 + H2O","HNO3 + Cu = Cu(NO3)2 + H2O + NO","KNO2 + KNO3 + Cr2O3 = K2CrO4 + NO","AgNO3 + BaCl2 = Ba(NO3)2 + AgCl","Cu(NO3)2 = CuO + NO2 + O2","Al + CuSO4 = Al2(SO4)3 + Cu","Na3PO4 + Zn(NO3)2 = NaNO3 + Zn3(PO4)2","Cl2 + Ca(OH)2 = Ca(ClO)2 + CaCl2 + H2O","CHCl3 + O2 = CO2 + H2O + Cl2","H2C2O4 + MnO4^- = H2O + CO2 + MnO + OH^-","H2O2 + Cr2O7^2- = Cr^3+ + O2 + OH^-","KBr + KMnO4 + H2SO4 = Br2 + MnSO4 + K2SO4 + H2O","K2Cr2O7 + KI + H2SO4 = Cr2(SO4)3 + I2 + H2O + K2SO4","KClO3 + KBr + HCl = KCl + Br2 + H2O","Ag + HNO3 = AgNO3 + NO + H2O","P4 + OH^- + H2O = H2PO2^- + P2H4","Zn + NO3^- + H^+ = Zn^2+ + NH4^+ + H2O","ICl + H2O = Cl^- + IO3^- + I2 + H^+","AB2 + AC3 + AD5 + AE7 + AF11 + AG13 + AH17 + AI19 + AJ23 = A + ABCDEFGHIJ"],this.lastRandomIndex=-1}clear(){this.formulaElem.setValue(""),this.locationScroll()}locationScroll(){document.scrollingElement?.scrollTo(0,100)}focusInput(){this.locationScroll()}getName(m){this.locationScroll();let c=this.formulaElem.value||"";this.formulaElem.setValue(c+m),console.log(this.formulaElem.value)}doBalance(){let m=document.getElementById("message"),c=document.getElementById("balanced"),e=document.getElementById("codeOutput");for(m.textContent="";c.firstChild!==null;)c.removeChild(c.firstChild);for(;e.firstChild!==null;)e.removeChild(e.firstChild);e.textContent=" ";let t=this.formulaElem.value,_;try{_=new O(t).parseEquation()}catch(u){if(u instanceof d){m.textContent="Erro ao calcular: "+u.message;let p=u.start,h=u.end!==void 0?u.end:u.start;for(;h>p&&[" ","	"].includes(t.charAt(h-1));)h--;p==h&&h++,e.textContent=t.substring(0,p),h<=t.length?(e.append(f("u",t.substring(p,h))),e.append(t.substring(h,t.length))):e.append(f("u"," "))}else u instanceof Error?m.textContent="Erro de: "+u.message:m.textContent="Erro de Afirma\xE7\xE3o";return document.getElementById("message")?.scrollIntoView()}try{let u=L(_);G(u);let p=j(u);V(_,p),c.append(_.toHtml(p))}catch(u){m.textContent=u.message}document.getElementById("message")?.scrollIntoView()}doDemo(m){this.formulaElem.setValue(m),this.doBalance()}Random(){let m;do m=Math.floor(Math.random()*this.RANDOM_DEMOS.length),m=Math.max(Math.min(m,this.RANDOM_DEMOS.length-1),0);while(this.RANDOM_DEMOS.length>=2&&m==this.lastRandomIndex);this.lastRandomIndex=m,this.doDemo(this.RANDOM_DEMOS[m])}};n.\u0275fac=function(c){return new(c||n)},n.\u0275cmp=A({type:n,selectors:[["app-chem-balance"]],standalone:!0,features:[x],decls:542,vars:1,consts:[[1,"tabela"],[3,"click"],["colspan","16",1,"colspan"],[1,"numbers"],[1,"btnNumber",3,"click"],["colspan","10","rowspan","2",1,"colspan"],[1,"btnAritmetic",3,"click"],[1,"hidden"],["colspan","18",1,"colspan"],["colspan","3",1,"colspan"],[1,"form-group"],[1,"form-input"],[1,"label"],["for","formula"],[1,"btn","randon",3,"click"],[1,"inputButton"],["type","text","id","formula","placeholder","Ex: H2 + O2 = H2O",1,"form-control",3,"formControl","focus"],["formulas",""],["type","button",1,"btn","clear",3,"click"],["type","button",1,"btn","btn-primary",3,"click"],[1,"messages"],["id","message"],["id","balanced"],["id","codeOutput"]],template:function(c,e){c&1&&(i(0,"div")(1,"section",0)(2,"div")(3,"table")(4,"tr")(5,"td")(6,"ul")(7,"li",1),r("click",function(){return e.getName("H")}),o(8,"H"),l()()(),i(9,"td",2)(10,"ul",3)(11,"li",4),r("click",function(){return e.getName("1")}),o(12,"1"),l(),i(13,"li",4),r("click",function(){return e.getName("2")}),o(14,"2"),l(),i(15,"li",4),r("click",function(){return e.getName("3")}),o(16,"3"),l(),i(17,"li",4),r("click",function(){return e.getName("4")}),o(18,"4"),l(),i(19,"li",4),r("click",function(){return e.getName("5")}),o(20,"5"),l(),i(21,"li",4),r("click",function(){return e.getName("6")}),o(22,"6"),l(),i(23,"li",4),r("click",function(){return e.getName("7")}),o(24,"7"),l(),i(25,"li",4),r("click",function(){return e.getName("8")}),o(26,"8"),l(),i(27,"li",4),r("click",function(){return e.getName("9")}),o(28,"9"),l(),i(29,"li",4),r("click",function(){return e.getName("0")}),o(30,"0"),l()()(),i(31,"td")(32,"ul")(33,"li",1),r("click",function(){return e.getName("He")}),o(34,"He"),l()()()(),i(35,"tr")(36,"td")(37,"ul")(38,"li",1),r("click",function(){return e.getName("Li")}),o(39,"Li"),l()()(),i(40,"td")(41,"ul")(42,"li",1),r("click",function(){return e.getName("Be")}),o(43,"Be"),l()()(),i(44,"td",5)(45,"ul",3)(46,"li",6),r("click",function(){return e.getName(" + ")}),o(47,"+"),l(),i(48,"li",6),r("click",function(){return e.getName(" = ")}),o(49,"="),l()()(),i(50,"td")(51,"ul")(52,"li",1),r("click",function(){return e.getName("B")}),o(53,"B"),l()()(),i(54,"td")(55,"ul")(56,"li",1),r("click",function(){return e.getName("C")}),o(57,"C"),l()()(),i(58,"td")(59,"ul")(60,"li",1),r("click",function(){return e.getName("N")}),o(61,"N"),l()()(),i(62,"td")(63,"ul")(64,"li",1),r("click",function(){return e.getName("O")}),o(65,"O"),l()()(),i(66,"td")(67,"ul")(68,"li",1),r("click",function(){return e.getName("F")}),o(69,"F"),l()()(),i(70,"td")(71,"ul")(72,"li",1),r("click",function(){return e.getName("Ne")}),o(73,"Ne"),l()()()(),i(74,"tr")(75,"td")(76,"ul")(77,"li",1),r("click",function(){return e.getName("Na")}),o(78,"Na"),l()()(),i(79,"td")(80,"ul")(81,"li",1),r("click",function(){return e.getName("Mg")}),o(82,"Mg"),l()()(),i(83,"td")(84,"ul")(85,"li",1),r("click",function(){return e.getName("Al")}),o(86,"Al"),l()()(),i(87,"td")(88,"ul")(89,"li",1),r("click",function(){return e.getName("Si")}),o(90,"Si"),l()()(),i(91,"td")(92,"ul")(93,"li",1),r("click",function(){return e.getName("P")}),o(94,"P"),l()()(),i(95,"td")(96,"ul")(97,"li",1),r("click",function(){return e.getName("S")}),o(98,"S"),l()()(),i(99,"td")(100,"ul")(101,"li",1),r("click",function(){return e.getName("Cl")}),o(102,"Cl"),l()()(),i(103,"td")(104,"ul")(105,"li",1),r("click",function(){return e.getName("Ar")}),o(106,"Ar"),l()()()(),i(107,"tr")(108,"td")(109,"ul")(110,"li",1),r("click",function(){return e.getName("K")}),o(111,"K"),l()()(),i(112,"td")(113,"ul")(114,"li",1),r("click",function(){return e.getName("Ca")}),o(115,"Ca"),l()()(),i(116,"td")(117,"ul")(118,"li",1),r("click",function(){return e.getName("Sc")}),o(119,"Sc"),l()()(),i(120,"td")(121,"ul")(122,"li",1),r("click",function(){return e.getName("Ti")}),o(123,"Ti"),l()()(),i(124,"td")(125,"ul")(126,"li",1),r("click",function(){return e.getName("V")}),o(127,"V"),l()()(),i(128,"td")(129,"ul")(130,"li",1),r("click",function(){return e.getName("Cr")}),o(131,"Cr"),l()()(),i(132,"td")(133,"ul")(134,"li",1),r("click",function(){return e.getName("Mn")}),o(135,"Mn"),l()()(),i(136,"td")(137,"ul")(138,"li",1),r("click",function(){return e.getName("Fe")}),o(139,"Fe"),l()()(),i(140,"td")(141,"ul")(142,"li",1),r("click",function(){return e.getName("Co")}),o(143,"Co"),l()()(),i(144,"td")(145,"ul")(146,"li",1),r("click",function(){return e.getName("Ni")}),o(147,"Ni"),l()()(),i(148,"td")(149,"ul")(150,"li",1),r("click",function(){return e.getName("Cu")}),o(151,"Cu"),l()()(),i(152,"td")(153,"ul")(154,"li",1),r("click",function(){return e.getName("Zn")}),o(155,"Zn"),l()()(),i(156,"td")(157,"ul")(158,"li",1),r("click",function(){return e.getName("Ga")}),o(159,"Ga"),l()()(),i(160,"td")(161,"ul")(162,"li",1),r("click",function(){return e.getName("Ge")}),o(163,"Ge"),l()()(),i(164,"td")(165,"ul")(166,"li",1),r("click",function(){return e.getName("As")}),o(167,"As"),l()()(),i(168,"td")(169,"ul")(170,"li",1),r("click",function(){return e.getName("Se")}),o(171,"Se"),l()()(),i(172,"td")(173,"ul")(174,"li",1),r("click",function(){return e.getName("Br")}),o(175,"Br"),l()()(),i(176,"td")(177,"ul")(178,"li",1),r("click",function(){return e.getName("Kr")}),o(179,"Kr"),l()()()(),i(180,"tr")(181,"td")(182,"ul")(183,"li",1),r("click",function(){return e.getName("Rb")}),o(184,"Rb"),l()()(),i(185,"td")(186,"ul")(187,"li",1),r("click",function(){return e.getName("Sr")}),o(188,"Sr"),l()()(),i(189,"td")(190,"ul")(191,"li",1),r("click",function(){return e.getName("Y")}),o(192,"Y"),l()()(),i(193,"td")(194,"ul")(195,"li",1),r("click",function(){return e.getName("Zr")}),o(196,"Zr"),l()()(),i(197,"td")(198,"ul")(199,"li",1),r("click",function(){return e.getName("Nb")}),o(200,"Nb"),l()()(),i(201,"td")(202,"ul")(203,"li",1),r("click",function(){return e.getName("Mo")}),o(204,"Mo"),l()()(),i(205,"td")(206,"ul")(207,"li",1),r("click",function(){return e.getName("Tc")}),o(208,"Tc"),l()()(),i(209,"td")(210,"ul")(211,"li",1),r("click",function(){return e.getName("Ru")}),o(212,"Ru"),l()()(),i(213,"td")(214,"ul")(215,"li",1),r("click",function(){return e.getName("Rh")}),o(216,"Rh"),l()()(),i(217,"td")(218,"ul")(219,"li",1),r("click",function(){return e.getName("Pd")}),o(220,"Pd"),l()()(),i(221,"td")(222,"ul")(223,"li",1),r("click",function(){return e.getName("Ag")}),o(224,"Ag"),l()()(),i(225,"td")(226,"ul")(227,"li",1),r("click",function(){return e.getName("Cd")}),o(228,"Cd"),l()()(),i(229,"td")(230,"ul")(231,"li",1),r("click",function(){return e.getName("In")}),o(232,"In"),l()()(),i(233,"td")(234,"ul")(235,"li",1),r("click",function(){return e.getName("Sn")}),o(236,"Sn"),l()()(),i(237,"td")(238,"ul")(239,"li",1),r("click",function(){return e.getName("Sb")}),o(240,"Sb"),l()()(),i(241,"td")(242,"ul")(243,"li",1),r("click",function(){return e.getName("Te")}),o(244,"Te"),l()()(),i(245,"td")(246,"ul")(247,"li",1),r("click",function(){return e.getName("I")}),o(248,"I"),l()()(),i(249,"td")(250,"ul")(251,"li",1),r("click",function(){return e.getName("Xe")}),o(252,"Xe"),l()()()(),i(253,"tr")(254,"td")(255,"ul")(256,"li",1),r("click",function(){return e.getName("Cs")}),o(257,"Cs"),l()()(),i(258,"td")(259,"ul")(260,"li",1),r("click",function(){return e.getName("Ba")}),o(261,"Ba"),l()()(),i(262,"td")(263,"ul"),C(264,"li",7),l()(),i(265,"td")(266,"ul")(267,"li",1),r("click",function(){return e.getName("Hf")}),o(268,"Hf"),l()()(),i(269,"td")(270,"ul")(271,"li",1),r("click",function(){return e.getName("Ta")}),o(272,"Ta"),l()()(),i(273,"td")(274,"ul")(275,"li",1),r("click",function(){return e.getName("W")}),o(276,"W"),l()()(),i(277,"td")(278,"ul")(279,"li",1),r("click",function(){return e.getName("Re")}),o(280,"Re"),l()()(),i(281,"td")(282,"ul")(283,"li",1),r("click",function(){return e.getName("Os")}),o(284,"Os"),l()()(),i(285,"td")(286,"ul")(287,"li",1),r("click",function(){return e.getName("Ir")}),o(288,"Ir"),l()()(),i(289,"td")(290,"ul")(291,"li",1),r("click",function(){return e.getName("Pt")}),o(292,"Pt"),l()()(),i(293,"td")(294,"ul")(295,"li",1),r("click",function(){return e.getName("Au")}),o(296,"Au"),l()()(),i(297,"td")(298,"ul")(299,"li",1),r("click",function(){return e.getName("Hg")}),o(300,"Hg"),l()()(),i(301,"td")(302,"ul")(303,"li",1),r("click",function(){return e.getName("Tl")}),o(304,"Tl"),l()()(),i(305,"td")(306,"ul")(307,"li",1),r("click",function(){return e.getName("Pb")}),o(308,"Pb"),l()()(),i(309,"td")(310,"ul")(311,"li",1),r("click",function(){return e.getName("Bi")}),o(312,"Bi"),l()()(),i(313,"td")(314,"ul")(315,"li",1),r("click",function(){return e.getName("Po")}),o(316,"Po"),l()()(),i(317,"td")(318,"ul")(319,"li",1),r("click",function(){return e.getName("At")}),o(320,"At"),l()()(),i(321,"td")(322,"ul")(323,"li",1),r("click",function(){return e.getName("Rn")}),o(324,"Rn"),l()()()(),i(325,"tr")(326,"td")(327,"ul")(328,"li",1),r("click",function(){return e.getName("Fr")}),o(329,"Fr"),l()()(),i(330,"td")(331,"ul")(332,"li",1),r("click",function(){return e.getName("Ra")}),o(333,"Ra"),l()()(),i(334,"td")(335,"ul"),C(336,"li",7),l()(),i(337,"td")(338,"ul")(339,"li",1),r("click",function(){return e.getName("Rf")}),o(340,"Rf"),l()()(),i(341,"td")(342,"ul")(343,"li",1),r("click",function(){return e.getName("Db")}),o(344,"Db"),l()()(),i(345,"td")(346,"ul")(347,"li",1),r("click",function(){return e.getName("Sg")}),o(348,"Sg"),l()()(),i(349,"td")(350,"ul")(351,"li",1),r("click",function(){return e.getName("Bh")}),o(352,"Bh"),l()()(),i(353,"td")(354,"ul")(355,"li",1),r("click",function(){return e.getName("Hs")}),o(356,"Hs"),l()()(),i(357,"td")(358,"ul")(359,"li",1),r("click",function(){return e.getName("Mt")}),o(360,"Mt"),l()()(),i(361,"td")(362,"ul")(363,"li",1),r("click",function(){return e.getName("Ds")}),o(364,"Ds"),l()()(),i(365,"td")(366,"ul")(367,"li",1),r("click",function(){return e.getName("Rg")}),o(368,"Rg"),l()()(),i(369,"td")(370,"ul")(371,"li",1),r("click",function(){return e.getName("Cn")}),o(372,"Cn"),l()()(),i(373,"td")(374,"ul")(375,"li",1),r("click",function(){return e.getName("Nh")}),o(376,"Nh"),l()()(),i(377,"td")(378,"ul")(379,"li",1),r("click",function(){return e.getName("Fl")}),o(380,"Fl"),l()()(),i(381,"td")(382,"ul")(383,"li",1),r("click",function(){return e.getName("Mc")}),o(384,"Mc"),l()()(),i(385,"td")(386,"ul")(387,"li",1),r("click",function(){return e.getName("Lv")}),o(388,"Lv"),l()()(),i(389,"td")(390,"ul")(391,"li",1),r("click",function(){return e.getName("Ts")}),o(392,"Ts"),l()()(),i(393,"td")(394,"ul")(395,"li",1),r("click",function(){return e.getName("Og")}),o(396,"Og"),l()()()(),C(397,"td",8),i(398,"tr"),C(399,"td",9),i(400,"td")(401,"ul")(402,"li",1),r("click",function(){return e.getName("La")}),o(403,"La"),l()()(),i(404,"td")(405,"ul")(406,"li",1),r("click",function(){return e.getName("Ce")}),o(407,"Ce"),l()()(),i(408,"td")(409,"ul")(410,"li",1),r("click",function(){return e.getName("Pr")}),o(411,"Pr"),l()()(),i(412,"td")(413,"ul")(414,"li",1),r("click",function(){return e.getName("Nd")}),o(415,"Nd"),l()()(),i(416,"td")(417,"ul")(418,"li",1),r("click",function(){return e.getName("Pm")}),o(419,"Pm"),l()()(),i(420,"td")(421,"ul")(422,"li",1),r("click",function(){return e.getName("Sm")}),o(423,"Sm"),l()()(),i(424,"td")(425,"ul")(426,"li",1),r("click",function(){return e.getName("Eu")}),o(427,"Eu"),l()()(),i(428,"td")(429,"ul")(430,"li",1),r("click",function(){return e.getName("Gd")}),o(431,"Gd"),l()()(),i(432,"td")(433,"ul")(434,"li",1),r("click",function(){return e.getName("Tb")}),o(435,"Tb"),l()()(),i(436,"td")(437,"ul")(438,"li",1),r("click",function(){return e.getName("Dy")}),o(439,"Dy"),l()()(),i(440,"td")(441,"ul")(442,"li",1),r("click",function(){return e.getName("Ho")}),o(443,"Ho"),l()()(),i(444,"td")(445,"ul")(446,"li",1),r("click",function(){return e.getName("Er")}),o(447,"Er"),l()()(),i(448,"td")(449,"ul")(450,"li",1),r("click",function(){return e.getName("Tm")}),o(451,"Tm"),l()()(),i(452,"td")(453,"ul")(454,"li",1),r("click",function(){return e.getName("Yb")}),o(455,"Yb"),l()()(),i(456,"td")(457,"ul")(458,"li",1),r("click",function(){return e.getName("Lu")}),o(459,"Lu"),l()()()(),i(460,"tr"),C(461,"td",9),i(462,"td")(463,"ul")(464,"li",1),r("click",function(){return e.getName("Ac")}),o(465,"Ac"),l()()(),i(466,"td")(467,"ul")(468,"li",1),r("click",function(){return e.getName("Th")}),o(469,"Th"),l()()(),i(470,"td")(471,"ul")(472,"li",1),r("click",function(){return e.getName("Pa")}),o(473,"Pa"),l()()(),i(474,"td")(475,"ul")(476,"li",1),r("click",function(){return e.getName("U<")}),o(477,"U"),l()()(),i(478,"td")(479,"ul")(480,"li",1),r("click",function(){return e.getName("Np")}),o(481,"Np"),l()()(),i(482,"td")(483,"ul")(484,"li",1),r("click",function(){return e.getName("Pu")}),o(485,"Pu"),l()()(),i(486,"td")(487,"ul")(488,"li",1),r("click",function(){return e.getName("Am")}),o(489,"Am"),l()()(),i(490,"td")(491,"ul")(492,"li",1),r("click",function(){return e.getName("Cm")}),o(493,"Cm"),l()()(),i(494,"td")(495,"ul")(496,"li",1),r("click",function(){return e.getName("Bk")}),o(497,"Bk"),l()()(),i(498,"td")(499,"ul")(500,"li",1),r("click",function(){return e.getName("Cf")}),o(501,"Cf"),l()()(),i(502,"td")(503,"ul")(504,"li",1),r("click",function(){return e.getName("Es")}),o(505,"Es"),l()()(),i(506,"td")(507,"ul")(508,"li",1),r("click",function(){return e.getName("Fm")}),o(509,"Fm"),l()()(),i(510,"td")(511,"ul")(512,"li",1),r("click",function(){return e.getName("Md")}),o(513,"Md"),l()()(),i(514,"td")(515,"ul")(516,"li",1),r("click",function(){return e.getName("No")}),o(517,"No"),l()()(),i(518,"td")(519,"ul")(520,"li",1),r("click",function(){return e.getName("Lr")}),o(521,"Lr"),l()()()()()()(),i(522,"section")(523,"div",10)(524,"div")(525,"section",11)(526,"div",12)(527,"label",13),o(528,"Formula:"),l(),i(529,"button",14),r("click",function(){return e.Random()}),o(530,"Testar"),l()(),i(531,"div",15)(532,"input",16,17),r("focus",function(){return e.focusInput()}),l(),i(534,"button",18),r("click",function(){return e.clear()}),o(535,"x"),l()(),i(536,"button",19),r("click",function(){return e.doBalance()}),o(537," Balancear Equa\xE7\xE3o "),l()(),i(538,"section",20),C(539,"div",21)(540,"div",22)(541,"div",23),l()()()()()),c&2&&(v(532),y("formControl",e.formulaElem))},dependencies:[K,I,D,F,Z,z],styles:["[_nghost-%COMP%]   .btnNumber[_ngcontent-%COMP%]{background-color:#f4f4f4;width:15px;height:21px;color:#000;text-align:center;text-decoration:none;display:inline-block;cursor:pointer;border-radius:2px}[_nghost-%COMP%]   .btnAritmetic[_ngcontent-%COMP%]{background-color:#f4f4f4;width:24px;height:24px;color:#000;text-align:center;text-decoration:none;display:inline-block;border-radius:2px}[_nghost-%COMP%]   .form-input[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center}[_nghost-%COMP%]   .form-input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:10px}[_nghost-%COMP%]   .form-input[_ngcontent-%COMP%]   button.clear[_ngcontent-%COMP%]{width:auto;background:green;color:#fff;border-radius:0 7px 7px 0}[_nghost-%COMP%]   .form-input[_ngcontent-%COMP%]   button.clear[_ngcontent-%COMP%]:hover{background:#004100}[_nghost-%COMP%]   .form-input[_ngcontent-%COMP%]   button.randon[_ngcontent-%COMP%]{width:auto;background:orange;color:#fff;border-radius:5px;padding:4px}[_nghost-%COMP%]   .form-input[_ngcontent-%COMP%]   button.randon[_ngcontent-%COMP%]:hover{background:#ff4500}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li.hidden[_ngcontent-%COMP%]{padding:0}[_nghost-%COMP%]   .inputButton[_ngcontent-%COMP%]{display:flex;align-items:baseline}[_nghost-%COMP%]   input[_ngcontent-%COMP%]{border-radius:7px 0 0 7px}[_nghost-%COMP%]   section.tabela[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;margin-bottom:25px}[_nghost-%COMP%]   section.form-input[_ngcontent-%COMP%]{display:grid;flex-direction:column;align-items:center;justify-content:center}[_nghost-%COMP%]   section.messages[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center}[_nghost-%COMP%]   div#balanced[_ngcontent-%COMP%]{letter-spacing:5px;border-radius:7px;padding:20px;margin:25px 0 0}[_nghost-%COMP%]   div#balanced[_ngcontent-%COMP%]:empty{background-color:transparent;padding:0}[_nghost-%COMP%]   div#balanced[_ngcontent-%COMP%]:not(:empty){background-color:#2f4f4f;padding:35px;animation:_ngcontent-%COMP%_fade 1s normal}@keyframes _ngcontent-%COMP%_fade{0%{opacity:0}to{opacity:1}}[_nghost-%COMP%]   div#message[_ngcontent-%COMP%]{border-radius:7px;margin:15px 0 0;color:#000}[_nghost-%COMP%]   div#message[_ngcontent-%COMP%]:empty{background-color:transparent;padding:0}[_nghost-%COMP%]   div#message[_ngcontent-%COMP%]:not(:empty){background-color:orange;padding:25px;animation:_ngcontent-%COMP%_fade 1s,pulse 1s infinite;animation-delay:0s,1s}@keyframes _ngcontent-%COMP%_pulse{0%{transform:scaleZ(1)}50%{transform:scale3d(1.05,1.05,1.05)}to{transform:scaleZ(1)}}[_nghost-%COMP%]   section[_ngcontent-%COMP%]   .colspan[_ngcontent-%COMP%]{border:none}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]{background:wheat;font-size:12px;cursor:pointer}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]:hover{color:red;font-weight:700;background-color:#000}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:.9px}[_nghost-%COMP%]   div.label[_ngcontent-%COMP%], [_nghost-%COMP%]   label[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;margin:0}[_nghost-%COMP%]   div.label[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:0}[_nghost-%COMP%]   ul.numbers[_ngcontent-%COMP%]{display:flex;color:#fff;flex-direction:row;justify-content:space-evenly;background:none;font-weight:700;cursor:default}[_nghost-%COMP%]   ul.numbers[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{cursor:pointer}[_nghost-%COMP%]   ul.numbers[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{color:red}"]});let s=n;return s})(),O=class{constructor(n){this.tok=new B(n)}parseEquation(){let n=[this.parseTerm()];for(;;){let m=this.tok.peek();if(m=="+")this.tok.consume(m),n.push(this.parseTerm());else if(m=="="){this.tok.consume(m);break}else throw new d("+ ou = era esperado",this.tok.pos)}let a=[this.parseTerm()];for(;;){let m=this.tok.peek();if(m===null)break;if(m=="+")this.tok.consume(m),a.push(this.parseTerm());else throw new d("Plus or end expected",this.tok.pos)}return new T(n,a)}parseTerm(){let n=this.tok.pos,a=[],m=!1,c;for(;;)if(c=this.tok.peek(),c=="(")a.push(this.parseGroup());else if(c=="e")this.tok.consume(c),m=!0;else if(c!==null&&/^[A-Z][a-z]*$/.test(c))a.push(this.parseElement());else{if(c!==null&&/^[0-9]+$/.test(c))throw new d("Termo inv\xE1lido - n\xFAmero n\xE3o esperado",this.tok.pos);break}let e=null;if(c=="^"){if(this.tok.consume(c),c=this.tok.peek(),c===null)throw new d("N\xFAmero ou sinal esperado",this.tok.pos);if(e=this.parseOptionalNumber(),c=this.tok.peek(),c=="+")e=+e;else if(c=="-")e=-e;else throw new d("Sinal esperado",this.tok.pos);this.tok.take()}if(m){if(a.length>0)throw new d("Termo inv\xE1lido - o el\xE9tron precisa ficar sozinho",n,this.tok.pos);if(e===null&&(e=-1),e!=-1)throw new d("Invalid term - invalid charge for electron",n,this.tok.pos)}else{if(a.length==0)throw new d("Termo inv\xE1lido - vazio",n,this.tok.pos);e===null&&(e=0)}return new w(a,e)}parseGroup(){let n=this.tok.pos;this.tok.consume("(");let a=[];for(;;){let m=this.tok.peek();if(m=="(")a.push(this.parseGroup());else if(m!==null&&/^[A-Z][a-z]*$/.test(m))a.push(this.parseElement());else if(m==")"){if(this.tok.consume(m),a.length==0)throw new d("Grupo vazio",n,this.tok.pos);break}else throw new d("Elemento, grupo ou par\xEAnteses de fechamento esperados",this.tok.pos)}return new M(a,this.parseOptionalNumber())}parseElement(){let n=this.tok.take();if(!/^[A-Z][a-z]*$/.test(n))throw new Error("Erro de afirma\xE7\xE3o");return new b(n,this.parseOptionalNumber())}parseOptionalNumber(){let n=this.tok.peek();return n!==null&&/^[0-9]+$/.test(n)?$(this.tok.take()):1}},B=class{constructor(n){this.str=n.replace(/\u2212/g,"-"),this.pos=0,this.skipSpaces()}peek(){if(this.pos==this.str.length)return null;let n=/^([A-Za-z][a-z]*|[0-9]+|[+\-^=()])/.exec(this.str.substring(this.pos));if(n===null)throw new d("Simbolo inserido inv\xE1lido.",this.pos);return n[0]}take(){let n=this.peek();if(n===null)throw new Error("Avan\xE7ando al\xE9m do \xFAltimo token");return this.pos+=n.length,this.skipSpaces(),n}consume(n){if(this.take()!=n)throw new Error("Incompatibilidade de token")}skipSpaces(){let n=/^[ \t]*/.exec(this.str.substring(this.pos));if(n===null)throw new Error("Erro de espa\xE7o em branco.");this.pos+=n[0].length}},d=class s extends Error{constructor(n,a,m){super(n),this.start=a,this.end=m,Object.setPrototypeOf(this,s.prototype)}},T=class{constructor(n,a){this.leftSide=n.slice(),this.rightSide=a.slice()}getElements(){let n=new Set;for(let a of this.leftSide.concat(this.rightSide))a.getElements(n);return Array.from(n)}toHtml(n){if(n!==void 0&&n.length!=this.leftSide.length+this.rightSide.length)throw new RangeError("Mismatched number of coefficients");let a=document.createDocumentFragment(),m=0;function c(e){let t=!0;for(let _ of e){let u=n!==void 0?n[m]:1;if(u!=0){if(t?t=!1:a.append(g("plus"," + ")),u!=1){let p=g("coefficient",u.toString().replace(/-/,H));u<0&&p.classList.add("negative"),a.append(p)}a.append(_.toHtml())}m++}}return c(this.leftSide),a.append(g("rightarrow"," \u2192 ")),c(this.rightSide),a}},w=class{constructor(n,a){if(n.length==0&&a!=-1)throw new RangeError("Invalid term");this.items=n.slice(),this.charge=a}getElements(n){n.add("e");for(let a of this.items)a.getElements(n)}countElement(n){if(n=="e")return-this.charge;{let a=0;for(let m of this.items)a=E(a,m.countElement(n));return a}}toHtml(){let n=g("term");if(this.items.length==0&&this.charge==-1)n.textContent="e",n.append(f("sup",H));else{for(let a of this.items)n.append(a.toHtml());if(this.charge!=0){let a;Math.abs(this.charge)==1?a="":a=Math.abs(this.charge).toString(),this.charge>0?a+="+":a+=H,n.append(f("sup",a))}}return n}},M=class{constructor(n,a){if(a<1)throw new RangeError("Erro de declara\xE7\xE3o: a contagem deve ser um n\xFAmero inteiro positivo");this.items=n.slice(),this.count=a}getElements(n){for(let a of this.items)a.getElements(n)}countElement(n){let a=0;for(let m of this.items)a=E(a,k(m.countElement(n),this.count));return a}toHtml(){let n=g("group","(");for(let a of this.items)n.append(a.toHtml());return n.append(")"),this.count!=1&&n.append(f("sub",this.count.toString())),n}},b=class{constructor(n,a){if(this.name=n,this.count=a,a<1)throw new RangeError("Erro de declara\xE7\xE3o: a contagem deve ser um n\xFAmero inteiro positivo")}getElements(n){n.add(this.name)}countElement(n){return n==this.name?this.count:0}toHtml(){let n=g("element",this.name);return this.count!=1&&n.append(f("sub",this.count.toString())),n}},P=class s{constructor(n,a){if(this.numRows=n,this.numCols=a,n<0||a<0)throw new RangeError("Argumento ilegal");let m=[];for(let c=0;c<a;c++)m.push(0);this.cells=[];for(let c=0;c<n;c++)this.cells.push(m.slice())}get(n,a){if(n<0||n>=this.numRows||a<0||a>=this.numCols)throw new RangeError("\xCDndice fora dos limites");return this.cells[n][a]}set(n,a,m){if(n<0||n>=this.numRows||a<0||a>=this.numCols)throw new RangeError("\xCDndice fora dos limites");this.cells[n][a]=m}swapRows(n,a){if(n<0||n>=this.numRows||a<0||a>=this.numRows)throw new RangeError("\xCDndice fora dos limites");let m=this.cells[n];this.cells[n]=this.cells[a],this.cells[a]=m}static addRows(n,a){let m=[];for(let c=0;c<n.length;c++)m.push(E(n[c],a[c]));return m}static multiplyRow(n,a){return n.map(m=>k(m,a))}static gcdRow(n){let a=0;for(let m of n)a=S(m,a);return a}static simplifyRow(n){let a=0;for(let c of n)if(c!=0){a=Math.sign(c);break}if(a==0)return n.slice();let m=s.gcdRow(n)*a;return n.map(c=>c/m)}gaussJordanEliminate(){let n=this.cells=this.cells.map(s.simplifyRow),a=0;for(let m=0;m<this.numCols;m++){let c=a;for(;c<this.numRows&&n[c][m]==0;)c++;if(c==this.numRows)continue;let e=n[c][m];this.swapRows(a,c),a++;for(let t=a;t<this.numRows;t++){let _=S(e,n[t][m]);n[t]=s.simplifyRow(s.addRows(s.multiplyRow(n[t],e/_),s.multiplyRow(n[m],-n[t][m]/_)))}}for(let m=this.numRows-1;m>=0;m--){let c=0;for(;c<this.numCols&&n[m][c]==0;)c++;if(c==this.numCols)continue;let e=n[m][c];for(let t=m-1;t>=0;t--){let _=S(e,n[t][c]);n[t]=s.simplifyRow(s.addRows(s.multiplyRow(n[t],e/_),s.multiplyRow(n[m],-n[t][c]/_)))}}}};function L(s){let n=s.getElements(),a=s.leftSide,m=s.rightSide,c=new P(n.length+1,a.length+m.length+1);return n.forEach((e,t)=>{let _=0;for(let u of a)c.set(t,_,u.countElement(e)),_++;for(let u of m)c.set(t,_,-u.countElement(e)),_++}),c}function G(s){s.gaussJordanEliminate();function n(m){let c=0;for(let e=0;e<s.numCols;e++)s.get(m,e)!=0&&c++;return c}let a;for(a=0;a<s.numRows-1&&!(n(a)>1);a++);if(a==s.numRows-1)throw new RangeError("Formula sem solu\xE7\xE3o");s.set(s.numRows-1,a,1),s.set(s.numRows-1,s.numCols-1,1),s.gaussJordanEliminate()}function j(s){let n=s.numRows,a=s.numCols;if(a-1>n||s.get(a-2,a-2)==0)throw new RangeError("Multiple independent solutions");let m=1;for(let e=0;e<a-1;e++)m=k(m/S(m,s.get(e,e)),s.get(e,e));let c=[];for(let e=0;e<a-1;e++)c.push(k(m/s.get(e,e),s.get(e,a-1)));if(c.every(e=>e==0))throw new RangeError("Assertion error: All-zero solution");return c}function V(s,n){if(n.length!=s.leftSide.length+s.rightSide.length)throw new Error("Assertion error: Mismatched length");function a(m){if(typeof m!="number"||isNaN(m)||Math.floor(m)!=m)throw new Error("Assertion error: Not an integer");return m==0}if(n.every(a))throw new Error("Assertion error: All-zero solution");for(let m of s.getElements()){let c=0,e=0;for(let t of s.leftSide)c=E(c,k(t.countElement(m),n[e])),e++;for(let t of s.rightSide)c=E(c,k(t.countElement(m),-n[e])),e++;if(c!=0)throw new Error("Assertion error: Incorrect balance")}}var J=9007199254740992;function $(s){let n=parseInt(s,10);if(isNaN(n))throw new RangeError("Not a number");return R(n)}function E(s,n){return R(s+n)}function k(s,n){return R(s*n)}function R(s){if(Math.abs(s)>=J)throw new RangeError("Arithmetic overflow");return s}function S(s,n){if(typeof s!="number"||typeof n!="number"||isNaN(s)||isNaN(n))throw new Error("Argumento inv\xE1lido");for(s=Math.abs(s),n=Math.abs(n);n!=0;){let a=s%n;s=n,n=a}return s}var H="\u2212";function f(s,n){let a=document.createElement(s);return n!==void 0&&(a.textContent=n),a}function g(s,n){let a=f("span",n);return a.className=s,a}export{q as ChemBalanceComponent};
