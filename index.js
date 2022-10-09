//(function() {})(); is called It’s an Immediately-Invoked Function Expression, or IIFE for short. It executes immediately after it’s created.

// REFERENCES -> https://stackoverflow.com/questions/8228281/what-is-the-function-construct-in-javascript

(function() {

  // declare function into variable 
    // document is DOM, Documentation Object Model
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');
    
    // looping all button
    buttons.forEach(function(button) {
      //when button clicked then, e is element 
      button.addEventListener('click', function(e) {
        //HTMLElement.dataset(e.dataset.num) & Event.target(e.target)
        //data-num recognized and return set of element.dataset.num into value
        //set a data attribute -> e.target.dataset.num
        //And finally, .num returns the value of the data-num attribute.
        
        //e.target is read only & refers to the clicked 
        
        let value = e.target.dataset.num;
        //display value on screen
        screen.value += value;
      })
    });
    
    //equal
    equal.addEventListener('click', function(e) {
      if(screen.value === ''){
        screen.value = "";
      }else{
        let answer = eval(screen.value);
        screen.value = answer;
      }
    })

    clear.addEventListener('click', function(e) {
      screen.value = "";
    })

})();
    
                    