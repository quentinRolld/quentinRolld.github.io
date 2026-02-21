---
layout: page
title: Lerobot Hackathon
description: Mistral AI - Huggingface - Robotics Hackathon
img: assets/img/Mistral_hack.png
importance: 4
category: fun
---

L'idée du hackathon était de créer quelque chose d'intéressant avec un bras robotique (en réalité, sans définition précise de ce que nous devions faire, simplement utiliser le bras). Nous avons décidé de créer un pipeline robotique d'IA agentique pour le jeu "Qui est-ce ?". A chaque tour, le jeu pose une question, par exemple : Est-ce que ton personnage porte des lunettes ? Ensuite, avec le bras robotique élimine les personnes en fonction de la réponse - pour finalement deviner quelle est la bonne carte. La partie vision de l'analyse (quelle question poser, quelles personnes éliminer) est réalisée par le VLM Mistral, l'orchestration agentique LLM est également assurée par le LLM Mistral. La politique du bras robotique obtient la position de la personne à éliminer et l'exécute comme dans la vidéo.

 
<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/hackathon_robot.MOV" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
</div>
<div class="caption">
    Teaser vidéo of automous policy applied to Qui-est-ce.
</div>

<!--
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/1.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/3.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Caption photos easily. On the left, a road goes through a tunnel. Middle, leaves artistically fall in a hipster photoshoot. Right, in another hipster photoshoot, a lumberjack grasps a handful of pine needles.
</div>
-->

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/lerobot_hack_2.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    This image can also have a caption. It's like magic.
</div>

You can also put regular text between your rows of images.
Say you wanted to write a little bit about your project before you posted the rest of the images.
You describe how you toiled, sweated, _bled_ for your project, and then... you reveal its glory in the next row of images.

<!--
<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    You can also have artistically styled 2/3 + 1/3 images, like these.
</div>
-->

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/Hackathon-Mistral.m4v" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
</div>
<div class="caption">
    End to end demonstration
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/lerobot_hack_team.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    This image can also have a caption. It's like magic.
</div>

