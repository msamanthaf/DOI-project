import csv
from collections import defaultdict

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

def compute_age_compatibility(user_age, partner_age_preference):
    if "Same Age" in partner_age_preference and user_age == partner_age_preference:
        return 3
    if "Older" in partner_age_preference and user_age > partner_age_preference:
        return 3
    if "Younger" in partner_age_preference and user_age < partner_age_preference:
        return 3
    return 0

def compute_love_language_similarity(user1, user2):
    ranking1 = user1['Ranking'].split(', ')
    ranking2 = user2['Ranking'].split(', ')
    score = 0

    for lang in ranking1:
        diff = abs(ranking1.index(lang) - ranking2.index(lang))

        if diff == 0:  # Identical ranking
            score += 3
        elif diff == 1:  # Difference of 1 in ranking
            score += 2
        elif diff == 2:  # Difference of 2 in ranking
            score += 1

    return score

def compute_compatibility(user, other_user):
    score = 0

    if user['Sex'] == other_user['Sex']:
        score -= 100

    if other_user['Religion'] in user['PBD'].split(', '):
        score -= 50

    if user['School'] == other_user['PartnerSchool']:
        score += 3

    score += compute_age_compatibility(int(user['Age']), other_user['PartnerAge'])

    if user['Stay'] == "Yes" and other_user['MatchStay'] == "Yes":
        score += 3

    if user['Major'] == other_user['PartnerMajor']:
        score += 1

    score += compute_love_language_similarity(user, other_user)

    return score
