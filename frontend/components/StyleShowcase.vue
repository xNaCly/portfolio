<template>
  <div>
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>
    <p>Paragraph</p>
    <code>Code block</code>
    <a style="display: inline" href="/">Link</a>
    <a style="display: inline" class="link" href="/">highlighted Link</a>
    <div style="display: flex; align-items: center;">
      <button class="button">Default Button</button>
      <button class="button primary">Primary Button</button>
      <button class="button secondary">Secondary Button</button>
    </div>
    <div style="display: flex; align-items: center;">
      <span class="badge">Badge</span>
      <span class="badge"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-tag"
        >
          <path
            d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"
          />
          <line x1="7" y1="7" x2="7.01" y2="7" />
        </svg>
        Badge with icon</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "StyleShowcase"
};
</script>
