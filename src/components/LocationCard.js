import React from "react";
import { Card, Icon } from "semantic-ui-react";

export default function LocationCard({ name, type, dimension, residents }) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Description>
          {type} - {dimension}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>{residents.length} Reisdents</Card.Content>
    </Card>
  );
}
