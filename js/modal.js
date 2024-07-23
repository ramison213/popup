document.querySelectorAll('.show-modal') // get all show modal buttons
    .forEach($btn => {
        $btn.addEventListener('click', () => {
            let $modal = document.querySelector('#' + $btn.dataset.modalName); // get the element by id
            console.log('opening modal');

            $modal.hidden = false;

            document.onkeydown = (e) => { // event on esc key
                if (e.key === 'Escape') {
                    console.log('esc event');
                    $modal.hidden = true;
                }

                document.onkeydown = null; // remove event handler after it triggers
            }
        })
    })

document.querySelectorAll('.modal-overlay') // get all modal overlays
    .forEach($overlay => {
        $overlay.addEventListener('click', () => {
            $overlay.hidden = true;
            console.log('event: click on overlay');
            document.onkeydown = null;
        })

        let $modal = $overlay.querySelector('.modal-content');

        $modal.addEventListener('click', event => {
            console.log('prevent bubbling');
            event.stopPropagation();
        })

        let $closeBtns = $overlay.querySelectorAll('.modal-close'); // get all close buttons

        $closeBtns.forEach($closeBtn => {
            $closeBtn.addEventListener('click', () => {
                console.log('click on close button');

                $overlay.hidden = true;
                document.onkeydown = null;
            })
        })
    })