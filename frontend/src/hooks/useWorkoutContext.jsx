import { useContext } from "react";
import { WorkoutsContext } from "../context/WorkoutsContext.jsx";

export const useWorkoutContext = () => {
    const context = useContext(WorkoutsContext)

    if (!context) {
        throw Error('useWorkoutsContext must be used inside an WorkoutsContextProvider')
    }

    return context
}

export default useWorkoutContext