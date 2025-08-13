//Use client: to rendered on the user-side (browser), not the server. And also, to enable useState features.
'use client'

//UseState Hooks to tract what part of the text is currently hovered.
import { useState } from "react";

//So, the useState is between <'PORT || or 'FOLIO'>, TAPI, dimulai dari ('PORT).
export default function PortfolioTitle() {
  const [hoverTarget, setHoverTarget] = useState<'PORT' | 'FOLIO'>('PORT')
  return (

    //Relative: Allows absolutely positioned children inside the main div to position relative to it.

    //[vw]: font size is (number%) of the viewport.

    //leading-none: Removes extra line height (tight spacing)

    //w-fit: the div to fit only as wide as it's content, in this case, the content is 'PORTFOLIO'

    //px: Horizontal Padding

    //overflow-hidden: Anything going outside this box is clipped. So if i remove it, what will happen?

    //Select-none: disable text selection

    <div className="relative flex text-[12vw] font-bold leading-none w-fit px-3.5 overflow-hidden select-none">

      {/* Absolute: positioned on top of the base container, starting at the top left */}

      {/* h-full w-1/2: The box will over only 1/2 (half) of the width of the content (PORT) & (FOLIO), but covers full of the height*/}
      
      {/* z-0: Acts as a layer like in Photoshop. So, right now, the layer of the box will stay behind the text, because the text has z-10 */}

      {/* The if Conditions: If hoverTarget (the pointed variable in use state) === 'FOLIO', White background to FOLIO, else (the pointed targe in use state === 'PORT'), White background to PORT. */}

      <div className={`absolute top-0 left-0 h-full w-1/2 bg-white z-0 transition-all duration-850 ease-in-out ${hoverTarget === 'FOLIO' ? 'translate-x-full' : 'translate-x-0'}`}/>


        {/* onMouseEnter: Update the state to 'PORT' when hovered.*/}
        {/* The if conditions: If hoverTarget === 'PORT/FOLIO', means that box will go to either of them. Then, text of the font will change to black. Else, text will remain white.*/}
        <div className="w-1/2 text-center cursor-pointer relative z-10"
        onMouseEnter={()=> setHoverTarget('PORT')}>
          <span className={`${hoverTarget === 'PORT' ? 'text-black' : 'text-white'}`}>PORT</span>
        </div>

        <div className="w-1/2 text-center cursor-pointer relative z-10"
        onMouseEnter={()=> setHoverTarget('FOLIO')}>
          <span className={`${hoverTarget === 'FOLIO' ? 'text-black' : 'text-white'}`}>FOLIO</span>
        </div>

    </div>
  )
}