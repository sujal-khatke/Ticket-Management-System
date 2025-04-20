import Ticket from "../models/Ticket.js";

export const createTicket = async (req, res) => {
  const ticket = await Ticket.create({ ...req.body, user: req.user._id });
  res.status(201).json(ticket);
};

export const getMyTickets = async (req, res) => {
  const tickets = await Ticket.find({ user: req.user._id });
  res.json(tickets);
};

export const getAllTickets = async (req, res) => {
  const tickets = await Ticket.find().populate("user", "username email");
  res.json(tickets);
};

export const getTicketById = async (req, res) => {
  const ticket = await Ticket.findById(req.params.id);
  if (!ticket) return res.status(404).json({ message: "Ticket not found" });

  if (ticket.user.toString() !== req.user._id.toString() && req.user.role !== "agent") {
    return res.status(403).json({ message: "Unauthorized" });
  }

  res.json(ticket);
};

export const updateTicket = async (req, res) => {
  const ticket = await Ticket.findById(req.params.id);
  if (!ticket) return res.status(404).json({ message: "Not found" });

  if (ticket.user.toString() !== req.user._id.toString() && req.user.role !== "agent") {
    return res.status(403).json({ message: "Unauthorized" });
  }

  Object.assign(ticket, req.body);
  await ticket.save();
  res.json(ticket);
};

export const deleteTicket = async (req, res) => {
  const ticket = await Ticket.findById(req.params.id);
  if (!ticket) return res.status(404).json({ message: "Not found" });

  if (ticket.user.toString() !== req.user._id.toString() && req.user.role !== "agent") {
    return res.status(403).json({ message: "Unauthorized" });
  }

  await ticket.deleteOne();
  res.json({ message: "Ticket deleted" });
};
