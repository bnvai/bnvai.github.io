from scholarly import scholarly
import yaml

data_list = []

# user ID in URL Google Scholar
user_id = "ALvh9nYAAAAJ"

# Get profile and paper
author = scholarly.search_author_id(user_id)
author_filled = scholarly.fill(author, sections=["publications"])

print(f"\nAuthor: {author_filled['name']}")
print(f"Total publications: {len(author_filled['publications'])}\n")

# Loop
for pub in author_filled['publications']:
    pub_filled = scholarly.fill(pub)
    title = pub_filled['bib'].get('title', 'N/A')
    authors = pub_filled['bib'].get('author', 'N/A')
    cited_by = pub_filled.get('num_citations', 0)
    year = pub_filled['bib'].get('pub_year', 'N/A')
    data_list.append({
        'title': title,
        'authors': authors,
        'cited_by': cited_by,
        'year': year
    })

# ✅ Save on file YAML for using in Jekyll (_data/publications.yml)
with open('_data/publications.yml', 'w', encoding='utf-8') as f:
    yaml.dump(data_list, f, allow_unicode=True, sort_keys=False)
