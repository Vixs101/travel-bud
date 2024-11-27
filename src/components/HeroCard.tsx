"use client"

import { FiUser, FiMapPin, FiCalendar } from 'react-icons/fi';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export default function HeroCard() {
    return (
        <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-lg font-medium">Round Trip</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="from" className="text-sm font-medium text-gray-700">Going from</label>
            <div className="relative">
              <FiMapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input id="from" className="pl-10" placeholder="New York" />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="to" className="text-sm font-medium text-gray-700">Going to</label>
            <div className="relative">
              <FiMapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input id="to" className="pl-10" placeholder="Los Angeles" />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="date" className="text-sm font-medium text-gray-700">Date</label>
            <div className="relative">
              <FiCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input id="date" type="date" className="pl-10" />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="passengers" className="text-sm font-medium text-gray-700">Passengers</label>
            <div className="relative">
              <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input id="passengers" type="number" className="pl-10" placeholder="1" min="1" />
            </div>
          </div>
          <Button variant={"default"} className="w-ful text-white">Search Availability</Button>
        </CardContent>
      </Card>
    )
}