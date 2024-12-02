import json
import requests
import urllib.parse

def lambda_handler(event, context):
    # Safely determine the HTTP method
    http_method = event.get("httpMethod", None) or event.get("requestContext", {}).get("http", {}).get("method", None)
    
    # Handle OPTIONS preflight request
    if http_method == "OPTIONS":
        return {
            "statusCode": 200,
            "headers": {
                "Access-Control-Allow-Origin": "*",  # Allow all origins
                "Access-Control-Allow-Methods": "GET, OPTIONS",  # Allow GET and OPTIONS methods
                "Access-Control-Allow-Headers": "Content-Type"  # Allow these headers
            },
            "body": ""  # No body for OPTIONS response
        }

    # Handle GET request
    if http_method == "GET":
        try:
            # Parse city from query parameters
            city = event.get('queryStringParameters', {}).get('city', 'New York')
            city = urllib.parse.quote(city.strip())  # Encode special characters
            
            # OpenWeatherMap API Key
            api_key = "c2bccdeeaefdf3d2da5a803365b03c4a"  # Replace with your OpenWeatherMap API key
            
            # Construct OpenWeatherMap API URL
            weather_url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}"
            
            # Fetch weather data
            response = requests.get(weather_url)
            weather_data = response.json()
            
            # Handle city not found
            if weather_data.get('cod') == '404':
                return {
                    "statusCode": 404,
                    "headers": {
                        "Access-Control-Allow-Origin": "*",
                        "Access-Control-Allow-Methods": "GET, OPTIONS",
                        "Access-Control-Allow-Headers": "Content-Type"
                    },
                    "body": json.dumps({"error": "City not found. Please check the spelling or try another city."})
                }
            
            # Return successful response
            return {
                "statusCode": 200,
                "headers": {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "GET, OPTIONS",
                    "Access-Control-Allow-Headers": "Content-Type"
                },
                "body": json.dumps(weather_data)
            }

        except Exception as e:
            # Handle internal server errors
            print("Error:", str(e))
            return {
                "statusCode": 500,
                "headers": {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "GET, OPTIONS",
                    "Access-Control-Allow-Headers": "Content-Type"
                },
                "body": json.dumps({"error": "Internal server error. Please try again later."})
            }
    
    # Default response for unsupported methods
    return {
        "statusCode": 405,
        "headers": {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type"
        },
        "body": json.dumps({"error": "Method not allowed"})
    }
