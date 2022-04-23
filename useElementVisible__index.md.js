(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{vWh6:function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),l=t.n(a),o=t("dEAq"),i=t("H1Ra"),c=l.a.memo((e=>{e.demos;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"useelementvisible"},l.a.createElement(o["AnchorLink"],{to:"#useelementvisible","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"useElementVisible"),l.a.createElement("p",null,"useElementVisible is used to determine whether the specified element is visible in a viewport."),l.a.createElement("blockquote",null,l.a.createElement("p",null,"Note: The positioning of useElementVisible and useComputeOverflow are different.")),l.a.createElement("blockquote",null,l.a.createElement("p",null,"Secne: For example, when customizing a drop-down box, we can use this hook to monitor when we have to display the drop-down box in the viewport.")),l.a.createElement("h3",{id:"usage"},l.a.createElement(o["AnchorLink"],{to:"#usage","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Usage:"),l.a.createElement(i["a"],{code:"const [visible, setElement] = useElementVisible();\n\nuseEffect(() => {\n  if (elementRef.current) {\n    setElement(elementRef.current);\n  }\n}, []);",lang:"typescript"}),l.a.createElement("h3",{id:"api"},l.a.createElement(o["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"API"),l.a.createElement(i["a"],{code:"const [visible, setElement] = useElementVisible<C extends Element, P extends Element>(): [boolean, (element: C, container?: P) => void];",lang:"typescript"}),l.a.createElement("blockquote",null,l.a.createElement("p",null,"The default value of ",l.a.createElement("code",null,"container")," is ",l.a.createElement("code",null,"document documentElement"),"."))))}));n["default"]=e=>{var n=l.a.useContext(o["context"]),t=n.demos;return l.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&o["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(c,{demos:t})}}}]);