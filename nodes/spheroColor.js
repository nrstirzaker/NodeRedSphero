var Cylon = require('cylon');
module.exports = function(RED) {

    var port = "";
    var node = null ;
    var cylon = null;
    var sphero = null;

    function instantiateCylonRobot(){
        if (cylon === null ){
            cylon = createSphero();
        }
        return cylon;
    }

    function createSphero(){

        console.log('port: ' +port);

        var cylon = Cylon.robot({

            connections: {
                sphero:{ adaptor: 'sphero', port: '/dev/rfcomm0' }
            },

            devices: {
                sphero:{ driver: 'sphero' }
            },

            work: function(me) {



                every((30).second(), function() {
                    me.sphero.color('FFA5FF');
                });
                sphero = me.sphero;


            }

        }).start();

        return cylon;

    }




    function disconnectFromSphero(callBack){
        //do we need to disconect?
        callBack();
    }

    function isHexColor(color){
        return  /(^[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(color);
    }

    function ColourChange(config) {

        RED.nodes.createNode(this,config);

        this.status({fill:"red",shape:"ring",text:"disconnected"});

        node = this;
        port = config.port;
        color = config.SpheroColor;

        this.on('input', function(msg) {
            var color = msg.payload;
            config.spheroColor = color;
            node.log(msg);
            node.log('color: ' + color);

            instantiateCylonRobot();

            if (isHexColor( color )){
                sphero.color(color);
            }

            node.status({fill:"green",shape:"dot",text:"connected"});

        });


        this.on('close', function(done) {
            disconnectFromSphero(function() {
                done();
            });
        });

    }

    RED.nodes.registerType("sphero color",ColourChange);
}