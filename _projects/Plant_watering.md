---
layout: page
title: Urban Jungle 
description: an automatic watering system for thirsty plants
img: assets/img/Plants_3.jpeg
importance: 3
category: fun
---

Autonomous watering system - finally a solution so that my plant can live longer than 2 weeks.
Very simple system written in C language with few components.


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Plants_4.png" title="All the family" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<div class="caption">
    The automatic irrigation system is built around an STM32F411 microcontroller running a lightweight embedded operating system written in C. The system continuously acquires soil moisture measurements from sensors installed in each plant pot and computes the average moisture level for each predefined plant category (e.g., cacti, green plants, succulents, and others). Since each category has different watering requirements, an independent moisture threshold is assigned to every group. Whenever the average soil moisture of a given category falls below its corresponding threshold, the microcontroller generates a PWM control signal to actuate a solenoid valve. The valve then pumps a predefined volume of water from a storage reservoir through a dedicated irrigation tube to the corresponding plants. To prevent overwatering, the system enforces a settling period after each irrigation cycle, allowing the water to diffuse through the soil before acquiring a new set of moisture measurements. This closed-loop feedback process is repeated continuously, ensuring efficient and species-specific irrigation while minimizing water consumption.
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Plants_1.jpeg" title="Control schematic view" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Plants_5.png" title="Schema of the electrical system" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Plants_2.jpeg" title="All the family" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

