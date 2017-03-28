function timeStringToSeconds(timeString){
    let seconds = 0;
    let splitTime = timeString.split(":");
    if (splitTime.length === 3){
        seconds = parseFloat(splitTime[0]*3600) + parseFloat(splitTime[1]*60) + parseFloat(splitTime[2]);
    } else if (splitTime.length === 2){
        seconds = parseFloat(splitTime[0]*60) + parseFloat(splitTime[1]);
    } else if (splitTime.length === 1){
        seconds = parseFloat(splitTime[0]);
    }

    return seconds;
}
function secondsToTimeString(seconds){
    let timeString = "";
    if (seconds >= 3600){
        let hours = parseInt(seconds/3600);
        if (hours < 10){
            hours = "0"+hours;
        }
        let minutes = parseInt((seconds-(hours*3600))/60);
        if (minutes < 10){
            minutes = "0"+minutes;
        }
        let onlySeconds = seconds - (hours*3600) - (minutes*60);
        if (onlySeconds < 10){
            onlySeconds = "0"+onlySeconds;
        }
        timeString = hours+":"+minutes+":"+onlySeconds;
    } else if (seconds >= 60) {
        let minutes = parseInt(seconds/60);
        if (minutes < 10){
            minutes = "0"+minutes;
        }
        let onlySeconds = seconds - (minutes*60);
        if (onlySeconds < 10){
            onlySeconds = "0"+onlySeconds;
        }
        timeString = "00:"+minutes+":"+onlySeconds;
    } else {
        if (seconds < 10){
            seconds = "0"+seconds;
        }
        timeString = "00:00:"+seconds;
    }
    return timeString;
}
