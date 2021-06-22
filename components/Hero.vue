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

        <p class="paddingText">Accompagnez <span class="textPink">votre futur chef</span> tout au long de son parcours, du choix des recettes <span class="textPink"> jusqu’à votre assiette ! </span></p>

        <p>Persil & Romain sont très curieux, il est très probable qu’ils vous posent quelques questions en chemin !</p>

        <hr>
        <p class="bold">Une surprise alléchante vous attend à l’arrivée...</p>
        
        <img
            class="fondIllu"
            alt="Icone"
            src="~/assets/images/fondIcone.svg"
        >
        <button class="btn">Commencer</button>
    </div>
</template>

<style lang="scss" scope>
    .container {
        padding: 0 !important;
        

        .hero {
            padding-top: 50px;
            background-color: #024A75;
            padding-bottom: 10rem;
            clip-path: polygon(0 0%, 100% 0%, 100% 100%, 0 93%);

            .back {
                position: fixed;
                left: 2.5rem;
                top: 7rem;
                cursor: pointer;
            }
        
            .logo {
                margin-bottom: 2.5rem;
            }

            h1 {
                margin-bottom: 2.5rem;
            }

            h1, p {
                padding: 0 6rem;
            }

            .paddingText {
                margin-bottom: 7rem;
            }


            hr {
                width: 1.6rem;
                border: 1px solid $colorPink;
                border-radius: 2rem;
                margin: 2.5rem auto;
            }

            p.bold {
                margin-bottom: 3rem;
            }

            .fondIllu {
                width: 100%;
                margin-bottom: 4rem;
            }
        }
    }
</style>