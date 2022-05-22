(self.webpackChunk=self.webpackChunk||[]).push([[773],{8320:(e,t,n)=>{"use strict";var r=n(821),o=n(9038),l=n(1966),a={class:"homescreen -z-10 m-0 bg-gradient-to-b from-gray-800 to-gray-600 text-gray-100"},s=(0,r.createTextVNode)(" for (var i = 0; i < 100; i++) { star = document.createElement(\"div\"); star.setAttribute(\"class\", \"star m-0 -z-5\"); var animation = 'animation: twinkle ' + (Math.random() * 5 + 5) + 's linear ' + (Math.random() * 1 + 1) + 's infinite; top: ' + Math.random() * window.innerHeight + 'px; left: ' + Math.random() * window.innerWidth + 'px;'; star.setAttribute(\"style\", animation); document.querySelector('.homescreen').appendChild(star); } ");const c={},d=(0,n(3744).Z)(c,[["render",function(e,t){return(0,r.openBlock)(),(0,r.createElementBlock)(r.Fragment,null,[(0,r.createElementVNode)("section",a,[(0,r.renderSlot)(e.$slots,"default")]),((0,r.openBlock)(),(0,r.createBlock)((0,r.resolveDynamicComponent)("script"),null,{default:(0,r.withCtx)((function(){return[s]})),_:1}))],64)}]]);(0,o.yP)({resolve:function(e){var t=n(3218)("./".concat(e)).default;return void 0===t.layout&&(t.layout=d),t},setup:function(e){var t=e.el,n=e.App,l=e.props,a=e.plugin;(0,r.createApp)({render:function(){return(0,r.h)(n,l)}}).use(a).component("Link",o.rU).component("Head",o.Fb).mount(t)},title:function(e){return"Cellardoor - ".concat(e)}}),l.I.init({delay:10,color:"white",showSpinner:!0})},2584:()=>{},1700:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>E});var r=n(821),o=n(9038),l=(0,r.createElementVNode)("title",null,"Contact",-1),a=(0,r.createElementVNode)("meta",{type:"description",content:"Contact information","head-key":"description"},null,-1),s={class:"bg-gray-800 text-gray-100 md:h-screen min-h-screen px-8 py-6"},c={class:"mx-5"},d=(0,r.createTextVNode)(" Retour "),i={class:"max-w-screen-lg mt-4 bg-gray-200 mx-auto px-8 grid gap-24 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 text-gray-900 rounded-lg shadow-lg"},u={class:""},m=(0,r.createElementVNode)("span",{class:"uppercase text-sm text-gray-600 font-bold"},"Nom",-1),p=["textContent"],x={class:"mt-4"},f=(0,r.createElementVNode)("span",{class:"uppercase text-sm text-gray-600 font-bold"},"Email",-1),g=["textContent"],v={class:"mt-4"},h=(0,r.createElementVNode)("span",{class:"uppercase text-sm text-gray-600 font-bold"},"Message",-1),y=["textContent"],V={class:"mt-4"},N=["disabled"],b=(0,r.createStaticVNode)('<div class="flex flex-col justify-start"><div><h2 class="text-4xl lg:text-4xl font-bold leading-tight">Parlons de tout !</h2></div><div class="mt-6 text-center"><img src="/assets/svg/Contact_SVG.svg" alt="Contact_SVG" class="w-full"></div><div class="text-gray-700 mt-10 text-center"><span class="tooltip tooltip-bottom" data-tip="+212 6 62 71 82 25">Vous n&#39;aimez pas les formulaires ?</span></div></div>',1);const E={setup:function(e){var t=(0,o.cI)({name:"",email:"",message:""}),n=function(){t.post("/contact")};return function(e,o){var E=(0,r.resolveComponent)("Head"),w=(0,r.resolveComponent)("Link");return(0,r.openBlock)(),(0,r.createElementBlock)(r.Fragment,null,[(0,r.createVNode)(E,null,{default:(0,r.withCtx)((function(){return[l,a]})),_:1}),(0,r.createElementVNode)("div",s,[(0,r.createElementVNode)("nav",c,[(0,r.createVNode)(w,{href:"/",class:"bg-transparent hover:bg-violet-500 text-violet-700 font-semibold hover:text-white py-2 px-4 border border-violet-500 hover:border-transparent rounded"},{default:(0,r.withCtx)((function(){return[d]})),_:1})]),(0,r.createElementVNode)("div",i,[(0,r.createElementVNode)("div",u,[(0,r.createElementVNode)("form",{onSubmit:o[3]||(o[3]=(0,r.withModifiers)((function(){return(0,r.unref)(n)&&(0,r.unref)(n).apply(void 0,arguments)}),["prevent"]))},[(0,r.createElementVNode)("div",null,[m,(0,r.withDirectives)((0,r.createElementVNode)("input",{"onUpdate:modelValue":o[0]||(o[0]=function(e){return(0,r.unref)(t).name=e}),class:"w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline",type:"text",placeholder:""},null,512),[[r.vModelText,(0,r.unref)(t).name]]),(0,r.unref)(t).errors.name?((0,r.openBlock)(),(0,r.createElementBlock)("div",{key:0,textContent:(0,r.toDisplayString)((0,r.unref)(t).errors.name),class:"text-red-500 text-xs mt-1"},null,8,p)):(0,r.createCommentVNode)("",!0)]),(0,r.createElementVNode)("div",x,[f,(0,r.withDirectives)((0,r.createElementVNode)("input",{"onUpdate:modelValue":o[1]||(o[1]=function(e){return(0,r.unref)(t).email=e}),class:"w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline",type:"text"},null,512),[[r.vModelText,(0,r.unref)(t).email]]),(0,r.unref)(t).errors.email?((0,r.openBlock)(),(0,r.createElementBlock)("div",{key:0,textContent:(0,r.toDisplayString)((0,r.unref)(t).errors.email),class:"text-red-500 text-xs mt-1"},null,8,g)):(0,r.createCommentVNode)("",!0)]),(0,r.createElementVNode)("div",v,[h,(0,r.withDirectives)((0,r.createElementVNode)("textarea",{"onUpdate:modelValue":o[2]||(o[2]=function(e){return(0,r.unref)(t).message=e}),style:{resize:"none"},class:"w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"},null,512),[[r.vModelText,(0,r.unref)(t).message]]),(0,r.unref)(t).errors.message?((0,r.openBlock)(),(0,r.createElementBlock)("div",{key:0,textContent:(0,r.toDisplayString)((0,r.unref)(t).errors.message),class:"text-red-500 text-xs mt-1"},null,8,y)):(0,r.createCommentVNode)("",!0)]),(0,r.createElementVNode)("div",V,[(0,r.createElementVNode)("button",{type:"submit",disabled:(0,r.unref)(t).processing,class:"uppercase text-sm font-bold tracking-wide bg-violet-800 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"}," Envoyer ",8,N)])],32)]),b])])],64)}}}},6103:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>g});var r=n(821),o=(0,r.createElementVNode)("title",null,"Index",-1),l=(0,r.createElementVNode)("meta",{type:"description",content:"Je m'appelle Yassine Laouina, un passionné de l'informatique et des nouvelles technologies.","head-key":"description"},null,-1),a={class:"min-h-screen flex flex-col justify-center p-6 mx-auto lg:py-24 lg:flex-row lg:justify-between"},s={class:"flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left"},c=(0,r.createElementVNode)("h1",{class:"font-bold leading-none sm:text-2xl md:text-4xl lg:text-5xl"},[(0,r.createElementVNode)("span",{class:"text-violet-400"},"Bonjour,")],-1),d=(0,r.createElementVNode)("p",{class:"mt-6 mb-8 text-lg sm:mb-12"},[(0,r.createTextVNode)(" Je m'appelle Yassine Laouina, "),(0,r.createElementVNode)("br",{class:"hidden md:inline lg:hidden"}),(0,r.createTextVNode)(" un passionné de l'informatique et des nouvelles technologies. ")],-1),i={class:"flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start"},u=(0,r.createElementVNode)("a",{rel:"noopener noreferrer",href:"https://www.linkedin.com/in/laouina-yassine",target:"_blank",class:"px-8 py-3 text-lg font-semibold rounded bg-violet-400 text-coolGray-900"},"LinkedIn",-1),m=(0,r.createElementVNode)("a",{rel:"noopener noreferrer",href:"https://github.com/CeIIardoor",target:"_blank",class:"px-8 py-3 text-lg font-semibold border rounded"},"Github",-1),p=(0,r.createTextVNode)("Contact"),x=(0,r.createElementVNode)("div",{class:"flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"},[(0,r.createElementVNode)("img",{src:"/assets/svg/Business_SVG.svg",alt:"",class:"object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"})],-1);const f={},g=(0,n(3744).Z)(f,[["render",function(e,t){var n=(0,r.resolveComponent)("Head"),f=(0,r.resolveComponent)("Link");return(0,r.openBlock)(),(0,r.createElementBlock)(r.Fragment,null,[(0,r.createVNode)(n,null,{default:(0,r.withCtx)((function(){return[o,l]})),_:1}),(0,r.createElementVNode)("div",a,[(0,r.createElementVNode)("div",s,[c,d,(0,r.createElementVNode)("div",i,[u,m,(0,r.createVNode)(f,{rel:"noopener noreferrer",href:"/contact",class:"px-8 py-3 text-lg font-semibold border rounded"},{default:(0,r.withCtx)((function(){return[p]})),_:1})])]),x])],64)}]])},5919:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>i});var r=n(821),o=(0,r.createElementVNode)("title",null,"Merci",-1),l={class:"bg-gray-800 text-gray-100 h-screen overflow-hidden px-8 m-0 py-6"},a={class:"mx-5"},s=(0,r.createTextVNode)(" Retour "),c=(0,r.createElementVNode)("div",{class:"max-w-screen-lg bg-gray-200 mx-auto px-8 md:px-12 lg:px-16 xl:px-32 py-16 mt-8 text-gray-900 rounded-lg shadow-lg"},[(0,r.createElementVNode)("div",{class:"flex flex-col justify-start"},[(0,r.createElementVNode)("div",null,[(0,r.createElementVNode)("h2",{class:"text-4xl lg:text-4xl font-bold leading-tight"},"Merci pour votre mot,")]),(0,r.createElementVNode)("div",{class:"text-gray-700 mt-10"}," Je reviendrai vers vous dans les plus bref délais. A bientôt ! ")])],-1);const d={},i=(0,n(3744).Z)(d,[["render",function(e,t){var n=(0,r.resolveComponent)("Head"),d=(0,r.resolveComponent)("Link");return(0,r.openBlock)(),(0,r.createElementBlock)(r.Fragment,null,[(0,r.createVNode)(n,null,{default:(0,r.withCtx)((function(){return[o]})),_:1}),(0,r.createElementVNode)("div",l,[(0,r.createElementVNode)("nav",a,[(0,r.createVNode)(d,{href:"/",class:"bg-transparent hover:bg-violet-500 text-violet-700 font-semibold hover:text-white py-2 px-4 border border-violet-500 hover:border-transparent rounded"},{default:(0,r.withCtx)((function(){return[s]})),_:1})]),c])],64)}]])},3218:(e,t,n)=>{var r={"./LandingPage/Contact":1700,"./LandingPage/Contact.vue":1700,"./LandingPage/Index":6103,"./LandingPage/Index.vue":6103,"./LandingPage/ThankYou":5919,"./LandingPage/ThankYou.vue":5919};function o(e){var t=l(e);return n(t)}function l(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=l,e.exports=o,o.id=3218},4654:()=>{}},e=>{var t=t=>e(e.s=t);e.O(0,[170,898],(()=>(t(8320),t(2584))));e.O()}]);