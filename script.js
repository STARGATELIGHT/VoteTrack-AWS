document.addEventListener("DOMContentLoaded", function() {
    if (sessionStorage.getItem("loggedIn")) {
        showVoteSection();
    }
});

function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    // Simulating Cognito authentication (replace with actual Cognito SDK)
    if (email && password) {
        sessionStorage.setItem("loggedIn", true);
        showVoteSection();
    } else {
        alert("Invalid login credentials");
    }
}

function showVoteSection() {
    document.getElementById("login-section").style.display = "none";
    document.getElementById("vote-section").style.display = "block";
    loadCandidates();
}

function loadCandidates() {
    const candidates = ["Candidate 1", "Candidate 2", "Candidate 3", "Candidate 4", "Candidate 5", "Candidate 6", "Candidate 7"];
    const candidatesDiv = document.getElementById("candidates");
    candidatesDiv.innerHTML = "";
    
    candidates.forEach(candidate => {
        candidatesDiv.innerHTML += `<label>${candidate}</label> <input type='number' id='${candidate}' min='0'><br>`;
    });
}

document.getElementById("vote-form").addEventListener("submit", function(event) {
    event.preventDefault();
    submitVote();
});

function submitVote() {
    const votes = {};
    document.querySelectorAll("#candidates input").forEach(input => {
        votes[input.id] = input.value;
    });
    
    fetch(API_GATEWAY_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(votes)
    })
    .then(response => response.json())
    .then(data => alert("Vote submitted successfully!"))
    .catch(error => alert("Error submitting vote"));
}
