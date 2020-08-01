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

    
    rval = document.getElementById('r-set');
    gval = document.getElementById('g-set');
    bval = document.getElementById('b-set');

    var color = `rgb(${rval.value}, ${gval.value}, ${bval.value})`;

    var settingsL =  { entries: entriesL, width: '100%',  height: '100%', radius: '80%', radiusMin: 75, bgDraw: true, bgColor: 'rgba(19, 19, 19, 0.979)', opacityOver: 1.00, opacityOut: 0.05, opacitySpeed: 6, fov: 800, speed: 0.4, fontFamily: 'merienda one, Courier, sans-serif', fontsize: '1.1rem', fontColor: color, fontWeight: '600', fontToUppercase: true, fontStyle: 'normal', fontStretch: 'normal' };
    var settingsW =  { entries: entriesW, width: '100%',  height: '100%', radius: '80%', radiusMin: 75, bgDraw: true, bgColor: 'rgba(19, 19, 19, 0.979)', opacityOver: 1.00, opacityOut: 0.05, opacitySpeed: 6, fov: 800, speed: 0.4, fontFamily: 'merienda one, Courier, sans-serif', fontsize: '1.1rem', fontColor: color, fontWeight: '600', fontToUppercase: true, fontStyle: 'normal', fontStretch: 'normal' };
    var settingsM =  { entries: entriesM, width: '100%',  height: '100%', radius: '80%', radiusMin: 75, bgDraw: true, bgColor: 'rgba(19, 19, 19, 0.979)', opacityOver: 1.00, opacityOut: 0.05, opacitySpeed: 6, fov: 800, speed: 0.4, fontFamily: 'merienda one, Courier, sans-serif', fontsize: '1.1rem', fontColor: color, fontWeight: '600', fontToUppercase: true, fontStyle: 'normal', fontStretch: 'normal' };
    var settingsT =  { entries: entriesT, width: '100%',  height: '100%', radius: '80%', radiusMin: 75, bgDraw: true, bgColor: 'rgba(19, 19, 19, 0.979)', opacityOver: 1.00, opacityOut: 0.05, opacitySpeed: 6, fov: 800, speed: 0.4, fontFamily: 'merienda one, Courier, sans-serif', fontsize: '1.1rem', fontColor: color, fontWeight: '600', fontToUppercase: true, fontStyle: 'normal', fontStretch: 'normal' };

    $("#skills-l").svg3DTagCloud(settingsL);
    $("#skills-w").svg3DTagCloud(settingsW);
    $("#skills-m").svg3DTagCloud(settingsM);
    $("#skills-t").svg3DTagCloud(settingsT);

    var skillcont = document.getElementById('skills-cont');

    rval.oninput = function(){
        color = `rgb(${this.value}, ${gval.value}, ${bval.value})`;
        
        settingsL =  { entries: entriesL, width: '100%',  height: '100%', radius: '80%', radiusMin: 75, bgDraw: true, bgColor: 'rgba(19, 19, 19, 0.979)', opacityOver: 1.00, opacityOut: 0.05, opacitySpeed: 6, fov: 800, speed: 0.4, fontFamily: 'merienda one, Courier, sans-serif', fontsize: '1.1rem', fontColor: color, fontWeight: '600', fontToUppercase: true, fontStyle: 'normal', fontStretch: 'normal' };
        settingsW =  { entries: entriesW, width: '100%',  height: '100%', radius: '80%', radiusMin: 75, bgDraw: true, bgColor: 'rgba(19, 19, 19, 0.979)', opacityOver: 1.00, opacityOut: 0.05, opacitySpeed: 6, fov: 800, speed: 0.4, fontFamily: 'merienda one, Courier, sans-serif', fontsize: '1.1rem', fontColor: color, fontWeight: '600', fontToUppercase: true, fontStyle: 'normal', fontStretch: 'normal' };
        settingsM =  { entries: entriesM, width: '100%',  height: '100%', radius: '80%', radiusMin: 75, bgDraw: true, bgColor: 'rgba(19, 19, 19, 0.979)', opacityOver: 1.00, opacityOut: 0.05, opacitySpeed: 6, fov: 800, speed: 0.4, fontFamily: 'merienda one, Courier, sans-serif', fontsize: '1.1rem', fontColor: color, fontWeight: '600', fontToUppercase: true, fontStyle: 'normal', fontStretch: 'normal' };
        settingsT =  { entries: entriesT, width: '100%',  height: '100%', radius: '80%', radiusMin: 75, bgDraw: true, bgColor: 'rgba(19, 19, 19, 0.979)', opacityOver: 1.00, opacityOut: 0.05, opacitySpeed: 6, fov: 800, speed: 0.4, fontFamily: 'merienda one, Courier, sans-serif', fontsize: '1.1rem', fontColor: color, fontWeight: '600', fontToUppercase: true, fontStyle: 'normal', fontStretch: 'normal' };

        langs.innerHtml = '';
        webd.innerHtml = '';
        ml.innerHtml = '';
        tech.innerHtml = '';

        langs.parentNode.removeChild(langs);
        webd.parentNode.removeChild(webd);
        ml.parentNode.removeChild(ml);
        tech.parentNode.removeChild(tech);

        langsbtn.classList.add('active');
        webdbtn.classList.remove('active');
        mlbtn.classList.remove('active');
        techbtn.classList.remove('active');

        langs = document.createElement('div'); langs.setAttribute('id', 'skills-l'); langs.setAttribute('class', 'skills-cloud active');
        webd = document.createElement('div'); webd.setAttribute('id', 'skills-w'); webd.setAttribute('class', 'skills-cloud');
        ml = document.createElement('div'); ml.setAttribute('id', 'skills-m'); ml.setAttribute('class', 'skills-cloud');
        tech = document.createElement('div'); tech.setAttribute('id', 'skills-t'); tech.setAttribute('class', 'skills-cloud');

        skillcont.appendChild(langs);
        skillcont.appendChild(webd);
        skillcont.appendChild(ml);
        skillcont.appendChild(tech);

        
        
        $("#skills-l").svg3DTagCloud(settingsL);
        $("#skills-w").svg3DTagCloud(settingsW);
        $("#skills-m").svg3DTagCloud(settingsM);
        $("#skills-t").svg3DTagCloud(settingsT);
        
    }

    gval.oninput = function(){
        color = `rgb(${rval.value}, ${this.value}, ${bval.value})`;
            
        settingsL =  { entries: entriesL, width: '100%',  height: '100%', radius: '80%', radiusMin: 75, bgDraw: true, bgColor: 'rgba(19, 19, 19, 0.979)', opacityOver: 1.00, opacityOut: 0.05, opacitySpeed: 6, fov: 800, speed: 0.4, fontFamily: 'merienda one, Courier, sans-serif', fontsize: '1.1rem', fontColor: color, fontWeight: '600', fontToUppercase: true, fontStyle: 'normal', fontStretch: 'normal' };
        settingsW =  { entries: entriesW, width: '100%',  height: '100%', radius: '80%', radiusMin: 75, bgDraw: true, bgColor: 'rgba(19, 19, 19, 0.979)', opacityOver: 1.00, opacityOut: 0.05, opacitySpeed: 6, fov: 800, speed: 0.4, fontFamily: 'merienda one, Courier, sans-serif', fontsize: '1.1rem', fontColor: color, fontWeight: '600', fontToUppercase: true, fontStyle: 'normal', fontStretch: 'normal' };
        settingsM =  { entries: entriesM, width: '100%',  height: '100%', radius: '80%', radiusMin: 75, bgDraw: true, bgColor: 'rgba(19, 19, 19, 0.979)', opacityOver: 1.00, opacityOut: 0.05, opacitySpeed: 6, fov: 800, speed: 0.4, fontFamily: 'merienda one, Courier, sans-serif', fontsize: '1.1rem', fontColor: color, fontWeight: '600', fontToUppercase: true, fontStyle: 'normal', fontStretch: 'normal' };
        settingsT =  { entries: entriesT, width: '100%',  height: '100%', radius: '80%', radiusMin: 75, bgDraw: true, bgColor: 'rgba(19, 19, 19, 0.979)', opacityOver: 1.00, opacityOut: 0.05, opacitySpeed: 6, fov: 800, speed: 0.4, fontFamily: 'merienda one, Courier, sans-serif', fontsize: '1.1rem', fontColor: color, fontWeight: '600', fontToUppercase: true, fontStyle: 'normal', fontStretch: 'normal' };
        
        langs.innerHtml = '';
        webd.innerHtml = '';
        ml.innerHtml = '';
        tech.innerHtml = '';

        langs.parentNode.removeChild(langs);
        webd.parentNode.removeChild(webd);
        ml.parentNode.removeChild(ml);
        tech.parentNode.removeChild(tech);

        langsbtn.classList.add('active');
        webdbtn.classList.remove('active');
        mlbtn.classList.remove('active');
        techbtn.classList.remove('active');

        langs = document.createElement('div'); langs.setAttribute('id', 'skills-l'); langs.setAttribute('class', 'skills-cloud active');
        webd = document.createElement('div'); webd.setAttribute('id', 'skills-w'); webd.setAttribute('class', 'skills-cloud');
        ml = document.createElement('div'); ml.setAttribute('id', 'skills-m'); ml.setAttribute('class', 'skills-cloud');
        tech = document.createElement('div'); tech.setAttribute('id', 'skills-t'); tech.setAttribute('class', 'skills-cloud');

        skillcont.appendChild(langs);
        skillcont.appendChild(webd);
        skillcont.appendChild(ml);
        skillcont.appendChild(tech);

        
        $("#skills-l").svg3DTagCloud(settingsL);
        $("#skills-w").svg3DTagCloud(settingsW);
        $("#skills-m").svg3DTagCloud(settingsM);
        $("#skills-t").svg3DTagCloud(settingsT);
    }

    bval.oninput = function(){
        color = `rgb(${rval.value}, ${gval.value}, ${this.value})`;
        
        settingsL =  { entries: entriesL, width: '100%',  height: '100%', radius: '80%', radiusMin: 75, bgDraw: true, bgColor: 'rgba(19, 19, 19, 0.979)', opacityOver: 1.00, opacityOut: 0.05, opacitySpeed: 6, fov: 800, speed: 0.4, fontFamily: 'merienda one, Courier, sans-serif', fontsize: '1.1rem', fontColor: color, fontWeight: '600', fontToUppercase: true, fontStyle: 'normal', fontStretch: 'normal' };
        settingsW =  { entries: entriesW, width: '100%',  height: '100%', radius: '80%', radiusMin: 75, bgDraw: true, bgColor: 'rgba(19, 19, 19, 0.979)', opacityOver: 1.00, opacityOut: 0.05, opacitySpeed: 6, fov: 800, speed: 0.4, fontFamily: 'merienda one, Courier, sans-serif', fontsize: '1.1rem', fontColor: color, fontWeight: '600', fontToUppercase: true, fontStyle: 'normal', fontStretch: 'normal' };
        settingsM =  { entries: entriesM, width: '100%',  height: '100%', radius: '80%', radiusMin: 75, bgDraw: true, bgColor: 'rgba(19, 19, 19, 0.979)', opacityOver: 1.00, opacityOut: 0.05, opacitySpeed: 6, fov: 800, speed: 0.4, fontFamily: 'merienda one, Courier, sans-serif', fontsize: '1.1rem', fontColor: color, fontWeight: '600', fontToUppercase: true, fontStyle: 'normal', fontStretch: 'normal' };
        settingsT =  { entries: entriesT, width: '100%',  height: '100%', radius: '80%', radiusMin: 75, bgDraw: true, bgColor: 'rgba(19, 19, 19, 0.979)', opacityOver: 1.00, opacityOut: 0.05, opacitySpeed: 6, fov: 800, speed: 0.4, fontFamily: 'merienda one, Courier, sans-serif', fontsize: '1.1rem', fontColor: color, fontWeight: '600', fontToUppercase: true, fontStyle: 'normal', fontStretch: 'normal' };

        langs.innerHtml = '';
        webd.innerHtml = '';
        ml.innerHtml = '';
        tech.innerHtml = '';

        langs.parentNode.removeChild(langs);
        webd.parentNode.removeChild(webd);
        ml.parentNode.removeChild(ml);
        tech.parentNode.removeChild(tech);

        langsbtn.classList.add('active');
        webdbtn.classList.remove('active');
        mlbtn.classList.remove('active');
        techbtn.classList.remove('active');

        langs = document.createElement('div'); langs.setAttribute('id', 'skills-l'); langs.setAttribute('class', 'skills-cloud active');
        webd = document.createElement('div'); webd.setAttribute('id', 'skills-w'); webd.setAttribute('class', 'skills-cloud');
        ml = document.createElement('div'); ml.setAttribute('id', 'skills-m'); ml.setAttribute('class', 'skills-cloud');
        tech = document.createElement('div'); tech.setAttribute('id', 'skills-t'); tech.setAttribute('class', 'skills-cloud');

        skillcont.appendChild(langs);
        skillcont.appendChild(webd);
        skillcont.appendChild(ml);
        skillcont.appendChild(tech);

        
        $("#skills-l").svg3DTagCloud(settingsL);
        $("#skills-w").svg3DTagCloud(settingsW);
        $("#skills-m").svg3DTagCloud(settingsM);
        $("#skills-t").svg3DTagCloud(settingsT);
    }


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


    var themebtn = document.getElementById('theme-btn');
    var themeSelector = document.getElementById('theme-selector');

    var body = document.querySelector('body');

    $('#theme-btn').click(function(){
        themebtn.classList.add('shift');
        themeSelector.classList.add('active');
    });

    $('#close-theme').click(function(){
        themebtn.classList.remove('shift');
        themeSelector.classList.remove('active');
    });


    $('#def-th').click(function(){
        themebtn.classList.remove('shift');
        themeSelector.classList.remove('active');

        body.classList.remove('red');
        body.classList.remove('blue');
        body.classList.remove('violet');
    });

    $('#red-th').click(function(){
        themebtn.classList.remove('shift');
        themeSelector.classList.remove('active');
        
        body.classList.add('red');
        body.classList.remove('blue');
        body.classList.remove('violet');
    });

    $('#blue-th').click(function(){
        themebtn.classList.remove('shift');
        themeSelector.classList.remove('active');
        
        body.classList.remove('red');
        body.classList.add('blue');
        body.classList.remove('violet');
    });

    $('#violet-th').click(function(){
        themebtn.classList.remove('shift');
        themeSelector.classList.remove('active');
        
        body.classList.remove('red');
        body.classList.remove('blue');
        body.classList.add('violet');
    });
    

});