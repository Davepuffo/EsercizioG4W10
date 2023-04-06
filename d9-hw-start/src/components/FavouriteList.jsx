import { Button } from "react-bootstrap"
import ListGroup from "react-bootstrap/ListGroup"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"

const FavouriteList = () => {

    const favouriteCompanyList = useSelector(state => state.favouriteCompany.content)
    const dispatch = useDispatch()
    return (
        <>
            <h2 className="text-center my-3">Favourite Company:</h2>
            <ListGroup>
                {
                    favouriteCompanyList.map((company, i) => (
                        <ListGroup.Item key={i}><Link to={`/${company}`}>{company}</Link>
                            <Button variant="danger" className="mx-5" onClick={() => {
                                dispatch({
                                    type: 'REMOVE_FROM_LIST',
                                    payload: i,
                                })
                                alert('REMOVE COMPLETE')
                            }}>Remove</Button>
                        </ListGroup.Item>
                    ))
                }

            </ListGroup>
        </>)
}

export default FavouriteList