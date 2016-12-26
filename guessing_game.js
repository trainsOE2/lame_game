

  var target;
  var done = false;
  var input;
  var colors = ["blue", "green", "yellow", "red", "violet", "indigo", "orange", "cyan", "pink", "grey", "black", "white", "maroon", "brown"];
  colors.sort();
  var index = 0;
  var guesses = 0;
  var done = false;
  var i;
  var valid = false;


  function game()
  {
    input = prompt("What color am I thinking of?\n" + colors + "\nEnter your guess\n");
    index = Math.floor(Math.random()*14);
    target = colors[index];

    while(!done)
    {
      input = prompt("What color am I thinking of?\n" + colors + "\nEnter your guess\n");
      valid = check_validity();
      done = check_guess();
    }

    function check_guess()
    {
      if(!valid)
      {
        alert("invalid input");
        return false;
      }

      if (input < target)
      {
        alert("alphabetically lower");
        return false;
      }

      if (input > target)
      {
        alert("alphabetically higher");
        return false;
      }

      if (input == target)
      {
        alert("target hit");
        return true;
      }
    }

    check_validity()
    {
      i = 0;
      if(input != colors[i])
      {
        i++;
      }
      if(i<14)
      {
        return true;
      }
      if(i => 14)
      {
        return false;
      }
    }
