(this["webpackJsonpturing-react"]=this["webpackJsonpturing-react"]||[]).push([[0],[,,,,,,function(e,t){t.compiler=function(e){return function(t,a){return function(e,t,a){var n=a;""===n&&(n="_");var r=("in "+t+" "+n+" out ").length,i=e.indexOf("in "+t+" "+n);if(-1===i)return null;var o=i+r,s=e.indexOf(";",i),l=e.slice(o,s).split(" ");return{nextState:l[0],printChar:l[1],nextMove:l[2]}}(e,t,a)}},t.getInitialConfig=function(e){var t=e.indexOf("$"),a=e.indexOf(";",t),n=e.lastIndexOf("$"),r=e.indexOf(";",n);return{startState:e.slice(t+1,a),startInput:e.slice(n+1,r)}}},,,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(8),o=a.n(i),s=(a(14),a(1)),l=a(3),c=a(2),h=a(5),u=a(4),m=(a(15),function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-light bg-light machine-state"},r.a.createElement("a",{className:"navbar-brand",href:"."},"Turing Machine Simulator"))}}]),a}(n.Component)),d=a(6),g=function e(t,a,n){Object(s.a)(this,e),this.diagram=t,this.state=a,this.left="",this.head=n.slice(0,1),this.right=n.slice(1)};Object.defineProperties(g.prototype,{nextInstruction:{get:function(){return this.diagram(this.state,this.head)}},isHalted:{get:function(){return null==this.nextInstruction}}}),g.prototype.step=function(){var e=this.nextInstruction;if(null==e||this.isHalted)return!1;switch(this.state=e.nextState,e.nextMove){case"left":this.right=String(e.printChar)+this.right,this.head=this.left.slice(-1),this.left=this.left.slice(0,-1);break;case"right":this.left=this.left+String(e.printChar),this.head=this.right.slice(0,1),this.right=this.right.slice(1);break;default:return!1}return!0},g.prototype.toString=function(){return"State: {".concat(String(this.state),"} \n   >>").concat(String(this.left),"[").concat(String(this.head),"]").concat(String(this.right),"<< \n   Is halted?: {").concat(String(this.isHalted),"}")},g.prototype.dumpConfig=function(){return{diagram:this.diagram,state:this.state,left:this.left,head:this.head,right:this.right,halted:this.isHalted}};var b=g,f=(a(16),function(e){var t=e.machineState,a=e.takeStep,n=e.setMachineFromCode,i=e.sourceCode,o=e.setLastChanger,s=e.setSourceCode;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"border border-secondary rounded machine-state"},r.a.createElement("h3",null,r.a.createElement("span",{className:"badge m-2"},"State:")),r.a.createElement("center",null,r.a.createElement("h4",null,r.a.createElement("span",{className:"badge border border-secondary badge-light"},t.state))),r.a.createElement("h3",null,r.a.createElement("span",{className:"badge m-2"},"Tape:"),r.a.createElement("div",{className:"tape border boder-dark rounded bg-light m-2"},r.a.createElement("div",{className:"flex-row"},r.a.createElement("div",{className:"text-right"},t.left),r.a.createElement("span",null,r.a.createElement("b",null,"^",t.head)),r.a.createElement("div",null,t.right))))),r.a.createElement("button",{id:"stepButton",className:"btn btn-primary m-2 disable-dbl-tap-zoom",disabled:t.halted,onClick:function(){return a()}},"Step"),r.a.createElement("button",{id:"resetButton disable-dbl-tap-zoom",className:"btn btn-secondary m-2",onClick:function(){return n()}},"Reset"),r.a.createElement("h3",null,r.a.createElement("span",{className:"badge m-2 machine-state"},"Code:")),r.a.createElement("div",{className:"machine-state rounded"},r.a.createElement("textarea",{className:"form-control bg-light",rows:8,value:i,onChange:function(e){o(null),s(e.target.value)}})))}),p=function(e){var t=e.id,a=e.title,n=e.description,i=e.sourceCode,o=e.setSourceCode,s=e.lastChanger,l=e.setLastChanger;return r.a.createElement("details",null,r.a.createElement("summary",{className:"btn btn-light m-2"},String(a)),r.a.createElement("p",{className:"m-2"}," ",String(n)),r.a.createElement("div",{className:"border border-secondary rounded bg-light m-2"},r.a.createElement("pre",{className:"pre-scrollable"},r.a.createElement("code",null,String(i)))),r.a.createElement("center",null,r.a.createElement("button",{disabled:Boolean(s===t),className:"btn btn-primary m-2",onClick:function(){l(t),o(String(i))}},"Paste Into Code Field")))},y=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={examples:[{key:1,id:1,title:"3-state busy beaver",description:"When given a blank input, the following Turing machine prints six 1's onto the tape and halts. It's impossible for any other Turing machine to print a longer string of 1's to the tape, unless it has a larger number of states, or runs forever. The maximum for 4 states is 13. The maximum for 5 states is at least 4098. The maximum for 6 states is at least 3.5e18267 (that's scientific notation for a number over 18 thousand digits long).",sourceCode:"$A;\n$;\nin A _ out B 1 right;\nin A 1 out C 1 left;\nin B _ out A 1 left;\nin B 1 out B 1 right;\nin C _ out B 1 left;\nin C 1 out halt 1 right;"},{key:2,id:2,title:"Binary increment",description:"This Turing machine adds one to a number given in binary. For example, 11 + 1 = (1011)_2 + 1 = (1100)_2, so the machine should halt with `1100` written on the tape when started with `1011`.",sourceCode:"$right;\n$10011; \nin right 0 out right 0 right;\nin right 1 out right 1 right;\nin right _ out carry _ left;\nin carry 0 out done 1 left;\nin carry 1 out carry 0 left;\nin carry _ out halt 1 left;"},{key:3,id:3,title:"Palindrome checker",description:"The following Turing machine accepts a string of a's and b's if it's a palindrome, otherwise it halts in the `reject` state.",sourceCode:"$start; \n$abababa;\nin start a out memoryA _ right; \nin start b out memoryB _ right; \nin start _ out accept _ right; \n\nin memoryA a out memoryA a right; \nin memoryA b out memoryA b right; \nin memoryA _ out matchA _ left; \n\nin memoryB a out memoryB a right; \nin memoryB b out memoryB b right; \nin memoryB _ out matchB _ left; \n\nin matchA a out back _ left; \nin matchA b out reject b right; \nin matchA _ out accept _ right; \n\nin matchB a out reject a right; \nin matchB b out back _ left; \nin matchB _ out accept _ right; \n\nin back a out back a left; \nin back b out back b left; \nin back _ out start _ right;"},{key:4,id:4,title:"Finite state automata",description:"A finite-state automata can be viewed as a Turing machine which never edits the tape and always moves right. This machine recognizes the regular language a*b* (any number of a's followed by any number of b's). In contrast, the palindrome language in the previous example is not regular, meaning there is no finite-state automata recognizing it.",sourceCode:"$A;\n$aaaaabbb;\nin A _ out accept _ right;\nin A a out A a right;\nin A b out B b right;\nin B _ out accept _ right;\nin B a out reject a right;\nin B b out B b right;"}]},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.setSourceCode,a=e.lastChanger,n=e.setLastChanger;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,r.a.createElement("span",{className:"badge m-2"},"More examples:")),r.a.createElement("p",{className:"m-2"},"Try some of these example programs, or edit your own in the Code box above!"),this.state.examples.map((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,r.a.createElement(p,{key:e.id,id:e.id,sourceCode:e.sourceCode,title:e.title,description:e.description,setSourceCode:t,setLastChanger:n,lastChanger:a})))})))}}]),a}(r.a.Component),C=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("h3",null,r.a.createElement("span",{className:"badge m-2"},"Explanation:")),r.a.createElement("details",null,r.a.createElement("summary",{className:"btn btn-light m-2"},"What is a Turing machine?"),r.a.createElement("div",{className:"card card-body m-2"},r.a.createElement("p",null,"[Adapted from Wikipedia] A Turing machine is a mathematical model of computation that defines an abstract machine which manipulates symbols on a strip of tape according to a pre-specified table of rules. Despite the model's simplicity, given any computer algorithm, a Turing machine capable of simulating that algorithm's logic can be constructed."),r.a.createElement("p",null,'A Turing machine operates similarly to a finite-state automata, but is provided with a memory tape divided into cells. It positions its "head" over a cell and reads the symbol there. Then, determined solely by the symbol read, together with the machine\'s own present state, the machine writes a symbol in the cell, then either moves the tape head one cell left or right and transitions to another of finitely many states, according to a user-specified table of instructions.'))),r.a.createElement("details",null,r.a.createElement("summary",{className:"btn btn-light m-2"},"What is the syntax for the code?"),r.a.createElement("div",{className:"card card-body m-2"},r.a.createElement("p",null,"The format for the source code used above is as follows:"),r.a.createElement("p",null,"The first two lines contain a header specifying what state to begin in and what contents to write to the tape initially:"),r.a.createElement("pre",{className:"border border-secondary rounded bg-light"},r.a.createElement("code",null,"$[initialState];",r.a.createElement("br",null),"$[initialTapeContents];",r.a.createElement("br",null))),r.a.createElement("p",null,"The header is followed by as many lines as you like of instructions, each with the following syntax, and terminated by a semicolon:"),r.a.createElement("pre",{className:"border border-secondary rounded bg-light"},r.a.createElement("code",null,"in [startingState] [readCharacter] out [newState] [newCharacter] [move];")),r.a.createElement("p",null,"There are a few other things you should be aware of:"),r.a.createElement("ul",null,r.a.createElement("li",null,"The move command must be one of either `left` or `right`."),r.a.createElement("li",null,"The symbol `_` denotes a blank character. "),r.a.createElement("li",null,"The symbols `$` and `;` are reserved by the compiler (I also don't recommend using `^` as a character)."),r.a.createElement("li",null,"The strings `in` and `out` are reserved keywords.")),"Other than that the state names can be any ASCII string, and the characters can be any ASCII character. Bitmoji not yet supported, sorry!"))))},v=(a(17),a(18),function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).initialSourceCode="\\* Adds 1 to a binary number *\\ \n$right; \n$11011; \\\\ 27 + 1 = 28 = (11100)_2 \nin right 0 out right 0 right; \nin right 1 out right 1 right; \nin right _ out carry _ left; \nin carry 0 out halt 1 left; \nin carry 1 out carry 0 left; \nin carry _ out halt 1 left;",e.machine=new b(Object(d.compiler)(e.initialSourceCode),Object(d.getInitialConfig)(e.initialSourceCode).startState,Object(d.getInitialConfig)(e.initialSourceCode).startInput),e.state={lastChanger:null,sourceCode:e.initialSourceCode,machineState:e.machine.dumpConfig()},e.takeStep=e.takeStep.bind(Object(c.a)(e)),e.setSourceCode=e.setSourceCode.bind(Object(c.a)(e)),e.setMachineFromCode=e.setMachineFromCode.bind(Object(c.a)(e)),e.setLastChanger=e.setLastChanger.bind(Object(c.a)(e)),e}return Object(l.a)(a,[{key:"setLastChanger",value:function(e){this.setState({lastChanger:e})}},{key:"setSourceCode",value:function(e){this.setState({sourceCode:e},this.setMachineFromCode)}},{key:"setMachineFromCode",value:function(){var e=Object(d.getInitialConfig)(this.state.sourceCode);this.machine=new b(Object(d.compiler)(this.state.sourceCode),e.startState,e.startInput);var t=this.machine.dumpConfig();this.setState({machineState:t})}},{key:"takeStep",value:function(){this.machine.step();var e=this.machine.dumpConfig();this.setState({machineState:e})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m,null),r.a.createElement("br",null),r.a.createElement("div",{className:"Site-content disable-dbl-tap-zoom"},r.a.createElement("main",{className:"u-container"},r.a.createElement(f,{machineState:this.state.machineState,setMachineFromCode:this.setMachineFromCode,takeStep:this.takeStep,sourceCode:this.state.sourceCode,setSourceCode:this.setSourceCode,lastChanger:this.state.lastChanger,setLastChanger:this.setLastChanger}),r.a.createElement(C,null),r.a.createElement("br",null),r.a.createElement(y,{setSourceCode:this.setSourceCode,lastChanger:this.state.lastChanger,setLastChanger:this.setLastChanger}))),r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("br",null))))}}]),a}(r.a.Component)),E=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function S(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/turing",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/turing","/service-worker.js");E?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):S(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):S(t,e)}))}}()}],[[9,1,2]]]);
//# sourceMappingURL=main.5d455551.chunk.js.map