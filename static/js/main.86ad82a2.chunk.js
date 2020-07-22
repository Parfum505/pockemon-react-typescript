(this["webpackJsonppockemon-react-typescript"]=this["webpackJsonppockemon-react-typescript"]||[]).push([[0],{44:function(e,n,t){e.exports=t(73)},49:function(e,n,t){},50:function(e,n,t){},73:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(21),c=t.n(o),l=(t(49),t(50),t(18)),u=t(2),i=t(10),s=t(12),p=t.n(s),d=t(19),m=t(20),b=t.n(m),f=t(15),g=t(4),v=t(5);function O(){var e=Object(g.a)(["\n  padding: 11px;\n  background-color: dodgerblue;\n  border: 1px solid #ddd;\n  color: white;\n  cursor: pointer;\n  &:active,\n  &:focus {\n    outline: none;\n  }\n  &:hover {\n    background-color: royalblue;\n  }\n  &:disabled {\n    background-color: #ccc;\n    cursor: not-allowed;\n  }\n"]);return O=function(){return e},e}var E=v.a.input(O()),h=function(e){var n=e.value,t=e.addClasses,a=e.btnType,o=e.clickHandler,c=e.isDisabled,l=["btn"];return(null===t||void 0===t?void 0:t.length)&&(l=l.concat(t)),r.a.createElement(E,{className:l.join(" "),type:a,onClick:o,disabled:c,value:n})};function k(){var e=Object(g.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    padding: 15px;\n    width: 90%;\n    max-width: 300px;\n    margin: 0 auto 30px;\n    text-align: left;\n    align-items: center;\n}\n"]);return k=function(){return e},e}function j(){var e=Object(g.a)(["\n    margin: 5px 10px 15px 0;\n    width: 100%;\n    font-size: 1.5rem;\n  }\n"]);return j=function(){return e},e}var x=v.a.h1(j()),y=v.a.form(k());function _(){var e=Object(g.a)(["\nvertical-align: middle;\npadding: 10px;\nbackground-color: #fff;\nborder: 1px solid #ddd;\nborder-radius: 0;\nwidth: 100%;\nborder-right: 0;\n&:focus {\n    border-color: dodgerblue;\n    outline: none;\n}\n}\n"]);return _=function(){return e},e}function S(){var e=Object(g.a)(["\n  padding: 0.5rem;\n  &:not(:last-of-type) {\n    border-bottom: 1px solid dodgerblue;\n  }\n  &.active,\n  &:hover {\n    background-color: dodgerblue;\n    color: white;\n    cursor: pointer;\n    font-weight: 700;\n  }\n"]);return S=function(){return e},e}function w(){var e=Object(g.a)(["\n  position: absolute;\n  left: 0;\n  top: 37px;\n  background: white;\n  border: 1px solid dodgerblue;\n  border-top-width: 0;\n  list-style: none;\n  margin: 0;\n  max-height: 150px;\n  overflow-y: auto;\n  padding-left: 0;\n  width: 100%;\n  &.no-suggestions {\n    color: #999;\n  }\n"]);return w=function(){return e},e}function N(){var e=Object(g.a)(["\n  flex: 1;\n  position: relative;\n"]);return N=function(){return e},e}var T=v.a.div(N()),C=v.a.ul(w()),I=v.a.li(S()),M=v.a.input(_()),P=function(e){var n,t=e.suggestions,o=e.inputValue,c=e.setInputValue,l=Object(a.useState)(!1),u=Object(f.a)(l,2),i=u[0],s=u[1],p=Object(a.useState)([]),d=Object(f.a)(p,2),m=d[0],b=d[1],g=Object(a.useState)(0),v=Object(f.a)(g,2),O=v[0],E=v[1],h=function(e){s(!1),c(e.currentTarget.innerText),b([])};return i&&o&&(n=m.length?r.a.createElement(C,null,m.map((function(e,n){var t=n===O?"active":"";return r.a.createElement(I,{className:t,key:e,onClick:h},e)}))):r.a.createElement(C,{className:"no-suggestions"},r.a.createElement(I,{className:""},"No suggestions, you're on your own!"))),r.a.createElement(T,null,r.a.createElement(M,{type:"text",onChange:function(e){c(e.target.value);var n=t.filter((function(n){return n.startsWith(e.target.value.trim().toLowerCase())}));b(n),s(!0),E(0)},onKeyDown:function(e){13===e.keyCode?(s(!1),c(m[O])):38===e.keyCode?0!==O&&E((function(e){return e-1})):40===e.keyCode&&O!==m.length-1&&E((function(e){return e+1}))},value:o,placeholder:"Type Pokemon name"}),n)},H=r.a.memo(Object(u.h)((function(){var e=Object(a.useState)(""),n=Object(f.a)(e,2),t=n[0],o=n[1],c=Object(i.b)(),l=Object(i.c)((function(e){return e.pokemonsAllNames})).pokemons;Object(a.useEffect)((function(){(null===l||void 0===l?void 0:l.length)||c(function(){var e=Object(d.a)(p.a.mark((function e(n){var t,a,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("https://pokeapi.co/api/v2/pokemon/?limit=2000");case 3:t=e.sent,a=t.data.results,r=a.reduce((function(e,n){return e.push(n.name.toLowerCase()),e}),[]).sort(),n({type:"ALL_POKEMONS_NAMES_FETCHING_SUCCESS",payload:r}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n){return e.apply(this,arguments)}}())}),[c,l]);var s=Object(u.f)();return r.a.createElement(y,{onSubmit:function(e){e.preventDefault();var n=t.trim();n&&(o(""),s.push("/".concat(n)))}},r.a.createElement(x,null,"Find your pokemon:"),r.a.createElement(P,{suggestions:l,inputValue:t,setInputValue:o}),r.a.createElement(h,{btnType:"submit",value:"Search"}))})));function R(){var e=Object(g.a)(["\n  background-color: white;\n  width: 90%;\n  max-width: 270px;\n  text-align: left;\n  margin: 0 auto;\n"]);return R=function(){return e},e}function F(){var e=Object(g.a)(["\n  padding: 10px;\n  border: 1px solid #ddd;\n  text-align: center;\n  margin-bottom: 20px;\n  ul {\n    list-style: none;\n    padding: 0;\n    margin: 0 0 1rem 0;\n    li {\n      padding: 5px;\n      font-weight: bold;\n    }\n  }\n"]);return F=function(){return e},e}var L=v.a.div(F()),K=v.a.div(R()),G=function(){var e=Object(i.b)(),n=Object(u.g)().name,t=Object(u.f)(),o=Object(i.c)((function(e){return e.pokemon}));Object(a.useEffect)((function(){var t;n&&e((t=n,function(){var e=Object(d.a)(p.a.mark((function e(n){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n({type:"POKEMON_FETCHING_START"}),e.next=4,b.a.get("https://pokeapi.co/api/v2/pokemon/".concat(t));case 4:a=e.sent,n({type:"POKEMON_FETCHING_SUCCESS",payload:a.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),n({type:"POKEMON_FETCHING_ERROR",payload:e.t0.message});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}()))}),[n,e]);var c=null;return o.loading?c=r.a.createElement("p",null,"Loading..."):o.error&&(c=r.a.createElement("p",null,o.error)),r.a.createElement(r.a.Fragment,null,r.a.createElement(H,null),r.a.createElement(K,null,c||o.pokemon&&r.a.createElement(L,null,r.a.createElement("h2",null,"Name: ",o.pokemon.name),o.pokemon.sprites.front_default&&r.a.createElement("img",{src:o.pokemon.sprites.front_default,alt:"icon"}),o.pokemon.sprites.back_default&&r.a.createElement("img",{src:o.pokemon.sprites.back_default,alt:"icon"}),r.a.createElement("h3",null,"Abilities:"),r.a.createElement("ul",null,o.pokemon.abilities.map((function(e,n){return r.a.createElement("li",{key:n},e.ability.name)})))),r.a.createElement(h,{btnType:"button",clickHandler:function(){t.push("/")},value:"Back to the list"})))};function A(){var e=Object(g.a)(["\n  margin: 8px;\n  text-align: center;\n  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);\n  transition: all 0.3s;\n  &:hover {\n    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);\n  }\n  h4 {\n    margin: 10px 0 0;\n    padding: 5px;\n  }\n  a {\n    text-decoration: none;\n    color: brack;\n  }\n"]);return A=function(){return e},e}function U(){var e=Object(g.a)(["\n  list-style: none;\n  padding: 0;\n  display: flex;\n  flex-wrap: wrap;\n  width: 90%;\n  margin: 0 auto;\n"]);return U=function(){return e},e}function D(){var e=Object(g.a)(["\n  width: 90%;\n  margin: 0 auto;\n"]);return D=function(){return e},e}var V=v.a.div(D()),B=v.a.ul(U()),J=v.a.li(A()),W=function(){var e=Object(a.useState)(null),n=Object(f.a)(e,2),t=n[0],o=n[1],c=Object(i.b)(),u=Object(i.c)((function(e){return e.pokemonsList})),s=u.pokemons;Object(a.useEffect)((function(){s.length||o("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20")}),[s]),Object(a.useEffect)((function(){var e;c((e=t,function(){var n=Object(d.a)(p.a.mark((function n(t){var a,r,o;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t({type:"POKEMON_LIST_FETCHING_START"}),n.next=4,b.a.get(e);case 4:a=n.sent,r={next:a.data.next,previous:a.data.previous,current:e},o=a.data.results.map((function(e){var n=e.url.split("/"),t=n[n.length-2];return{name:e.name,id:t}})),t({type:"POKEMON_LIST_FETCHING_SUCCESS",payload:{urls:r,pokemons:o}}),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),t({type:"POKEMON_LIST_FETCHING_ERROR",payload:n.t0.message});case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}()))}),[c,t]);var m=function(e){e&&o(e)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(H,null),r.a.createElement(V,null,r.a.createElement("p",null,"See all pokemons"),r.a.createElement(h,{isDisabled:!u.urls.previous||u.loading,btnType:"button",value:"Prev",clickHandler:function(){return m(u.urls.previous)}}),r.a.createElement(h,{isDisabled:!u.urls.next||u.loading,btnType:"button",value:"Next",clickHandler:function(){return m(u.urls.next)}})),r.a.createElement(B,null,s&&s.map((function(e){return r.a.createElement(J,{key:e.id},r.a.createElement(l.b,{to:"/".concat(e.name)},r.a.createElement("h4",null,e.name),r.a.createElement("img",{src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(e.id,".png"),alt:"icon"})))}))))},z=function(){return r.a.createElement(l.a,{basename:"/pockemon-react-typescript"},r.a.createElement("div",{className:"App"},r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/:name",component:G}),r.a.createElement(u.a,{path:"/",exact:!0,component:W}))))},q=t(13),Q=t(3),X={loading:!1,error:""},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"POKEMON_FETCHING_START":return Object(Q.a)(Object(Q.a)({},e),{},{loading:!0,error:""});case"POKEMON_FETCHING_ERROR":return Object(Q.a)(Object(Q.a)({},e),{},{loading:!1,error:n.payload});case"POKEMON_FETCHING_SUCCESS":return Object(Q.a)(Object(Q.a)({},e),{},{pokemon:n.payload,loading:!1});default:return e}},Z={pokemons:[]},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"ALL_POKEMONS_NAMES_FETCHING_SUCCESS":return Object(Q.a)(Object(Q.a)({},e),{},{pokemons:n.payload});default:return e}},ee={loading:!1,error:"",pokemons:[],urls:{next:null,previous:null,current:""}},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"POKEMON_LIST_SET_URL":var t=Object(Q.a)(Object(Q.a)({},e.urls),{},{current:n.payload});return Object(Q.a)(Object(Q.a)({},e),{},{urls:t});case"POKEMON_LIST_FETCHING_START":return Object(Q.a)(Object(Q.a)({},e),{},{loading:!0,error:""});case"POKEMON_LIST_FETCHING_ERROR":return Object(Q.a)(Object(Q.a)({},e),{},{loading:!1,error:n.payload});case"POKEMON_LIST_FETCHING_SUCCESS":return Object(Q.a)(Object(Q.a)({},e),{},{pokemons:n.payload.pokemons,urls:n.payload.urls,loading:!1,error:""});default:return e}},te=Object(q.combineReducers)({pokemon:Y,pokemonsAllNames:$,pokemonsList:ne}),ae=t(42),re=t(43),oe=Object(q.createStore)(te,Object(re.composeWithDevTools)(Object(q.applyMiddleware)(ae.a)));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,{store:oe},r.a.createElement(z,null))),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.86ad82a2.chunk.js.map