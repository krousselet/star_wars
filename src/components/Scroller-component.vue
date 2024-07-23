<template>
    <div class="wrapper">
            <div class="scroll-text">
                <h1 id="main-title">STAR WARS</h1>
                <h2 id="sub-title">L'éveil de Kevin</h2>
                <p class="one paragraph">Il était une fois, dans une galaxie lointaine... très lointaine...
                Nous sommes en l'année 2024 du calendrier galactique. Le paysage politique est incertain. Les tensions se font
                sentir au sein de la République qui ne s'incarne pas encore en un seul homme...</p>

                <p class="two paragraph">L'ordre des jedi du numérique vient d'achever une nouvelle formation. Un novice du nom de Kevin
                parcourt
                l'univers à la recherche d'une mission dans le but de construire son expérience. Malgré de nombreuses réponses
                à
                des appels d'offre de la République, ceux-ci restent muets.</p>
                <p class="three paragraph">Les voies de la Force sont nombreuses, et parfois pernicieuses. Mais Kevin est jeune, et il ne
                s'abandonne pas
                au côté obscur. Il redouble d'effort, ainsi que d'espoir. Sa route l'a déjà mené jusqu'au Maroc, où il a
                effectué un séjour de deux mois en développant des connaissances avec le framework Symfony.
                </p>
                <p class="four paragraph">Le jeune jedi ne désespère pourtant pas, et se met donc à rechercher des contrats en dehors du
                développement
                numérique. Il cherche aussi à transmettre ses connaissances, peut-être par de l'animation, ou autre chose.</p>
            </div>
        </div>
</template>

<style scoped>
    .wrapper {
        display: flex;
        height: 100%;
        width: 60%;
        margin: 0 auto;
        overflow: hidden;
        opacity: 0;
        animation: appear .2s ease forwards;

        @media (min-width: 320px) and (max-width: 991px) {
            width: 60%;
            perspective: 550px;
        }

        @media (min-width: 991px) and (max-width: 1080px) {
            width: 70%;
            perspective: 550px;
        }

        @media (min-width: 1080px) and (max-width: 2048px) {
            width: 80%;
            perspective: 550px;
        }

        @media (min-width: 2048px) and (max-width: 4080px) {
            width: 100%;
            perspective: 1000px;
        }

        .scroll-text {
            color: rgba(255, 255, 0, 0.849);
            font-size: 3vw;
            line-height: 1.5em;
            font-weight: bold;
            text-align: justify;
            position: relative;
            opacity: 1;
            animation: scroll 240s linear forwards;
            @media (min-width: 2048px) {
                animation: scroll 80s linear forwards;
            }
}

        #main-title,
        #sub-title {
            display: flex;
            justify-content: center;
            text-align: center;
            font-family: "Bebas Neue", sans-serif;
            color: transparent;
            -webkit-text-stroke-width: 1px;
            -webkit-text-stroke-color: yellow;
            
            .paragraph {
                color: rgba(255, 255, 0, 0.849);;
            }
        }
}
</style>

<script>
export default {
  name: 'ScrollerComponent',
};
</script>