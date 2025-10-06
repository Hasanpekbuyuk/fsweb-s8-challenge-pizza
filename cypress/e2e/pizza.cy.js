describe('Pizza Sipariş Formu Testleri', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/order'); 
  });

  it('Inputa bir metin girer', () => {
    cy.get('input[name="not"]')
      .type('Lütfen pizzamı hızlı getiriniz :)')
      .should('have.value', 'Lütfen pizzamı hızlı getiriniz :)');
  });

  it('Birden fazla malzeme seçilebilir', () => {
    cy.get('input[type="checkbox"]').each(($el, index) => {
      if (index < 4) {
        cy.wrap($el).check().should('be.checked');
      }
    });
  });

  it('Formu başarıyla gönderir', () => {
    cy.get('input[type="radio"][value="M"]').check();
    cy.get('select[name="hamur"]').select('Normal');
    cy.get('input[type="checkbox"]').eq(0).check();
    cy.get('input[type="checkbox"]').eq(1).check();
    cy.get('input[type="checkbox"]').eq(2).check();
    cy.get('input[type="checkbox"]').eq(3).check();
    cy.get('input[name="not"]').type('Acelem var!');

   
    cy.get('button[type="submit"]').click();

   
    cy.url().should('include', '/confirmation');
  });
});
