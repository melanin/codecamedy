var languages = {
    english: "Hello!",
    french: "Bonjour!",
    notALanguage: 4,
    spanish: "Hola!"
};

// print hello in the 3 different languages
for(var lang in languages)
{
    var greeting = languages[lang];
    if("number" !== typeof greeting)
    {
        console.log(greeting);
    }
}