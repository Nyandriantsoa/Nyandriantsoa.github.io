package servlets;

import domain.Quiz;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class QuizServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        Quiz quiz = (Quiz) req.getSession().getAttribute("quiz");
        if(quiz == null) {
            quiz = new Quiz();
        }

        Boolean error = (Boolean) req.getSession().getAttribute("error");
        if(error == null){
            error = false;
        }

        Integer attempt = (Integer) req.getSession().getAttribute("attempt");
        if(attempt == null) {
            attempt = 0;
        }

        String hint = (String) req.getSession().getAttribute("hint");

        req.getSession().setAttribute("quiz", quiz);
        req.getSession().setAttribute("attempt", 0);
        req.getSession().setAttribute("error", error);

        req.getRequestDispatcher("start.jsp").forward(req, resp);

    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        Quiz quiz = (Quiz) req.getSession().getAttribute("quiz");
        boolean error = (boolean) req.getSession().getAttribute("error");
        int attempt = (int) req.getSession().getAttribute("attempt");

        String answer = req.getParameter("txtAnswer");

        Object temp = req.getSession().getAttribute("age");

        String age = temp == null ? null : temp.toString();

        if(age == null){
            age = req.getParameter("age");

            try{
                int realAge = Integer.valueOf(age);

                if(realAge < 4 || realAge > 100){
                    req.getSession().setAttribute("ageError", "The age must be between 4 and 100");
                    req.getRequestDispatcher("start.jsp").forward(req, resp);
                    return;
                }

                req.getSession().setAttribute("age", realAge);

            }catch (Exception e){
                req.getSession().setAttribute("ageError", "The age is required and it must be an Integer");
                req.getRequestDispatcher("start.jsp").forward(req, resp);
                return;
            }
        }

        attempt++;
        System.out.println(attempt);
        if(answer != null && quiz.isCorrect(answer)){
            error = false;
            //quiz.scoreAnswer();
            quiz.scoreAnswer(attempt);
            attempt = 0;
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
        req.getSession().removeAttribute("hint");

        if (quiz.getCurrentQuestionIndex() >= quiz.getNumQuestions()) {
            String grade = "NC";
            int val = quiz.getNumCorrect();
            if(val >= 45) {
                grade = "A";
            }else if(val >= 35){
                grade = "B";
            }else if(val > 25){
                grade = "C";
            }
            req.getSession().setAttribute("grade", grade);
            req.getRequestDispatcher("over.jsp").forward(req, resp);
        }else{
            req.getRequestDispatcher("start.jsp").forward(req, resp);
        }
    }
}
