import {SearchSummary} from '@/components/Search-summary'

export default function dashboard() {
  return (
    <section className='h-screen bg-[#F0F0F0] p-3 lg:px-28 w-full flex flex-col items-center'>
        <SearchSummary 
          from="Jalingo" 
          to="Adamawa State" 
          date={new Date("2023-12-25")} 
          passengers={1} 
          isOneWay={true} 
        />
    </section>
  )
}
