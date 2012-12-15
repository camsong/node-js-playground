function start() {
  console.log("Request handler 'start' was called.");

  function sleep(milliSeconds) {
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + milliSeconds);
  }

  sleep(10000);

  return "start page";
}

function upload() {
  console.log("Request handler 'upload' was called.");
  return "upload page";
}

exports.start = start;
exports.upload = upload;
