import{aL as e}from"./.pnpm-Bx6NWvas.js";const t=e.create({baseURL:"https://www.shmilyyy.cn/api",timeout:1e4,validateStatus:e=>e>=200&&e<300});function r(e,r,o,s){switch(e){case"GET":return t.get(r,{params:o,...s});case"POST":return t.post(r,o,s);case"PUT":return t.put(r,o);case"DELETE":return t.delete(r,{data:o});default:throw new Error("Invalid request method")}}t.interceptors.request.use((e=>(e.headers={token:localStorage.getItem("token")||""},e))),t.interceptors.response.use((e=>e.data),(e=>{let t="";if(e.response){switch(e.response.status){case 401:t="TOKEN过期";break;case 404:t="页面丢失了";break;case 403:t="您无权访问";break;case 500:t="服务器繁忙";break;default:t="网络异常，请稍后重试"}}else t="网络异常，请稍后重试";return Promise.reject(new Error(t))}));const o={...{Login:Object.freeze(Object.defineProperty({__proto__:null,getUserInfo_AJAX:()=>r("GET","/user/getUser"),login_AJAX:e=>r("POST","/user/login",e),login_github_AJAX:e=>r("POST","/user/auth/github",e),register_AJAX:e=>r("POST","/user/registered",e),updateUserInfo_AJAX:e=>r("POST","/user/updateUserinfo",e)},Symbol.toStringTag,{value:"Module"})),Type:Object.freeze(Object.defineProperty({__proto__:null,get_category_list_AJAX:e=>r("POST","/category/getList",e)},Symbol.toStringTag,{value:"Module"})),Blogs:Object.freeze(Object.defineProperty({__proto__:null,get_blogs_detail_AXJAX:e=>r("GET","/blogs/getById",e),get_blogs_list_AXJAX:e=>r("POST","/blogs/getList",e),like_blogs_AJAX:e=>r("POST","/like",e)},Symbol.toStringTag,{value:"Module"})),Message:Object.freeze(Object.defineProperty({__proto__:null,add_message_AXJAX:e=>r("POST","/comment/add",e),get_message_list_AJAX:e=>r("POST","/comment/list",e)},Symbol.toStringTag,{value:"Module"})),Score:Object.freeze(Object.defineProperty({__proto__:null,add_score_AXJAX:e=>r("POST","/score/addScore",e),getScoreList_AJAX:()=>r("GET","/score/getScoreList"),getScore_AJAX:e=>r("GET","/score/getScore",e)},Symbol.toStringTag,{value:"Module"}))},...Object.freeze(Object.defineProperty({__proto__:null,getCode_AJAX:e=>r("POST","/sendCode",e),getFrontCommits_AJAX:()=>r("GET","/frontGit/commits"),uploadImg_AJAX:e=>r("POST","/upload",e.file,{headers:{"Content-Type":"multipart/form-data"}})},Symbol.toStringTag,{value:"Module"}))};export{o as A};
