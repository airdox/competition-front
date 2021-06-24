<template>
  <div class="text-center">
  <div class="notification">
      <v-alert v-if="success" dismissible color="green" type="success"
        >Votre bon a bien été envoyé !</v-alert
      >
      <v-alert v-if="error" dismissible color="red" type="error"
        >Votre formulaire a mal été envoyé</v-alert
      >
    </div>
    <Hero />
    <QuestionsCard @response="notification" />
  </div>
</template>

<script>
import Hero from "~/components/Hero.vue";
import QuestionsCard from "~/components/QuestionsCard.vue";

export default {
  components: {
    Hero,
    QuestionsCard
  },
  data() {
    return {
      success: false,
      error: false,
    };
  },
  methods: {
    notification(status) {
      if (status === "success") {
        this.success = true;
      } else {
        this.error = true;
      }
      setTimeout(function () {
        this.success = false;
        this.error = false;
      }, 3000);
    },
  },
  
};
</script>


<style lang="scss" scoped>
.notification {
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  top: 100px;
  position: fixed;
  z-index: 9999;
}
</style>