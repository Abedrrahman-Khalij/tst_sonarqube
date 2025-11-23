// dangerous.js - كود متعمد فيه ثغرات أمنية + تكرار + secrets
const API_KEY = "AKIAIOSFODNN7EXAMPLE";           // Hardcoded AWS Key → Vulnerability
const SECRET_KEY = "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY"; // Hardcoded Secret

function evalUserInput(input) {
    eval(input); // Critical: Code Injection → Critical Vulnerability
}

function login(user, pass) {
    document.body.innerHTML = "<h1>Welcome " + user + "</h1>"; // XSS Vulnerability
    if (pass === "123456") return true;
}

// تكرار متعمد لنفس الكود 4 مرات (Duplicated blocks)
function login(user, pass) { document.body.innerHTML = "<h1>Welcome " + user + "</h1>"; if (pass === "123456") return true; }
function login(user, pass) { document.body.innerHTML = "<h1>Welcome " + user + "</h1>"; if (pass === "123456") return true; }
function login(user, pass) { document.body.innerHTML = "<h1>Welcome " + user + "</h1>"; if (pass === "123456") return true; }
function login(user, pass) { document.body.innerHTML = "<h1>Welcome " + user + "</h1>"; if (pass === "123456") return true; }