import express from "express";
const app = express();

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Programmer’s Diet",
      description:
        "Why do programmers prefer dark mode? Because light attracts bugs.",
    },
    {
      id: 2,
      title: "Debugging Life",
      description:
        "I told my computer I needed a break, and it said: 'No problem — I'll go to sleep.'",
    },
    {
      id: 3,
      title: "Array Problems",
      description:
        "Why did the programmer quit his job? Because he didn’t get arrays.",
    },
    {
      id: 4,
      title: "JavaScript Logic",
      description:
        "Why was the JavaScript developer sad? Because he didn't know how to 'null' his feelings.",
    },
    {
      id: 5,
      title: "Programmer Nature",
      description:
        "There are only 10 types of people in the world: those who understand binary and those who don’t.",
    },
  ];
  res.send(jokes);
});

app.listen(port, () => {
  console.log(`Server is running on ${port} port`);
});
