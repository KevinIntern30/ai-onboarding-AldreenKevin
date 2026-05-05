from leads_filter_package.parser import read_csv, write_json
from leads_filter_package.filter import filter_leads

def run():
    input_file = "data/LEADS.CSV"
    output_file = "leads_filter_package/qualified_leads.json"

    rows = read_csv(input_file)

    filtered = filter_leads(rows)

    write_json(filtered, output_file)

    print("Total Leads:", len(filtered))