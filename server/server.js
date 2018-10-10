import config from '../config/config'
import app from './express'

app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
  });

app.listen(config.port, (err) => {
    if (err) {
      console.log(err)
    }
    console.info('Server started on port %s.', config.port)
  })

console.log('Hello Node.js project.');