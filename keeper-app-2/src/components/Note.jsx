import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const Note = ({ title, content }) => (
    <Card sx={{ mb: 2 }}>
        <CardContent>
            <Typography variant="h5" component="div">
                {title}
            </Typography>
            <Typography variant="body2">{content}</Typography>
        </CardContent>
    </Card>
);

export default Note;
