const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  brand: String,
  model: String,
  Performance: Object,
  Brakes: Object,
  Wheels: Object,
  Dimensions: Object,
  ManufacturerWarranty: Object
});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports = Vehicle;
