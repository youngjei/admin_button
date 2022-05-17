document.getElementById("여기에 id 이름 넣주셈").addEventListener("click", function () {
  console.log("Called!");

  onAuthStateChanged(auth, (user) => {
    const uid = user.uid;

    get(child(dbRef, `users/` + uid)).then((snapshot) => {
      if (snapshot.exists()) {
        const member = snapshot.val().member;
        if (member == true) {
          location.href = "index.html";
        } else {
          alert("You are not a member! Please sign up.");
        }
      } else {
        console.log("No data");
      }
    });
  });
});
