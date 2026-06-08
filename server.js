const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const API_KEY = "kNyt8vinYUHyIzlEodFscntWQ6MRYa9m";

app.get("/events", async (req, res) => {
  try {
    const page = req.query.page || 0;
    const keyword = req.query.keyword || "";
    const countryCode = req.query.countryCode || "";

    const url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${API_KEY}&size=20&page=${page}&locale=*${
      keyword ? `&keyword=${encodeURIComponent(keyword)}` : ""
    }${countryCode ? `&countryCode=${countryCode}` : ""}`;

    console.log(url);

    const response = await fetch(url);

    if (!response.ok) {
      return res.status(response.status).json({
        message: "Ticketmaster error",
        status: response.status,
      });
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
});

app.get("/events/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const url = `https://app.ticketmaster.com/discovery/v2/events/${id}.json?apikey=${API_KEY}`;

    const response = await fetch(url);

    if (!response.ok) {
      return res.status(response.status).json({
        message: "Ticketmaster error",
        status: response.status,
      });
    }

    const data = await response.json();
    res.json(data);

  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
});

app.listen(3000, () => {
  console.log("Server works on http://localhost:3000");
});