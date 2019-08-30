//links
//http://eloquentjavascript.net/09_regexp.html
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions


var messages = [], //array that hold the record of each string in chat
    lastUserMessage = "", //keeps track of the most recent input string from the user
    botMessage = "", //var keeps track of what the chatbot is going to say
    botName = 'Chatbot', //name of the chatbot
    talking = true; //when false the speach function doesn't work
//
//
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//edit this function to change what the chatbot says
function chatbotResponse() {
    talking = true;
    botMessage = "I'm confused"; //the default message

    if (lastUserMessage === 'hi' || lastUserMessage == 'hello') {
        const hi = ['hi', 'howdy', 'hello']
        botMessage = "Hello,  I am here to help you understand that text you sent me. You can also ask me as many questions about the text as you want";;
    }

    if (lastUserMessage === 'name') {
        botMessage = 'My name is ' + botName;
    }
}
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//
//
//
//this runs each time enter is pressed.
//It controls the overall input and output
function newEntry() {
    //if the message from the user isn't empty then run 
    if (document.getElementById("chatbox").value != "") {
        //pulls the value from the chatbox ands sets it to lastUserMessage
        lastUserMessage = document.getElementById("chatbox").value;
        //sets the chat box to be clear
        document.getElementById("chatbox").value = "";
        //adds the value of the chatbox to the array messages
        messages.push(lastUserMessage);
        //Speech(lastUserMessage);  //says what the user typed outloud
        //sets the variable botMessage in response to lastUserMessage
        chatbotResponse();
        //add the chatbot's name and message to the array messages
        messages.push("<b>" + botName + ":</b> " + botMessage);
        // says the message using the text to speech function written below
        Speech(botMessage);
        //outputs the last few array elements of messages to html
        for (var i = 1; i < 80; i++) {
            if (messages[messages.length - i])
                document.getElementById("chatlog" + i).innerHTML = messages[messages.length - i];
        }
    }
}

//text to Speech
//https://developers.google.com/web/updates/2014/01/Web-apps-that-talk-Introduction-to-the-Speech-Synthesis-API
function Speech(say) {
    if ('speechSynthesis' in window && talking) {
        var utterance = new SpeechSynthesisUtterance(say);
        msg.voice = voices[10]; // Note: some voices don't support altering params
        //msg.voiceURI = 'native';
        //utterance.volume = 1; // 0 to 1
        //utterance.rate = 0.1; // 0.1 to 10
        //utterance.pitch = 1; //0 to 2
        //utterance.text = 'Hello World';
        utterance.lang = 'en-US';
        speechSynthesis.speak(utterance);
    }
}

//runs the keypress() function when a key is pressed
document.onkeypress = keyPress;
//if the key pressed is 'enter' runs the function newEntry()
function keyPress(e) {
    var x = e || window.event;
    var key = (x.keyCode || x.which);
    if (key == 13 || key == 3) {
        //runs this function when enter is pressed
        newEntry();
    }
    if (key == 38) {
        console.log('hi')
        //document.getElementById("chatbox").value = lastUserMessage;
    }
}

//clears the placeholder text ion the chatbox
//this function is set to run when the users brings focus to the chatbox, by clicking on it
function placeHolder() {
    document.getElementById("chatbox").placeholder = "Type 'summarize' to summarize the text";
}










































// {% comment %} <h2>Build a Chatbot</h2>
//     <p>Write a program that responds to the user's text input.</p>
//     <ul style="list-style-type:disc">
//         <li>Input strings of text from the user.</li>
//         <li>Output different strings of text in response.</li>
//         <li>Here is my attempt:  <a href="https://codepen.io/lilgreenland/pen/zqXLeJ">notbot</a>
//   </ul>
//         <br>
//             <h3><p>How to Use This Template!</p></h3>
//             <p>Fork this template!</p>
//             <p>The template has several functions that allow you to focus on programming the chatbot's behavoir. It will read in the user's strings from the input box. It will keep a record of every message and display the last few messages above the input box.</p>
//             <p>To control what the chatbot will say make changes to the javascript function <b>chatbotResponse()</b> . You can also change the HTML or CSS. There is no need to keep these directions.</p>
//             <p>The variable <b>lastUserMessage</b> is a string that records the last thing typed.</p>
//             <p>The variable <b>botMessage</b> is a string that controls what the chatbot will say.</p>
//             <p>Example:</p>
//             <pre><code>if (lastUserMessage === 'hi'){
//                 botMessage = 'Howdy!';
//                 }</pre></code>
//             <pre><code>if (lastUserMessage === 'what is your name'){
//                 botMessage = 'My name is' + botName;
//                 }</pre></code>


//             <br>
//                 <br>
//                     <h3><p>Ideas</p></h3>
//                     <p>Narrow the range of topics the chatbot responds to, like an adventure time chatbot.</p>
//                     <p>Customize the html and CSS to fit your theme.</p>
//                     <p>If you only have a few responses, tell the user what commands work.</p>
//                     <p>Use a <a href="https://www.w3schools.com/js/js_switch.asp">switch statement</a> to simplify a large number of if else branches.</p>

//                     <br>
//                         <br>
//                             <h3><p>Advanced Ideas</p></h3>
//                             <p>Use the <a href="https://www.w3schools.com/jsref/jsref_tolowercase.asp">.tolowercase()</a> command to ignore capitalization.</p>
//                             <p>Make variables to keep track of what's been said. Use those variables in an If stement to produce a new set of responses.</p>

//                             <p>Respond to the users by using what they said. For example:</p>
//                             <pre><b>User:</b> I like puppies
// <b>Chatbot:</b> Tell me more about puppies.</pre>

//                             <p>Use the <a href="https://www.w3schools.com/jsref/jsref_obj_date.asp">date</a> function to answer questions like "what time is it?".</p>
//                             <p>Quizbot?</p>
//                             <p>Calculator Mathbot?</p>
//                             <p>Canvas drawbot!</p>
//                             <p>Write a text adventure game. Like <a href="http://www.web-adventures.org/">these</a>.</p>
//                             <p>Build an array with several similar responses and have the chatbot pick one at random, like this:
//     <pre><code>var hi = ['hi','howdy','hello','hey'];
// botMessage = hi[Math.floor(Math.random()*(hi.length))];</pre></code></p>
//                             <p>Use <a href="https://www.w3schools.com/js/js_regexp.asp">regular expressions</a> for powerful searches.  Here is my <a href="https://codepen.io/lilgreenland/pen/YGENqK?editors=0010">example</a></p>

//                             <p>Regular expressions can search in a way similar to a google search. This example searches for words that are cat-like. It also ignores capitalization and looks for the words preceded and followed by spaces.</p>
//                             <pre><code>var n = lastUserMessage.search(/\b(cat|cats|kitten|feline)\b/i);
// if (n !== -1) {
//                                     botMessage = 'I hate cats!';
//                                 } </pre></code>

//                             <p>Here is an example that looks for ways to say dog as singular or plural. It then repeats back the dog related word to the user.</p>
//                             <pre><code>var patt = /\b(dogs?|pup(s|py|pies?)?|canines?)\b/i;
//                           var result = patt.exec(lastUserMessage);
// if (result) {
//                                     botMessage = 'I love ' + result[0];
//                                 } </pre></code>
//                             <br>
//                                 <br>
//                                     <h3><p>Links:</p></h3>
//                                     <ul style="list-style-type:disc">
//                                         <li><a href="https://www.w3schools.com/js/js_strings.asp">tutorial on strings</a></li>
//                                         <li><a href="https://www.w3schools.com/js/js_string_methods.asp">string methods</a></li>
//                                         <li><a href="https://www.w3schools.com/jsref/jsref_obj_string.asp">string reference</a></li>
//                                         <li><a href="https://www.w3schools.com/js/js_regexp.asp">regular expressions tutorial</a></li>
//                                         <li><a href="https://www.w3schools.com/jsref/jsref_obj_regexp.asp">W3 schools regular expressions reference</a></li>
//                                         <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions">MDN regular expressions reference</a></li>
//                                         <li><a href="http://regexr.com/">Testing your regular expressions</a></li>
//                                     </ul>
//                                     <center><img src="https://lilgreenland.github.io/images/BMO.jpg" align="middle"></center>
// </div> {% endcomment %}