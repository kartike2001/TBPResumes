$(document).ready(function() {
  // Load resume data here, for example from a JSON file
  $.getJSON("resumes.json", function(data) {
    // Loop through each major
    for (let major in data) {
      // Loop through each resume in that major
      data[major].forEach(function(resume) {
        // Create resume card
        let resumeCard = `
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">${resume.name}</h5>
              <a href="${resume.link}" class="btn btn-primary">View Resume</a>
            </div>
          </div>
        `;
        $(`#major-${major} .resume-container`).append(resumeCard);
      });
    }
  });
});
