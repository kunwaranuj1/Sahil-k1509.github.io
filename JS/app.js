$(document).ready(function(){
    var responseNavActive = false;
    var navham = document.getElementById("nav-ham");
    var navbar = document.getElementById("nav-bar");

    $("#nav-ham").click(function(){
        if (!responseNavActive){
            responseNavActive = true;

            navham.classList.add("nav-ham-active");
            navbar.classList.add("nav-bar-active");
        } else{
            responseNavActive = false;

            navham.classList.remove("nav-ham-active");
            navbar.classList.remove("nav-bar-active");
        }
    });

    var navlinks = document.getElementsByClassName("nav-link");
    for(var i=0; i<navlinks.length; i++){
        navlinks[i].addEventListener('click', function(){
            responseNavActive = false;

            navham.classList.remove("nav-ham-active");
            navbar.classList.remove("nav-bar-active");
        });
    }


    var langs = document.getElementById('skills-l');
    var webd = document.getElementById('skills-w');
    var ml = document.getElementById('skills-m');
    var tech = document.getElementById('skills-t');

    var langsbtn = document.getElementById('lang');
    var webdbtn = document.getElementById('webd');
    var mlbtn = document.getElementById('ml');
    var techbtn = document.getElementById('tech');

    $('#lang').click(function(){   
        langs.classList.add('active');
        langsbtn.classList.add('active');

        webd.classList.remove('active');
        ml.classList.remove('active');
        tech.classList.remove('active');

        webdbtn.classList.remove('active');
        mlbtn.classList.remove('active');
        techbtn.classList.remove('active');
    });

    $('#webd').click(function(){   
        webd.classList.add('active');
        webdbtn.classList.add('active');

        langs.classList.remove('active');
        ml.classList.remove('active');
        tech.classList.remove('active');

        langsbtn.classList.remove('active');
        mlbtn.classList.remove('active');
        techbtn.classList.remove('active');
    });

    $('#ml').click(function(){   
        ml.classList.add('active');
        mlbtn.classList.add('active');

        langs.classList.remove('active');
        tech.classList.remove('active');
        webd.classList.remove('active');

        langsbtn.classList.remove('active');
        techbtn.classList.remove('active');
        webdbtn.classList.remove('active');
    });

    $('#tech').click(function(){   
        tech.classList.add('active');
        techbtn.classList.add('active');

        langs.classList.remove('active');
        webd.classList.remove('active');
        ml.classList.remove('active');

        langsbtn.classList.remove('active');
        webdbtn.classList.remove('active');
        mlbtn.classList.remove('active');
    });


    var entriesL = [  {target: '_top',url: '#about', label: 'Javascript'},  {target: '_top',url: '#about', label: 'Python'},  {target: '_top',url: '#about', label: 'PHP'},  {target: '_top',url: '#about', label: 'Java'},  {target: '_top',url: '#about', label: 'Kotlin'},  {target: '_top',url: '#about', label: 'Julia'},  {target: '_top',url: '#about', label: 'Go'},  {target: '_top',url: '#about', label: 'SQL'},  {target: '_top',url: '#about', label: 'API'}, {target: '_top',url: '#about', label: 'DBMS'},  {target: '_top',url: '#about', label: 'File Handling'},  {target: '_top',url: '#about', label: 'Object Oriented Programming'},   {target: '_top',url: '#about', label: 'C++'},  {target: '_top',url: '#about', label: 'C'},  {target: '_top',url: '#about', label: 'Data Structures'},  {target: '_top',url: '#about', label: 'Algorithms'},  {target: '_top',url: '#about', label: 'Batch Scripting'},  {target: '_top',url: '#about', label: 'JSON'}, ];
    var entriesW = [  {target: '_top',url: '#about', label: 'HTML'},  {target: '_top',url: '#about', label: 'CSS'},  {target: '_top',url: '#about', label: 'SASS'},  {target: '_top',url: '#about', label: 'Javascript'},  {target: '_top',url: '#about', label: 'JQuery'},  {target: '_top',url: '#about', label: 'PHP'},  {target: '_top',url: '#about', label: 'Ajax'},  {target: '_top',url: '#about', label: 'ReactJS'},  {target: '_top',url: '#about', label: 'NodeJS'},  {target: '_top',url: '#about', label: 'Bootstrap'}, {target: '_top',url: '#about', label: 'Go'},  {target: '_top',url: '#about', label: 'Django'},  {target: '_top',url: '#about', label: 'MySql'},  {target: '_top',url: '#about', label: 'PostgreSQL'},  {target: '_top',url: '#about', label: 'MongoDB'},  {target: '_top',url: '#about', label: 'MS SQL Server'},  {target: '_top',url: '#about', label: 'Flask'},  {target: '_top',url: '#about', label: 'Responsive Design'},  {target: '_top',url: '#about', label: 'MVC model'},  {target: '_top',url: '#about', label: 'DOM'},];
    var entriesM = [  {target: '_top',url: '#about', label: 'Regression'},  {target: '_top',url: '#about', label: 'Classification'},  {target: '_top',url: '#about', label: 'Tensorflow'},  {target: '_top',url: '#about', label: 'Scikit Learn'},  {target: '_top',url: '#about', label: 'Numpy'},  {target: '_top',url: '#about', label: 'Pandas'},  {target: '_top',url: '#about', label: 'Matplotlib'},  {target: '_top',url: '#about', label: 'Seaborn'},  {target: '_top',url: '#about', label: 'Convulational NN'}, {target: '_top',url: '#about', label: 'Hyperparameter tuning'},  ];
    var entriesT = [  {target: '_top',url: '#about', label: 'Command Prompt'},  {target: '_top',url: '#about', label: 'Powershell'},  {target: '_top',url: '#about', label: 'Git Bash'},  {target: '_top',url: '#about', label: 'Github'},  {target: '_top',url: '#about', label: 'Microsoft Teams'},  {target: '_top',url: '#about', label: 'Pycharm'},  {target: '_top',url: '#about', label: 'Visual Studio Code'},  {target: '_top',url: '#about', label: 'Jupyter Notebook'},  {target: '_top',url: '#about', label: 'Anaconda'}, {target: '_top',url: '#about', label: 'Xampp server'},  {target: '_top',url: '#about', label: 'SQL workbench'},  {target: '_top',url: '#about', label: 'Intellij IDEA'},  {target: '_top',url: '#about', label: 'Eclipse'},  {target: '_top',url: '#about', label: 'PHPStorm'},  {target: '_top',url: '#about', label: 'Notepad++'},  {target: '_top',url: '#about', label: 'Atom'},  {target: '_top',url: '#about', label: 'Sublime'},  {target: '_top',url: '#about', label: 'Codeblocks'},  {target: '_top',url: '#about', label: 'Spyder'}, ];
    
    var settingsL =  { entries: entriesL, width: '100%',  height: '100%', radius: '80%', radiusMin: 75, bgDraw: true, bgColor: 'rgba(19, 19, 19, 0.979)', opacityOver: 1.00, opacityOut: 0.05, opacitySpeed: 6, fov: 800, speed: 0.4, fontFamily: 'merienda one, Courier, sans-serif', fontsize: '1.1rem', fontColor: 'rgb(0, 204, 153)', fontWeight: '600', fontToUppercase: true, fontStyle: 'normal', fontStretch: 'normal' };
    var settingsW =  { entries: entriesW, width: '100%',  height: '100%', radius: '80%', radiusMin: 75, bgDraw: true, bgColor: 'rgba(19, 19, 19, 0.979)', opacityOver: 1.00, opacityOut: 0.05, opacitySpeed: 6, fov: 800, speed: 0.4, fontFamily: 'merienda one, Courier, sans-serif', fontsize: '1.1rem', fontColor: 'rgb(0, 204, 153)', fontWeight: '600', fontToUppercase: true, fontStyle: 'normal', fontStretch: 'normal' };
    var settingsM =  { entries: entriesM, width: '100%',  height: '100%', radius: '80%', radiusMin: 75, bgDraw: true, bgColor: 'rgba(19, 19, 19, 0.979)', opacityOver: 1.00, opacityOut: 0.05, opacitySpeed: 6, fov: 800, speed: 0.4, fontFamily: 'merienda one, Courier, sans-serif', fontsize: '1.1rem', fontColor: 'rgb(0, 204, 153)', fontWeight: '600', fontToUppercase: true, fontStyle: 'normal', fontStretch: 'normal' };
    var settingsT =  { entries: entriesT, width: '100%',  height: '100%', radius: '80%', radiusMin: 75, bgDraw: true, bgColor: 'rgba(19, 19, 19, 0.979)', opacityOver: 1.00, opacityOut: 0.05, opacitySpeed: 6, fov: 800, speed: 0.4, fontFamily: 'merienda one, Courier, sans-serif', fontsize: '1.1rem', fontColor: 'rgb(0, 204, 153)', fontWeight: '600', fontToUppercase: true, fontStyle: 'normal', fontStretch: 'normal' };

    $("#skills-l").svg3DTagCloud(settingsL);
    $("#skills-w").svg3DTagCloud(settingsW);
    $("#skills-m").svg3DTagCloud(settingsM);
    $("#skills-t").svg3DTagCloud(settingsT);


    $('#cont-name').focus(function(){
        $('#name-lab').addClass('active');
    });

    $('#cont-name').focusout(function(){
        $('#name-lab').removeClass('active');
    });


    $('#cont-email').focus(function(){
        $('#em-lab').addClass('active');
    });

    $('#cont-email').focusout(function(){
        $('#em-lab').removeClass('active');
    });


    $('#cont-msg').focus(function(){
        $('#msg-lab').addClass('active');
    });

    $('#cont-msg').focusout(function(){
        $('#msg-lab').removeClass('active');
    });


    var TxtRotate = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 1000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };
    
    
    TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
    
    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
    
    var that = this;
    var delta = 300 - Math.random() * 100;
    
    if (this.isDeleting) { delta /= 2; }
    
    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }
    
    setTimeout(function() {
        that.tick();
    }, delta);
    };
    
    window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-rotate');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666; animation: blink 2s ease infinite; }";
    document.body.appendChild(css);
    };

});