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
import { useRouter } from "next/navigation";
import styles from './citysearch.module.css'

interface citySearchProps {
  onCitySelect: (city: string) => void
}


export default function CitySearch( {onCitySelect} : citySearchProps) {
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const debouncedSearch = debounce(async (searchValue: string) => {
    try {
      const response = await fetch(
        `https://evdekho-backend-7f6f8ecf5616.herokuapp.com/api/v1/cities/search/city?q=${encodeURIComponent(
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
    } catch (error) {
      console.log(error);
    }
  }, 300);

  const searchCity = (e: any) => {
    const searchQuery = e.target.value;
    setSearch(searchQuery);
    debouncedSearch(searchQuery);
  };

  const redirectToVehiclePage = (brandName: string, vehicleName: string) => {
    router.push(`electricscooter/${vehicleName}`);
  }

  const handleCitySelect = (city: string) => {
    onCitySelect(city)
  }

  return (
    <Row>
      <Col sm={12} lg={12} md={12}>
        <InputGroup>
          <FormControl
            value={search}
            onChange={(e) => searchCity(e)}
          ></FormControl>
          <Button
            variant="danger"
            onClick={(e) => searchCity(e)}
          >
            Search
          </Button>
        </InputGroup>
        {showResults && (
          <ListGroup className={styles.searchResults}>
            { searchResults.length > 0 && searchResults.map((item: any, index) => (
              <ListGroupItem action key={index} onClick={() => handleCitySelect(item.name)}>{item.name}</ListGroupItem>
            ))}
          </ListGroup>
        )}
      </Col>
    </Row>
  );
}
