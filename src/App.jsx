import Navbar from "./components/Navbar";
import AddingGoal from "./components/AddingGoal";
import GoalItem from "./components/GoalItem";
import GoalContainer from "./components/GoalContainer";
import Header from "./components/Header";
import Greeting from "./components/Greeting";
import CountGoal from "./components/CountGoal";
import { useSelector } from "react-redux";
import { checkGoal, removeGoal } from "./store/goalsSlice";
import { useDispatch } from "react-redux";

const App = () => {
	const dispatch = useDispatch();
	function check(id) {
		dispatch(checkGoal({ id: id }));
	}
	const remove = (id) => {
		dispatch(removeGoal({ id: id }));
	};
	const goals = useSelector((state) => state.goals.goalList);

	return (
		<>
			<Header>
				<Navbar>
					<Greeting username={"PannKs"} />
					<CountGoal
						doneGoals={goals.filter((g) => g.isDone).length}
						allGoals={goals.length}
					/>
				</Navbar>
				<h1>New Year 2024's Resolution</h1>
				<AddingGoal />
			</Header>
			<GoalContainer>
				{goals.map((goal) => (
					<GoalItem
						key={goal.id}
						name={goal.name}
						isDone={goal.isDone}
						onClick={() => check(goal.id)}
						remove={() => remove(goal.id)}
					/>
				))}
			</GoalContainer>
		</>
	);
};

export default App;
