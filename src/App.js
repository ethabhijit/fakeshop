import { useEffect, useState } from "react";
import { getTextData, operationOfString } from "./helper";

const App = () => {
	let occurenceArray;
	const [data, setData] = useState("");
	const [limit, setLimit] = useState(0);
	const [occurenceData, setOccurenceData] = useState([]);

	// Handel the button click and get data from url
	const handelClick = () => {
		getTextData()
			.then((data) => {
				setData(data);
			})
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		occurenceArray = data ? operationOfString(data) : [];
		setOccurenceData(occurenceArray);
	}, [data]);

	const handelChange = (e) => {
		setLimit(e.target.value);
	};

	return (
		<>
			<div className="container">
				{console.log(occurenceData)}
				<div className="row justify-content-center">
					<div className="col-md-6">
						<div className="mb-3 mt-5">
							<input
								type="number"
								className="form-control form-control-lg"
								id="number"
								value={limit}
								onChange={handelChange}
								placeholder="Enter number..."
							/>
						</div>
					</div>
					<div className="col-md-2">
						<div className="mb-3 mt-5">
							<button
								type="button"
								className="btn btn-primary btn-lg"
								onClick={handelClick}
							>
								Fetch Data
							</button>
						</div>
					</div>
				</div>

				<div className="row justify-content-center mt-3">
					<div className="col-md-8">
						<table className="table table-hover">
							<thead>
								<tr>
									<th scope="col">Word</th>
									<th scope="col">Occurrence</th>
								</tr>
							</thead>
							<tbody>
								{occurenceData &&
									occurenceData.map((occurenceObj, index) => {
                    if(index >= limit) return "";
										return (
											<tr>
												<th scope="row">{occurenceObj.word}</th>
												<td>{occurenceObj.occurences}</td>
											</tr>
										);
									})}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</>
	);
};

export default App;
