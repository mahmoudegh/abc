<template>
  <div class="test">
    <users-list />
  </div>
</template>

<script>
import UsersList from "../apps/user/users-list/UsersList.vue";

export default {
  name: "Test",
  components: {
    UsersList,
  },
};
</script>
