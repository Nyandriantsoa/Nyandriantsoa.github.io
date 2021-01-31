The Assignement was not difficult to make but was not straight forward as well.
In my previous assignement I have already implemented the features which let the user to only answer up to 3 times per question (which I just thought was so logical) so, it was not hard to adapt it to the actual requirement.
The most confusing part of the assignement was the implementation using JSTL which I was not able to solve yet because I always get a ClassNotFound Exception when I add the taglib inside the JSP
Another tricky part is to get the hint. Since we cannot use Javascript to display or hide it, I had to create another servlet just to get the actual hint and display it.

I added a restart button to the application. The reason is, since we are using session, even though the quizz is over and you are trying to refresh the page or try to go to a new quizz by typing the URL, the data from the previous quiz are still held in the session.
So, the restart button go to another servlet and handle the current session, removing the data from previous quiz and then redirect you back to a new one.
