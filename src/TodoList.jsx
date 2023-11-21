import { useState } from "react";
import { TextInput, Title, Highlight, Stack, Select, Button, Box, Flex } from "@mantine/core";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const [newItem, setNewItem] = useState("");
  const [urgency, setUrgency] = useState("Very Important");
  const [deleteId, setDeleteId] = useState(null);
  const [items, setItems] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setNewItem("")
    setItems((prev) => [
      ...prev,
      {
        taskName: newItem,
        urgency,
        id: new Date().getTime()
      },
    ]);
  };

  const handleDelete = (id) => () => {
    setDeleteId(id)
    setTimeout(() => {
      setItems(prev => prev.filter(item => item.id!== id));
      setDeleteId(null)
    }, 250)
  };

  return (
    <main>
      <form
        onSubmit={handleSubmit}
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "top",
          alignItems: "left",
          gap: "20px",
          padding: "60px",
        }}
      >
        <Highlight
          ta="center"
          style={{
            fontSize: "45px",
          }}
          highlight={["IA", "Computer"]}
          highlightStyles={{
            backgroundImage:
              'linear-gradient(to right, #4facfe 0%, #00f2fe 100%)',
            fontWeight: 700,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Computer Science Mock IA Project
        </Highlight>
        <TextInput
          autoFocus
          autoComplete="off"
          value={newItem}
          onChange={(event) => {
            setNewItem(event.target.value);
          }}
          style={{
            width: "100%",
            height: "max-content",
            display: "block",
            flex: "none",
          }}
          radius="lg"
          size="lg"
          type="text"
          placeholder="New Task"
          id="new-item"
        />
        <Box
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            alignItems: "end",
            height: "max-content"
          }}
        >
          <Select
            label="Select Urgency"
            placeholder="Select urgency"
            withAsterisk
            data={[
              { label: "Very Important", value: "Very Important", color: "red" },
              { label: "Medium Important", value: "Medium Important", color: "green" },
              { label: "Low Important", value: "Low Important", color: "yellow" },
            ]}
            id="urgency"
            radius="lg"
            size="lg"
            style={{
              width: "50%",
              height: "max-content",
              display: "block",
              flex: "none",
            }}
            styles={{
              "label": {
                paddingLeft: "12px"
              }
            }}
            value={urgency}
            onChange={(selected) => setUrgency(selected)}
          />
          <Button type="submit"
            id="main-button"
            radius="lg"
            size="lg"
            style={{  
              height: "50px",
              width: "50%",
              fontWeight: "normal",
              fontSize: "22px",
                  }}
                  
                  >
              Add Item
          </Button>
        </Box>
        <br />

        <Flex
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "start",
            gap: "4.5px",
          }}
        >
          <Stack
            style={{
              width: "calc(100% - 4.5px - 15px)"
            }}
          >
            <Title
              style={{
                textAlign: "center"
              }}
            >Urgent</Title>
            {
              items
              .filter(task => task.urgency === "Very Important")
              .map((item, index) => (
                <TodoItem id={item.id} deleteId={deleteId} key={`todoitem-${index}`} urgency={item.urgency} taskName={item.taskName} onDelete={handleDelete(item.id)} 
                />
              ))
            }
          </Stack>
          <div style={{
            height: "calc(100% - 60px)",
            width: "1px",
            background: "#999",
            alignSelf: "end"
          }}></div>
          <Stack
            style={{
              width: "calc(100% - 4.5px - 15px)"
            }}
          >
            <Title
              style={{
                textAlign: "center"
              }}
            >Todo</Title>
            {
              items
              .filter(task => task.urgency !== "Very Important")
              .map((item, index) => (
                <TodoItem id={item.id} deleteId={deleteId} key={`todoitem-${index}`} urgency={item.urgency} taskName={item.taskName} onDelete={handleDelete(item.id)} 
              />
              ))
            }
          </Stack>
        </Flex>
        
      </form>
      
    </main>
    
  );
}
