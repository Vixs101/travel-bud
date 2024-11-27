"use client"

import { FiUser, FiCalendar } from 'react-icons/fi';
import { PiMapPinAreaBold } from "react-icons/pi";
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export default function HeroCard() {
  return (
    <Card className="w-full max-h-[350px] max-w-xl mx-auto">
      <CardHeader>
        <CardTitle className="text-lg font-medium">Round Trip</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="from" className="text-sm text-black font-bold">Going from</label>
          <div className="relative">
            <PiMapPinAreaBold size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
            <Input id="from" className="pl-10 text-black border-b-2 border-gray-400" placeholder="ex. Jalingo" />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="to" className="text-sm text-black font-bold">Going to</label>
          <div className="relative">
            <PiMapPinAreaBold size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
            <Input id="to" className="pl-10 text-black border-b-2 border-gray-400" placeholder="ex Abuja" />
          </div>
        </div>
        <div className="flex gap-5">
          <div className="space-y-2">
            <label htmlFor="date" className="text-sm ftext-black font-bold">Date</label>
            <div className="relative">
              <FiCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
              <Input id="date" type="date" className="pl-10 text-black border-b-2 border-gray-400" />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="passengers" className="text-sm text-black font-bold">Passengers</label>
            <div className="relative">
              <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
              <Input id="passengers" type="number" className="pl-10 text-black border-b-2 border-gray-400" placeholder="1" min="1" />
            </div>
          </div>
        </div>
        <Button variant={"default"} className="text-white ">Search Availability</Button>
      </CardContent>
    </Card>
  )
}