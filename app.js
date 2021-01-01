$(".questions").click((event) => {
    const answer = document.createElement("p");
    answer.classList.add("answers");

    function transition () {
        answer.classList.add("scrolling-start", "scrolling-end");
        requestAnimationFrame(()=> {
            answer.classList.remove("scrolling-end");
        });
    }

    switch (event.target.id) {
        case ("q1"):
            if (!$("#a1").length) {
                answer.id = "a1"
                answer.innerHTML = "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.";
                $("#a2, #a3, #a4, #a5").remove();
                $("#q1").after(answer);
                transition()
            } else {
                $("#a1").remove();
            }
            break;
        case ("q2"):
            if (!$("#a2").length) {
                answer.id = "a2"
                answer.innerHTML = "No more than 2GB. All files in your account must fit your allotted storage space.";
                $("#a1, #a3, #a4, #a5").remove();
                $("#q2").after(answer);
                transition()
            } else {
                $("#a2").remove();
            }
            break;
        case ("q3"):
            if (!$("#a3").length) {
                answer.id = "a3"
                answer.innerHTML = "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.";
                $("#a2, #a1, #a4, #a5").remove();
                $("#q3").after(answer);
                transition()
            } else {
                $("#a3").remove();
            }
            break;
        case ("q4"):
            if (!$("#a4").length) {
                answer.id = "a4"
                answer.innerHTML = "Yes! Send us a message and we’ll process your request no questions asked.";
                $("#a2, #a3, #a1, #a5").remove();
                $("#q4").after(answer);
                transition()
            } else {
                $("#a4").remove();
            }
            break;
        case ("q5"):
            if (!$("#a5").length) {
                answer.id = "a5"
                answer.innerHTML = "Chat and email support is available 24/7. Phone lines are open during normal business hours.";
                $("#a2, #a3, #a4, #a1").remove();
                $("#q5").after(answer);
                transition()
            } else {
                $("#a5").remove();
            }
            break;
    }



})