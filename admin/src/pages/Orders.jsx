import {
  Card,
  Title,
  Text,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableBody,
  Badge,
  Button,
} from "@tremor/react";
import { EyeIcon } from "@heroicons/react/24/outline";

const orders = [
  {
    id: "#ORD-001",
    customer: "John Doe",
    date: "2024-01-23",
    total: 229.99,
    status: "Delivered",
    items: 3,
  },
  {
    id: "#ORD-002",
    customer: "Jane Smith",
    date: "2024-01-22",
    total: 159.99,
    status: "Processing",
    items: 2,
  },
  // Add more orders
];

const getStatusColor = (status) => {
  switch (status) {
    case "Delivered":
      return "green";
    case "Processing":
      return "yellow";
    case "Cancelled":
      return "red";
    default:
      return "gray";
  }
};

export default function Orders() {
  return (
    <div className="space-y-6">
      <Title>Orders</Title>

      <Card>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell>Order ID</TableHeaderCell>
              <TableHeaderCell>Customer</TableHeaderCell>
              <TableHeaderCell>Date</TableHeaderCell>
              <TableHeaderCell>Items</TableHeaderCell>
              <TableHeaderCell>Total</TableHeaderCell>
              <TableHeaderCell>Status</TableHeaderCell>
              <TableHeaderCell>Actions</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>
                  <Text className="font-medium">{order.id}</Text>
                </TableCell>
                <TableCell>
                  <Text>{order.customer}</Text>
                </TableCell>
                <TableCell>
                  <Text>{order.date}</Text>
                </TableCell>
                <TableCell>
                  <Text>{order.items}</Text>
                </TableCell>
                <TableCell>
                  <Text>${order.total}</Text>
                </TableCell>
                <TableCell>
                  <Badge color={getStatusColor(order.status)} size="sm">
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Button
                    size="xs"
                    variant="secondary"
                    icon={EyeIcon}
                    onClick={() => {}}
                  >
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
