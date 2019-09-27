import React from "react";
import Header from "./Header";

const About = () => {
  return (
    <div>
      <Header />
      <h2>About the game</h2>
      <p>
        The goal of this game is to get to know the member of your tema
        betterbundleRenderer.renderToStream Before the game starts the person
        who organize the activity insert the name of the team members in the
        game. A link is created for each member. The link can be copyed and sent
        to the members. Each member, who has received the link, is asked to type
        some question and answers about themselves and choose an avatar. Now
        you're ready to play!
      </p>
      <p>
        When everybody is reunited the score with the members of the team is
        displayed on a board while each member is given a link to follow of
        their computer or phone. They will see questions and 3 answers about one
        member of their group. Those member who has answer the most of question
        correctly is the winner for the member which the questions are asked
        about.
      </p>
      <p>
        The system will randomly choose next player. The member who has answered
        most of the questions will will for that game.
      </p>
    </div>
  );
};

export default About;
