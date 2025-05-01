document.getElementById("form").onsubmit = function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let comments = document.getElementById("comments").value.trim();

  if (name.length < 5 || !/^[A-Za-z]+$/.test(name)) {
    alert("Name must be at least 5 letters.");
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    alert("Enter a valid email.");
    return;
  }

  if (phone.length !== 10 || isNaN(phone)) {
    alert("Phone must be 10 digits.");
    return;
  }

  if (comments.length < 20) {
    alert("Comments must be at least 20 characters.");
    return;
  }

  let li = document.createElement("li");
  li.textContent = name;
  document.getElementById("customerList").appendChild(li);

  alert("Feedback submitted successfully!");
  document.getElementById("form").reset();
};
