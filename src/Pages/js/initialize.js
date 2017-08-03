import $ from 'jquery';


$(document).ready(function() {

    $('input.selectRegion').autocomplete({
    data: {
      "Apple": null,
      "Microsoft": null,
      "Google": 'https://placehold.it/250x250',
      "Affle" : null
    },
    limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
    onAutocomplete: function(val) {
      // Callback function when value is autcompleted.
    },
    minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
  });

  $('input.selectProduct').autocomplete({
  data: {
    "Apple": null,
    "Microsoft": null,
    "Google": 'https://placehold.it/250x250',
    "Affle" : null
  },
  limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
  onAutocomplete: function(val) {
    // Callback function when value is autcompleted.
  },
  minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
  });




  });
