document.addEventListener("DOMContentLoaded", function () {
  const students = document.querySelectorAll(".student");
  const popup = document.getElementById("student-popup");
  const closeBtn = document.querySelector(".close");

  students.forEach((student) => {
    student.addEventListener("click", function () {
      const imgSrc = this.querySelector("img").src;
      const name = this.querySelector("h1").textContent;
      const role = this.querySelector(
        "div:nth-child(3) p:nth-child(1)"
      ).textContent;
      const university = this.querySelector(
        "div:nth-child(3) p:nth-child(2)"
      ).textContent;
      const description = this.querySelector(".overlay p").textContent;

      let socialLinks = "";
      if (name === "Felix Knutsen") {
        socialLinks = `
          <a href="https://www.linkedin.com/in/felix-knutsen/" target="_blank">
            <img src="pictures/linkedin.png" alt="LinkedIn" />
          </a>
          <a href="https://github.com/felixknutsen" target="_blank">
            <img src="pictures/github.png" alt="GitHub" />
          </a>
        `;
      } else if (name === "Christian Eieland Ålykkja") {
        socialLinks = `
          <a href="https://www.linkedin.com/in/christian-eieland-ålykkja-06b211258/" target="_blank">
            <img src="pictures/linkedin.png" alt="LinkedIn" />
          </a>
          <a href="https://github.com/Lordkissa97" target="_blank">
            <img src="pictures/github.png" alt="GitHub" />
          </a>
        `;
      } else if (name === "Adrian Viken") {
        socialLinks = `
          <a href="https://www.linkedin.com/in/adrian-viken-208018210/" target="_blank">
            <img src="pictures/linkedin.png" alt="LinkedIn" />
          </a>
          <a href="https://github.com/Adriankv1" target="_blank">
            <img src="pictures/github.png" alt="GitHub" />
          </a>
        `;
      }

      document.getElementById("popup-img").src = imgSrc;
      document.getElementById("popup-name").textContent = name;
      document.getElementById("popup-role").textContent = role;
      document.getElementById("popup-university").textContent = university;
      document.getElementById("popup-description").textContent = description;
      document.getElementById("popup-social").innerHTML = socialLinks;

      popup.style.display = "block";
    });
  });

  closeBtn.addEventListener("click", function () {
    popup.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target == popup) {
      popup.style.display = "none";
    }
  });
});
