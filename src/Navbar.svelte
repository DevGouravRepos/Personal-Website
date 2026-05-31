<script>
  let scrolled = $state(false);
  let mobileOpen = $state(false);
  let theme = $state('dark');

  $effect(() => {
    const onScroll = () => { scrolled = window.scrollY > 50; };
    window.addEventListener('scroll', onScroll, { passive: true });
    
    // Retrieve theme on mount
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    theme = savedTheme || (systemPrefersLight ? 'light' : 'dark');
    updateThemeClass();

    return () => window.removeEventListener('scroll', onScroll);
  });

  function toggleTheme() {
    theme = theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', theme);
    updateThemeClass();
  }

  function updateThemeClass() {
    if (theme === 'light') {
      document.documentElement.classList.add('light-theme');
    } else {
      document.documentElement.classList.remove('light-theme');
    }
  }

  function scrollTo(id) {
    mobileOpen = false;
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
</script>

<nav class:scrolled>
  <div class="nav-inner">
    <a
      class="logo"
      href="/"
      onclick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
    >
      DG<span class="logo-dot">.</span>
    </a>

    <ul class:open={mobileOpen}>
      <li><button onclick={() => scrollTo('about')}>About</button></li>
      <li><button onclick={() => scrollTo('projects')}>Projects</button></li>
      <li><button onclick={() => scrollTo('contact')}>Contact</button></li>
    </ul>

    <div class="nav-actions">
      <button
        class="theme-toggle"
        onclick={toggleTheme}
        aria-label="Toggle theme"
      >
        {#if theme === 'dark'}
          <svg class="theme-icon moon-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
          </svg>
        {:else}
          <svg class="theme-icon sun-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="4"></circle>
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path>
          </svg>
        {/if}
      </button>

      <button
        class="hamburger"
        class:open={mobileOpen}
        onclick={() => (mobileOpen = !mobileOpen)}
        aria-label="Toggle navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </div>
</nav>

<style>
  nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    padding: 1.2rem 2rem;
    transition: padding 0.4s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease;
  }

  nav.scrolled {
    padding: 0.8rem 2rem;
    background: var(--nav-bg);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--nav-border);
    box-shadow: var(--nav-shadow);
  }

  .nav-inner {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    font-size: 1.8rem;
    font-weight: 800;
    color: var(--text-primary);
    text-decoration: none;
    letter-spacing: -0.02em;
    transition: transform 0.3s ease;
  }

  .logo:hover {
    transform: scale(1.05);
    text-decoration: none;
  }

  .logo-dot {
    color: var(--accent);
  }

  ul {
    display: flex;
    list-style: none;
    gap: 0.5rem;
    margin: 0;
    padding: 0;
  }

  ul button {
    background: none;
    border: none;
    color: var(--text-secondary);
    font-size: 0.95rem;
    font-weight: 500;
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 8px;
    transition: all 0.3s ease;
    position: relative;
  }

  ul button::after {
    content: '';
    position: absolute;
    bottom: 2px;
    left: 50%;
    width: 0;
    height: 2px;
    background: var(--accent-gradient);
    transition: all 0.3s ease;
    transform: translateX(-50%);
    border-radius: 1px;
  }

  ul button:hover {
    color: var(--text-primary);
  }

  ul button:hover::after {
    width: 60%;
  }

  .nav-actions {
    display: flex;
    align-items: center;
    gap: 1rem;
    z-index: 1002;
  }

  .theme-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    border: 1px solid var(--border);
    color: var(--text-primary);
    cursor: pointer;
    background: var(--surface);
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    padding: 0;
  }

  .theme-toggle:hover {
    color: var(--accent);
    border-color: var(--accent);
    transform: scale(1.08) rotate(15deg);
    background: var(--surface-hover);
  }

  .theme-icon {
    width: 18px;
    height: 18px;
    transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .theme-toggle:active .theme-icon {
    transform: scale(0.85);
  }

  .hamburger {
    display: none;
    flex-direction: column;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
    z-index: 1001;
  }

  .hamburger span {
    display: block;
    width: 24px;
    height: 2px;
    background: var(--text-primary);
    border-radius: 2px;
    transition: all 0.3s ease;
    transform-origin: center;
  }

  .hamburger.open span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }

  .hamburger.open span:nth-child(2) {
    opacity: 0;
  }

  .hamburger.open span:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
  }

  @media (max-width: 768px) {
    nav {
      padding: 1rem 1.2rem;
    }

    nav.scrolled {
      padding: 0.75rem 1.2rem;
    }

    .hamburger {
      display: flex;
    }

    ul {
      position: fixed;
      top: 0;
      right: -100%;
      width: 70%;
      max-width: 300px;
      height: 100vh;
      background: var(--nav-mobile-bg);
      backdrop-filter: blur(20px);
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      transition: right 0.4s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.3s ease;
      border-left: 1px solid var(--border);
    }

    ul.open {
      right: 0;
    }

    ul button {
      font-size: 1.2rem;
      padding: 1rem;
    }
  }
</style>
