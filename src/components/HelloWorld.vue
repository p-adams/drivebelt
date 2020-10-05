<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>
    Edit <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
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
