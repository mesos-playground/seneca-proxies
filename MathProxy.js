const Seneca = require('seneca');

function MathProxy(opts) {

    var seneca = Seneca(),
        self = Object.create(seneca);

    self.client(opts);
    self.sum = sum;
    self.product = product;
    self.check = check;

    return self;

    // ------------------------------------------------------------------------

    function sum(a, b) {
        return new Promise((accept, reject) => {
            seneca.act('role:math,cmd:sum,ver:1', {a:a,b:b}, (err, res) => {
                if(err) reject(err);
                else accept(res.sum);
            });
        });
    }

    function product(a, b) {
        return new Promise((accept, reject) => {
            seneca.act('role:math,cmd:product,ver:1', {a:a,b:b}, (err, res) => {
                if(err) reject(err);
                else accept(res.product);
            });
        });
    }

    function check() {
        return new Promise((accept, reject) => {
            seneca.act('role:health,cmd:ping,ver:1', (err, res) => {
                if(err) reject(err);
                else accept(res);
            });
        });
    }

}

module.exports = MathProxy;
