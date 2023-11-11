(()=>{var e={204:()=>{}},t={};function r(i){var n=t[i];if(void 0!==n)return n.exports;var s=t[i]={exports:{}};return e[i](s,s.exports,r),s.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var i in t)r.o(t,i)&&!r.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var i=t.getElementsByTagName("script");if(i.length)for(var n=i.length-1;n>-1&&!e;)e=i[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),(()=>{"use strict";var e=r(204),t=r.n(e);const i=new class{constructor(){this.widget=document.querySelector(".widget"),this.widgetContainer=this.widget.querySelector(".container"),this.main=this.widget.querySelector("main"),this.containers=null,this.containersP=null}articleTemplate(e="",t="",r='\n  <svg width="50" heigth="50">\n    <rect x = "0" y = "0" width = "50" height = "50" fill = "#a7a7a7"/>\n  </svg>\n  '){return`\n    <div class="wrapper">\n      <h4>${e}</h4>\n      <article>\n        ${r}\n        <p>${t}</p>\n      </article>\n    </div>\n    `}getDOM(){this.containers=this.main.querySelectorAll(".wrapper"),this.containersP=document.querySelectorAll(".wrapper p")}},n=new class{constructor(e){this.gui=e,this.url="https://dimafdr.onrender.com/"}init(){this.showMain(),this.sendXHR(),this.listenServiceWorker()}async sendXHR(){this.gui.getDOM(),this.gui.containers.forEach((e=>e.classList.add("stub")));const e=await fetch(this.url),t=await e.json();this.gui.containers.forEach((e=>e.classList.remove("stub"))),this.gui.main.innerHTML="",t.forEach((e=>{this.gui.main.innerHTML+=this.gui.articleTemplate(e.title,e.description,`<img src="${e.image}">`)}))}listenServiceWorker(){"serviceWorker"in navigator&&navigator.serviceWorker.register("./service.worker.js",{scope:"./"}).then((e=>{console.log(`Registration succeeded. Scope is ${e.scope}`)})).catch((e=>{console.log(`Registration failed with ${e}`)}))}async showFile(e){const r=e.target.files[0],i=await this.readFile(r),n=new(t());n.addEventListener("message",(({data:e})=>{this.gui.result.textContent=e.length,console.log(e),n.terminate()})),n.postMessage(i)}readFile(e){return new Promise(((t,r)=>{const i=new FileReader;i.addEventListener("load",(e=>{t(e.target.result)})),i.addEventListener("error",(e=>{r(e.target.error)})),i.readAsText(e)}))}showMain(){this.gui.main.innerHTML+=this.gui.articleTemplate(),this.gui.main.innerHTML+=this.gui.articleTemplate()}test(){!function(){let e=0;for(let t=0;t<1e9;t+=1)e+=1}()}workerMessages(){}}(i);n.init(),r.p,r.p})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixJQUFJSyxLQUFLd0IsV0FBYW5ELEtBQUtzQixJQUFJUSxrQkFDcEM5QixLQUFLc0IsSUFBSUssS0FBS3dCLFdBQWFuRCxLQUFLc0IsSUFBSVEsaUJBQ3RDLENBRUFzRCxJQUFBQSxJQUNFLFdBQ0UsSUFBSVYsRUFBUyxFQUNiLElBQUssSUFBSXhELEVBQUksRUFBR0EsRUFBSSxJQUFZQSxHQUFLLEVBQ25Dd0QsR0FBVSxDQUdkLENBQ0FXLEVBQ0YsQ0FNQUMsY0FBQUEsR0FRRSxHRi9Gb0JoRSxHQUN4QmMsRUFBTUUsTyIsInNvdXJjZXMiOlsid2VicGFjazovL3dvcmtlcnNsb2FkaW5nL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dvcmtlcnNsb2FkaW5nL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dvcmtlcnNsb2FkaW5nL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93b3JrZXJzbG9hZGluZy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dvcmtlcnNsb2FkaW5nL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd29ya2Vyc2xvYWRpbmcvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd29ya2Vyc2xvYWRpbmcvLi9zcmMvanMvYXBwLmpzIiwid2VicGFjazovL3dvcmtlcnNsb2FkaW5nLy4vc3JjL2pzL0d1aS5qcyIsIndlYnBhY2s6Ly93b3JrZXJzbG9hZGluZy8uL3NyYy9qcy9Mb2dpYy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuaW1wb3J0IExvZ2ljIGZyb20gJy4vTG9naWMuanMnO1xuaW1wb3J0IEd1aSBmcm9tICcuL0d1aS5qcyc7XG5cbmNvbnN0IGd1aSA9IG5ldyBHdWkoKTtcbmNvbnN0IGxvZ2ljID0gbmV3IExvZ2ljKGd1aSk7XG5sb2dpYy5pbml0KCk7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHdWkge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLndpZGdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aWRnZXQnKTtcbiAgICB0aGlzLndpZGdldENvbnRhaW5lciA9IHRoaXMud2lkZ2V0LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcbiAgICB0aGlzLm1haW4gPSB0aGlzLndpZGdldC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG4gICAgdGhpcy5jb250YWluZXJzID0gbnVsbDtcbiAgICB0aGlzLmNvbnRhaW5lcnNQID0gbnVsbDtcbiAgICAvLyB0aGlzLmlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcbiAgICAvLyB0aGlzLnJlc3VsdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWlkPXJlc3VsdC10ZXh0XScpO1xuICAgIC8vIHRoaXMuYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uJyk7XG4gIH1cblxuICBhcnRpY2xlVGVtcGxhdGUodGl0bGUgPSAnJywgZGVzY3JpcHRpb24gPSAnJywgaW1hZ2UgPSBgXG4gIDxzdmcgd2lkdGg9XCI1MFwiIGhlaWd0aD1cIjUwXCI+XG4gICAgPHJlY3QgeCA9IFwiMFwiIHkgPSBcIjBcIiB3aWR0aCA9IFwiNTBcIiBoZWlnaHQgPSBcIjUwXCIgZmlsbCA9IFwiI2E3YTdhN1wiLz5cbiAgPC9zdmc+XG4gIGApIHtcbiAgICAvLyDQs9C10L3QtdGA0Y/RgtGB0Y8g0L/QvtGB0LvQtSDQt9Cw0L/QuNGB0Lgg0LIg0LrQu9Cw0YHRgSDQs9GD0Lg6XG4gICAgLy8gMS4g0L/QvtC70YPRh9C40YLRjCDQvtGC0LTQtdC70YzQvdGL0Lwg0LfQsNC/0YDQvtGB0L7QvC5cbiAgICByZXR1cm4gYFxuICAgIDxkaXYgY2xhc3M9XCJ3cmFwcGVyXCI+XG4gICAgICA8aDQ+JHt0aXRsZX08L2g0PlxuICAgICAgPGFydGljbGU+XG4gICAgICAgICR7aW1hZ2V9XG4gICAgICAgIDxwPiR7ZGVzY3JpcHRpb259PC9wPlxuICAgICAgPC9hcnRpY2xlPlxuICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBnZXRET00oKSB7XG4gICAgdGhpcy5jb250YWluZXJzID0gdGhpcy5tYWluLnF1ZXJ5U2VsZWN0b3JBbGwoJy53cmFwcGVyJyk7XG4gICAgdGhpcy5jb250YWluZXJzUCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy53cmFwcGVyIHAnKTtcbiAgfVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuaW1wb3J0IFdvcmtlciBmcm9tICcuL3dlYi53b3JrZXIuanMnO1xuaW1wb3J0ICcuL3NlcnZpY2Uud29ya2VyLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9naWMge1xuICBjb25zdHJ1Y3RvcihndWkpIHtcbiAgICB0aGlzLmd1aSA9IGd1aTtcbiAgICAvLyB0aGlzLnVybCA9ICdodHRwOi8vbG9jYWxob3N0OjcwNzAnO1xuICAgIHRoaXMudXJsID0gJ2h0dHBzOi8vZGltYWZkci5vbnJlbmRlci5jb20vJztcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5zaG93TWFpbigpO1xuICAgIHRoaXMuc2VuZFhIUigpO1xuICAgIHRoaXMubGlzdGVuU2VydmljZVdvcmtlcigpO1xuICB9XG5cbiAgYXN5bmMgc2VuZFhIUigpIHtcbiAgICAvLyDQv9C+0LrQsCDQt9Cw0LPRgNGD0LfQutCwIC0g0LrQu9Cw0YHRgSDQt9Cw0LPQu9GD0YjQutCwXG4gICAgdGhpcy5ndWkuZ2V0RE9NKCk7XG4gICAgdGhpcy5ndWkuY29udGFpbmVycy5mb3JFYWNoKChjb250YWluZXIpID0+IGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzdHViJykpO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godGhpcy51cmwpO1xuICAgIGNvbnN0IGFydGljbGVzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIC8vINC/0L7RgdC70LUg0LfQsNCz0YDRg9C30LrQuCAtINGB0L3Rj9GC0YxcbiAgICB0aGlzLmd1aS5jb250YWluZXJzLmZvckVhY2goKGNvbnRhaW5lcikgPT4gY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3N0dWInKSk7XG4gICAgLy8g0L/QtdGA0LXRgNC40YHQvtCy0LrQsCB3cmFwcGVyc1xuICAgIHRoaXMuZ3VpLm1haW4uaW5uZXJIVE1MID0gJyc7XG4gICAgYXJ0aWNsZXMuZm9yRWFjaCgoYXJ0aWNsZSkgPT4ge1xuICAgICAgdGhpcy5ndWkubWFpbi5pbm5lckhUTUwgKz0gdGhpcy5ndWkuYXJ0aWNsZVRlbXBsYXRlKFxuICAgICAgICBhcnRpY2xlLnRpdGxlLCBhcnRpY2xlLmRlc2NyaXB0aW9uLCBgPGltZyBzcmM9XCIke2FydGljbGUuaW1hZ2V9XCI+YCxcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICBsaXN0ZW5TZXJ2aWNlV29ya2VyKCkge1xuICAgIGlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XG4gICAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3RlcignLi9zZXJ2aWNlLndvcmtlci5qcycsIHsgc2NvcGU6ICcuLycgfSlcbiAgICAgICAgLnRoZW4oKHJlZykgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGBSZWdpc3RyYXRpb24gc3VjY2VlZGVkLiBTY29wZSBpcyAke3JlZy5zY29wZX1gKTtcbiAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coYFJlZ2lzdHJhdGlvbiBmYWlsZWQgd2l0aCAke2Vycm9yfWApO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBzaG93RmlsZShldnQpIHtcbiAgICBjb25zdCBmaWxlID0gKGV2dC50YXJnZXQuZmlsZXNbMF0pO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCB0aGlzLnJlYWRGaWxlKGZpbGUpO1xuXG4gICAgY29uc3Qgd29ya2VyID0gbmV3IFdvcmtlcigpO1xuICAgIHdvcmtlci5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgKHsgZGF0YTogcmVzdWx0IH0pID0+IHtcbiAgICAgIHRoaXMuZ3VpLnJlc3VsdC50ZXh0Q29udGVudCA9IHJlc3VsdC5sZW5ndGg7XG4gICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgd29ya2VyLnRlcm1pbmF0ZSgpO1xuICAgIH0pO1xuICAgIHdvcmtlci5wb3N0TWVzc2FnZShjb250ZW50KTtcbiAgfVxuXG4gIHJlYWRGaWxlKGZpbGUpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgIHJlYWRlci5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKGV2dCkgPT4ge1xuICAgICAgICByZXNvbHZlKGV2dC50YXJnZXQucmVzdWx0KTtcbiAgICAgIH0pO1xuICAgICAgcmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgKGV2dCkgPT4ge1xuICAgICAgICByZWplY3QoZXZ0LnRhcmdldC5lcnJvcik7XG4gICAgICB9KTtcbiAgICAgIHJlYWRlci5yZWFkQXNUZXh0KGZpbGUpO1xuICAgIH0pO1xuICB9XG5cbiAgc2hvd01haW4oKSB7XG4gICAgdGhpcy5ndWkubWFpbi5pbm5lckhUTUwgKz0gdGhpcy5ndWkuYXJ0aWNsZVRlbXBsYXRlKCk7XG4gICAgdGhpcy5ndWkubWFpbi5pbm5lckhUTUwgKz0gdGhpcy5ndWkuYXJ0aWNsZVRlbXBsYXRlKCk7XG4gIH1cblxuICB0ZXN0KCkge1xuICAgIGZ1bmN0aW9uIHNlbmRSZXNwb25zZSgpIHtcbiAgICAgIGxldCByZXN1bHQgPSAwO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDAwMDAwMDAwOyBpICs9IDEpIHtcbiAgICAgICAgcmVzdWx0ICs9IDE7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBzZW5kUmVzcG9uc2UoKTtcbiAgfVxuXG4gIC8vIHRoaXMuZ3VpLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldnQpID0+IHRoaXMuc2hvd0ZpbGUoZXZ0KSk7XG4gIC8vIHRoaXMuZ3VpLmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNvbnNvbGUubG9nKCdjbGlja1xcbicpKTtcbiAgLy8gdGhpcy50ZXN0KCk7XG4gIC8vIHRoaXMud29ya2VyTWVzc2FnZXMoKTtcbiAgd29ya2VyTWVzc2FnZXMoKSB7XG4gICAgLy8gY29uc3Qgd29ya2VyID0gbmV3IFdvcmtlcigpO1xuICAgIC8vIHdvcmtlci5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgKGUpID0+IHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKGUpO1xuICAgIC8vIH0pO1xuICAgIC8vIHdvcmtlci5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIChlKSA9PiB7XG4gICAgLy8gICBjb25zb2xlLmxvZyhlKTtcbiAgICAvLyB9KTtcbiAgICAvLyB3b3JrZXIucG9zdE1lc3NhZ2UoJ21lc3NhZ2UgZnJvbSBtYWluJyk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJjYWNoZWRNb2R1bGUiLCJ1bmRlZmluZWQiLCJleHBvcnRzIiwibW9kdWxlIiwiX193ZWJwYWNrX21vZHVsZXNfXyIsIm4iLCJnZXR0ZXIiLCJfX2VzTW9kdWxlIiwiZCIsImEiLCJkZWZpbml0aW9uIiwia2V5IiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsImciLCJnbG9iYWxUaGlzIiwidGhpcyIsIkZ1bmN0aW9uIiwiZSIsIndpbmRvdyIsIm9iaiIsInByb3AiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJzY3JpcHRVcmwiLCJpbXBvcnRTY3JpcHRzIiwibG9jYXRpb24iLCJkb2N1bWVudCIsImN1cnJlbnRTY3JpcHQiLCJzcmMiLCJzY3JpcHRzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJsZW5ndGgiLCJpIiwiRXJyb3IiLCJyZXBsYWNlIiwicCIsImd1aSIsImNvbnN0cnVjdG9yIiwid2lkZ2V0IiwicXVlcnlTZWxlY3RvciIsIndpZGdldENvbnRhaW5lciIsIm1haW4iLCJjb250YWluZXJzIiwiY29udGFpbmVyc1AiLCJhcnRpY2xlVGVtcGxhdGUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJnZXRET00iLCJxdWVyeVNlbGVjdG9yQWxsIiwibG9naWMiLCJ1cmwiLCJpbml0Iiwic2hvd01haW4iLCJzZW5kWEhSIiwibGlzdGVuU2VydmljZVdvcmtlciIsImZvckVhY2giLCJjb250YWluZXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZXNwb25zZSIsImZldGNoIiwiYXJ0aWNsZXMiLCJqc29uIiwicmVtb3ZlIiwiaW5uZXJIVE1MIiwiYXJ0aWNsZSIsIm5hdmlnYXRvciIsInNlcnZpY2VXb3JrZXIiLCJyZWdpc3RlciIsInNjb3BlIiwidGhlbiIsInJlZyIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImVycm9yIiwic2hvd0ZpbGUiLCJldnQiLCJmaWxlIiwidGFyZ2V0IiwiZmlsZXMiLCJjb250ZW50IiwicmVhZEZpbGUiLCJ3b3JrZXIiLCJXb3JrZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiZGF0YSIsInJlc3VsdCIsInRleHRDb250ZW50IiwidGVybWluYXRlIiwicG9zdE1lc3NhZ2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJyZWFkQXNUZXh0IiwidGVzdCIsInNlbmRSZXNwb25zZSIsIndvcmtlck1lc3NhZ2VzIl0sInNvdXJjZVJvb3QiOiIifQ==