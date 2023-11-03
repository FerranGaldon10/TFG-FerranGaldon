import{j as s,a as e,u as d,r as c,C as f,b as v,N as w,i as x,g as N,c as y,d as j,R as C,I as k}from"./index-34fd5164.js";import{F as S,a as $}from"./Footer-ec49ea3f.js";function P(){return s("div",{className:"w-screen h-screen mt-16 bg-red-300 flex",children:[e("div",{className:"w-1/3 h-screen image-main1 bg-cover bg-center md:w-full lg:w-1/2"}),e("div",{className:"w-1/3 h-screen image-main2 bg-cover bg-center md:hidden lg:block lg:w-1/2"}),e("div",{className:"w-1/3 h-screen image-main3 bg-cover bg-center md:hidden lg:hidden"}),s("div",{className:"absolute flex flex-col w-full h-full justify-center items-center",children:[e("img",{src:"/Camals_MainPage.png",className:"w-2/3 h-auto md:hidden",alt:""}),e("img",{src:"/Camals_MainPage_md.png",className:"w-80 h-auto hidden md:block",alt:""}),e("img",{src:"/Camals_MainPage_Slogan.png",className:"w-80 md:w-44 h-auto",alt:""})]})]})}function I(){const[l,m]=d("global"),{addItemToCart:h,products:n}=c.exports.useContext(f);console.log("prueba2:",n);const i=n.filter(t=>t.special==="bestseller"),a=t=>{const b=`/pages/App3.html${`?name=${t.name}&price=${t.price}&img=${t.img}&imghover=${t.imghover}&size=${t.size}&description=${t.description}`}`;window.location.href=b},[r,o]=c.exports.useState(null),u=t=>{o(t)},p=()=>{o(null)};return c.exports.useEffect(()=>{n.forEach(t=>{const g=new Image;g.src=t.imghover})},[n]),s("div",{className:"pt-20 pb-20",children:[e("h1",{className:" pb-10 md:pt-15 text-center text-sm font-semibold text-black",children:l("bestsellers.title")}),e("div",{className:"grid grid-cols-4 md:grid-cols-1 md:grid-flow-row md:grid-rows-4 lg:grid-cols-2 lg:grid-flow-row lg:grid-rows-2 w-screen justify-items-center justify-content-center ",children:i.map(t=>s("div",{className:"md:mb-4",children:[e("a",{href:"#",onClick:()=>a(t),children:e("img",{className:"size-bestsellers md:h-80 md:w-80 items-center text-center imagen-hover",src:r===t?t.imghover:t.img,onMouseEnter:()=>u(t),onMouseLeave:p})}),s("div",{className:"flex justify-center text-black text-xs mt-4 font-semibold",children:[t.name," |"," ",s("span",{className:"font-light text",children:[" $",t.price]})]})]},t.id))}),e("div",{className:"flex mt-10 justify-center items-center",children:e("button",{className:"text-white bg-black px-8 py-3 text-sm font-medium hover:bg-gray-800 transition duration-300",children:e("a",{href:"/pages/App2.html",children:l("bestsellers.button")})})})]})}function M(){const[l,m]=d("global"),h=()=>{const r="/pages/App2.html?filtro=hoddie";window.location.assign(r)},n=()=>{const r="/pages/App2.html?filtro=t-shirts";window.location.assign(r)},i=()=>{const a="/pages/App2.html";window.location.assign(a)};return s("div",{className:"grid grid-cols-3 md:grid-cols-1 md:grid-flow-row md:grid-rows-3 w-screen z-10",children:[e("button",{onClick:n,className:"bg-tshirts m-4 bg-cover bg-center flex justify-center items-center text-white font-bold text-xl hover:brightness-90 saturate-100 transition-all duration-500",children:l("sections.tshirts")}),e("button",{onClick:h,className:"bg-hoddies m-4  bg-cover bg-center flex justify-center items-center text-black font-bold text-xl hover:brightness-90 saturate-100 transition-all duration-500 z-10",children:l("sections.hoodies")}),e("button",{onClick:i,className:"bg-allprod m-4 bg-cover bg-center flex justify-center items-center text-white font-bold text-xl hover:brightness-90 saturate-100 transition-all duration-500",children:l("sections.allprod")})]})}function E(){const[l,m]=d("global"),{addItemToCart:h,products:n}=c.exports.useContext(f);console.log("prueba2:",n);const i=n.filter(t=>t.type==="accesories"),a=t=>{const b=`/pages/App3.html${`?name=${t.name}&price=${t.price}&img=${t.img}&imghover=${t.imghover}&size=${t.size}&description=${t.description}`}`;window.location.href=b},[r,o]=c.exports.useState(null),u=t=>{o(t)},p=()=>{o(null)};return c.exports.useEffect(()=>{n.forEach(t=>{const g=new Image;g.src=t.imghover})},[n]),s("div",{className:"pt-20 pb-20",children:[e("h1",{className:" pb-10 md:pt-15 text-center text-sm font-semibold text-black",children:l("accesories.title")}),e("div",{className:"grid grid-cols-4 md:grid-cols-1 md:grid-flow-row md:grid-rows-4 lg:grid-cols-2 lg:grid-flow-row lg:grid-rows-2 w-screen justify-items-center justify-content-center ",children:i.map(t=>s("div",{className:"md:mb-4",children:[e("a",{href:"#",onClick:()=>a(t),children:e("img",{className:"size-bestsellers md:h-80 md:w-80 items-center text-center imagen-hover",src:r===t?t.imghover:t.img,onMouseEnter:()=>u(t),onMouseLeave:p})}),s("div",{className:"flex justify-center text-black text-xs mt-4 font-semibold",children:[t.name," |"," ",s("span",{className:"font-light text",children:[" $",t.price]})]})]},t.id))})]})}function A(){const[l,m]=d("global");return s("div",{className:"w-screen h-screen bg-cover bg-center flex flex-col items-center justify-center relative overflow-hidden text-center mx-auto my-auto p-0 pb-6",style:{width:"98vw",height:"100vh"},children:[e("video",{className:"object-cover h-full w-full absolute top-0 left-0",playsInline:!0,autoPlay:!0,loop:!0,muted:!0,poster:"",children:e("source",{src:"videos/Espacio-Background.mp4",type:"video/mp4"})}),s("div",{className:"relative",children:[e("p",{className:"text-white font-medium text-2xl mb-4",children:"INFINITY COLLECTION"}),e("button",{className:"text-white border px-8 py-3 text-sm font-medium hover:bg-cyan-600 transition duration-300",children:e("a",{href:"/pages/App4.html",children:l("collection.button")})})]})]})}function T(){const[l,m]=d("global"),[h,n]=c.exports.useState(!1),i=async r=>{r.preventDefault(),(await fetch("https://tfg-ferrangaldon-backend.onrender.com/contacto",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({nombre:r.target.nombre.value,email:r.target.email.value,asunto:r.target.asunto.value,mensaje:r.target.mensaje.value})})).ok&&n(!0)},a=()=>{n(!1),window.location.reload()};return e("div",{children:s("div",{className:"grid grid-cols-2 h-auto w-full md:grid-cols-1 md:grid-flow-row md:grid-rows-2",children:[s("div",{className:"h-auto pr-8 pl-28 md:pr-3 md:pl-3",children:[e("h1",{className:"text-5xl font-bold mt-11 mb-7 md:text-3xl md:mb-5 md:mt-9",children:l("contact.title")}),e("p",{className:"text-justify mr-8 text-sm leading-7 md:mr-0 ",children:l("contact.description")}),e("hr",{className:"mt-8 mb-8 border-black hrwidth"}),s("p",{className:"flex mt-4 mb-4 ",children:[e("img",{className:"w-6 h-6 mr-6",src:"/map.png",alt:""}),e("p",{className:"text-sm",children:l("contact.ubi")})]}),s("p",{className:"flex mt-4 mb-4",children:[e("img",{className:"w-6 h-6 mr-6",src:"/email.png",alt:""}),e("p",{className:"font-light text-sm text-black opacity-70",children:"camalsproject@gmail.com"})]})]}),s("div",{className:"h-auto pl-8 pr-28 pt-14 md:pl-3 md:pr-3 md:pt-0",children:[s("form",{onSubmit:i,children:[s("div",{children:[s("p",{className:"text-lg",children:[l("contact.name")," ",e("span",{className:"text-red-700 font-extralight",children:"*"})]}),e("input",{className:"w-full h-12 mb-5 p-2 border bg-gray-50",type:"text",name:"nombre",required:!0})]}),s("div",{children:[s("p",{className:"text-lg",children:[l("contact.email")," ",e("span",{className:"text-red-700 font-extralight",children:"*"})]}),e("input",{className:"w-full h-12 mb-5 p-2 border bg-gray-50",type:"text",name:"email",required:!0})]}),s("div",{children:[s("p",{className:"text-lg",children:[l("contact.subject")," ",e("span",{className:"text-red-700 font-extralight",children:"*"})]}),e("input",{className:"w-full h-12 mb-5 p-2 border bg-gray-50",type:"text",name:"asunto",required:!0})]}),s("div",{children:[s("p",{className:"text-lg",children:[l("contact.message")," ",e("span",{className:"text-red-700 font-extralight",children:"*"})]}),e("textarea",{className:"w-full mb-5 p-3 border bg-gray-50",rows:"7",cols:"80",name:"mensaje",placeholder:l("contact.placeholder"),required:!0})]}),e("button",{type:"submit",className:"w-full h-12 bg-black text-gray-100 font-light mb-8",children:l("contact.button")})]}),h&&e("div",{className:"fixed z-10 inset-0 flex items-center justify-center",children:s("div",{className:"bg-cyan-500 relative p-5 rounded",children:[e("button",{className:"absolute top-0 right-0 m-2 mr-4 text-white",onClick:a,children:"X"}),e("div",{className:"text-center font-bold m-3 mt-5 text-white",children:l("contact.popup")})]})})]})]})})}function z(){const[l,m]=d("global");return e(v,{children:e("main",{className:"",children:s("div",{children:[e(w,{}),e(P,{}),e(I,{}),e(M,{}),e(E,{}),e("div",{className:"pt-20 ",children:e("h1",{className:" pb-10 md:pt-15 text-center text-sm font-semibold text-black",children:l("collection.title")})}),e(A,{}),e(T,{}),e(S,{}),e("hr",{className:"border-gray-800 border-1"}),e($,{}),e("hr",{className:"border-gray-800 border-1"}),e("div",{className:"bg-black text-white flex justify-center p-5 md:text-center text-xs",children:e("h4",{className:"font-thin",children:l("footer.end")})})]})})})}x.init({interpolation:{escapeValue:!1},lng:"en",resources:{es:{global:N},en:{global:y}}});j.createRoot(document.getElementById("root")).render(e(C.StrictMode,{children:e(k,{i18n:x,children:e(z,{})})}));