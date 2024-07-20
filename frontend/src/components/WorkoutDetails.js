const WorkoutDetails = ({ workout, workid }) => {
    return (
      <div className="workout-details">
        <h4>{workout.title}</h4>
        <p><strong>Load (kg): </strong>{workout.load}</p>
        <p><strong>Number of reps: </strong>{workout.reps}</p>
        <p>{workout.createdAt}</p>
        <p>{workout.createdAt}</p>
      </div>
    )
  }
  
  export default WorkoutDetails