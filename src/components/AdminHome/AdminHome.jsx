
import './AdminHome.css';
import { useState, useEffect } from 'react';


function AdminHome() {

    function setTheme(H, inputType) {
        // Convert hex to RGB first
        let r = 0, g = 0, b = 0;
        if (H.length == 4) {
          r = "0x" + H[1] + H[1];
          g = "0x" + H[2] + H[2];
          b = "0x" + H[3] + H[3];
        } else if (H.length == 7) {
          r = "0x" + H[1] + H[2];
          g = "0x" + H[3] + H[4];
          b = "0x" + H[5] + H[6];
        }
        // Then to HSL
        r /= 255;
        g /= 255;
        b /= 255;
        let cmin = Math.min(r,g,b),
            cmax = Math.max(r,g,b),
            delta = cmax - cmin,
            h = 0,
            s = 0,
            l = 0;
      
        if (delta == 0)
          h = 0;
        else if (cmax == r)
          h = ((g - b) / delta) % 6;
        else if (cmax == g)
          h = (b - r) / delta + 2;
        else
          h = (r - g) / delta + 4;
      
        h = Math.round(h * 60);
      
        if (h < 0)
          h += 360;
      
        l = (cmax + cmin) / 2;
        s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
        s = +(s * 100).toFixed(1);
        l = +(l * 100).toFixed(1);
        
        document.documentElement.style.setProperty(`--${inputType}-color-h`, h);
        document.documentElement.style.setProperty(`--${inputType}-color-s`, s + '%');
        document.documentElement.style.setProperty(`--${inputType}-color-l`, l + '%');
      }
      
      const inputs = ['primary', 'secondary'];
      
    //   inputs.htmlFor.Each((inputType) => {
    //     document.querySelector(`#${inputType}-color-input`)
    //       .addEventListener('change', (e) => {
    //       setTheme(e.target.value, inputType)
    //     });
    //   });





    // ----------------
    // const [chosenColor, setChosenColor] = useState('');


    // useEffect(() => {
    //     const color = getComputedStyle(document.documentElement).getPropertyValue('--root-color');
    //     console.log(`color:`, chosenColor);
    // }, []);

    // function setColor(color) {
    //     setChosenColor(color);
    //     document.documentElement.style.setProperty('--root-color', color);
    // }



    return (
        <div id="admin-home" >
            <p>Welcome to the ADMIN HOME PAGE</p>


            <h1>Pure CSS Color Theming 🎨</h1>

<div className="box-container">
  <div className="box-container">
    <div className="box primary"><p>Primary (Base)</p></div>
    <div className="box primary-light"><p>Primary Light</p></div>
    <div className="box primary-dark"><p>Primary Dark</p></div>
    <div className="box primary-complement"><p>Primary Complement</p></div>
    <div className="box primary-triad-1"><p>Primary Triad 1</p></div>
    <div className="box primary-triad-2"><p>Primary Triad 2</p></div>
  </div>
  <div className="box-container">
    <div className="box secondary">Secondary (Base)</div>
    <div className="box secondary-light">Secondary Light</div>
    <div className="box secondary-dark">Secondary Dark</div>
    <div className="box secondary-complement">Secondary Complement</div>
    <div className="box secondary-triad-1"><p>Secondary Triad 1</p></div>
    <div className="box secondary-triad-2"><p>Secondary Triad 2</p></div>
  </div>
</div>



<fieldset className="controls">
  <legend>Select Base Values:</legend>
  <div>
    <input type="color" value="#6400f0" id="primary-color-input"/>
    <label htmlFor="primary-color-input">Primary</label>
  </div>
  <div>
    <input type="color" value="#018989" id="secondary-color-input"/>
    <label htmlFor="secondary-color-input">Secondary</label>
  </div>

<input 
     id='secondary-color-input'
     type="color"
     onChange={(e) => setTheme(e.target.value, 'primary')} >
 </input>
<input 
     id='secondary-color-input'
     type="color"
     onChange={(e) => setTheme(e.target.value, 'secondary')} >
 </input>



  {/* <div>
    <input type="color" value="#6400f0" id="primary-color-input"/>
    <label htmlFor="primary-color-input">Primary</label>
  </div>
  <div>
    <input type="color" value="#018989" id="secondary-color-input"/>
    <label htmlFor="secondary-color-input">Secondary</label>
  </div> */}
</fieldset>

<input id='color-button' onChange={(e) => setTheme(e.target.value)} type="color"></input>


            {/* <input id='color-button' onChange={(e) => setColor(e.target.value)} type="color"></input>

            {chosenColor}

            <button onClick={() => setColor(chosenColor)} >Set Color</button>

            <div id='box-container'>
                <div id='box-zero'></div>
                <div id='box-one'></div>
                <div id='box-two'></div>
            </div> */}



        </div>
    )
}
export default AdminHome;
