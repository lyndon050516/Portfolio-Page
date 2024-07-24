function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


document.getElementById("copyEmailLink").onclick = function() {
  const email = "lyndonyang2005@berkeley.edu";
  const textarea = document.createElement("textarea");
  textarea.value = email;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);

  // Show a message indicating the email has been copied
  const copyMessage = document.getElementById("copyMessage");
  copyMessage.style.display = "block";
  setTimeout(() => {
      copyMessage.style.display = "none";
  }, 1000); // Hide the message after 2 seconds
};