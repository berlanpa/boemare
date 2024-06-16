import Menu from './menu.js';
import {gsap} from "../cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min";
import {ScrollTrigger} from "../cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min";
import {Draggable} from "../cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/Draggable.min";

var v = 171796115

const isHoverableDevice = window.matchMedia(
    '(hover: hover) and (pointer: fine)'
)
gsap.registerPlugin(ScrollTrigger, Draggable)
window.lenis = new Lenis({

    duration: 1,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2.5, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
    orientation: "vertical", // vertical, horizontal
    gestureOrientation: "vertical", // vertical, horizontal, both
    smoothWheel: true,
    wheelMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
})


window.lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
    window.lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)

var nextP=true;

var ajaxReady=true;
window.addEventListener('popstate', function(event) {
    setTimeout(function(){
        event.preventDefault();
        event.stopImmediatePropagation();
        document.body.classList.remove('project--to--project');
        //ajaxOut on popstate
        if(ajaxReady){
            ajaxReady=false;
            var history='back';
            var id='';
            var type='';
            var dir= document.location;
            var to=event.state.to;
            var from=window.location.pathname;
            var args=[id,dir,type,from,history,to];
            document.querySelector('.transition__layer div').classList.add('trans--'+to);
            document.querySelector('body').classList.remove('page--in');
            document.querySelector('body').classList.add('page--out');
            document.querySelector('body').classList.add('on--transition');
            setTimeout(function(){
                document.querySelector('body').classList.remove('on--transition');
            },800);
            setTimeout(function(){
                onExitAjax(args);
            });

        }
    },0)
});


//general variables
var proxy = document.createElement("div");
var slideAnimation = gsap.to({}, {});
var animation = gsap.to({}, {});
var slideWidth = 0;
var wrapWidth = 0;
var numAboutSlides=0;
var wrap = true;
var interval=[];
var slideDuration = 0.4;
var progressWrap = gsap.utils.wrap(0, 1);
var isScrolling;
var stopScroll = new Event('stopScroll');

//window load actions
window.addEventListener('load', (event) => {

    window.lenis.scrollTo(0);
    var sttitle= document.querySelector('.title--input').value
    var stto = sttitle.toLowerCase()+'__page';
    var state = { title: sttitle, to: stto };

    window.history.replaceState(state, "", document.location.href)

    console.log(isHoverableDevice.matches);

    if(document.querySelector('.header__navtrigger') != null){
        document.querySelectorAll('.header__navtrigger').forEach(function(item){item.addEventListener('click',function(){
            document.body.classList.toggle('menu--open');
        })
        })
    }

    var logod = document.querySelector('.logo--hidden').getBoundingClientRect().width;
    document.querySelector('.logo--translate').style.transform = "translate3d(-"+logod+"px, 0, 0)";

    document.querySelectorAll('.ajax--link').forEach(function(e){
        e.addEventListener('click', function(event){

            event.preventDefault();
            event.stopImmediatePropagation();
            document.body.classList.remove('project--to--project');
            console.log('click--ajax')
            let url =  e.getAttribute('data-url');
            //start ajax page load
            if(ajaxReady){
                ajaxReady=false;
                var history=e.getAttribute('data-history')||'';
                var id=e.getAttribute('data-id');
                var type=e.getAttribute('data-type');
                var dir=e.getAttribute('data-url');
                var to=e.getAttribute('data-to');
                var from=window.location.pathname;
                var args=[id,dir,type,from,history,to];
                document.querySelector('.transition__layer div').classList.add('trans--'+to);
                document.querySelector('body').classList.remove('page--in');
                document.querySelector('body').classList.add('page--out');
                document.querySelector('body').classList.add('on--transition');
                setTimeout(function(){
                    document.querySelector('body').classList.remove('on--transition');
                },800);
                setTimeout(function(){
                    onExitAjax(args);
                });

            }

        })
    })

    if(document.body.classList.contains("home__page")){
        home();
    }

    if(document.body.classList.contains("about__page")){
        about();
        scrollAbout()
    }

    if(document.body.classList.contains("work__page") && !isMobile()){
        // menu (<nav> element)
        const menuEl = document.querySelector('.project__list');
        new Menu(menuEl);
        window.lenis.stop();
    } else {
        window.lenis.start();
    }

    onenterAjax();
    if(document.body.classList.contains("project__page")){
        hero();
    }


    if(document.querySelector('.color__scheme') != null){
        document.querySelectorAll('.color__scheme').forEach(function(item){item.addEventListener('click',function(){
            document.querySelector('html').classList.toggle('dark--mode');
        })
        })
    }

    document.addEventListener('DOMContentLoaded', function () {
        var videoElements = document.querySelectorAll('video');

        videoElements.forEach(function(videoElement) {
            videoElement.controls = false;

            videoElement.addEventListener('play', function () {
                this.controls = false;
            });

            videoElement.addEventListener('pause', function () {
                this.controls = false;
            });
        });
    });


})//event loaded end

// scroll events
window.addEventListener('scroll', function(e){
    controlVideo();
    animateHide();
    if(document.querySelector('main').classList.contains('project__container') && !touchdevice()){
        nextProyect();
    }
    scrollAbout()
    window.clearTimeout(isScrolling);
    isScrolling = setTimeout(function() {
        window.dispatchEvent(stopScroll);
    }, 150);

});

//window resize events
window.addEventListener('resize', function(e){
    if(document.querySelector('.featured__project') != null){
        let hr= document.querySelector('header').offsetHeight;
        document.querySelector('.featured__project').style.height=window.innerHeight - hr +'px';
    }
    if(document.querySelector('.legal__modal--wrp') != null){
        let hr= document.querySelector('header').offsetHeight;
        document.querySelector('.legal__modal--wrp').style.height=window.innerHeight - hr +'px';
    }
    if(document.querySelector('.column__container') !=null){
        var numSlides = 6;
        let h=document.querySelector('.column__item').offsetHeight * numSlides;
        document.querySelector('.column__container').style.height=h+window.innerHeight+'px';
    }
    var logod = document.querySelector('.logo--hidden').getBoundingClientRect().width;
    document.querySelector('.logo--translate').style.transform = "translate3d(-"+logod+"px, 0, 0)";
})
var homeAnimation;

/**************Page control *******/

//home page

const home = function (){
    let hr= document.querySelector('header').offsetHeight;
    document.querySelector('.featured__project').style.height=window.innerHeight - hr +'px';
    document.querySelectorAll('video').forEach(function(e){e.pause(); e.play()});
    document.querySelector('.home__carousel').classList.add('track--on');

    if(document.querySelector('.column__container') !=null){
        window.lenis.options.infinite=true;
        window.lenis.scrollTo(0);
        document.querySelector('html').classList.add('no--scrollbar');

        var numSlides = 6;
        let h=document.querySelector('.column__item').offsetHeight * numSlides;
        document.querySelector('.column__container').style.height=h+window.innerHeight+'px';
        let options = {};
        let options2 = {};
        options['yPercent'] = i => i * 100 + 10;
        options2['yPercent'] = i => i*100 + 560;
        var col1 = document.querySelectorAll('.column__wrap--0 .column__item');
        var col2 = document.querySelectorAll('.column__wrap--6 .column__item');
        var col3 = document.querySelectorAll('.column__wrap--12 .column__item');
        var col4 = document.querySelectorAll('.column__wrap--18 .column__item');
        col1.forEach(function(e,i){
            let cloned=e.cloneNode(true)
            e.parentNode.append(cloned)
        })
        col2.forEach(function(e,i){
            let cloned=e.cloneNode(true)
            e.parentNode.append(cloned)
        })
        col3.forEach(function(e,i){
            let cloned=e.cloneNode(true)
            e.parentNode.append(cloned)
        })
        col4.forEach(function(e,i){
            let cloned=e.cloneNode(true)
            e.parentNode.append(cloned)
        })

        var col1 = document.querySelectorAll('.column__wrap--0 .column__item');
        var col2 = document.querySelectorAll('.column__wrap--6 .column__item');
        var col3 = document.querySelectorAll('.column__wrap--12 .column__item');
        var col4 = document.querySelectorAll('.column__wrap--18 .column__item');
        gsap.set(col1, options);
        gsap.set(col2, options2);
        gsap.set(col3, options);
        gsap.set(col4, options2);
        function step(timeStamp) {
            if(document.body.classList.contains("home__page")){

                if(window.lenis){
                    document.querySelector('.column__wrap--18').style.transform="translateY(-"+(window.lenis.dimensions.scrollHeight - window.lenis.dimensions.height-window.lenis.actualScroll)*2+"px)"
                    document.querySelector('.column__wrap--6').style.transform="translateY(-"+(window.lenis.dimensions.scrollHeight - window.lenis.dimensions.height-window.lenis.actualScroll)*2+"px)"
                }
                homeAnimation=window.requestAnimationFrame(step);
            }
        }
        homeAnimation=window.requestAnimationFrame(step);

    }
    if(document.querySelector('.column__track') !=null){
        document.querySelectorAll('.column__item').forEach(function(e){

            let cloned=e.cloneNode(true)
            let order=parseInt(cloned.querySelector('.home__project__img').getAttribute('data-order')) + 10;
            cloned.querySelector('.home__project__img').setAttribute('style','--list-index: '+ order);
            e.parentNode.append(cloned)

        })
    }

}
// single project
function hero(){
    const container = document.querySelector('.hero__project__scale');
    const nextContainer = document.querySelector('.next__project__image')
    let touch = touchdevice();
    let dist = (!touch)?window.innerHeight * 0.24:0;
    let fn =(!touch)?'top': (window.innerHeight - window.innerWidth);

    gsap.set(container, {opacity:1, y:0})
    gsap.to(container, {
        scrollTrigger: {
            trigger: container,
            start: "top top",
            end: "bottom top",
            scrub: true, //delay
            anticipatePin: 1,

        },
        opacity: 0.24,
        ease: "none",
        y:window.innerHeight * 0.24
    });
    gsap.set(nextContainer, {
        opacity: 0.24,
        y:dist,
    });
    gsap.to(nextContainer, {
        scrollTrigger: {
            trigger: document.querySelector('main'),
            start: "bottom 80%",
            end: "bottom " + fn,
            scrub: true, //delay
            anticipatePin: 1,
        },
        opacity: 1,
        ease: "none",
        y: 0
    });

    if(!touchdevice() && document.querySelector('.next__project__container') != null){
        document.querySelector('.next__project__container').addEventListener('mouseenter', function(){
            document.querySelector('.project__follow__inner').classList.add('hovered');
        })
        document.querySelector('.next__project__container').addEventListener('mouseleave', function(){
            document.querySelector('.project__follow__inner').classList.remove('hovered');
        })
    }

    if(document.querySelector('.next__project__container')){
        document.querySelector('.next__project__container').addEventListener('click', function(event){
            event.preventDefault();
            event.stopImmediatePropagation();
            window.lenis.scrollTo('end')
        })
    }


}
var mousex=0;
var mousey=0;

//about page
function about(){
    const container = document.querySelector('.image--parallax');

    gsap.set(container, {opacity:1, y:-window.innerHeight*0.24})
    gsap.to(container, {
        scrollTrigger: {
            trigger: document.querySelector('.image__content'),
            start: "top bottom",
            end: "bottom top",
            scrub: true, //delay
            anticipatePin: 1,

        },
        y: window.innerHeight * 0.24,
        ease: "none",
    });
    gsap.to(container, {
        scrollTrigger: {
            trigger: document.querySelector('.image__content'),
            start: "top top",
            end: "bottom top",
            scrub: true, //delay
            anticipatePin: 1,

        },
        opacity:0.4,
        ease: "none",
    });

    var slides = document.querySelectorAll(".about__slide");

    document.querySelectorAll('.dot').forEach(function(e){e.addEventListener('click', function(){
        let nx = e.getAttribute('data-p');
        let ac = document.querySelector('.dot.active').getAttribute('data-p');
        if(!e.classList.contains('active')){
            let dir= -1;
            if(ac >nx){
                dir=1;
            }
            let go =nx-ac;
            animateSlides(dir, go);
        }

    })
    })

    numAboutSlides = slides.length;
    interval = calcInterval(numAboutSlides);
    interval.reverse();
    gsap.set(slides, {
        xPercent: i => i * 100
    });

    var wrapX = gsap.utils.wrap(-100, (numAboutSlides - 1) * 100);

    animation = gsap.to(slides, {
        xPercent: "+=" + (numAboutSlides * 100),
        duration: 1,
        ease: "none",
        paused: true,
        repeat: -1,
        modifiers: {
            xPercent: wrapX
        }

    });

    var draggable = new Draggable(proxy, {
        trigger: ".about__slider",
        onPress: updateDraggable,
        onDrag: updateProgress,
        onDragEnd: (self) =>{
            let direction=(draggable.getDirection() == 'left')?(-1):1;
            animateSlides(direction);
        },
        snap: {
            x: snapX
        }
    });

    resizeSlide(slides[0]);

    if(!touchdevice() && document.querySelector('.about__follow') != null){

        var elems = document.querySelectorAll('.mov__img');
        document.querySelector('.about__follow').addEventListener("mousemove", function(event){

            if(Math.hypot(event.clientX-mousex, event.clientY-mousey)>window.innerWidth*0.05){//longitud total del movimiento
                let actdc=document.querySelector('.mov__img.active');
                let act=(actdc)?document.querySelector('.mov__img.active').getAttribute('data-feat'):1;
                let tot =elems.length;
                let frst=parseInt(elems[0].getAttribute('data-feat'));
                let next = (act != tot-1+frst)?parseInt(act)+1:frst;

                document.querySelectorAll('.mov__img').forEach(function(e){
                    let ac=e.getAttribute('data-feat');
                    e.classList.remove('active');
                    if(ac == next){
                        e.style.top=event.clientY+'px';
                        e.style.left=event.clientX+'px';
                        e.classList.add('active');
                    }
                })
                mousex = event.clientX; // coordenada X Mouse
                mousey = event.clientY; // coordenada Y Mouse
            }
        })

        document.querySelector('.about__follow').addEventListener("mouseleave", function(event){
            document.querySelectorAll('.mov__img').forEach(function(e){
                e.classList.remove('active');
            })
        })

    }

    document.querySelectorAll('.about__nav__item').forEach(function(e){
        e.addEventListener('click', function(){
            if(document.querySelector('.about__nav__item.active')!== null) {
                document.querySelector('.about__nav__item.active').classList.remove('active')
            }
            e.classList.add('active')
            let to = e.getAttribute('data-id');
            document.body.classList.add('scrolling');
            let pos = document.querySelector('.about__main__section[data-id="'+to+'"').getBoundingClientRect().top+window.scrollY;
            window.lenis.scrollTo((pos), { });
            setTimeout(function(){document.body.classList.remove('scrolling')},500)
        })

    })


}

/*** auxfunctions ***/

window.addEventListener('stopScroll', function(){
    scrollAbout();

})


function scrollAbout(){
    if(document.querySelectorAll('.about__main__section') != null){
        document.querySelectorAll('.about__main__section').forEach(function(e){

            if(isElementVisible(e) && e.getBoundingClientRect().top < window.innerHeight/6){

                if(document.querySelector('.about__nav__item.active')!== null) {
                    document.querySelector('.about__nav__item.active').classList.remove('active')
                }
                let to = e.getAttribute('data-id');
                document.querySelector('.about__nav__item[data-id="'+to+'"').classList.add('active')
            }
        })
    }

}

function updateDraggable() {
    slideAnimation.kill();
    this.update();
}

function animateSlides(direction, go=1) {

    go =  parseInt(Math.abs(go));

    slideAnimation.kill();
    var x = snapX(gsap.getProperty(proxy, "x") + direction *go * slideWidth)

    slideAnimation = gsap.to(proxy, {
        x: x,
        duration: slideDuration,
        onUpdate: updateProgress,

    });
}

function updateProgress() {
    let prog= progressWrap(gsap.getProperty(proxy, "x") / wrapWidth);
    animation.progress(prog);
    let p=pointPosition(prog, interval);
    document.querySelector('.dot.active').classList.remove('active');
    document.querySelector('.dot[data-p="'+p+'"').classList.add('active');

}

function calcInterval(numPuntos) {
    if (numPuntos < 2) {
        return;
    }
    const intervalos = [];
    const paso = 1 / numPuntos;

    let inicio = paso/2;
    let fin = inicio + paso;

    for (let i = 0; i < numPuntos; i++) {
        intervalos.push({ inicio, fin });
        inicio = fin;
        fin = (inicio + paso) % 1;
    }
    intervalos[intervalos.length - 1].fin = inicio;

    return intervalos;
}


function pointPosition(valor, interval) {
    for (let i = 0; i < interval.length; i++) {
        if (valor >= interval[i].inicio && valor < interval[i].fin) {
            return i;
        }
    }
    return 0;
}


function snapX(value) {
    let snapped = gsap.utils.snap(slideWidth, value);

    return wrap ? snapped : gsap.utils.clamp(-slideWidth * (numSlides - 1), 0, snapped);
}

function resizeSlide(arg) {

    var norm = (gsap.getProperty(proxy, "x") / wrapWidth) || 0;

    slideWidth = arg.offsetWidth;
    wrapWidth = slideWidth * numAboutSlides;

    wrap || draggable.applyBounds({minX: -slideWidth * (numAboutSlides - 1), maxX: 0});

    gsap.set(proxy, {
        x: norm * wrapWidth
    });

    animateSlides(0);
    slideAnimation.progress(1);
}


/****ajax navigation */

function onenterAjax(){
    if(document.querySelectorAll('.project--ajax--link') != null){
        document.querySelectorAll('.project--ajax--link').forEach(function(e){
            e.addEventListener('click', function(event){

                event.preventDefault();
                event.stopImmediatePropagation();
                console.log('click--ajax')
                let url =  e.getAttribute('data-url');
                //start ajax page load
                if(ajaxReady){
                    ajaxReady=false;
                    var history=e.getAttribute('data-history')||'';
                    var id=e.getAttribute('data-id');
                    var type='';
                    var dir=e.getAttribute('data-url');
                    var to=e.getAttribute('data-to');
                    var from=window.location.pathname;
                    var args=[id,dir,type,from,history,to];
                    document.querySelector('.transition__layer div').classList.add('trans--'+to);
                    document.querySelector('body').classList.add('page--out');
                    document.querySelector('body').classList.remove('page--in');

                    document.querySelector('body').classList.add('on--transition');
                    setTimeout(function(){
                        document.querySelector('body').classList.remove('on--transition');
                    },800)

                    setTimeout(function(){
                        onExitAjax(args);
                    });

                }

            })
        })
    }

    if(document.querySelectorAll('.ajax--link--sec') != null){
        document.querySelectorAll('.ajax--link--sec').forEach(function(e){
            e.addEventListener('click', function(event){

                event.preventDefault();
                event.stopImmediatePropagation();
                console.log('click--ajax')
                let url =  e.getAttribute('data-url');
                //start ajax page load
                if(ajaxReady){
                    ajaxReady=false;
                    var history=e.getAttribute('data-history')||'';
                    var id=e.getAttribute('data-id');
                    var type=e.getAttribute('data-type');
                    var dir=e.getAttribute('data-url');
                    var to=e.getAttribute('data-to');
                    var from=window.location.pathname;
                    var args=[id,dir,type,from,history,to];
                    document.querySelector('.transition__layer div').classList.add('trans--'+to);
                    document.querySelector('body').classList.remove('page--in');
                    document.querySelector('body').classList.add('page--out');
                    document.querySelector('body').classList.add('on--transition');
                    setTimeout(function(){
                        document.querySelector('body').classList.remove('on--transition');
                    },850)
                    setTimeout(function(){
                        onExitAjax(args);
                    });

                }

            })
        })
    }
}

function onExitAjax(args){
    window.cancelAnimationFrame(homeAnimation);
    if(!document.querySelector('body').classList.contains('page--in')){

        ajaxLoad(args);
    }else{
        setTimeout(function(){onExitAjax(args);},50);
    }
}

function ajaxLoad(args){
    var content=document.querySelector('.scroll__container');
    var id= args[0];
    var dir = args[1];
    var type=args[2];
    var from=args[3];
    var hist=args[4];
    var to=args[5];
    console.log('ajaxload Post', type);
    if(!ajaxReady){
        ajaxReady=false;
        var data={
            'id': id,
            'dir': dir,
            'type': type,
            'args':JSON.stringify(args)
        }
        var url= dir + '?ajax=true';

        fetch(url, {
            method: 'post',
            headers: {
                "Content-type": "text/plain"
            },
            body:"text"
        })
            .then(function(response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' + response.status);
                    return;
                }

                // Examine the text in the response
                response.text().then(function(data) {
                    success(data);
                })
            }).catch(function (error) {
            console.log('Request failed', error);
        });

    } //ajax ready end

    function success(response) {

        if(response==0|| response==undefined|| response.length==0){
            //alert('error');
            window.location.href = dir; //load page if ajax failed
        }else{
            const promise = new Promise((resolve, reject) => {
                if(type == 'p2p'){
                    window.lenis.stop();
                    content.innerHTML = '';
                    content.innerHTML=response
                    resolve();
                }else{
                    if (!document.body.classList.contains('on--transition')) {
                        window.lenis.stop();
                        content.innerHTML = '';
                        content.innerHTML=response
                        resolve();
                        observer.disconnect();
                    }else{
                        const observer = new MutationObserver((mutations) => {
                            mutations.forEach((mutation) => {
                                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                                    const bodyClasses = document.body.classList;
                                    if (!bodyClasses.contains('on--transition')) {
                                        window.lenis.stop();
                                        content.innerHTML = '';
                                        content.innerHTML=response
                                        resolve();
                                        observer.disconnect();
                                    }
                                }
                            });
                        });

                        observer.observe(document.body, { attributes: true });
                    }

                }
            })
            promise.then(()=>{
                document.querySelector('html').classList.remove('no--scrollbar');
                document.querySelector('body').classList.remove('open--modal');
                window.lenis.options.infinite=false;
                window.scrollTo(0,0);
                var regex = new RegExp("src=\"(.*?)\"", "g");
                var imgs = [];
                var match;
                var dfds = [];

                if(!document.body.classList.contains('project--to--project')){
                    while ((match = regex.exec(response)) !== null) {
                        if(match[1].length > 0){
                            imgs.push(match[1]);
                        }
                    }

                    imgs.forEach(function(im) {
                        var dfd = new Promise(function(resolve, reject) {
                            var nuevaImagen = new Image();
                            nuevaImagen.onload = function() {
                                resolve();
                            };
                            nuevaImagen.onerror = function() {
                                resolve();
                            };

                            nuevaImagen.src = im;
                        });
                        dfds.push(dfd);
                    });

                    Promise.all(dfds).then(function() {

                        if(args[5]!='none'){


                            if(document.querySelector('.title--input') !=null){
                                let title = document.querySelector('.title--input').value;
                                const state = { title: title, to: to };

                                if(hist != 'back'){
                                    history.pushState(state, null, dir);
                                }

                                if(dir=="/"){
                                    document.title =  'Ang Studio®';
                                }else{
                                    document.title =  title.replace(/(<([^>]+)>)/gi, "") + ' - Ang Studio®';
                                }
                            }

                        }
                        document.querySelector('body').classList.remove('page--out');

                        content.classList.add('ajaxComplete');
                        onAjax(type,from,to);
                    });
                }else{
                    if(args[5]!='none'){


                        if(document.querySelector('.title--input') !=null){
                            let title = document.querySelector('.title--input').value;
                            const state = { title: title, to: to };
                            if(hist != 'back'){
                                history.pushState(state, null, dir);
                            }

                            document.title =  title.replace(/(<([^>]+)>)/gi, "") + ' - Ang Studio®';
                        }
                    }
                    document.querySelector('body').classList.remove('page--out');
                    content.classList.add('ajaxComplete');
                    onAjax(type,from,to);

                }

            })

        }
    }

    function ajaxerror(){
        //alert('ajax error');
        window.location.href = dir;
    }
}

function onAjax(type,from, to){
    document.querySelector('body').classList.remove('home__page');
    document.querySelector('body').classList.remove('work__page');
    document.querySelector('body').classList.remove('contact__page');
    document.querySelector('body').classList.remove('about__page');
    document.querySelector('body').classList.remove('project__page');
    document.querySelector('body').classList.remove('not-found__page');
    if(to.includes('work') && !isMobile()){    //load menu effect if is works
        const menuEl = document.querySelector('.project__list');
        new Menu(menuEl);
    }

    if(to.includes('project')){
        hero();
    }

    if(to.includes('about')){
        about();
    }

    ajaxReady = true;
    nextP = true;
    window.lenis.resize();
    window.lenis.start();
    window.lenis.scrollTo(0);

    ajaxfin(to);
    onenterAjax()
}

function ajaxfin(to){ //final ajax function
    console.log('ajaxfin', to)
    if(!document.body.classList.contains("on--transition")){
        document.querySelector('body').classList.add(to);
        if(document.body.classList.contains("home__page")){
            home();
            setTimeout(function() {
                document.querySelector('body').classList.add('page--in')
            },10);
        }else{
            document.querySelector('body').classList.add('page--in')
        }
        console.log('remove');
        setTimeout(function(){
            document.querySelector('.transition__layer div').removeAttribute("class");
        },50);
    }else{
        setTimeout(function(){
            ajaxfin(to)
        },50)
    }
}


/*************MODALS *****/

window.openModal = function(arg){
    document.querySelector('body').classList.add('open--modal');
    document.querySelector('.featured__project__inner').scrollTo(0, 0);
    var projects = JSON.parse(document.getElementById('projects').textContent);
    var project=[];
    for (var i = 0; i < projects.length; i++) {
        if (projects[i].id === arg) {
            project = projects[i];
        }
    }

    document.querySelector('.title--js').innerHTML=project['title']['rendered'];
    document.querySelector('.excerpt--js').innerHTML=project['excerpt']['rendered'];
    document.querySelector('.subtitle--js').innerHTML=project['project_subtitle'];
    if(project['second__image'] !=''){
        document.querySelector('.img--js').setAttribute('src', project['second__image']['url']);
    }else{
        document.querySelector('.img--js').setAttribute('src', project['_embedded']['wp:featuredmedia']['media_details']['sizes']['full']['source_url']);
    }

    if(project['link'] != null && project['link'].length > 0){
        let url =project['link'].replace(window.location.origin, '');
        document.querySelector('.link--js').classList.remove('none');
        document.querySelector('.link--js a').setAttribute('href', project['link'])
        document.querySelector('.link--js a').setAttribute('data-url', url)
        document.querySelector('.link--js a').setAttribute('data-to', "project__page")
    }else{
        document.querySelector('.link--js').classList.add('none');
    }
}

window.closeModal = function(){
    document.querySelector('body').classList.remove('open--modal');

}

window.openLegalModal = function(){
    document.querySelector('body').classList.add('open--modal');
    let hr= document.querySelector('header').offsetHeight;
    document.querySelector('.legal__modal--wrp').style.height=window.innerHeight - hr +'px';
    document.querySelector('.modal__inner').scrollTo(0, 0);
}

/*************** HELPERS **/


function animateHide(){
    var h=window.innerHeight;
    var w=window.innerWidth;
    var dist = (w > 681)?200:80;
    document.querySelectorAll('.hide').forEach(function(el,i){
        if(isElementVisible(el, dist)){
            if(el.classList.contains('hide')){el.classList.remove('hide');}
        }
    });

}

function isElementVisible(el, dist) {
    var rect     = el.getBoundingClientRect(),
        vWidth   = window.innerWidth || doc.documentElement.clientWidth,
        vHeight  = window.innerHeight || doc.documentElement.clientHeight,
        topHe=(rect.height > vHeight)?rect.height:vHeight;
    // Return false if it's not in the viewport
    if (rect.right < 0 || rect.bottom < 0 || rect.left > vWidth || rect.top > vHeight-dist) {
        return false;
    }
    // Return true if any of its four corners are visible
    return true;
}

function controlVideo(){
    document.querySelectorAll('.video--item').forEach(function(e,i){
        if(e !=null && isElementVisible(e, 100)){
            if(e!=null){
                e.play();

            }
        }else{
            if(e!=null){
                e.pause();

            }
        }
    })
}


function touchdevice(){
    var isTouchDevice = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0))

    if (isTouchDevice) {
        return true;
    } else {
        return false;
    }
}

function isMobileBrowse(){
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];

    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
}

function isMobile(){
    if(isMobileBrowse() && touchdevice()){
        return true;
    }else{
        return false;
    }
}


function nextProyect(){

    if(nextP){

        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight-8)
        {
            window.lenis.scrollTo('end')
            window.lenis.stop();
            if(isMobile()){
                document.body.classList.remove('project--to--project');
            }else{
                document.body.classList.add('project--to--project');
            }
            nextP=false;
            let next =document.querySelector('.next__project');
            if(ajaxReady){
                ajaxReady=false;
                var history=next.getAttribute('data-history')||'';
                var id=next.getAttribute('data-id');
                var type='p2p';
                var dir=next.getAttribute('data-url');
                var to=next.getAttribute('data-to');
                var from=window.location.pathname;
                var args=[id,dir,type,from,history,to];
                document.querySelector('body').classList.remove('page--in');
                document.querySelector('body').classList.add('page--out');
                setTimeout(function(){
                    onExitAjax(args);

                });
                ScrollTrigger.refresh() ;

            }

        }

    }
}
