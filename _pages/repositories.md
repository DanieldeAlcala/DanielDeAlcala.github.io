---
layout: page
permalink: /repositories/
title: repositories
description: Edit the `_data/repositories.yml` and change the `github_users` and `github_repos` lists to include your own GitHub profile and repositories.
nav: true
nav_order: 4
---

{% if site.data.repositories.github_users %}

## GitHub users

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for user in site.data.repositories.github_users %}
    {% include repository/repo_user.liquid username=user %}
  {% endfor %}
</div>

---

{% if site.repo_trophies.enabled %}
{% for user in site.data.repositories.github_users %}
{% if site.data.repositories.github_users.size > 1 %}

  <h4>{{ user }}</h4>
  {% endif %}
  <div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% include repository/repo_trophies.liquid username=user %}
  </div>

---

{% endfor %}
{% endif %}
{% endif %}

{% if site.data.repositories.github_repos %}

## GitHub Repositories

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>
{% endif %}

{% if site.data.repositories.external_repos %}

---

## External / Pre-release Repositories

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for r in site.data.repositories.external_repos %}
    <div class="repo p-2 text-center">
      <a href="{{ r.url }}" target="_blank" rel="noopener noreferrer">
        <div class="card h-100 hoverable p-3">
          <h3 class="card-title">{{ r.name }}</h3>
          {% if r.description %}
            <p class="card-text">{{ r.description }}</p>
          {% endif %}
          {% if r.related_publications %}
            <p class="card-text"><strong>Related publications:</strong>
            {% for pub in r.related_publications %}
              {% cite {{ pub }} %}
            {% endfor %}
            </p>
          {% endif %}
        </div>
      </a>
    </div>
  {% endfor %}
</div>
{% endif %}
