{% capture hero_content %}
<a class="hero-btn" href="#next-section">
More About Us
</a>
{% endcapture %}

{% include figure.html
   image="images/homebg1.jpg"
   hero=true
   content=hero_content
%}

# Upcoming Feature {#next-section}

{% include carousel-container.html %}

<!-- section break -->

# Feature {#next-section}

<!-- ===================================================== -->
<!-- Flexible Hydrogel Materials -->
<!-- ===================================================== -->

{% capture flexible_text %}
MXene-based hydrogels combine high conductivity, flexibility, and rich surface chemistry for wearable sensing.
Their biocompatibility and signal stability make them promising for pressure/strain monitoring, skin-mounted devices, and next-generation biomedical interfaces.
{% endcapture %}

{% include feature.html
  image="images/research1.png"
  link="resources"
  heading="Flexible Hydrogel Materials"
  text=flexible_text
%}

<!-- ===================================================== -->
<!-- Point-of-Care Diagnostics -->
<!-- ===================================================== -->

{% capture poc_text %}
This work highlights hydrogel platforms for wound healing and real-time point-of-care monitoring.
By mimicking extracellular tissue and integrating responsive sensing, these materials support safer and smarter wound-care systems.

{% endcapture %}

{% include feature.html
  image="images/research2.jpg"
  link="resources"
  heading="Point-of-Care Wound Diagnostics"
  text=poc_text
%}

<!-- ===================================================== -->
<!-- Wearable Bioelectronics -->
<!-- ===================================================== -->

{% capture wearable_text %}
Bioinspired nanomaterials enable targeted photothermal and photodynamic therapy with reduced off-target damage.
Our focus is on functionalized nanoparticles that improve delivery, light-triggered activation, and treatment precision in translational cancer nanomedicine.

{% endcapture %}

{% include feature.html
  image="images/research3.jpg"
  link="resources"
  heading="Wearable Bioelectronic Devices"
  text=wearable_text
%}

<!-- ===================================================== -->
<!-- Smart Wound Patches -->
<!-- ===================================================== -->

{% capture smartpatch_text %}
Engineered metal nanoparticles offer strong potential for imaging-guided diagnostics and therapy in smart wound systems.
We investigate surface engineering strategies that improve targeting and performance while addressing safety for clinical translation.

{% endcapture %}

{% include feature.html
  image="images/research4.png"
  link="resources"
  heading="Smart Patches for Wound Monitoring"
  text=smartpatch_text
%}

<!-- section break -->

# Activities {#next-section2}

{%
include gallery.html
flat="true"
fit="false"
image1="images/act1.jpg"
tooltip1="Paper"
link1="https://cell.com/"

image2="images/act2.jpg"
tooltip2="Paper"

image3="images/act3.jpg"
tooltip3="Paper"
link3="https://cell.com/"

image4="images/act4.jpg"
tooltip4="Paper"
link4="https://cell.com/"

image5="images/act5.jpg"
tooltip5="Paper"
link5="https://cell.com/"

image6="images/act6.jpg"
tooltip6="Paper"
link6="https://cell.com/"
%}

<!-- section break -->

# Latest News {#next-section3}

{% capture largecards %}
{%
  include card.html
  size="large"
  image="images/paper1.jpg"
  link="https://www.pknu.ac.kr/main/32?action=view&no=721829"
  heading="PKNU Research Featured in Global Top 0.12% Journal"
  truncate=2
  row1="A research team from Pukyong National University published a review article in Coordination Chemistry Reviews, ranked in the top 0.12% of journals worldwide."
  row2="The study highlights biomimetic nanomaterial platforms for laser-based cancer diagnosis and phototherapy."
  row3="Coordination Chemistry Reviews (Elsevier) • Impact Factor 23.5"
%}

{%
  include card.html
  size="large"
  image="images/smartMat.jpg"
  link="https://www.pknu.ac.kr/eng/4?action=view&no=720299"
  heading="Smart Biomaterials for Next-Generation Wound Care"
  truncate=2
  row1="PKNU researchers developed flexible hydrogel-based smart materials for wound monitoring and therapeutic delivery."
  row2="The platform integrates biocompatible polymers with responsive sensing mechanisms."
  row3="Department of Biomedical Engineering • Pukyong National University"
%}

{%
  include card.html
  size="large"
  image="images/space.jpg"
  link="https://www.pknu.ac.kr/eng"
  heading="Expanding International Research Collaboration"
  truncate=2
  row1="The NanoBioMedicine Innovation Lab continues to strengthen global research collaborations and interdisciplinary projects."
  row2="Ongoing efforts focus on nanomedicine, bioelectronics, and translational healthcare technologies."
  row3="International Collaboration & Research Outreach"
%}
{% endcapture %}

{% include centerer.html html=largecards %}

<!-- {% capture mediumcards %}
{%
  include card.html
  size="medium"
  image="images/space.jpg"
  link="https://nasa.gov/"
  heading="Medium card"
  row1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In aliquam sem fringilla ut."
%}
{%
  include card.html
  size="medium"
  image="images/space.jpg"
  link="https://nasa.gov/"
  heading="Medium card"
  row1="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
%}
{%
  include card.html
  size="medium"
  image="images/space.jpg"
  link="https://nasa.gov/"
  heading="Medium card"
  row1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In aliquam sem fringilla ut."
%}
{% endcapture %}

{% include centerer.html html=mediumcards %} -->

<!-- section break -->

# Join Our Team {#next-section4}

Passionate about nanotechnology, biotechnology, or medical innovation? We welcome students, researchers, and collaborators to build impactful healthcare solutions together.

{% include big-link.html icon="fas fa-hands-helping" text="Join the team" link="join" -%}
{%- include big-link.html icon="fas fa-user-friends" text="Collaborators" link="collaborators" -%}
{:.center}
