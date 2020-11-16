import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function() {
  $('#searchButton').click (function() {
    const lookup = $('#searchBar').val();
    $('#searchBar').val("");
    console.log(lookup);

    let request = new XMLHttpRequest();
    const url = `https://api.giphy.com/v1/gifs/search?api_key=CYM6QolGn05OOEesYFCuqvyCb92rkydi&q=${lookup}&limit=25&offset=0&rating=g&lang=en`;

    request.onreadystatechange = function () {
      if (this.readyState === 4 && this.status ===200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    };
    
    request.open("GET", url, true);
    request.send();

    function getElements(response) {
      $('.showGif1').show();
      $('.showGif1').html(`<img src=${response.data[0].images.original.url}>`);
      $('.showGif2').show();
      $('.showGif3').show();
    }
  });
});

// response: "{"data":[{"type":"gif","id":"BzyTuYCmvSORqs1ABM","