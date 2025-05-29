<script setup lang="ts"></script>

<template>
  <div class="greetings">
    <h1>
      Connecting Agriculture <br />
      to the Future
    </h1>

    <div class="textBox">
      <h3>
        <span class="msgText">
          Our IoT-based agricultural solution connects every stage of <br />
          your farming process — from monitoring soil conditions to <br />
          analyzing data in the cloud.
        </span>
      </h3>
    </div>
  </div>
</template>

<style scoped>
.greetings {
  padding: 0 20px 20px;
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  font-weight: 800;
  font-style: normal;
  color: var(--text-white);
  line-height: 1;
  font-size: clamp(2.5rem, 5vw + 1rem, 6.5rem);
  margin: 0;
}

.textBox {
  margin-top: 30px;
  max-width: 600px;
}

h3 .msgText {
  color: var(--text-white-soft);
  font-size: clamp(1rem, 2vw + 0.5rem, 1.375rem);
  line-height: 1.4;
  white-space: normal;
}

/* Responsive */

@media (max-width: 1024px) {
  .greetings {
    padding: 0 20px 20px;
    max-width: 1200px;
    margin: 0 auto;
  }

  h1 {
    font-weight: 800;
    font-style: normal;
    color: var(--text-white);
    line-height: 1;
    font-size: 4rem;
    margin: 0;
  }

  .textBox {
    margin-top: 30px;
    max-width: 600px;
  }

  h3 .msgText {
    color: var(--text-white-soft);
    font-size: 1.5rem;
    line-height: 1.4;
    white-space: normal;
  }
}
@media (max-width: 768px) {
  .greetings {
    padding: 0 20px 20px;
    max-width: 1200px;
    margin: 0 auto;
  }

  h1 {
    font-weight: 800;
    font-style: normal;
    color: var(--text-white);
    line-height: 1;
    font-size: 2rem;
    margin: 0;
  }

  .textBox {
    margin-top: 30px;
    max-width: 600px;
  }

  h3 .msgText {
    color: var(--text-white-soft);
    font-size: 0.9rem;
    line-height: 1;
    white-space: normal;
  }
}

@media (max-width: 640px) {
  .greetings {
    padding: 0 20px 20px;
    max-width: 1200px;
    margin: 0 auto;
  }

  h1 {
    font-weight: 800;
    font-style: normal;
    color: var(--text-white);
    line-height: 1;
    font-size: 2rem;
    margin: 0;
  }

  .textBox {
    display: none;
  }
}
</style>
