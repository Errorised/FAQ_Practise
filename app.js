$(".questions").click((event) => {
    const id = event.target.id;
    const newId = id.replace("q", "a");
    const answer = document.createElement("p");
    answer.classList.add("answers");

    function transition() {
        answer.classList.add("scrolling-start", "scrolling-end");
        requestAnimationFrame(() => {
            answer.classList.remove("scrolling-end");
        });
    }

    function showAnswer(id) {
        answer.id = newId;
        $("#" + id).after(answer);
        transition();
    }

    switch (id) {
        case ("q1"):
            if (!$("#a1").length) {
                answer.innerHTML = "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.";
                showAnswer(id);
                $("#a2, #a3, #a4, #a5").remove();
            } else {
                $("#" + newId).remove();
            }
            break;
        case ("q2"):
            if (!$("#a2").length) {
                answer.innerHTML = "No more than 2GB. All files in your account must fit your allotted storage space.";
                showAnswer(id);
                $("#a1, #a3, #a4, #a5").remove();

            } else {
                $("#" + newId).remove();
            }
            break;
        case ("q3"):
            if (!$("#a3").length) {
                answer.innerHTML = "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.";
                showAnswer(id);
                $("#a2, #a1, #a4, #a5").remove();
            } else {
                $("#" + newId).remove();           
            }
            break;
        case ("q4"):
            if (!$("#a4").length) {
                answer.innerHTML = "Yes! Send us a message and we’ll process your request no questions asked.";
                showAnswer(id);
                $("#a2, #a3, #a1, #a5").remove();
            } else {
           $("#" + newId).remove();
            }
            break;
        case ("q5"):
            if (!$("#a5").length) {
                answer.innerHTML = "Chat and email support is available 24/7. Phone lines are open during normal business hours.";
                showAnswer(id);
                $("#a2, #a3, #a4, #a1").remove();
            } else {
           $("#" + newId).remove();
            }
            break;
    }



})