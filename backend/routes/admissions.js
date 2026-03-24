const express = require('express');
const multer = require('multer');
const path = require('path');
const Admission = require('../models/Admission');
const { protect } = require('../middleware/auth');

const router = express.Router();

// --- Multer config for admission documents ---
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '..', 'uploads', 'admissions'));
  },
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1e9)}${path.extname(file.originalname)}`;
    cb(null, uniqueName);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
  fileFilter: (req, file, cb) => {
    const allowed = /jpeg|jpg|png|pdf/;
    const ext = allowed.test(path.extname(file.originalname).toLowerCase());
    if (ext) return cb(null, true);
    cb(new Error('Only PDF, JPG, and PNG files are allowed'));
  },
});

// POST /api/admissions — public, submit an application
router.post(
  '/',
  upload.fields([
    { name: 'transferCertificate', maxCount: 1 },
    { name: 'marksheet', maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      const data = req.body;

      if (req.files) {
        if (req.files.transferCertificate) {
          data.transferCertificate = `/uploads/admissions/${req.files.transferCertificate[0].filename}`;
        }
        if (req.files.marksheet) {
          data.marksheet = `/uploads/admissions/${req.files.marksheet[0].filename}`;
        }
      }

      const admission = await Admission.create(data);
      res.status(201).json({ message: 'Application submitted successfully', id: admission._id });
    } catch (error) {
      res.status(500).json({ message: 'Submission failed', error: error.message });
    }
  }
);

// GET /api/admissions — protected, list all applications
router.get('/', protect, async (req, res) => {
  try {
    const admissions = await Admission.find().sort({ createdAt: -1 });
    res.json(admissions);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// PATCH /api/admissions/:id — protected, update application status
router.patch('/:id', protect, async (req, res) => {
  try {
    const { status } = req.body;
    const admission = await Admission.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    if (!admission) {
      return res.status(404).json({ message: 'Application not found' });
    }
    res.json(admission);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
