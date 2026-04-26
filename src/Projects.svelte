<script>
  import { projects } from "./data/projects.js";
  import { inview } from './utilities/inview.js';
</script>

<div class="projects">
  <div class="projects-inner" use:inview>
    <div class="projects-header">
      <div class="accent-line"></div>
      <h2 class="section-title">Things I've Architected</h2>
      <p class="section-subtitle">Platforms and systems I've designed, built, and scaled.</p>
    </div>

    <div class="project-grid">
      {#each projects as project, i}
        <div class="project-card" use:inview={{ delay: 0.1 + i * 0.08 }}>
          <div class="card-top">
            <svg class="folder-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>

            {#if project.link}
              <a href={project.link} target="_blank" rel="noopener" class="card-link" aria-label="View {project.name}">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            {/if}
          </div>

          <h3 class="card-name">{project.name}</h3>
          <p class="card-desc">{project.desc}</p>

          <div class="card-tags">
            {#each project.tags as tag}
              <span class="tag">{tag}</span>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  .projects {
    padding: var(--section-padding);
    background: var(--bg-primary);
    position: relative;
  }

  .projects::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--border), transparent);
  }

  .projects-inner {
    max-width: var(--max-width);
    margin: 0 auto;
  }

  .projects-header {
    margin-bottom: 3.5rem;
  }

  .project-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 1.5rem;
  }

  .project-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    padding: 2rem;
    display: flex;
    flex-direction: column;
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    position: relative;
    overflow: hidden;
  }

  .project-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: var(--accent-gradient);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .project-card:hover {
    transform: translateY(-6px);
    border-color: var(--border-hover);
    background: var(--surface-hover);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3), 0 0 60px rgba(108, 99, 255, 0.06);
  }

  .project-card:hover::before {
    opacity: 1;
  }

  .card-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
  }

  .folder-icon {
    width: 36px;
    height: 36px;
    color: var(--accent);
  }

  .card-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    color: var(--text-muted);
    transition: all 0.3s ease;
    border-radius: 6px;
  }

  .card-link:hover {
    color: var(--accent);
    transform: translate(3px, -3px);
  }

  .card-link svg {
    width: 20px;
    height: 20px;
  }

  .card-name {
    font-size: 1.15rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 0.75rem;
    transition: color 0.3s ease;
  }

  .project-card:hover .card-name {
    color: var(--accent);
  }

  .card-desc {
    font-size: 0.92rem;
    line-height: 1.65;
    color: var(--text-secondary);
    flex: 1;
    margin-bottom: 1.5rem;
  }

  .card-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: auto;
  }

  .tag {
    font-size: 0.78rem;
    font-weight: 500;
    color: var(--text-muted);
    padding: 0.25rem 0.6rem;
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.04);
    letter-spacing: 0.02em;
  }

  @media (max-width: 768px) {
    .project-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
