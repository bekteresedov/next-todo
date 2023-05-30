import { dbConnect } from '../../../config/db';
import todo, { Todo } from '../../../models/todo';
import type { NextApiRequest, NextApiResponse } from 'next'

dbConnect();

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
    const method: string | undefined = req.method;
    const id: string | string[] | undefined = req.query.id;
    switch (method) {
        case "GET":
            try {
                const tod: Todo | null = await todo.findById(id);
                res.json({ success: true, data: tod });
            } catch (error) {
                res.status(400).json({ success: false, message: error });
            }
            break;
        case "DELETE":
            try {
                const tod: Todo | null = await todo.findByIdAndRemove(id);
                res.json({ success: true, data: tod });
            } catch (error) {
                res.status(400).json({ success: false, message: error });
            }
            break;

        case "PATCH":
            try {
                const tod: Todo | null = await todo.findByIdAndUpdate(
                    { _id: id },
                    { ...req.body }
                );
                res.json({ success: true, data: tod });
            } catch (error) {
                res.status(400).json({ success: false, message: error });
            }
            break;
    }
}