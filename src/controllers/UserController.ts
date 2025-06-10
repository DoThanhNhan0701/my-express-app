import { Request, Response } from "express";
import axios from "axios";

export class UserController {
  /**
   * @swagger
   * /users:
   *   post:
   *     summary: Create a user
   *     responses:
   *       201:
   *         description: User created
   */

  public createUser(req: Request, res: Response): void {
    res.status(201).send("User created");
  }

  /**
   * @swagger
   * /users/{id}:
   *   get:
   *     summary: Get a user by ID
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: string
   *     responses:
   *       200:
   *         description: User details
   */
  public getUser(req: Request, res: Response): void {
    // Logic to get a user
    res.status(200).send("User details");
  }

  /**
   * @swagger
   * /theloai:
   *   get:
   *     summary: Get theloai from external API
   *     parameters:
   *       - in: query
   *         name: count
   *         schema:
   *           type: integer
   *           default: 1
   *         required: false
   *         description: Number of times to call the external API
   *     responses:
   *       200:
   *         description: List of theloai
   */
  public async getTheLoai(req: Request, res: Response): Promise<void> {
    try {
      const count = parseInt(req.query.count as string) || 1;
      const results = [];

      for (let i = 0; i < count; i++) {
        await axios.get(
          "https://www.sapo.vn/blog/api/get_feed?limit=1000&notIn=27,30,25,31,32,33,34,35,36"
        );
        results.push({
          message: `Gọi lần ${i + 1} ok`,
          response: [],
          count: i + 1,
        });

        console.log(`Message call ${i + 1} ok`);
      }

      res.status(200).json(results);
    } catch (error) {
      res.status(500).json({ message: "Error fetching theloai", error });
    }
  }
}
