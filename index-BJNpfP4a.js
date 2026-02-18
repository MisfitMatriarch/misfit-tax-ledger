(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();const D=44,k={energy:["Q1.1","Q1.2","Q1.3","Q1.4","Q1.5","Q1.6"],recovery:["Q2.1","Q2.2","Q2.3","Q2.4","Q2.5","Q2.6","Q2.7","Q2.8"],signals:["Q3.1","Q3.2","Q3.3","Q3.4","Q3.5","Q3.6"],masking:["Q4.1","Q4.2","Q4.3","Q4.4","Q4.5","Q4.6"],environment:["Q5.1","Q5.2","Q5.3","Q5.4","Q5.5","Q5.6"],carryover:["Q6.1","Q6.2","Q6.3","Q6.4","Q6.5","Q6.6"],sustainability:["Q7.1","Q7.2","Q7.3","Q7.4","Q7.5","Q7.6"]},b={energy:"Energy Allocation & Activation",recovery:"Recovery, Sleep, Body & Reward",signals:"Signal Clarity, Override & Disconnection",masking:"Masking, Adjustment & Vigilance",environment:"Environmental, Role & Advocacy Load",carryover:"Cumulative, Critical & Carryover Load",sustainability:"Sustainability, Meaning & Collapse Pattern"},L={"Q1.1":"How often is most of your usable energy already gone by the middle of the day?","Q1.2":"How often do routine tasks cost more effort than they seem like they should?","Q1.3":"How often does your day get consumed by managing before anything actually moves forward?","Q1.4":"How often do you lose time to getting started, even when you know what to do?","Q1.5":"How often does it take significant time and energy to become functional in the morning?","Q1.6":"How often do you feel depleted specifically by the number of decisions you have to make?","Q2.1":"When you sleep, how often do you wake up feeling restored?","Q2.2":"How often does your body require active management just to function?","Q2.3":"How often do life circumstances prevent real recovery?","Q2.4":"When you have the chance to rest, how often are you unable to switch off?","Q2.5":"How often do you struggle to fall asleep even when you are tired?","Q2.6":"After pushing through or using something to cope, how often does it cost you later?","Q2.7":"How often do things that should feel enjoyable or rewarding feel flat instead?","Q2.8":"How often do you find that doing something nice does not actually restore you?","Q3.1":"How often do you miss early signs of depletion until they become intense?","Q3.2":"How often do you realise you were exhausted only after you have already gone too far?","Q3.3":"How often do you push through because stopping feels harder than continuing?","Q3.4":"How often do you rely on willpower rather than pacing?","Q3.5":"How often do you go through the motions without feeling fully present?","Q3.6":"How often does exhaustion seem to appear suddenly, without clear warning?","Q4.1":"How often does managing how you are perceived take significant energy?","Q4.2":"How often do you actively adjust yourself to reduce friction or stay safe?","Q4.3":"How often are you scanning for potential problems before they happen?","Q4.4":"How often do you put effort into appearing okay when you are not?","Q4.5":"How often does belonging in your environment require effort?","Q4.6":"How often do you internally translate or edit before you speak?","Q5.1":"How often does your physical environment drain you through sensory demand?","Q5.2":"How often do your roles compete with each other for energy?","Q5.3":"How often do systems around you create extra effort?","Q5.4":"How often are you managing or containing other people's emotional states?","Q5.5":"How often do you spend significant effort explaining or justifying your needs?","Q5.6":"How often do transitions drain you more than the task itself?","Q6.1":"How often do things from earlier make today feel heavier than it should?","Q6.2":"How often are you carrying strain from a previous season?","Q6.3":"How often does your inner critic consume energy?","Q6.4":"How often does uncertainty or waiting drain you in the background?","Q6.5":"How often does your mind keep working after the situation is over?","Q6.6":"How often does emotional strain linger longer than the event itself?","Q7.1":"How often do you start strong and fade?","Q7.2":"How often do improvements unravel after progress?","Q7.3":"How often do you withdraw or shut down after pushing too hard?","Q7.4":"How often does effort today cost tomorrow?","Q7.5":"How often does your current pace feel unsustainable?","Q7.6":"How often does what you are spending energy on feel not worth the cost?"},A={"Q1.1":"Even if the day has not been big. Emails, drop-offs, planning, conversations.","Q1.2":"Admin, replying to messages, switching between tasks.","Q1.3":"Preparing mentally, organising details, anticipating reactions.","Q1.4":"Stuck on the first step, circling, needing momentum.","Q1.5":"Getting out of bed, becoming alert, reaching baseline operational state.","Q1.6":"Choosing what to prioritise, what to respond to, constant micro-decisions.","Q2.1":"Not just hours slept. Whether sleep actually refuels you.","Q2.2":"Chronic pain, illness, fatigue, medication management.","Q2.3":"Caregiving, deadlines, financial pressure, ongoing stress.","Q2.4":"Lying down but mind racing, body wired.","Q2.5":"Taking a long time to drop off, thoughts continuing.","Q2.6":"Alcohol, caffeine, screens, medication, emotional suppression.","Q2.7":"Hobbies, achievements, connection, time off.","Q2.8":"Self-care, treats, time out that does not land the way it used to.","Q3.1":"Not noticing hunger, tension, overwhelm until it is strong.","Q3.2":"Hyperfocus, urgency, finishing one more thing.","Q3.3":"Expectations, pressure, fear of letting someone down.","Q3.4":"I will rest later.","Q3.5":"Losing time, feeling detached, watching yourself from outside.","Q3.6":"Fine one moment, flat the next.","Q4.1":"Tone, expression, appearing steady.","Q4.2":"Avoiding topics, softening opinions, code-switching.","Q4.3":"Reading the room, anticipating reactions, watching for tension.","Q4.4":"Suppressing visible distress, staying composed while struggling.","Q4.5":"Cultural fit, minority stress, unspoken rules.","Q4.6":"Rewording, editing, rehearsing.","Q5.1":"Noise, light, crowds, constant input.","Q5.2":"Parent and professional, carer and employee.","Q5.3":"Bureaucracy, rigid processes, access barriers.","Q5.4":"Calming, mediating, absorbing tension.","Q5.5":"Requesting accommodations, defending why something does not work.","Q5.6":"Switching roles, leaving the house, interruptions, change of plans.","Q6.1":"Poor sleep, alcohol, conflict, unfinished tasks.","Q6.2":"Burnout, extended stress.","Q6.3":"Judging yourself, harsh self-talk.","Q6.4":"Pending outcomes, unclear plans.","Q6.5":"Replaying conversations, analysing what happened.","Q6.6":"Staying activated or unsettled after things should have passed.","Q7.1":"Motivation is real. Sustainability is not.","Q7.2":"New routine works, then collapses.","Q7.3":"Cancelling plans, isolating.","Q7.4":"Productivity spike followed by crash.","Q7.5":"It works short term, but not long term.","Q7.6":"Effort and meaning feel misaligned, even if you are coping."},B=[{value:0,label:"Rarely or never"},{value:1,label:"Occasionally"},{value:2,label:"Sometimes"},{value:3,label:"Often"},{value:4,label:"Very often / consistently"},{value:null,label:"Not sure"}],R=4;function h(o){return typeof o=="number"&&!Number.isNaN(o)}function S(o){const e={};for(const[n,s]of Object.entries(k)){const t=s.map(i=>o[i]).filter(h);if(!t.length){e[n]=null;continue}const r=t.reduce((i,y)=>i+y,0)/t.length;e[n]=Math.round(r/R*100)}return e}function $(o){return Object.entries(o).filter(([e,n])=>h(n)).sort((e,n)=>n[1]-e[1]).map(([e])=>e)}function O(o){return Object.entries(o).filter(([e,n])=>h(n)).sort((e,n)=>e[1]-n[1]).slice(0,2).map(([e])=>e)}function T(o){const e=n=>h(o[n])?o[n]:0;return{personal:Math.round((e("energy")+e("recovery")+e("signals")+e("masking")+e("carryover")+e("sustainability"))/6),interactional:Math.round((e("masking")+e("environment")+e("energy"))/3),structural:Math.round((e("environment")+e("recovery")+e("carryover"))/3)}}function x(o){const e=Object.entries(o).sort((y,d)=>d[1]-y[1]),[n,s]=e[0],[t,r]=e[1],i=s-r;return i<=8?{state:"mixed",primary:n,secondary:t,delta:i}:i<=15?{state:"primary_secondary",primary:n,secondary:t,delta:i}:{state:"clean",primary:n,secondary:t,delta:i}}function P(o){return Object.values(o).filter(h).length/D}function M(o){return o>=.8?"High":o>=.6?"Moderate":o>=.5?"Low":"Very low"}function U(o){const e=Object.values(o).filter(h);if(!e.length)return!1;const n=Math.max(...e),s=e.reduce((t,r)=>t+r,0)/e.length;return n-s>=20}const f={UNMASKED:{num:1,title:"UNMASKED"},UNTANGLED:{num:2,title:"UNTANGLED"},UNBURDENED:{num:3,title:"UNBURDENED"},UNBOUND:{num:4,title:"UNBOUND"},UNHIDDEN:{num:5,title:"UNHIDDEN"}};function C({driverState:o,leverageDomains:e,topDomains:n}){if(o.state==="mixed")return{mode:"single",book:f.UNTANGLED};let s;o.primary==="structural"?s=f.UNBOUND:o.primary==="interactional"?s=f.UNHIDDEN:s=f.UNBURDENED;let t;return e[0]==="signals"?t=f.UNBURDENED:e[0]==="masking"?t=f.UNMASKED:e[0]==="environment"?t=f.UNBOUND:t=f.UNTANGLED,s.num===t.num?{mode:"single",book:s}:{mode:"dual",driverBook:s,leverageBook:t}}const I={energy:{reduce:"Reduce unnecessary decision load.",protect:"Protect the part of your day that already flows.",restore:"Restore startup structure.",add:"Add automation or batching.",doNot:"Do not interpret energy drain as laziness."},recovery:{reduce:"Reduce one recovery blocker.",protect:"Protect a minimum recovery window.",restore:"Restore one genuinely replenishing activity.",add:"Add a buffer that makes recovery possible.",doNot:"Do not push harder when recovery fails."},signals:{reduce:"Reduce override moments.",protect:"Protect early strain signals.",restore:"Restore pacing before collapse.",add:"Add external break cues.",doNot:"Do not rely solely on willpower."},masking:{reduce:"Reduce one unnecessary layer of monitoring.",protect:"Protect spaces where you don't perform.",restore:"Restore one context of honest expression.",add:"Add clearer boundary communication.",doNot:"Do not confuse masking fatigue with weakness."},environment:{reduce:"Reduce exposure to draining setups.",protect:"Protect supportive conditions.",restore:"Restore alignment where possible.",add:"Add structural adjustments or documentation.",doNot:"Do not assume effort alone fixes mismatch."},carryover:{reduce:"Reduce open mental loops.",protect:"Protect emotional boundaries.",restore:"Restore cognitive space by externalising replay.",add:"Add shutdown rituals between roles.",doNot:"Do not treat rumination as productivity."},sustainability:{reduce:"Reduce intensity slightly.",protect:"Protect anti-boom–bust patterns.",restore:"Restore steadiness over spikes.",add:"Add pacing rules you can live with.",doNot:"Do not measure success by short bursts."}},j="Do not treat the two levers as a to-do list. Pick one change first. The goal is reduced extraction, not perfect control.";function _({driverState:o,leverageDomains:e}){const n=e.map(t=>({domain:t,...I[t]}));let s=null;return o.primary==="structural"&&e.length>1&&(s=j),{overlay:s,blocks:n}}const m={};let u=0;const p=Object.keys(k),E=document.getElementById("app"),H="/misfit-tax-ledger/logo.png";function w(){u<p.length?q():F()}function q(){const o=p[u],e=b[o],n=k[o],s=Math.round(u/p.length*100);E.innerHTML=`
    <div class="container">
      <header class="header">
        <img src="${H}" alt="Free To Be Me" class="logo" />
        <h1>Misfit Tax Ledger</h1>
        <div class="progress-bar">
          <div class="progress-fill" style="width: ${s}%"></div>
        </div>
        <p class="progress-text">Section ${u+1} of ${p.length}: ${e}</p>
      </header>

      <div class="questions" id="questions"></div>

      <div class="nav-buttons">
        ${u>0?'<button class="btn btn-back" id="backBtn">Back</button>':""}
        <button class="btn btn-next" id="nextBtn">
          ${u===p.length-1?"See Results":"Next Section"}
        </button>
      </div>
    </div>
  `;const t=document.getElementById("questions");n.forEach(i=>{const y=L[i]||i,d=A[i]||"",g=document.createElement("div");g.className="question-block",g.innerHTML=`
      <p class="question-text">${y}</p>
      ${d?`<p class="hint-text">${d}</p>`:""}
      <div class="options" data-qid="${i}"></div>
    `;const v=g.querySelector(".options");B.forEach(l=>{const c=document.createElement("button");c.className="option-btn",c.textContent=l.label,c.dataset.value=l.value===null?"null":l.value;const a=m[i];(l.value===null&&a===null||l.value!==null&&a===l.value)&&c.classList.add("selected"),c.addEventListener("click",()=>{m[i]=l.value===null?null:l.value,v.querySelectorAll(".option-btn").forEach(Q=>Q.classList.remove("selected")),c.classList.add("selected")}),v.appendChild(c)}),t.appendChild(g)}),document.getElementById("nextBtn").addEventListener("click",()=>{u++,w(),window.scrollTo(0,0)});const r=document.getElementById("backBtn");r&&r.addEventListener("click",()=>{u--,w(),window.scrollTo(0,0)})}function F(){const o=S(m),e=$(o),n=O(o),s=T(o),t=x(s),r=P(m),i=M(r),y=U(o),d=C({driverState:t,leverageDomains:n,topDomains:e}),g=_({driverState:t,leverageDomains:n});E.innerHTML=`
    <div class="container">
      <header class="header">
        <img src="${H}" alt="Free To Be Me" class="logo" />
        <h1>Your Misfit Tax Ledger</h1>
        <p class="confidence-badge">Confidence: ${i} (${Math.round(r*100)}% answered)</p>
      </header>

      <!-- PANEL A: Domain Scores -->
      <section class="panel">
        <h2>Panel A — Where the Tax Falls</h2>
        <div class="domain-bars" id="domainBars"></div>
        ${y?'<p class="dominance-flag">⚠ One domain is significantly elevated above the rest.</p>':""}
      </section>

      <!-- PANEL B: Attribution -->
      <section class="panel">
        <h2>Panel B — What's Driving It</h2>
        <div class="attribution-grid">
          <div class="attr-card">
            <span class="attr-label">Personal</span>
            <span class="attr-score">${s.personal}%</span>
          </div>
          <div class="attr-card">
            <span class="attr-label">Interactional</span>
            <span class="attr-score">${s.interactional}%</span>
          </div>
          <div class="attr-card">
            <span class="attr-label">Structural</span>
            <span class="attr-score">${s.structural}%</span>
          </div>
        </div>
        <p class="driver-state">
          Driver: <strong>${t.primary}</strong>
          ${t.state==="mixed"?"(mixed — close to secondary)":t.state==="primary_secondary"?`(with ${t.secondary} secondary)`:"(clear primary)"}
          <span class="delta">(delta: ${t.delta})</span>
        </p>
      </section>

      <!-- PANEL C: Leverage Actions -->
      <section class="panel">
        <h2>Panel C — Where to Start</h2>
        ${g.overlay?`<p class="overlay-warning">${g.overlay}</p>`:""}
        <div id="leverageBlocks"></div>
      </section>

      <!-- PANEL D: Book Recommendation -->
      <section class="panel">
        <h2>Panel D — Reading Path</h2>
        <div class="book-rec" id="bookRec"></div>
      </section>

      <div class="nav-buttons">
        <button class="btn btn-back" id="retakeBtn">Retake</button>
      </div>
    </div>
  `;const v=document.getElementById("domainBars");e.forEach(a=>{const Q=o[a],N=n.includes(a);v.innerHTML+=`
      <div class="domain-row ${N?"leverage-highlight":""}">
        <span class="domain-name">${b[a]}</span>
        <div class="bar-track">
          <div class="bar-fill" style="width: ${Q}%"></div>
        </div>
        <span class="domain-score">${Q}%</span>
        ${N?'<span class="leverage-tag">lever</span>':""}
      </div>
    `});const l=document.getElementById("leverageBlocks");g.blocks.forEach(a=>{l.innerHTML+=`
      <div class="action-block">
        <h3>${b[a.domain]}</h3>
        <ul class="action-list">
          <li><strong>Reduce:</strong> ${a.reduce}</li>
          <li><strong>Protect:</strong> ${a.protect}</li>
          <li><strong>Restore:</strong> ${a.restore}</li>
          <li><strong>Add:</strong> ${a.add}</li>
          <li class="do-not"><strong>Do not:</strong> ${a.doNot}</li>
        </ul>
      </div>
    `});const c=document.getElementById("bookRec");d.mode==="single"?c.innerHTML=`<p>Start with: <strong>${d.book.title}</strong></p>`:c.innerHTML=`
      <p>Driver book: <strong>${d.driverBook.title}</strong></p>
      <p>Leverage book: <strong>${d.leverageBook.title}</strong></p>
    `,document.getElementById("retakeBtn").addEventListener("click",()=>{Object.keys(m).forEach(a=>delete m[a]),u=0,w(),window.scrollTo(0,0)})}w();
