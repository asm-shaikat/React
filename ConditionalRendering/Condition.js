import React from 'react';

const Condition = (res) =>{
    const familier = res.know
    let describe;
    let food;
    if (familier) {
      describe = <p>Hello, welcome to my world</p>
      food = <p>Do you like to take a coffee</p>
    }
    else{
      describe = <p>Who the hell are you</p>
      food = <p>Not needed</p>
    }
  
  return (
    <div>
      <h3>Welcome message</h3>
      {describe}
      <h3>Food</h3>
      {food}
    </div>
  )
};
export default Condition;