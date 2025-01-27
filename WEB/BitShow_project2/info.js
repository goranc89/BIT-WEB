// class Show {
//   constructor(data) {
//     this.id = data.id;
//     this.name = data.name;
//     this.rating = data.rating.average;
//     this.poster = data.image.original;
//     this.summary = data.summary;
//     this.description = data.summary; // set description to summary for simplicity
//     this.premiered = data.premiered;
//     this.ended = data.ended;
//     this.officialSite = data.officialSite;
//     // this.seasons = [];
//     // if (data._embedded && data._embedded.seasons) {
//     //   this.seasons = data._embedded.seasons.map(season => {
//     //     return {
//     //       number: season.number,
//     //       start: season.premiereDate,
//     //       end: season.endDate,
//     //     };
//     //   });
//     // }
//     // this.cast = [];
//     // if (data._embedded && data._embedded.cast) {
//     //   this.cast = data._embedded.cast.map(member => {
//     //     return member.person.name;
//     //   });
//     // }
//   }

//   display() {
//     $('#show-poster').attr('src', this.poster);
//     $('#show-title').text(this.name);
//     $('#show-rating').text(`Rating: (${this.rating})`);
//     $('#show-description').html(`<h3>Show details</h3> ${this.description}`);
//     $('#show-premiered').text(`Date of premiere: ${this.premiered}`);
//     $('#show-ended').text(`End date: ${this.ended}`);
//     $('#show-officialSite').text(`Official Site: ${this.officialSite} `);

//     // $('#show-seasons').empty();
//     // this.seasons.forEach(season => {
//     //   let listItem = `<li>Season ${season.number}: ${season.start} - ${season.end}</li>`;
//     //   $('#show-seasons').append(listItem);
//     // });
//     // $('#show-cast').empty();
//     // this.cast.forEach(member => {
//     //   let listItem = `<li>${member}</li>`;
//     //   $('#show-cast').append(listItem);
//     // });
//   }
// }

// $.ajax({
//   url: 'https://api.tvmaze.com/shows',
//   method: 'GET',
//   dataType: 'json',
//   success: function (data) {
//     let firstShow = data[50];
//     $.ajax({
//       url: `https://api.tvmaze.com/shows/${firstShow.id}`,
//       method: 'GET',
//       dataType: 'json',
//       success: function (data) {
//         let show = new Show(data);
//         show.display();
//       },
//       error: function () {
//         alert('Error fetching show data. Please try again later.');
//       },
//     });
//   },
//   error: function () {
//     alert('Error fetching show data. Please try again later.');
//   },
// });

class Show {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.rating = data.rating.average;
    this.poster = data.image.original;
    this.summary = data.summary;
    this.description = data.summary; // set description to summary for simplicity
    this.premiered = data.premiered;
    this.ended = data.ended;
    this.officialSite = data.officialSite;
  }

  display() {
    $('#show-poster').attr('src', this.poster);
    $('#show-title').text(this.name);
    $('#show-rating').text(`(${this.rating})`);
    $('#show-premiered').text(`${this.premiered}`);
    $('#show-ended').text(`${this.ended}`);
    $('#show-officialSite').html(
      `<a href="${this.officialSite}">${this.officialSite}</a>`
    );
    $('#show-description').html(
      `<h3>Show details</h3><p>${this.description}</p>`
    );
  }
}
let params = new window.URLSearchParams(window.location.search);

let id = params.get('id');

$.ajax({
  url: `https://api.tvmaze.com/shows/${id}`,
  method: 'GET',
  dataType: 'json',
  success: function (data) {
    let show = new Show(data);
    show.display();
    bottomButton.style.display = 'block';
  },
  error: function () {
    alert('Error fetching show data. Please try again later.');
  },
});
