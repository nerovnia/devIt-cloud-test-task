import Fastify from 'fastify'

const fastify = Fastify({
  logger: true
})

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

await fastify.register(import('@fastify/rate-limit'), {
  max: 50,
  timeWindow: '1 second',
  ban: false, 
  banDuration: 0, 
  routes: ['/api'],
})

fastify.post('/api', async function handler (request, reply) {
  setTimeout(() => {
    return  request.body;
  }, getRandomInt(999) + 1) ;
})

fastify.setErrorHandler(function (error, request, reply) {
  if (error.statusCode === 429) {
    reply.code(429)
    error.message = 'You hit the rate limit! Slow down please!'
  }
  reply.send(error)
})

try {
  await fastify.listen({ port: 3000 })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}