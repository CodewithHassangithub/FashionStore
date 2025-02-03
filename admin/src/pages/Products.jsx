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
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

const products = [
  {
    id: 1,
    name: "Nike Air Max",
    category: "Shoes",
    price: 129.99,
    stock: 45,
    status: "In Stock",
  },
  {
    id: 2,
    name: "Levi's 501 Jeans",
    category: "Clothing",
    price: 89.99,
    stock: 12,
    status: "Low Stock",
  },
  // Add more products
];

export default function Products() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <Title>Products</Title>
        <Button size="sm" variant="primary">Add Product</Button>
      </div>

      <Card>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell>Name</TableHeaderCell>
              <TableHeaderCell>Category</TableHeaderCell>
              <TableHeaderCell>Price</TableHeaderCell>
              <TableHeaderCell>Stock</TableHeaderCell>
              <TableHeaderCell>Status</TableHeaderCell>
              <TableHeaderCell>Actions</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>
                  <Text>{product.name}</Text>
                </TableCell>
                <TableCell>
                  <Text>{product.category}</Text>
                </TableCell>
                <TableCell>
                  <Text>${product.price}</Text>
                </TableCell>
                <TableCell>
                  <Text>{product.stock}</Text>
                </TableCell>
                <TableCell>
                  <Badge
                    color={product.status === "In Stock" ? "green" : "red"}
                    size="sm"
                  >
                    {product.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button
                      size="xs"
                      variant="secondary"
                      icon={PencilIcon}
                      onClick={() => {}}
                    >
                      Edit
                    </Button>
                    <Button
                      size="xs"
                      variant="secondary"
                      color="red"
                      icon={TrashIcon}
                      onClick={() => {}}
                    >
                      Delete
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
