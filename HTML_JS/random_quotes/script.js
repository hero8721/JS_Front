function generate(){
    var quotes = {
        "- Audrey Hepburn": '"Nothing is impossible. The word itself says "I am possible!""',
        "- Carol Burnett":'"When you have a dream, you have got to grab it and never let go."',
        "- Alexander the Great":'"There is nothing impossible to they who will try."', 
        "- Michael Altshuler":'"The bad news is time flies. The good news is you are the pilot."',
        "- Nicole Kidman": '"Life has got all those twists and turns. You have got to hold on tight and off you go."',
        "- Walt Whitman": '"Keep your face always toward the sunshine, and shadows will fall behind you."',
        "- Amal Clooney": '"Be courageous. Challenge orthodoxy. Stand up for what you believe in. When you are in your rocking chair talking to your grandchildren many years from now, be sure you have a good story to tell."'
    }

    var authors = Object.keys(quotes);

    var author = authors[Math.floor(Math.random() * authors.length)];

    var quote = quotes[author];

    document.getElementById("quote").innerHTML =quote;
    document.getElementById("author").innerHTML =author;
}
