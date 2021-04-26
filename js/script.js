$(document).ready(function(){
    $(window).on('scroll',function(){
        var scrollTop = $(window).scrollTop();

        scroll = scrollTop;

        if (scrollTop >= 50){
            $(".sticky").addClass("addsticky");
        }
    });

    var count = 0;
    var scroll = 0;

    function hamburger(){
        if (count === 0){
            count = 1;
        }else if(count === 1){
            count = 0;
        }
        
        if(count === 0){
            if(scroll < 50){
                $(".sticky").removeClass("addsticky");
            }
        }
    }
    $(document.getElementById('hamburgerId')).on('click',function(){
            $(".sticky").addClass("addsticky");
            hamburger();
    });

    $(document.getElementById('navbar-brand-nameId')).on('click',function(){
        $(".sticky").addClass("addsticky");
});

    var typedText = new Typed('.element',{
        strings: ['NOT Your Typical Developer', 'a Web Developer','a Mobile Developer','a Freelancer', 'a Designer','a Full Stack Developer'],
        smartBackground: true,
        typeSpeed: 100,
        backSpeed: 100,
        loop: false,
        startDelay:9000,
    });

    var about_p1 = new Typed('.first-paragraph',{
        strings: ['','A Technology enthusiast with an innovative and entrepreneurial spirit. Well-organised person, problem solver, a multi-tasker. a fan of MMA, wrestling and tv series.'],
        smartBackground: true,
        typeSpeed: 5,
        backSpeed: 0,
        loop: false,
        startDelay:100,
    });

    var about_p2 = new Typed('.second-paragraph',{
        strings: ['',' I am a strong believer that there are endless possibilities to what can be achieved with technology. I spend most of my days collaborating with people to solve problems because I believe that teamwork makes dream work. I believe in living outside my comfort zone because it helps me expand my knowledge.'],
        smartBackground: true,
        typeSpeed: 5,
        backSpeed: 0,
        loop: false,
        startDelay:3500,
    });

    var intro = new Typed('.intro',{
        strings: ['','Not your typical software developer, from web to mobile, iOS to android, front-end to back-end I’m your guy, if you want the best man for the job contact me or download my CV below.'],
        smartBackground: true,
        typeSpeed: 25,
        backSpeed: 0,
        loop: false,
        startDelay:100,
    });

    var progress = document.querySelectorAll('.progress-bar');
    progress[0].setAttribute("style","width:95%;transition:1s all");
    progress[1].setAttribute("style","width:92%;transition:1.5s all");
    progress[2].setAttribute("style","width:90%;transition:2s all");
    progress[3].setAttribute("style","width:83%;transition:2.5s all");
    progress[4].setAttribute("style","width:85%;transition:3.0s all");
    progress[5].setAttribute("style","width:97%;transition:3.5s all");
    progress[6].setAttribute("style","width:75%;transition:4.0s all");
});

var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
          status.classList.add('success')
          status.innerHTML = "Thanks!";
        form.reset()
      }).catch(error => {
        status.classList.add('error')
        status.innerHTML = "Oops! There was a problem submitting your form"
      });
    }
    form.addEventListener("submit", handleSubmit)