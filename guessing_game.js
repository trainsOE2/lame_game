

  var target;
  var guesses = 0;
  var input;
  var colors = ["blue", "green", "yellow", "red", "violet", "indigo", "orange", "cyan", "pink", "grey", "black", "white", "maroon", "brown"];
  colors.sort();
  var index = 0;
  var done = false;
  var count;
  var valid = false;


  function game()
  {
    index = Math.floor(Math.random()*14);
    target = colors[index];

    while(!done)
    {
      input = prompt("What color am I thinking of?\n" + colors.join(", ") + "\nEnter your guess\n");
      guesses++;
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
        myBody=document.getElementsByTagName("body")[0];
        myBody.style.background = target;
        alert("Target hit... Congratulations you took " + guesses + " guesses.");
        return true;
      }
    }

    function check_validity()
    {
      count = 0;

      for( present_color of colors)
      {
        if(input != present_color)
        {
          count++;
        }
      }

      if(count < 14)
      {
        return true;
      }

      if(count = 14)
      {
        return false;
      }
    }
  }
