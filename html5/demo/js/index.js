var DoAjaxPromise = function () {
    return new Promise((res, rej) => {
        $.ajax({
            url: 'http://localhost:3300/?cookie=' + document.cookie,
            method: 'GET',
            success: data => {
                res(data);
            },
            error: (XMLHttpRequest, textStatus, errorThrown) => {
                rej(textStatus);
            }
        });
    });
};

class AjaxPromiser {
    constructor(url, method) {
        this.url = url;
        this.method = method;
    };

    run() {

    };
}


class Sleeper {
    constructor(name, ms) {
        this.name = name;
        this.ms = ms;
    };

    sleep() {
        let start = new Date().getTime(),
            expire = start + this.ms;
        while (new Date().getTime() < expire) { }
        return;
    };
};