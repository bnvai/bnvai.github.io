Welcome to the Nano Bio Medical Innovation Lab

At the forefront of interdisciplinary research, the Nano Bio Medical Innovation Lab is dedicated to pioneering breakthroughs at the intersection of nanotechnology, biology, and medicine. Our mission is to develop innovative solutions that address critical challenges in healthcare, from early disease detection to targeted drug delivery and regenerative medicine.

Combining cutting-edge nanomaterials, advanced bioengineering techniques, and biomedical insights, we strive to bridge the gap between fundamental research and real-world clinical applications. Our team brings together passionate scientists, engineers, and clinicians working collaboratively to transform the future of diagnostics and therapeutics.

Join us as we explore the smallest scales to make the biggest impact on human health.

<!-- section break -->

## Upcoming Feature

{% include carousel-container.html %}

<!-- section break -->

# Heading 1

## Heading 2

Ut aliquam purus sit amet luctus venenatis lectus magna fringilla.
Mi bibendum neque egestas congue quisque egestas diam in.
Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque.
Sapien nec sagittis aliquam malesuada.
Non odio euismod lacinia at quis risus sed vulputate.
Laoreet id donec ultrices tincidunt arcu non sodales neque.

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

## Figure

{%
  include figure.html
  image="images/bacteria.jpg"
  caption="A set-height figure"
  height="300px"
  link="team"
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

