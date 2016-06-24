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
                document.write("You cannot purchase more than 100 common cards in one day") // daily limit for purchases
            } else {
                document.write("The cost for the first " + purchased + " cards was " + purchasedCost + " gold <br>");
                document.write("The cost for the next " + cards + " cards will be " + newTotal + " gold<br>");
                document.write("Today's total cost will be " + total + " gold");
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
                document.write("You cannot purchase more than 50 rare cards in one day") // daily limit for purchases
            } else {
                document.write("The cost for the first " + purchased + " cards was " + purchasedCost + " gold <br>");
                document.write("The cost for the next " + cards + " cards will be " + newTotal + " gold<br>");
                document.write("Today's total cost will be " + total + " gold");
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
                document.write("You cannot purchase more than 10 epic cards in one day") // daily limit for purchases
            } else {
                document.write("The cost for the first " + purchased + " cards was " + purchasedCost + " gold <br>");
                document.write("The cost for the next " + cards + " cards will be " + newTotal + " gold<br>");
                document.write("Today's total cost will be " + total + " gold");
            }
        } else {
            document.write("Not a valid card type") // if no valid card type is entered
        }