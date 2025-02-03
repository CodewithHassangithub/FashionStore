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
import { EnvelopeIcon } from "@heroicons/react/24/outline";

const customers = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    orders: 12,
    totalSpent: 1299.99,
    status: "Active",
    joinDate: "2024-01-01",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    orders: 8,
    totalSpent: 899.99,
    status: "Active",
    joinDate: "2024-01-10",
  },
  // Add more customers
];

export default function Customers() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <Title>Customers</Title>
        <Button size="sm" variant="primary">Add Customer</Button>
      </div>

      <Card>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell>Name</TableHeaderCell>
              <TableHeaderCell>Email</TableHeaderCell>
              <TableHeaderCell>Join Date</TableHeaderCell>
              <TableHeaderCell>Orders</TableHeaderCell>
              <TableHeaderCell>Total Spent</TableHeaderCell>
              <TableHeaderCell>Status</TableHeaderCell>
              <TableHeaderCell>Actions</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map((customer) => (
              <TableRow key={customer.id}>
                <TableCell>
                  <Text className="font-medium">{customer.name}</Text>
                </TableCell>
                <TableCell>
                  <Text>{customer.email}</Text>
                </TableCell>
                <TableCell>
                  <Text>{customer.joinDate}</Text>
                </TableCell>
                <TableCell>
                  <Text>{customer.orders}</Text>
                </TableCell>
                <TableCell>
                  <Text>${customer.totalSpent}</Text>
                </TableCell>
                <TableCell>
                  <Badge
                    color={customer.status === "Active" ? "green" : "gray"}
                    size="sm"
                  >
                    {customer.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Button
                    size="xs"
                    variant="secondary"
                    icon={EnvelopeIcon}
                    onClick={() => {}}
                  >
                    Contact
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
