document.addEventListener('DOMContentLoaded', e => {
    console.log("DOM fully loaded and parsed");
})


class Game {
    constructor() {
        this.app = document.querySelector(".app");;
        this.board = document.createElement('div');
        this.card = null;
        this.cards = null;

        this.createBoard();

    }

    createBoard() {
        let {
            app,
            board,
            card
        } = this;

        board.classList.add('board');
        app.appendChild(board);

        this.createCards(16);

    }

    createCards(numberOfCards) {
        let {
            app,
            board,
            card,
        } = this;

        for (let i = 1; i <= numberOfCards + 2; i++) {

            card = document.createElement('div');
            card.classList.add('cardBack');
            card.classList.add(`card-${i}`)
            board.appendChild(card);

            card.addEventListener('click', () => {
                console.log(cards[i]);
            });
        }

        let cards = document.querySelectorAll('.cardBack');

    }

}

const adam = new Game();