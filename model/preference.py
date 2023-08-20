import csv

header_mapping = {
    'Your School': 'School',
    'Name': 'Name',
    'Gender': 'Sex',
    'Partner School Preference': 'PartnerSchool',
    'Your Age': 'Age',
    'Partner Age Preference': 'PartnerAge',
    'Beliefs': 'Religion',
    "Partner's Beliefs DEALBREAKER": 'Dealbreaker',
    'Your Current Major': 'Major',
    'Preferred Partner Major': 'PartnerMajor',
    'I have a preference (describe)': 'PreferenceMajor',
    'Are you intending to remain within Canada for the long term?': 'Stay',
    'Would you prefer your match to stay within Canada for the long term?': 'MatchStay',
    '3 Songs That Would Describe You (insert Spotify Public Album link)': 'Songs',
    'Rank these love languages from most to least important to you': 'Ranking',
}

input_filename = 'input.csv'
output_filename = 'output.csv'

with open(input_filename, 'r', newline='', encoding='utf-8') as input_file, \
        open(output_filename, 'w', newline='', encoding='utf-8') as output_file:

    csvreader = csv.DictReader(input_file)
    csvwriter = csv.DictWriter(output_file, fieldnames=header_mapping.values())

    csvwriter.writeheader()

    for row in csvreader:
        renamed_data = {header_mapping[column]
            : value for column, value in row.items()}
        csvwriter.writerow(renamed_data)
