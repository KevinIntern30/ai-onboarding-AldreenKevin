from leadflow.filter import filter_leads
from leadflow.models import Lead


def test_filter_leads():
    leads = [
        Lead("john", "john@gmail.com", 28, "India", 85),
        Lead("Alice", "alice@gmail.com", 22, "USA", 60)
    ]

    result = filter_leads(leads)

    assert len(result) == 1
    assert result[0].name == "john"