window.onload = function () {
    let _body = document.querySelector('.body');
    document.getElementById('js-burger').addEventListener('click', function () {
        _body.classList.toggle('_menu');
    })

    document.getElementById('js-burger-x').addEventListener('click', xMenu);
    document.getElementById('js-burger-trap').addEventListener('click', xMenu);

    function xMenu(){
        (_body.classList.contains('_menu'))?_body.classList.remove('_menu'):'';
    }

    // meNU- tab
    let tabBox = document.getElementById('home-nav');
    let tabers = document.querySelectorAll('.home-nav-e__i-e');

    for(let i=0; i<tabers.length; i++){
        tabers[i].addEventListener('click', function (e) {
            let elem = e.target.getAttribute('tabNum');
            tabBox.setAttribute('tabNum', elem );

        })
    }

    // SELECT
    let selectBox = document.querySelectorAll('.select');
    for(let i=0; i<selectBox.length; i++){
        let selectInnerBox = selectBox[i].querySelector('.select__inner');
        let selectorOpt = selectBox[i].querySelector('.select__options');
        let selectors = selectorOpt.querySelectorAll('.select__options-i');
        let selectorSelect = selectBox[i].querySelector('select');
        let selectorVal = selectBox[i].querySelector('.select__value');
        let selectorDefValue = selectorSelect.value;

        selectInnerBox.addEventListener('mouseenter', function (e) {
            // console.log('selectBox[i]',selectBox[i], e.target.classList.contains('_active'));
            // if(selectBox[i]) {
            //     selectBox[i].classList.add('_active');
            // }
            e.target.classList.add('_active');
        });
        // let timeR;
        selectInnerBox.addEventListener('mouseleave', function (e) {
            // clearTimeout(timeR);
            // timeR = setTimeout(function () {
            // console.log('selectBox[i]',selectBox[i]);
            // if(selectBox[i]){
            //     selectBox[i].classList.remove('_active');
            // }
            // }, 300);
            e.target.classList.remove('_active');
        });
        
        for(let j=0; j<selectors.length; j++){
            if(selectors[j].getAttribute('sval') === selectorDefValue){
                selectorVal.innerHTML = selectors[j].innerHTML;
                selectors[j].classList.add('_active');
            }
            selectors[j].addEventListener('click', function (e) {
                // let opts = selectorSelect.querySelectorAll('options');
                // tabBox.setAttribute('tabNum', elem );
                selectorDefValue = selectorSelect.value;
                if(selectors[j].getAttribute('sval') !== selectorDefValue
                    && !selectors[j].classList.contains('_active')){
                    selectorVal.innerHTML = e.target.innerHTML;
                    selectorSelect.value = selectors[j].getAttribute('sval');
                    selectBox[i].classList.toggle('_active');
                    selectorOpt.querySelector('.select__options-i._active').classList.remove('_active');
                    selectors[j].classList.add('_active');
                }
            })
        }
    }


}
