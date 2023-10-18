import React from 'react'
import {events} from '../events'

function EventsProgram() {
  return (
    <>
      <div className="bg-blue-500 text-center text-white uppercase mb-2 p-8 mt-4">
        <h2 className="md:text-4xl text-2xl font-bold">More Events</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10 mx-auto container">
        {events.map((event, i)=>(
          <img src={event.src} alt={event.title} srcset="" />
        ))}
      </div>
    </>
  )
}

export default EventsProgram