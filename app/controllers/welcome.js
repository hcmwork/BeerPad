var args = arguments[0] || {};

function closeWelcome() {
    var index = Alloy.createController("index").getView();
    index.open();
    $.welcome.close();
    Ti.App.Properties.setString("welcomeDone", "true");
};

$.welcome.addEventListener("close", function () {
    $.destroy();
});



