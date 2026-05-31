<script>
  import Navbar from "./Navbar.svelte";
  import Home from "./Home.svelte";
</script>

<Navbar />

<main>
  <Home />
</main>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre:wght@700;900&display=swap");

  :global(:root) {
    --bg-primary: #0f0f23;
    --bg-secondary: #13132b;
    --bg-tertiary: #1a1a3e;
    --surface: rgba(255, 255, 255, 0.04);
    --surface-hover: rgba(255, 255, 255, 0.08);
    --border: rgba(255, 255, 255, 0.08);
    --border-hover: rgba(255, 255, 255, 0.15);

    --accent: #6c63ff;
    --accent-pink: #ff6584;
    --accent-gradient: linear-gradient(135deg, #6c63ff 0%, #ff6584 100%);

    --text-primary: #fffffe;
    --text-secondary: #b8c1ec;
    --text-muted: #6b7294;

    --font-display: 'Frank Ruhl Libre', serif;
    --font-body: 'Inter', -apple-system, sans-serif;

    --section-padding: 6rem 2rem;
    --max-width: 1100px;
    --radius: 12px;
    --radius-lg: 20px;

    /* Theme-specific custom elements */
    --nav-bg: rgba(15, 15, 35, 0.85);
    --nav-border: rgba(255, 255, 255, 0.06);
    --nav-shadow: rgba(0, 0, 0, 0.3);
    --nav-mobile-bg: rgba(15, 15, 35, 0.97);

    --hero-orb-1: radial-gradient(circle, rgba(108, 99, 255, 0.35), transparent 70%);
    --hero-orb-2: radial-gradient(circle, rgba(255, 101, 132, 0.2), transparent 70%);
    --avatar-shadow: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.4));

    --card-shadow-hover: 0 20px 40px rgba(0, 0, 0, 0.3), 0 0 60px rgba(108, 99, 255, 0.06);
    --tag-bg: rgba(255, 255, 255, 0.04);
    --success: #34d399;
    --error: #f87171;
  }

  :global(html.light-theme) {
    --bg-primary: #f8fafc;
    --bg-secondary: #ffffff;
    --bg-tertiary: #f1f5f9;
    --surface: rgba(15, 23, 42, 0.04);
    --surface-hover: rgba(15, 23, 42, 0.07);
    --border: rgba(15, 23, 42, 0.08);
    --border-hover: rgba(15, 23, 42, 0.14);

    --text-primary: #0f172a;
    --text-secondary: #334155;
    --text-muted: #57657a; /* Optimized for WCAG AA compliance (5.1:1 contrast ratio) */

    --nav-bg: rgba(255, 255, 255, 0.85);
    --nav-border: rgba(15, 23, 42, 0.06);
    --nav-shadow: rgba(0, 0, 0, 0.05);
    --nav-mobile-bg: rgba(255, 255, 255, 0.97);

    --hero-orb-1: radial-gradient(circle, rgba(108, 99, 255, 0.12), transparent 70%);
    --hero-orb-2: radial-gradient(circle, rgba(255, 101, 132, 0.08), transparent 70%);
    --avatar-shadow: drop-shadow(0 10px 30px rgba(15, 23, 42, 0.15));

    --card-shadow-hover: 0 20px 40px rgba(15, 23, 42, 0.08), 0 0 60px rgba(108, 99, 255, 0.04);
    --tag-bg: rgba(15, 23, 42, 0.04);
    --success: #10b981;
    --error: #e11d48;
  }

  /* High-end Accessible Focus Ring */
  :global(*:focus-visible) {
    outline: 2px solid var(--accent);
    outline-offset: 4px;
  }

  :global(html) {
    scroll-behavior: smooth;
  }

  :global(body) {
    margin: 0;
    padding: 0;
    font-family: var(--font-body);
    background: var(--bg-primary);
    color: var(--text-secondary);
  }

  :global(body, .about, .projects, .contact, footer) {
    transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
  }

  :global(ul) {
    padding: 0;
  }

  :global(input, textarea) {
    border-radius: var(--radius);
    padding: 1rem 1.2rem;
    background: var(--surface);
    border: 1px solid var(--border);
    color: var(--text-primary);
    font-size: 1rem;
    transition: border-color 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
  }

  :global(input:focus, textarea:focus) {
    border-color: var(--accent);
    box-shadow: 0 0 0 3px rgba(108, 99, 255, 0.15);
    outline: none;
  }

  :global(input::placeholder, textarea::placeholder) {
    color: var(--text-muted);
  }

  :global(button) {
    font-size: 1rem;
    font-weight: 600;
    padding: 0.75rem 1.5rem;
    border-radius: var(--radius);
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }

  :global(.btn-primary) {
    background: var(--accent-gradient);
    color: #fff;
    border: none;
    box-shadow: 0 4px 15px rgba(108, 99, 255, 0.3);
  }

  :global(.btn-primary:hover) {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(108, 99, 255, 0.4);
  }

  :global(.btn-outline) {
    background: transparent;
    color: var(--text-primary);
    border: 1px solid var(--border);
  }

  :global(.btn-outline:hover) {
    border-color: var(--accent);
    color: var(--accent);
    transform: translateY(-2px);
  }

  :global(.section-title) {
    font-family: var(--font-display);
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 900;
    color: var(--text-primary);
    margin-bottom: 1rem;
  }

  :global(.section-subtitle) {
    color: var(--text-muted);
    font-size: 1.05rem;
    max-width: 500px;
  }

  :global(.accent-line) {
    width: 60px;
    height: 3px;
    background: var(--accent-gradient);
    border-radius: 3px;
    margin-bottom: 1.5rem;
  }
</style>
