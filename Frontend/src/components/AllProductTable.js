import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import "./AllProductsTable.css";
import { API } from "../App";

export default function AllProductTable() {
  const [allProduct, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
  API.get("/api/product/getProduct").then((res) => {
      setAllProducts(res.data.product);
      setLoading(false);
    });
  }, []);

  const handleCreate = () => {
    navigate("/dash");
  };

  return (
    <div className="all-product-table-container">
      {loading ? (
        <div className="loading-container">
          <CircularProgress />
        </div>
      ) : (
        <>
          <div className="button-container">
            <Button
              onClick={handleCreate}
              variant="contained"
              style={{ backgroundColor: "black", color: "#fff" }}
            >
              Add New Product
            </Button>
          </div>

          <TableContainer component={Paper} className="table-container">
            <Table className="custom-table" aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell align="right">Name</TableCell>
                  <TableCell align="right">Description</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Category</TableCell>
                  <TableCell align="right">Create Date</TableCell>
                  <TableCell align="right">Image</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {allProduct.map((row) => (
                  <TableRow key={row._id} className="table-row">
                    <TableCell component="th" scope="row">
                      {row._id}
                    </TableCell>
                    <TableCell align="right">{row.name}</TableCell>
                    <TableCell align="right">{row.description}</TableCell>
                    <TableCell align="right">{row.price}</TableCell>
                    <TableCell align="right">{row.category}</TableCell>
                    <TableCell align="right">{row.createdAt}</TableCell>
                    <TableCell align="right" className="hoverable-cell">
                      <div className="table-row">
                        <img
                          src={row.image}
                          alt={row.name}
                          className="product-image"
                        />
                        <div className="overlay">
                         
                          <div className="icons">
                            <a
                              href={row.image}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="icon"
                            >
                              <FontAwesomeIcon icon={faImage} />
                            </a>
                          </div>
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </div>
  );
}
