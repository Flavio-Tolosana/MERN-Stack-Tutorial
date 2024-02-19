import { useEffect, useState } from "react"
import { useWorkoutContext } from "../hooks/useWorkoutContext"

// components
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from "../components/WorkoutForm"

const Home = () => {

    // const [workouts, setWorkouts] = useState(null)
    const {workouts, dispatch} = useWorkoutContext()

    useEffect(() => {
        const fechtWorkouts = async () => {
            const response = await fetch('/api/workouts/')
            const json = await response.json()

            if (response.ok) {
                dispatch({
                    type: 'SET_WORKOUTS',
                    payload: json
                })
            }
        }
        fechtWorkouts()
    }, [dispatch])

    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout) => (
                    <WorkoutDetails 
                        key={workout._id}
                        workout={workout}
                    />
                ))}
            </div>
            <WorkoutForm />
        </div>
    )
}

export default Home