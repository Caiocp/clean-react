import { HttpPostClient } from '@/data/protocols/http/http-post-client'
import { RemoteAuthetication } from './remote-authentication'

describe('RemoteAuthentication', () => {
  test('Should call HttpPostCliente with correct URL', async () => {
    class HttpPostClientSpy implements HttpPostClient {
      url?: string

      async post (url: string): Promise<void> {
        this.url = url
        return Promise.resolve()
      }
    }
    const httpPostClientSpy = new HttpPostClientSpy()
    const url = 'any_url'
    const sut = new RemoteAuthetication(url, httpPostClientSpy)

    await sut.auth()
    expect(httpPostClientSpy.url).toBe(url)
  })
})