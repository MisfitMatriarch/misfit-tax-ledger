(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();const S="/misfit-tax-ledger/assets/logo-B_0lZ0mU.png",A=44,D={energy:{label:"Energy Output",color:"#8B5CA8",itemCount:6},recovery:{label:"Recovery Load",color:"#6B4C9A",itemCount:8},signals:{label:"Override Frequency",color:"#9B6CB8",itemCount:6},masking:{label:"Masking Cost",color:"#2A9D8F",itemCount:6},environment:{label:"Environmental Fit",color:"#228B7F",itemCount:6},carryover:{label:"Cumulative Strain",color:"#B06000",itemCount:6},sustainability:{label:"Collapse Patterns",color:"#A05050",itemCount:6}},R={energy:["Q1.1","Q1.2","Q1.3","Q1.4","Q1.5","Q1.6"],recovery:["Q2.1","Q2.2","Q2.3","Q2.4","Q2.5","Q2.6","Q2.7","Q2.8"],signals:["Q3.1","Q3.2","Q3.3","Q3.4","Q3.5","Q3.6"],masking:["Q4.1","Q4.2","Q4.3","Q4.4","Q4.5","Q4.6"],environment:["Q5.1","Q5.2","Q5.3","Q5.4","Q5.5","Q5.6"],carryover:["Q6.1","Q6.2","Q6.3","Q6.4","Q6.5","Q6.6"],sustainability:["Q7.1","Q7.2","Q7.3","Q7.4","Q7.5","Q7.6"]},$=4;function m(t){return typeof t=="number"&&!Number.isNaN(t)}function B(t){const e={};for(const[n,a]of Object.entries(R)){const o=a.map(s=>t[s]).filter(m);if(!o.length){e[n]=null;continue}const i=o.reduce((s,r)=>s+r,0)/o.length;e[n]=Math.round(i/$*100)}return e}function L(t){const e=n=>m(t[n])?t[n]:0;return{personal:Math.round(e("energy")*.25+e("recovery")*.25+e("signals")*.25+e("carryover")*.25),interactional:Math.round(e("masking")*.5+e("environment")*.5),structural:Math.round(e("environment")*.6+e("recovery")*.4)}}function O(t){const e=Object.entries(t).sort((r,c)=>c[1]-r[1]),[n,a]=e[0],[o,i]=e[1],s=a-i;return s<=8?{state:"mixed",primary:n,secondary:o,delta:s}:s<=15?{state:"primary_secondary",primary:n,secondary:o,delta:s}:{state:"clean",primary:n,secondary:o,delta:s}}function C(t){return Object.entries(t).filter(([e,n])=>m(n)).sort((e,n)=>e[1]-n[1]).slice(0,2).map(([e])=>e)}function M(t,e){const{state:n,primary:a,secondary:o}=t,i={personal:"UNBURDENED",interactional:"UNHIDDEN",structural:"UNBOUND",mixed:"UNTANGLED"},s=Object.entries(e).filter(([l,g])=>m(g)).sort((l,g)=>g[1]-l[1]).slice(0,2).map(([l])=>l);function r(){return s.includes("masking")?"UNMASKED":s.includes("carryover")||s.includes("sustainability")?"UNLEASHED":s.includes("environment")?"UNBOUND":null}const c=n==="mixed"?i.mixed:i[a],d=r()||c;return{driverBook:c,leverageBook:d,same:c===d}}function q(t){return Object.values(t).filter(m).length/A}function _(t){return t>=.8?"High":t>=.6?"Moderate":t>=.5?"Low":"Very Low"}function H(t){const e=Object.values(t).filter(m);if(!e.length)return null;const n=e.reduce((o,i)=>o+i,0)/e.length,a=[...e].sort((o,i)=>i-o);return a[0]-n>=20?Object.keys(t).find(i=>t[i]===a[0]):null}function P(t){const e=Object.values(t).filter(m);if(!e.length)return null;const n=e.reduce((a,o)=>a+o,0)/e.length;return Math.max(0,Math.round(100-n))}const T={"Q1.1":{text:"By the middle of the day, my energy is already significantly depleted.",hint:"Not tired — depleted. A different quality of empty.",domain:"energy",construct:"Baseline depletion / stabilisation need",book:"UNBURDENED"},"Q1.2":{text:"Routine tasks take more out of me than they should.",hint:"Tasks that should be neutral still cost something.",domain:"energy",construct:"Cost visibility and driver clarity",book:"UNTANGLED"},"Q1.3":{text:"I spend energy preparing for situations before they happen.",hint:"Mentally rehearsing, pre-managing, anticipating.",domain:"energy",construct:"Attribution work for interface strain",book:"UNTANGLED"},"Q1.4":{text:"Getting started on tasks takes more effort than the task itself.",hint:"Initiation is the barrier, not the doing.",domain:"energy",construct:"Activation friction / stabilisation sequencing",book:"UNBURDENED"},"Q1.5":{text:"My energy is already compromised by the time the day starts.",hint:"The account is already negative before anything happens.",domain:"energy",construct:"Stabilisation and access restoration",book:"UNBURDENED"},"Q1.6":{text:"Making decisions — even small ones — drains me.",hint:"Including what to eat, what to wear, what to reply.",domain:"energy",construct:"Cognitive regulatory strain",book:"UNBURDENED"},"Q2.1":{text:"Sleep does not leave me feeling restored.",hint:"You sleep but you do not wake recovered.",domain:"recovery",construct:"Recovery integrity",book:"UNBURDENED"},"Q2.2":{text:"Managing my body's baseline takes energy before anything else happens.",hint:"Pain, sensory state, medication, chronic condition management.",domain:"recovery",construct:"Regulatory load / stabilisation",book:"UNBURDENED"},"Q2.3":{text:"My schedule does not allow enough recovery time.",hint:"The structure itself doesn't permit it — not a personal failure.",domain:"recovery",construct:"Structural constraint on recovery",book:"UNBOUND"},"Q2.4":{text:"I have difficulty switching off even when I stop doing things.",hint:"Still processing, still on, even when the task is done.",domain:"recovery",construct:"Downshift difficulty / nervous system",book:"UNBURDENED"},"Q2.5":{text:"Getting to sleep or staying asleep is difficult.",hint:"Either initiation or maintenance.",domain:"recovery",construct:"Recovery barrier",book:"UNBURDENED"},"Q2.6":{text:"Periods where I cope well are followed by crashes.",hint:"The coping was real. So is the cost that follows.",domain:"recovery",construct:"Cost cycle without moralising",book:"UNTANGLED"},"Q2.7":{text:"Things that used to restore me no longer do.",hint:"Rest, hobbies, or activities that helped have stopped working.",domain:"recovery",construct:"Misalignment signal / survival replacing aliveness",book:"UNCONTAINED"},"Q2.8":{text:"Self-care practices do not seem to make a difference.",hint:"You do the things and they do not land.",domain:"recovery",construct:"Alignment problem, not effort problem",book:"UNCONTAINED"},"Q3.1":{text:"I miss early signs that I am running low.",hint:"You notice it late — or only after the fact.",domain:"signals",construct:"Signal clarity — stabilisation prerequisite",book:"UNBURDENED"},"Q3.2":{text:"I often only notice I am depleted after I have already gone too far.",hint:"The signal comes after the cost, not before.",domain:"signals",construct:"Post-collapse noticing / override cycle",book:"UNBURDENED"},"Q3.3":{text:"Stopping feels harder than continuing, even when I am struggling.",hint:"Momentum, obligation, or pressure keeps you going past signals.",domain:"signals",construct:"Obligation / pressure sovereignty",book:"UNBOUND"},"Q3.4":{text:"I rely on willpower to keep going rather than actual capacity.",hint:"You push through rather than assess whether to continue.",domain:"signals",construct:"Recalibrate effort / stop proving",book:"UNBOUND"},"Q3.5":{text:"I disconnect from what is happening around me when under pressure.",hint:"Dissociation, zoning out, going elsewhere mentally.",domain:"signals",construct:"Disconnection / detachment as load state",book:"UNBURDENED"},"Q3.6":{text:"My capacity drops suddenly rather than gradually.",hint:"Fine, then not fine. No visible middle.",domain:"signals",construct:"Collapse pattern integration",book:"UNLEASHED"},"Q4.1":{text:"I manage how I come across to others.",hint:"Editing your presentation, words, reactions, or appearance.",domain:"masking",construct:"Masking visibility — strain not identity",book:"UNMASKED"},"Q4.2":{text:"I adjust myself to fit what a situation expects.",hint:"Changing how you show up to match the room.",domain:"masking",construct:"Adjustment to stay safe / recognition",book:"UNMASKED"},"Q4.3":{text:"I read rooms and people to anticipate what is expected.",hint:"Constant scanning — who needs what, what is safe, what is required.",domain:"masking",construct:"Anticipatory scanning / cost pattern clarity",book:"UNTANGLED"},"Q4.4":{text:"I appear fine when I am not.",hint:"The external presentation and internal experience do not match.",domain:"masking",construct:"Masking cost",book:"UNMASKED"},"Q4.5":{text:"Being in groups or social settings costs me significantly.",hint:"Not disliking people — the energy cost of the environment.",domain:"masking",construct:"Connection safety and relational buffers",book:"UNHIDDEN"},"Q4.6":{text:"I translate what I mean into what others will accept.",hint:"Internal-to-external translation overhead.",domain:"masking",construct:"Clarify where cost sits / translation overhead",book:"UNTANGLED"},"Q5.1":{text:"My environment creates sensory load I have to manage.",hint:"Noise, light, temperature, texture, movement — anything sensory.",domain:"environment",construct:"Fit / alignment",book:"UNCONTAINED"},"Q5.2":{text:"I hold multiple roles that compete for the same energy.",hint:"Parent, worker, carer, partner — all drawing from the same account.",domain:"environment",construct:"Sovereignty and boundary design",book:"UNBOUND"},"Q5.3":{text:"The systems I operate in were not built for how I function.",hint:"Workplaces, institutions, bureaucracies, processes.",domain:"environment",construct:"Structural ceiling naming",book:"UNBOUND"},"Q5.4":{text:"I manage others' emotional states as part of my day.",hint:"Absorbing, de-escalating, or holding space for others.",domain:"environment",construct:"Relational buffer and co-regulation limits",book:"UNHIDDEN"},"Q5.5":{text:"Advocating for what I need takes significant energy.",hint:"Asking for adjustments, accommodations, or basic consideration.",domain:"environment",construct:"Advocacy load / sovereignty and ceilings",book:"UNBOUND"},"Q5.6":{text:"Moving between tasks, contexts, or environments is costly.",hint:"Transitions — any kind of switching.",domain:"environment",construct:"Stabilisation / pacing",book:"UNBURDENED"},"Q6.1":{text:"Today starts heavier because of what happened yesterday.",hint:"Yesterday's cost is still in today's account.",domain:"carryover",construct:"Carryover cycle / integration problem",book:"UNLEASHED"},"Q6.2":{text:"The effects of difficult periods take a long time to clear.",hint:"Weeks or months after a hard season, the residue remains.",domain:"carryover",construct:"Previous season strain / integration",book:"UNLEASHED"},"Q6.3":{text:"My internal critical voice consumes energy.",hint:"Self-criticism, second-guessing, replaying what went wrong.",domain:"carryover",construct:"Misattribution loop / identity-strain separation",book:"UNMASKED"},"Q6.4":{text:"Uncertainty drains me even when nothing bad is happening.",hint:"Not knowing what is coming, or what someone thinks.",domain:"carryover",construct:"Clarity and externalise cost source",book:"UNTANGLED"},"Q6.5":{text:"I replay situations in my mind after they have passed.",hint:"Reviewing conversations, decisions, interactions.",domain:"carryover",construct:"Clarity and cost attribution",book:"UNTANGLED"},"Q6.6":{text:"Emotions linger longer than the situation warrants.",hint:"The feeling outlasts the event.",domain:"carryover",construct:"Nervous system return-to-baseline / integration",book:"UNLEASHED"},"Q7.1":{text:"I start well but cannot maintain pace.",hint:"Strong beginning, fade follows.",domain:"sustainability",construct:"Collapse cycle",book:"UNLEASHED"},"Q7.2":{text:"Improvements I make do not stick.",hint:"Progress unravels — not all at once, but consistently.",domain:"sustainability",construct:"Integration failure",book:"UNLEASHED"},"Q7.3":{text:"I retreat or withdraw when demands get high.",hint:"Shutdown, isolation, disappearing.",domain:"sustainability",construct:"Collapse / shutdown pattern",book:"UNLEASHED"},"Q7.4":{text:"The effort I put in today costs me tomorrow.",hint:"Boom-bust — spending tomorrow's capacity today.",domain:"sustainability",construct:"Boom-bust pacing",book:"UNLEASHED"},"Q7.5":{text:"The pace I am operating at is not sustainable.",hint:"You know it. The numbers know it.",domain:"sustainability",construct:"Alignment",book:"UNCONTAINED"},"Q7.6":{text:"I am spending energy on things that do not matter to me.",hint:"Effort and meaning are misaligned.",domain:"sustainability",construct:"Effort / meaning congruence",book:"UNCONTAINED"}},j=["Q1.1","Q1.2","Q1.3","Q1.4","Q1.5","Q1.6","Q2.1","Q2.2","Q2.3","Q2.4","Q2.5","Q2.6","Q2.7","Q2.8","Q3.1","Q3.2","Q3.3","Q3.4","Q3.5","Q3.6","Q4.1","Q4.2","Q4.3","Q4.4","Q4.5","Q4.6","Q5.1","Q5.2","Q5.3","Q5.4","Q5.5","Q5.6","Q6.1","Q6.2","Q6.3","Q6.4","Q6.5","Q6.6","Q7.1","Q7.2","Q7.3","Q7.4","Q7.5","Q7.6"],N=["energy","recovery","signals","masking","environment","carryover","sustainability"],F={energy:{number:"D1",title:"Energy Output"},recovery:{number:"D2",title:"Recovery Load"},signals:{number:"D3",title:"Override Frequency"},masking:{number:"D4",title:"Masking Cost"},environment:{number:"D5",title:"Environmental Fit"},carryover:{number:"D6",title:"Cumulative Strain"},sustainability:{number:"D7",title:"Collapse Patterns"}},G={energy:{lever:"REDUCE",primary:"Reduce what is consuming energy before tasks begin.",actions:["Identify the two highest-cost daily tasks. Question whether both are necessary in their current form.","Remove one decision from the start of your day — make it automatic or eliminate it.","Audit pre-task preparation patterns. Where are you managing in advance what hasn't happened yet?"],doNot:"Do not add new practices to an already depleted baseline. Reduce first."},recovery:{lever:"PROTECT",primary:"Protect recovery from being consumed before restoration can occur.",actions:["Identify one non-negotiable recovery window per day. Protect it before adding demands.","Notice what you are doing during 'rest' that is still costing you. Rest that costs is not rest.","If the schedule does not allow recovery: this is a structural ceiling, not a personal failure. Name it."],doNot:"Do not treat the absence of recovery as a motivation problem. It is a structural one."},signals:{lever:"RESTORE",primary:"Restore access to your own depletion signals.",actions:["Begin noticing the earliest signal — before the crash. Fatigue? Irritability? Difficulty forming words?","Practice naming load state mid-task rather than only after: 'I am at 60%.' Just naming, not acting yet.","Identify one override pattern you run consistently. Stopping when stopping is hard is a skill that builds."],doNot:"Do not use willpower to stay present. It is the same account."},masking:{lever:"RESTORE",primary:"Restore access to what is actually happening internally, separate from performance.",actions:["After a high-masking period, give yourself time before any demands. The account needs to settle.","Identify one context where masking is highest. Is the cost worth the outcome in that specific room?","Separate the strategy from the identity. Masking kept things functioning. It is not who you are."],doNot:"Do not shame the masking. It was protective. The question is only whether it is still necessary."},environment:{lever:"ADD",primary:"Add what is missing in the environment. The conditions are the source.",actions:["Name one environmental condition that would reduce load if changed. Sensory, structural, or relational.","Identify one system that was not built for how you function. The friction is in the design, not in you.","If the environment cannot change: name that structural ceiling explicitly. It changes what effort alone can do."],doNot:"Do not treat environmental extraction as a personal capacity problem. They are not the same lever."},carryover:{lever:"REDUCE",primary:"Reduce what is carrying forward from previous periods.",actions:["Identify one loop you are running repeatedly. Naming the loop is the first lever, not acting on it.","Notice what yesterday is adding to today. Carryover is real cost — it is not weakness.","If uncertainty is the source: locate what is actually unknown vs what you are filling in with worst-case."],doNot:"Do not use more effort to process carryover. The loop does not close through force."},sustainability:{lever:"REDUCE",primary:"Reduce the boom-bust cycle. Stability is the outcome, not output.",actions:["Identify the boom-bust pattern: where do you overspend? What follows? Map the cycle, not just the crash.","Find one place where pace can come down before it has to. Voluntary reduction is different from collapse.","If meaning and effort are misaligned: that is information about conditions, not about your value."],doNot:"Do not measure improvement by output. Measure it by collapse frequency and recovery duration."}},K="Effort can exist. Skill can exist. Output can exist. Cost can exist alongside all three. This is not a diagnosis. Not a label. Not a ranking. It shows where energy is going.",V=`Not Designed For This World. Designed For More.

That wasn't your limit. That was what was left after the tax.

Reduce what is draining. Protect what is intact. Restore access that's been squeezed. Add what was missing.

The direction remains yours. Always.`,W="Revisit in 8–12 weeks. Success is measured in: reduced collapse frequency, shorter recovery duration, lower carryover, increased participation stability. Not increased output. Not performance improvement.",Y=["This ledger measures cost patterns.","If a question does not apply, skip it.",'If you are unsure, answer "Not sure."',"This is visibility, not a verdict."],b={mixed:{headline:"The cost is spread across domains right now.",body:"That does not mean 'nothing is wrong.' It means the source is blended, and clarity comes first. Start with UNTANGLED."},primary_secondary:{personal:{headline:"The cost is being driven mostly by personal domain load.",body:"With a strong secondary influence from {secondary}. Not everything that feels personal originates there."},interactional:{headline:"The cost is being driven mostly by interactional conditions.",body:"With a strong secondary influence from {secondary}. The relational and environmental costs are where the extraction is highest."},structural:{headline:"The cost is being driven mostly by structural conditions.",body:"With a strong secondary influence from {secondary}. Effort alone will not fix this. That is not failure — it is the model being accurate."}},clean:{personal:{headline:"The cost is being driven primarily by personal domain load.",body:"That is not blame. That is where the conditions are currently pulling from."},interactional:{headline:"The cost is being driven primarily by interactional conditions.",body:"The environments and relational contexts you are in are the primary source of extraction."},structural:{headline:"The cost is being driven primarily by structural conditions.",body:"Effort alone will not fix this, and that matters. This is a structural ceiling, not a personal deficit."}}},z="Your safest first move is not the highest pressure point. It is where leverage exists.",J="Do not treat these two leverage points as a to-do list. Pick one change first.",X="This addresses the conditions around you that are adding to personal cost.",E={UNMASKED:"If everything feels like it is your fault, start here.",UNTANGLED:"If everything feels mixed together, start here.",UNBURDENED:"If things feel heavy or unsafe, start here.",UNBOUND:"If over-responsibility is the pattern, start here.",UNHIDDEN:"If connection feels costly or unsafe, start here.",UNCONTAINED:"If survival has replaced aliveness, start here.",UNLEASHED:"If things improve and then unravel, start here.",UNVEILED:"Living proof. The architecture holds in real conditions."},k={UNMASKED:"Recognition — separating strain from identity",UNTANGLED:"Clarity — identifying where cost is originating",UNBURDENED:"Safety — reducing immediate regulatory strain",UNBOUND:"Sovereignty — releasing responsibility that is not yours",UNHIDDEN:"Connection — strengthening relational buffers",UNCONTAINED:"Alignment — aligning work, pace, and design",UNLEASHED:"Integration — building ongoing recalibration so gains hold",UNVEILED:"Applied Story — recognition through integration in real constraints"},x=[{value:0,label:"Rarely or never"},{value:1,label:"Sometimes"},{value:2,label:"Often"},{value:3,label:"Most of the time"},{value:4,label:"Very often / consistently"}],U="skip";let v={},u=0,p="intro";const Q=document.getElementById("app");function y(){p==="intro"?Z():p==="quiz"?ee():p==="results"&&ne()}function Z(){Q.innerHTML=`
    <div class="container intro-container">
      <div class="logo-area">
        <img src="${S}" alt="Free To Be Me" class="site-logo" />
        <h1 class="site-title">The Misfit Tax Ledger</h1>
        <p class="site-tagline">Not Designed For This World.</p>
      </div>

      <div class="intro-card">
        <div class="ledger-intro-box">
          ${Y.map(t=>`<p class="ledger-intro-line">${t}</p>`).join("")}
        </div>

        <div class="intro-body">
          <p>A self-assessment that takes 25 to 30 minutes.</p>
          <p>It maps where energy is being consumed across seven areas: <strong>energy output, recovery load, override frequency, masking cost, environmental fit, cumulative strain,</strong> and <strong>collapse patterns.</strong></p>
          <p>It then identifies where pressure begins: <strong>Personal. Interactional. Structural.</strong></p>
          <p class="italic-line">Not everything that feels personal starts there.</p>
          <p>There is no expected profile. Recognition precedes labels. Diagnosis is never required for validity.</p>
        </div>

        <div class="scale-explainer">
          <p class="scale-explainer-label">The scale for each question:</p>
          <div class="scale-preview">
            ${x.map(t=>`<div class="scale-preview-item"><span class="scale-num">${t.value}</span><span class="scale-txt">${t.label}</span></div>`).join("")}
            <div class="scale-preview-item"><span class="scale-num">—</span><span class="scale-txt">Not sure / skip</span></div>
          </div>
        </div>

        <button class="btn-primary" id="startBtn">Begin</button>
      </div>
    </div>
  `,document.getElementById("startBtn").addEventListener("click",()=>{p="quiz",u=0,y()})}function ee(){const t=N[u],e=F[t],n=j.filter(i=>T[i].domain===t),a=N.length,o=Math.round(u/a*100);Q.innerHTML=`
    <div class="container quiz-container">
      <div class="progress-bar-wrap">
        <div class="progress-bar" style="width:${o}%"></div>
      </div>
      <div class="domain-header">
        <span class="domain-number">${e.number}</span>
        <span class="domain-title">${e.title}</span>
        <span class="domain-count">${u+1} of ${a}</span>
      </div>

      <div class="questions-list">
        ${n.map(i=>te(i)).join("")}
      </div>

      <div class="quiz-nav">
        ${u>0?'<button class="btn-secondary" id="prevBtn">Back</button>':"<span></span>"}
        <button class="btn-primary" id="nextBtn">${u<a-1?"Next section":"See results"}</button>
      </div>
    </div>
  `,n.forEach(i=>{const s=v[i];if(s===U){const r=document.querySelector(`input[name="${i}"][value="skip"]`);r&&(r.checked=!0)}else if(typeof s=="number"){const r=document.querySelector(`input[name="${i}"][value="${s}"]`);r&&(r.checked=!0)}}),document.querySelectorAll('.question-row input[type="radio"]').forEach(i=>{i.addEventListener("change",s=>{const{name:r,value:c}=s.target;v[r]=c==="skip"?U:parseInt(c,10)})}),document.getElementById("nextBtn").addEventListener("click",()=>{u<N.length-1?(u++,y(),window.scrollTo(0,0)):(p="results",y(),window.scrollTo(0,0))}),document.getElementById("prevBtn")&&document.getElementById("prevBtn").addEventListener("click",()=>{u--,y(),window.scrollTo(0,0)})}function te(t){const e=T[t];return`
    <div class="question-row" id="q-${t}">
      <div class="question-text">${e.text}</div>
      ${e.hint?`<div class="question-hint">${e.hint}</div>`:""}
      <div class="radio-group">
        ${x.map(n=>`
          <label class="radio-label">
            <input type="radio" name="${t}" value="${n.value}" />
            <span class="radio-outer"><span class="radio-inner"></span></span>
            <span class="radio-text">${n.label}</span>
          </label>
        `).join("")}
        <label class="radio-label radio-skip">
          <input type="radio" name="${t}" value="skip" />
          <span class="radio-outer"><span class="radio-inner"></span></span>
          <span class="radio-text">Not sure / skip</span>
        </label>
      </div>
    </div>
  `}function ne(){var g;const t=B(v),e=L(t),n=O(e),a=C(t),o=M(n,t),i=q(v),s=_(i),r=H(t),c=P(t),f=n.primary==="structural"||n.state==="clean"&&n.primary==="structural",d=n.primary==="personal",l=a.some(h=>h==="environment");Q.innerHTML=`
    <div class="container results-container">

      <!-- S1: Canonical Header -->
      <div class="results-header-box">
        <p class="results-header-text">${K}</p>
      </div>

      <!-- Confidence -->
      ${s==="Very Low"?'<div class="confidence-warning"><strong>Low response rate.</strong> These results are directional only. Answer more questions for a clearer picture.</div>':""}
      ${r?`<div class="dominance-note">One domain — <strong>${((g=D[r])==null?void 0:g.label)||r}</strong> — is significantly higher than the others. Results reflect this concentration.</div>`:""}

      <!-- S2: Capacity Frame -->
      <div class="results-section">
        <h2 class="results-section-title">Your load map</h2>
        <p class="capacity-line">Capacity available today: <strong>${c!==null?c+"%":"—"}</strong></p>
        <p class="capacity-note">This is not a performance score. It is what remains after the taking.</p>

        <div class="domain-bars">
          ${N.map(h=>{const w=t[h];if(w===null)return"";const I=D[h];return`
              <div class="domain-bar-row">
                <div class="domain-bar-label">${I.label}</div>
                <div class="domain-bar-track">
                  <div class="domain-bar-fill" style="width:${w}%;background:${I.color}"></div>
                </div>
                <div class="domain-bar-score">${w}</div>
              </div>
            `}).join("")}
        </div>
        <p class="confidence-line">Confidence: <strong>${s}</strong> (${Math.round(i*100)}% of questions answered)</p>
      </div>

      <!-- S3: Primary Driver -->
      <div class="results-section">
        <h2 class="results-section-title">Where cost is coming from</h2>
        ${oe(n,e)}
      </div>

      <!-- S4: Leverage -->
      <div class="results-section">
        <h2 class="results-section-title">Where to begin</h2>
        <p class="leverage-intro">${z}</p>
        ${d&&l?`<p class="seam-note">${X}</p>`:""}
        ${a.length>1&&f?`<p class="structural-overlay-note">${J}</p>`:""}
        ${a.map(h=>ie(h)).join("")}
      </div>

      <!-- S5: Book Direction -->
      <div class="results-section">
        <h2 class="results-section-title">Where to go next</h2>
        ${se(o)}
      </div>

      <!-- S6: Re-test -->
      <div class="results-section retest-section">
        <h2 class="results-section-title">Revisit</h2>
        <p class="retest-text">${W}</p>
      </div>

      <!-- Canonical Closing -->
      <div class="results-closing-box">
        ${V.split(`

`).map(h=>`<p>${h}</p>`).join("")}
      </div>

      <div class="results-actions">
        <button class="btn-secondary" id="retakeBtn">Start again</button>
      </div>

    </div>
  `,document.getElementById("retakeBtn").addEventListener("click",()=>{v={},u=0,p="intro",y(),window.scrollTo(0,0)})}function oe(t,e){const{state:n,primary:a,secondary:o,delta:i}=t,s={personal:"Personal",interactional:"Interactional",structural:"Structural"};let r="",c="";if(n==="mixed")r=b.mixed.headline,c=b.mixed.body;else{const l=(n==="primary_secondary"?b.primary_secondary:b.clean)[a]||{};r=l.headline||"",c=(l.body||"").replace("{secondary}",s[o]||o)}const f=Object.entries(e).sort((d,l)=>l[1]-d[1]).map(([d,l])=>`
      <div class="attribution-bar-row ${d===a&&n!=="mixed"?"attribution-primary":""}">
        <div class="attribution-label">${s[d]}</div>
        <div class="attribution-track">
          <div class="attribution-fill" style="width:${l}%"></div>
        </div>
        <div class="attribution-score">${l}</div>
      </div>
    `).join("");return`
    <p class="driver-headline">${r}</p>
    <p class="driver-body">${c}</p>
    <div class="attribution-bars">${f}</div>
  `}function ie(t){const e=G[t],n=D[t];return e?`
    <div class="leverage-card">
      <div class="leverage-card-header" style="border-left-color:${n.color}">
        <span class="lever-badge lever-${e.lever.toLowerCase()}">${e.lever}</span>
        <span class="leverage-domain-name">${n.label}</span>
      </div>
      <p class="leverage-primary">${e.primary}</p>
      <ul class="leverage-actions">
        ${e.actions.map(a=>`<li>${a}</li>`).join("")}
      </ul>
      <p class="do-not-line"><strong>Do not:</strong> ${e.doNot}</p>
    </div>
  `:""}function se(t){const{driverBook:e,leverageBook:n,same:a}=t;return a?`
      <div class="book-card">
        <div class="book-title">${n}</div>
        <div class="book-desc">${k[n]}</div>
        <div class="book-entry">${E[n]}</div>
      </div>
    `:`
    <div class="book-card">
      <div class="book-label">To address the origin:</div>
      <div class="book-title">${e}</div>
      <div class="book-desc">${k[e]}</div>
      <div class="book-entry">${E[e]}</div>
    </div>
    <p class="book-bridge">The leverage domain points elsewhere first.</p>
    <div class="book-card book-card-secondary">
      <div class="book-label">To address the first action:</div>
      <div class="book-title">${n}</div>
      <div class="book-desc">${k[n]}</div>
      <div class="book-entry">${E[n]}</div>
    </div>
  `}y();
