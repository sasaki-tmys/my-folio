<script>
export default {
  name: "HomeSmoke",
  data() {
    return {
      smoke: document.createElement("div"),
    };
  },
  mounted() {
    this.smoke.classList.add("smoke");
    this.smoke.style.top = document.body.clientHeight;

    setInterval(() => {
      this.smoke.style.top -= 10;

      if (this.smoke.style.top < 0) {
        this.smoke.style.top = document.body.clientHeight;
      }
    }, 10);
  },
};
</script>

<template>
  <div class="smoke">
  </div>
</template>
