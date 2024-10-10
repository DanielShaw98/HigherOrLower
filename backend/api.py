import requests

BASE_URL = 'https://restcountries.com/v3.1/all'

def fetch_all_countries():
    # fields = "name,flags,population"
    # response = requests.get(f"{BASE_URL}?fields={fields}")

    # if response.status_code == 200:
    #     countries = response.json()
    #     filtered_countries = [country for country in countries if country['population'] > 0]
    #     return filtered_countries
    # else:
    #     raise Exception(f"Failed to fetch data. Status code: {response.status_code}")

    test_countries = [
        {
            "name": {"common": "China"},
            "flags": {"svg": "https://flagcdn.com/cn.svg"},
            "population": 1402112000,
        },
        {
            "name": {"common": "India"},
            "flags": {"svg": "https://flagcdn.com/in.svg"},
            "population": 1380004385,
        },
        {
            "name": {"common": "United States"},
            "flags": {"svg": "https://flagcdn.com/us.svg"},
            "population": 331002651,
        },
        {
            "name": {"common": "Indonesia"},
            "flags": {"svg": "https://flagcdn.com/id.svg"},
            "population": 273523615,
        },
                {
            "name": {"common": "Pakistan"},
            "flags": {"svg": "https://flagcdn.com/pk.svg"},
            "population": 225199937,
        },
        {
            "name": {"common": "Brazil"},
            "flags": {"svg": "https://flagcdn.com/br.svg"},
            "population": 213993437,
        },
    ]
    return test_countries
