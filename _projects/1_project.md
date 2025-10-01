---
layout: page
title: CoVAPSy
description: automous car race
img: assets/img/cars.jpeg
importance: 1
category: work
related_publications: true
---

In 2024, ENS Paris Saclay is organizing a new edition of its robotics competition, during which teams of students from different schools (ENS, Centrale, ENSTA, Institut Villebon Charpak, IUT de Cachan, etc.) compete in an autonomous car race on a standard track of unknown shape. The vehicle is identical for all teams (it is the chassis of a remote-controlled car) and can be equipped with multiple sensors (LIDAR, cameras, etc.) to perform the task required: complete 3 laps of the track as quickly as possible, avoiding the other cars and in the shortest possible time. The vehicle must operate completely autonomously: once the race has started, no control communication to the vehicle is allowed.

The architecture selected is based on ROS, and enables real-time control of the vehicle's on-board electronics (speed control, perception of obstacles via "time of flight" sensors, LIDAR, etc.).. Our priority has been to document the prototype capabilities and handling, and to work on new navigation algorithms based on the vehicle's perceptive capabilities. In particular, we'll be working on the vision part of the system, which is still largely under-exploited, to perform all or part of the tasks involved in obstacle detection, navigation and so on.

We have studied different approaches towards obstacle detection and navigation: Including a deep learning approach (segmentation, to determine the type of obstacle and the procedure to follow) as well as SLAM and control. Here is the link to our <a href="https://github.com/SU-Bolides/Course_2024">project</a>.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/car_elec_schema.jpg" title="schema of the electonic structure" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/car_dimensions.png" title="schema of the car dimensions" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    On the right, one can observe the standard chassis with standard shape and dimensions. On the left is the simplified electronic structure of our prototype.
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/car_circuit.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    In order to train our prototype properly for the race, we have built a racetrack. Once the prototype in working order (SLAM+control), we used this track to train the the detection of obstacles algorithms of the module.
</div>



We finished second on the podium! And won the innovation award for our SLAM based method.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/car_circuit.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    In order to train our prototype properly for the race, we have built a racetrack. Once the prototype in working order (SLAM+control), we used this track to train the the detection of obstacles algorithms of the module.
</div>




