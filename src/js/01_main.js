const ANSWERS = document.querySelectorAll('.answer');
const ACCORDION = document.querySelector('.accordion');

ACCORDION.addEventListener('click', (elem) => {
    if (elem.target.closest('.question')) {
        let ANSWER = elem.target.nextElementSibling
        if ( ANSWER.classList.contains('active') ) {
            ANSWER.classList.remove('active')
        } else {
            ANSWERS.forEach((el) => {
                el.classList.remove('active')
            })
            ANSWER.classList.add('active')
        }
    }
})
