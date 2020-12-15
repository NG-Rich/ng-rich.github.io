const projectList = document.querySelectorAll(".projectID");

function toggle() {
  const description = this.lastElementChild.classList;

  if (description.contains("open")){
    description.remove("open");
  }else {
    description.toggle("open");
  }
}

projectList.forEach(project => {
  project.addEventListener("click", toggle);
})