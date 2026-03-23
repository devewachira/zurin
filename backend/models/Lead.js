import { DataTypes } from 'sequelize';
import sequelize from '../db/index.js';

const Lead = sequelize.define('Lead', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  phone: {
    type: DataTypes.STRING,
  },
  services: {
    type: DataTypes.TEXT, // Using TEXT for broader compatibility
    defaultValue: '[]',
    get() {
      const rawValue = this.getDataValue('services');
      try {
        return rawValue ? JSON.parse(rawValue) : [];
      } catch (e) {
        return [];
      }
    },
    set(val) {
      this.setDataValue('services', JSON.stringify(val));
    }
  },
  message: {
    type: DataTypes.TEXT,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  timestamps: false,
  tableName: 'leads',
  freezeTableName: true
});

export default Lead;
