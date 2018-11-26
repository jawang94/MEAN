$("document").ready(function() {
  $("button").click(function() {
    $.get(
      "https://opentdb.com/api.php?amount=10&category=9&difficulty=hard&type=multiple",
      getTrivia
    );
    function getTrivia(data) {
      document.getElementById("trivia").innerHTML = data.results[0].category;
      data.results.forEach(element => {
        var outerBox = document.createElement("div");
        outerBox.setAttribute("id", "outerBox");
        var box = document.createElement("div");
        var title = document.createElement("h4");
        title.innerHTML = element.question;
        box.appendChild(title);
        let qAr = [];
        qAr.push(element.correct_answer);
        element.incorrect_answers.forEach(incorrectAnswer => {
          qAr.push(incorrectAnswer);
        });
        var j, x, i;
        for (i = qAr.length - 1; i > 0; i--) {
          j = Math.floor(Math.random() * (i + 1));
          x = qAr[i];
          qAr[i] = qAr[j];
          qAr[j] = x;
        }
        for (let i = 0; i < qAr.length; i++) {
          let answer = document.createElement("input");
          answer.setAttribute("value", element.correct_answer);
          answer.setAttribute("type", "hidden");
          answer.setAttribute("id", "answer");
          let question = document.createElement("input");
          question.setAttribute("type", "radio");
          question.setAttribute("value", qAr[i]);
          question.setAttribute("id", "selection");
          let label = document.createElement("label");
          label.setAttribute("for", "" + i);
          label.innerHTML = qAr[i];
          box.appendChild(answer);
          box.appendChild(question);
          box.appendChild(label);
        }
        box.setAttribute("id", "box");
        outerBox.appendChild(box);
        document.getElementById("wrapper").appendChild(outerBox);
      });
    }
  });
});

$(document).on("click", "#box", function() {
  $("input, label").show();
});

let points = 0;

$(document).on("click", "#selection", function() {
  console.log("click");
  if (this.checked) {
    var selection = this.value;
    console.log(selection);
    var answer = this.previousSibling.value;
    console.log(answer);
    if (selection === answer) {
      document.getElementById("result").innerHTML = "CORRECT!";
      document.getElementById("result").setAttribute("style", "color: green;");
      points++;
      document.getElementById("points").innerHTML = "Points: " + points;
    } else {
      document.getElementById("result").innerHTML = "Nice Try ;)";
      document.getElementById("result").setAttribute("style", "color: red;");
    }
  }
});
