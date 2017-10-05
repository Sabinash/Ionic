/*global cordova, module*/

module.exports = {
    openApp: function (userName, password, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "LaunchApp", "openApp", [name]);
    }
};
