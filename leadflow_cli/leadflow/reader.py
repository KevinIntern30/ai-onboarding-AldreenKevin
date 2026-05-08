import csv

from leadflow.models import Lead


def read_leads(file_path):
    leads = []

    with open(file_path, "r") as file:
        reader = csv.DictReader(file)

        for row in reader:
            lead = Lead(
                name=row["name"],
                email=row["email"],
                age=int(row["age"]),
                country=row["country"],
                score=int(row["score"])
            )

            leads.append(lead)

    return leads