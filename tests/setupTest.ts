import "@testing-library/jest-dom/extend-expect"
// 了解决异常组件在 测试的时候，cnsole.error 的错误，第一次配置的时候有问题，然后老袁在后来的一节课上面讲了 这个，是这样处理cnsole.error 的错误
import { rest } from 'msw'
import { setupServer } from 'msw/node'
const server = setupServer(
    rest.post('/login', (req, res, ctx) => {
        return res(ctx.json({token: 'mock_token'}));
    })
)
beforeAll(() => server.listen());
afterEach(() => {
    jest.resetAllMocks()
    jest.restoreAllMocks()
    // server.resetHandlers()
})
beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {})
})
afterEach(() => {
    try {
        expect(console.error).not.toHaveBeenCalled()
    } catch(e) {
        console.log("⏰", "请确保在测试期间一切console.error不能被调用")
    }
})