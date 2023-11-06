import { DataTypes, Model } from "sequelize";
import sequelize from "../config";

class Movie extends Model {
  public id!: string;
  public title!: string;
  public description!: string;
  public releaseYear!: string;
  public length!: number;
  public rating!: number;
  public imageUrl!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Movie.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    releaseYear: {
      type: DataTypes.STRING,
    },
    length: {
      type: DataTypes.INTEGER,
    },
    rating: {
      type: DataTypes.INTEGER,
    },
    imageUrl: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    tableName: "movies",
  }
);

export default Movie;
