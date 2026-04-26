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

    <form
      id="contactForm"
      name="contact"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onsubmit={(e) => {
        e.preventDefault();
        handleOnSubmit();
      }}
      use:inview={{ delay: 0.2 }}
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
