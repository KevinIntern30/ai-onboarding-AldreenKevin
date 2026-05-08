from dataclasses import dataclass


@dataclass
class Lead:
    name: str
    email: str
    age: int
    country: str
    score: int