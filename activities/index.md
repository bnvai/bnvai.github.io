---
title: Activities
---

# Activities

The following software is primarily developed or maintained by the NanoBioMedicineInno Lab

{% assign images = site.data.images-activities %}

<p>Image count: {{ images | size }}</p>
<ul>
{% for img in images %}
  <li>{{ img.url }} - {{ img.alt }}</li>
{% endfor %}
</ul>

{% capture html %}
{% include carousel.html id="myCarousel" images=images %}
{% endcapture %}

<p>Captured HTML length: {{ html | size }}</p>  <!-- Thêm dòng này để debug -->

{% include centerer.html html=html %}