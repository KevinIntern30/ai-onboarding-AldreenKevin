import csv
import json

with open('leads.csv', 'r') as file:
    reader = csv.DictReader(file)

    qualified_leads = [
        row for row in reader
        if int(row['age']) > 21
        and int(row['score']) >= 80
        and row['country'] == 'India'
    ]

with open('qualified_leads.json', 'w') as file:
    json.dump(qualified_leads, file, indent=4)

print("Total Leads:", len(qualified_leads))