import { getGreeting } from '../support/app.po';

describe('homepage', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    // cy.login('my-email@something.com', 'myPassword');
    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains('Latest Transactions');
  });

  it('should display last 10 txs', () => {
    cy.get('[data-testid=table-body-row]').should((t) =>
      expect(t.length).equal(10)
    );
  });
});
