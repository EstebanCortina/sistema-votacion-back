import { app } from './config/express_config.mjs'

import { router } from './routes/index.mjs';
app.use('/', router)

app.listen(3030, () => {
  console.log(`Running on `);
})