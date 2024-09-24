import random

def get_random_countries(country_data, count=1):
    return random.sample(country_data, count)

def play_game_round(country_data, current_country):
    new_country = random.choice(country_data)
    print(f"Current Country: {current_country['name']['common']} {current_country['flag']}")
    print(f"New Country: {new_country['name']['common']} {new_country['flag']}")

    user_guess = input(f"Does {new_country['name']['common']} have a higher or lower population than {current_country['name']['common']}? (h/l): ").strip().lower()
    if (user_guess == 'h' and current_country['population'] < new_country['population'] or
        user_guess == 'l' and current_country['population'] > new_country['population']):
        print(f"Correct! {new_country['name']['common']} population is {new_country['population']} and {current_country['name']['common']} population is {current_country['population']}")
        return new_country
    else:
        print(f"Wrong, Game Over! {new_country['name']['common']} population is {new_country['population']} and {current_country['name']['common']} population is {current_country['population']}")
        return None
