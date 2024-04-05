import type { HttpContext } from '@adonisjs/core/http'

export default class GreetsController {
  public async handle({ response }: HttpContext) {
    return response.send('Hello world')
  }
}
