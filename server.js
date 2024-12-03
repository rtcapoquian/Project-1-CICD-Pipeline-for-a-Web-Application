const express = require("express");
const app = express();
const port = 3000;

// Home route
app.get("/", (req, res) => {
  res.send(
    "Reji is a Full Stack Developer, who loves to build web applications using JavaScript technologies. He is passionate about learning new technologies and sharing his knowledge with others.Reji is a Full Stack Developer, who loves to build web applications using JavaScript technologies. He is passionate about learning new technologies and sharing his knowledge with others.Reji is a Full Stack Developer, who loves to build web applications using JavaScript technologies. He is passionate about learning new technologies and sharing his knowledge with others.Reji is a Full Stack Developer, who loves to build web applications using JavaScript technologies. He is passionate about learning new technologies and sharing his knowledge with others.Reji is a Full Stack Developer, who loves to build web applications using JavaScript technologies. He is passionate about learning new technologies and sharing his knowledge with others.Reji is a Full Stack Developer, who loves to build web applications using JavaScript technologies. He is passionate about learning new technologies and sharing his knowledge with others.Reji is a Full Stack Developer, who loves to build web applications using JavaScript technologies. He is passionate about learning new technologies and sharing his knowledge with others.Reji is a Full Stack Developer, who loves to build web applications using JavaScript technologies. He is passionate about learning new technologies and sharing his knowledge with others.Reji is a Full Stack Developer, who loves to build web applications using JavaScript technologies. He is passionate about learning new technologies and sharing his knowledge with others.Reji is a Full Stack Developer, who loves to build web applications using JavaScript technologies. He is passionate about learning new technologies and sharing his knowledge with others.Reji is a Full Stack Developer, who loves to build web applications using JavaScript technologies. He is passionate about learning new technologies and sharing his knowledge with others.Reji is a Full Stack Developer, who loves to build web applications using JavaScript technologies. He is passionate about learning new technologies and sharing his knowledge with others.Reji is a Full Stack Developer, who loves to build web applications using JavaScript technologies. He is passionate about learning new technologies and sharing his knowledge with others."
  );
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
