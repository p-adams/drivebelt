<template>
  <resume-builder />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ResumeBuilder from "./ResumeBuilder.vue";
export default defineComponent({
  name: "HelloWorld",
  components: { ResumeBuilder },
  props: {
    msg: String,
  },
  data() {
    return {
      count: 0,
    };
  },
});
</script>
