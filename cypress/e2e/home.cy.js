describe('testes na home', () => {
  it('abre o diretorio', () => {
    cy.visit('/index.html')
  })
  it('abre a pagina index', ()=>{
    cy.visit('http://127.0.0.1:5500/index.html')
  })
})