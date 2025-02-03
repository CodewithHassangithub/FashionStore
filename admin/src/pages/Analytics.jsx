import {
  Card,
  Title,
  Text,
  AreaChart,
  DonutChart,
  BarList,
  Bold,
  Flex,
  Grid,
} from "@tremor/react";

const salesData = [
  {
    date: "Jan 23",
    "Total Sales": 2890,
    "Online Sales": 1420,
    "Store Sales": 1470,
  },
  {
    date: "Feb 23",
    "Total Sales": 2756,
    "Online Sales": 1398,
    "Store Sales": 1358,
  },
  // Add more data
];

const salesByCategory = [
  { name: "Electronics", sales: 456 },
  { name: "Clothing", sales: 351 },
  { name: "Books", sales: 271 },
  { name: "Sports", sales: 191 },
];

const topProducts = [
  { name: "Nike Air Max", value: 456 },
  { name: "Levi's 501", value: 351 },
  { name: "Sony Headphones", value: 271 },
  { name: "MacBook Pro", value: 191 },
  { name: "iPhone 14", value: 190 },
];

export default function Analytics() {
  return (
    <div className="space-y-6">
      <Title>Analytics</Title>

      <Grid numItems={1} numItemsSm={2} className="gap-6">
        {/* Sales Trend */}
        <Card>
          <Title>Sales Trend</Title>
          <AreaChart
            className="h-72 mt-4"
            data={salesData}
            index="date"
            categories={["Total Sales", "Online Sales", "Store Sales"]}
            colors={["blue", "cyan", "indigo"]}
            valueFormatter={(value) => "$" + value}
            yAxisWidth={60}
          />
        </Card>

        {/* Sales by Category */}
        <Card>
          <Title>Sales by Category</Title>
          <DonutChart
            className="h-72 mt-4"
            data={salesByCategory}
            category="sales"
            index="name"
            valueFormatter={(value) => "$" + value}
            colors={["slate", "violet", "indigo", "rose"]}
          />
        </Card>

        {/* Top Products */}
        <Card>
          <Title>Top Products</Title>
          <Flex className="mt-4">
            <Text>
              <Bold>Product</Bold>
            </Text>
            <Text>
              <Bold>Sales</Bold>
            </Text>
          </Flex>
          <BarList
            data={topProducts}
            valueFormatter={(value) => "$" + value}
            className="mt-2"
          />
        </Card>

        {/* Key Metrics */}
        <Card>
          <Title>Key Metrics</Title>
          <div className="mt-4 space-y-2">
            <Flex>
              <Text>Average Order Value</Text>
              <Text>$120.50</Text>
            </Flex>
            <Flex>
              <Text>Conversion Rate</Text>
              <Text>3.2%</Text>
            </Flex>
            <Flex>
              <Text>Customer Retention</Text>
              <Text>68%</Text>
            </Flex>
            <Flex>
              <Text>Cart Abandonment</Text>
              <Text>24%</Text>
            </Flex>
          </div>
        </Card>
      </Grid>
    </div>
  );
}
