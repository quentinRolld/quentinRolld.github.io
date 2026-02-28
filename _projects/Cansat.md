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

## II - ​​​​​​​Secondary mission: Recognize a QR code on the ground
### Our solution : 
To recognize the QR codes and decipher the information they contain, we use a Raspberry card with openCV software for real-time image processing. We import all the packages relating to openCV into a python script. We then activate the camera's peripherals, retrieve the images and openCV's own functions return the QR code information. We automatically save this information as text in a csv file, which in turn is saved on the Raspberry's micro-SD card.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/cansat_proto_img.jpeg" title="" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

***

## III - Secondary mission: Deploying a ground structure
### Our solution :
As the specifications were relatively succinct, there was a wide choice of possible solutions. In order to maximize surface area while minimizing overall volume, we decided to opt for an inflatable system. The system consists of a pneumatic valve, a striker, a servomotor and a CO2 capsule.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/cansat_proto_img.jpeg" title="" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

The CO2 capsule is screwed to the firing pin, which in turn is welded to the pneumatic valve. When the capsule is screwed onto the striker, the latter is pierced, releasing the contained gas until the valve is opened. The servomotor controls valve opening (connected to the microcontroller). When the servomotor is activated, the valve opens, releasing the gas into some balloons.
Secondly, we need to design an on-board system to trigger the opening of the inflatable system (by opening the valve via the servo) when the structure is sufficiently close to the ground. To do this, we chose to use the altitude provided by a pressure sensor (MPU-9250). The system runs on the same MCU as the main mission. The MCU receives pressure data from the BMP-9250 and calculates the altitude from this data. The issue is that depending on the weather and temperature, the model giving the altitude calculated from the pressure is changeable. Indeed, as a function of weather, pressure variations with altitude are not the same. However, these variations remain more or less linear. So, when we start the Cansat (during the initialization phase), we take the pressure measured at the altitude we consider to be ground level: P0 . And we activate the inflatable system at altitude P0+15. As the system is designed to descend at a speed of 2m/s, this leaves 7.5 s for the balloon to deploy.

***

## INTEGRATION

### Electronics Intregration
We are using a STM32 nucleo as microcontroller. It will run the program and manage all the drivers. We have designed a PCB for the project. It contains the power components (5V and 3.3V converters) and allows to simplify the cabling. Minimizing the volume of the system is essential, so the PCB is designed with this in mind. It is divided into two parts (to be able to contain in the Cansat) which overlap.

### Software Integration
* Software solution
For the software, we are using C language. We developed two versions : one bare metal and one FreeRTOS. We had a problem near the end with the FreeRTOS version (with the GPS data reception) so we had to use the emergency bare metal solution. It is the one that we will present now :
 During the first iteration of the main function, we start by initializing all the drivers: IMU, GPS, infrared sensor and servos. By initializing the servos, it is a question of placing them in a position that allows the Cansat to enter the release capsule (indeed, if the arms are deployed, the Cansat does not contain in the capsule). When initialization is complete, we enter the while infinite loop. The first step in an iteration of this loop is to check if GPS data has been received (using a flag placed in the callback function of the UART, in interruption mode). If this is the case, the character string is processed, useful data (longitude, latitude and altitude) are extracted and are then stored in a structure. 
Then, the software is monitoring the detection of the drop. This detection is operated by an infrared sensor which activates a flag the instant the Cansat exits the release tube. Once the launch is detected, the Cansat enters the "drop phase" : it deploys its arms and starts correcting its direction by measuring the local magnetic field and using its GPS position. Finally, when the Cansat is below the pre-determined altitude limit (15m above ground level), the inflation system is activated and releases the balloons. 

### Mechanical Integration
