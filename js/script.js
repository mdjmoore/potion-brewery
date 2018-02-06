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
        },

    components: {
            batwing: {
                property: 'another event'
            },
            ptolemy: {
                property: 'another event'
            },
            lacewing: {
                property: 'another event'
            },
            honeywater: {
                property: 'good event'
            },
            squill: {
                property: 'neutral event'
            },
            tormentil: {
                property: 'bad event'
                
            },  
        },
    finishingTouch: {
            viterol: {
                property: 'bad side effect'
            },
            newtseye: {
                property: 'good side effect'
            },
            scarab: {
                property: 'luck side effect'
            },
            leechleg: {
                property: 'bad side effect'
            },
            briarheart: {
                property: 'good side effect'
            },
            mothwing: {
                property: 'travel'
            },
        }

}

// console.log(potionIngredients.herbs[3]);
// console.log(potionIngredients.herbs.find((el) => el.title === 'foxglove'));


$(function() {
    $('form').on('submit', function(event) {
        event.preventDefault();

        const Ing1 = $('input[name=potionIng1]:checked').val();
        console.log(Ing1);
        const prop1 = potionIngredients.herbs[Ing1].property;
        console.log(prop1);

        const Ing2 = $('input[name=potionIng2]:checked').val();
        console.log(Ing2);
        const prop2 = potionIngredients.components[Ing2].property;
        console.log(prop2);

        const Ing3 = $('input[name=potionIng3]:checked').val();
        console.log(Ing3);
        const prop3 = potionIngredients.finishingTouch[Ing3].property;
        console.log(prop3);

    });
});

console.log(prop1, prop2, prop3);



