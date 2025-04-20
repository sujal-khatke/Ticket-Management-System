export const isAgent = (req, res, next) => {
    if (req.user.role !== "agent") {
      return res.status(403).json({ message: "Access denied" });
    }
    next();
  };
  