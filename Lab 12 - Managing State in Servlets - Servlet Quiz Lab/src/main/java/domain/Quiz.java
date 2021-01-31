package domain;

public class Quiz {

    private static String[] questions = {
        "3, 1, 4, 1, 5",
        "1, 1, 2, 3, 5",
        "1, 4, 9, 16, 25",
        "2, 3, 5, 7, 11",
        "1, 2, 4, 8, 16"
    };

    private static int[] answers = {9, 8, 36, 13, 32};

    private int numCorrect;
    private int current;

    public int getNumCorrect() {
        return numCorrect;
    }

    public String getCurrentQuestion() {
        return questions[this.current];
    }

    public int getCurrentQuestionIndex() {
        return this.current;
    }

    public boolean isCorrect(String answer){
        return this.current < answers.length &&
                Integer.valueOf(answer).equals(answers[this.current]);
    }

    public int getNumQuestions(){
        return questions.length;
    }

    public void scoreAnswer(){
        this.current++;
        this.numCorrect++;
    }

    public void nextQuestion(){
        this.current++;
    }

    @Override
    public String toString() {
        return "Quiz{" +
                "numCorrect=" + numCorrect +
                ", current=" + current +
                '}';
    }
}
