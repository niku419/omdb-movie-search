import React,{ useEffect, useState, useContext } from 'react'
import { Container, Form, Dropdown, Button, Spinner, Badge } from 'react-bootstrap'
import {Redirect} from 'react-router-dom'
import axios from 'axios'
import {ResultContext} from './Home'

export default function TitleSearch() {

	const {setTitleResults} = useContext(ResultContext)
	const [redirect, setRedirect] = useState(false)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState('')
	const [name, setName] = useState('')
	const [year, setYear] = useState(undefined)
	const [type, setType] = useState(undefined)
	const [season, setSeason] = useState(undefined)
	const [episode, setEpisode] = useState(undefined)
	const [pplot, setPplot] = useState(undefined)
	const [plot, setPlot] = useState(undefined)
	const [pname, setPname] = useState('')
	const [pyear, setPyear] = useState(undefined)
	const [pepisode, setPepisode] = useState(undefined)
	const [ptype, setPtype] = useState(undefined)
	const [pseason, setPseason] = useState(undefined)

	function handleSubmit(e){
		e.preventDefault()
		setLoading(true)
		setName(pname)
		setYear(pyear)
		setType(ptype)
		setSeason(pseason)
		setEpisode(pepisode)
		setPlot(pplot)
	}
	function handleSelect(e){
		setPtype(e)
	}
	function handleSelect2(e){
		setPplot(e)
	}
	useEffect(()=> {
		axios.get(`https://www.omdbapi.com/`, {
		params:{
			t: name,
			type: type,
			y: year,
			Season: season,
			Episode: episode,
			plot: plot,
			apikey: "85835f53"
		}
	})
		.then(response => {
			console.log(response.data)
			setTitleResults(response.data)
			setLoading(false)
			if(response.data.Response !== 'False'){
				setRedirect(true)
			}
		})
		.catch(err => {
			setError(err);
			console.log(err)
		});
}, [year, name, type, plot, season, episode, setTitleResults])

	if(loading){
		return (
			<div style={{display: "grid", placeItems: "center"}}>
				<Spinner animation="grow" />
			</div>
		)
	}
	if(error){
		return <div>error...</div>
	}
	return(		
		<Container className="pt-5">
			{redirect && <Redirect to='/titleResult'/>}
			<h1 className="text-center pb-5">
				<Badge variant="dark">Search by Title</Badge>
			</h1>
			<Form onSubmit={handleSubmit}>
				<Container style={{width: "50%"}}>
					<Form.Group>
						<Form.Control 
							type="text"
							placeholder="Search by Title or Id"
							value={pname}
							onChange={(e) => setPname(e.target.value)}
							required
						/>
					</Form.Group>
					<Form.Group>
						<Form.Control 
							type="number"
							min="1900"
							max="2021"
							placeholder="Enter release year"
							value={pyear}
							onChange={(e) => setPyear(e.target.value)}
						/>
					</Form.Group>
					<Form.Group>
					<Form.Control 
						type="number"
						placeholder="Enter Season"
						value={pseason}
						onChange={(e) => setPseason(e.target.value)}
					/>
				</Form.Group>
					<Form.Group>
						<Form.Control 
							type="number"
							placeholder="Enter episode"
							value={pepisode}
							onChange={(e) => setPepisode(e.target.value)}
						/>
					</Form.Group>
					<Dropdown className="pt-2">
						<Dropdown.Toggle variant="dark" id="dropdown-basic">
							{ptype || "Select Type"}
						</Dropdown.Toggle>
						<Dropdown.Menu>
							<Dropdown.Item eventKey="Movie" onSelect={handleSelect}>Movie</Dropdown.Item>
							<Dropdown.Item eventKey="Series" onSelect={handleSelect}>Series</Dropdown.Item>
							<Dropdown.Item eventKey="Episode" onSelect={handleSelect}>Episode</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
					<Dropdown className="py-2">
						<Dropdown.Toggle variant="dark" id="dropdown-basic">
							{pplot || "Select Plot Type"}
						</Dropdown.Toggle>
						<Dropdown.Menu>
							<Dropdown.Item eventKey="Short" onSelect={handleSelect2}>Short</Dropdown.Item>
							<Dropdown.Item eventKey="Full" onSelect={handleSelect2}>Full</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</Container>
				<div className="d-flex justify-content-center" >
					<Button type="submit" variant="dark">Search</Button>
				</div>
			</Form>
		</Container>
	)
}
