<template>
  <div class="containerQuestions">
    <div id="question1" class="questionPink">
      <div class="container-separation">
        <hr class="separation-section" />
      </div>
      <header>
        <img
          class="book"
          src="~/assets/images/book.svg"
          alt="Illustration d'un livre de recette"
        />
        <hr class="separation" />
        <h2>La sélection <br />des recettes</h2>

        <img
          class="forme1"
          src="~/assets/images/forme1.svg"
          alt="Illustration"
        />
        <img
          class="forme2"
          src="~/assets/images/forme2.svg"
          alt="Illustration"
        />
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
        <intersect
          @enter="onEnter"
          @leave="onLeave"
          :rootMargin="'0px 0px -500px 0px'"
        >
          <div
            class="card"
            :name="'card' + questions[0].id"
            v-if="question1_button === false"
          >
            <h3>{{ questions[0].question }}</h3>
            <v-radio-group v-model="response1">
              <v-radio
                v-for="response in questions[0].responses"
                :key="response.id"
                :value="response.id"
                :id="'response' + response.id"
                :name="'response' + response.id"
              ></v-radio>
            </v-radio-group>
            <label
              :for="'response' + response.id"
              v-for="response in questions[0].responses"
              :key="'label' + response.id"
              :class="response1 === response.id ? 'active' : ''"
              >{{ response.response }}</label
            >

            <button class="btnCard" @click="() => (question1_button = true)">
              Valider
            </button>
          </div>
        </intersect>
        <carousel
          v-if="question1_button === true"
          class="cards"
          :responsive="{
            0: { items: 1, nav: false },
          }"
        >
          <div class="slide" style="color: black">
            <img
              class="cardIcone"
              src="~/assets/images/cardIcone.svg"
              alt="icone du logo"
            />
            <h3>Le commentaire persillé</h3>

            <img
              class="quote"
              src="~/assets/images/quote.svg"
              alt="icone d'un quote'"
            />
            <p class="marg1">
              Nos chefs dénichent chaque semaine des
              <span class="bold"> recettes équilibrées, pleines de saveurs</span
              >, faites avec des produits locaux et de saison !
            </p>
            <p class="marg2">
              Elles sont<span class="bold">
                validées par des experts diététiciens.</span
              >
            </p>

            <img
              class="quote2"
              src="~/assets/images/quote2.svg"
              alt="icone d'un quote'"
            />
          </div>

          <div class="slide background" style="color: black">
            <img
              class="background"
              src="~/assets/images/question1.png"
              alt="image d'un plat"
            />
            <img
              class="cardIcone"
              src="~/assets/images/romarin.svg"
              alt="icone du logo"
            />
            <h3 class="titleRomarin">La photo de romarin</h3>
          </div>
        </carousel>

        <img
          class="forme3"
          src="~/assets/images/forme3.svg"
          alt="Illustration"
        />

        <img
          class="forme4"
          src="~/assets/images/forme4.svg"
          alt="Illustration"
        />

        <img
          class="forme5"
          src="~/assets/images/forme5.svg"
          alt="Illustration"
        />

        <div class="fondFleche">
          <img
            class="fleche"
            src="~/assets/images/fleche.svg"
            alt="Illustration d'une fléche"
          />
        </div>

        <intersect
          @enter="onEnter"
          @leave="onLeave"
          :rootMargin="'0px 0px -500px 0px'"
        >
          <div
            class="card"
            :name="'card' + questions[1].id"
            v-if="question2_button === false"
          >
            <h3>{{ questions[1].question }}</h3>
            <v-radio-group v-model="response2">
              <v-radio
                v-for="response in questions[1].responses"
                :key="response.id"
                :value="response.id"
                :id="'response' + response.id"
                :name="'response' + response.id"
              ></v-radio>
            </v-radio-group>
            <label
              :for="'response' + response.id"
              v-for="response in questions[1].responses"
              :key="'label' + response.id"
              :class="response2 === response.id ? 'active' : ''"
              >{{ response.response }}</label
            >
            <button class="btnCard" @click="() => (question2_button = true)">
              Valider
            </button>
          </div>
        </intersect>

        <carousel
          v-if="question2_button === true"
          class="cards"
          :responsive="{
            0: { items: 1, nav: false },
          }"
        >
          <div class="slide" style="color: black">
            <img
              class="cardIcone"
              src="~/assets/images/cardIcone.svg"
              alt="icone du logo"
            />
            <h3>Le commentaire persillé</h3>

            <img
              class="quote"
              src="~/assets/images/quote.svg"
              alt="icone d'un quote'"
            />
            <p class="marg1">Vous allez vous régaler !</p>
            <p class="marg2">
              <span class="bold">
                Les recettes de nos chefs sont variées et répondent à tous les
                goûts et les besoins des petits et des grands.
              </span>
            </p>

            <img
              class="quote2"
              src="~/assets/images/quote2.svg"
              alt="icone d'un quote'"
            />
          </div>

          <div class="slide background" style="color: black">
            <img
              class="background"
              src="~/assets/images/question2.png"
              alt="image d'un plat"
            />
            <img
              class="cardIcone"
              src="~/assets/images/romarin.svg"
              alt="icone du logo"
            />
            <h3 class="titleRomarin">La photo de romarin</h3>
          </div>
        </carousel>

        <div class="fondFleche">
          <img
            class="fleche"
            src="~/assets/images/fleche.svg"
            alt="Illustration d'une fléche"
          />
        </div>

        <img
          class="forme6"
          src="~/assets/images/forme6.svg"
          alt="Illustration"
        />

        <img
          class="forme7"
          src="~/assets/images/forme7.svg"
          alt="Illustration"
        />
      </div>
    </div>
    <div class="questionGreen">
      <div class="container-separation">
        <hr class="separation-section" />
      </div>
      <header>
        <img
          class="book"
          src="~/assets/images/courses.svg"
          alt="Illustration de courses"
        />
        <hr class="separation" />
        <h2>Les courses alimentaires</h2>

        <img
          class="forme1"
          src="~/assets/images/forme8.svg"
          alt="Illustration"
        />
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
        <intersect
          @enter="onEnter"
          @leave="onLeave"
          :rootMargin="'0px 0px -500px 0px'"
        >
          <div
            class="card"
            :name="'card' + questions[2].id"
            v-if="question3_button === false"
          >
            <h3>{{ questions[2].question }}</h3>
            <v-radio-group v-model="response3">
              <v-radio
                v-for="response in questions[2].responses"
                :key="response.id"
                :value="response.id"
                :id="'response' + response.id"
                :name="'response' + response.id"
              ></v-radio>
            </v-radio-group>
            <label
              :for="'response' + response.id"
              v-for="response in questions[2].responses"
              :key="'label' + response.id"
              :class="response3 === response.id ? 'active' : ''"
              >{{ response.response }}</label
            >

            <button class="btnCard" @click="() => (question3_button = true)">
              Valider
            </button>
          </div>
        </intersect>
        <carousel
          v-if="question3_button === true"
          class="cards"
          :responsive="{
            0: { items: 1, nav: false },
          }"
        >
          <div class="slide" style="color: black">
            <img
              class="cardIcone"
              src="~/assets/images/cardIcone.svg"
              alt="icone du logo"
            />
            <h3>Le commentaire persillé</h3>

            <img
              class="quote"
              src="~/assets/images/quote.svg"
              alt="icone d'un quote'"
            />
            <p class="marg1">
              En fonction des plats souhaités,
              <span class="bold">les courses seront faites par nos chefs</span>,
              directement chez les <span class="bold">producteurs locaux</span>.
            </p>
            <p class="marg2">Saveurs et fraîcheur garanties !</p>

            <img
              class="quote2"
              src="~/assets/images/quote2.svg"
              alt="icone d'un quote'"
            />
          </div>

          <div class="slide background" style="color: black">
            <img
              class="background"
              src="~/assets/images/question3.png"
              alt="image d'un plat"
            />
            <img
              class="cardIcone"
              src="~/assets/images/romarin.svg"
              alt="icone du logo"
            />
            <h3 class="titleRomarin">La photo de romarin</h3>
          </div>
        </carousel>

        <img
          class="forme3"
          src="~/assets/images/forme10.svg"
          alt="Illustration"
        />

        <img
          class="forme4"
          src="~/assets/images/forme9.svg"
          alt="Illustration"
        />

        <div class="fondFleche">
          <img
            class="fleche"
            src="~/assets/images/fleche.svg"
            alt="Illustration d'une fléche"
          />
        </div>
        <intersect
          @enter="onEnter"
          @leave="onLeave"
          :rootMargin="'0px 0px -500px 0px'"
        >
          <div
            class="card"
            :name="'card' + questions[3].id"
            v-if="question4_button === false"
          >
            <h3>{{ questions[3].question }}</h3>
            <v-radio-group v-model="response4">
              <v-radio
                v-for="response in questions[3].responses"
                :key="response.id"
                :value="response.id"
                :id="'response' + response.id"
                :name="'response' + response.id"
              ></v-radio>
            </v-radio-group>
            <label
              :for="'response' + response.id"
              v-for="response in questions[3].responses"
              :key="'label' + response.id"
              :class="response4 === response.id ? 'active' : ''"
              >{{ response.response }}</label
            >
            <button class="btnCard" @click="() => (question4_button = true)">
              Valider
            </button>
          </div>
        </intersect>

        <carousel
          v-if="question4_button === true"
          class="cards"
          :responsive="{
            0: { items: 1, nav: false },
          }"
        >
          <div class="slide" style="color: black">
            <img
              class="cardIcone"
              src="~/assets/images/cardIcone.svg"
              alt="icone du logo"
            />
            <h3>Le commentaire persillé</h3>

            <img
              class="quote"
              src="~/assets/images/quote.svg"
              alt="icone d'un quote'"
            />
            <p class="marg1">
              Le gaspi c’est tabou, on en viendra tous à bout !
              <span class="bold">Notre service de batch cooking</span>
              (préparation de repas à l’avance)
              <span class="bold">permet d’éviter le gaspillage alimentaire</span
              >.
            </p>
            <p class="marg2">Fini le ½ oignon qui pleure dans le frigo !</p>

            <img
              class="quote2"
              src="~/assets/images/quote2.svg"
              alt="icone d'un quote'"
            />
          </div>

          <div class="slide background" style="color: black">
            <img
              class="background"
              src="~/assets/images/question4-1.png"
              alt="image d'un plat"
            />
            <img
              class="cardIcone"
              src="~/assets/images/romarin.svg"
              alt="icone du logo"
            />
            <h3 class="titleRomarin">La photo de romarin</h3>
          </div>

          <div class="slide background" style="color: black">
            <img
              class="background"
              src="~/assets/images/question4-2.png"
              alt="image d'un plat"
            />
            <img
              class="cardIcone"
              src="~/assets/images/romarin.svg"
              alt="icone du logo"
            />
            <h3 class="titleRomarin">La photo de romarin</h3>
          </div>
        </carousel>

        <div class="fondFleche">
          <img
            class="fleche"
            src="~/assets/images/fleche.svg"
            alt="Illustration d'une fléche"
          />
        </div>

        <img
          class="forme6"
          src="~/assets/images/forme11.svg"
          alt="Illustration"
        />

        <img
          class="forme7"
          src="~/assets/images/forme1.svg"
          alt="Illustration"
        />
      </div>
    </div>
    <div class="questionBlue">
      <div class="container-separation">
        <hr class="separation-section" />
      </div>
      <header>
        <img
          class="book"
          src="~/assets/images/chef.svg"
          alt="Illustration d'un chef'"
        />
        <hr class="separation" />
        <h2>Le passage aux fourneaux</h2>

        <img
          class="forme1"
          src="~/assets/images/forme12.svg"
          alt="Illustration"
        />
        <img
          class="forme2"
          src="~/assets/images/forme13.svg"
          alt="Illustration"
        />
      </header>

      <div class="limitor-toque">
        <img
          class="toque"
          src="~/assets/images/toque.svg"
          alt="Illustration d'une toque"
        />
      </div>

      <div class="containerLine">
        <div class="circle1">
          <div class="circle2"></div>
        </div>
        <div class="line"></div>
      </div>

      <div v-if="Object.entries(questions).length !== 0" class="containerCard">
        <intersect
          @enter="onEnter"
          @leave="onLeave"
          :rootMargin="'0px 0px -500px 0px'"
        >
          <div
            class="card"
            :name="'card' + questions[4].id"
            v-if="question5_button === false"
          >
            <h3>{{ questions[4].question }}</h3>
            <v-radio-group v-model="response5">
              <v-radio
                v-for="response in questions[4].responses"
                :key="response.id"
                :value="response.id"
                :id="'response' + response.id"
                :name="'response' + response.id"
              ></v-radio>
            </v-radio-group>
            <label
              :for="'response' + response.id"
              v-for="response in questions[4].responses"
              :key="'label' + response.id"
              :class="response5 === response.id ? 'active' : ''"
              >{{ response.response }}</label
            >

            <button class="btnCard" @click="() => (question5_button = true)">
              Valider
            </button>
          </div>
        </intersect>

        <carousel
          v-if="question5_button === true"
          class="cards"
          :responsive="{
            0: { items: 1, nav: false },
          }"
        >
          <div class="slide" style="color: black">
            <img
              class="cardIcone"
              src="~/assets/images/cardIcone.svg"
              alt="icone du logo"
            />
            <h3>Le commentaire persillé</h3>

            <img
              class="quote"
              src="~/assets/images/quote.svg"
              alt="icone d'un quote'"
            />
            <p class="marg1">
              Une fois par semaine et selon vos dispos,
              <span class="bold"
                >votre chef cuisine à votre domicile et conserve le tout dans
                votre frigo</span
              >.
            </p>
            <p class="marg2">
              Cerise sur le plat,
              <span class="bold"
                >il ne laissera aucune trace de son passage dans votre cuisine
                !</span
              >
            </p>

            <img
              class="quote2"
              src="~/assets/images/quote2.svg"
              alt="icone d'un quote'"
            />
          </div>

          <div class="slide background" style="color: black">
            <img
              class="background"
              src="~/assets/images/question5.png"
              alt="image d'un plat"
            />
            <img
              class="cardIcone"
              src="~/assets/images/romarin.svg"
              alt="icone du logo"
            />
            <h3 class="titleRomarin">La photo de romarin</h3>
          </div>
        </carousel>

        <img
          class="forme3"
          src="~/assets/images/forme14.svg"
          alt="Illustration"
        />

        <img
          class="forme4"
          src="~/assets/images/forme15.svg"
          alt="Illustration"
        />

        <img
          class="forme5"
          src="~/assets/images/forme16.svg"
          alt="Illustration"
        />

        <img
          class="forme6"
          src="~/assets/images/forme17.svg"
          alt="Illustration"
        />

        <div class="fondFleche">
          <img
            class="fleche"
            src="~/assets/images/fleche.svg"
            alt="Illustration d'une fléche"
          />
        </div>

        <div class="bon">
          <img
            class="illuChef"
            src="~/assets/images/illuChef.svg"
            alt="Illustration d'un chef"
          />
          <h4>Merci !</h4>
          <p class="p1">Persil & Romarin vous récompense !</p>
          <p class="p2">
            Profitez de <span> -15%</span> sur votre première réservation !
          </p>

          <p class="p3">
            Indiquer votre adresse e-mail ci-dessous pour recevoir votre code de
            réduction immédiat.
          </p>
          <div class="containerBon">
            <label for="">Votre adresse e-mail :</label>
            <input
              type="email"
              class="form-control"
              placeholder="ex : nom.prenom@gmail.com"
              v-model="email"
            />
            <button @click="submit">Recevoir mon code</button>

            <div class="checkbox-options">
              <v-checkbox
                color="white"
                v-model="newsletter"
                label="Je souhaite m'inscrire à la newsletter"
                class="newsletter"
              ></v-checkbox>
              <v-checkbox
                color="white"
                v-model="privacy"
                label="J'accepte de recevoir d'autres communications et conseils de la part de Persil&Romarin. 
Consultez notre Politique de confidentialité pour en savoir plus sur notre engagement vis-à-vis de la protection de la vie privée."
              ></v-checkbox>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import carousel from "vue-owl-carousel";
import Intersect from "vue-intersect";
export default {
  components: { carousel, Intersect },
  data() {
    return {
      questions: {},
      baseUrl: process.env.baseUrl,
      email: "",
      response1: 0,
      response2: 0,
      response3: 0,
      response4: 0,
      response5: 0,
      question1_button: false,
      question2_button: false,
      question3_button: false,
      question4_button: false,
      question5_button: false,
      newsletter: false,
      privacy: false,
    };
  },
  methods: {
    async fetchQuestions() {
      const api = this.baseUrl + "/api/question/list";
      this.questions = await axios.get(api).then((response) => {
        return response.data;
      });
      console.log(this.questions);
    },
    async submit() {
      console.log(
        this.response1,
        this.response2,
        this.response3,
        this.response4,
        this.response5
      );

      let data = {
        responses: [
          this.response1,
          this.response2,
          this.response3,
          this.response4,
          this.response5,
        ],
        email: this.email,
      };

      if (
        this.response1 !== null &&
        this.response2 !== null &&
        this.response3 !== null &&
        this.response4 !== null &&
        this.response5 !== null &&
        this.email !== null
      ) {
        axios
          .post(this.baseUrl + "/api/response_user/add", data)
          .then((response) => {
            console.log(response);
          })
          .catch((e) => {
            this.errors.push(e);
            console.log(this.errors);
          });
      }
    },
    onEnter(e) {
      // this.inScreen.push(e[0].target.id);
      // this.inScreen = [...new Set(this.inScreen)];
      console.log("ENTER");
      console.log(e[0].target);
      const target = e[0].target;
      if (!target.classList.contains("active")) {
        target.classList.add("active");
      }
    },
    onLeave(e) {
      // const index = this.inScreen.indexOf(e[0].target.id);
      // this.inScreen.splice(index, 1);
      // this.inScreen = [...new Set(this.inScreen)];
      // console.log("LEAVE");
      // console.log(e);
      // const target = e[0].target;
      // if (target.classList.contains("active")) {
      //   target.classList.remove("active");
      // }
    },
  },
  async created() {
    await this.fetchQuestions();
  },
};
</script>

<style lang="scss" scope>
@-webkit-keyframes mover {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-10px);
  }
}
@keyframes mover {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-10px);
  }
}

.slide {
  height: 43rem;
}

.owl-theme .owl-nav.disabled + .owl-dots {
  margin-top: -49px;
  background-color: rgba(255, 255, 255, 0.5);
  position: relative;
  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
}

.questionPink {
  background-color: $colorPink;
  padding-top: 4rem;
  clip-path: polygon(0 0%, 100% 3%, 100% 100%, 0 97%);
  margin-top: -10rem;
  position: relative;
  padding-bottom: 10rem;
  height: 2400px;

  .container-separation {
    width: 100%;
    height: 30rem;
    transform: translateY(-10rem);
    position: absolute;
    z-index: 1000;
    overflow: hidden;

    .separation-section {
      height: 2.4rem;
      width: calc(100% + 2rem);
      background: $colorWhite;
      z-index: 1000;
      position: relative;
      transform: translate(-1rem, 9rem) rotate(9.8deg);
    }
  }

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
      bottom: -10rem;
      -webkit-animation: mover 1s infinite alternate;
      animation: mover 1s infinite alternate;
    }

    .forme2 {
      position: absolute;
      left: 5rem;
      bottom: -18rem;
      -webkit-animation: mover 1s infinite alternate;
      animation: mover 1s infinite alternate;
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
    display: block;
    left: 39%;
  }

  .containerCard {
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 5rem;

    .card {
      background-color: $colorWhite;
      border-radius: 2rem;
      margin: 4rem auto;
      padding: 2.5rem 3rem;
      z-index: 3;
      max-width: 33rem;
      min-height: 43rem;
      opacity: 0;
      transition-duration: 0.5s;
      transform: translateY(-60px);

      &.active {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .cards {
      background-color: $colorWhite;
      border-radius: 2rem;
      margin: 4rem 2.5rem;
      z-index: 3;
      max-width: 33rem;
      min-height: 43rem;
      height: 43rem;

      .titleRomarin {
        color: $colorWhite;
        padding-left: 1rem;
      }

      .background {
        position: absolute;
        width: 100%;
        z-index: -1;
        height: 43rem;
      }
    }

    .slide {
      .cardIcone {
        width: 3.2rem;
        position: absolute;
        left: 3rem;
        top: 2.5rem;
      }

      h3 {
        padding-top: 2.5rem;
        font-size: 2.4rem;
        padding-left: 3rem;
      }
      p {
        color: $colorBlue;
        font-size: 2rem;
        padding: 0 3.5rem;
      }

      .marg1 {
        margin-top: 8rem;
      }

      .quote {
        width: 4rem;
        position: absolute;
        top: 10rem;
        left: 1rem;
      }
      .quote2 {
        width: 4rem;
        position: absolute;
        bottom: 5rem;
        right: 1rem;
      }
    }

    .fondFleche {
      background-color: $colorPink;
      margin-top: 3rem;
      margin-bottom: 12rem;
      z-index: -2;
    }

    .forme3 {
      position: absolute;
      top: 48%;
      left: 7rem;
      -webkit-animation: mover 1s infinite alternate;
      animation: mover 1s infinite alternate;
    }

    .forme4 {
      position: absolute;
      top: 52%;
      right: 7rem;
      -webkit-animation: mover 1s infinite alternate;
      animation: mover 1s infinite alternate;
    }

    .forme5 {
      position: absolute;
      top: 55%;
      left: 7rem;
      -webkit-animation: mover 1s infinite alternate;
      animation: mover 1s infinite alternate;
    }
    .forme6 {
      position: absolute;
      bottom: 20rem;
      right: 7rem;
      -webkit-animation: mover 1s infinite alternate;
      animation: mover 1s infinite alternate;
    }
    .forme7 {
      position: absolute;
      bottom: 13rem;
      left: 7rem;
      -webkit-animation: mover 1s infinite alternate;
      animation: mover 1s infinite alternate;
    }
  }

  h3 {
    color: $colorBlue;
    font-family: "BebasKa";
    text-transform: uppercase;
    text-align: center;
    font-size: 2rem;
    line-height: 2.3rem;
    margin-bottom: 2.5rem;
    font-weight: 400;
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
    -webkit-animation: mover 1s infinite alternate;
    animation: mover 1s infinite alternate;
  }

  .forme2 {
    position: absolute;
    left: 5rem;
    bottom: -7rem;
    -webkit-animation: mover 1s infinite alternate;
    animation: mover 1s infinite alternate;
  }
}
.questionGreen {
  background-color: $colorGreen;
  padding-top: 4rem;
  clip-path: polygon(0 0%, 100% 3%, 100% 100%, 0 97%);
  position: relative;
  padding-bottom: 10rem;
  height: 2400px;
  margin-top: -500px;

  .container-separation {
    width: 100%;
    height: 30rem;
    transform: translateY(-10rem);
    position: absolute;
    z-index: 1000;
    overflow: hidden;

    .separation-section {
      height: 2.4rem;
      width: calc(100% + 2rem);
      background: $colorWhite;
      z-index: 1000;
      position: relative;
      transform: translate(-1rem, 9rem) rotate(9.8deg);
    }
  }

  header {
    margin-top: 9rem;
    position: relative;
    margin-bottom: 5rem;
    background: $colorGreen;

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
      bottom: -19rem;
      -webkit-animation: mover 1s infinite alternate;
      animation: mover 1s infinite alternate;
    }
  }

  .containerLine {
    .circle1 {
      width: 16px;
      height: 16px;
      background-color: $colorGreen;
      border: 1px solid $colorWhite;
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
        background-color: $colorWhite;
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
    top: calc(50% + 200px);
    z-index: -1;
    display: block;
    left: 39%;
    transform: translateY(-200px);
  }

  .containerCard {
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 5rem;

    .card {
      background-color: $colorWhite;
      border-radius: 2rem;
      margin: 4rem auto;
      padding: 2.5rem 2rem;
      z-index: 3;
      max-width: 33rem;
      opacity: 0;
      transition-duration: 0.5s;
      transform: translateY(-60px);

      &.active {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .cards {
      background-color: $colorWhite;
      border-radius: 2rem;
      margin: 4rem 2.5rem;
      z-index: 3;
      max-width: 33rem;
      min-height: 43rem;
      height: 43rem;

      .titleRomarin {
        color: $colorWhite;
        padding-left: 1rem;
      }

      .background {
        position: absolute;
        width: 100%;
        z-index: -1;
        height: 43rem;
      }
    }

    .slide {
      .cardIcone {
        width: 3.2rem;
        position: absolute;
        left: 3rem;
        top: 2.5rem;
      }

      h3 {
        padding-top: 2.5rem;
        font-size: 2.4rem;
        padding-left: 3rem;
        font-family: "BebasKa";
        font-weight: 400;
      }
      p {
        color: $colorBlue;
        font-size: 2rem;
        padding: 0 3.5rem;
      }

      .marg1 {
        margin-top: 8rem;
      }

      .quote {
        width: 4rem;
        position: absolute;
        top: 10rem;
        left: 1rem;
      }
      .quote2 {
        width: 4rem;
        position: absolute;
        bottom: 5rem;
        right: 1rem;
      }
    }

    .fondFleche {
      background-color: $colorGreen;
      margin-top: 3rem;
      margin-bottom: 12rem;
      z-index: -2;
    }

    .forme3 {
      position: absolute;
      top: 57%;
      left: 7rem;
      -webkit-animation: mover 1s infinite alternate;
      animation: mover 1s infinite alternate;
    }

    .forme4 {
      position: absolute;
      top: 52%;
      right: 7rem;
      -webkit-animation: mover 1s infinite alternate;
      animation: mover 1s infinite alternate;
    }

    .forme5 {
      position: absolute;
      top: 55%;
      left: 7rem;
      -webkit-animation: mover 1s infinite alternate;
      animation: mover 1s infinite alternate;
    }
    .forme6 {
      position: absolute;
      bottom: 14rem;
      right: 7rem;
      -webkit-animation: mover 1s infinite alternate;
      animation: mover 1s infinite alternate;
    }
    .forme7 {
      position: absolute;
      bottom: 24rem;
      left: 7rem;
      -webkit-animation: mover 1s infinite alternate;
      animation: mover 1s infinite alternate;
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
    -webkit-animation: mover 1s infinite alternate;
    animation: mover 1s infinite alternate;
  }

  .forme2 {
    position: absolute;
    left: 5rem;
    bottom: -7rem;
    -webkit-animation: mover 1s infinite alternate;
    animation: mover 1s infinite alternate;
  }
}
.questionBlue {
  background-color: $colorBlue;
  padding-top: 4rem;
  clip-path: polygon(0 0%, 100% 3%, 100% 100%, 0 100%);
  margin-top: -5rem;
  position: relative;
  padding-bottom: 5rem;
  height: 50%;
  margin-top: -500px;

  .container-separation {
    width: 100%;
    height: 30rem;
    transform: translateY(-10rem);
    position: absolute;
    z-index: 1000;
    overflow: hidden;

    .separation-section {
      height: 2.4rem;
      width: calc(100% + 2rem);
      background: $colorWhite;
      z-index: 1000;
      position: relative;
      transform: translate(-1rem, 9rem) rotate(9.8deg);
    }
  }

  header {
    margin-top: 9rem;
    position: relative;
    margin-bottom: 5rem;
    background: $colorBlue;

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
      left: 6rem;
      bottom: -15rem;
      -webkit-animation: mover 1s infinite alternate;
      animation: mover 1s infinite alternate;
    }
  }

  .containerLine {
    .circle1 {
      width: 16px;
      height: 16px;
      background-color: $colorBlue;
      border: 1px solid $colorWhite;
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
        background-color: $colorWhite;
        border-radius: 100%;
      }
    }

    .line {
      width: 2px;
      height: 95.8rem;
      background: $colorWhite;
      position: absolute;
      transform: rotate(0deg);
      left: 50%;
      top: 22%;
      z-index: -3;
    }
  }

  .limitor-toque {
    position: absolute;
    height: 127rem;
    width: 100%;

    .toque {
      position: -webkit-sticky;
      position: -moz-sticky;
      position: -ms-sticky;
      position: -o-sticky;
      position: sticky;
      top: calc(50% + 200px);
      z-index: -1;
      display: block;
      left: 39%;
      transform: translateY(-200px);
    }
  }

  .containerCard {
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 20rem;

    .card {
      background-color: $colorWhite;
      border-radius: 2rem;
      margin: 4rem auto;
      padding: 2.5rem 2rem;
      z-index: 3;
      max-width: 33rem;
      opacity: 0;
      transition-duration: 0.5s;
      transform: translateY(-60px);

      &.active {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .cards {
      background-color: $colorWhite;
      border-radius: 2rem;
      margin: 4rem 2.5rem;
      z-index: 3;
      max-width: 33rem;
      min-height: 43rem;
      height: 43rem;

      .titleRomarin {
        color: $colorWhite;
        padding-left: 1rem;
      }

      .background {
        position: absolute;
        width: 100%;
        z-index: -1;
        height: 43rem;
      }
    }

    .slide {
      .cardIcone {
        width: 3.2rem;
        position: absolute;
        left: 3rem;
        top: 2.5rem;
      }

      h3 {
        padding-top: 2.5rem;
        font-size: 2.4rem;
        padding-left: 3rem;
        font-family: "BebasKa";
        font-weight: 400;
      }
      p {
        color: $colorBlue;
        font-size: 2rem;
        padding: 0 3.5rem;
      }

      .marg1 {
        margin-top: 8rem;
      }

      .quote {
        width: 4rem;
        position: absolute;
        top: 10rem;
        left: 1rem;
      }
      .quote2 {
        width: 4rem;
        position: absolute;
        bottom: 5rem;
        right: 1rem;
      }
    }

    .fondFleche {
      background-color: $colorBlue;
      margin-top: 3rem;
      margin-bottom: 32rem;
      z-index: -2;
    }

    .forme3 {
      position: absolute;
      top: 44%;
      left: 7rem;
      -webkit-animation: mover 1s infinite alternate;
      animation: mover 1s infinite alternate;
    }

    .forme4 {
      position: absolute;
      top: 42%;
      right: 7rem;
      -webkit-animation: mover 1s infinite alternate;
      animation: mover 1s infinite alternate;
    }

    .forme5 {
      position: absolute;
      top: 52%;
      left: 4rem;
      -webkit-animation: mover 1s infinite alternate;
      animation: mover 1s infinite alternate;
    }
    .forme6 {
      position: absolute;
      bottom: 110rem;
      right: 7rem;
      -webkit-animation: mover 1s infinite alternate;
      animation: mover 1s infinite alternate;
    }
    .forme7 {
      position: absolute;
      bottom: 24rem;
      left: 7rem;
      -webkit-animation: mover 1s infinite alternate;
      animation: mover 1s infinite alternate;
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

  .forme2 {
    position: absolute;
    right: 6rem;
    bottom: -20rem;
    -webkit-animation: mover 1s infinite alternate;
    animation: mover 1s infinite alternate;
  }
  .bon {
    .illuChef {
      margin-left: 6px;
    }
    h4 {
      font-family: "BebasKa";
      font-size: 4.5rem;
      color: $colorWhite;
    }

    .p1 {
    }

    .p2 {
      color: $colorPink;
      font-size: 2.7rem;
      font-weight: 700;
      line-height: 32px;

      span {
        color: $colorWhite;
      }
    }

    .p3 {
      padding: 0 10rem;
    }

    .containerBon {
      label {
        color: $colorWhite;
        text-align: left;
        width: 100%;
        padding-left: 4rem;
      }

      input[type="email"] {
        background-color: $colorWhite;
        color: #000;
        width: 32.5rem;
        height: 5rem;
        border-radius: 0.8rem;
        box-sizing: border-box;
        padding-left: 2.5rem;
        font-size: 1.6rem;
        margin: 0 auto;
      }

      button {
        width: 18rem;
        height: 5rem;
        background-color: $colorPink;
        color: $colorWhite;
        display: -webkit-flex;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: auto;
        margin-right: auto;
        border-radius: 0.8rem;
        font-size: 1.6rem;
      }
    }
  }
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

.card {
  label.active {
    background: $colorBlue;
    color: $colorWhite;
  }
  .v-input--radio-group {
    display: none;
  }
}

button {
  margin-top: 2.5rem;
}

.checkbox-options {
  margin: 0 25px;
  label {
    color: white !important;
    padding-left: 1rem !important;
  }

  .newsletter label {
    font-size: 1.9rem;
  }

  .v-input--selection-controls__input {
    border: 4px solid white;
  }
}
</style>
