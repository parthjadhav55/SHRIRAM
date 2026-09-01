/* PROJECT DETAILS */

function showProject(projectName) {

    alert(
        "Project: " + projectName +
        "\n\nMore project details, images and information can be added here."
    );

}


/* CONTACT FORM */

function sendMessage() {

    let name = document.getElementById("name").value;

    let email = document.getElementById("email").value;

    let phone = document.getElementById("phone").value;

    let message = document.getElementById("message").value;

    let result = document.getElementById("result");


    if (
        name === "" ||
        email === "" ||
        phone === "" ||
        message === ""
    ) {

        result.innerHTML =
            "❌ Please fill all the required fields.";

        result.style.color = "red";

    }

    else {

        result.innerHTML =
            "✅ Thank you " + name +
            "! Your construction inquiry has been submitted successfully.";

        result.style.color = "green";


        document.getElementById("name").value = "";

        document.getElementById("email").value = "";

        document.getElementById("phone").value = "";

        document.getElementById("message").value = "";

    }

}


/* ANIMATED COUNTERS */

const counters = document.querySelectorAll(".counter");


counters.forEach(counter => {

    counter.innerText = "0";


    const updateCounter = () => {

        const target =
            +counter.getAttribute("data-target");

        const current =
            +counter.innerText;


        const increment =
            Math.ceil(target / 100);


        if (current < target) {

            counter.innerText =
                current + increment;


            setTimeout(updateCounter, 30);

        }

        else {

            counter.innerText = target + "+";

        }

    };


    updateCounter();

});
