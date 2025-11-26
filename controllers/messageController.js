import Message from "../models/Message.js";

export const submitMessage = async (req, res) => {
  try {
    const msg = await Message.create(req.body);
    res.status(201).json({ message: "Message sent", msg });
  } catch {
    res.status(500).json({ message: "Send failed" });
  }
};

export const getAllMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch {
    res.status(500).json({ message: "Could not fetch messages" });
  }
};
