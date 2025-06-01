---
title: Activities
---

<i class="fas fa-photo-film"></i>Activities

The following software is primarily developed or maintained by the NanoBioMedicineInno Lab

{%
  include gallery.html
  image1="images/spring.png"
  tooltip1="Spring"
  link1=""
  image2="images/activities1.png"
  tooltip2="Graduation"
  image3="images/activities2.jpg"
  tooltip3="Hike"
  link3=""
  image4="images/IMG_4259.png"
  image5="images/activities3.jpg"
  image6="images/IMG_5179.png"
  tooltip4="Wedding"
  link4=""
%}

<!-- section break -->

{% assign images = site.data.images %}

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
