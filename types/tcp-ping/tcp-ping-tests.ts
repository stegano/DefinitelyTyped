import * as tp from 'tcp-ping';

tp.ping({
    address: "localhost",
    port: 8080
}, (err, result) => {
});

tp.probe("localhost", 8080, (err, result) => {
});
