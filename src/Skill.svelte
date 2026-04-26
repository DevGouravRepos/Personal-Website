<script>
  import { inview } from "./utilities/inview.js";

  const skills = [
    "System Design",
    "Microservices",
    "AWS (Solutions Architect)",
    "Golang",
    "Angular",
    "Docker & Kubernetes",
    "CI/CD Pipelines",
    "Event-Driven Architecture",
    "API Gateway & GraphQL",
    "Terraform / IaC",
    "Observability & Monitoring",
    "TypeScript",
  ];
</script>

<div class="about" use:inview>
  <div class="about-inner">
    <div class="about-header">
      <div class="accent-line"></div>
      <h2 class="section-title">About Me</h2>
      <p class="section-subtitle">From writing code to designing systems at scale.</p>
    </div>

    <div class="about-grid">
      <div class="about-text" use:inview={{ delay: 0.15 }}>
        <p>
          Hello! I'm Dev — a technical architect who thrives on turning complex
          business problems into clean, scalable system designs. My journey
          started in 2012 building college websites, which sparked a deep
          curiosity for how software systems work end-to-end.
        </p>
        <p>
          Over 10+ years I've progressed from hands-on development to
          architecting distributed systems and leading cross-functional
          engineering teams. Today I work as a <strong>Technical Architect</strong> at
          <a
            href="https://www.siemens.com/en-us/products/building-x/"
            target="_blank"
            rel="noopener"
            class="highlight"
          >
            Siemens Ltd. (BuildingX)
          </a>
          in Pune, India — designing cloud-native platforms that serve
          thousands of users across the globe.
        </p>
      </div>

      <div class="about-skills" use:inview={{ delay: 0.3 }}>
        <h3 class="skills-heading">Architecture & Tech Stack</h3>
        <div class="skill-tags">
          {#each skills as skill, i}
            <span class="skill-tag" style="animation-delay: {0.4 + i * 0.06}s"
              >{skill}</span
            >
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .about {
    padding: var(--section-padding);
    background: var(--bg-secondary);
    position: relative;
  }

  .about::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--border), transparent);
  }

  .about-inner {
    max-width: var(--max-width);
    margin: 0 auto;
  }

  .about-header {
    margin-bottom: 3.5rem;
  }

  .about-grid {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 4rem;
    align-items: start;
  }

  .about-text p {
    font-size: 1.05rem;
    line-height: 1.8;
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
  }

  .about-text strong {
    color: var(--text-primary);
  }

  .highlight {
    color: var(--accent);
    text-decoration: none;
    position: relative;
    font-weight: 600;
  }

  .highlight::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 1px;
    background: var(--accent);
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }

  .highlight:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }

  .skills-heading {
    font-size: 1rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 1.2rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  .skill-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
  }

  .skill-tag {
    padding: 0.5rem 1rem;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 100px;
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--text-secondary);
    transition: all 0.3s ease;
    cursor: default;
  }

  .skill-tag:hover {
    border-color: var(--accent);
    color: var(--accent);
    background: rgba(108, 99, 255, 0.08);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    .about-grid {
      grid-template-columns: 1fr;
      gap: 2.5rem;
    }
  }
</style>
