const About$link= document.getElementById('about-link');
const Skill$link= document.getElementById('skills-link');
const Projects$Link = document.getElementById('projects-link');
const Contact$Link = document.getElementById('contact-link');



About$link.addEventListener('click', () =>  {
    document.getElementById('second-section').scrollIntoView({
        behavior: 'smooth',
        top: 'end'
    });
});


Skill$link.addEventListener('click', () =>  {
    document.getElementById('third-section').scrollIntoView({
        behavior: 'smooth',
        top: 'end'
    });
});

Projects$Link.addEventListener('click', () =>  {
    document.getElementById('fifth-section').scrollIntoView({
        behavior: 'smooth',
        top: 'end'
    });
});
