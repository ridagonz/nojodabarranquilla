"use client";
import { useMemo, useState } from "react";

const stories = [
 {category:"Ciudad",title:"Habilitan una nueva etapa de la canalización del arroyo de la calle 85",summary:"La obra avanza con un nuevo tramo disponible para mejorar la movilidad y el manejo de aguas en este sector de Barranquilla.",date:"Agosto 2026",url:"https://www.instagram.com/nojodabarranquillaa/p/DcMfpD_igVb/",tone:"yellow",mark:"85"},
 {category:"Salud",title:"Bajan los casos de dengue en el Atlántico",summary:"El departamento registra 1.540 casos en lo corrido de 2026. Las autoridades mantienen las acciones de prevención.",date:"Agosto 2026",url:"https://www.instagram.com/nojodabarranquillaa/p/Dbn1ffbjvdH/",tone:"red",mark:"↓"},
 {category:"Solidaridad",title:"Barranquilla habilita centro de acopio para ayudas humanitarias",summary:"El punto recibe donaciones en Barranquillita para apoyar a las comunidades que más lo necesitan.",date:"Agosto 2026",url:"https://www.instagram.com/nojodabarranquillaa/p/Db53Ek6Gl-v/",tone:"blue",mark:"+"},
 {category:"Movilidad",title:"Más de 68.000 vehículos se movilizarían por las vías del Atlántico",summary:"La Policía de Tránsito anunció controles y recomendaciones para los viajeros durante el puente festivo.",date:"Agosto 2026",url:"https://www.instagram.com/nojodabarranquillaa/p/Db0tej2AVHw/",tone:"orange",mark:"68K"},
 {category:"Comunidad",title:"Rescatistas de Barranquilla viajan para apoyar la emergencia en Cali",summary:"El grupo de 41 especialistas cuenta con experiencia en atención de emergencias, medicina y enfermería.",date:"Agosto 2026",url:"https://www.instagram.com/nojodabarranquillaa/p/Db6byMsjh-r/",tone:"green",mark:"41"},
 {category:"Actualidad",title:"Movimiento telúrico sorprendió al territorio nacional",summary:"Autoridades y organismos de emergencia entregaron recomendaciones después del sismo sentido en varias ciudades.",date:"10 agosto 2026",url:"https://www.instagram.com/nojodabarranquillaa/p/Db3KZCzgL9w/",tone:"purple",mark:"≈"},
];
const categories=["Todas","Ciudad","Salud","Movilidad","Comunidad","Actualidad"];

export default function Home(){
 const [active,setActive]=useState("Todas"); const [query,setQuery]=useState("");
 const filtered=useMemo(()=>stories.filter(s=>(active==="Todas"||s.category===active)&&`${s.title} ${s.summary}`.toLowerCase().includes(query.toLowerCase())),[active,query]);
 return <main>
  <div className="ticker"><span>ÚLTIMA HORA</span><p>Lo que pasa en Barranquilla y el Atlántico, sin tanta vuelta.</p></div>
  <header className="nav"><a className="brand" href="#inicio" aria-label="Inicio"><b>NO<br/>JODA</b><span>BARRANQUILLA</span></a><nav><a href="#noticias">Noticias</a><a href="#categorias">Categorías</a><a href="#nosotros">Quiénes somos</a></nav><a className="instagram" href="https://www.instagram.com/nojodabarranquillaa/" target="_blank" rel="noreferrer">Síguenos <span>↗</span></a></header>
  <section className="hero" id="inicio"><div className="hero-photo" role="img" aria-label="Gran Malecón de Barranquilla"/><div className="hero-shade"/><div className="hero-copy"><div className="eyebrow"><span>●</span> BARRANQUILLA AL DÍA</div><h1>¿QUÉ FUE<br/>LO QUE <i>PASÓ?</i></h1><p>Noticias, actualidad y las vueltas de la ciudad.<br/>Pa&apos; que no te cojan fuera de base.</p><a href="#noticias">Ver las noticias <span>↓</span></a></div><div className="weather-card"><small>LA ARENOSA</small><strong>32°</strong><span>Barranquilla, Atlántico</span></div></section>
  <section className="news-wrap" id="noticias"><div className="section-heading"><div><span className="kicker">LO MÁS RECIENTE</span><h2>NO TE QUEDES<br/><i>FUERA DE BASE</i></h2></div><label className="search"><span>⌕</span><input aria-label="Buscar noticias" placeholder="Buscar una noticia..." value={query} onChange={e=>setQuery(e.target.value)}/></label></div>
   <div className="filters" id="categorias">{categories.map(c=><button className={active===c?"active":""} onClick={()=>setActive(c)} key={c}>{c}</button>)}</div>
   <div className="grid">{filtered.map((s,i)=><article className="card" key={s.title}><div className={`card-art ${s.tone}`}><span className="number">0{i+1}</span><strong>{s.mark}</strong><em>NO JODA</em></div><div className="card-body"><div className="meta"><span>{s.category}</span><time>{s.date}</time></div><h3>{s.title}</h3><p>{s.summary}</p><a href={s.url} target="_blank" rel="noreferrer">Ver publicación original <span>↗</span></a></div></article>)}</div>{filtered.length===0&&<p className="empty">No encontramos noticias con esa búsqueda. Prueba con otra palabra.</p>}
  </section>
  <section className="manifesto" id="nosotros"><div><span>NO JODA · NO JODA · NO JODA</span><h2>LA CIUDAD HABLA.<br/><i>NOSOTROS TE CONTAMOS.</i></h2></div><p>Aquí encuentras lo que está pasando en Barranquilla y el Atlántico, contado claro, rápido y con el sabor de nuestra tierra.</p><a href="https://www.instagram.com/nojodabarranquillaa/" target="_blank" rel="noreferrer">@nojodabarranquillaa ↗</a></section>
  <footer><a className="brand footer-brand" href="#inicio"><b>NO<br/>JODA</b><span>BARRANQUILLA</span></a><p>Noticias, actualidad y las vueltas de la ciudad.</p><span>© 2026 No Joda Barranquilla</span></footer>
 </main>;
}
