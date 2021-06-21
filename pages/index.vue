<template>
  <div class="text-center">
    <Hero />
    <v-card
      class="mx-auto"
      max-width="344"
      v-for="question in questions"
      :key="question.id"
    >
      <v-card-title>{{ question.question }}</v-card-title>
      <v-card-text>
        <v-radio-group v-model="radioGroup">
          <v-radio
            v-for="response in question.responses"
            :key="response.id"
            :label="response.response"
            :value="response.id"
          ></v-radio>
        </v-radio-group>
      </v-card-text>
    </v-card>
    <input
      type="email"
      class="form-control"
      placeholder="Email Address"
      v-model="email"
    />
  </div>
</template>

<script>
import Hero from "~/components/Hero.vue";
import axios from "axios";

export default {
  components: {
    Hero,
  },
  data() {
    return {
      questions: {},
      baseUrl: process.env.baseUrl,
    };
  },
  methods: {
    async fetchQuestions() {
      const api = this.baseUrl + "/api/question/list";
      this.questions = await axios.get(api).then((response) => {
        return response.data;
      });
    },
  },
  mounted() {
    this.fetchQuestions();
  },
};
</script>

