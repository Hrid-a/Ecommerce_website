export const signUpInput = [
    {
        id: "firstName",
        label: "first name",
        name: "firstName"
    },
    {
        id: "lastName",
        label: "last name",
        name: "lastName"
    },
    {
        id: "email",
        label: "email",
        name: "email"
    },
    {
        id: "password",
        label: "password",
        name: "password",
        type: "password"
    }
];
export const changePasswordInputs = [
    {
        id: "password",
        label: "Old Password",
        name: "password",
        type: "password"
    },
    {
        type: "password",
        id: "newPassword",
        label: "New Password",
        name: "newPassword"
    },
    {
        id: "confirmPassword",
        label: "confirm New Password",
        name: "confirmPassword",
        type: "password",
    }
];

export const loginInputs = [

    {
        id: "email",
        label: "email",
        name: "email"
    },
    {
        id: "password",
        label: "password",
        name: "password",
        type: "password"
    }
]

export const productInputs = [
    {
        id: "name",
        label: "Product Name",
        name: "name"
    },
    {
        id: "price",
        type: "number",
        label: "Product Price",
        name: "price",
        step: 1
    },
    {
        id: "stock",
        type: "number",
        label: "Stock",
        name: "stock",
        min: "0"
    },
]
export const categories = ["decor", "office", "living room"]

export const contactInputs = [
    {
        id: "fullName",
        label: "Full Name",
        name: "fullName"
    },
    {
        id: "email",
        label: "email",
        name: "email"
    },

]

export const shippingInfo = [
    {
        id: "address",
        label: "Address",
        name: "address",
    },
    {
        id: "city",
        label: "city",
        name: "city",
    },
    {
        id: "phone",
        label: "phone",
        name: "phone",
    },
]


export const chartBoxUser = {
    color: "#8884d8",
    icon: "/userIcon.svg",
    title: "Total Users",
    number: "11.238",
    dataKey: "users",
    percentage: 45,
    chartData: [
        { name: "Sun", users: 400 },
        { name: "Mon", users: 600 },
        { name: "Tue", users: 500 },
        { name: "Wed", users: 700 },
        { name: "Thu", users: 400 },
        { name: "Fri", users: 500 },
        { name: "Sat", users: 450 },
    ],
};

export const chartBoxProduct = {
    color: "skyblue",
    icon: "/productIcon.svg",
    title: "Total Products",
    number: "238",
    dataKey: "products",
    percentage: 21,
    chartData: [
        { name: "Sun", products: 400 },
        { name: "Mon", products: 600 },
        { name: "Tue", products: 500 },
        { name: "Wed", products: 700 },
        { name: "Thu", products: 400 },
        { name: "Fri", products: 500 },
        { name: "Sat", products: 450 },
    ],
};

export const barChartBoxRevenue = {
    title: "Profit Earned",
    color: "#8884d8",
    dataKey: "profit",
    chartData: [
        {
            name: "Sun",
            profit: 4000,
        },
        {
            name: "Mon",
            profit: 3000,
        },
        {
            name: "Tue",
            profit: 2000,
        },
        {
            name: "Wed",
            profit: 2780,
        },
        {
            name: "Thu",
            profit: 1890,
        },
        {
            name: "Fri",
            profit: 2390,
        },
        {
            name: "Sat",
            profit: 3490,
        },
    ],
};

export const barChartBoxVisit = {
    title: "Total Visit",
    color: "#FF8042",
    dataKey: "visit",
    chartData: [
        {
            name: "Sun",
            visit: 4000,
        },
        {
            name: "Mon",
            visit: 3000,
        },
        {
            name: "Tue",
            visit: 2000,
        },
        {
            name: "Wed",
            visit: 2780,
        },
        {
            name: "Thu",
            visit: 1890,
        },
        {
            name: "Fri",
            visit: 2390,
        },
        {
            name: "Sat",
            visit: 3490,
        },
    ],
};

export const accordionData = [
    {
        id: 1,
        title: "How do I know that my products lorem ipsum dolor sit?",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dapibus dignissim turpis nec interdum. Nunc faucibus turpis vitae mi rhoncus, sed interdum mi commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mauris est, sagittis id arcu eu, scelerisque maximus odio."
    },
    {
        id: 2,
        title: "Where can I see my invoices?",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dapibus dignissim turpis nec interdum. Nunc faucibus turpis vitae mi rhoncus, sed interdum mi commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mauris est, sagittis id arcu eu, scelerisque maximus odio."
    },
    {
        id: 3,
        title: "Can I compare prices between tincidunt dui in congue?",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dapibus dignissim turpis nec interdum. Nunc faucibus turpis vitae mi rhoncus, sed interdum mi commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mauris est, sagittis id arcu eu, scelerisque maximus odio."
    },
    {
        id: 4,
        title: "Are there any surcharges?",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dapibus dignissim turpis nec interdum. Nunc faucibus turpis vitae mi rhoncus, sed interdum mi commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mauris est, sagittis id arcu eu, scelerisque maximus odio."
    }
]