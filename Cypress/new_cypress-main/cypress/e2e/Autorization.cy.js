describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio');
         cy.get('#mail').type('LOGIN');
         cy.get('#pass').type('PASSWORD');
         cy.get('#loginButton').click();
         cy.get('#messageHeader').contains('Авторизация прошла успешно');
         cy.get('#exitMessageButton > .exitIcon')
       })
    it('Восстановление Пароля', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('LOGIN');
        cy.get('#restoreEmailButton').click();
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon')
      })
    it('Неверный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('LOGIN');
        cy.get('#pass').type('неверныйPASSWORD');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon')
      })
    it('Верный пароль и НЕверный логин', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('неверныйLOGIN');
        cy.get('#pass').type('PASSWORD');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon')
      })
    it('Верный пароль и логин без @', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('LOGINбез@');
        cy.get('#pass').type('PASSWORD');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации')
      })
    it('Верный пароль и логин с строчными/прописными буквами', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('ЛогинСстрочнымиИпрописнымиБуквами');
        cy.get('#pass').type('PASSWORD');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Авторизация прошла успешно')
      })
 })
