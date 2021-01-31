package servlets;

import domain.Quiz;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

public class QuizServlet extends HttpServlet {

    /*private void genQuizPage(Quiz sessQuiz, PrintWriter out, String currQuest, boolean error, String answer) {

        out.print("<html>");
        out.print("<head>");
        out.print("	<title>NumberQuiz</title>");
        out.print("</head>");
        out.print("<body>");
        out.print("	<form method='post'>");
        out.print("		<h3>Have fun with NumberQuiz!</h3>");
        out.print("<p>Your current score is: ");
        out.print(sessQuiz.getNumCorrect() + "</br></br>");
        out.print("<p>Guess the next number in the sequence! ");
        out.print(currQuest + "</p>");

        out.print("<p>Your answer:<input type='text' name='txtAnswer' value='' /></p> ");

        /* if incorrect, then print out error message */
        /*if (error && (answer != null)) {  //REFACTOR?-- assumes answer null only when first open page
            out.print("<p style='color:red'>Your last answer was not correct! Please try again</p> ");
        }
        out.print("<p><input type='submit' name='btnNext' value='Next' /></p> ");

        out.print("</form>");
        out.print("</body></html>");
    }*/

    /*private void genQuizOverPage(PrintWriter out, Quiz quiz) {
        out.print("<html> ");
        out.print("<head >");
        out.print("<title>NumberQuiz is over</title> ");
        out.print("</head> ");
        out.print("<body> ");
        out.print("<p style='color:red'>The number quiz is over!</p>");
        out.println("<p> Your current score is " + quiz.getNumCorrect() + "</p>");
        out.println("<p> You have completed the Number quiz, with a score of " + quiz.getNumCorrect()
                + " out of " + quiz.getNumQuestions() + "</p>");
        out.print("	</body> </html> ");
    }*/

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        Quiz quiz = new Quiz();
        boolean error = false;
        //this.genQuizPage(quiz, resp.getWriter(), quiz.getCurrentQuestion(), error, "");
        req.getSession().setAttribute("quiz", quiz);
        req.getSession().setAttribute("attempt", 0);
        req.getSession().setAttribute("error", error);

        System.out.println("tonga ato");

        req.getRequestDispatcher("../../../web/index.jsp").forward(req, resp);
    }

    /*@Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        Quiz quiz = (Quiz) req.getSession().getAttribute("quiz");
        boolean error = (boolean) req.getSession().getAttribute("error");
        int attempt = (int) req.getSession().getAttribute("attempt");

        attempt++;
        System.out.println(attempt);

        String answer = req.getParameter("txtAnswer");

        if(answer != null && quiz.isCorrect(answer)){
            error = false;
            attempt = 0;
            quiz.scoreAnswer();
        }else{
            error = true;
        }

        if(error && attempt >= 3){
            quiz.nextQuestion();
            attempt = 0;
            error = false;
        }

        req.getSession().setAttribute("error", error);
        req.getSession().setAttribute("attempt", attempt);
        req.getSession().setAttribute("quiz" , quiz);

        if (quiz.getCurrentQuestionIndex() >= quiz.getNumQuestions()) {
            this.genQuizOverPage(resp.getWriter(), quiz);
        }else{
            this.genQuizPage(quiz, resp.getWriter(), quiz.getCurrentQuestion(), error, "");
        }
    }*/
}
