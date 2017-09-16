const Seneca = require('seneca');

function UuidProxy(opts) {

    var seneca = Seneca(),
        self = Object.create(seneca);

    self.client(opts);
    self.generate = generate;
    self.check = check;

    return self;

    // ------------------------------------------------------------------------

    function generate(a, b) {
        return new Promise((accept, reject) => {
            seneca.act('role:uuid,cmd:generate,ver:1', {a:a,b:b}, (err, res) => {
                if(err) reject(err);
                else accept(res.uuid);
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

module.exports = UuidProxy;
