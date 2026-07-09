document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const isEmbed = urlParams.get('embed') === '1';

  // ===== SOUND ENGINE =====
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  let audioCtx;
  function ensureAudio() { if (!audioCtx) audioCtx = new AudioCtx(); }
  function playSound(type) {
    ensureAudio();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain); gain.connect(audioCtx.destination);
    const now = audioCtx.currentTime;
    switch (type) {
      case 'click': osc.type='sine'; osc.frequency.setValueAtTime(500,now); osc.frequency.exponentialRampToValueAtTime(800,now+.06); gain.gain.setValueAtTime(.6,now); gain.gain.exponentialRampToValueAtTime(.001,now+.12); osc.start(now); osc.stop(now+.12); break;
      case 'nav': osc.type='sine'; osc.frequency.setValueAtTime(380,now); osc.frequency.exponentialRampToValueAtTime(760,now+.08); gain.gain.setValueAtTime(.5,now); gain.gain.exponentialRampToValueAtTime(.001,now+.15); osc.start(now); osc.stop(now+.15); break;
      case 'open': osc.type='triangle'; osc.frequency.setValueAtTime(280,now); osc.frequency.exponentialRampToValueAtTime(600,now+.15); gain.gain.setValueAtTime(.5,now); gain.gain.exponentialRampToValueAtTime(.001,now+.2); osc.start(now); osc.stop(now+.2); break;
      case 'close': osc.type='triangle'; osc.frequency.setValueAtTime(600,now); osc.frequency.exponentialRampToValueAtTime(280,now+.15); gain.gain.setValueAtTime(.5,now); gain.gain.exponentialRampToValueAtTime(.001,now+.2); osc.start(now); osc.stop(now+.2); break;
      case 'tab': osc.type='square'; osc.frequency.setValueAtTime(460,now); osc.frequency.exponentialRampToValueAtTime(700,now+.05); gain.gain.setValueAtTime(.35,now); gain.gain.exponentialRampToValueAtTime(.001,now+.1); osc.start(now); osc.stop(now+.1); break;
      case 'modal': osc.type='sine'; osc.frequency.setValueAtTime(320,now); osc.frequency.exponentialRampToValueAtTime(640,now+.12); gain.gain.setValueAtTime(.5,now); gain.gain.exponentialRampToValueAtTime(.001,now+.2); osc.start(now); osc.stop(now+.2); break;
      case 'correct': {
        const audioCorrect = new Audio('assets/audio/tepuk_tangan.mp4');
        audioCorrect.volume = 1.0;
        audioCorrect.play().catch(e => console.log(e));
        return;
      }
      case 'wrong': {
        const audioWrong = new Audio('assets/audio/tetot.mp4');
        audioWrong.volume = 1.0;
        audioWrong.play().catch(e => console.log(e));
        return;
      }
    }
  }

  // ===== BACKSOUND =====
  const bgMusic = document.getElementById('bg-music');
  const audioToggle = document.getElementById('audio-toggle');
  let bgPlaying = false;
  bgMusic.volume = 0.4;
  function startBacksound() { bgMusic.play().then(() => { bgPlaying = true; audioToggle.textContent = '🔊'; audioToggle.classList.remove('muted'); }).catch(() => {}); }
  function stopBacksound() { bgMusic.pause(); bgPlaying = false; audioToggle.textContent = '🔇'; audioToggle.classList.add('muted'); }
  audioToggle.addEventListener('click', () => { if (bgPlaying) stopBacksound(); else startBacksound(); playSound('click'); });
  let backsoundAutoStarted = false;
  if (isEmbed) { backsoundAutoStarted = true; audioToggle.style.display = 'none'; }
  function autoStartBacksound() { if (!backsoundAutoStarted && !bgPlaying) { backsoundAutoStarted = true; startBacksound(); } document.removeEventListener('click', autoStartBacksound); document.removeEventListener('touchstart', autoStartBacksound); }
  if (!isEmbed) { document.addEventListener('click', autoStartBacksound); document.addEventListener('touchstart', autoStartBacksound); }

  // ===== PARTICLES =====
  const particlesEl = document.querySelector('.particles');
  if (!isEmbed) {
    const colors = ['#d4a843','#f0d68a','#a07830','#f5e6c8','#fff5d4'];
    for (let i = 0; i < 25; i++) {
      const p = document.createElement('div'); p.className = 'particle';
      const size = Math.random() * 5 + 2;
      p.style.cssText = `width:${size}px;height:${size}px;left:${Math.random()*100}%;background:${colors[Math.floor(Math.random()*colors.length)]};animation-duration:${Math.random()*14+8}s;animation-delay:${Math.random()*10}s;`;
      particlesEl.appendChild(p);
    }
  }

  // ===== SIDEBAR =====
  const sidebar = document.getElementById('sidebar');
  const sidebarOverlay = document.getElementById('sidebar-overlay');
  const sidebarToggle = document.getElementById('sidebar-toggle');
  const sidebarClose = document.getElementById('sidebar-close');
  function openSidebar() { sidebar.classList.add('open'); sidebarOverlay.classList.add('show'); playSound('open'); }
  function closeSidebar() { sidebar.classList.remove('open'); sidebarOverlay.classList.remove('show'); playSound('close'); }
  sidebarToggle.addEventListener('click', openSidebar);
  sidebarClose.addEventListener('click', closeSidebar);
  sidebarOverlay.addEventListener('click', closeSidebar);

  // ===== DATA =====
  const caseTitles = [
    'Ujaran Kebencian di Media Sosial',
    'Penyalahgunaan Dana Kegiatan Sekolah',
    'Pelanggaran Hak Menyampaikan Aspirasi'
  ];
  const caseIcons = ['📱','💰','📢'];
  const subMenus = [
    { key:'materi', icon:'📘', label:'Materi' },
    { key:'berkas', icon:'📂', label:'Berkas Kasus' },
    { key:'dasar-hukum', icon:'⚖️', label:'Dasar Hukum' },
    { key:'kartu-peran', icon:'🎭', label:'Kartu Peran' },
    { key:'bukti', icon:'📑', label:'Bukti Kasus' },
    { key:'putusan', icon:'📜', label:'Lembar Putusan' },
    { key:'refleksi', icon:'🪞', label:'Refleksi' }
  ];

  // Sub-menu content data for Kasus 1
  const subContent = {
    'materi': {
      title: 'Materi Pembelajaran',
      icon: '📘',
      cards: [
        { label:'Topik Utama', desc:'Ujaran kebencian di media sosial dan dampaknya terhadap kehidupan bermasyarakat.', type:'text' },
        { label:'Kompetensi Dasar', desc:'Menganalisis kasus pelanggaran hak dan pengingkaran kewajiban warga negara serta penanganannya.', type:'text' },
        { label:'Tujuan Pembelajaran', desc:'Peserta didik mampu memahami konsep kebebasan berekspresi, mengenali batas-batas hukum dalam ruang digital, dan mengevaluasi tanggung jawab warga negara di media sosial.', type:'text' },
        { label:'Konsep Kunci', desc:'Kebebasan berekspresi, etika digital, tanggung jawab warga negara, hak asasi manusia, UU ITE, demokrasi digital.', type:'text' }
      ]
    },
    'berkas': {
      title: 'Berkas Kasus',
      icon: '📂',
      cards: [
        { label:'Kronologi Kasus', desc:'Seorang siswa SMA memposting komentar berisi hinaan dan hasutan terhadap kelompok tertentu di media sosial. Postingan tersebut viral dan menimbulkan reaksi keras dari berbagai pihak. Pihak sekolah dan orang tua korban melaporkan kejadian tersebut.', type:'text' },
        { label:'Pihak Terlibat', desc:'Pelaku (siswa yang memposting), Korban (pihak yang dihina), Saksi (teman-teman yang melihat postingan), Pihak Sekolah, Orang Tua.', type:'text' },
        { label:'Pokok Persoalan', desc:'Apakah postingan tersebut termasuk ujaran kebencian? Bagaimana batas antara kebebasan berekspresi dan ujaran kebencian? Apa tanggung jawab pelaku dan langkah yang harus diambil?', type:'text' },
        { label:'Dokumen Pendukung', desc:'Screenshot postingan media sosial, catatan kronologi kejadian, laporan pihak sekolah, keterangan saksi-saksi.', type:'text' }
      ]
    },
    'kartu-peran': {
      title: 'Kartu Peran Sidang',
      icon: '🎭',
      cards: 'roles'
    },
    'bukti': {
      title: 'Bukti dan Dasar Pertimbangan',
      icon: '📑',
      cards: [
        { label:'Fakta Kasus', desc:'Bacalah kronologi, kejadian utama, dan informasi penting yang terdapat dalam kasus.', type:'textarea' },
        { label:'Bukti Sidang', desc:'Gunakan data, dokumen, pernyataan, atau keterangan yang tersedia sebagai dasar pendapat.', type:'textarea' },
        { label:'Dasar Hukum dan Pertimbangan', desc:'Perhatikan aturan, norma, hak, kewajiban, dan nilai kewargaan yang berkaitan dengan kasus.', type:'textarea' },
        { label:'Catatan Penting', desc:'Pilih bukti yang paling relevan. Jangan menggunakan pendapat tanpa dasar. Pastikan bukti yang dipakai benar-benar mendukung argumenmu.', type:'text' }
      ],
      footer: 'Argumen yang baik tidak hanya terdengar meyakinkan, tetapi juga ditopang bukti dan alasan yang jelas.'
    },
    'dasar-hukum': {
      title: 'Dasar Hukum',
      icon: '⚖️',
      cards: [
        { label:'UU No. 11 Tahun 2008 (UU ITE)', desc:'Pasal 28 ayat (2): "Setiap orang dengan sengaja dan tanpa hak menyebarkan informasi yang ditujukan untuk menimbulkan rasa kebencian atau permusuhan individu dan/atau kelompok masyarakat tertentu berdasarkan suku, agama, ras, dan antargolongan (SARA)."', type:'text' },
        { label:'UUD 1945 Pasal 28E', desc:'Setiap orang berhak atas kebebasan berserikat, berkumpul, dan mengeluarkan pendapat. Namun kebebasan ini dibatasi oleh hak orang lain dan aturan hukum yang berlaku.', type:'text' },
        { label:'UUD 1945 Pasal 28J', desc:'Setiap orang wajib menghormati hak asasi manusia orang lain dan wajib tunduk kepada pembatasan yang ditetapkan undang-undang.', type:'text' },
        { label:'Nilai Pancasila', desc:'Sila ke-2 (Kemanusiaan yang adil dan beradab) dan Sila ke-5 (Keadilan sosial) menjadi landasan moral dalam menilai tindakan ujaran kebencian.', type:'text' }
      ]
    },
    'putusan': {
      title: 'Lembar Putusan',
      icon: '📜',
      cards: [
        { label:'Pokok Persoalan', desc:'Tuliskan inti masalah yang dibahas dalam sidang.', type:'textarea' },
        { label:'Keputusan/Putusan', desc:'Tuliskan hasil keputusan kelompok secara jelas.', type:'textarea' },
        { label:'Bukti Utama yang Digunakan', desc:'Sebutkan bukti yang paling kuat dalam mendukung keputusan.', type:'textarea' },
        { label:'Alasan Keputusan', desc:'Jelaskan mengapa keputusan tersebut dipilih.', type:'textarea' },
        { label:'Pihak yang Terdampak', desc:'Jelaskan siapa yang akan menerima dampak dari keputusan tersebut.', type:'textarea' },
        { label:'Tindak Lanjut', desc:'Tuliskan langkah yang sebaiknya dilakukan setelah putusan ditetapkan.', type:'textarea' }
      ],
      footer: 'Keputusan yang baik lahir dari pertimbangan yang matang. Putusan harus adil, masuk akal, dan didukung bukti.'
    },
    'refleksi': {
      title: 'Refleksi dan Umpan Balik',
      icon: '🪞',
      cards: [
        { label:'Apa persoalan utama yang kamu pahami?', desc:'Tuliskan kembali inti persoalan dengan bahasamu sendiri.', type:'textarea' },
        { label:'Bukti apa yang paling kuat menurutmu?', desc:'Jelaskan bukti yang paling meyakinkan dan alasannya.', type:'textarea' },
        { label:'Argumen mana yang paling kuat?', desc:'Sebutkan argumen yang menurutmu paling jelas dan masuk akal.', type:'textarea' },
        { label:'Apa bagian yang masih sulit?', desc:'Jelaskan bagian yang masih membingungkan.', type:'textarea' },
        { label:'Apa pelajaran yang kamu peroleh?', desc:'Tuliskan hal penting yang kamu pelajari tentang kewargaan, keadilan, tanggung jawab, atau penggunaan bukti.', type:'textarea' }
      ],
      footer: 'Belajar yang baik bukan hanya menyelesaikan tugas, tetapi juga memahami proses berpikir yang dijalani.'
    }
  };

  const roles = [
    { name:'Hakim', img:'assets/hakim.png', badge:'bg:var(--navy)', desc:'Tugas hakim adalah memimpin jalannya sidang, menjaga ketertiban, memberi kesempatan bicara secara adil, dan memandu kelompok sampai pada putusan yang dapat dipertanggungjawabkan.' },
    { name:'Panitera', img:'assets/panitera.png', badge:'bg:var(--teal)', desc:'Tugas panitera adalah mencatat jalannya sidang, mencatat bukti yang digunakan, menuliskan inti argumen, dan membantu merapikan hasil putusan.' },
    { name:'Penggugat', img:'assets/penggugat.png', badge:'bg:#c0392b', desc:'Tugas penggugat adalah menyampaikan keberatan, menunjukkan pokok persoalan, menyajikan bukti yang mendukung, dan menjelaskan alasan mengapa tuntutannya layak dipertimbangkan.' },
    { name:'Tergugat', img:'assets/tergugat.png', badge:'bg:var(--wood-light)', desc:'Tugas tergugat adalah memberikan jawaban terhadap tuduhan, menyampaikan penjelasan, menggunakan bukti pendukung, dan mempertahankan argumennya secara tertib.' },
    { name:'Saksi', img:'assets/saksi.png', badge:'bg:#8e44ad', desc:'Tugas saksi adalah memberikan keterangan yang relevan dengan kasus, menjelaskan fakta yang diketahui, dan membantu sidang memahami peristiwa secara lebih jelas.' },
    { name:'Ahli PPKn', img:'assets/ahli.png', badge:'bg:var(--gold-dark)', desc:'Tugas ahli PPKn adalah memberikan penjelasan tentang nilai kewargaan, aturan, hak, kewajiban, atau prinsip yang relevan dengan kasus yang sedang dibahas.' }
  ];

  // ===== BUILD SIDEBAR LINKS =====
  const sidebarLinksEl = document.getElementById('sidebar-links');
  const sidebarItems = [
    { icon:'🏠', label:'Beranda', target:'beranda' },
    { icon:'📊', label:'Dashboard', target:'dashboard' },
    { divider: true },
    { icon:'📱', label:'Kasus 1', target:'menu-kasus-1' },
    { icon:'💰', label:'Kasus 2', target:'menu-kasus-2' },
    { icon:'📢', label:'Kasus 3', target:'menu-kasus-3' }
  ];
  sidebarItems.forEach(item => {
    if (item.divider) {
      const d = document.createElement('div'); d.className = 'sidebar-divider';
      sidebarLinksEl.appendChild(d); return;
    }
    const btn = document.createElement('button');
    btn.className = 'nav-link';
    btn.dataset.target = item.target;
    btn.innerHTML = `<span class="nav-icon">${item.icon}</span>${item.label}`;
    btn.addEventListener('click', () => { navigateTo(item.target); playSound('click'); });
    sidebarLinksEl.appendChild(btn);
  });

  // ===== BUILD MENU-KASUS SECTIONS =====
  for (let k = 1; k <= 3; k++) {
    const sec = document.getElementById(`menu-kasus-${k}`);
    const prevK = k > 1 ? k - 1 : null;
    const nextK = k < 3 ? k + 1 : null;
    sec.innerHTML = `
      <div class="section-header">
        <div class="section-icon">${caseIcons[k-1]}</div>
        <h2 class="section-title">${caseTitles[k-1]}</h2>
        <div class="banner-divider"></div>
        <p class="section-subtitle">Kasus ${k} — Pilih menu di bawah untuk memulai simulasi sidang.</p>
      </div>
      <div class="menu-grid">
        ${subMenus.map(m => `<div class="menu-card" data-sub="${m.key}" data-kasus="${k}"><span class="menu-icon">${m.icon}</span><span class="menu-label">${m.label}</span></div>`).join('')}
      </div>
      <div class="section-nav">
        ${prevK ? `<button class="nav-arrow-btn nav-arrow-prev" data-nav="menu-kasus-${prevK}" title="Kasus ${prevK}">◀</button>` : '<button class="nav-arrow-btn nav-arrow-prev" disabled>◀</button>'}
        <button class="nav-home-btn" data-nav="dashboard" title="Dashboard">🏠</button>
        ${nextK ? `<button class="nav-arrow-btn nav-arrow-next" data-nav="menu-kasus-${nextK}" title="Kasus ${nextK}">▶</button>` : '<button class="nav-arrow-btn nav-arrow-next" disabled>▶</button>'}
      </div>`;
  }

  // ===== NAVIGATION =====
  const sections = document.querySelectorAll('.section');
  const progressBar = document.querySelector('.progress-bar');
  let currentSection = 'beranda';
  let currentKasus = 1;
  let activeSubmenuIdx = null;

  function navigateTo(id) {
    sections.forEach(s => s.classList.remove('active'));
    const target = document.getElementById(id);
    if (target) target.classList.add('active');
    // Update sidebar active state
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    const sideLink = document.querySelector(`.nav-link[data-target="${id}"]`);
    if (sideLink) sideLink.classList.add('active');
    // Progress bar
    const levels = { 'beranda':5, 'dashboard':15, 'menu-kasus-1':30, 'menu-kasus-2':30, 'menu-kasus-3':30, 'sub-page':60 };
    progressBar.style.width = (levels[id] || 50) + '%';
    currentSection = id;
    if (id.startsWith('menu-kasus-')) currentKasus = parseInt(id.split('-')[2]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    closeSidebar();
    playSound('nav');
    // Re-bind data-nav buttons in dynamic content
    setTimeout(bindNavButtons, 50);
  }

  function bindNavButtons() {
    document.querySelectorAll('[data-nav]').forEach(btn => {
      if (btn._bound) return;
      btn._bound = true;
      btn.addEventListener('click', () => { playSound('click'); navigateTo(btn.dataset.nav); });
    });
    // Menu card clicks
    document.querySelectorAll('.menu-card').forEach(card => {
      if (card._bound) return;
      card._bound = true;
      card.addEventListener('click', () => {
        const subKey = card.dataset.sub;
        const kasus = parseInt(card.dataset.kasus);
        currentKasus = kasus;
        openSubPage(subKey, kasus);
        playSound('click');
      });
    });
    // Role card clicks
    document.querySelectorAll('.role-card').forEach(card => {
      if (card._bound) return;
      card._bound = true;
      card.addEventListener('click', () => {
        const modal = document.getElementById('role-modal');
        modal.querySelector('img').src = card.dataset.img;
        modal.querySelector('h3').textContent = card.dataset.role;
        modal.querySelector('p').textContent = card.dataset.desc;
        modal.classList.add('show');
        playSound('modal');
      });
    });
  }

  // ===== SUB-PAGE RENDERING =====
  function getCaseContent(kasus, subKey) {
    if (kasus === 1 && KASUS1[subKey]) return KASUS1[subKey];
    if (kasus === 2 && KASUS2[subKey]) return KASUS2[subKey];
    if (kasus === 3 && KASUS3[subKey]) return KASUS3[subKey];
    return subContent[subKey] || null;
  }

  function renderTabs(data) {
    const navHTML = `<div class="inner-nav">
      <button class="inner-nav-arrow" id="inner-prev" ${data.tabs.length<=1?'disabled':''}>◀</button>
      <div class="inner-nav-title"><span id="inner-title">${data.tabs[0].icon||''} ${data.tabs[0].label}</span><span class="inner-nav-counter" id="inner-counter">1 / ${data.tabs.length}</span></div>
      <button class="inner-nav-arrow" id="inner-next" ${data.tabs.length<=1?'disabled':''}>▶</button>
    </div>`;
    const panelsHTML = data.tabs.map((t,i) => {
      const content = t.quiz ? generateQuizHTML(t.quiz, t.intro, t.outro) : t.html;
      return `<div class="inner-panel${i===0?' active':''}" data-ipanel="${i}">${content}</div>`;
    }).join('');
    return navHTML + panelsHTML;
  }

  function generateQuizHTML(quizArray, intro, outro) {
    if (!intro || !outro) {
      // Fallback to simple quiz style if intro/outro are not specified
      let html = `<div class="quiz-container" id="quiz-container">`;
      quizArray.forEach((q, qi) => {
        html += `<div class="quiz-question" data-qi="${qi}">
          <p class="quiz-q-text"><strong>Soal ${qi+1}.</strong> ${q.question}</p>
          <div class="quiz-options">`;
        q.options.forEach((opt, oi) => {
          const letter = String.fromCharCode(65 + oi);
          html += `<label class="quiz-option" data-qi="${qi}" data-val="${letter}">
            <span class="quiz-option-letter">${letter}</span>
            <span class="quiz-option-text">${opt}</span>
          </label>`;
        });
        html += `</div></div>`;
      });
      html += `</div>
      <div class="quiz-result" id="quiz-result" style="display:none">
        <div class="quiz-result-inner">
          <h3>🏆 Hasil Kuis</h3>
          <div class="quiz-score-display">
            <div class="quiz-score-correct">✅ Benar: <span id="quiz-correct-count">0</span></div>
            <div class="quiz-score-wrong">❌ Salah: <span id="quiz-wrong-count">0</span></div>
            <div class="quiz-score-total">📊 Total: <span id="quiz-total-count">0</span> / ${quizArray.length}</div>
          </div>
          <div class="quiz-score-bar"><div class="quiz-score-fill" id="quiz-score-fill"></div></div>
          <p class="quiz-score-msg" id="quiz-score-msg" style="color:#ffffff !important; font-weight:800; font-size:1.25rem; text-shadow:0 2px 5px rgba(0,0,0,0.8); margin-top:16px;"></p>
        </div>
      </div>`;
      return html;
    }

    let html = `<div class="quiz-slideshow-container" id="quiz-slideshow-container">`;
    
    // Slide 0: Intro Slide
    html += `
      <div class="quiz-qslide active" data-qslide="0">
        <div class="content-card" style="border: 2px solid var(--gold-dark); border-radius: var(--radius-sm); background: linear-gradient(135deg, rgba(74,47,26,.8), rgba(42,26,14,.9)); margin-bottom: 0;">
          <h3 style="font-family:'MedievalSharp','Cinzel',serif;font-size:1.5rem;color:var(--gold-light);text-align:center;margin-bottom:10px;line-height:1.3;">🏆 ${intro.title}</h3>
          <p style="text-align:center;font-weight:700;color:var(--gold);margin-bottom:18px;font-size:1rem;line-height:1.3;">${intro.subtitle}</p>
          <p style="line-height:1.6;font-size:0.95rem;margin-bottom:16px;color:var(--parchment-dark);text-align:justify;">${intro.desc}</p>
          
          <div style="background:rgba(212,168,67,0.06);padding:14px;border-radius:8px;border:1px solid rgba(212,168,67,0.18);margin-bottom:16px;">
            <h4 style="color:var(--gold-light);margin-top:0;margin-bottom:8px;font-family:'MedievalSharp',serif;font-size:0.95rem;">📋 Petunjuk Kuis:</h4>
            <ul style="margin:0;padding-left:18px;font-size:0.88rem;line-height:1.5;color:var(--parchment-dark);">
              ${intro.petunjuk.map(p => `<li>${p}</li>`).join('')}
            </ul>
          </div>

          <div style="background:rgba(255,255,255,0.03);padding:14px;border-radius:8px;border:1px solid rgba(255,255,255,0.07);margin-bottom:20px;">
            <h4 style="color:var(--gold-light);margin-top:0;margin-bottom:8px;font-family:'MedievalSharp',serif;font-size:0.95rem;">🛡️ Fokus Kuis:</h4>
            <ul style="margin:0;padding-left:18px;font-size:0.88rem;line-height:1.5;color:var(--parchment-dark);list-style-type:decimal;">
              ${intro.fokus.map(f => `<li>${f}</li>`).join('')}
            </ul>
          </div>
          
          <p style="font-style:italic;font-size:0.85rem;color:var(--gold-light);text-align:center;margin-bottom:20px;">${intro.note}</p>
          
          <div style="text-align:center;">
            <button class="btn-gold" id="start-quiz-btn" style="padding:12px 28px;font-size:1.05rem;font-weight:800;font-family:Cinzel,serif;text-shadow:0 1px 2px rgba(0,0,0,0.5);">Mulai Kuis 🚀</button>
          </div>
        </div>
      </div>
    `;

    // Slides 1 to N: Questions
    quizArray.forEach((q, qi) => {
      html += `
        <div class="quiz-qslide" data-qslide="${qi+1}" style="display:none;">
          <div class="quiz-question" data-qi="${qi}">
            <p class="quiz-q-text" style="font-size:1.1rem;line-height:1.6;font-weight:700;margin-bottom:20px;"><strong>Soal ${qi+1} dari ${quizArray.length}.</strong><br>${q.question}</p>
            <div class="quiz-options" style="display:flex;flex-direction:column;gap:12px;margin-bottom:24px;">
      `;
      q.options.forEach((opt, oi) => {
        const letter = String.fromCharCode(65 + oi);
        html += `
          <label class="quiz-option" data-qi="${qi}" data-val="${letter}">
            <span class="quiz-option-letter">${letter}</span>
            <span class="quiz-option-text">${opt}</span>
          </label>
        `;
      });
      html += `
            </div>
            <div style="text-align:right;min-height:50px;">
              <button class="btn-gold next-q-btn" id="next-q-btn-${qi}" style="display:none;padding:10px 24px;font-weight:700;font-family:Cinzel,serif;">Lanjut Soal Berikutnya ▶</button>
            </div>
          </div>
        </div>
      `;
    });

    // Slide N+1: Outro & Results Slide
    html += `
      <div class="quiz-qslide" data-qslide="${quizArray.length+1}" style="display:none;">
        <div class="quiz-result" style="margin-top:0;">
          <div class="quiz-result-inner" style="border:3px solid var(--gold);border-radius:var(--radius);padding:24px;text-align:center;">
            <h3>🏆 Hasil Kuis</h3>
            <div class="quiz-score-display" style="display:flex;justify-content:center;gap:18px;margin-bottom:18px;flex-wrap:wrap;">
              <div class="quiz-score-correct">✅ Benar: <span id="quiz-correct-count">0</span></div>
              <div class="quiz-score-wrong">❌ Salah: <span id="quiz-wrong-count">0</span></div>
              <div class="quiz-score-total">📊 Total: <span id="quiz-total-count">0</span> / ${quizArray.length}</div>
            </div>
            <div class="quiz-score-bar" style="width:100%;height:14px;background:rgba(255,255,255,.1);border-radius:7px;overflow:hidden;margin-bottom:16px;">
              <div class="quiz-score-fill" id="quiz-score-fill" style="height:100%;background:linear-gradient(90deg,#27ae60,#2ecc71,#f1c40f);border-radius:7px;width:0;transition:width 1s cubic-bezier(.34,1.56,.64,1);"></div>
            </div>
            <p class="quiz-score-msg" id="quiz-score-msg" style="color:#ffffff !important; font-weight:800; font-size:1.2rem; text-shadow:0 2px 5px rgba(0,0,0,0.8); margin-top:16px; margin-bottom:0;"></p>
          </div>
        </div>

        <div class="content-card" style="margin-top:20px;border:2px solid var(--gold-dark);border-radius:var(--radius-sm);background: linear-gradient(135deg, rgba(74,47,26,.8), rgba(42,26,14,.9));">
          <h3 style="font-family:'MedievalSharp','Cinzel',serif;font-size:1.4rem;color:var(--gold-light);text-align:center;margin-bottom:10px;">🌟 ${outro.title}</h3>
          <p style="text-align:center;font-weight:700;color:var(--gold);margin-bottom:16px;font-size:0.95rem;">${outro.subtitle}</p>
          <p style="line-height:1.7;font-size:0.92rem;margin-bottom:16px;text-align:justify;color:var(--parchment-dark);">${outro.desc}</p>
          <div class="highlight-box" style="margin-top:14px;font-style:italic;text-align:center;font-size:0.9rem;">${outro.moral}</div>
        </div>
      </div>
    `;

    html += `</div>`;
    return html;
  }



  function renderEvidence(data) {
    return `<p class="section-subtitle" style="margin-bottom:24px">Klik bukti untuk melihat detail. Gunakan bukti sebagai dasar pendapat dan argumen.</p>
      <div class="bukti-grid">${data.evidence.map((e,i) => {
        const isVid = e.img && e.img.endsWith('.mp4');
        const mediaTag = isVid ? `<video class="bukti-card-img" src="${e.img}" muted loop></video>` : `<img class="bukti-card-img" src="${e.img}" alt="Bukti ${e.num}">`;
        return `
        <div class="bukti-card" data-bukti-idx="${i}">
          ${mediaTag}
          <div class="bukti-card-body">
            <span class="bukti-card-num">BUKTI ${e.num}</span>
            <div class="bukti-card-title">${e.title}</div>
          </div>
        </div>`;
      }).join('')}
      </div>
      <div class="footer-note">Argumen yang baik tidak hanya terdengar meyakinkan, tetapi juga ditopang bukti dan alasan yang jelas.</div>`;
  }

  function renderEvidenceSplit(data) {
    const renderGrid = (items, prefix) => items.map((e,i) => {
      const isVid = e.img && e.img.endsWith('.mp4');
      const mediaTag = isVid ? `<video class="bukti-card-img" src="${e.img}" muted loop></video>` : `<img class="bukti-card-img" src="${e.img}" alt="Bukti ${prefix} ${e.num}">`;
      return `
      <div class="bukti-card" data-bukti-idx="${i}" data-bukti-side="${prefix}">
        ${mediaTag}
        <div class="bukti-card-body">
          <span class="bukti-card-num">BUKTI ${e.num}</span>
          <div class="bukti-card-title">${e.title}</div>
        </div>
      </div>`;
    }).join('');

    return `<p class="section-subtitle" style="margin-bottom:18px">Pilih kategori bukti, lalu klik bukti untuk melihat detail.</p>
      <div class="bukti-split-tabs">
        <button class="bukti-split-tab active" data-bukti-tab="penggugat"><span class="bukti-tab-icon">🔴</span> Bukti Penggugat</button>
        <button class="bukti-split-tab" data-bukti-tab="tergugat"><span class="bukti-tab-icon">🔵</span> Bukti Tergugat</button>
      </div>
      <div class="bukti-split-panel active" data-bukti-panel="penggugat">
        <div class="bukti-split-header"><span class="bukti-split-badge penggugat">🔴</span><h3>Bukti Penggugat</h3><span class="bukti-split-count">${data.penggugat.length} Bukti</span></div>
        <div class="bukti-grid">${renderGrid(data.penggugat,'penggugat')}</div>
      </div>
      <div class="bukti-split-panel" data-bukti-panel="tergugat">
        <div class="bukti-split-header"><span class="bukti-split-badge tergugat">🔵</span><h3>Bukti Tergugat</h3><span class="bukti-split-count">${data.tergugat.length} Bukti</span></div>
        <div class="bukti-grid">${renderGrid(data.tergugat,'tergugat')}</div>
      </div>
      <div class="footer-note">Argumen yang baik tidak hanya terdengar meyakinkan, tetapi juga ditopang bukti dan alasan yang jelas.</div>`;
  }

  function renderRolesK2(data) {
    return `<p class="section-subtitle" style="margin-bottom:24px">Setiap peserta memiliki peran yang berbeda. Klik kartu untuk melihat tugas lengkap.</p>
      <div class="roles-grid">${data.roles.map((r,i) => `
        <div class="role-card" data-role-idx="${i}">
          <img class="role-card-img" src="${r.img}" alt="${r.name}">
          <div class="role-card-body"><h3>${r.name}</h3><p>${r.tugas[0]} ...</p></div>
        </div>`).join('')}
      </div>
      <div class="footer-note">Pahami peranmu. Jalankan tugasmu. Hormati argumen pihak lain.</div>`;
  }

  function renderCards(data) {
    let html = data.cards.map(c => {
      if (c.type === 'textarea') {
        return `<div class="content-card"><h3>${c.label}</h3><p class="content-desc">${c.desc}</p><textarea placeholder="Tuliskan jawabanmu di sini..."></textarea></div>`;
      }
      return `<div class="content-card"><h3>${c.label}</h3><p>${c.desc}</p></div>`;
    }).join('');
    if (data.footer) html += `<div class="footer-note">${data.footer}</div>`;
    return html;
  }

  function renderRolesK1() {
    return `<p class="section-subtitle" style="margin-bottom:24px">Setiap peserta memiliki peran yang berbeda. Pahami tugasmu dengan baik agar sidang berjalan tertib.</p>
      <div class="roles-grid">${roles.map(r => `
        <div class="role-card" data-img="${r.img}" data-role="${r.name}" data-desc="${r.desc.replace(/"/g,'&quot;')}">
          <img class="role-card-img" src="${r.img}" alt="${r.name}">
          <div class="role-card-body"><h3>${r.name}</h3><p>${r.desc.substring(0,80)}...</p></div>
        </div>`).join('')}
      </div>
      <div class="footer-note">Pahami peranmu. Jalankan tugasmu. Hormati argumen pihak lain.</div>`;
  }

  function openSubPage(subKey, kasus, submenuIdx = null) {
    const data = getCaseContent(kasus, subKey);
    if (!data) return;
    const subPage = document.getElementById('sub-page');
    let bodyHTML = '';
    
    // Set activeSubmenuIdx
    activeSubmenuIdx = submenuIdx;

    if (data.render === 'submenu') {
      if (submenuIdx === null) {
        // Choice screen
        bodyHTML = `
          <div class="menu-grid">
            ${data.submenus.map((sub, idx) => `
              <div class="menu-card submenu-card" data-sub-idx="${idx}" data-sub-key="${subKey}" data-sub-kasus="${kasus}">
                <div class="menu-card-fallback" style="font-size:3rem; display:flex; align-items:center; justify-content:center; border-bottom:2px solid var(--gold-dark); height:120px; position:relative; overflow:hidden;">${sub.icon}</div>
                <div class="menu-card-body" style="padding:16px 12px 18px; text-align:center;">
                  <span class="menu-label" style="font-size: 0.95rem; font-family:'MedievalSharp','Cinzel',serif; font-weight:700; color:var(--wood-dark); line-height:1.3; display:block;">${sub.label}</span>
                </div>
              </div>
            `).join('')}
          </div>
        `;
      } else {
        const sub = data.submenus[submenuIdx];
        const backBtn = `<div style="margin-bottom: 24px;">
          <button class="btn-gold" id="submenu-back-btn" data-sub-key="${subKey}" data-sub-kasus="${kasus}" style="padding: 10px 22px; font-weight: 700; font-family: Cinzel, serif; font-size:0.9rem; border:2px solid var(--gold-dark); border-radius:var(--radius-sm); cursor:pointer;">◀ Kembali ke Pilihan</button>
        </div>`;
        const tabsHTML = renderTabs(sub);
        bodyHTML = backBtn + tabsHTML;
      }
    } else {
      const renderType = data.render || (data.cards === 'roles' ? 'roles-k1' : 'cards');
      switch(renderType) {
        case 'tabs': bodyHTML = renderTabs(data); break;
        case 'evidence': bodyHTML = renderEvidence(data); break;
        case 'evidence-split': bodyHTML = renderEvidenceSplit(data); break;
        case 'roles': bodyHTML = renderRolesK2(data); break;
        case 'roles-k1': bodyHTML = renderRolesK1(); break;
        case 'cards': default: bodyHTML = renderCards(data); break;
      }
    }

    const curIdx = subMenus.findIndex(m => m.key === subKey);
    const prevSub = curIdx > 0 ? subMenus[curIdx - 1] : null;
    const nextSub = curIdx < subMenus.length - 1 ? subMenus[curIdx + 1] : null;

    subPage.innerHTML = `
      <div class="section-header">
        <div class="section-icon">${data.icon}</div>
        <h2 class="section-title">${data.title}</h2>
        <div class="banner-divider"></div>
        <p class="section-subtitle">Kasus ${kasus}: ${caseTitles[kasus-1]}</p>
      </div>
      ${bodyHTML}
      <div class="section-nav">
        ${prevSub ? `<button class="nav-arrow-btn nav-arrow-prev sub-nav-btn" data-sub-key="${prevSub.key}" data-sub-kasus="${kasus}" title="${prevSub.label}">◀</button>` : '<button class="nav-arrow-btn nav-arrow-prev" disabled>◀</button>'}
        <button class="nav-home-btn" data-nav="menu-kasus-${kasus}" title="Menu Kasus">🏠</button>
        ${nextSub ? `<button class="nav-arrow-btn nav-arrow-next sub-nav-btn" data-sub-key="${nextSub.key}" data-sub-kasus="${kasus}" title="${nextSub.label}">▶</button>` : '<button class="nav-arrow-btn nav-arrow-next" disabled>▶</button>'}
      </div>`;

    sections.forEach(s => s.classList.remove('active'));
    subPage.classList.add('active');
    progressBar.style.width = (30 + ((curIdx + 1) / subMenus.length) * 65) + '%';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    playSound('nav');

    setTimeout(() => {
      bindNavButtons();
      
      // Submenu cards interaction
      document.querySelectorAll('.submenu-card').forEach(card => {
        card.addEventListener('click', () => {
          const idx = parseInt(card.dataset.subIdx);
          const key = card.dataset.subKey;
          const k = parseInt(card.dataset.subKasus);
          openSubPage(key, k, idx);
        });
      });

      // Submenu back button
      const backBtn = document.getElementById('submenu-back-btn');
      if (backBtn) {
        backBtn.addEventListener('click', () => {
          const key = backBtn.dataset.subKey;
          const k = parseInt(backBtn.dataset.subKasus);
          openSubPage(key, k, null);
          playSound('click');
        });
      }

      // Inner nav arrows
      let innerIdx = 0;
      const prevBtn = document.getElementById('inner-prev');
      const nextBtn = document.getElementById('inner-next');
      const titleEl = document.getElementById('inner-title');
      const counterEl = document.getElementById('inner-counter');
      const currentTabsData = (data.render === 'submenu' && submenuIdx !== null) ? data.submenus[submenuIdx].tabs : data.tabs;
      
      if (prevBtn && nextBtn && currentTabsData) {
        function updateInnerNav() {
          document.querySelectorAll('.inner-panel').forEach(p => p.classList.remove('active'));
          const panel = document.querySelector(`.inner-panel[data-ipanel="${innerIdx}"]`);
          if (panel) panel.classList.add('active');
          titleEl.textContent = (currentTabsData[innerIdx].icon||'') + ' ' + currentTabsData[innerIdx].label;
          counterEl.textContent = (innerIdx+1) + ' / ' + currentTabsData.length;
          prevBtn.disabled = innerIdx === 0;
          nextBtn.disabled = innerIdx === currentTabsData.length - 1;
        }
        prevBtn.addEventListener('click', () => { if (innerIdx > 0) { innerIdx--; updateInnerNav(); playSound('tab'); } });
        nextBtn.addEventListener('click', () => { if (innerIdx < currentTabsData.length-1) { innerIdx++; updateInnerNav(); playSound('tab'); } });
        updateInnerNav();
      }
      
      // Bukti split tabs
      document.querySelectorAll('.bukti-split-tab').forEach(tab => {
        tab.addEventListener('click', () => {
          document.querySelectorAll('.bukti-split-tab').forEach(t => t.classList.remove('active'));
          document.querySelectorAll('.bukti-split-panel').forEach(p => p.classList.remove('active'));
          tab.classList.add('active');
          document.querySelector(`.bukti-split-panel[data-bukti-panel="${tab.dataset.buktiTab}"]`).classList.add('active');
          playSound('tab');
        });
      });

      // Bukti cards
      document.querySelectorAll('.bukti-card').forEach(card => {
        card.addEventListener('click', () => {
          const idx = parseInt(card.dataset.buktiIdx);
          const side = card.dataset.buktiSide;
          const e = side ? data[side][idx] : data.evidence[idx];
          const modal = document.getElementById('role-modal');
          const isVid = e.img && e.img.endsWith('.mp4');
          const mediaTag = isVid 
            ? `<video src="${e.img}" controls style="width:100%;height:auto;border-radius:10px;border:2px solid var(--gold-dark);margin-bottom:16px;object-fit:contain;background:#000"></video>`
            : `<img src="${e.img}" alt="Bukti ${e.num}" style="width:100%;height:auto;border-radius:10px;border:2px solid var(--gold-dark);margin-bottom:16px;object-fit:contain">`;
          modal.querySelector('.modal-content').classList.add('modal-rich', 'modal-bukti');
          modal.querySelector('.modal-content').innerHTML = `
            <button class="modal-close">✕</button>
            <div class="bukti-detail">
              <h3>Bukti ${e.num}: ${e.title}</h3>
              ${mediaTag}
              <p>${e.desc}</p>
              <div class="bukti-question"><strong>Pertanyaan Bukti:</strong><br>${e.question}</div>
            </div>`;
          modal.classList.add('show');
          modal.querySelector('.modal-close').addEventListener('click', () => { modal.classList.remove('show'); modal.querySelector('.modal-content').classList.remove('modal-rich', 'modal-bukti'); playSound('close'); });
          playSound('modal');
        });
      });

      // Role cards (Kasus 2)
      document.querySelectorAll('.role-card[data-role-idx]').forEach(card => {
        card.addEventListener('click', () => {
          const idx = parseInt(card.dataset.roleIdx);
          const r = data.roles[idx];
          const modal = document.getElementById('role-modal');
          modal.querySelector('.modal-content').classList.add('modal-rich');
          let extraHTML = '';
          if (r.extra) {
            extraHTML += `<div class="role-section"><h4>📋 ${r.extraTitle}</h4><ol>${r.extra.map(x=>`<li>${x}</li>`).join('')}</ol></div>`;
          }
          if (r.extraText) {
            extraHTML += `<div class="role-section"><h4>📌 ${r.extraTitle}</h4><p>${r.extraText}</p></div>`;
          }
          if (r.extra2Title) {
            extraHTML += `<div class="role-section"><h4>📌 ${r.extra2Title}</h4><p>${r.extra2Text}</p></div>`;
          }
          modal.querySelector('.modal-content').innerHTML = `
            <button class="modal-close">✕</button>
            <div class="role-header"><img src="${r.img}" alt="${r.name}"><h3>${r.name}</h3></div>
            <div class="role-section"><h4>📝 Tugas</h4><ol>${r.tugas.map(t=>`<li>${t}</li>`).join('')}</ol></div>
            ${extraHTML}`;
          modal.classList.add('show');
          modal.querySelector('.modal-close').addEventListener('click', () => { modal.classList.remove('show'); modal.querySelector('.modal-content').classList.remove('modal-rich'); playSound('close'); });
          playSound('modal');
        });
      });

      // Sub-nav prev/next
      document.querySelectorAll('.sub-nav-btn').forEach(btn => {
        if (btn._bound) return;
        btn._bound = true;
        btn.addEventListener('click', () => {
          playSound('click');
          openSubPage(btn.dataset.subKey, parseInt(btn.dataset.subKasus));
        });
      });

      // Quiz slideshow interaction
      const quizContainer = document.getElementById('quiz-slideshow-container');
      if (quizContainer) {
        let quizData = null;
        if (currentTabsData) {
          const quizTab = currentTabsData.find(t => t.quiz);
          if (quizTab) quizData = quizTab.quiz;
        }

        if (quizData) {
          let currentQSlide = 0;
          let answered = 0;
          let correctCount = 0;
          let wrongCount = 0;
          const totalQ = quizData.length;

          // Start Quiz Button
          const startQuizBtn = document.getElementById('start-quiz-btn');
          if (startQuizBtn) {
            startQuizBtn.addEventListener('click', () => {
              document.querySelector('[data-qslide="0"]').style.display = 'none';
              document.querySelector('[data-qslide="1"]').style.display = 'block';
              currentQSlide = 1;
              playSound('click');
            });
          }

          // Options click
          document.querySelectorAll('.quiz-option').forEach(opt => {
            opt.addEventListener('click', () => {
              const qi = parseInt(opt.dataset.qi);
              const qEl = document.querySelector(`.quiz-question[data-qi="${qi}"]`);
              if (qEl.classList.contains('quiz-answered')) return;
              qEl.classList.add('quiz-answered');
              answered++;
              const selected = opt.dataset.val;
              const correct = quizData[qi].answer;

              qEl.querySelectorAll('.quiz-option').forEach(o => {
                o.classList.add('quiz-disabled');
                if (o.dataset.val === correct) o.classList.add('quiz-correct');
                if (o.dataset.val === selected && selected !== correct) o.classList.add('quiz-wrong');
              });

              if (selected === correct) {
                correctCount++;
                playSound('correct');
              } else {
                wrongCount++;
                playSound('wrong');
              }

              // Show the next button
              const nextBtn = document.getElementById(`next-q-btn-${qi}`);
              if (nextBtn) {
                nextBtn.style.display = 'inline-block';
              }
            });
          });

          // Next slide buttons
          document.querySelectorAll('.next-q-btn').forEach((btn, idx) => {
            btn.addEventListener('click', () => {
              // Hide current question slide
              document.querySelector(`[data-qslide="${idx+1}"]`).style.display = 'none';
              currentQSlide = idx + 2;

              // Show next slide
              const nextSlide = document.querySelector(`[data-qslide="${currentQSlide}"]`);
              if (nextSlide) {
                nextSlide.style.display = 'block';
                playSound('click');
              }

              // If final results slide
              if (idx + 1 === totalQ) {
                document.getElementById('quiz-correct-count').textContent = correctCount;
                document.getElementById('quiz-wrong-count').textContent = wrongCount;
                document.getElementById('quiz-total-count').textContent = correctCount;
                const pct = Math.round((correctCount / totalQ) * 100);
                document.getElementById('quiz-score-fill').style.width = pct + '%';

                let msg = '';
                if (pct === 100) msg = '🌟 Luar biasa! Semua jawaban benar!';
                else if (pct >= 75) msg = '👏 Bagus sekali! Pemahamanmu sudah baik.';
                else if (pct >= 50) msg = '💪 Cukup baik. Coba pelajari lagi bagian yang salah.';
                else msg = '📚 Terus belajar ya! Baca kembali materi kasusnya.';
                document.getElementById('quiz-score-msg').textContent = msg;
              }
            });
          });
        }
      }
    }, 50);
  }

  // ===== ROLE MODAL =====
  const modal = document.getElementById('role-modal');
  modal.querySelector('.modal-close').addEventListener('click', () => { modal.classList.remove('show'); modal.querySelector('.modal-content').classList.remove('modal-rich', 'modal-bukti'); playSound('close'); });
  modal.addEventListener('click', e => { if (e.target === modal) { modal.classList.remove('show'); modal.querySelector('.modal-content').classList.remove('modal-rich', 'modal-bukti'); playSound('close'); } });

  // ===== ESCAPE KEY =====
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      if (modal.classList.contains('show')) { modal.classList.remove('show'); modal.querySelector('.modal-content').classList.remove('modal-rich', 'modal-bukti'); playSound('close'); }
      if (sidebar.classList.contains('open')) closeSidebar();
    }
  });

  // ===== INIT =====
  bindNavButtons();
  const hash = window.location.hash.substring(1);
  if (hash && document.getElementById(hash)) {
    navigateTo(hash);
  } else {
    navigateTo('beranda');
  }
});
