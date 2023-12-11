import{s as l,j as s,c,b as a,r as o,f as d}from"./index-lb1IasGz.js";import{A as x,s as p,e as f}from"./AdvertsCard-DZu9EfhX.js";const u=l.ul`
  display: flex;
  gap: 50px 29px;
  flex-wrap: wrap;
`,h=({favoritesAdverts:t})=>s.jsx(u,{children:t.map(e=>s.jsx("li",{children:s.jsx(x,{item:e})},e.id))}),j="/Rental_car/assets/no-results-nrrqrLxK.png",m=()=>{const t=c(),e=a(p),i=a(f);let r=[];return r=e.filter(n=>i.includes(n.id)),o.useEffect(()=>{t(d())},[t]),s.jsx(s.Fragment,{children:r.length>0?s.jsx(h,{favoritesAdverts:r}):s.jsx("div",{style:{display:"flex",justifyContent:"center"},children:s.jsx("img",{src:j,style:{width:"50%",height:"50%",display:"flex",justifyContent:"center"}})})})};export{m as default};
