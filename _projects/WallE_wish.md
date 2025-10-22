---
layout: page
title: Wall-E-wish
description: A robot to tidy my bedroom
img: assets/img/wall-e-cute.gif
importance: 3
category: fun
---

The goal of this project is to combine the most advanced open-source tools available today—from speech processing and computer vision to language understanding and imitation learning—to create a mini autonomous prototype, a small “thinking being” in its own right. In this first stage, the focus is on building the mechanical and electronic structure while developing a basic algorithm that can receive a user request and generate both a verbal response and a physical action.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/robot_walli.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    On going !
</div>

The WALLI project aims at conceiving an autonomous robot using a Jetson Nano Orin Developer Kit. The robot is equipped with two wheels and a Logitech webcam with a microphone. The system works as follows:

The robot continuously captures audio via the webcam microphone. Image capture and robot activation are triggered only when speech is detected.

Detected speech is converted into text and, together with the captured image, is processed by a Vision-Language Model. The model generates a textual response, which is then played through the robot’s microphone.

When a user request requires an action, an additional instruction is provided to the VLM, prompting it to generate a detailed task for the robot. This instruction, along with the current image, is sent to a Vision-Language-Action model (e.g., gr00t), which outputs actionable commands.