---
title: Activities
---

# <i class="fas fa-feather-alt"></i> Activities

{% assign events = site.data.activities | sort: "order" %}

{% for e in events %}
## {{ e.event }} ({{ e.year }})

{% include gallery.html images=e.images %}

{% endfor %}

