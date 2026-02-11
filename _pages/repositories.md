---
layout: page
permalink: /repositories/
title: repositories
description: Edit the `_data/repositories.yml` and change the `github_users` and `github_repos` lists to include your own GitHub profile and repositories.
nav: true
nav_order: 4
---

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
              <ul class="list-unstyled mb-0">
              {% for pub in r.related_publications %}
                {% if pub == 'dealcala2025AIdoc' %}
                  <li><a href="{{ '/assets/pdf/DocAI.pdf' | relative_url }}">AIDoc (preprint PDF)</a></li>
                {% else %}
                  <li>{{ pub }}</li>
                {% endif %}
              {% endfor %}
              </ul>
            </p>
          {% endif %}
        </div>
      </a>
    </div>
  {% endfor %}
</div>
{% endif %}
