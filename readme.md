##**🌦️ Real-Time Weather Dashboard**

##**ACCESS LINK: https://d2stg7y6583fpg.cloudfront.net/**

##**📌 Project Overview**

The Real-Time Weather Dashboard is a cloud-based application that provides real-time meteorological data for any city worldwide. This project leverages AWS serverless architecture to offer cost-effectiveness, high availability, and scalability, ensuring users receive accurate weather information instantly. The application integrates AWS Lambda, API Gateway, Amazon S3, AWS Key Management Service (KMS), and AWS CloudWatch to ensure secure, reliable, and efficient weather data retrieval.

**🚀 Features**

✔ **Real-Time Weather Data** – Fetches live weather conditions using the OpenWeatherMap API.

✔ **Detailed Weather Information**– Displays temperature, humidity, wind speed, and general weather conditions.

✔ **User-Friendly Interfac**e – Responsive design optimized for desktop, tablet, and mobile devices.

✔ **Serverless Architecture** – Utilizes AWS Lambda, API Gateway, and S3 to eliminate traditional server management.

✔ **Secure API Integration** – AWS Key Management Service (KMS) ensures secure handling of API keys.

✔ **Cloud Monitoring & Logging** – AWS CloudWatch tracks Lambda function usage, performance, and debugging logs.

#**🏗️ Project Architecture**

This project employs AWS services in a serverless model, ensuring high scalability and efficiency.

#**🔹 1. AWS Lambda**
**Purpose:** Handles backend logic for weather data retrieval.

**Role:** 

#Receives city input from the frontend.

#Calls the OpenWeatherMap API to fetch weather details.

#Returns structured weather data to the frontend.

#**Scalability:** Auto-scales dynamically based on incoming traffic.

**🔹 2. Amazon API Gateway**

**Purpose:** Manages HTTP requests and forwards them to AWS Lambda.

**Role:**

#Routes user requests to the appropriate Lambda function.

#Secures API endpoints using authentication and rate limiting.

#**Security:** Supports API authentication and request validation.

**🔹 3. Amazon S3**

**Purpose:** Hosts the frontend UI (HTML, CSS, JavaScript).

**Role:**

Stores and serves static frontend files.

Improves performance via CDN (CloudFront integration).

**Scalability:** Automatically scales based on demand.

**🔹 4. AWS Key Management Service (KMS)**

**Purpose:** Encrypts sensitive data, such as API keys.

**Role:**

#Ensures secure storage and retrieval of API keys.

#Reduces risk of unauthorized API access.

**🔹 5. AWS CloudWatch**

**Purpose:** Monitors application performance and logs execution data.

**Role:**

#Tracks Lambda execution metrics (invocations, response time).

#Provides error logs for debugging.

#**Insights:** Helps optimize system performance and debugging.

**🔄 Integration Flow**

1️⃣ User searches for a city on the web UI (hosted on S3).

2️⃣ The request is sent via API Gateway to AWS Lambda.

3️⃣ Lambda fetches weather data from OpenWeatherMap.

4️⃣ Processed data is returned to the frontend via API Gateway.

5️⃣ AWS KMS secures API keys, and CloudWatch logs application performance.

**🛠️ Technologies Used**

**Frontend:** HTML, CSS, JavaScript

**Backend:** AWS Lambda (Node.js/Python)

**Cloud Services:**

1️⃣ Amazon S3 (Static Hosting)

2️⃣ AWS Lambda (Serverless Backend)

3️⃣ Amazon API Gateway (Routing)

4️⃣ AWS Key Management Service (Security)

5️⃣ AWS CloudWatch (Monitoring & Logging)

6️⃣ **External API:** OpenWeatherMap API

**📌 Installation Guide**

**1️⃣ Clone the Repository**

**git clone https://github.com/your-username/weather-dashboard.git
cd weather-dashboard**

**2️⃣ Obtain an API Key**

**#Sign up at OpenWeatherMap to get a free API key.**

**3️⃣ Configure the Application**

**#In the project directory, create a .env file:**

**touch .env**

**#Add the API key inside .env:**

**OPENWEATHER_API_KEY=your_api_key_here**

**4️⃣ Install Dependencies**

**#For Node.js backend (AWS Lambda):**

**npm install**

**5️⃣ Deploy the Application**

**#For local testing, run:**

**node lambda.js**

**#To deploy on AWS Lambda:**

1️⃣Package and upload the Lambda function.

2️⃣Configure API Gateway to link with Lambda.

3️⃣Deploy static frontend files to Amazon S3.

**🧩 Usage**

1️⃣Open the Web App (hosted on Amazon S3).

2️⃣Enter a City Name in the search bar.

3️⃣View Real-Time Weather Data, including:

  #Temperature (°C/°F)
  
  #Humidity (%)
  
  #Wind Speed (km/h)
  
  #General Weather Condition
  
4️⃣Check the 5-Day Forecast (Future Enhancement).
