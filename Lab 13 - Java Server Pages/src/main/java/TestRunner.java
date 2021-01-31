import domain.Quiz;

import java.util.Scanner;

/**
 * @since 4/8/09
 * @author levi
 * This class is a "desktop" version of the quiz lab.    It uses the exact same classes
 * for the business logic as does the web application.
 *
 * You can use this class as a guide for creating your own desktop application.  You may change it
 * however you want as long as your solution still meets the assignment specifications.
 */
public class TestRunner {



    public static void main(String[] args)
    {
        try {
            Quiz quiz = new Quiz();

            Scanner sc = new Scanner(System.in);
            boolean questionsLeft = true;

            int attempt = 0;
            System.out.println("The Number Quiz");

            while (questionsLeft) { // They have to keep trying until get the right number.
                /* print out the current score and the question */
                System.out.println();
                System.out.println("Your score is:  " + quiz.getNumCorrect());
                System.out.println("Next sequence is:  " + quiz.getCurrentQuestion());

                System.out.println("Enter the next number for the given sequence.");
                String answer = sc.nextLine();

                attempt++;
                boolean error = true;
                /* i.e., if answer is correct then increment the question index and score */

                if ((answer != null) && quiz.isCorrect(answer)) {
                    error = false;
                    attempt = 0;
                    quiz.scoreAnswer();
                    System.out.println("Correct!");
                }

                /* give error message if wrong */
                if (error == true && attempt < 3) {
                    System.out.println("Wrong answer, please try again.");
                    System.out.println();
                }else if(error){
                    System.out.println();
                    System.out.println("Wrong answer! Next Question");
                    System.out.println();
                    quiz.nextQuestion();
                    attempt = 0;
                }

                /* see if have finished questions */
                if (quiz.getCurrentQuestionIndex() == quiz.getNumQuestions()) {
                    questionsLeft = false;
                    System.out.println("Congratulations, you have completed the quiz!");
                }
            }

            System.out.println();
            System.out.println("Your current score is " + quiz.getNumCorrect());
            System.out.println("You have completed the Number quiz, with a score of " + quiz.getNumCorrect()
                    + " out of " + quiz.getNumQuestions());
        }
        catch (Exception ex)
        {
            System.out.format("%s: %s", ex.getClass().getName(), ex.getMessage());
        }

    }
}
