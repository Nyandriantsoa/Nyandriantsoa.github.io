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
    <title>NumberQuiz</title>
  </head>
  <body>
    <form method="post">
      <h3>Have fun with NumberQuiz!</h3>
      <p>Your current score is: ETOOO!</p>
      <p>Guess the next number in the sequence! ETOOOO!</p>
      <p>Your answer:
        <input type='text' name='txtAnswer' value='' />
      </p>

      <!-- IF -->
      <p style='color:red'>Your last answer was not correct! Please try again</p>
      <p><input type='submit' name='btnNext' value='Next' /></p>

    </form>
  </body>
</html>
