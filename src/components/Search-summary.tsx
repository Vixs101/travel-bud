"use client"

import { ArrowRight, Users, Calendar, ArrowLeftRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import Link from "next/link"

interface SearchSummaryProps {
  from: string
  to: string
  date: Date
  passengers: number
  isOneWay: boolean
}

export function SearchSummary({
  from = "Jalingo",
  to = "Lagos",
  date = new Date("2023-11-17"),
  passengers = 1,
  isOneWay = true
}: SearchSummaryProps) {
  return (
    <div className="w-full max-w-5xl bg-white rounded-2xl sm:rounded-full p-4 flex flex-col sm:flex-row sm:items-center gap-4 shadow-sm">
      {/* From and To Section */}
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 flex-1 min-w-0">
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
            <ArrowLeftRight className="w-4 h-4 text-gray-600" />
          </div>
          <div className="truncate">
            <p className="text-xs text-gray-500">Going from</p>
            <p className="font-medium truncate">{from}</p>
          </div>
        </div>
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#6C38FF]">
          <ArrowRight className="w-4 h-4 text-white" />
        </div>
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
            <ArrowLeftRight className="w-4 h-4 text-gray-600" />
          </div>
          <div className="truncate">
            <p className="text-xs text-gray-500">Going to</p>
            <p className="font-medium truncate">{to}</p>
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div className="flex flex-wrap items-center gap-4">
        {/* Date */}
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
            <Calendar className="w-4 h-4 text-gray-600" />
          </div>
          <div className="truncate">
            <p className="text-xs text-gray-500">Date</p>
            <p className="font-medium truncate">
              {date.toLocaleDateString('en-US', { 
                weekday: 'short', 
                month: 'short', 
                day: 'numeric' 
              })}
            </p>
          </div>
        </div>

        {/* Passengers */}
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
            <Users className="w-4 h-4 text-gray-600" />
          </div>
          <div className="truncate">
            <p className="text-xs text-gray-500">Passengers</p>
            <p className="font-medium truncate">
              Adult {passengers}
            </p>
          </div>
        </div>

        {/* One Way Toggle */}
        <div className="flex items-center gap-2 ml-auto sm:ml-0">
          <span className="text-xs text-gray-500">One Way</span>
          <Switch checked={isOneWay} className="data-[state=checked]:bg-[#6C38FF]" />
        </div>

        {/* Change Search Button */}
        <Button 
          asChild
          className="w-full sm:w-auto bg-[#6C38FF] hover:bg-[#5B2FD9] text-white rounded-full px-6"
        >
          <Link href="/">
            Change Search
          </Link>
        </Button>
      </div>
    </div>
  )
}

