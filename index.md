---
layout: home.liquid
title: Geoff Hing 
links:
  - label: Mastodon
    url: https://mastodon.social/@geoffhing
    me: true
  - label: GitHub
    url: https://github.com/ghing/
---
# It's me, Geoff Hing

<ul>
{% for link in links %}
  <li><a href="{{link.url}}"{% if link.me %}rel="me"{% endif %}>{{link.label}}</a></li>
{% endfor %}
</ul>
