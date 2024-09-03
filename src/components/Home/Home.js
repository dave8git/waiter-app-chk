import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import TableInfo from "../TableInfo/TableInfo";

const Home = () => {

    const tables = useSelector(state => state.tables);

    return (
        <>
            {tables.loading === true ? <h1>Loading...</h1> : tables.data.map(table => <TableInfo {...table}/>) }
        </>
    );
  }
  
  export default Home;