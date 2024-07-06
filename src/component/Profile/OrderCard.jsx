import { Button, Card } from "@mui/material";
import React from "react";

function OrderCard() {
  return (
    <Card className="flex justify-between items-center p-5">
      <div className="flex items-center space-x-5">
        <img
        className="h-16 w-16"
          src="https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=k60TjxKIOIxJpd4F4yLMVjsniB4W1BpEV4Mi_nb4uJU="
          alt=""
        />
        <div className="text-left">
            <p>Biryani</p>
            <p>$546</p>
        </div>
      </div>
      <div>
        <Button desabled className="cursor-not-allowed">completed</Button>
      </div>
    </Card>
  );
}

export default OrderCard;
