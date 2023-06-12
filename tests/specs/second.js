describe("Testing with Bstackdemo", () => {
    it("add product to cart", async () => {
      await browser.url('https://www.facebook.com');
    //   await browser.waitUntil(
    //     async () => (await browser.getTitle()).match(/StackDemo/i),
    //     5000,
    //     "Title didn't match with BrowserStack"
    //   );
  
    const emailInput = await browser.$('#email');
    await emailInput.setValue('your_email@example.com');

    const passwordInput = await browser.$('#pass');
    await passwordInput.setValue('your_password');

    const loginButton = await browser.$('#loginbutton');
    await loginButton.click();

  
    //   const productInCart = await $('//*[@id="__next"]/div/div/div[2]/div[2]/div[2]/div/div[3]/p[1]');
  
      await browser.waitUntil(async () => (
        await productInCart.getText()).match(productOnScreenText), 
        { timeout: 5000 }
      );
    });
  });
  