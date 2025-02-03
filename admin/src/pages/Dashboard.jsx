import {
  Card,
  Title,
  Text,
  Tab,
  TabList,
  TabGroup,
  TabPanel,
  TabPanels,
  BarChart,
  LineChart,
  DonutChart,
} from "@tremor/react";
import {
  CurrencyDollarIcon,
  ShoppingCartIcon,
  UserGroupIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";

const salesData = [
  {
    date: "Jan 23",
    Sales: 2890,
    Orders: 35,
  },
  {
    date: "Feb 23",
    Sales: 2756,
    Orders: 42,
  },
  // Add more data points
];

const productCategories = [
  { name: "Electronics", sales: 456 },
  { name: "Clothing", sales: 351 },
  { name: "Books", sales: 271 },
  { name: "Sports", sales: 191 },
];

const stats = [
  {
    name: "Total Revenue",
    value: "$45,231",
    icon: CurrencyDollarIcon,
    change: "+12.3%",
    changeType: "positive",
  },
  {
    name: "Total Orders",
    value: "356",
    icon: ShoppingCartIcon,
    change: "+8.2%",
    changeType: "positive",
  },
  {
    name: "Total Customers",
    value: "2,789",
    icon: UserGroupIcon,
    change: "+15.1%",
    changeType: "positive",
  },
  {
    name: "Total Products",
    value: "489",
    icon: ShoppingBagIcon,
    change: "+6.7%",
    changeType: "positive",
  },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.name} decoration="top" decorationColor="blue">
            <div className="flex items-center justify-between">
              <div>
                <Text>{stat.name}</Text>
                <Title className="mt-2">{stat.value}</Title>
                <Text className={
                  stat.changeType === "positive" ? "text-green-600" : "text-red-600"
                }>
                  {stat.change}
                </Text>
              </div>
              <stat.icon className="w-12 h-12 text-gray-400" />
            </div>
          </Card>
        ))}
      </div>

      {/* Charts */}
      <TabGroup>
        <TabList>
          <Tab>Overview</Tab>
          <Tab>Categories</Tab>
          <Tab>Analytics</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <div className="mt-6">
              <Card>
                <Title>Sales Overview</Title>
                <LineChart
                  className="mt-4 h-80"
                  data={salesData}
                  index="date"
                  categories={["Sales", "Orders"]}
                  colors={["blue", "green"]}
                  valueFormatter={(value) => "$" + value}
                  yAxisWidth={60}
                />
              </Card>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mt-6">
              <Card>
                <Title>Sales by Category</Title>
                <DonutChart
                  className="mt-4 h-80"
                  data={productCategories}
                  category="sales"
                  index="name"
                  valueFormatter={(value) => "$" + value}
                  colors={["blue", "cyan", "indigo", "violet"]}
                />
              </Card>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mt-6">
              <Card>
                <Title>Monthly Revenue</Title>
                <BarChart
                  className="mt-4 h-80"
                  data={salesData}
                  index="date"
                  categories={["Sales"]}
                  colors={["blue"]}
                  valueFormatter={(value) => "$" + value}
                  yAxisWidth={60}
                />
              </Card>
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
}
