NodeJS ExpressJS Crypto server based on https://coinmarketcap.com API

**Tech Stack:**
NodeJS, ExpressJS, request-promise

Other tools:
Prettier - code formatter

**Local Setup Steps:**

- clone repository using `git clone https://github.com/BhagyashriK/cryptoserver`
- run `yarn install` to install server dependencies
- run `yarn start` to start API server

**Assumptions/NOTES:**

- Intermediate node server is written because client side HTTP requests are prohibited through CORS on coin market API. (https://coinmarketcap.com/api/documentation/v1/#section/Quick-Start-Guide)
