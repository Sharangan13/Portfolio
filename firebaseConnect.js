const firebaseConfig = {
    apiKey: "AIzaSyCiRBgtgan6sargwhrhSpoxgxQUmFd2C8s",
    authDomain: "myweb-62136.firebaseapp.com",
    databaseURL: "https://myweb-62136-default-rtdb.firebaseio.com",
    projectId: "myweb-62136",
    storageBucket: "myweb-62136.appspot.com",
    messagingSenderId: "694527185182",
    appId: "1:694527185182:web:20b473743bd76f6f14f90f"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  const contactFormDB = firebase.database().ref("sendmsg");
  
  document.getElementById("sendmsg").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
    const name = getElementVal("name");
    const email = getElementVal("email");
    const phonenumber = getElementVal("phonenumber");
    const msg = getElementVal("msg");
  
    saveMessages(name, email, phonenumber, msg);
  
    document.querySelector(".alert").style.display = "block";
  
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    document.getElementById("sendmsg").reset();
  }
  
  function saveMessages(name, email, phonenumber, msg) {
    try {
      const newContactForm = contactFormDB.push();
  
      newContactForm.set({
        name: name,
        email: email,
        phonenumber: phonenumber,
        msg: msg,
      });
    } catch (error) {
      console.error("Error saving message to Firebase:", error);
    }
  }
  
  function getElementVal(id) {
    return document.getElementById(id).value;
  }
  