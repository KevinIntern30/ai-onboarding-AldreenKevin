import argparse

from leadflow.reader import read_leads
from leadflow.filter import filter_leads
from leadflow.enricher import enrich_lead
from leadflow.writer import write_json


def main():
    parser = argparse.ArgumentParser()

    parser.add_argument("--input", required=True)
    parser.add_argument("--output", required=True)

    args = parser.parse_args()

    leads = read_leads(args.input)

    filtered_leads = filter_leads(leads)

    enriched = []

    for lead in filtered_leads:
        enriched_data = enrich_lead(lead)
        enriched.append(enriched_data)

    write_json(enriched, args.output)

    print("Enriched JSON created successfully")


if __name__ == "__main__":
    main()