module.exports = function(RED) {
    function LowerCaseNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        this.on('input', function(msg) {
            msg.payload = msg.payload.toLowerCase();
            node.send(msg);
            console.log('tests1');
        });
    }
    RED.nodes.registerType("lower-case",LowerCaseNode);
}