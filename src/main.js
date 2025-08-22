import App from "./App.svelte";

new App({
  target: document.body,
  props: {
    // What's your name?
    name: "Marius Ising",
    // In the following fiels you can either give a single string,
    // or an array of bullet points

    // What do you associate with the term 'CI/CD'?
    associations: ["Different environments/stages", "Test pipeline", "Modern way of releasing software"],
    // Which CI/CD tools do you use in your project?
    tools: "Jenkins, GitHub Actions",
    // What do you want to learn in this workshop?
    expectations: ["How to setup a test and deploy pipeline (in Jenkins)"],
  },
});
