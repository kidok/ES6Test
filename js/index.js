$(function () {
    $('li').click(function () {
        $(this).addClass('active')
            .siblings()
            .removeClass('active');

    });
});
// $('li').click(function() {
//     $(this).addClass('active')
//         .siblings()
//         .removeClass('active');

// });
// var v1 = document.getElementById('testdiv1').name;

// setTimeout(() => {
//     let s1 = new Sleeper("s1", 5000);
//     s1.sleep();
// }, 0);

let p1 = new Promise((res, rej) => {
    try {
        let s1 = new Sleeper("s1", 5000);
        s1.sleep();
        res(s1);
    } catch (error) {
        rej();
    };
});

p1.then(s => {
    console.log(s.name);
});