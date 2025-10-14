

import requests
#API key 
api_key = "1v1GETkvnTlxbHkLdUkqu0W64O5CsYpvw6D8fr"  # Loaded securely
params = {"key": api_key}
response = requests.get("https://api.nasa.gov", params=params)
