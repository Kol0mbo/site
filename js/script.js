
document.querySelector(".certification-btn").addEventListener("click", function(){
    let elem = document.querySelector('.pop-up-certifications');
    elem.classList.remove('d-none');
    document.querySelector(".close_certifications").addEventListener("click", function(){
        let elem = document.querySelector('.pop-up-certifications');
        elem.classList.add('d-none');
    });
    
    
    
})

document.querySelector(".open_popUp").addEventListener("click", function(){
    let elem = document.querySelector('.pop-up-first');
    elem.classList.remove('d-none');
    document.querySelector(".pop-up_card_selection__button").addEventListener("click", function(){
        elem.classList.add('d-none');

        let elem2 = document.querySelector('.pop-up-second');
        elem2.classList.remove('d-none');

        document.querySelector(".close_second").addEventListener("click", function(){
            let close = document.querySelector('.pop-up-second');
            close.classList.add('d-none');
        });

        document.querySelector(".close_second").addEventListener("click", function(){
            let close = document.querySelector('.pop-up-second');
            close.classList.add('d-none');
        });

        // const checkbox = document.querySelector('.custom-control-input');
        // checkbox.addEventListener('change', () => {
        //     if ( checkbox.checked ) {
                
        //     }
        // });

        

        document.querySelector(".pop-up_second_card_selection__button").addEventListener("click", function(){
            elem2.classList.add('d-none');

            let elem3 = document.querySelector('.pop-up-third');
            elem3.classList.remove('d-none');
            
            document.querySelector(".close_third").addEventListener("click", function(){
                let close = document.querySelector('.pop-up-third');
                close.classList.add('d-none');
            });
        })
    })

});

document.querySelector(".close_btn").addEventListener("click", function(){
    let elem = document.querySelector('.pop-up');
    elem.classList.add('d-none');
});



let navbar_btn = document.querySelector("#nav-toggler");
navbar_btn.addEventListener("click", function(){
    if(!navbar_btn.classList.contains("collapsed")){
        document.querySelector('.navbar-sizing').style = "background-color: white"; 
    }
    else document.querySelector('.navbar-sizing').style = "background-color: transparent"; 

})


let curtainColor = 'gold';
let curtainSize = 'small';
let image = document.querySelector('.pop-up_card_img');
let image2 = document.querySelector('.pop-up_second_card_img');
let priceText = document.querySelector('.price');



function formRadioSize(){
    if(event.target.name = 'customRadio'){
        console.log(event.target.value);
        curtainSize = event.target.value;
        console.log(curtainSize, curtainColor);
        
        
    }
    chng();
}
function formRadioColor(){
    if(event.target.name = 'customRadio'){
        console.log(event.target.value);
        curtainColor = event.target.value;
        
    }
    chng();
}

function chng(){
    if(curtainColor == 'gold'){
        document.querySelector("#customRadio3").disabled = true;
    }
    if(curtainColor !== 'gold'){
        document.querySelector("#customRadio3").disabled = false;
    }
    if(curtainColor == 'gold' && curtainSize == 'small') {
        image.style = 'background-image: url(images/variable/12.png);';
        image2.style = 'background-image: url(images/variable/12.png);';
    }
    if(curtainColor == 'gold' && curtainSize == 'medium') {
        image.style = 'background-image: url(images/variable/2х2.png);';
        image2.style = 'background-image: url(images/variable/2х2.png);';
    }
    if(curtainColor == 'gold' && curtainSize == 'extraLarge') {
        image.style = 'background-image: url(images/variable/3х3.png);';
        image2.style = 'background-image: url(images/variable/3х3.png);';
    }
    if(curtainColor == 'blue' && curtainSize == 'small') {
        image.style = 'background-image: url(images/variable/colds.png);';
        image2.style = 'background-image: url(images/variable/colds.png);';
    }
    if(curtainColor == 'blue' && curtainSize == 'medium') {
        image.style = 'background-image: url(images/variable/coldm.png);';
        image2.style = 'background-image: url(images/variable/coldm.png);';
    }
    if(curtainColor == 'blue' && curtainSize == 'large') {
        image.style = 'background-image: url(images/variable/coldl.png);';
        image2.style = 'background-image: url(images/variable/coldl.png);';
    }
    if(curtainColor == 'blue' && curtainSize == 'extraLarge') {
        image.style = 'background-image: url(images/variable/coldxl.png);';
        image2.style = 'background-image: url(images/variable/coldxl.png);';
    }
    if(curtainColor == 'gold' && curtainSize == 'extraLarge') {
        image.style = 'background-image: url(images/variable/3х3.png);';
        image2.style = 'background-image: url(images/variable/3х3.png);';
    }
    if(curtainColor == 'multicolor' && curtainSize == 'small') {
        image.style = 'background-image: url(images/variable/multicolors.png);';
        image2.style = 'background-image: url(images/variable/multicolors.png);';
    }
    if(curtainColor == 'multicolor' && curtainSize == 'medium') {
        image.style = 'background-image: url(images/variable/multicolorm.png);';
        image2.style = 'background-image: url(images/variable/multicolorm.png);';
    }
    if(curtainColor == 'multicolor' && curtainSize == 'large') {
        image.style = 'background-image: url(images/variable/multicolorl.png);';
        image2.style = 'background-image: url(images/variable/multicolorl.png);';
    }
    if(curtainColor == 'multicolor' && curtainSize == 'extraLarge') {
        image.style = 'background-image: url(images/variable/multicolorxl.png);';
        image2.style = 'background-image: url(images/variable/multicolorxl.png);';
    }

    if(curtainSize == 'small') priceText.innerHTML = '490 грн.';
    if(curtainSize == 'medium') priceText.innerHTML = '590 грн.';
    if(curtainSize == 'large') priceText.innerHTML = '790 грн.';
    if(curtainSize == 'extraLarge') priceText.innerHTML = '990 грн.';
}


document.querySelector(".pop-up_second_card_selection__button").addEventListener("click", function(){
    console.log('Штора-роса', curtainSize, curtainColor);
})