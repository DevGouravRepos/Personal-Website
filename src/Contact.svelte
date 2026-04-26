<script>
  import {
    emailValidator,
    nameValidator,
    requiredValidator,
  } from "./utilities/validators.js";
  import { inview } from "./utilities/inview.js";
  import { fade } from "svelte/transition";

  let nameField = $state("");
  let emailField = $state("");
  let msgField = $state("");
  let successMsg = $state("");
  let errorMsg = $state("");
  let submitting = $state(false);

  const onFocus = () => (errorMsg = "");

  function handleOnSubmit() {
    if (
      !requiredValidator(nameField) ||
      !requiredValidator(emailField) ||
      !requiredValidator(msgField)
    ) {
      errorMsg = "Please fill in all fields.";
    } else if (!emailValidator(emailField)) {
      errorMsg = "Please enter a valid email, e.g. you@example.com";
    } else if (!nameValidator(nameField)) {
      errorMsg = "Please enter a valid name.";
    } else {
      postForm()
        .then(() => {
          successMsg = "Thanks for reaching out! I'll get back to you soon.";
          setTimeout(() => {
            successMsg = "";
          }, 3000);
          nameField = emailField = msgField = "";
          submitting = false;
        })
        .catch(() => {
          errorMsg =
            "Something went wrong. Please try my social links instead.";
          submitting = false;
        });
    }
  }

  async function postForm() {
    submitting = true;
    let formData = new FormData(document.getElementById("contactForm"));
    return fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    });
  }
</script>

<div class="contact" use:inview>
  <div class="contact-inner">
    <div class="contact-info" use:inview={{ delay: 0.1 }}>
      <div class="accent-line"></div>
      <h2 class="section-title">Let's Talk</h2>
      <p class="contact-desc">
        Looking for an architect to design your next platform, review your
        system's scalability, or lead a technical transformation? Let's
        connect — I'd love to hear about your challenge.
      </p>

      <div class="contact-detail">
        <span class="detail-label">Based in</span>
        <span class="detail-value">Pune, India</span>
      </div>
      <div class="contact-detail">
        <span class="detail-label">Role</span>
        <span class="detail-value">Technical Architect</span>
      </div>
    </div>

    <div class="contact-right" use:inview={{ delay: 0.2 }}>
      <div class="contact-socials">
        <span class="detail-label">Find me on</span>
        <div class="social-links">
          <a href="https://twitter.com/devgrv" target="_blank" rel="noopener" aria-label="Twitter" class="social-link">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/devgrv/" target="_blank" rel="noopener" aria-label="LinkedIn" class="social-link">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="https://github.com/devgourav" target="_blank" rel="noopener" aria-label="GitHub" class="social-link">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
          </a>
        </div>
      </div>

      <div class="divider">
        <span>OR</span>
      </div>

      <form
      id="contactForm"
      name="contact"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onsubmit={(e) => {
        e.preventDefault();
        handleOnSubmit();
      }}
    >
      <input type="hidden" name="form-name" value="contact" />
      <p style="display:none;">
        <label
          >Don't fill this out if you're human: <input
            name="bot-field"
          /></label
        >
      </p>

      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your name"
          onfocus={onFocus}
          bind:value={nameField}
        />
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="you@example.com"
          onfocus={onFocus}
          bind:value={emailField}
        />
      </div>

      <div class="form-group full-width">
        <label for="message">Message</label>
        <textarea
          name="message"
          id="message"
          rows="5"
          placeholder="Tell me about your project..."
          onfocus={onFocus}
          bind:value={msgField}
        ></textarea>
      </div>

      <div class="form-actions full-width">
        {#if !submitting}
          <button type="submit" class="btn-primary submit-btn">
            Send Message
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        {:else}
          <button
            type="button"
            class="btn-primary submit-btn"
            disabled
            aria-label="Sending message"
          >
            <span class="spinner"></span>
            Sending...
          </button>
        {/if}
      </div>

      <div class="validation-msg full-width">
        {#if successMsg}
          <span class="msg success" in:fade out:fade>{successMsg}</span>
        {/if}
        {#if errorMsg}
          <span class="msg error" in:fade out:fade>{errorMsg}</span>
        {/if}
      </div>
    </form>
    </div>
  </div>
</div>

<style>
  .contact {
    padding: var(--section-padding);
    background: var(--bg-secondary);
    position: relative;
  }

  .contact::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--border), transparent);
  }

  .contact-inner {
    max-width: var(--max-width);
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: 4rem;
    align-items: start;
  }

  .contact-desc {
    font-size: 1.05rem;
    line-height: 1.75;
    color: var(--text-secondary);
    margin-bottom: 2rem;
    max-width: 400px;
  }

  .contact-detail {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }

  .detail-label {
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--text-muted);
    font-weight: 600;
  }

  .detail-value {
    font-size: 1rem;
    color: var(--text-primary);
    font-weight: 500;
  }

  form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.2rem;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  .full-width {
    grid-column: 1 / -1;
  }

  label {
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }

  textarea {
    resize: vertical;
    min-height: 120px;
  }

  .submit-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    justify-self: start;
  }

  .submit-btn svg {
    width: 16px;
    height: 16px;
  }

  .submit-btn:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }

  .spinner {
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-top-color: #fff;
    border-radius: 50%;
    animation: spin 0.6s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  .validation-msg {
    min-height: 1.5rem;
  }

  .msg {
    font-size: 0.9rem;
    font-weight: 500;
  }

  .msg.success {
    color: #34d399;
  }

  .msg.error {
    color: #f87171;
  }

  .form-actions {
    margin-top: 0.5rem;
  }

  .contact-socials {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-bottom: 2rem;
  }

  .social-links {
    display: flex;
    gap: 1rem;
  }

  .social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    border: 1px solid var(--border);
    color: var(--text-muted);
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .social-link:hover {
    color: var(--accent);
    border-color: var(--accent);
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(108, 99, 255, 0.2);
  }

  .social-link svg {
    width: 24px;
    height: 24px;
  }

  .contact-right {
    display: flex;
    flex-direction: column;
  }

  .divider {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .divider::before,
  .divider::after {
    content: "";
    flex: 1;
    height: 1px;
    background: var(--border);
  }

  .divider span {
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-muted);
  }

  @media (max-width: 768px) {
    .contact-inner {
      grid-template-columns: 1fr;
      gap: 2.5rem;
    }

    form {
      grid-template-columns: 1fr;
    }
  }
</style>
