export function ValidateEmail(mail) {
    if (!mail || mail.length < 2) return false;
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)) {
        return (true)
    }
    //alert("You have entered an invalid email address!")
    return (false)
}

export function validatePinCode(code) {
    if (/^[1-9]{1}[0-9]{2}[0-9]{3}$/.test(code))
        return true;
    else return false;
}

export function validatePhone(phone) {
    if (/^(\+\d{1,3}[- ]?)?\d{10}$/.test(phone))
        return true;
    else return false;
}

const USER_INFO = "USERINFO";
export function isUserDetailsInLS() {
    if (typeof window !== "undefined") {
        if (window.localStorage.getItem(USER_INFO))
            return true;
        else return false;
    }
}

export function saveUserInLS(details) {
    if (typeof window !== "undefined") {
        window.localStorage.setItem(USER_INFO, JSON.stringify(details));
    }
}

export function getUserFromLS() {
    if (typeof window !== "undefined") {
        return JSON.parse(window.localStorage.getItem(USER_INFO))
    }
}

const SUBMITTED_LIST = "SUBMITTED_LIST"
export function addToContactedList(schoolId) {
    if (typeof window !== "undefined") {
        let oldList = JSON.parse(window.localStorage.getItem(SUBMITTED_LIST));
        if (!oldList) {
            window.localStorage.setItem(SUBMITTED_LIST, JSON.stringify([schoolId]))
        }
        else window.localStorage.setItem(SUBMITTED_LIST, JSON.stringify(oldList.concat(schoolId)))
    }
}

export function isInSubmittedList(schoolId) {
    if (typeof window !== "undefined") {
        let list = JSON.parse(window.localStorage.getItem(SUBMITTED_LIST))
        if (list === null) return false
        for (var index in list) {
            if (list[index] === schoolId) return true;
        }
        return false
    }
};


export function distance(lat1, lat2, lon1, lon2) {

    // The math module contains a function
    // named toRadians which converts from
    // degrees to radians.
    lon1 = lon1 * Math.PI / 180;
    lon2 = lon2 * Math.PI / 180;
    lat1 = lat1 * Math.PI / 180;
    lat2 = lat2 * Math.PI / 180;

    // Haversine formula
    let dlon = lon2 - lon1;
    let dlat = lat2 - lat1;
    let a = Math.pow(Math.sin(dlat / 2), 2)
        + Math.cos(lat1) * Math.cos(lat2)
        * Math.pow(Math.sin(dlon / 2), 2);

    let c = 2 * Math.asin(Math.sqrt(a));

    // Radius of earth in kilometers. Use 3956
    // for miles
    let r = 6371;

    // calculate the result
    return (c * r);
};

navigator.geolocation.getAccurateCurrentPosition = function (geolocationSuccess, geolocationError, geoprogress, options) {
    var lastCheckedPosition,
        locationEventCount = 0,
        watchID,
        timerID;

    options = options || {};

    var checkLocation = function (position) {
        lastCheckedPosition = position;
        locationEventCount = locationEventCount + 1;
        // We ignore the first event unless it's the only one received because some devices seem to send a cached
        // location even when maxaimumAge is set to zero
        if ((position.coords.accuracy <= options.desiredAccuracy) && (locationEventCount > 1)) {
            clearTimeout(timerID);
            navigator.geolocation.clearWatch(watchID);
            foundPosition(position);
        } else {
            geoprogress(position);
        }
    };

    var stopTrying = function () {
        navigator.geolocation.clearWatch(watchID);
        foundPosition(lastCheckedPosition);
    };

    var onError = function (error) {
        clearTimeout(timerID);
        navigator.geolocation.clearWatch(watchID);
        geolocationError(error);
    };

    var foundPosition = function (position) {
        geolocationSuccess(position);
    };

    if (!options.maxWait) options.maxWait = 10000; // Default 10 seconds
    if (!options.desiredAccuracy) options.desiredAccuracy = 20; // Default 20 meters
    if (!options.timeout) options.timeout = options.maxWait; // Default to maxWait

    options.maximumAge = 0; // Force current locations only
    options.enableHighAccuracy = true; // Force high accuracy (otherwise, why are you using this function?)

    watchID = navigator.geolocation.watchPosition(checkLocation, onError, options);
    timerID = setTimeout(stopTrying, options.maxWait); // Set a timeout that will abandon the location loop
};


export const getUserLongLat = (onSuccess, onError, onProgress) => navigator.geolocation.getAccurateCurrentPosition(onSuccess, onError, onProgress, { desiredAccuracy: 20, maxWait: 15000 });
