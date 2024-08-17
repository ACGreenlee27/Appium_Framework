describe('Android Elements Test', () => {
 it('Find element by accessibility id', async () => {
   // find element by accessibility id
   const appOption = await $('~App');

   // click on element
   await appOption.click();

   // assertion
   const actionBar = await $('~Action Bar');
   await expect(actionBar).toBeExisting();
 })
});
