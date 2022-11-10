const text="hello world";

const utter=new SpeechSynthesisUtterance(text);

window.speechSynthesis.speak(utter);
