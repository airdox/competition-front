<template>
  <div class="text-center">
    <Hero />
    <QuestionsCard />
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
  
};
</script>

