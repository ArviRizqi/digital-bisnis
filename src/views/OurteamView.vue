<template>
  <section class="team">
    <!-- decorative dot grid -->
    <div class="team__dots" aria-hidden="true"></div>
    <!-- top wave from banner -->
    <div class="team__fade-top" aria-hidden="true"></div>

    <div class="team__container">

      <!-- ════ Header ════ -->
      <div class="team__header" data-aos="fade-up">
        <span class="team__eyebrow">The People Behind It</span>
        <h2 class="team__title">
          Meet the <span class="team__title-em">Expert Team</span>
        </h2>
        <div class="team__rule"></div>
        <p class="team__desc">
          Driving innovation in agriculture through cutting-edge AI technology and scientific expertise.
        </p>
      </div>

      <!-- ════ Cards ════ -->
      <div class="team__grid">
        <article
          v-for="(member, i) in team"
          :key="member.name"
          class="tcard"
          :data-aos="'fade-up'"
          :data-aos-delay="i * 120"
        >
          <!-- accent top bar -->
          <div class="tcard__bar"></div>

          <!-- avatar -->
          <div class="tcard__avatar-wrap">
            <div class="tcard__avatar-ring" aria-hidden="true"></div>
            <img :src="member.image" :alt="member.name" class="tcard__avatar" />
            <span class="tcard__role-badge">{{ member.shortRole }}</span>
          </div>

          <!-- body -->
          <div class="tcard__body">
            <h3 class="tcard__name">{{ member.name }}</h3>
            <p class="tcard__role">{{ member.role }}</p>

            <div class="tcard__divider"></div>

            <a
              :href="member.github"
              target="_blank"
              rel="noopener noreferrer"
              class="tcard__github"
              :aria-label="`${member.name} on GitHub`"
            >
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
              View GitHub
            </a>
          </div>
        </article>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const team = [
  { name: 'Riyanda Azizi',       role: 'Lead Developer',  shortRole: 'DEV', image: '/public/img/aziz.jpeg',  github: '#' },
  { name: 'Arvi Rizqi Fadhila',  role: 'Project Manager', shortRole: 'PM',  image: '/public/img/arvi.jpeg',  github: '#' },
  { name: 'Yohanes Sindhunata',  role: 'AI Research',     shortRole: 'AI',  image: '/public/img/sindhu.jpeg', github: '#' },
]
</script>

<style scoped>
/* ─── Section ──────────────────────────────────────────── */
.team {
  position: relative; width: 100%; overflow: hidden;
  background: #f8faff;
  padding: 5rem 0 6.5rem;
}
@media(min-width:1024px){ .team{ padding: 7rem 0 8rem; } }

.team__dots {
  position: absolute; inset: 0; pointer-events: none;
  background-image: radial-gradient(circle, #c7d7f0 1px, transparent 1px);
  background-size: 26px 26px;
  opacity: 0.45;
}
.team__fade-top {
  position: absolute; top: 0; left: 0; right: 0; height: 120px; pointer-events: none;
  background: linear-gradient(to bottom, #eef5ff, transparent);
}

.team__container {
  width: 100%; max-width: 1200px;
  margin: 0 auto; padding: 0 1.5rem;
  position: relative; z-index: 1;
}

/* ─── Header ───────────────────────────────────────────── */
.team__header {
  text-align: center; max-width: 44rem; margin: 0 auto 4rem;
  display: flex; flex-direction: column; align-items: center; gap: 0.875rem;
}
@media(min-width:1024px){ .team__header{ margin-bottom: 5.5rem; } }

.team__eyebrow {
  font-size: 0.68rem; font-weight: 700; letter-spacing: 0.15em;
  text-transform: uppercase; color: #2563eb;
  background: rgba(239,246,255,0.95); border: 1px solid #bfdbfe;
  padding: 0.3rem 1rem; border-radius: 999px;
}

.team__title {
  font-size: clamp(2.125rem, 4.5vw, 3.25rem);
  font-weight: 800; color: #0f172a;
  line-height: 1.15; letter-spacing: -0.03em;
}
.team__title-em {
  background: linear-gradient(135deg, #2563eb 0%, #0891b2 100%);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
}

.team__rule {
  width: 3.25rem; height: 3px;
  background: linear-gradient(90deg, #2563eb, #06b6d4);
  border-radius: 999px;
}

.team__desc {
  font-size: 1rem; color: #475569; line-height: 1.75;
}

/* ─── Grid ─────────────────────────────────────────────── */
.team__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.75rem;
  max-width: 420px; margin: 0 auto;
}

@media(min-width:640px){
  .team__grid{ grid-template-columns:repeat(2,1fr); max-width:720px; }
}
@media(min-width:960px){
  .team__grid{ grid-template-columns:repeat(3,1fr); max-width:100%; }
}

/* ─── Card ─────────────────────────────────────────────── */
.tcard {
  position: relative;
  background: white;
  border-radius: 1.5rem;
  overflow: hidden;
  border: 1px solid #e9f0fb;
  box-shadow: 0 2px 16px rgba(37,99,235,0.05), 0 1px 4px rgba(0,0,0,0.04);
  display: flex; flex-direction: column; align-items: center;
  padding: 2.5rem 2rem 2rem;
  transition: transform 0.35s cubic-bezier(0.34,1.3,0.64,1), box-shadow 0.35s;
  cursor: default;
}
.tcard:hover {
  transform: translateY(-10px);
  box-shadow: 0 24px 56px rgba(37,99,235,0.13), 0 4px 16px rgba(0,0,0,0.05);
}

/* accent bar */
.tcard__bar {
  position: absolute; top: 0; left: 0; right: 0; height: 3px;
  background: linear-gradient(90deg, #2563eb, #06b6d4);
  transform: scaleX(0); transform-origin: left;
  transition: transform 0.4s cubic-bezier(0.4,0,0.2,1);
}
.tcard:hover .tcard__bar { transform: scaleX(1); }

/* avatar */
.tcard__avatar-wrap {
  position: relative;
  width: 9rem; height: 9rem;
  margin-bottom: 1.75rem;
}

.tcard__avatar-ring {
  position: absolute; inset: -5px; border-radius: 50%;
  background: conic-gradient(from 0deg, #2563eb, #06b6d4, #2563eb);
  opacity: 0;
  transition: opacity 0.4s;
  animation: spin-slow 5s linear infinite;
}
@keyframes spin-slow{ to{ transform: rotate(360deg); } }
.tcard:hover .tcard__avatar-ring { opacity: 0.3; }

.tcard__avatar {
  position: relative; z-index: 1;
  width: 100%; height: 100%; border-radius: 50%;
  object-fit: cover;
  border: 4px solid white;
  box-shadow: 0 4px 18px rgba(37,99,235,0.12);
  transition: box-shadow 0.3s;
}
.tcard:hover .tcard__avatar { box-shadow: 0 6px 28px rgba(37,99,235,0.22); }

.tcard__role-badge {
  position: absolute; bottom: 3px; right: 3px; z-index: 2;
  background: linear-gradient(135deg, #2563eb, #0891b2);
  color: white; font-size: 0.56rem; font-weight: 800; letter-spacing: 0.09em;
  padding: 0.22rem 0.5rem; border-radius: 999px;
  border: 2px solid white; box-shadow: 0 2px 6px rgba(37,99,235,0.4);
}

/* body */
.tcard__body { width: 100%; text-align: center; }

.tcard__name {
  font-size: 1.25rem; font-weight: 700; color: #0f172a;
  margin-bottom: 0.3rem; line-height: 1.3;
  transition: color 0.25s;
}
.tcard:hover .tcard__name { color: #2563eb; }

.tcard__role {
  font-size: 0.72rem; font-weight: 600; letter-spacing: 0.1em;
  text-transform: uppercase; color: #94a3b8;
}

.tcard__divider {
  width: 2.75rem; height: 2px;
  background: linear-gradient(90deg, #3b82f6, #06b6d4);
  border-radius: 999px; margin: 1.25rem auto;
  transform: scaleX(0.45); transform-origin: center;
  transition: transform 0.38s cubic-bezier(0.4,0,0.2,1);
}
.tcard:hover .tcard__divider { transform: scaleX(1); }

.tcard__github {
  display: inline-flex; align-items: center; gap: 0.45rem;
  padding: 0.5rem 1.25rem; border-radius: 0.625rem;
  font-size: 0.82rem; font-weight: 600; color: #475569;
  background: #f8fafc; border: 1px solid #e2e8f0;
  text-decoration: none;
  transition: all 0.25s cubic-bezier(0.4,0,0.2,1);
}
.tcard__github:hover {
  background: #0f172a; color: white; border-color: #0f172a;
  box-shadow: 0 4px 14px rgba(15,23,42,0.22);
  transform: translateY(-2px);
}
</style>