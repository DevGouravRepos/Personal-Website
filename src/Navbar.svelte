<script>
  let scrolled = $state(false);
  let mobileOpen = $state(false);

  $effect(() => {
    const onScroll = () => { scrolled = window.scrollY > 50; };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  });

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

    <ul class:open={mobileOpen}>
      <li><button onclick={() => scrollTo('about')}>About</button></li>
      <li><button onclick={() => scrollTo('projects')}>Projects</button></li>
      <li><button onclick={() => scrollTo('contact')}>Contact</button></li>
    </ul>
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
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }

  nav.scrolled {
    padding: 0.8rem 2rem;
    background: rgba(15, 15, 35, 0.85);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
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
      background: rgba(15, 15, 35, 0.97);
      backdrop-filter: blur(20px);
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      transition: right 0.4s cubic-bezier(0.16, 1, 0.3, 1);
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
