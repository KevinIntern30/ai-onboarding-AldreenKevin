import requests
import json

with open("domains.txt", "r") as file:
    domains = file.read().splitlines()

results = []

for domain in domains:

    print(f"Checking: {domain}")

    url = "https://jsonplaceholder.typicode.com/users/1"

    try:

        headers = {
            "User-Agent": "MyPythonApp/1.0"
        }

        response = requests.get(
            url,
            headers=headers,
            timeout=5
        )

        response.raise_for_status()

        data = response.json()

        company_info = {
            "domain": domain,
            "company_name": data["name"],
            "email": data["email"],
            "status_code": response.status_code
        }

        results.append(company_info)

        print(f"Completed: {domain}")

    except requests.exceptions.RequestException as error:

        print("Error:", error)

with open("output.json", "w") as file:

    json.dump(results, file, indent=4)

print("Finished")