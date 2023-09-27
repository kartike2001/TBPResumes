$(document).ready(function() {
  // Load resume data here, for example from a JSON file
  $.getJSON("resumes.json", function(data) {
    // Loop through each major
    for (let major in data) {
      // Loop through each resume in that major
      data[major].forEach(function(resume) {
        // Initialize social icons
        let socialIcons = '';

        if (resume.github) {
          socialIcons += `<a href="${resume.github}" target="_blank" class="large-icon"><i class="fab fa-github"></i></a> `;
        }

        if (resume.linkedin) {
          socialIcons += `<a href="${resume.linkedin}" target="_blank" class="large-icon"><i class="fab fa-linkedin"></i></a> `;
        }

        if (resume.portfolio) {
          socialIcons += `<a href="${resume.portfolio}" target="_blank" class="large-icon"><i class="fas fa-briefcase"></i></a>`;
        }

        let resumeCard = `
          <div class="card mb-3">
          <br>
            <div class="row no-gutters align-items-center">
              <div class="col-md-4 d-flex justify-content-center align-items-center">
                <div>
                  <h4 class="card-title"><a href="${resume.resumes}"><b>${resume.name}</b></a></h4>
                  <div class="social-icons">
                    ${socialIcons}
                  </div>
                </div>
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
