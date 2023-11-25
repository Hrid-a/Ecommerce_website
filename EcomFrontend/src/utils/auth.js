import { email, enumType, getOutput, getPipeIssues, maxLength, minLength, object, string, transform } from 'valibot'; // 0.77 kB

const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s]?[0-9]{3}[-\s]?[0-9]{4,6}$/im

export const registerSchema = object({
    firstName: string('Only letters are allowed', [
        minLength(3, "First name must be at least 3 characters")
    ]),
    lastName: string('Only letters are allowed', [
        minLength(3, "Last name must be at least 3 characters")
    ]),
    email: string('Your email must be a string.', [
        minLength(1, 'Please enter your email.'),
        email('The email address is badly formatted.'),
    ]),
    password: string('Your password must be a string.', [
        minLength(8, 'Your password must have 8 characters or more.'),
    ]),
});

export const updateUserSchema = object({
    firstName: string('Only letters are allowed', [
        minLength(3, "First name must be at least 3 characters")
    ]),
    lastName: string('Only letters are allowed', [
        minLength(3, "Last name must be at least 3 characters")
    ]),
    email: string('Your email must be a string.', [
        minLength(1, 'Please enter your email.'),
        email('The email address is badly formatted.'),
    ]),
});

export const loginSchema = object({

    email: string('Your email must be a string.', [
        minLength(1, 'Please enter your email.'),
        email('The email address is badly formatted.'),
    ]),
    password: string('Your password must be a string.', [
        minLength(1, 'Please enter your password.'),
        minLength(8, 'Your password must have 8 characters or more.'),
    ]),
});

export const changePasswordSchema = object({
    password: string('Your password must be a string.', [
        minLength(1, 'Please enter your password.'),
        minLength(8, 'Your password must have 8 characters or more.'),
    ]),
    newPassword: string('Your password must be a string.', [
        minLength(1, 'Please enter your password.'),
        minLength(8, 'Your password must have 8 characters or more.'),
    ]),
    confirmPassword: string('Your password must be a string.', [
        minLength(1, 'Please enter your password.'),
        minLength(8, 'Your password must have 8 characters or more.'),
    ]),
})

export const shippingInfoSchema = object({
    address: string('You should provide address.', [
        minLength(5, 'The address field is required.'),
    ]),
    phone: string('You Should enter your phone number', [
        minLength(1, 'The phone field is required.'),
        minLength(10, 'Wrong phone number'),
        (input) => {
            if (!phoneRegex.test(input)) return getPipeIssues('custom', "This is not a valid phone number", input);
            return getOutput(input);
        }
    ]),
    city: string('You should Provide Your city.', [
        minLength(1, 'The city field is required .'),
    ]),

})
export const contactSchema = object({

    email: string('Your email must be a string.', [
        minLength(1, 'Please enter your email.'),
        email('The email address is badly formatted.'),
    ]),
    fullName: string('Enter Your name.', [
        minLength(1, 'Please enter your password.'),
        minLength(3, 'Please Enter your full name.'),
    ]),
    message: string("Please enter your message here", [
        minLength(4, 'Please enter your message here'),
        maxLength(30, "The message should not exceed 30 characters")
    ])
});

export const productSchema = object({
    name: string('Only letters are allowed', [
        minLength(3, "Product name must be at least 3 characters")
    ]),
    price: transform(string(), (price) => parseFloat(price)),

    stock: transform(string(), (stock) => Number(stock), "invalid type error are comming from here"),
    category: enumType(['decor', 'office', 'living room']),
    description: string("Enter a valid description", [
        minLength(10, "The description should be at least 10 characters")
    ])
})

export const reviewSchema = object({
    comment: string('Only letters are allowed', [
        minLength(5, "Product name must be at least 3 characters")
    ]),
})

export const schema = object({
    email: string('Enter a valid email address', [
        minLength(5, "Enter a valid email address"),
        email("The email address is badly formatted")
    ])
})
