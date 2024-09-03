import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import TableInfo from "../TableInfo/TableInfo";

const Home = () => {

    const allTables = useSelector(state => state.tables);

    console.log('allTables', allTables);
    return (
        <>
            {allTables.map(table => <TableInfo {...table}/>) }
        </>
    );
  }
  
  export default Home;