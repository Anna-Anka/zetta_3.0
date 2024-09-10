import { throttle, getWindowWidth } from '../utils/index.js'

export const changeBlogImages = () => {
    if (document.querySelector('[data-blog-images]')) {

        const blocks = document.querySelectorAll('[data-blog-images]')

        blocks?.forEach((block) => {
            const name = block.getAttribute('data-blog-images')
            const cards = block.querySelectorAll('.blog-card__link')
            const images = block.querySelectorAll('.blog-block__image')

            if (cards.length !== images.length) {
                return new Error('the number of cards and images does not match')
            }

            images.forEach((image, index) => {
                image.setAttribute('aria-labelledby', `${name}-${index}`)

                if (image.classList.contains('blog-block__image--active')) {
                    image.removeAttribute('aria-hidden');
                    cards[index].setAttribute('aria-selected', true)
                } else {
                    image.setAttribute('aria-hidden', true)
                }
            })

            cards.forEach((card, index) => {

                card.setAttribute('id', `${name}-${index}`)

                const showImage = (event) => {
                    const oldSelectedCard = block.querySelector('[aria-selected]')
                    oldSelectedCard && oldSelectedCard.removeAttribute('aria-selected')

                    if (card === event.target) {
                        card.setAttribute('aria-selected', true)
                    }

                    images.forEach((image) => {
                        image.classList.remove('blog-block__image--active');
                        image.setAttribute('aria-hidden', 'true');
                    });
                    images[index].classList.add('blog-block__image--active');
                    images[index].removeAttribute('aria-hidden');
                }

                card.addEventListener('mouseover', showImage)
                card.addEventListener('focusin', showImage)
            })
        })
    }

    if (document.querySelector('.blog-card__link')) {
        const cards = document.querySelectorAll('.blog-card__link')

        const checkWidth = () => {
            const width = getWindowWidth()

            cards.forEach((card) => {

                if (width < 993) {
                    card.removeAttribute('aria-selected');
                } else {
                    if (!card.hasAttribute('aria-selected')) {
                        cards[0].setAttribute('aria-selected', 'true');
                    }
                }
            })
        }

        checkWidth();
        
        let checkWidthWrapper = throttle(checkWidth);

        window.addEventListener('resize', checkWidthWrapper)
    }
}