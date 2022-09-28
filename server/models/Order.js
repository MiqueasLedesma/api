const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "order",
    {
      orderDate:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },
      paymentType:{
        type: DataTypes.ENUM('Efectivo','Tarjeta'),
        defaultValue: 'Efectivo'
      },
      shippingType:{
        type: DataTypes.ENUM('Tienda','Domicilio'),
        defaultValue: 'Tienda'
      },
      shippingCost:{
        type: DataTypes.FLOAT,
        defaultValue: 0
      },
      subTotal:{
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      discount:{
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      total:{
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      status :{
        type: DataTypes.ENUM('Procesando Pago','Preparando Envio', 'Enviado','Completado','Anulado'),
        defaultValue: 'Procesando Pago'
      }
    }
  )
};
