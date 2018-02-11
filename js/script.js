const potionApp = {}

potionApp.potionIngredients = {
    herbs: {
        
            sage: {
                property: 'a clear head'
            },
            foxglove: {
                property: 'a fresh passion'
            },
            yarrow: {
                property: 'an easing of pain'
            },
            bloodroot: {
                property: 'a new outlook'
            },
            calendula: {
                property: 'unexpected joy'
            },  
            elderberries: {
                property: 'a fistful of pride'
            }   
        },

    components: {
            batwing: {
                property: 'uncontained laughter'
            },
            ptolemy: {
                property: 'a sudden urge to jog'
            },
            lacewing: {
                property: 'wingless flight'
            },
            honeywater: {
                property: 'temporary invisibility'
            },
            squill: {
                property: 'a sudden great skill at dancing'
            },
            tormentil: {
                property: 'an outbreak of boils'
                
            },  
        },
    finishingTouch: {
            vitriol: {
                property: 'bouts of violent rage'
            },
            newtseye: {
                property: 'x-ray vision'
            },
            scarab: {
                property: 'an increase in luck'
            },
            leechleg: {
                property: 'sudden bleeding from the eyes'
            },
            briarheart: {
                property: 'great swells of bravery'
            },
            mothwing: {
                property: 'the sudden urge to travel'
            },
        }

}

//this makes the modal show up
potionApp.toggleModal = function(){
    $('.brewIt').click(function () {
        $('.potionResult').fadeToggle();
    })
    $(document).mouseup(function (e) {
        var container = $('.potionResult');
        if (!container.is(e.target)
            && container.has(e.target).length === 0) {
            container.fadeOut();
        }
    });
}

potionApp.startAgain = function() {
    $('.again').click(function (){
        // container.fadeOut();
        location.reload();
    });
}

potionApp.displayData = function(prop1, prop2, prop3, prop4) {
    potionApp.resultSentence = `A new and gently glowing potion sits in your hands. It will grant you ${prop1}. You may also experience ${prop2}. Be warned, ${prop3} is a common side effect of ${prop4}. Enjoy!`;

    $('.resultWords').html(`<p>${potionApp.resultSentence}</p>`);
}
//if you click anything outside of the modal, modal disappears


//refresh the page on 'brew again' button 

potionApp.handleSubmit = function() {

    $('form').on('submit', function (event) {
        event.preventDefault();
        
        const Ing1 = $('input[name=potionIng1]:checked').val();
        const prop1 = potionApp.potionIngredients.herbs[Ing1].property;
        
        const Ing2 = $('input[name=potionIng2]:checked').val();
        const prop2 = potionApp.potionIngredients.components[Ing2].property;
        
        const Ing3 = $('input[name=potionIng3]:checked').val();
        const prop3 = potionApp.potionIngredients.finishingTouch[Ing3].property;
        
        potionApp.displayData(prop1, prop2, prop3, Ing1);
          
    });
}

potionApp.init = function() {
    potionApp.toggleModal();
    potionApp.startAgain();
    potionApp.handleSubmit();
}
$(function() {
    potionApp.init();
    // let dragCheck = false;

    $('.draggable').draggable({
        revert: 'invalid',
        drag: function() {
            $(this).addClass('.fixed');
        }
    });
    
    $('.droppable').droppable({
    });
    
    // $('.draggable').on('click', function(event) {
    //     $('.draggable').addClass('.fixed');

    // });
});
   

//         drop: function(e, option) {
//             dragCheck = true;

//             console.log(option.draggable[0].dataset.option);
//             const herbs = option.draggable[0].dataset.category;

            
//         }

//     if(dragCheck ===  true) {
//         option.draggable[0] = attr(':checked')
//     }
 

// potionApp.dragCheck = function() {
//     $('.draggable').on('drag', function(){
//         $(this).html(".attr('checked')");
//     })
// }

// potionApp.dragCheck();
// $('.draggable').on(dragend) {
//     $('.draggable').html('.attr(`checked`)');
// }













