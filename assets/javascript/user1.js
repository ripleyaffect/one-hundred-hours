angular.module('user1', [])
  .controller('UserController', function() {
    this.username = "Stranger";
    this.projectName= "";
    this.projectDescription = "";
    this.timeLimit = 20;
    this.hours = 0.0
    this.minutes = 0.0
    this.projects = [{name: "Example Project", description: "An example Project. Feel free to delete it.", started: 16080.78, hours: 5.0, timeLimit: 15, visible: false}]
    this.welcome = function welcome() {
      if(this.username === undefined) {
        this.username = "";
      };
      return "Hi, " + this.username + ". Let's get you started on some projects.";
    };

    this.getProjectName = function getProjectName(project) {
      return project.name;
    };

    this.getProjectDescription = function getProjectDescription(project) {
      return project.description;
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
      this.projects.push({name: this.projectName, description: this.projectDescription, started: date, hours: 0.0, timeLimit: this.timeLimit, visible: false});
      this.projectName = "";
      this.projectDescription = "";
    };

    this.percentComplete = function percentComplete(project) {
      percent = (project.hours).toFixed(2);
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

    this.setProgressWidth = function setProgressWidth(project) {
      element = "width:" + project.hours + "%";
      return element;
    }

    this.setTimeWidth = function setTimeWidth(project) {
      element = "width:" + this.percentTimeElapsed(project) + "%";
      return element;
    }

    this.toggleEditProject = function toggleEditProject(project) {
      this.projects.forEach(function(entry) {
        if(entry != project) {
          entry.visible = false;
        }
      });
      project.visible = !project.visible;
    };

    this.addTime = function addTime(project) {
      if(isNaN(this.hours + this.minutes)) {
        return;
      };
      if(this.hours < 0 || this.minutes < 0) {
        return;
      }
      project.hours = project.hours + (this.hours + (this.minutes / 60));
      if(project.hours < 0) {
        project.hours = 0;
      }
      if(project.hours > 100) {
        project.hours = 100;
      }
    };

    this.deleteProject = function deleteProject(project) {
      var r = confirm("Are you sure you want to delete the project?");
      if (r == true) {
        this.projects.splice(this.projects.indexOf(project), 1);
      }
    };


  });