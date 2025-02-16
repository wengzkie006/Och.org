
// Alarm Functionality
const alarmSound = document.getElementById("alarm-sound");
let alarmTimeout;

function setAlarm(alarmNumber) {
  const alarmTimeInput = document.getElementById(`alarm-time-${alarmNumber}`);
  const alarmToneSelect = document.getElementById(`alarm-tone-${alarmNumber}`);
  const stopAlarmButton = document.getElementById(`stop-alarm-${alarmNumber}`);

  const alarmTime = alarmTimeInput.value;
  const alarmTone = alarmToneSelect.value;

  if (!alarmTime) {
    alert("Please set a time for the alarm.");
    return;
  }

  const now = new Date();
  const [hours, minutes] = alarmTime.split(":");
  const alarmDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes);

  const timeDifference = alarmDate - now;

  if (timeDifference < 0) {
    alert("Please set a time in the future.");
    return;
  }

  // Clear any existing timeout
  if (alarmTimeout) {
    clearTimeout(alarmTimeout);
  }

  alarmTimeout = setTimeout(() => {
    alarmSound.src = alarmTone;
    alarmSound.play();
    stopAlarmButton.disabled = false;
    alert(`Alarm ${alarmNumber} is ringing!`);
  }, timeDifference);

  alert(`Alarm ${alarmNumber} set for ${alarmTime}`);
}

// Stop Alarm Functionality
function stopAlarm(alarmNumber) {
  const stopAlarmButton = document.getElementById(`stop-alarm-${alarmNumber}`);
  alarmSound.pause();
  alarmSound.currentTime = 0;
  stopAlarmButton.disabled = true;
}

// Upload to Google Drive
function uploadToDrive() {
  window.open("https://drive.google.com/drive/folders/1Dazc1w1VqJTvcSDbFzdzdOFnqEUcAMdQ");
}

// Event Listeners for Alarm Buttons
document.getElementById("set-alarm-1").addEventListener("click", () => setAlarm(1));
document.getElementById("stop-alarm-1").addEventListener("click", () => stopAlarm(1));

document.getElementById("set-alarm-2").addEventListener("click", () => setAlarm(2));
document.getElementById("stop-alarm-2").addEventListener("click", () => stopAlarm(2));

document.getElementById("set-alarm-3").addEventListener("click", () => setAlarm(3));
document.getElementById("stop-alarm-3").addEventListener("click", () => stopAlarm(3));