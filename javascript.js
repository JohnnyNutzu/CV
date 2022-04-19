let tl = anime.timeline({
    easing: 'easeOutExpo',
    duration: 750
    });

    tl.add({
        targets: 'section div',
        width: '100%',
        backgroundColor: 'rgb(197, 197, 255)'
    })
    .add({
        targets: 'section div',
        width: '80%',
        backgroundColor: 'rgb(235, 235, 255)'
    })
    .add({
        targets: 'section div',
        width: '100%',
        backgroundColor: 'rgb(235, 235, 255)',
    })
    .add({
        targets: 'section div',
        width: '100%',
        scale: [
            {value: .1, easing: 'easeOutSine', duration: 500},
            {value: 1, easing: 'easeInOutQuad', duration: 1200}
        ],
        delay: anime.stagger(200, {grid: [1, 9], from: 'center'})
    })
    .add({
        targets: 'h1',
        top: '25%',
        opacity: 1,
        duration: 4000,
    }, '-=1600')
    .add({
        targets: 'h2',
        top: '40%',
        opacity: 1,
        scale: [
            {value: 2, easing: 'easeOutSine', duration: 500},
            {value: 1, easing: 'easeInOutQuad', duration: 1200}
        ],
        delay: anime.stagger(200, {grid: [1, 1], from: 'center'})
    })
    .add ({
        targets: '.avatar img',
        opacity: 1,
        scale: [
            {value: .2, easing: 'easeOutSine', duration: 500},
            {value: 1, easing: 'easeInOutQuad', duration: 1200}
        ],
        delay: anime.stagger(200, {grid: [1, 1], from: 'center'})
    })
    .add({
        targets: '.bar',
        bottom: '20%',
        opacity: 1,
        duration: 1000,

    }, '-=1000')
    
    .add({
        targets: 'h3',
        top: '10%',
        opacity: 1,
        duration: 2000,
    }, '-=1600')
    .add({
        targets: 'h4',
        top: '20%',
        opacity: 1,
        duration: 2000,
    }, '-=1600')
    .add({
        targets: 'h5',
        top: '30%',
        opacity: 1,
        duration: 2000,
    }, '-=1600')
    .add({
        targets: 'h6',
        top: '40%',
        opacity: 1,
        duration: 2000,
    }, '-=1600')
    .add({
        targets: '.icons .fa',
        bottom: '5%',
        opacity: 1,
        rotate: '360deg',
        duration: 2000,
    })
    .add({
        targets: '.bar .line-one',
        width: '90%', // -> from '28px' to '100%',
        easing: 'easeInElastic(1, .3)',
        duration: 2000,
    }, '-=1600')
   .add({
        targets: '.bar .line-two',
        width: '85%', // -> from '28px' to '100%',
        easing: 'easeInElastic(1, .3)',
        duration: 2000,
    }, '-=1600')

    .add({
        targets: '.bar .line-three',
        width: '75%', // -> from '28px' to '100%',
        easing: 'easeInElastic(2, .6)',
        duration: 2000,
    }, '-=1600')

    .add({
        targets: '.bar .line-four',
        width: '65%', // -> from '28px' to '100%',
        easing: 'easeInElastic(2, .3)',
        duration: 2000,
    }, '-=1600')
    .add({
        targets: '.bar input',
        opacity: 1,
        round: 1,
        duration: 2000,
    }, '-=1600')
    .add({
        targets: ['section div:nth-child(1)','section div:nth-child(9)'],
        easing: 'easeInOutQuad',
        rotate: '360deg',
        backgroundColor: 'rgb(155, 155, 169)'
    })

    anime({
        targets: '.first img',
        botoom: '30%',
        opacity: 1,
        duration: 2000,
        delay: 5000,
        easing: 'easeInOutQuad',
        rotate: '360deg'
    })
    anime({
        targets: '.second img',
        botoom: '30%',
        opacity: 1,
        duration: 2000,
        delay: 5000,
        easing: 'easeInOutQuad',
        rotate: '360deg'
    })
    anime({
        targets: '.third img',
        botoom: '30%',
        opacity: 1,
        duration: 2000,
        delay: 5000,
        easing: 'easeInOutQuad',
        rotate: '360deg'
    })
    anime({
        targets: '.fourth img',
        botoom: '30%',
        opacity: 1,
        duration: 2000,
        delay: 5000,
        easing: 'easeInOutQuad',
        rotate: '360deg'
    }) 
var show = anime({
    targets: 'img',
    translateX: '20%',
    duration: 2000,
    autoplay: true,
})
document.querySelector('.bar').addEventListener('mouseover', () => {
    show.play();
})
