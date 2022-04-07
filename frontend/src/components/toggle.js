import React from 'react'

const Toggle = (props) => (
    <div class="flex items-center justify-end w-full mb-12 gap-3">Advanced Mode
        <label for="toggleB" class="flex items-center cursor-pointer">
        <div class="relative">
            <input type="checkbox" id="toggleB" class="sr-only" onChange={props.onChange}/>
            <div class="block bg-gray-600 w-14 h-8 rounded-full"></div>
            <div class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
        </div>
        <div class="ml-3 text-gray-700 font-medium">
        </div>
        </label>
    </div>
)


export default Toggle