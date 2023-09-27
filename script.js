$(document).ready(function() {
  // Load resume data here, for example from a JSON file
  $.getJSON("resumes.json", function(data) {
    // Loop through each major
    for (let major in data) {
      // Loop through each resume in that major
      data[major].forEach(function(resume) {
        // Create resume card
        let resumeCard = `
          <div class="card mb-3">
          <br>
            <div class="row no-gutters align-items-center">
              <div class="col-md-4 d-flex justify-content-center align-items-center">
                <h5 class="card-title"><a href="${resume.link}">${resume.name}</a></h5>
              </div>
              <div class="col-md-4 d-flex justify-content-center align-items-center">
                <h5 class="card-text">Graduation Year: ${resume.graduationYear}</h5>
              </div>
              <div class="col-md-4 d-flex justify-content-center align-items-center">
                <img src="${resume.picture}" class="card-img" alt="${resume.name}">
              </div>
            </div>
            <br>
          </div>
        `;
        $(`#major-${major} .resume-container`).append(resumeCard);
      });
    }
  });
});
