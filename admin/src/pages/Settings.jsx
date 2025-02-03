import {
  Card,
  Title,
  Text,
  TextInput,
  Button,
  Switch,
  Select,
  SelectItem,
  Divider,
  Badge,
  Grid,
  Col,
  Metric,
  Color,
} from "@tremor/react";
import { useState } from "react";
import { FiShield, FiGlobe, FiBell, FiBox, FiTruck, FiUsers, FiCreditCard, FiSettings } from "react-icons/fi";

export default function Settings() {
  const [theme, setTheme] = useState("light");
  const [loading, setLoading] = useState(false);

  const handleSave = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="space-y-6 pb-8">
      <div className="flex justify-between items-center">
        <div>
          <Title className="text-2xl font-bold">Settings</Title>
          <Text className="text-gray-500">Manage your store preferences and settings</Text>
        </div>
        <Button 
          size="lg"
          variant="primary" 
          className="btn hover-lift"
          loading={loading}
          onClick={handleSave}
        >
          Save Changes
        </Button>
      </div>

      <Grid numItems={1} numItemsSm={2} numItemsLg={3} className="gap-6">
        {/* Quick Actions */}
        <Card decoration="top" decorationColor="indigo" className="hover-lift">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-indigo-100 rounded-lg">
              <FiSettings className="w-6 h-6 text-indigo-600" />
            </div>
            <div>
              <Title>Quick Actions</Title>
              <Text className="text-gray-500">Frequently used settings</Text>
            </div>
          </div>
          <div className="mt-4 space-y-2">
            <Button variant="light" className="w-full text-left justify-start">
              Clear Cache
            </Button>
            <Button variant="light" className="w-full text-left justify-start">
              Backup Data
            </Button>
            <Button variant="light" className="w-full text-left justify-start">
              System Status
            </Button>
          </div>
        </Card>

        {/* Store Performance */}
        <Card decoration="top" decorationColor="emerald" className="hover-lift">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-emerald-100 rounded-lg">
              <FiBox className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <Title>Store Performance</Title>
              <Text className="text-gray-500">Current store metrics</Text>
            </div>
          </div>
          <div className="mt-4">
            <Metric>98.5%</Metric>
            <Text>Uptime this month</Text>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between">
                <Text>Response Time</Text>
                <Badge color="emerald">0.2s</Badge>
              </div>
              <div className="flex justify-between">
                <Text>Error Rate</Text>
                <Badge color="red">0.1%</Badge>
              </div>
            </div>
          </div>
        </Card>

        {/* Integration Status */}
        <Card decoration="top" decorationColor="blue" className="hover-lift">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <FiGlobe className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <Title>Integrations</Title>
              <Text className="text-gray-500">Connected services</Text>
            </div>
          </div>
          <div className="mt-4 space-y-2">
            <div className="flex justify-between items-center">
              <Text>Payment Gateway</Text>
              <Badge color="emerald">Active</Badge>
            </div>
            <div className="flex justify-between items-center">
              <Text>Shipping API</Text>
              <Badge color="emerald">Active</Badge>
            </div>
            <div className="flex justify-between items-center">
              <Text>Analytics</Text>
              <Badge color="yellow">Setup Required</Badge>
            </div>
          </div>
        </Card>
      </Grid>

      {/* Store Settings */}
      <Card decoration="left" decorationColor="indigo" className="hover-lift">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-indigo-100 rounded-lg">
            <FiBox className="w-6 h-6 text-indigo-600" />
          </div>
          <Title>Store Settings</Title>
        </div>
        <div className="mt-4 space-y-4">
          <Grid numItems={1} numItemsSm={2} className="gap-4">
            <div>
              <Text>Store Name</Text>
              <TextInput
                className="input-focus"
                placeholder="Enter store name"
                defaultValue="My E-commerce Store"
              />
            </div>
            <div>
              <Text>Store Email</Text>
              <TextInput
                className="input-focus"
                placeholder="Enter store email"
                defaultValue="store@example.com"
              />
            </div>
          </Grid>
          <Grid numItems={1} numItemsSm={2} className="gap-4">
            <div>
              <Text>Currency</Text>
              <Select defaultValue="usd" className="input-focus">
                <SelectItem value="usd">USD ($)</SelectItem>
                <SelectItem value="eur">EUR (€)</SelectItem>
                <SelectItem value="gbp">GBP (£)</SelectItem>
              </Select>
            </div>
            <div>
              <Text>Timezone</Text>
              <Select defaultValue="utc" className="input-focus">
                <SelectItem value="utc">UTC (Universal)</SelectItem>
                <SelectItem value="est">EST (Eastern)</SelectItem>
                <SelectItem value="pst">PST (Pacific)</SelectItem>
              </Select>
            </div>
          </Grid>
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <Text className="font-medium">Maintenance Mode</Text>
              <Text className="text-gray-500">
                Enable this to put your store in maintenance mode
              </Text>
            </div>
            <Switch />
          </div>
        </div>
      </Card>

      {/* Notification Settings */}
      <Card decoration="left" decorationColor="orange" className="hover-lift">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-orange-100 rounded-lg">
            <FiBell className="w-6 h-6 text-orange-600" />
          </div>
          <Title>Notification Settings</Title>
        </div>
        <div className="mt-4 space-y-4">
          <div className="grid gap-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <Text className="font-medium">Order Notifications</Text>
                <Text className="text-gray-500">
                  Receive notifications for new orders
                </Text>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <Text className="font-medium">Low Stock Alerts</Text>
                <Text className="text-gray-500">
                  Get notified when products are low in stock
                </Text>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <Text className="font-medium">Customer Reviews</Text>
                <Text className="text-gray-500">
                  Notifications for new customer reviews
                </Text>
              </div>
              <Switch />
            </div>
          </div>
        </div>
      </Card>

      {/* Security Settings */}
      <Card decoration="left" decorationColor="red" className="hover-lift">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-red-100 rounded-lg">
            <FiShield className="w-6 h-6 text-red-600" />
          </div>
          <Title>Security Settings</Title>
        </div>
        <div className="mt-4 space-y-4">
          <div>
            <Text className="font-medium">Change Password</Text>
            <div className="mt-2 space-y-2">
              <TextInput
                type="password"
                placeholder="Current password"
                className="input-focus"
              />
              <TextInput
                type="password"
                placeholder="New password"
                className="input-focus"
              />
              <TextInput
                type="password"
                placeholder="Confirm new password"
                className="input-focus"
              />
            </div>
          </div>
          <Divider />
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <Text className="font-medium">Two-Factor Authentication</Text>
                <Text className="text-gray-500">
                  Add an extra layer of security to your account
                </Text>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <Text className="font-medium">Login Notifications</Text>
                <Text className="text-gray-500">
                  Get notified of new login attempts
                </Text>
              </div>
              <Switch defaultChecked />
            </div>
          </div>
        </div>
      </Card>

      {/* Advanced Settings */}
      <Card decoration="left" decorationColor="purple" className="hover-lift">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-purple-100 rounded-lg">
            <FiSettings className="w-6 h-6 text-purple-600" />
          </div>
          <Title>Advanced Settings</Title>
        </div>
        <div className="mt-4 space-y-4">
          <Grid numItems={1} numItemsSm={2} className="gap-4">
            <div>
              <Text>API Key</Text>
              <TextInput
                className="input-focus"
                placeholder="Your API Key"
                defaultValue="sk_test_123456789"
                disabled
              />
            </div>
            <div>
              <Text>Webhook URL</Text>
              <TextInput
                className="input-focus"
                placeholder="Webhook URL"
                defaultValue="https://your-domain.com/webhook"
              />
            </div>
          </Grid>
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <Text className="font-medium">Developer Mode</Text>
              <Text className="text-gray-500">
                Enable advanced debugging features
              </Text>
            </div>
            <Switch />
          </div>
        </div>
      </Card>
    </div>
  );
}
