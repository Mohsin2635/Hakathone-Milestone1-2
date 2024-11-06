const toggleContant = () => {
  const content = document.getElementById("skill");
  if (content!.style.display === "none") {
    content!.style.display = "block";
  } else {
    content!.style.display = "none";
  }
};
