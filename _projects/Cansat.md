---
layout: page
title: Cansat
description: automous flying robot
img: assets/img/Cansat_icon.png
importance: 4
category: fun
---


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/cansat_proto_img.jpeg" title="" class="img-fluid rounded z-depth-1" %}
    </div>
</div>


# Introduction

"The CanSat is an autonomous device simulating the landing of a probe on a planet and capable of carrying out scientific missions. The principle of the CanSat is based on the idea of designing, in a reduced volume corresponding to a soda can, a payload similar to that carried by a satellite/probe. Originally 33cL, our competition category requires a volume of 1L for a height of 20 cm and a diameter of 8 cm. All satellite systems, such as power supply, measurement and telemetry devices, must be designed to fit into the reduced volume of the CanSat.
It is released using a drone or tethered balloon, and carries out its missions from release, during descent and up to 5 minutes after landing. The missions proposed involve the implementation of scientific experiments from the definition phase through to the analysis of the data collected.
The aim of the CanSat France competition is to build a CanSat prototype capable of carrying out the missions defined each year by the Planet science organization. The final part of the project is the competition that brings together all the participating teams, during the summer, at the national C'Space launch campaign, in the presence of representatives from CNES (National French Space Center), Planet Science and the space industry."
according to the Cansat 2023 régulation

We first took part in the Cansat competition as part of our final-year project at ENSEA (our engineering school). Our course at ENSEA ended in January. But then, the 4 members of the group were separated during the period from January to June, as they were doing internships or academic exchanges abroad (USA, Canada and Spain). I therefore chose to pursue the project alone and bring it to fruition. I put a lot of time and energy into this project. The entire budget for this project came from my personal scholarship. I worked with the sole aim of delivering a working prototype on time for the C'space. I had a lot of fun on this project, which enabled me to develop a number of skills and put into practice my learning at ENSEA. 

## Specifications

### Main mission: Control the Cansat and reach a precise point
The CanSat must be able to navigate and control its trajectory to get as close as possible to a GPS position defined before release.

### ​​​​​​​Secondary missions
* 1. Recognize a QR code on the ground
A QR Code in A0 format will be placed on the ground, and our mission is to recognize the QR Code and retrieve the encoded information by telemetry or on-board recording (checked before and after release). QR codes contain text segments of variable size (less than 50 characters), which can contain any type of alphanumeric character. Signs are printed in A0 format. svg and png files are available on request.
* 2. Deploying a ground structure
The CanSat must deploy a structure covering as much of the ground as possible. Each team decides on the nature, shape and size of the structure.

***

## I - Main mission: Control the Cansat and reach a precise point
### Our solution : 
We have chosen to use a paraglider to guide the Cansat as it descends. 
To do this, we use two arms connected to two servomotors, placed on either side of the Cansat's structure. The brackets for the parachute brakes are attached to the ends of the arms. So all we need to do is activate the servomotors connected to the arms to pull on the parachute's left or right brakes, in order to modify the system's trajectory. However, to orientate the Cansat and decide which trajectory to take, we need to know its orientation (i.e. which direction the front of the Cansat is pointing) and its geographical position (or GPS position). The Cansat's orientation will be calculated by a microcontroller (MCU), which will acquire the system's current GPS position at regular intervals, via a GPS module, as well as its orientation, via a magnetometer used as a compass. By combining these two data, the microcontroller will be able to determine the correct trajectory and orient itself in the right direction by activating the servomotors connected to the arms, which in turn are connected to the parachute's brakes.


<div class="row mt-5"> 
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Cansat_cad_1.png" title="" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Cansat_cad2.png" title="" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

***


