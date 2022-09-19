# Find Your Duo: Server

- Prisma Models: Game (id, title, bannerUrl, ads) and Ads (id, gameId, name, yearsPlaying, discord and others).
- Routes: 
   - GET /games: list of games
   - GET /games/:id/ads: list of ads for a given game
   - GET /ads/:id/discord: get user discord for a given ad
   - POST /ads/:id/discord: create a new duo announcement

## Stacks
   - NodeJs
   - TypeScript
   - Sqlite
   - Prisma
