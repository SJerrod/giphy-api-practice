import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import GifService from './js/gif-service.js';

function getElements(body) {
  $('.showGif1').show();
  $('.showGif1').html(`<img src=${body.data[0].images.original.url}>`);
  $('.showGif2').show();
  $('.showGif2').html(`<img src=${body.data[1].images.original.url}>`);
  $('.showGif3').show();
  $('.showGif3').html(`<img src=${body.data[2].images.original.url}>`);
}

$(document).ready(function() {
  $('#searchButton').click (function() {
    const lookup = $('#searchBar').val();
    $('#searchBar').val("");
    let promise = GifService.getGif(lookup);
    promise.then(function(response) {
      const body = JSON.parse(response);
      getElements(body);
    }, function(error) {
      $('.showGif1').text(`There was an error Processing this request: ${error}`);
      $('.showGif1').show();
    });
  });
//   $('#trendingButton').click (function() {
    

//     let request = new XMLHttpRequest();
//     const url = `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.API_KEY}&limit=3&rating=g`;

//     request.onreadystatechange = function () {
//       if (this.readyState === 4 && this.status ===200) {
//         const response = JSON.parse(this.responseText);
//         getElements(response);
//       }
//     };
    
//     request.open("GET", url, true);
//     request.send();

//     function getElements(response) {
//       $('.showGif1').show();
//       $('.showGif1').html(`<img src=${response.data[0].images.original.url}>`);
//       $('.showGif2').show();
//       $('.showGif2').html(`<img src=${response.data[1].images.original.url}>`);
//       $('.showGif3').show();
//       $('.showGif3').html(`<img src=${response.data[2].images.original.url}>`);
//     }

//   });

//   $('#randomButton').click (function() {
//     const tags = $('tags').val();
//     const source = $('sourceUrl').val();

//     let request = new XMLHttpRequest();
//     const url = `https://api.giphy.com/v1/gifs/random?api_key=${process.env.API_KEY}&source_image_url=${source}&tag=${tags}`;

//     request.onreadystatechange = function () {
//       if (this.readyState === 4 && this.status ===200) {
//         const response = JSON.parse(this.responseText);
//         getElements(response);
//       }
//     };
    
//     request.open("GET", url, true);
//     request.send();

//     function getElements(response) {
//       $('.showGif1').show();
//       $('.showGif1').html(`<img src=${response.data.images.original.url}>`);
//     }
//   });
//   $('#uploadButton').click (function() {
    

//     let request = new XMLHttpRequest();
//     const url = `upload.giphy.com/v1/gifs/api_key=${process.env.API_KEY}&tag=`;

//     request.onreadystatechange = function () {
//       if (this.readyState === 4 && this.status ===200) {
//         const response = JSON.parse(this.responseText);
//         getElements(response);
//       }
//     };
    
//     request.open("POST", url, true);
//     request.send();

//     function getElements(response) {
//       $('.showGif1').show();
//       $('.showGif1').html(`<img src=${response.data.images.original.url}>`);
//     }
//   });
});
