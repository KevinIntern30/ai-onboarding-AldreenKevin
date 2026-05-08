def filter_leads(leads):
    filtered = []

    for lead in leads:
        if lead.country == "India" and lead.score >= 80:
            filtered.append(lead)

    return filtered