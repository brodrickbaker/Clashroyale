function cardPurchase() {
 
        var cost; // cost for this type of card
        var total = 0; // total cost
        var type = prompt("What kind of card is being purchased?", "common");
        var purchased = prompt("How many cards have been purchased today?", 0);
        var cards = prompt("Enter the number of new cards to purchase", 0);
        var purchasedCost = 0; // cost of cards previously purchased
        var totalCards = parseInt(cards) + parseInt(purchased); // total number of cards purchased previously and currently purchasing 
        
        if (type == "common") {  
            cost = 2; // cost for first common card
            for(var i = 1; i <= totalCards; i++){
                total = total + cost; // running total cost of cards purchased
                if (i <= purchased) {
                    purchasedCost = purchasedCost + cost; // cost of cards purchased previously
                }
                cost = cost + 2; // cost of next card
            }
            var newTotal = total - purchasedCost; // cost of cards being purchased currently less cards previously purchased
            if (totalCards > 100) {
                document.getElementById("results").innerHTML = "You cannot purchase more than 100 common cards in one day" // daily limit for purchases
            } else {
                document.getElementById("results").innerHTML = "The cost for the first " + purchased + " cards was " + purchasedCost + " gold <br>" +
                "The cost for the next " + cards + " cards will be " + newTotal + " gold<br>" + "Today's total cost will be " + total + " gold";
            }
            
        } else if (type == "rare") {
            cost = 20; // cost for first rare card
            for(var i = 1; i <= totalCards; i++){
                total = total + cost;
                if (i <= purchased) {
                    purchasedCost = purchasedCost + cost; // cost of cards purchased previously
                }
                cost = cost + 20; // cost of next card
            }
            var newTotal = total - purchasedCost; // cost of cards being purchased currently less cards previously purchased
            if (totalCards > 50) {
                document.getElementById("results").innerHTML = "You cannot purchase more than 50 rare cards in one day" // daily limit for purchases
            } else {
                document.getElementById("results").innerHTML = "The cost for the first " + purchased + " cards was " + purchasedCost + " gold <br>" +
                "The cost for the next " + cards + " cards will be " + newTotal + " gold<br>" + "Today's total cost will be " + total + " gold";
            }
            
        } else if (type == "epic") {
            cost = 2000; // cost for first epic card
            for(var i = 1; i <= totalCards; i++){
                total = total + cost;
                if (i <= purchased) {
                    purchasedCost = purchasedCost + cost; // cost of cards purchased previously
                }
                cost = cost + 2000; // cost of next card
            }
            var newTotal = total - purchasedCost; // cost of cards being purchased currently less cards previously purchased
            if (totalCards > 10) {
                document.getElementById("results").innerHTML = "You cannot purchase more than 10 epic cards in one day" // daily limit for purchases
            } else {
                document.getElementById("results").innerHTML = "The cost for the first " + purchased + " cards was " + purchasedCost + " gold <br>" +
                "The cost for the next " + cards + " cards will be " + newTotal + " gold<br>" + "Today's total cost will be " + total + " gold";
            }
        } else {
            document.getElementById("results").innerHTML = "Not a valid card type" // if no valid card type is entered
        }
        
        document.getElementById("results").style.backgroundColor= "white";
        document.getElementById("results").style.color="black";
}

function requestCounter() {
        
        var arena = document.getElementById("arena").value; 
        var cardType = prompt("What kind of card are you requesting?", "common");
        var currentCards = prompt("How many cards do you have currently?")
        var totalCards = prompt("How many total cards are needed for the next level?");
        
        var cardsNeeded = parseInt(totalCards) - parseFloat(currentCards); // number of cards needed to upgrade
        var requests; // number of requests it will take to upgrade
        
        if (arena == 1 || arena == 2 || arena == 3) {
            if (cardType == "common") {
                requests = cardsNeeded / 10; // number of cards that can be requested a once in this arena
                if (cardsNeeded % 10 != 0) {
                    requests++; // if number of requests is not divisible by 10 add one more to account for remaining cards
                }
                document.getElementById("results").innerHTML = "You need " + cardsNeeded + " cards <br>" + "This will take " + parseInt(requests) + " requests.";
            } else if (cardType == "rare") {
                requests = cardsNeeded; // number of cards that can be requested at once in this arena
                document.getElementById("results").innerHTML = "You need " + cardsNeeded + " cards <br>" + "This will take " + parseInt(requests) + " requests.";
            } else {
                document.getElementById("results").innerHTML = "You did not enter a valid card type";
            }
            
        } else if (arena == 4 || arena == 5 || arena == 6) {
            if (cardType == "common") {
                requests = cardsNeeded / 20; // number of cards that can be requested a once in this arena
                if (cardsNeeded % 10 != 0) {
                    requests++; // if number of requests is not divisible by 10 add one more to account for remaining cards
                }
                document.getElementById("results").innerHTML = "You need " + cardsNeeded + " cards <br>" + "This will take " + parseInt(requests) + " requests.";
            } else if (cardType == "rare") {
                requests = cardsNeeded / 2; // number of cards that can be requested at once in this arena
                if (cardsNeeded % 2 != 0) {
                    requests++;
                }
                document.getElementById("results").innerHTML = "You need " + cardsNeeded + " cards <br>" + "This will take " + parseInt(requests) + " requests.";
            } else {
                document.getElementById("results").innerHTML = "You did not enter a valid card type";
            }
        
        } else if (arena == 7) {
            if (cardType == "common") {
                requests = cardsNeeded / 30; // number of cards that can be requested a once in this arena
                if (cardsNeeded % 10 != 0) {
                    requests++; // if number of requests is not divisible by 10 add one more to account for remaining cards
                }
                document.getElementById("results").innerHTML = "You need " + cardsNeeded + " cards <br>" + "This will take " + parseInt(requests) + " requests.";
            } else if (cardType == "rare") {
                requests = cardsNeeded / 3; // number of cards that can be requested at once in this arena
                if (cardsNeeded % 3 != 0) {
                    requests++;
                }
                document.getElementById("results").innerHTML = "You need " + cardsNeeded + " cards <br>" + "This will take " + parseInt(requests) + " requests.";
            } else {
                document.getElementById("results").innerHTML = "You did not enter a valid card type";
            }
        
        } else if (arena == 8) {
            if (cardType == "common") {
                requests = cardsNeeded / 40; // number of cards that can be requested a once in this arena
                if (cardsNeeded % 10 != 0) {
                    requests++; // if number of requests is not divisible by 10 add one more to account for remaining cards
                }
                document.getElementById("results").innerHTML = "You need " + cardsNeeded + " cards <br>" + "This will take " + parseInt(requests) + " requests.";
            } else if (cardType == "rare") {
                requests = cardsNeeded / 4; // number of cards that can be requested at once in this arena
                if (cardsNeeded % 4 != 0) {
                    requests++;
                }
                document.getElementById("results").innerHTML = "You need " + cardsNeeded + " cards <br>" + "This will take " + parseInt(requests) + " requests.";
            } else {
                document.getElementById("results").innerHTML = "You did not enter a valid card type";
            }
        
        } else {
            document.getElementById("results").innerHTML = "You did not select a valid arena";
        }
        document.getElementById("results").style.backgroundColor= "white";
        document.getElementById("results").style.color="black";
}
