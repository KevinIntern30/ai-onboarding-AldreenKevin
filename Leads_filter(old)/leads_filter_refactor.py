import csv
import json

def is_qualified(row):
    return (
        int(row['age']) > 21 and
        int(row['score']) >= 80 and
        row['country'] == 'India'
    )

def process_leads():
    with open('leads.csv', 'r') as file:
        reader = csv.DictReader(file)
        qualified = [row for row in reader if is_qualified(row)]

    with open('qualified_leads.json', 'w') as file:
        json.dump(qualified, file, indent=4)

    print("Total Leads:", len(qualified))

process_leads()