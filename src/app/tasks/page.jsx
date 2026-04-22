import TasksCard from '@/components/TasksCard';
import { getTasks } from '@/lib/tasks';
import React from 'react';

const TasksPage = async () => {
    const tasks = await getTasks()
    return (
        <div>
            <h2 className='text-lg font-semibold text-gray-500 mt-10 container mx-auto'>Task: {tasks.length}</h2>
            <div className="grid grid-cols-3 gap-5 container mx-auto my-5">
                {
                    tasks.map((task) => <TasksCard
                        key={task.id}
                        task={task}
                    ></TasksCard>)
                }
            </div>
        </div>
    );
};

export default TasksPage;