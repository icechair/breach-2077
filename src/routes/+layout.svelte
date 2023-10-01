<script>
  import Nav from "./nav.svelte";
</script>

<slot />

<footer>
  <Nav />
</footer>

<style>
  @font-face {
    font-family: "Saira-Regular";
    src: url("/font/Saira-Regular.ttf");
  }

  @font-face {
    font-family: "Saira-Thin";
    src: url("/font/Saira-Thin.ttf");
  }
  :root {
    --color-1: #020106;
    --color-2: #111007;
    --color-3: #e9fe6f;
    --color-4: #171c2a;
    --color-5: #dddfe5;
    --color-6: #250c12;

    --primary-bg: var(--color-1);
    --primary-fg: var(--color-5);
    --secondary-bg: var(--color-3);
    --secondary-fg: var(--color-2);
  }

  :global(body) {
    background-color: var(--primary-bg);
    color: var(--primary-fg);
    font-family: "Saira-Thin";
    font-size: 12px;
  }

  :global(h1) {
    background-color: var(--primary-bg);
    color: var(--primary-fg);
    font-family: "Saira-Regular";
  }

  :global(button) {
    background-color: var(--secondary-bg);
    color: var(--secondary-fg);
    border: 1px solid var(--secondary-bg);
    font-family: "Saira-Regular";
  }
</style>
