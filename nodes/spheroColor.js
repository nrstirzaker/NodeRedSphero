var Cylon = require('cylon');
module.exports = function(RED) {

    var port = "";
    var node = null ;
    var sphero = null;

    function getSphero(){
        if (sphero === null ){
            sphero = createSphero();
        }
        return sphero;
    }

    function createSphero(){

        console.log('port: ' +port);

        var sphero = Cylon.robot({

            //this.status({fill:"red",shape:"ring",text:"disconnected"});



            connections: { name: 'sphero', adaptor: 'sphero', port: 'COM8' },
            devices: { name: 'sphero', driver: 'sphero' },

            work: function(me) {

                console.log('sphero work started');
                //node.status({fill:"green",shape:"dot",text:"connected"});

                //me.sphero.setRGB(Math.floor(Math.random() * 100000));
                //
                //every((1).second(), function() {
                //    console.log("Hello, human!");
                //});
            }
        }).start();

        return sphero;

    }




    function disconnectFromSphero(callBack){
        //do we need to disconect?
        callBack();
    }

    function isHexColor(color){
        return  /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(color);
    }

    function ColorChange(config) {

        RED.nodes.createNode(this,config);

        node = this;
        port = config.port;
        color = config.SpheroColor;

        this.on('input', function(msg) {
            var color = msg.payload;
            config.spheroColor = color;
            //console.log(msg);
            console.log('color: ' + color);

            var sphero = getSphero();
            if (isHexColor( color )){
                sphero.setColor(color);
            }

        });


        this.on('close', function(done) {
            disconnectFromSphero(function() {
                done();
            });
        });

    }

    RED.nodes.registerType("sphero color",ColorChange);
}