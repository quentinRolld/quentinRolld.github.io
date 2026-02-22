---
layout: page
title: Lerobot Hackathon
description: Mistral AI - Huggingface - Robotics Hackathon
img: assets/img/Mistral_hack.png
importance: 4
category: fun
---

The idea behind the hackathon was to create something interesting with a Lerobot robotic arm and Mistral AI models. We decided to create an agentic AI robotic pipeline for the game “Guess who?”. 

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/qui_est_ce.png" title="'Guess who?' game" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The game: Guess Who? is a two-player deduction game.
    Each player has a board with different character faces. At the start, both players secretly choose one character. They then take turns asking yes-or-no questions (for example, “Does your character wear glasses?”). Based on the answers, they eliminate characters from their board.
    The goal is to be the first to correctly guess the opponent’s hidden character.
</div>

Our goal is to create a system able to play "Guess who" against a human. In our version of the game, only the human choose a character and the goal of the robot is to find this character. The system is made of two main blocs : a physical part made of the Lerobot arm controled with an autonomous Imitation Learning policy (ACT in our case) - And an interface through which the human player interacts with our system.

 
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/lerobot_hack_2.png" title="display of the interface" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    .
</div>

Each round, the game asks a question, for example: Does your character wear glasses? Then, using the robotic arm, it eliminates people based on the answer—to ultimately guess which card is the right one. The vision part of the analysis (which question to ask, which people to eliminate) is performed by a Mistral VLM, and the LLM agent orchestration is also handled by a Mistral LLM. The robotic arm policy obtains the position of the person to be eliminated and executes it as shown in the video.


<video width="100%" controls>
  <source src="https://youtu.be/TlyRnDddY2U" type="video/mp4">
  Votre navigateur ne supporte pas la lecture de vidéos.
</video>


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/lerobot_hack_team.png" title="Our team" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    This image can also have a caption. It's like magic.
</div>

