"use client";
import { CirclePlus } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField, Select, Description, Header, ListBox, Separator } from "@heroui/react";


const AddTask = ({ createATask }) => {
    return (
        <Modal>
            <Button variant="secondary">Add a Task</Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <CirclePlus className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading>Contact Us</Modal.Heading>

                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form action={createATask} className="flex flex-col gap-4">
                                    <TextField className="w-full" name="name" type="text">
                                        <Label>title</Label>
                                        <Input name="name" placeholder="Enter title" />
                                    </TextField>

                                    {/* select 1 */}

                                    <Select name="priority"  className="w-[256px]" placeholder="Select one">
                                        <Label>Priority</Label>
                                        <Select.Trigger>
                                            <Select.Value />
                                            <Select.Indicator />
                                        </Select.Trigger>
                                        <Select.Popover>
                                            <ListBox>
                                                <ListBox.Item id="low" textValue="Low">
                                                    Low
                                                    <ListBox.ItemIndicator />
                                                </ListBox.Item>
                                                <ListBox.Item id="medium" textValue="Medium">
                                                    Medium
                                                    <ListBox.ItemIndicator />
                                                </ListBox.Item>
                                                <ListBox.Item id="high" textValue="High">
                                                    High
                                                    <ListBox.ItemIndicator />
                                                </ListBox.Item>

                                            </ListBox>
                                        </Select.Popover>
                                        <Description>Select your state of residence</Description>
                                    </Select>

                                    {/* select 2 */}

                                    <Select name="status" className="w-[256px]" placeholder="Select one">
                                        <Label>Status</Label>
                                        <Select.Trigger>
                                            <Select.Value />
                                            <Select.Indicator />
                                        </Select.Trigger>
                                        <Select.Popover>
                                            <ListBox>
                                                <ListBox.Item id="pending" textValue="Pending">
                                                    pending
                                                    <ListBox.ItemIndicator />
                                                </ListBox.Item>
                                                <ListBox.Item id="inProgress" textValue="InProgress">
                                                    In-progress
                                                    <ListBox.ItemIndicator />
                                                </ListBox.Item>
                                                <ListBox.Item id="completed" textValue="Completed">
                                                    Completed
                                                    <ListBox.ItemIndicator />
                                                </ListBox.Item>

                                            </ListBox>
                                        </Select.Popover>
                                        <Description>Select your state of residence</Description>
                                    </Select>

                                    {/* footer */}
                                    <TextField className="w-full" name="description" type="text">
                                        <Label>Task Description</Label>
                                        <Input name="description" placeholder="Enter your Description" />
                                    </TextField>

                                    <Modal.Footer>
                                        <Button slot="close" variant="secondary">
                                            Cancel
                                        </Button>
                                        <Button type="submit" >Submit Task</Button>
                                    </Modal.Footer>
                                </form>
                            </Surface>
                        </Modal.Body>

                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default AddTask;