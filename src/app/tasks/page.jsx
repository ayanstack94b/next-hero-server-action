import AddTask from '@/components/AddTask';
import TasksCard from '@/components/TasksCard';
import { createATask } from '@/lib/actions';
import { getTasks } from '@/lib/tasks';
import React from 'react';

const TasksPage = async () => {
    const tasks = await getTasks()
    return (
        <div className='container mx-auto'>
            <h2 className='text-lg font-semibold text-gray-500 mt-10 '>Task: {tasks.length}</h2>
            <AddTask createATask={createATask}></AddTask>
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