<script setup>
import { reactive, watch } from 'vue'
import { useData, useRoute } from 'vitepress'

// --- CONFIGURATION ---
// Paste your Google Web App URL here
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwQPG7SqKCME-siL3xkDqOwCJ1WHOGuZCQZnZO0-7GgYACxeb6lNT1mjpvkJXrG0QxbqQ/exec'
// PRODUCT NAME for each product repo (e.g. 'FluentCRM', 'FluentForms')
const PRODUCT_NAME = 'FluentCRM-user-docs'
// ---------------------

const { page } = useData()
const route = useRoute()

const state = reactive({
  vote: null,          // 'yes' | 'no' | null  (one yes/no vote per page)
  voting: false,       // a request is in flight
  showComment: false,  // textarea visible
  commentSent: false,  // detailed comment was submitted
  comment: ''
})

// Reset everything when navigating between pages
watch(() => route.path, () => {
  state.vote = null
  state.voting = false
  state.showComment = false
  state.commentSent = false
  state.comment = ''
})

const sendToSheet = async (extra) => {
  const payload = JSON.stringify({
    product: PRODUCT_NAME,
    path: route.path,
    title: page.value.title || '',
    timestamp: new Date().toISOString(),
    ...extra
  })

  try {
    console.log('[Feedback] Sending to sheet:', payload)
    await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: payload,
      redirect: 'follow'
    })
    console.log('[Feedback] Submitted successfully')
    return true
  } catch (e) {
    console.error('[Feedback] Submit failed:', e)
    return false
  }
}

const submitVote = async (vote) => {
  if (state.vote || state.voting) return
  state.voting = true
  await sendToSheet({ vote })
  state.vote = vote
  state.voting = false
}

const submitComment = async () => {
  const text = state.comment.trim()
  if (!text || state.voting) return
  state.voting = true
  await sendToSheet({
    vote: state.vote ?? '',
    message: text
  })
  state.commentSent = true
  state.showComment = false
  state.comment = ''
  state.voting = false
}
</script>

<template>
  <div class="feedback-wrapper">
    <div class="feedback-card">
      <p class="feedback-title">
        <template v-if="state.vote || state.commentSent">
          Thanks for your feedback! 💜
        </template>
        <template v-else>
          Was this page helpful?
        </template>
      </p>

      <div class="feedback-buttons">
        <button
          class="feedback-btn"
          :class="{ 'is-active': state.vote === 'yes' }"
          :disabled="state.vote !== null || state.voting"
          @click="submitVote('yes')"
        >
          <span class="feedback-icon">👍</span>
          <span>Yes</span>
        </button>

        <button
          class="feedback-btn"
          :class="{ 'is-active': state.vote === 'no' }"
          :disabled="state.vote !== null || state.voting"
          @click="submitVote('no')"
        >
          <span class="feedback-icon">👎</span>
          <span>No</span>
        </button>

        <button
          class="feedback-btn"
          :class="{ 'is-active': state.showComment }"
          :disabled="state.voting"
          @click="state.showComment = !state.showComment"
        >
          <span class="feedback-icon">💬</span>
          <span>Feedback</span>
        </button>
      </div>

      <div v-if="state.showComment" class="feedback-comment">
        <textarea
          v-model="state.comment"
          class="feedback-textarea"
          rows="3"
          placeholder="Tell us how we can improve this page…"
        ></textarea>
        <button
          class="feedback-submit"
          :disabled="state.voting || !state.comment.trim()"
          @click="submitComment"
        >
          {{ state.voting ? 'Sending…' : 'Send feedback' }}
        </button>
      </div>

      <p v-if="state.commentSent && !state.showComment" class="feedback-confirm">
        Got it — thanks for the detailed feedback!
      </p>
    </div>
  </div>
</template>

<style scoped>
.feedback-wrapper {
  margin: 2.5rem 0 1.5rem;
}

.feedback-card {
  border: 1px solid var(--vp-c-divider);
  background-color: var(--vp-c-bg-soft);
  border-radius: 12px;
  padding: 24px 20px;
  text-align: center;
}

.feedback-title {
  margin: 0 0 16px;
  font-size: 16px;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.feedback-buttons {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
}

.feedback-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 18px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background-color: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  cursor: pointer;
  transition: border-color 0.2s, color 0.2s, background-color 0.2s;
}

.feedback-btn:hover:not(:disabled) {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.feedback-btn:disabled {
  opacity: 0.55;
  cursor: not-allowed;
}

.feedback-btn.is-active {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
  background-color: var(--vp-c-bg-mute);
  opacity: 1;
}

.feedback-icon {
  display: inline-block;
  line-height: 1;
}

.feedback-comment {
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.feedback-textarea {
  width: 100%;
  max-width: 520px;
  padding: 10px 12px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background-color: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-family: inherit;
  font-size: 14px;
  line-height: 1.5;
  resize: vertical;
  outline: none;
  transition: border-color 0.2s;
}

.feedback-textarea:focus {
  border-color: var(--vp-c-brand-1);
}

.feedback-submit {
  padding: 8px 22px;
  border: 1px solid var(--vp-c-brand-1);
  border-radius: 8px;
  background-color: var(--vp-c-brand-1);
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s, border-color 0.2s, opacity 0.2s;
}

.feedback-submit:hover:not(:disabled) {
  background-color: var(--vp-c-brand-2);
  border-color: var(--vp-c-brand-2);
}

.feedback-submit:disabled {
  opacity: 0.55;
  cursor: not-allowed;
}

.feedback-confirm {
  margin: 14px 0 0;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-brand-1);
}
</style>
