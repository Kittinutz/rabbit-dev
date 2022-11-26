import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import * as React from "react";

export default function CardInfo({
  title = "",
  description = "",
  imgCover = "",
  imgAlter = "",
}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="250" image={imgCover} alt={imgAlter} />
      <CardContent>
        <Typography variant="h5" color="text.primary">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
