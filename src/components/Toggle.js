import React, {useState} from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false)

  function handleToggle(){
    setIsOn(!isOn)
  }
   

  return <button onClick={handleToggle}>{ isOn ? "ON" : "OFF"}</button>;
}

export default Toggle;
