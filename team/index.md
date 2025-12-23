---
title: Team
redirect_from:
  - /lab-members
  - /alums
  - /mascots
  - /staff
  - /trainees
---

# <i class="fas fa-users"></i>

## Faculty

{% include team-list.html role="pi" group="current" %}

## Postdoctoral Researchers

{% include team-list.html role="postdoc" group="current" %}

## Graduate Students

{% include team-list.html role="phd" group="current" %}
{% include team-list.html role="ms" group="current" %}

## Undergraduate Students

{% include team-list.html role="undergrad" group="current" %}

{% include centerer.html html=html %}

<!-- section break -->

## Alumni

We are incredibly proud of all of the NBMInno-lab alumni who have passed through the lab, for whatever period of time they were with us. Below
is a list of lab alumni (if you feel you're missing from the list and would like to be added, please e-mail us):

{% capture html %}
{% include team-list.html role="pi" group="alum" mini="true" %}
{% include team-list.html role="phd_g" group="alum" mini="true" %}
{% include team-list.html role="undergrad" group="alum" mini="true" %}
{% endcapture %}

{% include centerer.html html=html %}
