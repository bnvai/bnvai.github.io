---
title: Activities
---

<!-- # <i class="fas fa-feather-alt"></i> Activities -->

{% assign events = site.data.activities | sort: "year" | reverse %}

{% for e in events %}
## {{ e.event }} ({{ e.year }})

{% include gallery.html images=e.images %}

{% endfor %}

