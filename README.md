<h1 align="center"><strong>Dinero</strong></h1>

<br />

<div align="center"><img src="https://media.giphy.com/media/xTiTnqUxyWbsAXq7Ju/giphy.gif" /></div>

<div align="center"><strong>💰 Simple budgeting app for study purposes 💰</strong></div>

## How to run

First you will need to clone the repo
```sh
git clone https://github.com/ukita/dinero.git
```

### Backend
```sh
# 1. Go to backend folder
cd backend/

# 2. Install NPM packages
yarn

# 3. Copy `.env.example` and rename to `.env`
cp .env.example .env

# 4. Start services 
docker-compose up

# 5. Deploy Prisma configuration
yarn prisma deploy
```

### Frontend
```sh
# 1. Go to frontend folder
cd frontend/

# 2. Install NPM packages
yarn

# 3. Copy `.env.example` and rename to `.env`
cp .env.example .env

# 4. Start server
yarn dev
```

## License

MIT
