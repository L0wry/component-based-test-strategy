describe('Comment', () => {

    const storyName = 'watch--with-loaded-video';
    beforeEach(() => {
        cy.server();
        cy.route('POST', 'https://content.googleapis.com/youtube/v3/comment?alt=json&key=AIzaSyCOAKnSuDjVhL01ZdgYh9ivQ3KXbhhL2qQ', {}).as('submit');
        cy.visit('http://localhost:49750/iframe.html?id=watch--with-loaded-video&v=SGw3WYvvKrU')
    });

    const commentInput = '.comment-input'
    const submitButton = '.submit-comment-button'

    it('Should post a comment', () => {
        cy.wait(5000)
        const expectedMessage = 'an expected message';

        cy.get(commentInput).type(expectedMessage)
        cy.get(submitButton).click()

        return cy.wait('@submit').then(xhr => {
            cy.log(xhr.body)
        })
    })
})
