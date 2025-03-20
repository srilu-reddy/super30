// Using var
console.log(ticketPriceVar);  // Output: undefined (var is hoisted)
var ticketPriceVar = 150;    
console.log(ticketPriceVar);  

DragonMovieReviewVar();  // Works (Function declaration is hoisted)

function DragonMovieReviewVar() {
    console.log("Super movie hero acting next level (var function)");
}

// Using let
let ticketPriceLet;
console.log(ticketPriceLet);  // Output: undefined (Declared but not assigned)
ticketPriceLet = 150;    
console.log(ticketPriceLet);  

let DragonMovieReviewLet = () => {
    console.log("Super movie hero acting next level (let function)");
};
DragonMovieReviewLet();  

// Using const
const ticketPriceConst = 150;    
console.log(ticketPriceConst);  

const DragonMovieReviewConst = () => {
    console.log("Super movie hero acting next level (const function)");
};
DragonMovieReviewConst();  
