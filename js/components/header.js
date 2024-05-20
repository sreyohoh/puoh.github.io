// header.js
$(document).ready(function() {
    console.log('Document is ready. Attempting to load header.');
    $('#header').load('components/header.html', function(response, status, xhr) {
      if (status == "error") {
        console.log("Error loading header: " + xhr.status + " " + xhr.statusText);
      } else {
        console.log("Header loaded successfully.");
      }
    });
  });
  