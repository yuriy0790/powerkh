var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},l=e.parcelRequired7c6;null==l&&((l=function(e){if(e in t)return t[e].exports;if(e in o){var l=o[e];delete o[e];var n={id:e,exports:{}};return t[e]=n,l.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},e.parcelRequired7c6=l);l("joSRe");document.querySelector(".outsourceProjects");const n=document.querySelector(".burger-btn");if(n){const e=document.querySelector(".burger-menu");n.addEventListener("click",(function(t){document.body.classList.toggle("_lock"),n.classList.toggle("_active"),e.classList.toggle("_active")}))}const r=e=>e.split("/").pop().split(".")[0];let i=r(location.pathname);if(""===i)document.querySelector(".burger-menu__list").firstElementChild.classList.add("active");else{const e=document.querySelectorAll(".main-navigation a");for(let t of e)r(t.href)===i&&t.parentElement.classList.add("active")}const c=e=>e.split("/").pop().split(".")[0],s=c(location.pathname),a=document.querySelectorAll(".footer a");for(let e of a)c(e.href)===s&&e.parentElement.classList.add("active");
//# sourceMappingURL=index.c8e17302.js.map
