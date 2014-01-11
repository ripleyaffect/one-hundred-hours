angular.module('user1', [])
  .controller('UserController', function() {
    this.username = "Stranger";
    this.projectName= "";
    this.timeLimit = 20;
    this.hours = 0.0
    this.minutes = 0.0
    this.projects = [{name: "Example Project", started: 16080.78, hours: 5.0, timeLimit: 15, visible: false}]
    this.welcome = function welcome() {
      if(this.username === undefined) {
        this.username = "";
      };
      return "Hi, " + this.username + ". Let's get you started on some projects.";
    };

    this.getProjectName = function getProjectName(project) {
      return project.name;
    };

    this.createProject = function createProject() {
      if(this.projectName === "") {
        window.alert("Must enter a name for the Project!");
        return;
      };
      if(this.timeLimit < 4.17) {
        window.alert("That's too short a time frame!");
        return;
      };
      date = (new Date().getTime()) / (1000 * 60 * 60 * 24);
      this.projects.push({name: this.projectName, started: date, hours: 0.0, timeLimit: this.timeLimit, visible: false});
    };

    this.percentComplete = function percentComplete(project) {
      percent = (project.hours).toFixed(2);
      if(percent > 100) {
        percent = 100;
      }
      return percent
    };

    this.percentTimeElapsed = function percentTimeElapsed(project) {
      current = (new Date().getTime()) / (1000 * 60 * 60 * 24);
      percent = ((current - project.started) / project.timeLimit * 100).toFixed(2);
      if(percent > 100) {
        percent = 100;
      }
      return percent
    };

    this.addTime = function addTime(project) {
      project.hours = project.hours + (this.hours + (this.minutes / 60));
    };

    this.deleteProject = function deleteProject(project) {
      var r = confirm("Are you sure you want to delete the project?");
      if (r == true) {
        this.projects.splice(this.projects.indexOf(project), 1);
      }
    };

  });