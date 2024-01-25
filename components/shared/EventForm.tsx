"use client"
import React from 'react'

type EventFormProps = {
    userId: string,
    type: "Create" | "Update"
}
const EventForm = ({ userId, type }: EventFormProps) => {
    return (
        <div>
            Event form
        </div>
    )
}

export default EventForm
