import { useAppContext } from "../../context/appContext"
import { useEffect } from "react"
import { StatsContainer,ChartsContainer,Loading } from "../../components"
const Stats = () => {
  const {showStats,monthlyApplications,isLoading} = useAppContext()
  useEffect(()=>{
    showStats()
  },[])
  if(isLoading){
    <Loading center/>
  }
  return (
    <div>
    <StatsContainer/>
    {monthlyApplications.length>0 && <ChartsContainer/>}
    </div>
  )
}

export default Stats