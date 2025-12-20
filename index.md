## Figure

{% include figure.html
   image="images/paper1.jpg"
   caption="Welcome to WebLab"
   width="100%"
   hero="true"
%}

<!-- section break -->

## Upcoming Feature

{% include carousel-container.html %}

<!-- section break -->

## Feature

{% capture text %}
In the pursuit of excellence, one must embrace both effort and resilience, for through dedication comes great achievement.
Strength and grace are woven together, guiding us toward growth and success.
{% endcapture %}
{%
  include feature.html
  image="images/laboratory.jpg"
  link="resources"
  heading="Extra, extra, read all about it!"
  text=text
%}

{% capture text %}
In the pursuit of excellence, one must embrace both effort and resilience, for through dedication comes great achievement.
Strength and grace are woven together, guiding us toward growth and success.
{% endcapture %}
{%
  include feature.html
  image="images/laboratory.jpg"
  link="resources"
  heading="Extra, extra, read all about it!"
  text=text
%}

<!-- section break -->

## Gallery

{%
  include gallery.html
  image1="images/paper1.jpg"
  image2="images/paper2.jpg"
  image3="images/paper3.jpg"
  image4="images/paper4.jpg"
  image5="images/paper5.jpg"
%}

A _gallery_ component, without fitting the images to squares, and without the image effects.

{%
  include gallery.html
  flat="true"
  fit="false"
  image1="images/cell.jpg"
  tooltip1="Cell"
  link1="https://cell.com/"
  image2="images/virus.jpg"
  tooltip2="Virus"
  image3="images/cell.jpg"
  tooltip3="Cell"
  link3="https://cell.com/"
  image4="images/virus.jpg"
  image5="images/bacteria.jpg"
%}

<!-- section break -->

## Card

{% capture mediumcards %}
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

{% include centerer.html html=mediumcards %}

<!-- section break -->

## Join Our Team

Are you passionate about innovation in nanotechnology, biotechnology, or medical research? Whether you're a student, researcher, or industry partner, we're always open to new ideas and meaningful collaborations.

Let's work together to shape the future of healthcare.

{% include big-link.html icon="fas fa-hands-helping" text="Join the team" link="join" -%}
{%- include big-link.html icon="fas fa-user-friends" text="Collaborators" link="collaborators" -%}
{:.center}
