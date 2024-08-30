import { Container, Typography, Box, Button } from "@material-ui/core";
import Link from "next/link";
import Card from '@material-ui/core/Card';
import * as React from 'react'

const index = () => {
  return (
    <>
  <Container maxWidth="sm">
    <Box my={4}>
      <Typography variant="h4" component="h1" gutterBottom>Home</Typography>
      <Link href="/about">
        <Button variant="contained" color="primary">
        About
        </Button>
      </Link>
      <Link href="/now">
        <Button variant="contained" color="secondary">
        Now
        </Button>
      </Link>
    </Box>
  </Container>
  <Container> 
  {[...Array(3)].map((x, i) =>
    <Card
    key={i} variant="outlined">Card {i}</Card>
  )}
  </Container>
  </>
)}

export default index;