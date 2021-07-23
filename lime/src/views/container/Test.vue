<template>
  <div class="test">
    <email-compose />
  </div>
</template>

<script>
import EmailCompose from "../apps/email/EmailCompose.vue";
// import EmailCompose from "../apps/email/EmailCompose.vue";

export default {
  name: "Test",
  components: {
    EmailCompose,
  },
  props: {
    shallShowEmailComposeModal: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
