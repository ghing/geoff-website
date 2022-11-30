---
layout: home.liquid
title: Geoff Hing 
links:
  - label: Mastodon
    url: https://mastodon.social/@geoffhing
    me: true
  - label: GitHub
    url: https://github.com/ghing/
  - label: E-mail
    type: email
    encodedAddress: Z2VvZmZoaW5nQGdtYWlsLmNvbQ==
---
# It's me, Geoff Hing

<ul class="links">
{% for link in links %}
  <li>
    <a href="{{link.url}}" {% if link.me %}rel="me"{% endif %} {% if link.type == "email" %}data-type="email" data-addr="{{ link.encodedAddress }}"{% endif %}>
    {{link.label}}
    </a>
  </li>
{% endfor %}
</ul>
