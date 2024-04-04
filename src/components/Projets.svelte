<script lang="ts">
    export let bgImg:string;
    export let alt:string;
    export let schoolProject = true;
    export let date:string;
    export let title:string;
    export let logo = false;
    export let logoImg:string|undefined = undefined;
    export let text:string;
    export let usedSkills:string;
    export let unusedSkills:string|undefined = undefined;
    export let link:string|undefined = undefined;

    import { faLongArrowRight} from "@fortawesome/free-solid-svg-icons";
    import Fa from "svelte-fa";
</script>

<img class="bg" src={bgImg} alt={alt} />
<div class="shadow"/>
<main>
    <h2>ECKMAN Nicolas</h2>
    <div>
        {#if schoolProject}
            <p>Projet d'école {date}</p>
        {:else}
            <p>Projet perso {date}</p>
        {/if}
        {#if logo}
            <div>
                <img class="logo" src={logoImg} alt="logo de {title}" />
            </div>
        {:else}
            <h1>{title}</h1>
        {/if}
        <p>{text}</p>
        <div>
            <div>
                {#each usedSkills.split(",") as usedSkill (usedSkill)}
                    <img src={usedSkill} alt="logo de {usedSkills} " />
                {/each}
                {#if unusedSkills != undefined}  
                    {#each unusedSkills.split(",") as unusedSkill (unusedSkill)}
                        <img src={unusedSkill} alt="logo de {unusedSkills} en noir et blanc" />
                    {/each}
                {/if}
            </div>
            {#if link != undefined}
                <a href={link} target="_blank">Visiter <span><Fa icon={faLongArrowRight} /></span></a>
            {/if}
        </div>
    </div>
</main>

<style>
    :global(main){
        color: white;
    }

    main {
        position: absolute;
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
    }

    main>div {
        display: flex;
        flex-direction: column;
        position: absolute;
        left: 10%;
    }

    .bg{
        position: absolute;
        left: 0;
        z-index: -1;
        height: 100vh;
        width: 80vw;
        object-fit: cover;
    }

    .logo{
        height: 122px;
    }

    .shadow{
        background-color: rgba(0, 0, 0, 0.39);
        position: absolute;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        z-index: 0;
    }

    h2 {
        padding-left: 100px;
        padding-top: 30px;
        font-size: 2em;
    }

    h1{
        font-size: 3em;
        width: 700px;
        margin: 0;
    }

    div div:last-of-type img{
        width: 40px;
        margin-right: 10px;
    }

    p{
        font-weight: 300;
        font-size: 1.37em;
    }
    
    p:last-of-type{
        font-size: 1.81em;
        width: 700px;
        padding: 20px;
        background-color: rgba(129, 129, 129, 0.29);
        backdrop-filter: blur(35px);
        display: flex;
    }

    a {
        background-color: white;
        color: black;
        border: none;
        height: 66px;
        width: 167px;
        font-size: 1.37em;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        text-decoration: none;
    }

    div div{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>