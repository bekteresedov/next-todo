import type { NextApiRequest, NextApiResponse } from 'next'
import { dbConnect } from '../../../config/db';
import todo, { Todo } from '../../../models/todo';

dbConnect();

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
    const method: String | undefined = req.method;

    switch (method) {
        case "GET":
            try {
                const todos: Todo[] = await todo.find({});
                res.status(200).json({
                    success: true,
                    data: todos
                });
            } catch (error) {
                console.log(error);
                res.status(400).json({ success: false, message: error });
            }
            break;
        case "POST":
            try {
                const mes: Todo = await todo.create(req.body);
                res.status(200).json({ success: true, data: mes });
            } catch (error) {
                console.log(error);
                res.status(400).json({ success: false, message: error });
            }
    }
}