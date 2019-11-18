document.querySelectorAll('.show-modal') //получаем вск кнопки show modal
    .forEach($btn => {
        $btn.addEventListener('click', () => { // для каждой кнопки по клику
            let $modal = document.querySelector('#' + $btn.dataset.modalName); // получаем id элемента
            console.log('открытие модалки');
            
            $modal.hidden = false;

            document.onkeydown = (e) => { // вешаем событие на esc				
                if (e.keyCode === 27) {
                    console.log('событие на esc');                    
                    $modal.hidden = true;             
                }

                document.onkeydown = null; // после отработки события удаляем обработчик события
            }
        })
    })

document.querySelectorAll('.modal-overlay') // для каждого оверлея
    .forEach($overlay => {
        $overlay.addEventListener('click', () => { // событие по клику
            $overlay.hidden = true;
            console.log('событие: клик по оверлею');            
            document.onkeydown = null;
        })

        let $modal = $overlay.querySelector('.modal-content');

        $modal.addEventListener('click', event => { // получаем элемент модальное окно
            console.log('убираем всплытие');            
            event.stopPropagation(); // убираем всплытие событий
        })

        let $closeBtns = $overlay.querySelectorAll('.modal-close'); // получаем все кнопки закрыть окно

        $closeBtns.forEach($closeBtn => {
            $closeBtn.addEventListener('click', () => { //для каждой кнопки закрыть окно событие по клику
                console.log('клик по кнопке close');
                
                $overlay.hidden = true;
                document.onkeydown = null;
            })
        })
    })	