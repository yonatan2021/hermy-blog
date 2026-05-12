// ──────────────────────────────────────────
//  הרמי — Hermy Sound Identity
//  Synthesized audio via Web Audio API
//  No external files needed.
// ──────────────────────────────────────────

(function() {
  'use strict';

  const STORAGE_KEY = 'hermy-sound';
  const html = document.documentElement;

  // ── Audio Context (lazy init) ──────────
  let ctx = null;
  let masterGain = null;
  let isEnabled = false;

  function getCtx() {
    if (!ctx) {
      ctx = new (window.AudioContext || window.webkitAudioContext)();
      masterGain = ctx.createGain();
      masterGain.gain.value = 0.35; // Master volume
      masterGain.connect(ctx.destination);
    }
    if (ctx.state === 'suspended') {
      ctx.resume();
    }
    return { ctx, masterGain };
  }

  // ── Sound Generators ───────────────────

  // 1. Welcome chime — plays once on first load
  function playWelcome() {
    const { ctx, masterGain } = getCtx();

    const now = ctx.currentTime;
    const notes = [523.25, 659.25, 783.99]; // C5, E5, G5 — major triad
    const duration = 0.3;
    const gap = 0.12;

    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.value = freq;

      const start = now + i * gap;
      gain.gain.setValueAtTime(0, start);
      gain.gain.linearRampToValueAtTime(0.12, start + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, start + duration);

      osc.connect(gain);
      gain.connect(masterGain);
      osc.start(start);
      osc.stop(start + duration + 0.05);
    });
  }

  // 2. Card click / navigation — short blip
  function playBlip(pitch) {
    const { ctx, masterGain } = getCtx();
    const now = ctx.currentTime;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.value = pitch || 880; // A5

    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.08, now + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

    osc.connect(gain);
    gain.connect(masterGain);
    osc.start(now);
    osc.stop(now + 0.1);
  }

  // 3. Status change — soft micro-transition
  function playStatusChange() {
    const { ctx, masterGain } = getCtx();
    const now = ctx.currentTime;

    // Two-tone swoop
    [0, 0.08].forEach((offset, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(660 + i * 80, now + offset);
      osc.frequency.linearRampToValueAtTime(780 + i * 60, now + offset + 0.08);

      gain.gain.setValueAtTime(0, now + offset);
      gain.gain.linearRampToValueAtTime(0.05, now + offset + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.001, now + offset + 0.1);

      osc.connect(gain);
      gain.connect(masterGain);
      osc.start(now + offset);
      osc.stop(now + offset + 0.12);
    });
  }

  // 4. Page transition — soft whoosh
  function playWhoosh() {
    const { ctx, masterGain } = getCtx();
    const now = ctx.currentTime;

    // Noise burst with bandpass
    const bufferSize = ctx.sampleRate * 0.15;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * (1 - i / bufferSize);
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const bandpass = ctx.createBiquadFilter();
    bandpass.type = 'bandpass';
    bandpass.frequency.setValueAtTime(800, now);
    bandpass.frequency.linearRampToValueAtTime(400, now + 0.12);
    bandpass.Q.value = 1.5;

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.03, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

    noise.connect(bandpass);
    bandpass.connect(gain);
    gain.connect(masterGain);
    noise.start(now);
  }

  // 5. Ambient "thinking" — very subtle low hum (loop)
  let ambientNodes = null;

  function startAmbient() {
    if (ambientNodes) return;
    const { ctx, masterGain } = getCtx();
    const now = ctx.currentTime;

    // Two detuned sine waves — very quiet, creates a warm analog feel
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const gain = ctx.createGain();

    osc1.type = 'sine';
    osc1.frequency.value = 55; // A1
    osc2.type = 'sine';
    osc2.frequency.value = 55.5; // Slightly detuned — subtle beat

    gain.gain.value = 0.02; // Barely audible

    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(masterGain);

    osc1.start(now);
    osc2.start(now);

    ambientNodes = { osc1, osc2, gain };

    // Gradually fade in
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.02, now + 2);
  }

  function stopAmbient() {
    if (!ambientNodes) return;
    const now = ctx.currentTime;
    ambientNodes.gain.gain.linearRampToValueAtTime(0, now + 0.5);
    ambientNodes.osc1.stop(now + 0.6);
    ambientNodes.osc2.stop(now + 0.6);
    ambientNodes = null;
  }

  // ── Sound Library ──────────────────────
  const SOUNDS = {
    welcome: playWelcome,
    blip: () => playBlip(880),
    blipLow: () => playBlip(440),
    blipHigh: () => playBlip(1320),
    statusChange: playStatusChange,
    whoosh: playWhoosh,
    ambientStart: startAmbient,
    ambientStop: stopAmbient,
  };

  // ── State ──────────────────────────────
  function getStoredPreference() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'enabled') return true;
    // Default: disabled (respect user's peace)
    return false;
  }

  function setEnabled(val) {
    isEnabled = val;
    localStorage.setItem(STORAGE_KEY, val ? 'enabled' : 'disabled');
    html.setAttribute('data-sound', val ? 'on' : 'off');
    updateToggleIcon(val);

    if (val) {
      // Play welcome sound on enable
      setTimeout(() => playWelcome(), 100);
      // Start ambient
      startAmbient();
    } else {
      stopAmbient();
    }
  }

  function toggleSound() {
    setEnabled(!isEnabled);
  }

  // ── UI: Toggle Button ─────────────────
  let toggleBtn = null;

  function createToggleButton() {
    // Insert after theme toggle in header
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;

    toggleBtn = document.createElement('button');
    toggleBtn.className = 'sound-toggle';
    toggleBtn.id = 'soundToggle';
    toggleBtn.setAttribute('aria-label', 'Toggle ambient sound');
    toggleBtn.innerHTML = `
      <svg class="sound-icon-on" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
      </svg>
      <svg class="sound-icon-off" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
        <line x1="23" y1="9" x2="17" y2="15"/>
        <line x1="17" y1="9" x2="23" y2="15"/>
        <line x1="9" y1="9" x2="15" y2="15"/>
      </svg>
    `;
    toggleBtn.addEventListener('click', toggleSound);
    themeToggle.parentNode.insertBefore(toggleBtn, themeToggle.nextSibling);
  }

  function updateToggleIcon(enabled) {
    if (!toggleBtn) return;
    toggleBtn.classList.toggle('sound-enabled', enabled);
  }

  // ── Event Listeners ────────────────────

  // Play sound on navigation clicks (post cards, nav links)
  function handleNavSound(e) {
    if (!isEnabled) return;

    const target = e.target.closest('a');
    if (!target) return;

    // Different sounds for different interactions
    if (target.classList.contains('nav-link') || target.classList.contains('site-logo')) {
      // Navigation — whoosh
      playWhoosh();
    } else if (target.closest('.post-card') || target.closest('.post-nav-link')) {
      // Post card / navigation between posts — blip
      playBlip(660);
    } else if (target.closest('.pagination-link')) {
      // Pagination — blip lower
      playBlip(440);
    }
  }

  // Play sound on status indicator change (DOM mutation observer)
  function observeStatusChanges() {
    const statusEl = document.getElementById('hermyNowStatus');
    if (!statusEl) return;

    const observer = new MutationObserver(() => {
      if (!isEnabled) return;
      playStatusChange();
    });

    observer.observe(statusEl, {
      childList: true,
      subtree: true,
      characterData: true,
    });
  }

  // ── Init ───────────────────────────────
  function init() {
    // Apply stored preference
    isEnabled = getStoredPreference();
    html.setAttribute('data-sound', isEnabled ? 'on' : 'off');

    // Create toggle button in header
    createToggleButton();

    // Update icon based on state
    updateToggleIcon(isEnabled);

    // Add navigation sound listener
    document.addEventListener('click', handleNavSound);

    // Observe status changes
    observeStatusChanges();

    // If enabled on load, start welcome + ambient
    if (isEnabled) {
      // Button click needed for AudioContext in modern browsers
      // We'll start on first user interaction
      const firstInteraction = () => {
        playWelcome();
        startAmbient();
        document.removeEventListener('click', firstInteraction);
        document.removeEventListener('touchstart', firstInteraction);
      };
      document.addEventListener('click', firstInteraction);
      document.addEventListener('touchstart', firstInteraction);
    }
  }

  // Wait for DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
