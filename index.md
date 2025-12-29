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
Recent years have witnessed rapidly growing interest in MXene-based materials for advanced sensing and wearable biomedical applications. Owing to their outstanding electrical conductivity, large specific surface area, mechanical flexibility, and rich surface chemistry, MXenes have emerged as promising candidates for flexible sensors capable of monitoring pressure, strain, physiological signals, and biochemical parameters. Their two-dimensional layered structure enables efficient signal transduction under mechanical deformation, making them particularly suitable for wearable electronics and human–machine interfaces.

Moreover, the intrinsic hydrophilicity and biocompatibility of MXenes facilitate their integration into biomedical platforms for health monitoring, diagnostics, and implantable or skin-mounted devices. These unique properties position MXenes as a new class of functional materials bridging sensors, wearable systems, and biomedical technologies.
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
The published paper explores recent advancements in hydrogel-based materials for wound healing and real-time monitoring. It highlights innovations in flexible, biocompatible hydrogels that mimic the extracellular matrix, addressing stability, toxicity, and integration with smart monitoring systems.

Hydrogels are particularly promising in modern wound care due to their high-water content, flexibility, and biocompatibility. The research team illustrates the role of hydrogel-based flexible materials in advancing biomedical applications, including wound healing, point-of-care diagnostics, smart patches, and wearable devices.

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
Nanomedicine, propelled by advancements in nanotechnology, has significantly advanced cancer treatment by enabling precise, targeted, and minimally invasive therapeutic strategies. Among these, phototherapy (PT), including photothermal therapy (PTT) and photodynamic therapy (PDT), has attracted significant attention due to its ability to selectively eradicate cancer cells while minimizing damage to healthy tissues. These bioinspired nanomaterials exhibit enhanced biocompatibility, improved targeting efficiency, and controlled degradation, optimizing PTT and PDT performance.

The paper illustrates nanoparticles of various compositions, including gold, silica, and carbon-based structures, emphasizing their surface functionalization for drug delivery and phototherapy. These nanoparticles are shown dispersed in a colloidal medium, highlighting their dynamic behavior. A directed light source, such as a laser or visible light, activates the nanomaterials. This activation triggers the nanoparticles´ phototoxic effects or the release of therapeutic agents, leading to the destruction of cancer cells.

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
The growing field of nanotechnology has witnessed numerous advancements over the past few years, particularly in the development of engineered nanoparticles. Compared with bulk materials, metal nanoparticles possess more favorable properties, such as increased chemical activity and toxicity, owing to their smaller size and larger surface area. Metal nanoparticles can be modified with different targeting agents such as antibodies, liposomes, transferrin, folic acid, and carbohydrates. Thus, metal nanoparticles hold great promise for various biomedical applications such as photoacoustic imaging, magnetic resonance imaging, computed tomography (CT), photothermal, and photodynamic therapy (PDT). Despite their potential, safety considerations, and regulatory hurdles must be addressed for safe clinical applications.

This review highlights advancements in metal nanoparticle surface engineering and explores their integration with emerging technologies such as bioimaging, cancer therapeutics and nanomedicine. By offering valuable insights, this comprehensive review offers a deep understanding of the potential of metal nanoparticles in biomedical research.

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
link6="https://cell.com/"

image6="images/act6.jpg"
tooltip6="Paper"
link6="https://cell.com/"
%}

<!-- section break -->

# Latest News {#next-section3}

{% capture tags %}
{% include tags.html tags="red, hammer, elephant, supercalifragilisticexpialidocious" %}
{% endcapture %}

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

{%
  include card.html
  size="large"
  image="images/space.jpg"
  link="https://nasa.gov/"
  heading="Large card"
  truncate=2
  row1="A clickable truncated row of really long text that is too wide to fit in the card but can still be expanded by focusing it"
  row2="Another truncated row of really long text"
  row3="A really long row of text that wraps instead of truncating"
%}
{%
  include card.html
  size="large"
  image="images/space.jpg"
  link="https://nasa.gov/"
  heading="Large card"
  truncate=2
  row1="A clickable truncated row of really long text that is too wide to fit in the card but can still be expanded by focusing it"
  row2="Another truncated row of really long text"
  row3="A really long row of text that wraps instead of truncating"
%}
{% capture html %}
An example of putting other components in a row:
{% endcapture %}
{%
  include card.html
  size="large"
  image="images/typo-in-filename-whoops.jpg"
  row1="A card with a placeholder image in case the specified image can't be loaded"
  row2=tags
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

Are you passionate about innovation in nanotechnology, biotechnology, or medical research? Whether you're a student, researcher, or industry partner, we're always open to new ideas and meaningful collaborations.

Let's work together to shape the future of healthcare.

{% include big-link.html icon="fas fa-hands-helping" text="Join the team" link="join" -%}
{%- include big-link.html icon="fas fa-user-friends" text="Collaborators" link="collaborators" -%}
{:.center}
