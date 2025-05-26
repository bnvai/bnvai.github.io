---
title: Activities
---

# Activities

The following software is primarily developed or maintained by the NanoBioMedicineInno Lab

{%
include gallery.html
image1="images/activities2.jpg"

  <!-- link1="https://cell.com/" -->

image2="images/\_IMG9828.png"
tooltip2="Wedding Party"
image3="images/IMG_5187.png"

  <!-- link3="https://cell.com/" -->

image4="images/IMG_5179.png"
image5="images/IMG_4259.png"
image1="images/activities1.jpg"
%}

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
