import {useState} from 'react'
import Header from "../../components/Header/Header"
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDonlod from '../../components/AppDownlod/AppDonlod'


const Home = () => {

  const [category, setCategory] = useState("All")

  return (
    <div>
    <Header />
    <ExploreMenu category={category} setCategory={setCategory} />
    <FoodDisplay category={category} />
    <AppDonlod />
    </div>
  )
}

export default Home
