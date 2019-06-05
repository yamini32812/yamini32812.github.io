//-----------------MODEL---------------------//
let model = {
        currentProject : null,
        projects:[
        {
        image : "img/portfolio.jpeg",
        webpage : "https://yamini32812.github.io/PortfolioProject/",
        githubLink : "https://github.com/yamini32812/PortfolioProject"
        },
        {
        image : "img/memorygame.png",
        webpage : "https://yamini32812.github.io/fend-project-memory-game/",
        githubLink : "https://github.com/yamini32812/fend-project-memory-game"
        },
        {
        image : "img/arcade.png",
        webpage : "https://yamini32812.github.io/frontend-nanodegree-arcade-game/",
        githubLink : "https://github.com/yamini32812/frontend-nanodegree-arcade-game"
        },
        {
        image : "img/jasmine.jpg",
        webpage : "https://yamini32812.github.io/frontend-nanodegree-feedreader/",
        githubLink : "https://github.com/yamini32812/frontend-nanodegree-feedreader"
        },
        {
        image : "img/restaurant.jpg",
        webpage : "https://yamini32812.github.io/mws-restaurant-stage-1/",
        githubLink : "https://github.com/yamini32812/mws-restaurant-stage-1"
      }]
};

//----------------CONTROLLER-------------------//
let controller = {
    index: 0,
    init: function() {
        // set our current project to the first one in the list
        model.currentProject = model.projects[0];
        // tell our views to initialize
        projectsView.init();
    },

    getCurrentProject: function() {
        model.currentProject = model.projects[controller.index];
        return model.currentProject;
    },

    nextSlide: function(){
      if(controller.index < (model.projects.length))
      {
        controller.index++;
        projectsView.render();
      }
    },

    prevSlide: function(){
      controller.index--;
      projectsView.render();
    }
};


/* ======= View ======= */

let projectsView = {

    init: function() {
        // store pointers to our DOM elements for easy access later
        this.carousalImage = document.querySelector(".image");
        this.projectWebpageLink = document.getElementById("projectWebpageLink");
        this.projectGithubLink = document.getElementById("projectGithubLink");

        // render this view (update the DOM elements with the right values)
        this.render();
    },

    render: function() {
        // update the DOM elements with values from the current cat
        let currentProject = controller.getCurrentProject();
        this.projectWebpageLink.setAttribute('href',currentProject.webpage);
        this.projectGithubLink.setAttribute('href',currentProject.githubLink);
        this.carousalImage.src = currentProject.image;
    }
};

// make it go!
controller.init();
