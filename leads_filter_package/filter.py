def filter_leads(rows):
    qualified = [
        row for row in rows
        if int(row['age']) > 21
        and int(row['score']) >= 80
        and row['country'] == 'India'
    ]
    return qualified