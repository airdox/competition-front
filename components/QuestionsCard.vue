<template>
  <div class="question">
    <header>
      <img
        class="book"
        src="~/assets/images/book.svg"
        alt="Illustration d'un livre de recette"
      />
      <hr class="separation" />
      <h2>La sélection <br />des recettes</h2>

      <img class="forme1" src="~/assets/images/forme1.svg" alt="Illustration" />
      <img class="forme2" src="~/assets/images/forme2.svg" alt="Illustration" />
    </header>
    <img
      class="toque"
      src="~/assets/images/toque.svg"
      alt="Illustration d'une toque"
    />

    <div class="containerLine">
      <div class="circle1">
        <div class="circle2"></div>
      </div>
      <div class="line"></div>
    </div>

    <div v-if="Object.entries(questions).length !== 0" class="containerCard">
      <div class="card" :name="'card' + questions[0].id">
        <h3>{{ questions[0].question }}</h3>

        <form action="">
          <input
            type="radio"
            :id="'response' + response.id"
            :name="'response' + response.id"
            :value="response.id"
            checked
            v-for="response in questions[0].responses"
            :key="'input' + response.id"
          />
          <label
            :for="'response' + response.id"
            v-for="response in questions[0].responses"
            :key="'label' + response.id"
            >{{ response.response }}</label
          >

          <button class="btnCard">Valider</button>
        </form>
      </div>

      <img class="forme3" src="~/assets/images/forme3.svg" alt="Illustration" />

      <img class="forme4" src="~/assets/images/forme4.svg" alt="Illustration" />

      <img class="forme5" src="~/assets/images/forme5.svg" alt="Illustration" />

      <div class="fondFleche">
        <img
          class="fleche"
          src="~/assets/images/fleche.svg"
          alt="Illustration d'une fléche"
        />
      </div>

      <div class="card" :name="'card' + questions[1].id">
        <h3>{{ questions[1].question }}</h3>

        <form action="">
          <input
            type="radio"
            :id="'response' + response.id"
            :name="'response' + response.id"
            :value="response.id"
            checked
            v-for="response in questions[1].responses"
            :key="'input' + response.id"
          />
          <label
            :for="'response' + response.id"
            v-for="response in questions[1].responses"
            :key="'label' + response.id"
            >{{ response.response }}</label
          >
          <button class="btnCard">Valider</button>
        </form>
      </div>

      <div class="fondFleche">
        <img
          class="fleche"
          src="~/assets/images/fleche.svg"
          alt="Illustration d'une fléche"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      questions: {},
      baseUrl: process.env.baseUrl
    };
  },
  methods: {
    async fetchQuestions() {
      const api = this.baseUrl + "/api/question/list";
      this.questions = await axios.get(api).then(response => {
        return response.data;
      });
      console.log(this.questions);
    }
  },
  async created() {
    await this.fetchQuestions();
  }
};
</script>

<style lang="scss" scope>
.question {
  background-color: $colorPink;
  padding-top: 4rem;
  clip-path: polygon(0 0%, 100% 3%, 100% 100%, 0 97%);
  margin-top: -6rem;
  position: relative;
  padding-bottom: 30rem;
  height: 100%;

  header {
    margin-top: 9rem;
    position: relative;
    margin-bottom: 5rem;

    hr {
      width: 19rem;
      border: 2px solid $colorWhite;
      margin: 2.5rem auto;
    }

    h2 {
      font-size: 3rem;
      font-family: "BebasKa";
      color: $colorWhite;
      text-transform: uppercase;
      font-weight: 400;
    }

    .forme1 {
      position: absolute;
      right: 6rem;
    }

    .forme2 {
      position: absolute;
      left: 5rem;
      bottom: -7rem;
    }
  }

  .containerLine {
    .circle1 {
      width: 16px;
      height: 16px;
      background-color: $colorPink;
      border: 1px solid $colorBlue;
      border-radius: 100%;
      position: absolute;
      left: 48.4%;
      padding-top: 2px;
      padding-left: 2px;
      z-index: -2;
      top: 22%;

      .circle2 {
        width: 10px;
        height: 10px;
        background-color: $colorBlue;
        border-radius: 100%;
      }
    }

    .line {
      width: 2px;
      height: 140rem;
      background: $colorWhite;
      position: absolute;
      transform: rotate(0deg);
      left: 50%;
      top: 22%;
      z-index: -3;
    }
  }

  .toque {
    position: -webkit-sticky;
    position: -moz-sticky;
    position: -ms-sticky;
    position: -o-sticky;
    position: sticky;
    top: 50%;
    z-index: -1;
  }

  .containerCard {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 5rem;

    .card {
      background-color: $colorWhite;
      border-radius: 2rem;
      margin: 4rem 2.5rem;
      padding: 2.5rem 2rem;
      z-index: 3;
      max-width: 33rem;
    }

    .fondFleche {
      background-color: $colorPink;
      margin-top: 3rem;
      margin-bottom: 12rem;
      z-index: -2;
    }

    .forme3 {
      position: absolute;
      top: 52%;
      left: 7rem;
    }

    .forme4 {
      position: absolute;
      top: 57%;
      right: 7rem;
    }

    .forme5 {
      position: absolute;
      top: 60%;
      left: 7rem;
    }
  }

  h3 {
    color: $colorBlue;
    text-transform: uppercase;
    text-align: center;
    font-size: 2rem;
    line-height: 2.3rem;
    margin-bottom: 2.5rem;
  }

  input[type="radio"] {
    opacity: 0;
    position: fixed;
    width: 0;
  }

  label {
    display: inline-block;
    width: 25.5rem;
    height: 5rem;
    font-family: "Lato-Regular";
    font-size: 1.6rem;
    line-height: 4rem;
    border: 2px solid $colorBlue;
    border-radius: 3rem;
    cursor: pointer;
    margin-bottom: 0.8rem;
  }

  h2 {
    font-size: 3rem;
    font-family: "BebasKa";
    color: $colorWhite;
    text-transform: uppercase;
    font-weight: 400;
  }

  .forme1 {
    position: absolute;
    right: 6rem;
  }

  .forme2 {
    position: absolute;
    left: 5rem;
    bottom: -7rem;
  }
}

.containerLine {
  .circle1 {
    width: 16px;
    height: 16px;
    background-color: $colorPink;
    border: 1px solid $colorBlue;
    border-radius: 100%;
    position: absolute;
    left: 48.4%;
    padding-top: 2px;
    padding-left: 2px;
    z-index: -2;
    top: 22%;

    .circle2 {
      width: 10px;
      height: 10px;
      background-color: $colorBlue;
      border-radius: 100%;
    }
  }

  .line {
    width: 2px;
    height: 177rem;
    background: $colorWhite;
    position: absolute;
    transform: rotate(0deg);
    left: 50%;
    top: 22%;
    z-index: -3;
  }
}

.toque {
  position: -webkit-sticky;
  position: -moz-sticky;
  position: -ms-sticky;
  position: -o-sticky;
  position: sticky;
  top: 50%;
  z-index: -1;
}

.containerCard {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 5rem;

  .card {
    background-color: $colorWhite;
    border-radius: 2rem;
    margin: 4rem 2.5rem;
    padding: 2.5rem 2rem;
    z-index: 3;
    margin-bottom: 25rem;
    max-width: 33rem;
  }
}

h3 {
  color: $colorBlue;
  text-transform: uppercase;
  text-align: center;
  font-size: 2rem;
  line-height: 2.3rem;
  margin-bottom: 2.5rem;
}

input[type="radio"] {
  opacity: 0;
  position: fixed;
  width: 0;
}

label {
  display: inline-block;
  width: 25.5rem;
  height: 5rem;
  font-family: "Lato-Regular";
  font-size: 1.6rem;
  line-height: 4rem;
  border: 2px solid $colorBlue;
  border-radius: 3rem;
  cursor: pointer;
  margin-bottom: 0.8rem;
}

input[type="radio"]:checked + label {
  background-color: $colorWhite;
  border-color: $colorBlue;
  color: $colorBlue;
}

input[type="radio"]:focus + label {
  background-color: $colorBlue;
  color: $colorWhite;
}

button {
  margin-top: 2.5rem;
}
</style>
