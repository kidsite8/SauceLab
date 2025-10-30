import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('visual_user', 'secret_sauce')
        await expect(SecurePage.appLogo).toBeExisting()
        await expect(SecurePage.appLogo).toHaveText(
            expect.stringContaining('Swag Labs')
        )
        await browser.pause(3000)

    })

     it(`shouldn't login with invalid credentials`, async () => {
        await LoginPage.open()

        await LoginPage.login('visul_user', 'secret_sauc')
        await expect(LoginPage.loginFail).toBePresent()
        await browser.pause(3000)
    })
})