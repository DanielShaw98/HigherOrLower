from flask import jsonify
import random

def get_random_countries(country_data, count=2):
    return random.sample(country_data, count)

def play_game_round(current_country, new_country, user_guess, country_data):
    if (user_guess == 'h' and new_country['population'] > current_country['population']) or \
       (user_guess == 'l' and new_country['population'] < current_country['population']):

        next_country = random.choice(country_data)
        answer = 'higher' if new_country['population'] > current_country['population'] else 'lower'
        return jsonify({
            'result': 'correct',
            'message': f"Correct! {current_country['name']} has a population of {current_country['population']} which is {answer} than {new_country['name']}.",
            'new_country': {
                'name': next_country['name']['common'],
                'population': next_country['population'],
                'flag': next_country['flag']
            }
        })
    else:
        return jsonify({
            'result': 'wrong',
            'message': f"Game Over! {new_country['name']} has a population of {new_country['population']}, while {current_country['name']} has {current_country['population']}."
        })
