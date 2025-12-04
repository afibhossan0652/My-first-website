// js/script.js
function changeText() {
    let element = document.getElementById("message");
    element.textContent = "টেক্সট সফলভাবে জাভাস্ক্রিপ্ট দিয়ে পরিবর্তন করা হয়েছে!";
    element.style.color = "green";
}

// পেজ লোড হওয়ার পর একটি প্রাথমিক অ্যালার্ট দেওয়া যেতে পারে
window.onload = function() {
    console.log("ওয়েবসাইট লোড হয়েছে এবং স্ক্রিপ্ট সংযুক্ত হয়েছে।");
};
