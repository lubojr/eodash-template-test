import{aA as o,aq as n,aY as r}from"./index-DZKhfqhz.js";const{currentUrl:s}=o.states,l={id:"Information",layout:{x:9,y:0,w:3,h:12},title:"Information",type:"web-component",widget:{link:()=>n(()=>import("./eox-stacinfo-CES29oXd.js"),[]),tagName:"eox-stacinfo",properties:{for:s,allowHtml:"true",styleOverride:"#properties li > .value {font-weight: normal !important;}",header:"[]",subheader:"[]",properties:'["description"]',featured:"[]",footer:"[]"}}},d={id:Symbol(),title:"Container",type:"internal",layout:{x:4,y:9,w:4,h:3},widget:{name:"WidgetsContainer",properties:{widgets:[{defineWidget:i=>{const e=i?.assets?.legend?.href;return e?{id:e,title:"Legend",type:"web-component",widget:{link:"https://unpkg.com/progressive-image-element@latest/dist/index.js",tagName:"progressive-image",properties:{src:e},onMounted(a){const t=document.createElement("img");t.src=e,a.appendChild(t)}}}:{id:Symbol(),title:"Date Picker",type:"internal",widget:{name:"EodashDatePicker",properties:{inline:!0}}}}}]}}},m=r({id:"template-id",stacEndpoint:"https://eurodatacube.github.io/eodash-catalog/RACE/catalog.json",brand:{name:"Dashboard",font:{family:"Poppins"},logo:"/logo.png",footerText:"eodash instance template",theme:{colors:{primary:"#004170",secondary:"#004170",background:"#fff",surface:"#eee"}}},template:{gap:6,background:{type:"internal",id:Symbol(),widget:{name:"EodashMap"}},loading:{id:Symbol(),type:"web-component",widget:{link:"https://cdn.jsdelivr.net/npm/ldrs/dist/auto/mirage.js",tagName:"l-mirage",properties:{class:"align-self-center justify-self-center",size:"120",speed:"2.5",color:"#004170"}}},widgets:[l,d,{id:Symbol(),slidable:!1,title:"Tools",layout:{x:0,y:0,w:3,h:12},widget:{name:"List"},type:"internal"},{id:Symbol(),layout:{x:4,y:0,h:4,w:4},title:"Date Picker",type:"internal",widget:{name:"EodashDatePicker"}}]}});export{m as default};
