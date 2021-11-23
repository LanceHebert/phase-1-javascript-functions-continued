function saturdayFun(input = "roller-skate")
{
  return `This Saturday, I want to ${input}!`;  
}

function mondayWork(input = "go to the office")
{
  return `This Monday, I will ${input}.`
}

function wrapAdjective(flair = "*")
{
  const innerFunction = function(innerInput = "special")
  {
    return `You are ${flair}${innerInput}${flair}!`;
  }
  return innerFunction;
}
