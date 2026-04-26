<script>
  import { onMount } from "svelte";
  import Footer from "./Footer.svelte";
  import Contact from "./Contact.svelte";
  import Skill from "./Skill.svelte";
  import Projects from "./Projects.svelte";

  let myImage = "assets/avatar_nobg.png";
  let visible = $state(false);

  onMount(() => {
    requestAnimationFrame(() => {
      visible = true;
    });
  });

  function scrollToSection(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }
</script>

<div class="page-container">
  <!-- HERO -->
  <section class="hero">
    <div class="hero-bg-orb orb-1"></div>
    <div class="hero-bg-orb orb-2"></div>
    <div class="hero-bg-grid"></div>

    <div class="hero-content" class:visible>
      <div class="hero-text">
        <span class="hero-greeting" style="transition-delay: 0.1s"
          >Hello, I'm</span
        >
        <h1 class="hero-name" style="transition-delay: 0.25s">
          Debadutta(Dev)<br />Gourav<span class="hero-dot">.</span>
        </h1>
        <p class="hero-role" style="transition-delay: 0.4s">
          Technical Architect &amp; Cloud Strategist
        </p>
        <p class="hero-desc" style="transition-delay: 0.55s">
          I design scalable, cloud-native architectures and lead engineering
          teams to deliver enterprise platforms — from system design &amp;
          microservices to CI/CD pipelines on AWS.
        </p>
        <div class="hero-cta" style="transition-delay: 0.7s">
          <button
            class="btn-primary"
            onclick={() => scrollToSection("projects")}
          >
            View Projects
          </button>
          <button
            class="btn-outline"
            onclick={() => scrollToSection("contact")}
          >
            Get In Touch
          </button>
        </div>
      </div>

      <div class="hero-visual" style="transition-delay: 0.5s">
        <div class="avatar-glow"></div>
        <div class="avatar-ring">
          <img class="avatar" src={myImage} alt="Debadutta Gourav" />
        </div>
      </div>
    </div>

    <div class="scroll-indicator" class:visible>
      <div class="scroll-line"></div>
    </div>
  </section>

  <section id="about">
    <Skill />
  </section>

  <section id="projects">
    <Projects />
  </section>

  <section id="contact">
    <Contact />
  </section>
</div>

<Footer />

<style>
  .page-container {
    color: var(--text-secondary);
  }

  /* ── HERO ─────────────────────────────── */
  .hero {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6rem 2rem 4rem;
    overflow: hidden;
  }

  .hero-bg-grid {
    position: absolute;
    inset: 0;
    background-image: linear-gradient(
        rgba(108, 99, 255, 0.03) 1px,
        transparent 1px
      ),
      linear-gradient(90deg, rgba(108, 99, 255, 0.03) 1px, transparent 1px);
    background-size: 60px 60px;
    mask-image: radial-gradient(
      ellipse 70% 60% at 50% 50%,
      black 30%,
      transparent 100%
    );
  }

  .hero-bg-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(100px);
    opacity: 0.4;
    animation: float 8s ease-in-out infinite;
  }

  .orb-1 {
    width: 500px;
    height: 500px;
    background: radial-gradient(
      circle,
      rgba(108, 99, 255, 0.35),
      transparent 70%
    );
    top: -10%;
    right: -5%;
  }

  .orb-2 {
    width: 400px;
    height: 400px;
    background: radial-gradient(
      circle,
      rgba(255, 101, 132, 0.2),
      transparent 70%
    );
    bottom: -10%;
    left: -5%;
    animation-delay: -4s;
  }

  @keyframes float {
    0%,
    100% {
      transform: translate(0, 0) scale(1);
    }
    50% {
      transform: translate(20px, -20px) scale(1.05);
    }
  }

  .hero-content {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4rem;
    max-width: var(--max-width);
    width: 100%;
  }

  /* Staggered reveal: each direct child transitions individually */
  .hero-content .hero-text > *,
  .hero-content .hero-visual {
    opacity: 0;
    transform: translateY(25px);
    transition:
      opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
      transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .hero-content.visible .hero-text > *,
  .hero-content.visible .hero-visual {
    opacity: 1;
    transform: translateY(0);
  }

  .hero-greeting {
    display: inline-block;
    font-size: 1.1rem;
    font-weight: 500;
    color: var(--accent);
    letter-spacing: 0.04em;
    margin-bottom: 0.75rem;
  }

  .hero-name {
    font-family: var(--font-display);
    font-size: clamp(3rem, 7vw, 5rem);
    font-weight: 900;
    color: var(--text-primary);
    line-height: 1.05;
    margin: 0 0 1rem;
    letter-spacing: -0.02em;
  }

  .hero-dot {
    color: var(--accent-pink);
  }

  .hero-role {
    font-size: clamp(1.1rem, 2.5vw, 1.35rem);
    font-weight: 600;
    background: var(--accent-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin: 0 0 1.2rem;
  }

  .hero-desc {
    font-size: 1.05rem;
    color: var(--text-secondary);
    max-width: 480px;
    line-height: 1.7;
    margin: 0 0 2rem;
  }

  .hero-cta {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }

  /* ── AVATAR ───────────────────────────── */
  .hero-visual {
    position: relative;
    flex-shrink: 0;
  }

  .avatar-ring {
    position: relative;
    width: 340px;
    height: 340px;
    border-radius: 50%;
    background: linear-gradient(
      135deg,
      rgba(108, 99, 255, 0.15),
      rgba(255, 101, 132, 0.15)
    );
    display: flex;
    align-items: flex-end;
    justify-content: center;
    overflow: hidden;
    border: 2px solid var(--border);
  }

  .avatar-glow {
    position: absolute;
    width: 360px;
    height: 360px;
    border-radius: 50%;
    background: var(--accent-gradient);
    opacity: 0.12;
    filter: blur(40px);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: pulse 4s ease-in-out infinite;
  }

  @keyframes pulse {
    0%,
    100% {
      opacity: 0.12;
      transform: translate(-50%, -50%) scale(1);
    }
    50% {
      opacity: 0.2;
      transform: translate(-50%, -50%) scale(1.08);
    }
  }

  .avatar {
    object-fit: contain;
    max-width: 310px;
    position: relative;
    top: 6px;
    filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.4));
    transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .avatar-ring:hover .avatar {
    transform: scale(1.04);
  }

  /* ── SCROLL INDICATOR ─────────────────── */
  .scroll-indicator {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    transition: opacity 1s ease 1.2s;
  }

  .scroll-indicator.visible {
    opacity: 1;
  }

  .scroll-line {
    width: 1px;
    height: 50px;
    background: linear-gradient(to bottom, var(--accent), transparent);
    animation: scrollPulse 2s ease-in-out infinite;
  }

  @keyframes scrollPulse {
    0%,
    100% {
      opacity: 1;
      transform: scaleY(1);
    }
    50% {
      opacity: 0.4;
      transform: scaleY(0.6);
    }
  }

  /* ── RESPONSIVE ───────────────────────── */
  @media (max-width: 768px) {
    .hero {
      padding: 8rem 1.5rem 4rem;
    }

    .hero-content {
      flex-direction: column-reverse;
      text-align: center;
      gap: 2.5rem;
    }

    .hero-desc {
      margin-left: auto;
      margin-right: auto;
    }

    .hero-cta {
      justify-content: center;
    }

    .avatar-ring {
      width: 240px;
      height: 240px;
    }

    .avatar {
      max-width: 220px;
    }

    .avatar-glow {
      width: 260px;
      height: 260px;
    }

    .scroll-indicator {
      display: none;
    }
  }
</style>
