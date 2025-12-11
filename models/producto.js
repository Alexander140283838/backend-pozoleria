const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
    nombre: String,
    precio: Number,
    categoria: String,
    imagen: {
        type: String,
        default: ""
    }
});

// Middleware para limpiar la URL antes de guardar
productoSchema.pre("save", function (next) {
    if (this.imagen) {
        this.imagen = this.imagen.trim();
    }
    next();
});

// Middleware para limpiar la URL en actualizaciones
productoSchema.pre("findOneAndUpdate", function (next) {
    if (this._update.imagen) {
        this._update.imagen = this._update.imagen.trim();
    }
    next();
});

module.exports = mongoose.model('Producto', productoSchema);
