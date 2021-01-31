<%--
  Created by IntelliJ IDEA.
  User: micka
  Date: 1/2/2021
  Time: 7:37 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>NumberQuiz is Over</title>
</head>
<body>
    <p style='color:red'>The number quiz is over!</p>
    <p> Your current score is  + quiz.getNumCorrect() + </p>
    <p> You have completed the Number quiz, with a score of  + quiz.getNumCorrect()
        + out of + quiz.getNumQuestions() + </p>
</body>
</html>
