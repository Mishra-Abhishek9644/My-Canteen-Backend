import Feedback from "../models/Feedback.js";

export const submitFeedback = async (req, res) => {
  try {
    const feedback = await Feedback.create({
      user: req.user.id,
      username: req.user.username,
      rating: req.body.rating,
      comment: req.body.comment,
    });
    res.status(201).json({ message: "Feedback submitted", feedback });
  } catch (err) {
    res.status(500).json({ message: "Error submitting feedback", err });
  }
};

export const getAllFeedbacks = async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ createdAt: -1 });
    res.json(feedbacks);
  } catch {
    res.status(500).json({ message: "Error fetching feedback" });
  }
};

export const getUserFeedbacks = async (req, res) => {
  try {
    const feedbacks = await Feedback.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.json(feedbacks);
  } catch {
    res.status(500).json({ message: "Error fetching feedback" });
  }
};
