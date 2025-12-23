{% include figure.html
   image="images/bia.png"
%}

<!-- section break -->

# Upcoming Feature

{% include carousel-container.html %}

<!-- section break -->

# Feature

<!-- ===================================================== -->
<!-- Flexible Hydrogel Materials -->
<!-- ===================================================== -->

{% capture text %}
Our research on flexible hydrogel materials focuses on the design and engineering of soft, biocompatible systems that can seamlessly interface with human skin and biological tissues. By leveraging advanced polymer chemistry, such as methacrylated gelatin and calcium alginate hydrogels, we develop materials capable of controlled drug delivery, moisture regulation, and mechanical adaptability.

These flexible hydrogels are engineered to mimic the mechanical properties of natural tissues, enabling enhanced wound healing outcomes and long-term stability in wearable and implantable applications. This research lays the foundation for next-generation wound dressings and therapeutic platforms that combine comfort, functionality, and clinical effectiveness.
{% endcapture %}
{%
  include feature.html
  image="images/paper1.jpg"
  link="resources"
  heading="Flexible Hydrogel Materials"
  text=text
%}

<!-- ===================================================== -->
<!-- Point-of-Care Diagnostics -->
<!-- ===================================================== -->

{% capture text %}
We develop point-of-care diagnostic systems that enable rapid, non-invasive assessment of wound conditions directly at the site of care. Our approach integrates pH-sensitive fluorophores and hydrogel-based matrices to visually and quantitatively monitor biochemical changes associated with infection and healing progression.

By translating physiological signals such as wound pH into optical or electronic readouts, these diagnostic platforms provide clinicians and patients with immediate, actionable information. This research aims to improve early detection of complications, reduce treatment delays, and support personalized wound management strategies.
{% endcapture %}
{%
  include feature.html
  image="images/paper2.jpg"
  link="resources"
  heading="Point-of-Care Wound Diagnostics"
  text=text
%}

<!-- ===================================================== -->
<!-- Wearable Bioelectronics -->
<!-- ===================================================== -->

{% capture text %}
Our wearable bioelectronics research explores the integration of flexible electronics with textiles and skin-mounted systems to enable continuous physiological monitoring. Utilizing conductive fabrics, thin-film electrodes, and soft interconnects, we design devices that maintain electrical performance while preserving user comfort and mobility.

These wearable platforms are optimized for long-term use in daily life, allowing real-time monitoring of wound status, biomechanical activity, and environmental interactions. This work bridges materials science and electronic engineering to advance the development of next-generation healthcare wearables.
{% endcapture %}
{%
  include feature.html
  image="images/paper3.jpg"
  link="resources"
  heading="Wearable Bioelectronic Devices"
  text=text
%}

<!-- ===================================================== -->
<!-- Smart Wound Patches -->
<!-- ===================================================== -->

{% capture text %}
We investigate smart wound patches that combine biosensing, wireless communication, and flexible materials into a single integrated platform. These systems incorporate interdigitated electrodes, biosensing modules, and NFC-based wireless interfaces to enable real-time data acquisition and contactless readout using mobile devices.

Smart wound patches provide a powerful tool for continuous wound monitoring, enabling timely interventions and data-driven clinical decisions. This research supports the transition from passive wound dressings to intelligent, connected healthcare solutions.
{% endcapture %}
{%
  include feature.html
  image="images/paper4.jpg"
  link="resources"
  heading="Smart Patches for Wound Monitoring"
  text=text
%}

<!-- section break -->

# Activities

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

# Latest News

{% capture tags %}
{% include tags.html tags="red, hammer, elephant, supercalifragilisticexpialidocious" %}
{% endcapture %}

{% capture largecards %}
{%
  include card.html
  size="large"
  image="images/top12.jpg"
  link="https://www.pknu.ac.kr/main/32?action=view&no=721829"
  heading="Large card"
  truncate=2
  row1="A clickable truncated row of really long text that is too wide to fit in the card but can still be expanded by focusing it"
  row2="Another truncated row of really long text"
  row3="A really long row of text that wraps instead of truncating"
%}
{%
  include card.html
  size="large"
  image="images/smartMat.jpg"
  link="https://www.pknu.ac.kr/eng/4?action=view&no=720299"
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

## Join Our Team

Are you passionate about innovation in nanotechnology, biotechnology, or medical research? Whether you're a student, researcher, or industry partner, we're always open to new ideas and meaningful collaborations.

Let's work together to shape the future of healthcare.

{% include big-link.html icon="fas fa-hands-helping" text="Join the team" link="join" -%}
{%- include big-link.html icon="fas fa-user-friends" text="Collaborators" link="collaborators" -%}
{:.center}
