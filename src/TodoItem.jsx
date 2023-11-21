import { Button, Box } from '@mantine/core';
import { IconInfoCircle, IconTrash } from '@tabler/icons-react';
import { Icon } from '@iconify/react';
import baselineDelete from '@iconify/icons-ic/baseline-delete';

const icon = <IconInfoCircle />;

export default function TodoItem({
    urgency,
    taskName,
    onDelete,
    deleteId,
    id
}) {

    return (
        <Box
            style={{
                color: "black",
                backgroundImage: 
                urgency === "Very Important" ? "radial-gradient( circle farthest-corner at 17.1% 22.8%,  rgba(226,24,24,1) 0%, rgba(160,6,6,1) 90% )" : urgency === "Medium Important" ? "linear-gradient(to right, #F09819 0%, #EDDE5D  102%)" : "linear-gradient( 135deg, #81FBB8 10%, #28C76F 100%)",
                padding: "5px",
                paddingLeft: "10px",
                borderRadius: "12px",
                fontWeight: "500",
                display: "grid",
                placeItems: "center left",
                fontSize: "24px",
                textTransform: "capitalize",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                opacity: deleteId === id ? 0 : 1,
                transition: "0.2s opacity ease-in-out",
            }}
            icon={icon}
            onClick={onDelete}
        >
            {taskName}
            <Button
                type="button"
                onClick={onDelete}
                style={{
                    minWidth: "none",
                    minHeight: "none",
                    padding: "0px"
                }}
                variant="subtle"
            >
                <Icon width={25} height={25} color="#bbb" icon={baselineDelete} />
            </Button>
        </Box>
    );
}
