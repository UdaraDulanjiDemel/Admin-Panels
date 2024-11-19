import React from 'react';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import { motion } from "framer-motion";

// Components
import Navbar from './Navbar'; // Adjust the import path if necessary
import Footer from './Footer'; // Adjust the import path if necessary

const defaultTheme = createTheme();

export default function Feedback() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{ textAlign: "center", marginTop: "40px", fontSize: "4.0rem" }}
        >
          Get in touch....
        </Typography>

        <Container style={{ display: "flex", justifyContent: "center", marginTop: "40px" ,backgroundImage: "linear-gradient(to bottom, #387ADF, #bfe9ff)", height: "55vh", alignItems: "center", padding: "0 20px"}}>
        
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            style={{ marginRight: "20px", width: "500px", height:"400px" }}
          >
            <Card>
              <CardMedia
                component="img"
                height="140"
                image="/path/to/feedback-image.jpg"
                alt=""
              />
              <CardContent>
                <Typography gutterBottom variant="h4" component="div" marginTop="10px">
                  Feedback Us
                </Typography>
                <Typography variant="body1" color="text.secondary" marginTop="20px">
                  We value your feedback. Please let us know your thoughts and suggestions. Feedback is the cornerstone of growth and improvement, both personally and professionally. This insightful topic delves into the art of providing and receiving feedback effectively. Participants will explore the importance of constructive criticism, learn strategies for delivering feedback that fosters growth, and discover how to receive feedback with an open mind and a growth-oriented attitude.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" href="/feedback">
                  Provide Feedback
                </Button>
              </CardActions>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ marginRight: "20px", width: "500px", height:"400px" }}
          >
            <Card>
              <CardMedia
                component="img"
                height="140"
                image="/path/to/question-image.jpg"
                alt=""
                
              />
              <CardContent>
                <Typography gutterBottom variant="h4" component="div" marginTop="10px">
                  Ask Question
                </Typography>
                <Typography variant="body1" color="text.secondary" height="190px" marginTop="20px">
                  Do you have any questions? Feel free to ask us anything you want to know. If you have any concerns about our service, you can directly email us about it. Our team is here to assist you with inquiries related to refunds, exchanges, deliveries, placing orders, and more. Your satisfaction is our priority, and we strive to address your concerns promptly and effectively.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" href="/askQuestion">
                  Contact Us
                </Button>
              </CardActions>
            </Card>
          </motion.div>
        </Container>
      </motion.div>
      <div style={{ marginTop: '40px' }}>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
