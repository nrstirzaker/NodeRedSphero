/**
 * Created by NStirzak on 01/01/2015.
 */


var Cylon = require('cylon');

Cylon.robot({
    connection: { name: 'sphero', adaptor: 'sphero', port: 'COM8' },
    device: { name: 'sphero', driver: 'sphero' },

    work: function(me) {
        me.sphero.startCalibration();
    }
});

Cylon.start();
