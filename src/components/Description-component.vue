<template>
    <main id="description">
      <swiper-container
        class="new-swiper-container"
        :modules="[Navigation, Pagination, Autoplay, Mousewheel]"
        :navigation="true"
        :pagination="{ clickable: true }"
        :mousewheel="true"
        :effect="'slide'"
        :grabCursor="true"
        
      >
        <swiper-slide class="swiper-slide">
            <h2>Bienvenue à toi !</h2>
            <p>Je m'appelle Kevin</p>
            <p>Je suis ravi de voir que tu as la référence à ce formulaire !</p>
            <p>Je suis passionné par de nombreux domaines, et je vais te les faire découvrir ici.</p>
        </swiper-slide>
        <swiper-slide class="swiper-slide">
            <h2>La musique</h2>
            <p>La musique prend une part importante de mon existence.</p>
            <p>Elle reste un moyen de communication qui atteint des cibles que le plus acéré des mots ne parviendra jamais à atteindre.</p>
            <p></p>
        </swiper-slide>
        <swiper-slide class="swiper-slide">
            <h2>La psychologie</h2>
            <p>Directement après mon BAC, le destin m'a mené à Chambéry, à l'université Jacob-Bellecombette, où j'ai fait deux années de psychologie.</p>
            <p>J'ai pu développé des notions en neurobiologie, éthologie, psychopathologie, mais j'ai aussi rencontré des personnes incroyables.</p>
            <p>Pourtant, mué par une soif que toutes ces disciplines n'ont pu tarir, je me suis lancé dans l'écriture.</p>
            <p>Ainsi, nous arrivons au prochain point.</p>
        </swiper-slide>
        <swiper-slide class="swiper-slide">
            <h2>L'écriture</h2>
            <p>Dans la période où je me focalisais sur l'esprit, un appel plus intérieur est né.</p>
            <p>J'ai toujours eu un attrait pour les mots, que ce soit pour leur sens, leur rythme ou encore leur esthétisme.</p>
            <p>C'est donc tout naturellement que l'idée d'écrire un roman a germé.</p>
            <p>Si dans les premiers temps, il s'agissait davantage d'une blague que d'un but proprement dit, les choses ont bien vite évolué.</p>
            <p>Quelques temps plus tard, j'ai été publié !</p>
            <p>Si d'aventure tu voulais jeter un oeil à mon style, alors clique ici :</p>
            <a href="https://adiscar.netlify.app/#/" target="_blank">ADISCAR</a>
        </swiper-slide>
        <swiper-slide class="swiper-slide">
            <h2>Les langues 1...</h2>
            <h3>L'Anglais</h3>
            <p>Après avoir arrêté mes études en psychologie, j'ai exploré la piste des Lettres, Langues et Civilisations Etrangères.</p>
            <p>Je me suis spécialisé dans la littérature Anglaise pendant deux années consécutives.</p>
            <h3>L'Italien</h3>
            <p>Dans le même temps, j'ai pratiqué l'Italien.</p>
            <p>Je dois reconnaître qu'il s'agit là d'une langue agréable à parler, à écouter, et dont le fonctionnement est similaire à musique.</p>
            <p>Peut être est-ce là une des raisons pour laquelle je l'affectionne tant.</p>
        </swiper-slide>
        <swiper-slide class="swiper-slide">
            <h2>Les langues 2...</h2>
            <h3>L'Espagnol</h3>
            <p>J'ai pratiqué l'Espagnol en troisième langue pendant ma période de lycée.</p>
            <p>Même si je ne la pratique plus autant qu'avant, je garde contact avec elle et je parle régulièrement avec des personnes dont elle est la langue maternelle.</p>
            <h3>Le Japonais</h3>
            <p>J'utilise régulièrement l'application "<span class="green">DUOLINGO</span>".</p>
            <p>Grâce à elle, j'ai pu étudier l'écriture, cyrillique, arabe et japonaise.</p>
        </swiper-slide>
        <swiper-slide class="swiper-slide">
            <h2>Le développement web</h2>
            <p>Comme tu as pu le constater, ce site internet a été conçu de A à Z, en utilisant du HTML, CSS, Javascript, et le framework Vue.</p>
            <p>Pour ce qui est du sabre laser, j'ai utilisé "<span class="red">Blender</span>", et fusionné le style "<span class="red">Dooku</span>" avec des aspirations de "<span class="red">Dark Vador</span>" et de "<span class="green">Luke Skywalker</span>".</p>
            <p>Le thème de la force est joué sur un piano yamaha U3.</p>
        </swiper-slide>
      </swiper-container>
    </main>
  </template>

<style scoped>

.red {
    -webkit-text-stroke-color: red;
}

.green {
    -webkit-text-stroke-color: green;
}
p, h2, h3 {
    color: white;
    font-family: "Bebas Neue", sans-serif;
    color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: white;
    letter-spacing: 3px;
}

h2 {
    @media (min-width: 992px) and (max-width: 2048px) {
       font-size: 30px; 
    }
    @media (min-width: 2049px) {
       font-size: 40px; 
    }
}

p {
    @media (min-width: 992px) and (max-width: 2048px) {
       font-size: 22px; 
    }
    @media (min-width: 2049px) {
       font-size: 32px; 
    }
}

#description {
    position: absolute;
    opacity: 0;
    animation: appear .5s linear .7s forwards;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);

    .new-swiper-container {
        display: flex;

        .swiper-slide {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            p {
                text-align: justify;
            }
            a:hover {
                -webkit-text-stroke-color: red;
                transition: .2s ease;
            }
        }
    }
}

</style>
<script>
export default {
    name: 'DescriptionComponent',
}
</script>

<script setup>
import { Navigation, Pagination, Autoplay, Mousewheel } from 'swiper/modules';
import { register } from 'swiper/element/bundle';
register();
</script>