<template>
    <div class="hero">
        <img
            class="back"
            alt="Flèche retour"
            src="~/assets/images/back.svg"
        >

        <img
            class="logo"
            alt="Logo Persil et Romarin"
            src="/logo.svg"
        >

        <h1>Laissez-nous cuisiner votre semaine !</h1>

        <p>Accompagnez <span class="bold">votre futur chef</span> tout au long de son parcours, du choix des recettes <span class="bold"> jusqu’à votre assiette ! </span></p>

        <img
            class="illuHero"
            alt="Illustration d'un plat"
            src="~/assets/images/illuHero.svg"
        >

        <p>Persil & Romain sont très curieux, il est très probable qu’ils vous posent quelques questions en chemin !</p>

        <hr>
        <p class="bold">Une surprise alléchante vous attend à l’arrivée...</p>

        <button class="btn">Commencer</button>
    </div>
</template>

<style lang="scss" scope>
    .container {
        padding: 0 !important;
        clip-path: polygon(0 0%, 100% 0%, 100% 100%, 0 94%);

        .hero {
            padding-top: 50px;
            background-color: #024A75;
            padding-bottom: 10rem;

            .back {
                position: fixed;
                left: 2.5rem;
                top: 7rem;
                cursor: pointer;
            }
        
            .logo {
                margin-bottom: 25px;
            }

            h1 {
                margin-bottom: 25px;
            }

            h1, p {
                padding: 0 60px;
            }

            .illuHero {
                margin: 50px auto;
            }

            hr {
                width: 30px;
                border: 2px solid $colorWhite;
                border-radius: 3px;
                margin: 25px auto;
            }

            p.bold {
                margin-bottom: 3rem;
            }
        }
    }
</style>