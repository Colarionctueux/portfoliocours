<script lang="ts">
    import { onDestroy, onMount } from "svelte";
    import Projets from "../components/Projets.svelte";
    import initIO from "$lib/initIO";
    import { browser } from "$app/environment";
    import { fade, blur, fly, slide, scale } from "svelte/transition";
    
    let selectedProject = -1;
    let selectedMain = -1;
    let observer: IntersectionObserver | undefined;

  
  let show = false;

    const projets = [
        {
            bgImg:"/bgGti2.jpg",
            alt:"site GTI",
            schoolProject:false,
            date:"démarré le 03/11/2023 (en pause)",
            title:"GTI",
            logo:true,
            logoImg:"/logo-gti.svg",
            text:"Ce projet est un site web réalisé pour un client avec SvelteKit. Site vitrine mais également utilitaire pour que les clients aillent chercher les fiches techniques. Actuellement en développement, la partie BackEnd sera réalisée avec Node.js.",
            usedSkills:"/logo-svelte.png",
            unusedSkills:"/logo-jsnb.png",
            link:"https://gti-mu.vercel.app/"
        },
        {
            bgImg:"/reseau.png",
            alt:"VM ubuntu",
            schoolProject:true,
            date:"démarré le 04/10/2022 terminé le 26/03/2023",
            title:"Installation et configuration d’un poste de travail",
            logo:false,
            logoImg:"",
            text:"Nous avons créé une machine virtuelle fonctionnant sous Debian 11, puis nous l’avons configurée en installant des logiciels et en préparant un fichier de pré-configuration pour les fois d’après, nous avons ensuite installé Gitea.",
            usedSkills:"/bash.png",
        },
        {
            bgImg:"/odoo.jpg",
            alt:"Odoo",
            schoolProject:true,
            date:"démarré le 19/02/2024",
            title:"Déploiement Odoo",
            logo:true,
            logoImg:"/odoo.png",
            text:"Odoo est un logiciel de gestion d'affaires Open source. Nous sommes chargés d'en déployer un à l'aide de machines virtuelles et de docker. Odoo a besoin d'une base de données que nous avons donc réalisé à l'aide d'un conteneur Docker avec PostgreSQL. Il nous a également été demandé de mettre en place un reverse proxy avec traefik.",
            usedSkills:"/docker.svg,/bash.png",
            link:"https://github.com/Colarionctueux/SAE-odoo"
        },
        {
            bgImg:"/cam.jpeg",
            alt:"Chasse au monstre",
            schoolProject:true,
            date:"démarré le 17/10/2023 terminé le 14/01/2024",
            title:"Chasse au monstre",
            logo:false,
            logoImg:"",
            text:"Le jeu chasse au monstre est un projet réalisé au cours de notre 2ème année de BUT2. Le but, en tant que chasseur, est de trouver et chasser le monstre en tirant sur la bonne case, et pour le monstre de s'enfuir par la sortie. Nous avons intégré des sockets pour pouvoir jouer en LAN.",
            usedSkills:"/java.svg",
            link:"https://github.com/Colarionctueux/Chasse-au-monstre"
        },
    ]

    onMount(() => {show = true;});

    onMount(() => {
        observer = initIO(document.body, 0.8);
    })

    onDestroy(() => {
        if (browser) {
            observer?.disconnect();
        }
    })
</script>


    <aside>
        <button class="reveal-1" on:click={() => selectedProject = -1}>
            <div class:texteDecale={selectedProject === -1} class="blackSide" />
            <p class:texteDecale={selectedProject === -1}>Présentation<br>
                générale</p>
            
        </button>
        <div  class="reveal-15" />
        <button class="reveal-2" on:click={() => selectedProject = 0}>
            <div class:texteDecale={selectedProject === 0} class="blackSide" />
            <p class:texteDecale={selectedProject === 0}> GTI - Site web </p>
            <p class:texteDecale={selectedProject === 0}> Réalisé avec SvelteKit </p>
            <p class:texteDecale={selectedProject === 0}> Projet pour un client </p>
        </button>
        <div  class="reveal-25"/>
        <button class="reveal-3" on:click={() => selectedProject = 1}>
            <div class:texteDecale={selectedProject === 1} class="blackSide" />
            <p class:texteDecale={selectedProject === 1}> VM - Réseau </p>
            <p class:texteDecale={selectedProject === 1}> Config poste de travail </p>
            <p class:texteDecale={selectedProject === 1}> Projet d'école </p>
        </button>
        <div  class="reveal-35"/>
        <button class="reveal-4" on:click={() => selectedProject = 2}>
            <div class:texteDecale={selectedProject === 2} class="blackSide" />
            <p class:texteDecale={selectedProject === 2}> Odoo - Réseau </p>
            <p class:texteDecale={selectedProject === 2}> Déploiement d'application </p>
            <p class:texteDecale={selectedProject === 2}> Projet d'école </p>
        </button>
        <div  class="reveal-45"/>
        <button class="reveal-5" on:click={() => selectedProject = 3}>
            <div class:texteDecale={selectedProject === 3} class="blackSide" />
            <p class:texteDecale={selectedProject === 3}> Jeu - Java </p>
            <p class:texteDecale={selectedProject === 3}> Chasse au monstre </p>
            <p class:texteDecale={selectedProject === 3}> Projet d'école </p>
        </button>
    </aside>
    <img src="/main.jpg" alt="Montagnes blanches refletées sur un lac">
    <div class="shadow" />
    {#if selectedProject === -1}
    <nav>
        <button on:click={() => selectedMain = -1}>
            <div class:mainDecale={selectedMain === -1} class="blackTop" /> 
            <p>Présentation</p> 
        </button>
        <button on:click={() => selectedMain = 0}> 
            <div class:mainDecale={selectedMain === 0} class="blackTop" />
            <p>Compétences </p> 
        </button>
        <button on:click={() => selectedMain = 1}>
            <div class:mainDecale={selectedMain === 1} class="blackTop" />
            <p>Contacts </p>
        </button>
    </nav>
    {#if selectedMain === -1}        
        {#if show}
            <section class="main">
                <h1 transition:fade={{ delay:100, duration:500}}>ECKMAN Nicolas</h1>
                <div transition:fade={{ delay:500, duration:500 }}>
                    <h2>Mes projets</h2>
                    <p>Actuellement en études supérieures depuis 2 ans, je suis étudiant en BUT2 à l'IUT de Lille je suis passionné d'informatique et aime apprendre dans tous les domaines.<br>
                        <br>
                        Ce site est la liste des projets que j’ai réalisés jusqu’à aujourd’hui, que vous pouvez également retrouver sur <a href="https://github.com/Colarionctueux" target="_blank">mon GitHub</a>.<br>
                        <br>
                        Si vous êtes un professionnel interessé par mes projets vous serez également également interessé par <a href="https://cv-svelte-ruby.vercel.app/" target="_blank">mon CV</a> réalisé avec SvelteKit.
                    </p>
                </div>
            </section>
        {/if}
        {:else if selectedMain === 0}
            <section class="competences">
                <div class="langages">
                    <img src="/logo-svelte.png" alt="svelte">
                    <h3> SvelteKit</h3>
                </div>
                <div class="langages">
                    <img src="/bash.png" alt="bash">
                    <h3> Bash</h3>
                </div>
                <div class="langages">
                    <img src="/css.svg" alt="css">
                    <h3> CSS</h3>
                </div>
                <div class="langages">
                    <img src="/html.svg" alt="html">
                    <h3> HTML</h3>
                </div>
                <div class="langages">
                    <img src="/psql.svg" alt="postgresql">
                    <h3> PostgreSql</h3>
                </div>
                <div class="langages">
                    <img src="/java.svg" alt="java">
                    <h3> Java</h3>
                </div>
                <div class="langages">
                    <img src="/python.png" alt="python">
                    <h3> Python</h3>
                </div>
                <div class="langages">
                    <img src="/c.svg" alt="c">
                    <h3> C</h3>
                </div>
                <div class="langages">
                    <img src="/docker.svg" alt="docker">
                    <h3> Docker</h3>
                </div>
            </section>
        {:else if selectedMain === 1}
        <section class="main">
            <div>
                <h2>Contacts</h2>
                <p>Contactez moi par mail : <br>
                    <a href="mailto:nicolas.eckmanpro@gmail.com">nicolas.eckmanpro@gmail.com</a> <br>
                <br>
                Ou par téléphone :<br>
                07 71 85 23 08
                </p>
            </div>
        </section>
    {/if}
    {:else}
        <Projets {...projets[selectedProject]} /> 
    {/if}
    <div class="none">
        {#each projets as projet (projet.title)}
            <img loading="lazy" src={projet.bgImg} alt="" />
        {/each} 
    </div>


<style>
    :global(*){
        font-family: "Karla", sans-serif;
    }

    :global(body){
        background-color: black;
        margin: 0;
        overflow-y: hidden;
        overflow-x: hidden;
        height: 100vh;
    }

    img{
        width: 100%;
        height: 100%;
        z-index: -1;
        object-fit: cover;
        position: absolute;
    }

    aside{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        background-color: white;
        border-radius: 15px 0 0 0;
        width: 25%;
        height: 100vh;
        position: fixed;
        top: 0;
        right: 0;
        z-index: 10;
    }

    aside button{
        width: 90%;
        height: 100%;
        text-align: right;
        background-color: transparent;
        border: none;
        padding: 0;
        padding-right: 20%;
        cursor: pointer;
    }

    nav {
        display: flex;
        justify-content: space-around;
        align-items: center;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 10;
        background-color: white;
        height: 15%;
        width: 500px;
        border-radius: 0 0 10px 0;
    }

    nav button {
        background-color: white;
        height: 75%;
        width: 33.9%;
        font-size: 1.37em;
        border: none;
        position: relative;
    }

    nav p {
        transition: all 200ms ease;
    }

    .mainDecale {
        transform: translateY(15px);
    }

    .blackTop{
        background-color: rgb(21, 21, 21);
        height: 100%;
        width: 100%;
        position: absolute;
        left: 0;
        top: -115%;
        transition: all 500ms ease;
    }

    aside p{
        font-size: 1.37em;
        margin: 0;
        transition: all 500ms ease;
    }

    aside div{
        background-color: rgb(122, 122, 122);
        height: 2px;
        width: 75px;
        margin: 0;
        padding: 0;
        margin-right: 50px;
    }
    
    .shadow{
        background-color: rgba(0, 0, 0, 0.39);
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        z-index: 0;
    }

    .main {
        position: relative;
        z-index: 1;
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    h1 {
        color: white;
        font-weight: 700;
        font-size: 3.25em;
        position: absolute;
        top: 120px;
        left: 10%;
    }

    h2 {
        color: white;
        font-size: 2.37em;
        margin: 0;
        margin-bottom: 20px;
        font-weight: 300;
    }
    
    .main p {
        color: white;
        font-size: 1.81em;
        margin: 0;
        font-weight: 300;
    }

    .main div {
        position: absolute;
        top: 250px;
        left: 10%;
        width: 75%;
        padding: 20px;
        background-color: rgba(129, 129, 129, 0.29);
        backdrop-filter: blur(35px);
    }

    a{
        color: white;
        text-decoration: underline;
        text-decoration-thickness: 1px;
    }

    .main{
        width: 80%;
        padding-left: 10%;
        box-sizing: border-box
    }

    .competences {
        padding-top: 200px;
        width: 70%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
    
    .langages{
        background-color: white;
        width: 300px;
        height: 100px;
        position: relative;
        top: 25%;
        left: 5%;
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: 3px solid black;
        box-shadow: 0 0 20px rgb(0, 0, 0);
        margin: 20px;
        transition: all .3s ease;
    }

    .langages:hover {
        transform: scale(1.02);
    }
    
    .competences img{
        object-fit: cover;
        height: 75%;
        width: auto;
        z-index: 10;
        padding: 20px;
    }

    h3{
        color: black;
        margin-left: 40%;
        z-index: 10;
        font-size: 2em;
    }

    [class*="reveal-"]{
        opacity: 0;
        transform: translateX(-30px);
        transition-property: opacity, transform;
        transition-timing-function: ease;
        transition-duration: 1000ms;
    }

    .reveal-1{
        transition-delay: 300ms;
    }

    .reveal-15{
        transition-delay: 350ms;
    }

    .reveal-2{
        transition-delay: 400ms;
    }

    .reveal-25{
        transition-delay: 450ms;
    }

    
    .reveal-3{
        transition-delay: 500ms;
    }

    .reveal-35{
        transition-delay: 550ms;
    }

    
    .reveal-4{
        transition-delay: 600ms;
    }

    .reveal-45{
        transition-delay: 650ms;
    }

    .reveal-5{
        transition-delay: 700ms;
    }

    :global(.reveal-visible){
        transform: translateX(0)!important;
        opacity: 1!important;
    }

    .texteDecale {
        transform: translateX(-40px);
    }

    .none {
        display: none;
    }

    .blackSide {
        background-color: rgb(21, 21, 21);
        height: 101%;
        position: absolute;
        right: -130px;
        top: 0;
        transition: all 500ms ease;
    }

    @media screen and (max-width: 500px){
        aside p {
            font-size: 1em;
        }
    }
</style>