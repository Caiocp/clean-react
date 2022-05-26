import { HttpPostClientSpy } from '../../test/mock-http-client'
import { RemoteAuthetication } from './remote-authentication'

describe('RemoteAuthentication', () => {
  test('Should call HttpPostCliente with correct URL', async () => {
    const url = 'any_url'
    const httpPostClientSpy = new HttpPostClientSpy()
    const sut = new RemoteAuthetication(url, httpPostClientSpy)

    await sut.auth()
    expect(httpPostClientSpy.url).toBe(url)
  })
})
