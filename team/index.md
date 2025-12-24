---
title: Team
---

## Professor

{% capture html %}
{% include team-list.html role="pi" group="current" %}
{% endcapture %}
{% include centerer.html html=html %}

<!-- section break -->

## Graduate Students

{% capture html %}
{% include team-list.html role="phd" group="current" %}
{% include team-list.html role="ms" group="current" %}
{% endcapture %}
{% include centerer.html html=html %}

<!-- ================================================= -->

## Alumni

{% capture html %}
{% include team-list.html group="alum" mini="true" %}
{% endcapture %}
{% include centerer.html html=html %}
