import requests

from tenacity import retry, stop_after_attempt, wait_exponential


@retry(
    stop=stop_after_attempt(3),
    wait=wait_exponential(multiplier=1, min=1, max=5)
)
def enrich_lead(lead):
    response = requests.get(
        "https://jsonplaceholder.typicode.com/users/1"
    )

    data = response.json()

    return {
        "name": lead.name,
        "email": lead.email,
        "age": lead.age,
        "country": lead.country,
        "score": lead.score,
        "company_phrase": data["company"]["bs"]
    }