const potionIngredients = {
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


$(function() {
    let Ing1;
    let Ing2;
    let Ing3;
    let prop1;
    let prop2;
    let prop3;

    $('form').on('submit', function(event) {
        event.preventDefault();

        Ing1 = $('input[name=potionIng1]:checked').val();
        console.log(Ing1);
        prop1 = potionIngredients.herbs[Ing1].property;
        console.log(prop1);

        Ing2 = $('input[name=potionIng2]:checked').val();
        console.log(Ing2);
        prop2 = potionIngredients.components[Ing2].property;
        console.log(prop2);

        Ing3 = $('input[name=potionIng3]:checked').val();
        console.log(Ing3);
        prop3 = potionIngredients.finishingTouch[Ing3].property;
        console.log(prop3);

        const resultSentence = `A new and gently glowing potion sits in your hands. It will grant you ${prop1}. You may also experience ${prop2}. Be warned, ${prop3} is a common side effect of ${Ing3}. Enjoy!`;

        $('.resultWords').html(`<p>${resultSentence}</p>`);

    });
});

$(function () {
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
});






