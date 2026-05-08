import json


def write_json(data, output_file):
    with open(output_file, "w") as file:
        json.dump(data, file, indent=4)