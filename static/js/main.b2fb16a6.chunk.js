(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1036:function(e,a,t){"use strict";t.r(a);var l=t(1),n=t.n(l),r=t(10),c=t.n(r),o=(t(522),t(183)),s=t(485),i=t(486),d=t(512),m=t(487),u=t(514),p=(t(524),t(131)),E=t(384),g=t(483),h=t(386),S=t(30),y=(t(567),t(568),t(488)),C=t.n(y),b=t(489),f=t.n(b),v=t(199),w=t.n(v),N=t(490),R=t.n(N),L=(t(626),t(117)),O=p.a.Button,j=p.a.Group,k=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(d.a)(this,Object(m.a)(a).call(this,e))).onLangChange=function(e){switch(e.target.value){case"en":S.locale("en"),t.setState({locale:Object(o.a)({graphicalEditor:"Graphical Editor",codeEditor:"Code Editor",language:"Language",compact:"Compact"},L.locale.en_US)});break;case"de":S.locale("de"),t.setState({locale:Object(o.a)({graphicalEditor:"Grafischer Editor",codeEditor:"Code Editor",language:"Sprache",compact:"Kompakt"},L.locale.de_DE)});break;case"es":S.locale("es"),t.setState({locale:Object(o.a)({graphicalEditor:"Editor gr\xe1fico",codeEditor:"Editor de c\xf3digo",language:"Idioma",compact:"Compacto"},L.locale.es_ES)});break;default:S.locale("en"),t.setState({locale:Object(o.a)({graphicalEditor:"Graphical Editor",codeEditor:"Code Editor",language:"Language",compact:"Compact"},L.locale.en_US)})}},t.onRuleRendererChange=function(e){var a=e.target.value;t.setState({ruleRendererType:a})},t.onCompactSwitchChange=function(e){t.setState({compact:e})},t.state={locale:Object(o.a)({graphicalEditor:"Graphical Editor",codeEditor:"Code Editor",language:"Language",compact:"Compact"},L.locale.en_US),compact:!0,ruleRendererType:"SLD",style:{name:"Demo Style",rules:[{name:"Rule 1",symbolizers:[{kind:"Mark",wellKnownName:"Circle"}]}]}},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.locale,n=a.style,r=a.data,c=a.compact,o=a.ruleRendererType;return l.createElement(E.a,{locale:t},l.createElement("div",{className:"app"},l.createElement("header",{className:"gs-header"},l.createElement("span",{className:"logo-title"},l.createElement("img",{className:"logo",src:C.a,alt:"logo"}),l.createElement("span",{className:"app-title"},"GeoStyler"))),l.createElement(g.a,{layout:"inline",className:"gs-settings"},l.createElement(g.a.Item,{label:t.language},l.createElement(j,{className:"language-select",onChange:this.onLangChange,defaultValue:"en"},l.createElement(O,{value:"en"},"EN"),l.createElement(O,{value:"de"},"DE"),l.createElement(O,{value:"es"},"ES"))),l.createElement(g.a.Item,{label:t.compact},l.createElement(h.a,{checked:c,onChange:this.onCompactSwitchChange})),l.createElement(g.a.Item,{label:"Symbolizer Renderer"},l.createElement(j,{className:"language-select",onChange:this.onRuleRendererChange,value:o},l.createElement(O,{value:"OpenLayers"},"OpenLayers"),l.createElement(O,{value:"SLD"},"SLD"))),l.createElement(g.a.Item,null,l.createElement(L.StyleLoader,{parsers:[w.a],onStyleRead:function(a){e.setState({style:a})}})),l.createElement(g.a.Item,null,l.createElement(L.DataLoader,{parsers:[f.a,R.a],onDataRead:function(a){e.setState({data:a})}}))),l.createElement("div",{className:"main-content"},l.createElement("div",{className:"gui-wrapper"},l.createElement("h2",null,t.graphicalEditor),l.createElement(L.Style,{style:n,data:r,onStyleChange:function(a){e.setState({style:a})},compact:c,ruleRendererType:o,sldRendererProps:{wmsBaseUrl:"https://ows.terrestris.de/geoserver/wms",layer:"terrestris:bundeslaender"}})),l.createElement("div",{className:"editor-wrapper"},l.createElement("h2",null,t.codeEditor),l.createElement(L.CodeEditor,{style:n,parsers:[w.a],defaultParser:w.a,onStyleChange:function(a){e.setState({style:a})},showSaveButton:!0,showCopyButton:!0})))))}}]),a}(l.Component);k.componentName="App";var D=k;c.a.render(n.a.createElement(D,null),document.getElementById("root"))},488:function(e,a,t){e.exports=t.p+"static/media/logo.b2b95d68.svg"},517:function(e,a,t){e.exports=t(1036)},522:function(e,a,t){},579:function(e,a){},581:function(e,a){},626:function(e,a,t){}},[[517,2,1]]]);
//# sourceMappingURL=main.b2fb16a6.chunk.js.map