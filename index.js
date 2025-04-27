// Array of quotes
const quotes = [
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        text: "Innovation distinguishes between a leader and a follower.",
        author: "Steve Jobs"
    },
    {
        text: "Stay hungry, stay foolish.",
        author: "Steve Jobs"
    },
    {
        text: "Your time is limited, so don't waste it living someone else's life.",
        author: "Steve Jobs"
    },
    {
        text: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        text: "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius"
    },
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },

    {
        text: "Success is not the key to happiness. Happiness is the key to success.",
        author: "Albert Schweitzer"
    },

    {
        text: "You miss 100% of the shots you don't take.",
        author: "Wayne Gretzky"
    },

    {
        text: "In the middle of every difficulty lies opportunity.",
        author: "Albert Einstein"
    },

    {
        text: "It always seems impossible until it's done.",
        author: "Nelson Mandela"
    },

    {
        text: "Do not wait to strike till the iron is hot, but make it hot by striking.",
        author: "William Butler Yeats"
    },

    {
        text: "The best way to predict your future is to create it.", 
        author: "Abraham Lincoln"
    },

    {
        text: "The only limit to our realization of tomorrow is our doubts of today.", 
        author: "Franklin D. Roosevelt"
    },

    {
        text: "Don't watch the clock; do what it does. Keep going.", 
        author: "Sam Levenson"
    },

    {
        text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", 
        author: "Winston Churchill"
    }
];

// Function to get a random quote
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

// Function to update the quote display
function updateQuote() {
    const quote = getRandomQuote();
    document.getElementById('text').textContent = quote.text;
    document.getElementById('author').textContent = `- ${quote.author}`;
    
    // Update tweet link
    const tweetLink = document.getElementById('tweet-quote');
    const tweetText = encodeURIComponent(`"${quote.text}" - ${quote.author}`);
    tweetLink.href = `https://twitter.com/intent/tweet?text=${tweetText}`;
}

// Event listener for new quote button
document.getElementById('new-quote').addEventListener('click', updateQuote);

// Load initial quote
updateQuote(); 