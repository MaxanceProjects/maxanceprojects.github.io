// TRANSLATION SCRIPT FOR MAXANCEPROJECTS, COURTESY OF CHATGPT WHICH CREATED IT ON 10.02.2025. Tweaked by it and myself on the following dates: 17.06.2025.
// Credit to my main man Maxime for the idea he introduced me to during our trip to Morocco in late January 2025 <3

/*

To implement this script into a page, do the following:
1. Paste the relevant code (not the annotated version) right beneath the CSS formatting.
2. Proceed to give each bit of text on the page a unique ID using id="". 
3. For tranquility purposes, do not delete any text. That will be the default "unloaded" text, set to the page's default language.
4. Create the JSON file IN THE SAME FOLDER AS THE PAGE and paste the original language. Each ID has the proper text in each version. 
5. Configure all the translations. Use steps 1-5 in the instructions below these ones.
6. Go back to your script and configure wherever there is a comment with !!! TEXT !!!. You can configure the default language, the class for the translation button/link, and the name of the JSON file.
7. Then go to the end of the code and configure for each desired ID to be translated. And there, it should be ready.
8. Make sure to configure the navbar links with the proper class, cf. the code.
9. Remember to add everything to the change log.
10. Debug with ChatGPT or a friend if you're struggling but this should be okay.

If you ever need to change the text:
1. Comment out the script.
2. Modify the original text in the default language. You can use a word document.
3. Once you're happy with how it looks, paste or copy it into word.
4. Re-translate it with the word document or something. Now you have plain text (and some styles too if you like).
5. Paste ALL (including the original language) the text into the JSON file. N.B: JSON DOES NOT SUPPORT COMMENTS.

Conventions:
- en = English; fr = French; ru = Russian; de = German. No exceptions or else everything will break.

*/


// ----------------------------------- ANNOTATED CODE -----------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () { //Wait that all is loaded and then run the script. Chill asf.
    const defaultLang = "en"; //Defines the default language if there is no selection, unchanging constant.
    const storedLang = localStorage.getItem("language") || defaultLang; //Takes the "stored" language from localStorage, i.e from the previous selection. Unchaging constant. OR OTHERWISE, si ça ne marche pas, load the default language of the page into the stored language and will run the translation script with that input.
    loadTranslations(storedLang); //Loads the previously mentioned stored language into loadTranslations. RUNS THE TRANSLATION SCRIPT.
    //The function above treats the default language case and the localStorage language case. If the user wants to change this, the function below takes care of this third case.

    document.querySelectorAll(".available").forEach(link => { //1: selects / becomes aware of all the links which have the class ".lang-switch". There is a kind of class consciousness amirite??? 2: Then it does a loop for each link which has that class. 
        link.addEventListener("click", function (e) { //When the user clicks on the link, the function runs. Does this for every single link with the class.
            e.preventDefault(); //Prevents the link from taking you anywhere. # would take you to the top of the page but here it stops that and just runs the language change script.
            const selectedLang = this.dataset.lang; //Takes the language you selected. Each <a> link has a data-lang="xx" in it. This line of code just takes that "xx" part out and readies it to be shoved into the code below.
            localStorage.setItem("language", selectedLang); //This selected language is saved into the browser's local storage. If they click on another page or refresh the current page, the local language will still be saved.
            loadTranslations(selectedLang); //Loads the selected language
        });
    });
    //Check the comment right under the previous function for more clarification. This function discusses the final case where the user manually selects a language. If the user doesn't select another language, this function never gets executed fully and only the top function shits out the variable that's then shoved into loadTranslations().

    function loadTranslations(lang) { //The function that actually translates (the other two were there to determine the needed language to load into this function)
        fetch("translations-index.json") //Fetches the relevant JSON file. NEED TO CHANGE THIS TEXT.
            .then(response => response.json()) //Handles the responses once the JS crawls inside the JSON. 1. Waits until the JSON file is fully processed. 2. Converts the raw text into "JavaScript" objects. Will mainly remove some quotation marks from what I understood.
            .then(data => { //It's all converted and now we load it into this. Correct language is accessed, and then the script does its thing.
                document.title = data[lang].title; //Changes the page title
                //FROM THIS LINE FORWARD YOU HAVE TO MANUALLY ADD EACH ID TO BE TRANSLATED IN THE FORMAT:
                //document.getElementByID("ID NAME IN QUOTES").innerHTML = data[lang]["ID NAME WITH QUOTES"];
                //document.getElementByID("").innerHTML = data[lang]["ID NAME WITH QUOTES"];
                document.getElementById("welcome").innerHTML = data[lang]["welcome"]; //Whatever has the ID "welcome" will now get translated.
                document.getElementById("description").innerHTML = data[lang]["description"]; //Whatever has the ID "description" will now get translated.
            });
    }
});


// ----------------------------------- CODE TO PASTE INTO EACH BLANK PAGE -------------------------------------------------------


document.addEventListener("DOMContentLoaded", function () { 
    const defaultLang = "en"; // !!! CHOOSE YOUR DEFAULT LANGUAGE: en, fr, ru, de, ... !!!
    const storedLang = localStorage.getItem("language") || defaultLang;
    loadTranslations(storedLang);

    document.querySelectorAll(".available").forEach(link => { // !!! MAY NEED TO RE-CHECK THE CLASS NAME !!!
        link.addEventListener("click", function (e) { 
            e.preventDefault();
            const selectedLang = this.dataset.lang; 
            localStorage.setItem("language", selectedLang);
            loadTranslations(selectedLang);
        });
    });

    function loadTranslations(lang) {
        fetch("") // !!! NEED TO PUT THE NAME OF THE JSON FILE IN BETWEEN THE QUOTES !!!
            .then(response => response.json())
            .then(data => {
                document.title = data[lang].title; //Changes the page title. Do not touch. 

                //FROM THIS LINE FORWARD YOU HAVE TO MANUALLY ADD EACH ID TO BE TRANSLATED IN THE FORMAT:
                //document.getElementById("ID NAME IN QUOTES").innerHTML = data[lang].["ID NAME IN QUOTES"];
                //document.getElementById("").innerHTML = data[lang].[""];

            });
    }
});