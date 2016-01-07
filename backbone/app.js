// Modèle
var Model = {

	films: [],

	addFilm: function(film) {
		this.films.push(film);
	},

	getFilms: function() {
		return this.films;
	}
};

// Contrôleur
var Controller = {
	init: function(DOMContainer, model) {
		this.DOMContainer = DOMContainer;
		this.model = model;

		this.form = this.DOMContainer.querySelector('form');
		this.renderContainer = this.DOMContainer.querySelector('.film-list');

		// Rendre la vue
		this.render();

		// On va écouter les events
		this.events();
	},

	events: function() {
		// On écoute l'event submit sur le formulaire
		// On lance la fonction addNewUser
		this.form.addEventListener('submit', this.addNewFilm.bind(this));
	},

	// Mettre à jour le modèle
	addNewFilm: function(event) {
		// On tue le rechargement de page du submit
		event.preventDefault();

		// On récupère la cible de l'event
		// Qui est le formulaire
		var form = event.currentTarget;

		var film = {
			title: form.querySelector('#film_title').value,
			synopsis: form.querySelector('#film_synopsis').value,
			genre: form.querySelector('#film_genre').value,
			url: form.querySelector('#film_url').value,
			actors: form.querySelector('#film_actors').value,
		}

		if(film) {
			// Ajouter un nouvel user au modèle
			// Mais rien encore dans la vue
			this.model.addFilm(film);

			// Il faut la mettre à jour
			// On appelle render()
			this.render();
		}
	},

	render: function() {


		// On récupère tous les users
		// ['Victor', 'Baptiste']
		var films = this.model.getFilms();

		// Si j'ai des utilisateurs, je rends la vue
		if(films) {

			this.renderContainer.innerHTML = '';

			for (var i = 0; i < films.length; i++) {

				// On stocke l'utilisateur
				var film = films[i];

				var div = document.createElement('div.film');
				var $film = $('div.film:last-child');

				// On lui donne une classe
				$film.addClass('film panel panel-default col-md-6');
				$film.append('<h2>Title : '+film.title+'</h2>');
				$film.append('<p>Synopsis : '+film.synopsis+'</p>');



				// On crée une div qui va contenir le nom de l'user
				var div = document.createElement('div.film');
				div.className = 'film panel panel-default col-md-6';

				var title = '<h2>Title : '+film.title+'</h2>';
				var synopsis = '<p>Synopsis : '+film.synopsis+'</p>';
				var genre = '<p>Genre : '+film.genre+'</p>';
				var url = '<img class="col-md-6" src="'+film.url+'">';
				var actors = '<p>actors : '+film.actors+'</p>';

				div.innerHTML = title+synopsis+genre+url+actors;

				this.renderContainer.appendChild(div);
			}
		}
	}
};

var appContainer = document.getElementById('app');
Controller.init(appContainer, Model);
