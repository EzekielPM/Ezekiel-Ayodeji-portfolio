"use client";
import Image from "next/image";
import { useState } from "react";
type Product = { number:string; title:string; label:string; status:string; summary:string; image:string; tags:string[]; href:string; action:string };
export default function ProductExperienceCards({items}:{items:Product[]}) {
 const [flipped,setFlipped]=useState<Record<string,boolean>>({});
 return <div className="case-list product-experience-grid">{items.map((item,index)=>{
  const back=Boolean(flipped[item.title]);
  return <article className={`case-card product-experience-card${back?" is-flipped":""}`} key={item.title}>
   <button type="button" className="product-flip-toggle" aria-pressed={back} aria-label={back?`Flip ${item.title} back`:`Explore ${item.title} details`} onClick={()=>setFlipped(s=>({...s,[item.title]:!s[item.title]}))}>
    <span className="product-flip-inner">
     <span className="product-flip-face product-flip-front">
      <span className="case-top"><span>{String(index+1).padStart(2,"0")}</span><span>{item.label}</span><span className="case-status">{item.status}</span></span>
      <span className="case-intro"><span className="product-flip-title">{item.title}</span><span className="product-flip-summary">{item.summary}</span></span>
      {item.image?<span className="product-flip-image"><Image src={item.image} alt={`${item.title} preview`} fill sizes="(max-width: 600px) 88vw, 500px"/></span>:<span className="gallery-empty">Buyer says “I want it” → seller creates order → checkout link → buyer details → payment → confirmed order</span>}
      <span className="case-footer"><span className="feature-tags">{item.tags.map(tag=><span key={tag}>{tag}</span>)}</span></span>
      <span className="practice-flip-hint">Click to explore <span aria-hidden="true">↻</span></span>
     </span>
     <span className="product-flip-face product-flip-back"><span className="product-flip-eyebrow">PRODUCT SNAPSHOT</span><span className="product-flip-title">{item.title}</span><span className="product-flip-summary">{item.summary}</span><span className="product-flip-back-label">Focus areas</span><span className="product-flip-back-tags">{item.tags.map(tag=><span key={tag}>{tag}</span>)}</span><span className="practice-flip-hint">Click to return <span aria-hidden="true">↻</span></span></span>
    </span>
   </button>
   <div className="product-flip-action"><a className="case-button" href={item.href} target={item.href.startsWith("http")?"_blank":undefined} rel={item.href.startsWith("http")?"noreferrer":undefined}>{item.action}<span aria-hidden="true">↗</span></a></div>
  </article>;
 })}</div>;
}
