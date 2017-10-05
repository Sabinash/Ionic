/*global cordova, module*/

module.exports = {
    openApp: function (name, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "LaunchApp", "openApp", [name]);
    }
};
