import express from "express";
import {
  createTicket,
  getAllTickets,
  getMyTickets,
  getTicketById,
  updateTicket,
  deleteTicket,
} from "../controllers/ticketController.js";
import { protect } from "../middleware/authMiddleware.js";
import { isAgent } from "../middleware/roleMiddleware.js";

const router = express.Router();

router.post("/", protect, createTicket);
router.get("/", protect, isAgent, getAllTickets);
router.get("/my", protect, getMyTickets);
router.get("/:id", protect, getTicketById);
router.put("/:id", protect, updateTicket);
router.delete("/:id", protect, deleteTicket);

export default router;
