/* ═══════════════════════════════════════
   TONY STYLES · GROWTHENGINE
   Shared JavaScript
═══════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── NAVBAR SCROLL ── */
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 40);
    });
  }

  /* ── ACTIVE NAV LINK ── */
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
    if (a.getAttribute('href') === page || (page === '' && a.getAttribute('href') === 'index.html')) {
      a.classList.add('active');
    }
  });

  /* ── MOBILE MENU ── */
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const closeMenu  = document.querySelector('.close-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => mobileMenu.classList.add('open'));
    closeMenu?.addEventListener('click', () => mobileMenu.classList.remove('open'));
    mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileMenu.classList.remove('open')));
  }

  /* ── ACCORDION ── */
  document.querySelectorAll('.accordion-trigger').forEach(btn => {
    btn.addEventListener('click', () => {
      const content = btn.nextElementSibling;
      const isOpen = btn.classList.contains('open');
      // close all
      document.querySelectorAll('.accordion-trigger').forEach(b => {
        b.classList.remove('open');
        b.nextElementSibling.classList.remove('open');
      });
      if (!isOpen) {
        btn.classList.add('open');
        content.classList.add('open');
      }
    });
  });

  /* ── TABS ── */
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const group = btn.closest('[data-tabs]');
      group.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      group.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      group.querySelector(`[data-panel="${btn.dataset.tab}"]`).classList.add('active');
    });
  });

  /* ── FORMS — simulate submission ── */
  document.querySelectorAll('form[data-form]').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const btn = form.querySelector('[type=submit]');
      const successId = form.dataset.success;
      btn.textContent = 'Sending…';
      btn.disabled = true;
      setTimeout(() => {
        form.style.display = 'none';
        if (successId) {
          const box = document.getElementById(successId);
          if (box) box.classList.add('show');
        }
      }, 1400);
    });
  });

  /* ── FINANCE / ROI CALCULATOR ── */
  const calcBtn = document.getElementById('calcBtn');
  if (calcBtn) {
    calcBtn.addEventListener('click', () => {
      const rev  = parseFloat(document.getElementById('calcRev')?.value)  || 0;
      const rate = parseFloat(document.getElementById('calcRate')?.value) || 0;
      const aov  = parseFloat(document.getElementById('calcAOV')?.value)  || 0;
      if (!rev || !rate || !aov) { alert('Please fill in all three fields.'); return; }
      const liftPct = 0.32;
      const lift    = Math.round(rev * liftPct);
      const annual  = lift * 12;
      const el = document.getElementById('calcResult');
      if (el) {
        el.innerHTML = `
          <div class="calc-result-inner">
            <p class="label" style="margin-bottom:8px">Your Estimated Results</p>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin:20px 0">
              <div class="stat"><div class="stat-value">$${lift.toLocaleString()}</div><div class="stat-label">Monthly revenue lift</div></div>
              <div class="stat"><div class="stat-value">$${annual.toLocaleString()}</div><div class="stat-label">Annual revenue lift</div></div>
            </div>
            <p style="font-size:13px;text-align:center;color:rgba(248,250,255,0.55)">Estimate based on average 32% lift seen across pet & baby brand clients with optimised email copy.</p>
          </div>`;
        el.style.display = 'block';
      }
    });
  }

  /* ── QUIZ RECOMMENDER ── */
  const quizBtn = document.getElementById('quizBtn');
  if (quizBtn) {
    quizBtn.addEventListener('click', () => {
      const rev  = document.getElementById('q1')?.value;
      const need = document.getElementById('q2')?.value;
      const goal = document.getElementById('q3')?.value;
      if (!rev || !need || !goal) { alert('Please answer all 3 questions.'); return; }
      let tier = 'Starter Copy (Tier 1)';
      let why  = "You're at the perfect stage to test what great copy can do for your brand. A focused project will show you the ROI before you commit to ongoing work.";
      let link = 'contact.html';
      if (rev === 'mid' || rev === 'high') { tier = 'Performance Copy (Tier 2)'; why = "You're generating real revenue and ready to use copy as a lever. A performance-based retainer means Tony's success is tied directly to yours."; }
      if (rev === 'high' && goal === 'scale') { tier = 'Growth Partnership (Tier 3)'; why = "You're ready to treat copy as a core growth function. Tony embeds into your brand with a stake in the outcome — real partnership, real results."; }
      const el = document.getElementById('quizResult');
      if (el) {
        el.innerHTML = `
          <div class="badge badge-gold" style="margin-bottom:14px">✦ Your Recommendation</div>
          <h3 style="margin-bottom:12px">${tier}</h3>
          <p style="margin-bottom:24px">${why}</p>
          <a href="${link}" class="btn btn-gold">Apply for This Plan →</a>`;
        el.style.display = 'block';
      }
    });
  }

  /* ── COPY AUDIT WIDGET ── */
  const auditBtn = document.getElementById('auditBtn');
  if (auditBtn) {
    auditBtn.addEventListener('click', () => {
      const copy = document.getElementById('auditCopy')?.value.trim();
      if (!copy || copy.length < 20) { alert('Please paste at least 20 characters of copy.'); return; }
      auditBtn.textContent = 'Analysing…';
      auditBtn.disabled = true;
      setTimeout(() => {
        const el = document.getElementById('auditResult');
        if (el) {
          el.innerHTML = `
            <p class="label" style="margin-bottom:16px">3 Things Holding Your Copy Back</p>
            <div style="display:flex;flex-direction:column;gap:14px;margin-bottom:24px">
              <div class="card" style="padding:16px"><strong style="color:var(--red)">❶ No clear hook in the first line.</strong><br/><span style="font-size:13px;color:rgba(248,250,255,0.6)">Your reader decides in 2 seconds. Lead with the biggest benefit or boldest claim — not the product name.</span></div>
              <div class="card" style="padding:16px"><strong style="color:var(--red)">❷ Features, not feelings.</strong><br/><span style="font-size:13px;color:rgba(248,250,255,0.6)">Pet and baby buyers don't buy specs — they buy safety, love, and peace of mind. Reframe every feature as an emotional outcome.</span></div>
              <div class="card" style="padding:16px"><strong style="color:var(--red)">❸ Weak or missing CTA.</strong><br/><span style="font-size:13px;color:rgba(248,250,255,0.6)">Your call-to-action should feel like the natural next step, not a demand. Make it specific: "Shop the Bundle" beats "Buy Now."</span></div>
            </div>
            <div style="background:var(--gold-dim);border:1px solid rgba(201,168,76,0.25);border-radius:10px;padding:18px;text-align:center">
              <p style="font-size:14px;margin-bottom:12px"><strong style="color:var(--gold-light)">Want Tony to personally audit your full copy?</strong> It's free — he'll send you a detailed Loom video within 48 hours.</p>
              <a href="contact.html#audit" class="btn btn-gold btn-sm">Get My Free Full Audit →</a>
            </div>`;
          el.style.display = 'block';
        }
        auditBtn.textContent = 'Analyse My Copy';
        auditBtn.disabled = false;
      }, 2000);
    });
  }

  /* ── SUBJECT LINE TESTER ── */
  const slBtn = document.getElementById('slBtn');
  if (slBtn) {
    slBtn.addEventListener('click', () => {
      const line = document.getElementById('subjectLine')?.value.trim();
      if (!line) { alert('Please enter a subject line.'); return; }
      const len = line.length;
      let score = 5;
      if (len > 20 && len < 55) score += 2;
      if (line.includes('?')) score += 1;
      if (/\d/.test(line)) score += 1;
      if (line.length < 10) score -= 2;
      score = Math.min(10, Math.max(2, score));
      const colour = score >= 8 ? 'var(--teal)' : score >= 6 ? 'var(--gold)' : 'var(--red)';
      const el = document.getElementById('slResult');
      if (el) {
        el.innerHTML = `
          <div style="text-align:center;margin-bottom:20px">
            <div style="font-family:var(--font-head);font-size:56px;font-weight:900;color:${colour};line-height:1">${score}<span style="font-size:24px;color:var(--slate)">/10</span></div>
            <p style="color:var(--slate);font-size:13px">Open Rate Score</p>
          </div>
          <p style="margin-bottom:16px">Here are 3 stronger alternatives for your pet/baby audience:</p>
          <div style="display:flex;flex-direction:column;gap:10px">
            <div class="card" style="padding:14px;font-size:14px">🐾 "Is your [pet product] really doing enough for your dog?"</div>
            <div class="card" style="padding:14px;font-size:14px">👶 "The one thing 9/10 baby brands get wrong (and how to fix it)"</div>
            <div class="card" style="padding:14px;font-size:14px">📬 "We analysed 200 emails. Here's what made them click."</div>
          </div>`;
        el.style.display = 'block';
      }
    });
  }

  /* ── SMOOTH SCROLL TO HASH ── */
  if (location.hash) {
    setTimeout(() => {
      const el = document.querySelector(location.hash);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 300);
  }

  /* ── INTERSECTION OBSERVER for .reveal ── */
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    reveals.forEach(el => io.observe(el));
  }

});
