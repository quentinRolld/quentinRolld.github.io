---
layout: page
title: mini-apteros
description: autonomous reusable launcher
img: assets/img/fusee_1.jpeg
importance: 2
category: work
giscus_comments: true
---


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/perseus_cnes.png" title="" class="img-fluid rounded z-depth-1" %}
    </div>
</div>


PERSEUS (European University and Scientific Space Research Student Project) is an initiative of the Launcher Directorate of the French National Center for Space Studies (CNES). "It is part of the preparation for the future. In a context of disruptive innovation, the CNES, as the driving force behind French space ambition, has as its main objective, through the PERSEUS project, to stimulate the interest and vocation of the new generation for careers and entrepreneurship in the field of launchers by projecting them into a future of discoveries, science and technology."
https://www.perseusproject.com

## Introducing Mini-apterros

This project was proposed to us as part of our second year at ENSEA, the National School of Electronics and its Applications. The Mini-apterros project is part of the development programme for a new generation of bi-liquid and reusable space launchers. These new technologies require rethinking the on-board navigation system in its entirety: data acquisition, signal processing, correction and decision making, control of propulsion systems, ground communication. The main objective is therefore the design and implementation of a GNC (Guidance Navigation and Control) on an electric aircraft allowing stabilized flights and translations parallel to the ground at constant altitude. One of the major challenges is to design stable and robust servo-controls to control the altitude of the craft, as well as its attitude stabilization. This design is accompanied by the production of a prototype. Eventually, the technologies will be taken over by CNES teams for development on powder rockets, then bi-liquids.


<div class="row">
    <div class="col-sm-7 mt-3 mt-md-0">
        <h3>Our Solution</h3>
        <p>The main objectives of the Mini-Apterros system are to launch an electric rocket (powered by brushless turbines) 1m into space, translate it 3m along a line drawn on the ground and then land it. This rocket, piloted by a myRio module, must incorporate sensors to locate itself in space and appropriate corrector models to control its movement.</p>
        <p>There are several major constraints: propulsion control common to all turbines, propulsion capacity in excess of 10kg with turbines attached to the bottom of the rocket (increases system instability but reproduces the configuration of a real space launcher), control without oscillation or overshoot, autonomy of several minutes. The system must remain in constant contact with a control station on the ground, but all GNC decisions will be made by the rocket's on-board computer.</p>
    </div>
    <div class="col-sm-5 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/perseus_2.png" title="Mini-Apterros System" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

The two main sensors used are : 
• The IMU (Inertial Measure Unit) measures the linear (accelerometer) and angular (gyroscope) acceleration of the system as well as the angle of rotation given by the magnetometer.
• The Lidar which gives the system's position relatively to the ground : vertical position. 
the system speed is obtained by averaging the data of the accelerometer (by integrating the acceleration) and of the Lidar (by deriving the position).

<div class="row mt-5"> 
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/perseus_roll.png" title="Roll Control" class="img-fluid rounded z-depth-1" %}
        <div class="caption text-justify">
            <strong>ω</strong> : rotation speed measured by the gyroscope<br>
            <strong>θ</strong> : angle of rotation measured by the magnetometer<br>
            <strong>0.5</strong> : Cmax/J ratio, max torque provided by the turbines / moment of inertia of the assembly
        </div>
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/perseus_altitude.png" title="Altitude Control" class="img-fluid rounded z-depth-1" %}
        <div class="caption text-justify">
            <strong>z</strong> : altitude measured by the Lidar<br>
            <strong>𝛾</strong> : acceleration measured by IMU<br>
            <strong>v</strong> : speed obtained, either by integration of 𝛾, or by derivation of z<br>
            <strong>1.5</strong> : Turbine force (kg) divided by rocket mass
        </div>
    </div>
</div>


<div class="ratio ratio-16x9">
  <iframe 
    src="https://www.youtube.com/watch?v=CrK4TwWNbsY" 
    title="Yaw Control" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen>
  </iframe>
</div>


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/fusee_2.jpeg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    La bête, qu'elle est belle
</div>

