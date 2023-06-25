const button = document.querySelector("#btn");
const par = document.querySelector("#par");

const quotes = [
    "« Time takes time. » - Miguel de Cervantes",
    "« A dishonored man is worse than a dead man. »  — Miguel de Cervantes",
    "« You have to know how to doubt where you have to, submit where you have to, believe where you have to. » — Blaise Pascal",
    "« Justice without force is powerless, force without justice is tyrannical. »  — Blaise Pascal",
    "« Justice is the sanction of established injustices. » - Anatole France",
    "« The heart has its reasons which reason does not know. »  — Blaise Pascal",
    "« Man is a reed, the weakest in nature, but he is a thinking reed. »  — Blaise Pascal",
    "« To be successful in life, a man must have a child, write a book, and plant a tree. » - Compay Segundo",
    "« Even though the old tree seems to have dried in the sun, it knows more than the morning shoot, so entrust your fate to it » - Dominique Sylvain",
    "« The monkey spared by the crocodiles forgets too quickly that the hippopotamus lent its back to him to leave the river. » - Dominique Sylvain",
    "« To love is not to look at each other, it is to look together in the same direction.. » - Antoine de Saint-Exupéry",
    "« The truth is not what is demonstrated, it is what simplifies. » - Antoine de Saint-Exupéry",
    "« Even without hope, the fight is still a hope. » -  Romain Rolland",
    "« If hope gives life, those who live with hope starve. » - Arsenic",
    "« Hope is a memory that desires. » - Honoré de Balzac",
    "« To live without hope is to cease to live. » - Fyodor Dostoyevsky",
    "« Failure is integral to our success. Failure is the flip side of success.» - Adonis ",
    "« Failure is the basis of success.. » - Lao-Tseu",
    "« The secret to being successful with a child is not being his parents. » - Louis Latzarus",
    "« Success is never just a matter of luck. Ask a dud. » - Earl Joseph Wilson",
    "« To succeed, for some, is to make yourself known, for others, on the contrary, it is never to be discovered. » - Ashleigh Brillant",
    "« If you want to be successful, you must open up new paths and avoid the paths taken by promises of success. » - John Rockefeller",
    "« The art of success is knowing how to surround yourself with the best. » - John Fitzgerald Kennedy",
    "« Success is all about being at work when others are fishing. » - Philippe Bouvard",
    "« Patience has more power than strength. » - Plutarch",
    "« You need patience with everyone, but especially with yourself.. » - Saint Francis de Sales",
    "« Patience makes ailments that cannot be cured lighter. » - Guillaume de Chaulieu",
    "« Life is a parachute trip. » - Vicente Huidobro",
    "« A journey of a thousand leagues began with one step. » - Chinese proverb",
    "« The best trip is the one we haven't taken yet. » - Loïck Peyron",
    "« Do you want to live happily? Travel with two bags, one to give, the other to receive.. » - Guillaume de Chaulieu",
    "« The boat that does not withstand the first storm is not made for the voyage. » - Moses Isegawa",
    "« This one had courage, who was the first to eat an oyster. » - Jonathan Swift",
    "« Madness is the only thing you never regre. » - Oscar Wilde",
    "« There are two tragedies in life: one does not satisfy your desire and the other satisfies it. » - Oscar Wilde",
    "« When the gods want to punish us, they answer our prayers.. » - Oscar Wilde",
    "« One sees clearly only with the heart. What is essential is invisible to the eye. » - Antoine de Saint-Exupéry",
    "« Real miracles make little noise. » - Antoine de Saint-Exupéry",
]

button.addEventListener("click", function () {
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    par.style.display = "block";
    par.textContent = randomQuote;
})