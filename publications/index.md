---
title: Resources
---

{% capture hero_content %}
<a class="hero-btn" href="#next-section">
Our Publications →
</a>
{% endcapture %}

{% include figure.html
   image="images/pubbg.jpg"
   hero=true
   content=hero_content
%}

<!-- section break -->

## Books

{% include books.html %}

<!-- section break -->

## Publications

{% include pub-sort.html %}
{% include publications.html %}

{% include centerer.html html=html %}
