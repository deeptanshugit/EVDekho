"use client";
import { debounce } from "lodash";
import { useState } from "react";
import {
  Button,
  Col,
  FormControl,
  InputGroup,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import styles from './vehiclesearch.module.css'
import { useRouter } from "next/navigation";


export default function VehicleSearch() {
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const debouncedSearch = debounce(async (searchValue: string) => {
    try {

      const response = await fetch(
        `https://evdekho-backend-7f6f8ecf5616.herokuapp.com/api/v1/vehicles/search/vehicle?q=${encodeURIComponent(
          searchValue
        )}`
      );
      const data = await response.json();
      if(data) {
        setSearchResults(data);
      } else {
        setSearchResults([]);
      }
      setShowResults(true);
      console.log(data, "data");
    } catch (error) {
      console.log(error);
    }
  }, 300);

  const searchVehicle = (e: any) => {
    const searchQuery = e.target.value;
    setSearch(searchQuery);
    debouncedSearch(searchQuery);
  };

  const redirectToVehiclePage = (brandName: string, vehicleName: string) => {
    router.push(`electricscooter/${vehicleName}`);
  }


  return (
    <Row>
      <Col sm={12} lg={12} md={12}>
        <InputGroup>
          <FormControl
            aria-label="Example text with button addon"
            aria-describedby="basic-addon1"
            value={search}
            onChange={(e) => searchVehicle(e)}
          ></FormControl>
          <Button
            variant="danger"
            id="button-addon1"
            onClick={(e) => searchVehicle(e)}
          >
            Search
          </Button>
        </InputGroup>
        {showResults && (
          <ListGroup variant="flush" className={styles.searchResults}>
            { searchResults.length > 0 && searchResults.map((item: any, index) => (
              <ListGroupItem action key={index} onClick={() => redirectToVehiclePage(item.brandName, item.modelName.replace(/\s+/g, '').toLowerCase())}>{item.modelName}</ListGroupItem>
            ))}
          </ListGroup>
        )}
      </Col>
    </Row>
  );
}
