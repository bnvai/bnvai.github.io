---
title: Resources
---

{% capture hero_content %}
<a class="hero-btn" href="#next-section">
Our Publications
</a>
{% endcapture %}

{% include figure.html
   image="images/pubbg.jpg"
   hero=true
   content=hero_content
%}

<!-- section break -->

## Books {#next-section}

{% include books.html %}

{% include centerer.html html=html %}

<!-- section break -->

## Publications

{% include pub-sort.html %}
{% include publications.html %}

{% include centerer.html html=html %}
